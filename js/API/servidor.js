// Servidor

function EnviarRegistro (nombre,telefono,email)
{
	$.ajax({
  type: "POST",
  url: "http://igitsoft.com/pgtest.php",
  data: "nom="+nombre+"&tel="+telefono+"&email="+email
}).done(function( msg ) {
  if(msg==1)
  {
  navigator.notification.confirm("Datos Guardados Satisfactoriamente",function(botones){
		switch(botones){
		case 1:
		navigator.notification.beep(5);
		break;
		case 2:
		navigator.notification.vibrate(500);
		break;
		}
	},"Titulo","Beep,Vibrar,Salir");
	
	}
	else
	{
		navigator.notification.alert("Los Datos no fueron enviados correctamente",null,"Error de Registro","Aceptar")
		}
});

	}