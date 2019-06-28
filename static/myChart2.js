function renderChart(data, labels) {
    var ctx = document.getElementById("myChart2").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Opioid Deaths by State',
                data: data, 
            }]
        },
    });
}

function renderChartTwo(data, labels) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Unemployment Rate by State',
                data: data, 
            }]
        },
    });
}

$("#renderBtn").click(

    
    function () {
        data = [723, 124, 1211, 356, 4521, 899, 623, 189, 2634, 1206, 157, 212, 1705, 1172, 264, 332, 1077, 777, 216, 1070, 1289, 1762, 517, 336, 1067, 125, 125, 545, 334, 1253, 547, 2300, 1358, 43, 2744, 777, 522, 2732, 247, 701, 63, 1269, 2601, 603, 83, 980, 979, 627, 853, 109];
        labels =  ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
        renderChart(data, labels);
        dataTwo = [6.51, 6.54, 7, 6.39, 7.55, 5.26, 6.71, 6.06, 6.10, 7.37, 4.32, 4.68, 7.3, 5.85, 4.4, 4.71, 7.10, 5.40, 5.75, 5.82, 5.95, 7.31, 4.35, 7.60, 6.23, 4.69, 3.47, 7.72, 4.46, 6.70, 6.58, 6.45, 6.33, 2.7, 5.69, 4.65, 6.94, 5.66, 7.96, 6.01, 3.57, 6.86, 5.20, 3.68, 3.85, 5.14, 6.04, 6.23, 5.66, 4.25];
        renderChartTwo(dataTwo, labels);
    }
);
