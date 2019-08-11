<?php
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $tel = $_POST["tel"];
    $contrasena = $_POST["contrasena"]; 
    $fecha = $_POST["fecha"]; 

    // php:
    //todo lo que esta entre comillas dobles es evaluado
    //todo lo que esta entre comillas simples no

    $link = mysqli_connect('localhost', 'root', '', 'formulario');

    /* comprobar la conexión */
    if (mysqli_connect_errno()) {
        printf("Falló la conexión: %s\n", mysqli_connect_error());
        exit();
    }
    
    if(mysqli_query($link, "INSERT INTO contacto(nombre,correo, telefono, pass, fecha_cumple) VALUES('$nombre', '$correo', '$tel', '$contrasena', '$fecha')")){
        echo 'perfecto';
    }else{
        echo 'problemas';
    }
    exit;
?>