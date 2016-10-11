// JavaScript Document
$(document).ready(function(e) {
    $("#button_login").click(function(e) {
         var usuario = $("#text-CorreoLogin").val();
         var clave = $("#text-PassLogin").val();

         if(usuario != "" && clave != ""){
             re= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
             if(!re.exec(usuario)){
                 alert("Error: La dirección de correo " + email + " es incorrecta.");
             }else{
                  if(usuario == "fireluz@gmail.com" && clave == "12345678"){
                      window.location.href ="#principal";
                  }else{
                      alert("Error: El nombre de usuario o contraseña son incorrectos.");
                  }
             }
         }else{
             alert("Error: Los campos con * son obligatorios.");
         }
    });
    $("#button_validaReg").click(function (e) {
        var email = $("#text-CorreoReg").val();
        var clave = $("#text-PassReg").val();
        var claveConfirma = $("#text-CPassReg").val();
        var nombreUser = $("#text-Nombre").val();
        var aPaterno = $("#text-APaterno").val();
        var aMaterno = $("#text-AMaterno").val();
        var numCel = $("#text-Cel").val();

        if(email != "" && clave != "" && claveConfirma != "" && nombreUser != "" && aPaterno != "" && aMaterno != "" && numCel != ""){
            re= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
            if(!re.exec(email))    {
                alert("Error: La dirección de correo " + email + " es incorrecta.");
            }else{
                if (clave == claveConfirma){
                    if (clave.length > 6){
                        window.location.href ="#terminos";
                    } else{
                        alert("Error: La contraseña debe tener al menos 6 caracteres");
                    }
                }else{
                    alert("Error: La contraseñas no son iguales.");
                }
            }
        }else {
            alert("Error: Los campos con * son obligatorios.");
        }
    });

    $("#button_ExitTerm").click(function (e) {
        window.location.href ="#acceso";
    });
});