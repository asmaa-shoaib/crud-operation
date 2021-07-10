
var employees=[];//list of employees
var inputs//list of inputs in form selected by class
var find=document.getElementById("search");
//to add employee in employee
function addEmployee(){
    var employee;//object of employee
    if (employeeName.value!=""&&employeeAge.value!=""&&employeeSalary.value!=""&&employeeDeg.value!=""){
    employee={
        name:employeeName.value,
        age:employeeAge.value,
        salary:employeeSalary.value,
        degree:employeeDeg.value,
    }
    employees.push(employee);
    localStorage.setItem("employeeList",JSON.stringify(employees))
    clearForm();
    disEmployees();

}
else{
   alert("add employee please")
}}


find.addEventListener("keyup",function(){
  
    search(this.value)
   
})

if (localStorage.getItem("employeeList")==null){
    employees=[];
}else{
    employees=JSON.parse(localStorage.getItem("employeeList"))
    disEmployees()
}


//delet the last employee
function delEmployee(){
    employees.pop();
    localStorage.setItem("employeeList",JSON.stringify(employees))

    disEmployees();

}
function disEmployees(){
    var temp="";
    for (var i=0;i<employees.length;i++){
        temp+="<div class='col-md-4 col-lg-3'><div class='employeeItem bg-white m-3 p-3 shadow-sm rounded'><button class='btn btn-danger float-right' onclick='deletItem("+i+")'>x</button><h2>"+employees[i].name+"</h2><p>"+employees[i].age+"</p><h3>"+employees[i].salary+"</h3><p>"+employees[i].degree+"</p></div></div>"
    }
    var gridSystem=document.getElementById("gridSystem").innerHTML=temp;

}
function clearForm(){
    for(var i=0;i<inputs.length;i++){
        inputs[i].value=""
    }

}


function search(text=""){
    var temp=""
    for(var i=0;i<employees.length;i++){
        if(employees[i].name.toLowerCase().includes(text.toLowerCase())){

            temp+="<div class='col-md-4 col-lg-3'><div class='employeeItem bg-white m-3 p-3 shadow-sm rounded'><button class='btn btn-danger float-right' onclick='deletItem("+i+")'>x</button><h2>"+employees[i].name+"</h2><p>"+employees[i].age+"</p><h3>"+employees[i].salary+"</h3><p>"+employees[i].degree+"</p></div></div>"
        }}
        var gridSystem=document.getElementById("gridSystem").innerHTML=temp;
    
           
        

}

//delete the selected item
function deletItem(index){
    employees.splice(index,1);
    localStorage.setItem("employeeList",JSON.stringify(employees))

    disEmployees();
    
}
var sub=document.getElementById("sub");
var del=document.getElementById("del");
sub.addEventListener("click",function(event){
    event.preventDefault();
    addEmployee()
})
del.addEventListener("click",function(event){
    event.preventDefault();
    delEmployee();
})

var employeeName=document.getElementById("employeeName");
var employeeAge=document.getElementById("employeeAge");
var employeeSalary=document.getElementById("employeeSalary");
var employeeDeg=document.getElementById("employeeDeg");
var employeePic=document.getElementById("employeePic");
inputs=document.getElementsByClassName("form-control");
