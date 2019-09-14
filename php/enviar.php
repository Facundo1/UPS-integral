<?php
 $destino="facundosa123@gmail.com";
 $nombre=$_POST["Nombre"];
 $correo=$_POST["Correo"];
 $telefono=$_POST["Telefono"];
 $mensaje=$_POST["Mensaje"];
 $contenido="Nombre: ".$nombre."\nCorreo: ".$correo. "\nTelefono: ".$telefono. "\nMensaje: ".$mensaje;
 mail($destino,"CLIENTE DE UPS INTEGRAL", $contenido);
 header("Location: ../contact.html");
?>