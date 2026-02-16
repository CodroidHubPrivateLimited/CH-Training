from flask import Flask, render_template, request, redirect, url_for
import os
import pandas as pd

app = Flask(__name__)
USERNAME = "vishal"
PASSWORD = "12345"
def get_csv_data(folder_path):
    data = {}
    if os.path.exists(folder_path):
        for file in os.listdir(folder_path):
            if file.endswith(".csv"):
                path = os.path.join(folder_path, file)
                df = pd.read_csv(path)
                data[file] = df.to_html(classes="table", index=False)
    return data


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        if username == USERNAME and password == PASSWORD:
            return redirect(url_for("home"))
        else:
            return "Invalid Username or Password"

    return render_template("login.html")


@app.route("/home")
def home():
    static_folder = "data/static_data"
    api_folder = "data/api_data"

    static_data = get_csv_data(static_folder)
    api_data = get_csv_data(api_folder)

    return render_template("home.html",
                           static_data=static_data,
                           api_data=api_data)


if __name__ == "__main__":
    app.run(debug=True)