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
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/Project_2.sqlite"
db = SQLAlchemy(app)

Base = automap_base()
Base.prepare(db.engine, reflect=True)

overdoses = Base.classes.overdoses
unemployment = Base.classes.unemployment

session = Session(db.engine)

# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/names")
def names():
    """Return a list of sample names."""

    # Use Pandas to perform the sql query
    stmt = db.session.query(overdoses).statement
    df = pd.read_sql_query(stmt, db.session.bind)

    # Return a list of the column names (sample names)
    return jsonify(list(df.State)[0:])

@app.route("/odoses/<statename>")
def odoses(statename):
    sel = [
        overdoses.State,
        overdoses.Deaths,
        overdoses.Rate   
    ]
    sel2 = [
        unemployment.Avg_Unemployment
    ]
    results = db.session.query(*sel).filter(overdoses.State == statename).all()
    results2 = db.session.query(*sel2).filter(unemployment.State == statename).all()
    
    test = {}
    for result in results:
        test["State"] = result[0]
        test["Deaths"] = result[1]
        test["Rate"] = result [2]
    for result2 in results2:
        test["Avg_Unemployments"]  = result2[0]
    
    print(test)
    return jsonify(test)

# @app.route("/samples/<sample>")
# def samples(sample):
#     """Return `otu_ids`, `otu_labels`,and `sample_values`."""
#     stmt = db.session.query(Samples).statement
#     df = pd.read_sql_query(stmt, db.session.bind)

#     # Filter the data based on the sample number and
#     # only keep rows with values above 1
#     sample_data = df.loc[df[sample] > 1, ["otu_id", "otu_label", sample]]
#     # Format the data to send as json
#     data = {
#         "otu_ids": sample_data.otu_id.values.tolist(),
#         "sample_values": sample_data[sample].values.tolist(),
#         "otu_labels": sample_data.otu_label.tolist(),
#     }
#     return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)