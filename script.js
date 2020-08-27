/*Función que realiza el botón*/

function onFormSubmit(){
	var formData = readFormData();
	/*invoco las funciones */
	insertNewRecord(formData);
	resetForm();

}

/*función que obtiene los valores del formulario*/ 
function readFormData(){
	var formData = {};
	formData["fname"] = document.getElementById("fname").value;
	formData["lname"] = document.getElementById("lname").value;
	formData["email"] = document.getElementById("email").value;
	formData["age"] = document.getElementById("age").value;
	formData["gender"] = document.getElementById("gender").value;
	return formData;
}	

/* función que ingresa los valores a la tabla*/ 
function insertNewRecord(data){
	var table =document.getElementById("show").getElementsByTagName('tbody')[0]; /*se obtiene la tabla inicial */
	var newRow = table.insertRow(table.length);
	/*se incertan los datos en cada celda de la tabla poaición 0-5 */
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.fname;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.lname
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.email;
	cell4 = newRow.insertCell(3);
	cell4.innerHTML = data.age;
	cell5 = newRow.insertCell(4);
	cell5.innerHTML = data.gender;
	cell6 = newRow.insertCell(5);	
	/*botones que podemos usarlos después para realizar metodos update y delete */
	cell6.innerHTML = '<a>Edit</a> <a>Delete</a>';
}

/*función que limpia el formulario cada vez que se ingresa los datos del formulario */
function resetForm(){
	document.getElementById("fname").value ="";
	document.getElementById("lname").value ="";
	document.getElementById("email").value ="";
	document.getElementById("age").value ="";
	document.getElementById("gender").value ="";
	
}

