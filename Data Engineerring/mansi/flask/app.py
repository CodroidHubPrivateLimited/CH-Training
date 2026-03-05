
from flask import Flask, render_template, request, redirect, session, flash
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash
import os
import sys

sys.dont_write_bytecode = True

# ================= APP =================
app = Flask(__name__)
app.secret_key = "your_secret_key"

# ================= DATABASE PATH (LOCAL + RENDER FIX) =================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

if os.environ.get("RENDER"):
    DATABASE = "/opt/render/project/src/data/database.db"
else:
    DATABASE = os.path.join(BASE_DIR, "database.db")

# ================= DATABASE =================
def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


def create_table():
    conn = get_db()
    conn.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    """)
    conn.commit()
    conn.close()


create_table()

# ================= HOME =================
@app.route("/")
def home():
    return render_template("base/home.html")

# ================= SIGNUP =================
@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        email = request.form.get("email").strip()
        username = request.form.get("username").strip()
        password = generate_password_hash(request.form.get("password"))

        try:
            conn = get_db()
            conn.execute(
                "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
                (email, username, password)
            )
            conn.commit()
            conn.close()

            flash("Account created successfully. Please login.", "success")
            return redirect("/login")

        except sqlite3.IntegrityError:
            flash("Email or Username already exists", "error")

    return render_template("signup.html")

# ================= LOGIN =================
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email").strip()
        password = request.form.get("password")

        conn = get_db()
        user = conn.execute(
            "SELECT * FROM users WHERE email = ?",
            (email,)
        ).fetchone()
        conn.close()

        if user and check_password_hash(user["password"], password):
            session["user"] = user["username"]
            return redirect("/dashboard")
        else:
            flash("Invalid email or password", "error")

    return render_template("login.html")

# ================= DASHBOARD =================
@app.route("/dashboard")
def dashboard():
    if "user" in session:
        return render_template("base/dashboard.html", user=session["user"])
    return redirect("/login")

# ================= LOGOUT =================
@app.route("/logout")
def logout():
    session.pop("user", None)
    return redirect("/login")

# ================= RUN =================
if __name__ == "__main__":
    app.run(debug=True, port=5000, host="0.0.0.0")
