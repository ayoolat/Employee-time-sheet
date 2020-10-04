// get the current logged in user from local storage
var _is_Login_Admin = JSON.parse(localStorage.getItem("currentUser")) // object

// get access to all employee record in the company   
let _get_employee_record = _is_Login_Admin[0].employeeDb // string

// to get the data base name in this format : companyName_employees
var _company_db_name = _is_Login_Admin[0].name // string

// parsed version of company record
let _parsed_employee_record = JSON.parse(_get_employee_record) // object


let _employee_localStorage = JSON.parse(localStorage.getItem(`${_company_db_name}_employees`))


/* function to display all record in the local storage */
let _render_record = () => 
{
  var employee_con = "";
  let serialNumber = 0;
  for (i = 0; i <  _employee_localStorage.length; i++)
  {
  
    employee_con += `
    <tr>
      <td>${serialNumber+=1}</td>
      <td> <i class="fas fa-dot-circle status red-status"></i>${ _employee_localStorage[i].name}</td>
      <td>${ _employee_localStorage[i].role}</td>
      <td>090879988383</td>
      <td>Aug 12, 2020 <i class="fas fa-ellipsis-v more-icon"></i></td>
    </tr>
    `
  }

  document.getElementById("_record_board").innerHTML = employee_con;

}

_render_record()

// add new employee

let _add_employee = () =>
{
  let newAdd = {
    "email" : document.getElementById("employee_email").value,
    "name" : document.getElementById("employee_name").value,
    "role" : document.getElementById("employee_role").value,
    "phone" : document.getElementById("employee_phone").value,
    "status" : "Active",
    "user_type" : document.getElementById("employee_phone").value
  }

  if(newAdd.user_type === 1)
  {
    newAdd.user_type = "Co-Admin"
  }
  else if(newAdd.user_type === 2)
  {
    newAdd.user_type = "Internal User"
  }
  else if(newAdd.user_type === 3)
  {
    newAdd.user_type = "Employee"
  }


  alert(`${_employee_localStorage}_employees`)
  _employee_localStorage.push(newAdd);
  localStorage.setItem(`${_company_db_name}_employees`, JSON.stringify(_employee_localStorage))
  _render_record()
}


// search function

let _search_employee = () =>
{
  _look_for = document.getElementById("_search_param").value;
  // do not use let, for or var returns reference error for _employee_localStorage

  // 99999999999999 set option like drop down to collect which type of seacrch
  _employee_localStorage = _employee_localStorage.filter( _finder_ => _finder_.name.toLowerCase() == _look_for);
  
  if(_employee_localStorage.length <= 1)
  {
    
    document.getElementById("_lookup_result").innerHTML = `${_employee_localStorage.length} Record Found <a  class="to-btn btn-deep" onclick="reload_board()">Ok</a>`;
    _render_record()
    
  }
  else
  {

    document.getElementById("_lookup_result").innerHTML = `${_employee_localStorage.length} Records Found <a  class="to-btn" onclick="reload_board()">Ok</a>`;
    _render_record()
  }
}


// reload after search

let reload_board = () =>
{

  location.reload()

}


//  pop up form control


function add_form(){

  form = document.getElementById("employ_form");
  form.style.display = "flex";
  
}
function close_form(){
  document.getElementById("employ_form").style.display = "none";
}

// close form when user click outside the form
// var form = document.getElementById("employ_form");
window.onclick = function(event) {
  if (event.target == form ) {
    form.style.display = "none";
  }
}