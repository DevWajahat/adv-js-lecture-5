// hello
function submitUser(){
var  username = document.getElementById("username").value;
var password= document.getElementById('password').value;
if(username=="")
{
    alert("Please Enter user name.....");
}
else
{
alert("You have Registered...")
window.location='https://uok.edu.pk/'
    
}


}


function passwordValidate(input){
    let chk_length = document.getElementById('chk_length');
    let bool_length;
    let password = input.value;
if(password.length >=11)
{
    chk_length.style="block";
    chk_length.removeAttribute('class');
    chk_length.setAttribute('class', 'alert-success');
    chk_length.innerHTML = "&#10004; Password must be a 11 characters long";
    bool_length = true;

}else{

    chk_length.style="block";
		chk_length.removeAttribute('class');
		chk_length.setAttribute('class', 'alert-danger');
		chk_length.innerHTML = "&#x2716; Password must be a 11 characters long";
		bool_length = false;
}

if(bool_length){
    document.getElementById('submit').removeAttribute('disabled');
}else{
    document.getElementById('submit').setAttribute('disabled', 'disabled');
}







}