const form = document.getElementById("form1")
const submit = form[2];

function getFormvalue() {
    //Write your code here
	fName = form[0].value;
	lName = form[1].value;
	alert(fName +" "+lName);
}

submit.addEventListener('click',()=>{
	getFormvalue(fName,lName);
})