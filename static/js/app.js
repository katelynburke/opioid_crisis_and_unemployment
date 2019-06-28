function buildMetadata(state) {

  // @TODO: Complete the following function that builds the metadata panel

  // Use `d3.json` to fetch the metadata for a sample
  d3.json(`/odoses/${state}`).then(function(statedata) {
    console.log(statedata);
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#state-data");
    // Use `.html("") to clear any existing metadata
    PANEL.html("");
    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(statedata).forEach(([key, value]) => {
      PANEL.append('h6').text(`${key}, ${value}`);
      //console.log(key)
      //console.log(value)
    })
    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);
  })
};

/*
function buildCharts(state) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
  var url = `/odoses/${state}`;
  d3.json(url).then(function(data) {

    // @TODO: Build a Bubble Chart using the sample data
    var x_values = data.State;
    var y_values = data.Deaths;
    var m_size = data.Rate;
    var m_colors = data.State; 
    var t_values = data.Avg_Unemployment;

    var trace1 = {
      x: x_values,
      y: y_values,
      text: t_values,
      mode: 'markers',
      marker: {
        color: m_colors,
        size: m_size
      } 
    };
  
    var data = [trace1];

    var layout = {
      xaxis: { title: "OTU ID"},
    };

    Plotly.newPlot('bubble', data, layout);
  })
}
 

//     // // @TODO: Build a Pie Chart
//     // d3.json(url).then(function(data) {  
//     // var pie_values = data.sample_values.slice(0,10);
//     //   var pie_labels = data.otu_ids.slice(0,10);
//     //   var pie_hover = data.otu_labels.slice(0,10);

//     //   var data = [{
//     //     values: pie_values,
//     //     labels: pie_labels,
//     //     hovertext: pie_hover,
//     //     type: 'pie'
//     //   }];

//     //   Plotly.newPlot('pie', data);

//     // });
//   });   
// }
*/
function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((state) => {
      selector
        .append("option")
        .text(state)
        .property("value", state);
    });
    
    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    /*buildCharts(firstSample);*/
    buildMetadata(firstSample); 
  });
};

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  /*buildCharts(newSample);*/
  buildMetadata(newSample);
};

// Initialize the dashboard
init();