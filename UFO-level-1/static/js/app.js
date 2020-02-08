// from data.js
var tableData = data;

// select tbody 
tbody = d3.select("tbody")

// use Object.entries to get key, value inside of table; loop through them to add to the table 
function displayData(data){
    tbody.text("")
    data.forEach(function(sighting){
        new_tr = tbody.append("tr")
        Object.entries(sighting).forEach(function([key,value]){
            new_td = new_tr.append("td").text(value)
        })
    })
}

displayData(tableData)

// select user's input and the filter button
var dateInputText = d3.select("#datetime")
var button = d3.select("filter-button")

// filter data with the user-inputted date
function clickSelect(){
    // prevent page refresh, just refresh table 
    d3.event.preventDefault();
    // print value that was inputted 
    console.log(dateInputText.property("value"));
    // create new table for filtered data
    var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
    // display new table 
    displayData(new_table);
}

dateInputText.on("change", clickSelect)