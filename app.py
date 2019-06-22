# import necessary libraries
import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

# create instance of Flask app
app = Flask(__name__)
# setup database
# engine = create_engine("sqlite:///db/belly_button_biodiversity.sqlite", echo=False)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///Resources/Project_2.sqlite"
db = SQLAlchemy(app)

Base = automap_base()
Base.prepare(db.engine, reflect=True)



session = Session(db.engine)

# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)