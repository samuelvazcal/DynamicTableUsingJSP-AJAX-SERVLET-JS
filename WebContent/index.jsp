<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="scripts/table_script.js"></script>
</head>
<body>
<div id="wrapper">
<form id="principal" action="MiServlet" method="GET">
<table id="data_table">
		<tr>
			<th>ID</th>
			<th>Name</th>
			<th>Country</th>
			<th>Age</th>
		</tr>

		<tr>
			<td><input type="text" id="new_id"></td>
			<td><input type="text" id="new_name"></td>
			<td><input type="text" id="new_country"></td>
			<td><input type="text" id="new_age"></td>
			<td><input type="button" class="add" onclick="add_row();" value="Add Row"></td>
			<td><button type="button" id="btnABNB">algo</button></td>
		</tr>
	</table>
	<div id="miDiv">ggg</div>
	<input type="text" id="xxxxx">
	<input type="text" id="yyyyy">
</form>
	
</div>
</body>
</html>