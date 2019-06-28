function renderChart(data, labels) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Unemployment Rate',
                data: data, 
            }]
        },
    });
}

$("#renderBtn").click(

    
    function () {
        data = [6.51, 6.54, 7, 6.39, 7.55, 5.26, 6.71, 6.06, 6.10, 7.37, 4.32, 4.68, 7.3, 5.85, 4.4, 4.71, 7.10, 5.40, 5.75, 5.82, 5.95, 7.31, 4.35, 7.60, 6.23, 4.69, 3.47, 7.72, 4.46, 6.70, 6.58, 6.45, 6.33, 2.7, 5.69, 4.65, 6.94, 5.66, 7.96, 6.01, 3.57, 6.86, 5.20, 3.68, 3.85, 5.14, 6.04, 6.23, 5.66, 4.25];
        labels =  ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
        renderChart(data, labels);
    }
);