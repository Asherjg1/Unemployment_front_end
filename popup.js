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

  var values=res["companies"]["total_num_laid_off"]
$(".container.total-num-laid-off").text(values)
console.log(values);
}
