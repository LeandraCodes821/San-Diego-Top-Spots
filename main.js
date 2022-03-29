$(document).ready(function() {

    // write your code here
    
    
    
    // calling a function to retrive data.json
    
    $.getJSON("./data.json", function(data){
    
    
    
     //calling an empty array of items  
    
    let items =[];
    
    //with each data ... do this funtion
    
    $.each(data , function(key, val){
    
    items.push("<tr><td>" + val.name + "</td><td>" + val.description + "</td><td><a target='_blank' href='https://www.google.com/maps?q=" + val.location +"' >link</a></td></tr>")
    
    //for each key val pair inside of data we are creating a tr and td and pushing in name.val
    
    //<a anchor tag = clickable link
    
    // target='_blank' ... means when you click on it will take to a new page
    
    
    
    });
    
    $("table").append(items);
    
    
    
    });
    
    
    
    });