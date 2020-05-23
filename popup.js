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
  getUnemploymentRate(res);
  getTotalCompanyLayoff(res);
}
});
}
function getEmployees(res){

  var values=res["companies"]["total_num_laid_off"]
$(".container.total-num-laid-off").text("Total Number Laid Off: " +values+ " Companies")

}
function getUnemploymentRate(res){

  var values=res["companies"]["unemployment_rate"]
$(".container.unemployment-rate").text("Unemployment Rate: "+values*100+"%")

}
function getTotalCompanyLayoff(res){

  var values=res["companies"]["number_of_companies_laid_off"]
$(".container.num-companies-laid-off").text("Total Number of Companies Laid Off: " +values+ " People")

}
