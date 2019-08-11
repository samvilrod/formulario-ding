function validarForm(){        
    var isValid = validarForm()//la function nos retornara true o false (false si es que no es valido)
        
    if (isValid == false) {
        return; //si es invalido entonces solo damos return, esto sirve para detener la ejecucion, asi ya no se enviaria el ajax
    }
    var xmlhttp;

    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    

var nombre = document.getElementById("fname").value.trim(),
    correo = document.getElementById("email").value.trim(),
    tel = document.getElementById("phone").value.trim(),
    contrasena = document.getElementById("password").value.trim(),
    fecha = document.getElementById("date").value.trim(),      
    expresionCorreo = /\w+@\w+\.+[a-z]/,
    expresionNombre = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/,
    informacionDelUsuario = "Nombre=" + nombre + "&Correo=" + correo + "&Telefono=" + tel + "&Contraseña=" + password + "&Fecha de nacimiento=" + date;

xmlhttp.onreaadystatechange=function(){
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
        resultado.innerHTML = xmlhttp.responseText;
    }
}
xmlhttp.open("POST", "registrarContacto.php", true);
xmlhttp.setRequestHeader("Content-type", "aplication/x-www-form-urlencoded");
xmlhttp.send(informacionDelUsuario);
event.preventDefault();
$.ajax( {
    type: 'post',
    url: 'registrarContacto.php',
    data: ('nombre='+nombre+'&email='+email+'&mensaje='+mensaje),
    cache: false,
    success: function(respuesta) {
        
        if(respuesta==1){
            $('#info').html('Tu mensaje se ha enviado correctamente');
            
        }
        else{
            $('#info').html('Tu mensaje no se ha enviado');
        }
    }
})
//ESTA PARTE DEL DONE ES LO MISMO QUE SUCCESS
.done(function(){
    console.log("success");
    
})
.fail(function(){
    console.log("error");
})


    if(nombre === "" || email === "" || mensaje === ""){
            alert("Todos los campos son obligatorios");
            return false;
    }else if(nombre.length>100){
            alert("El nombre es muy largo, intenta con uno mas corto.");
            return false;
    
    }else if(email.length>100){
            alert("El correo es muy largo.")
            return false;
    
    }
        //mensaje no mas de 280
    else if(mensaje.length>280){
            alert("Tu mensaje es demasiado largo.");
            return false;
    }
        //validar correo electronico
    else if(!expresionCorreo.test(email)){
    
            alert("El correo no es valido");
            return false;
    
    }
        //validar nombre
    else if(!expresionNombre.test(nombre)){
    
            alert("El nombre no es valido");
            return false;
    
    } else {
            //Si llegamos a este punto quiere decir que todo fue valido
            $('#formulario-mensaje').trigger('reset'); //esto limpiara el formulario
            return true;
    }
} 
});