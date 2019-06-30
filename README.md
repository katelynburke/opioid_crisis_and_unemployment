## The Opioid Crisis and the Impact on Unemployment in the United States

By Rishi Hebbar, Katelyn Burke, Xuan He, and Ashraf Al Mamun

### Background Information

According to the National Institute on Drug Abuse, more than 130 people in the United States die each day from an opiod overdose. The opiod crisis has become more severe in the U.S. year after year. The midwestern region saw opioid overdoses increase 70 percent from July 2016 through September 2017. The opioid crisis has an economic burden of approximately $78.5 billion per year in the U.S. This includes the costs of healthcare, loss of productivity, treatment, criminal justice.

We chose to research the trends between opioid overdose deaths and the unemployment rate in the United States. We created a dashboard that displays interactive visualizations comparing tthe overdose rate and unemployment rate by state. 

### Dashboard

- To view the dashboard: Run the Flask App through app.py
 
![dashboard](https://github.com/katelynburke/opioid_crisis_and_unemployment/blob/master/images/dashboard1.png)

### Data Sources

- Called Overdose data API from Kaggle.com - U.S. Opiate Prescription Data
- CSV File for state unemployment rates from The National Conference of State Legislatures
- CSV File for average income by state from Kaggle.com
- Loaded data into an SQLite database using an app called BD Browser

### Coding Approach

- Our goal was to create an informative and interactive dashboard:
  - Overdose rate and unemployment rate over the Leaflet map
  - Using ‘Lollipop’ graphs (D3) to illustrate average income
  - Using the Flask webserver to hold the index page

- Coding Languages Used: Python, Javascript
- Visualization Libraries Used: D3, Leaflet, Chart.js, JavaScript 
- Database Used: SQLite
- Python Pandas to clean the data 

### Data Munging Techniques

- Used Pandas to clean and merge data in the CSV files and calculate the overdose rate and the average income by state 
- Based on the data in CSV files, SQLite database is made through an app called BD Browser (SQLite)
- The SQLite database includes two tables (overdoses and unemployment)
- The SQLite tables are pulled into the Flask app and filtered by state using the Pandas library
- The data is then returned in the form of JSON-ified dictionaries.

### Final Visualizations

**D3**

![d3chart](https://github.com/katelynburke/opioid_crisis_and_unemployment/blob/master/images/lollipop.png)

**Leaflet**

**Chart.js**
![chartjs](https://github.com/katelynburke/opioid_crisis_and_unemployment/blob/master/images/chartjs.png)

### Conclusion

- There seems to be some correlation between the unemployment rate and number of overdose deaths in the U.S.
- While unemployment could be one variable that could impact the overdose death rate, there are other factors that were not measured in this project

- **Next Steps:** Instead of using the http server, we would try to run the D3 server with Flask (this would solve the problem of having the dropdown and D3 graphs working at the same time) 

### Challenges 

- Combining the code and getting all of the graphs to work on the dashboard
- Getting the JSON data that we pulled from the SQLite database to populate in the drop-down
- Ensuring that we were referencing the correct index.html and Javascript files -- which became complicated due to the number of individual files we had  
- Running the Flask app and the Python server at the same time
- Merging changes between different branches on the GitHub

![json](https://github.com/katelynburke/opioid_crisis_and_unemployment/blob/master/images/json.png)



