window.onload=function(){
//getCompanies();
alert("hek")
}
function getCompanies(){
  $.ajax({ 
    url: "http://localhost:3000/api/companies", 
    type: 'GET', 
    dataType: 'json', 

    success: function(res) { 
       alert("hello") 

} 
}); 
}
