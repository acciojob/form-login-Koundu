

function getFormvalue() {
    //Write your code here
	fName = document.querySelector('input[name="fname"]'];
	fName = document.querySelector('input[name="lname"]'];
	alert(fName +" "+lName);
}

document.querySelector('input[type="sbumit"]').addEventListener('click',()=>{
	getFormvalue(fName,lName);
})