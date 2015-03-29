/**
 * Created by keith on 3/28/2015.
 */

function showTestimonies(data){
    console.log(data);
}

function fetchInquirers(id,order){
    $.getJSON('http://rest.net211.com/items/inquirers/' + order + '/' + id,
        function(data){
            console.log(data);
        }
            )
}