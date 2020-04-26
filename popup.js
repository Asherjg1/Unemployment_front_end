window.onload=function(){
getCompanies();
}
function getCompanies(){
$.ajax({
  url: "http://localhost:3000/api/companies",
  type: 'get',
  dataType: 'json',

  success: function(res){
  getEmployees(res);
}
});
}
function getEmployees(res){
  var tne = 0
  var idx
  var values=res['companies']
  for (idx = 0; idx < values.length; idx++){
    console.log(values[idx]['number_of_employees']);
tne+= parseInt(values[idx]['number_of_employees'])
}
console.log(tne);
}
