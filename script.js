

function getFormvalue() {
    //Write your code here
	fName = document.querySelector('input[name="fname"]').value;
	lName = document.querySelector('input[name="lname"]').value;
	alert(fName +" "+lName);
}

document.querySelector('input[type="submit"]').addEventListener('click',(e)=>{
	e.preventDefault();
	getFormvalue();
})