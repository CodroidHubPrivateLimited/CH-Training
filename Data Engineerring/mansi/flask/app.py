from flask import Flask, render_template, request, redirect, session, flash
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash
import os
import sys

sys.dont_write_bytecode = True

# ================= APP =================
app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY", "fallback_secret_key")

# ================= DATABASE PATH =================
if os.environ.get("RENDER"):
    DATABASE = "/data/database.db"
    os.makedirs("/data", exist_ok=True)   # IMPORTANT
else:
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    DATABASE = os.path.join(BASE_DIR, "database.db")


# ================= DATABASE =================
def get_db():
    conn = sqlite3.connect(DATABASE, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    return conn


def create_table():
    try:
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
        print("✅ Database & table ready")
    except Exception as e:
        print("❌ Database error:", e)


create_table()

# ================= HOME =================
@app.route("/")
def home():
    return render_template("base/home.html")


# ================= SIGNUP =================
@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        email = request.form.get("email", "").strip()
        username = request.form.get("username", "").strip()
        password = request.form.get("password", "")

        if not email or not username or not password:
            flash("All fields are required", "error")
            return redirect("/signup")

        hashed_password = generate_password_hash(password)

        try:
            conn = get_db()
            conn.execute(
                "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
                (email, username, hashed_password)
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
        email = request.form.get("email", "").strip()
        password = request.form.get("password", "")

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
    if "user" not in session:
        return redirect("/login")

    return render_template("base/dashboard.html", user=session["user"])


# ================= LOGOUT =================
@app.route("/logout")
def logout():
    session.pop("user", None)
    return redirect("/login")


# ================= RUN (LOCAL ONLY) =================
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
