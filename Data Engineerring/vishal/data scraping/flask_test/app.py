from flask import Flask, render_template, request
import pandas as pd
import os
app = Flask(__name__)
DATA_FOLDER = "data"
@app.route("/")
def home():
    files = [f for f in os.listdir(DATA_FOLDER) if f.endswith(".csv")]
    return render_template("index.html", files=files)
@app.route("/view/<filename>")
def view_file(filename):
    path = os.path.join(DATA_FOLDER, filename)

    if os.path.exists(path):
        df = pd.read_csv(path)
        table = df.to_html(classes="table", index=False)
        return render_template("data.html", table=table, filename=filename)

    return "File not found"
if __name__ == "__main__":
    app.run(debug=True, port=8000)