package com.proyecto.controller;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Properties;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.proyecto.model.Persona;


@WebServlet("/MiServlet")
public class MiServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	PrintWriter salida = response.getWriter();
	//salida.append("abnb");
	
	String nombreBuscado = request.getParameter("txtName");
	//String nombreBuscado = request.getParameter("txtName");
	
	int idPersona;
	String name;
	String country;
	int age;
	
	Connection conn = null;
	Statement stmnt = null;
	ResultSet rs = null;
	
	Properties props = new Properties();
	String nombreArchivo = "config.properties";
	InputStream inputStream = getClass().getClassLoader().getResourceAsStream(nombreArchivo);
	if(inputStream!=null)//si encontro el archivo, carga el archivo en el props
	{
		props.load(inputStream);
	}
	else
	{
		throw new FileNotFoundException("Property file'"+nombreArchivo+"'no se encontro el classpath");
	}
	
	String urlServidor = props.getProperty("urlServidor");
	String usuario = props.getProperty("usuario");
	String password = props.getProperty("password");
	String sentenciaSql = props.getProperty("sentenciaSQL");
	String s2 = sentenciaSql+"'"+nombreBuscado+"'";
	System.out.println("!!!!!"+s2);
	Persona miPersona = new Persona();
	miPersona.setName(request.getParameter("txtName"));
	//miPersona.setCountry(request.getParameter("txtCountry"));
	//miPersona.setAge(Integer.parseInt(request.getParameter("txtAge")));
	
	try {
		Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
		conn = DriverManager.getConnection(urlServidor,usuario,password);
		stmnt = conn.createStatement();
		rs = stmnt.executeQuery(s2);
		//pstmnt.executeUpdate(sentenciaSql);
		
		//rs = stmnt.executeQuery(sentenciaSql);
		//rs.next()extrae fila por fila
		rs.next();
		idPersona = rs.getInt("idPersona");
		name = rs.getString(2);
		country = rs.getString(3);
		age = rs.getInt(4);
		//-->safe & sound
//		response.setContentType("text/html");
//		
//		salida.append("id Producto: "+idPersona);
//		salida.append("<br>");
//		salida.append("nombre Persona: "+name);
//		salida.append("<br>");
//		salida.append("pais Persona: "+country);
//		salida.append("<br>");
//		salida.append("peso Persona: "+age);
//		salida.append("<br>");
		response.setContentType("application/json");
		//>           "{"+"\"nombre\":\""+misDatosPersonales.getNombre()+"\"}"
		//>			salida.append("{\"country\":\""+country+"\"}");
		//salida.append("{\"country\":\""+country+"\",\"age\":\""+age+"\"}");
		  salida.append("{\"country\":\""+country+"\",\"age\":"+age+"}");
	}
	catch(Exception e){
		e.printStackTrace();
	}
}
}
