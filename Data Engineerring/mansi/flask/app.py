from flask import Flask, render_template, request, redirect, session, flash
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash
import sys

sys.dont_write_bytecode = True

app = Flask(__name__)
app.secret_key = "your_secret_key"
DATABASE = "database.db"


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
            email TEXT NOT NULL UNIQUE,
            username TEXT NOT NULL UNIQUE,
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
        email = request.form["email"]
        username = request.form["username"]
        password = generate_password_hash(request.form["password"])

        try:
            conn = get_db()
            conn.execute(
                "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
                (email, username, password)
            )
            conn.commit()
            conn.close()
            flash("Account created successfully!")
            return redirect("/login")

        except sqlite3.IntegrityError:
            flash("Email or Username already exists!")

    return render_template("signup.html")


# ================= LOGIN =================
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]

        conn = get_db()
        user = conn.execute(
            "SELECT * FROM users WHERE email = ?", (email,)
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
    return redirect("/")


# ================= DYNAMIC WEBSITES =================
@app.route("/dynamic-websites")
def dynamic_websites():
    if "user" not in session:
        return redirect("/login")
    return render_template("dynamic/dynamic_websites.html")


from router.dynamic import myntra, Snapdeal, Meesho, ajio, blinkit

SCRAPER_MAP = {
    "myntra": myntra,
    "snapdeal": Snapdeal,
    "meesho": Meesho,
    "ajio": ajio,
    "blinkit": blinkit,
}


@app.route("/view/dynamic/<site>")
def view_dynamic(site):
    if "user" not in session:
        return redirect("/login")

    site = site.lower()
    module = SCRAPER_MAP.get(site)

    headers, rows = module.fetch_data()

    return render_template(
        "dynamic/view_common.html",
        title=f"{site.capitalize()} Data Scraping",
        headers=headers,
        rows=rows
    )


# ================= STATIC WEBSITES =================
from router.Static import amazon, flipkart, bookscrap, ecommers, shopsy, codroidhub2, polo

@app.route("/static-websites")
def static_websites():
    return render_template("Static/Static_websites.html") if "user" in session else redirect("/login")


@app.route("/view/<dataType>/<site>")
def viewFile(dataType, site):
    if "user" not in session:
        return redirect("/login")

    modules = {
        "amazon": amazon,
        "flipkart": flipkart,
        "book": bookscrap,
        "ecommers": ecommers,
        "shopsy": shopsy,
        "codroidhub2": codroidhub2,
        "polo": polo
    }

    module = modules.get(site)
    headers, rows = module.fetch_data()

    return render_template(
        "Static/view_common.html",
        title=site.capitalize(),
        headers=headers,
        rows=rows
    )


# ================= API SERVICES =================
from router.Api import reddit, codroidhub, dummyjson, github, gyansetu

@app.route("/api-services")
def api_services():
    return render_template("api/api_services.html") if "user" in session else redirect("/login")


@app.route("/view/api/<site>")
def view_api(site):
    if "user" not in session:
        return redirect("/login")

    site = site.lower()

    API_MAP = {
        "reddit": reddit,
        "codroidhub": codroidhub,
        "dummyjson": dummyjson,
        "github": github,
        "gyansetu": gyansetu
    }

    module = API_MAP.get(site)
    headers, rows = module.fetch_data()

    return render_template(
        "api/view_common.html",
        title=site.capitalize(),
        headers=headers,
        rows=rows
    )


# ================= EXTRA PAGES =================
@app.route("/Journey")
def Journey():
    return render_template("base/Journey.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/feedback")
def feedback():
    return render_template("feedback.html")


# ================= RUN =================
if __name__ == "__main__":
    app.run(debug=True, port=5000, host="0.0.0.0")
