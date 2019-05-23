var xhr = new XMLHttpRequest();
window.onload=function()
{
	document.getElementById("btnABNB").addEventListener("click",miSubmit);
}

function miSubmit(){
	alert("00000");
	document.getElementById("miDiv").style.backgroundColor="orange";
	var name = document.getElementById("new_name").value;
	var country = document.getElementById("new_country").value;
	var age = document.getElementById("new_age").value;
	//--
	xhr.open("get","MiServlet?txtName="+name+"&txtCountry="+country+"&txtAge="+age);
	//xhr.open("get","Practica3Servlet?txtNombrecillo="+nombre+"&" + "txtApellidilloP="+apellidoP+"&txtApellidilloM="+apellidoM+"&txtEdadcilla="+edad+"&txtPesillo="+peso+"&txtAlturilla="+altura);
	
	xhr.onload=callBack;
	xhr.send(null);
}
var zero=0;
var acum=parseInt(zero);
function callBack()
{
	if(xhr.status==200)
		{
		//console.log(xhr.responseText);
		//console.log(xhr.responseText);
		var s = xhr.responseText;
		console.log(s);
		var s1=JSON.parse(s);
		alert(s1.country);
		document.getElementById("new_country").value=s1.country;
		document.getElementById("new_age").value=s1.age;
		document.getElementById("miDiv").innerHTML=xhr.responseText;
		var res=parseInt(s1.age*1);
		alert(res);
		//var acum=acum+res;
		console.log(acum);
		document.getElementById("xxxxx").value=res;
		acum=acum+res;
		document.getElementById("yyyyy").value=acum;
		//document.getElementById("new_country").value=xhr.responseText;
		}
	
}

function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("country_row"+no);
 var age=document.getElementById("age_row"+no);
	
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("country_row"+no).innerHTML=country_val;
 document.getElementById("age_row"+no).innerHTML=age_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
var tres=parseInt(document.getElementById("new_age").value);
console.log(tres);
var dos=parseInt(no);
console.log(dos);
var uno=parseInt(acum);
console.log(uno);
acum=uno-tres;
 //acum=acum-parseInt(no)-parseInt(document.getElementById("age_row"+no).value);
 console.log(acum);
 document.getElementById("row"+no+"").outerHTML="";
 
 document.getElementById("yyyyy").value=acum
 //document.getElementById("row"+no+"").outerHTML="";
 
}
var cont=0;
function add_row()
{
 cont++;
 var new_name=document.getElementById("new_name").value;
 var new_country=document.getElementById("new_country").value;
 var new_age=document.getElementById("new_age").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td>"+cont+"</td><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_country").value="";
 document.getElementById("new_age").value="";
}