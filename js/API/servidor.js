// Servidor

function EnviarRegistro (nombre,telefono,email,foto)
{
	$.ajax({
  type: "POST",
  url: "http://igitsoft.com/pgtest.php",
  data: "nom="+nombre+"&tel="+telefono+"&email="+email+"&id="+disp()['id']
}).done(function( msg ) {
  if(msg==1)
  {
	 uploadPhoto(foto);
  navigator.notification.confirm("Datos Guardados Satisfactoriamente\n"+disp()['platform'],function(botones){
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