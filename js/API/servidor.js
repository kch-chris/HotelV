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
	 uploadPhoto(foto,nombre);
  	}
	else
	{
		navigator.notification.alert("Los Datos no fueron enviados correctamente",null,"Error de Registro","Aceptar")
		}
});

	}
	
function reservarHB(t,p,h,d)
{
	$.ajax({
  type: "POST",
  url: "http://igitsoft.com/pgtest.php",
  data: "t="+t+"&p="+p+"&h="+h+"&d="+d
}).done(function( msg ) {
  if(msg==1)
  {
	navigator.notification.alert("Reserva Realizada",function(){
		window.location.href='#page';
		},"Reserva","Aceptar")
	}
	else
	{
		navigator.notification.alert("No se pudo sincronizar la reserva,Esperando Conexión a internet",null,"Error de Sincronización","Aceptar")
		}
});

	
	}