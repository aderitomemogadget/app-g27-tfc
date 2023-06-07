function turnOnWifi()
{
	window.location = 'index.html';
	/*if (window.cordova && window.cordova.plugins.settings) {
		console.log('openNativeSettingsTest is active');
		window.cordova.plugins.settings.open("wifi",function() {
			},
			function () {
				console.log('failed to open settings');
			}
		);
	} else {
		console.log('openNativeSettingsTest is not active!');
	}*/
}
function skip_tutorial()
{
	window.location.hash = 'homepage';
}
function verificaPermissao()
{
	if(tokenLogin == null)
	{
		window.location.hash = 'loading-login';
	}
	else
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/logins.php',
			async:false,
			data:{'type':'verificaPermissao','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token") },
			dataType:'html',
			success:function(data)
			{
				if(data > 3)
				{
					showTutorial();
				}
				else
				{
					window.localStorage.setItem("user_permicoes",data);//Vamos guardar o tipo de login

					//Tive de adicionar esta condicao por causa dos redirects do visa
					var hash=location.hash.replace('#','');
					if(hash != 'faturas-pagamentos')window.location.hash = 'homepage';
				}
			},
			error:function()
			{

			}
		});
	}

}

function backButtonByPermission()
{
	var a = '';
	if(tokenLogin == null)
	{
		window.location.hash = 'loading-login';
	}
	else
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/logins.php',
			async:false,
			data:{'type':'verificaPermissao','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token") },
			dataType:'html',
			success:function(data)
			{
				if(data > 3)
				{
					a+='<div class="left back" onclick="window.location.hash=\'homepage\'">'+key_BACK[sLang]+'</div>';
				}
				else
				{
					a+='<div class="left back" onclick="window.location.hash=\'home-gestao\'">'+key_BACK[sLang]+'</div>';
				}
			},
			error:function()
			{

			}
		});
	}

	return a;
}

function homeButtonByPermission()
{
	var a = '';
	if(tokenLogin == null)
	{
		window.location.hash = 'loading-login';
	}
	else
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/logins.php',
			async:false,
			data:{'type':'verificaPermissao','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token") },
			dataType:'html',
			success:function(data)
			{
				if(data > 3)
				{
					//e se ja estou a home page
					a = window.location.hash='';
					a = window.location.hash='homepage';
				}
				else
				{
					//e se ja estou a home page
					a = window.location.hash='';
					a = window.location.hash='homepage';
					//a = window.location.hash='home-gestao';
				}
			},
			error:function()
			{

			}
		});
	}
}

function registo1_step1()
{
	$('#registo-2').html('');
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/logins.php',
		async:false,
		data:{'type':'registo1_step1','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token") },
		dataType:'html',
		success:function(data)
		{
			if(data && data  != -1)
			{				
				$('#registo-1').html(data);				
			}
			else
			{
				//erro
				$('#registo-1').html('<div style="display:block;background-color:#fff"><div class="header"><div style="padding:10px;width:50%;float:left"><img src="img/logo.jpg" border="0" style="width:80px;float:left"></div><div style="padding-right:10px;width:50%;float:left;text-align:right"><img src="img/hello.png" border="0" style="width:80px"></div></div></div><div style="height:20px;background:#fff;">&nbsp;</div><div class="mensagens-container" style="margin-top:-20px;background:#fff;padding-top:20px"><div id="lista-scroll" class="lista-scroll" style="overflow:hidden;overflow-y:scroll"> ERRO <div class="clear"></div><div style="display:block;width:100%;text-align:center;margin-top:20px"><div class="button_reserva cancelar-btn-trad" onclick="goto_to_start()">Voltar</div></div></div></div></div>');
			}
		},
		error:function()
		{
			//erro
			$('#registo-1').html('<div style="display:block;background-color:#fff"><div class="header"><div style="padding:10px;width:50%;float:left"><img src="img/logo.jpg" border="0" style="width:80px;float:left"></div><div style="padding-right:10px;width:50%;float:left;text-align:right"><img src="img/hello.png" border="0" style="width:80px"></div></div></div><div style="height:20px;background:#fff;">&nbsp;</div><div class="mensagens-container" style="margin-top:-20px;background:#fff;padding-top:20px"><div id="lista-scroll" class="lista-scroll" style="overflow:hidden;overflow-y:scroll"> ERRO <div class="clear"></div><div style="display:block;width:100%;text-align:center;margin-top:20px"><div class="button_reserva cancelar-btn-trad" onclick="goto_to_start()">Voltar</div></div></div></div></div>');
		}
	});
}
function registo2_step1()
{
	$('#registo-1').html('');
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/logins.php',
		async:false,
		data:{'type':'registo2_step1','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token") },
		dataType:'html',
		success:function(data)
		{
			if(data && data != -1)
			{				
				$('#registo-2').html(data);				
			}
			else
			{
				//erro
				$('#registo-2').html('<div style="display:block;background-color:#fff"><div class="header"><div style="padding:10px;width:50%;float:left"><img src="img/logo.jpg" border="0" style="width:80px;float:left"></div><div style="padding-right:10px;width:50%;float:left;text-align:right"><img src="img/hello.png" border="0" style="width:80px"></div></div></div><div style="height:20px;background:#fff;">&nbsp;</div><div class="mensagens-container" style="margin-top:-20px;background:#fff;padding-top:20px"><div id="lista-scroll" class="lista-scroll" style="overflow:hidden;overflow-y:scroll"> ERRO <div class="clear"></div><div style="display:block;width:100%;text-align:center;margin-top:20px"><div class="button_reserva cancelar-btn-trad" onclick="goto_to_start()">Voltar</div></div></div></div></div>');
			}
		},
		error:function()
		{
			//erro
			$('#registo-2').html('<div style="display:block;background-color:#fff"><div class="header"><div style="padding:10px;width:50%;float:left"><img src="img/logo.jpg" border="0" style="width:80px;float:left"></div><div style="padding-right:10px;width:50%;float:left;text-align:right"><img src="img/hello.png" border="0" style="width:80px"></div></div></div><div style="height:20px;background:#fff;">&nbsp;</div><div class="mensagens-container" style="margin-top:-20px;background:#fff;padding-top:20px"><div id="lista-scroll" class="lista-scroll" style="overflow:hidden;overflow-y:scroll"> ERRO <div class="clear"></div><div style="display:block;width:100%;text-align:center;margin-top:20px"><div class="button_reserva cancelar-btn-trad" onclick="goto_to_start()">Voltar</div></div></div></div></div>');
		}
	});
}
function registo1_step2()
{
	var condutor_nome = $('#condutor_nome').val();
	var condutor_email = $('#condutor_email').val();
	var nif = $('#nif').val();
	var indicativo = $('#indicativo').val();
	var telemovel = $('#telemovel').val();
	var combustivel = $('#combustivel').val();
	var prof = $('#prof').is(':checked');
	var matricula = $('#matricula').val();
	var morada = $('#morada').val();
	var codpos1 = $('#codpos1').val();
	var codpos2 = $('#codpos2').val();
	var termos1 = $("#termos1").is(':checked');
	var termos2 = $("#termos2").is(':checked');
	var termos3 = $("#termos3").is(':checked');
	var voucher = $('#voucher').val();

	var localidade_txt=$('#localidade').html();

	//Vamos verificar se os campos estao todos preenchidos

	if(condutor_nome == '' || condutor_email == '' || telemovel == '' || morada == '' || codpos1 == '' || codpos2 == '' || matricula == '' || localidade_txt=='')
	{
		var msg = 'Necessita preencher os campos para podermos proceder à sua adesão.';
		
		if(condutor_nome == '')$('#condutor_nome').css("background-color","#fffddf");
		if(condutor_email == '')$('#condutor_email').css("background-color","#fffddf");
		if(indicativo == '')$('#indicativo').css("background-color","#fffddf");
		if(telemovel == '')$('#telemovel').css("background-color","#fffddf");
		if(morada == '')$('#morada').css("background-color","#fffddf");
		if(codpos1 == '')$('#codpos1').css("background-color","#fffddf");
		if(codpos2 == '')$('#codpos2').css("background-color","#fffddf");
		if(matricula == '')$('#matricula').css("background-color","#fffddf");
		
		if(localidade_txt == '')
		{
			msg = 'Localidade não encontrada';
			$('#codpos1').css("background-color","#fffddf");
			$('#codpos2').css("background-color","#fffddf");
		}
		

		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}

		return;
	}

	if(!validateEmail(condutor_email))
	{
		var msg = 'O email introduzido não é válido.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}
		return;
	}


	if(termos1 == false)
	{
		var msg = 'Necessita de concordar com os nossos termos de adesão para podermos proceder à sua adesão.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}

		return;
	}
	if(termos3 == false)
	{
		var msg = 'Necessita de autorizar a recolha de dados pessoais para efeito de criação do seu perfil de cliente por forma a podermos proceder à sua adesão.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}

		return;
	}


	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/logins.php',
		async:false,
		data:{'type':'registo1_step2','condutor_nome':condutor_nome,'condutor_email':condutor_email,'indicativo':indicativo,'telemovel':telemovel,'termos1':termos1,'termos2':termos2,'termos3':termos3,'morada':morada,'codpos1':codpos1,'codpos2':codpos2,'nif':nif,'combustivel':combustivel,'matricula':matricula,'prof':prof,'voucher':voucher,'dp':(new Date()).getTime(),'token':window.localStorage.getItem("token") },
		dataType:'html',
		success:function(data)
		{
			var erro='Pedimos desculpas, mas derivado a problemas técnicos não nos foi possivel realizar esta operação';

			if(data && data  != -1)
			{				
				$('#registo-1').html(data);				
			}
			else
			{
				//erro				
				$('#registo-1').html('<div style="display:block;background-color:#fff"><div class="header"><div style="padding:10px;width:50%;float:left"><img src="img/logo.jpg" border="0" style="width:80px;float:left"></div><div style="padding-right:10px;width:50%;float:left;text-align:right"><img src="img/hello.png" border="0" style="width:80px"></div></div></div><div style="height:20px;background:#fff;">&nbsp;</div><div class="mensagens-container" style="margin-top:-20px;background:#fff;padding-top:20px"><div id="lista-scroll" class="lista-scroll" style="overflow:hidden;overflow-y:scroll"> '+erro+' <div class="clear"></div><div style="display:block;width:100%;text-align:center;margin-top:20px"><div class="button_reserva cancelar-btn-trad" onclick="goto_to_start()">Voltar</div></div></div></div></div>');
			}
		},
		error:function()
		{
			var erro='Pedimos desculpas, mas derivado a problemas técnicos não nos foi possivel realizar esta operação';
			$('#registo-1').html('<div style="display:block;background-color:#fff"><div class="header"><div style="padding:10px;width:50%;float:left"><img src="img/logo.jpg" border="0" style="width:80px;float:left"></div><div style="padding-right:10px;width:50%;float:left;text-align:right"><img src="img/hello.png" border="0" style="width:80px"></div></div></div><div style="height:20px;background:#fff;">&nbsp;</div><div class="mensagens-container" style="margin-top:-20px;background:#fff;padding-top:20px"><div id="lista-scroll" class="lista-scroll" style="overflow:hidden;overflow-y:scroll"> '+erro+' <div class="clear"></div><div style="display:block;width:100%;text-align:center;margin-top:20px"><div class="button_reserva cancelar-btn-trad" onclick="goto_to_start()">Voltar</div></div></div></div></div>');
		}
	});
}

function registo2_step2()
{
	var condutor_nome = $('#condutor_nome').val();
	var condutor_email = $('#condutor_email').val();
	var nif = $('#nif').val();
	var nif2 = $('#nif2').val();
	var indicativo = $('#indicativo').val();
	var telemovel = $('#telemovel').val();
	var combustivel = $('#combustivel').val();
	var prof = $('#prof').is(':checked');
	var matricula = $('#matricula').val();
	var morada = $('#morada').val();
	var codpos1 = $('#codpos1').val();
	var codpos2 = $('#codpos2').val();
	var termos1 = $("#termos1").is(':checked');
	var termos1 = $("#termos1").is(':checked');
	var termos2 = $("#termos2").is(':checked');
	var termos3 = $("#termos3").is(':checked');
	var empresa_nome = $('#empresa_nome').val();
	var certidao = $('#certidao1').val()+'-'+$('#certidao2').val()+'-'+$('#certidao3').val();
	var forma_pagamento = $('#forma_pagamento').val();
	var voucher = $('#voucher').val();

	var localidade_txt=$('#localidade').html();

	
	//Vamos verificar se os campos estao todos preenchidos

	if(condutor_nome == '' || condutor_email == '' || telemovel == '' || morada == '' || codpos1 == '' || codpos2 == '' || matricula == '' || nif == '' || empresa_nome == '' || certidao == '' || localidade_txt=='' || nif2=='')
	{
		var msg = 'Necessita preencher os campos para podermos proceder à sua adesão.';
		
		if(condutor_nome == '')$('#condutor_nome').css("background-color","#fffddf");
		if(condutor_email == '')$('#condutor_email').css("background-color","#fffddf");
		if(indicativo == '')$('#indicativo').css("background-color","#fffddf");
		if(telemovel == '')$('#telemovel').css("background-color","#fffddf");
		if(morada == '')$('#morada').css("background-color","#fffddf");
		if(codpos1 == '')$('#codpos1').css("background-color","#fffddf");
		if(codpos2 == '')$('#codpos2').css("background-color","#fffddf");
		if(matricula == '')$('#matricula').css("background-color","#fffddf");
		if(nif == '')$('#nif').css("background-color","#fffddf");
		if(nif2 == '')$('#nif2').css("background-color","#fffddf");
		if(empresa_nome == '')$('#empresa_nome').css("background-color","#fffddf");
		if(certidao == '')$('#certidao').css("background-color","#fffddf");


		//Vamos verificar se os campos estao todos preenchidos

		if(localidade_txt == '')
		{
			msg = 'Localidade não encontrada';
			$('#codpos1').css("background-color","#fffddf");
			$('#codpos2').css("background-color","#fffddf");
		}

		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}

		return;
	}

	if(!validateEmail(condutor_email))
	{
		var msg = 'O email introduzido não é válido.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}
		return;
	}

	if(termos1 == false)
	{
		var msg = 'Necessita de concordar com os nossos termos de adesão para podermos proceder à sua adesão.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}

		return;
	}
	if(termos3 == false)
	{
		var msg = 'Necessita de autorizar a recolha de dados pessoais para efeito de criação do seu perfil de cliente por forma a podermos proceder à sua adesão.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}

		return;
	}



	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/logins.php',
		async:false,
		data:{'type':'registo2_step2','condutor_nome':condutor_nome,'condutor_email':condutor_email,'empresa_nome':empresa_nome,'certidao':certidao,'forma_pagamento':forma_pagamento,'voucher':voucher,'indicativo':indicativo,'telemovel':telemovel,'termos1':termos1,'termos2':termos2,'termos3':termos3,'morada':morada,'codpos1':codpos1,'codpos2':codpos2,'nif':nif,'nif2':nif2,'combustivel':combustivel,'matricula':matricula,'prof':prof,'dp':(new Date()).getTime(),'token':window.localStorage.getItem("token") },
		dataType:'html',
		success:function(data)
		{
			var erro='Pedimos desculpas, mas derivado a problemas técnicos não nos foi possivel realizar esta operação';

			if(data && data  != -1)
			{				
				$('#registo-2').html(data);				
			}
			else
			{
				$('#registo-2').html('<div style="display:block;background-color:#fff"><div class="header"><div style="padding:10px;width:50%;float:left"><img src="img/logo.jpg" border="0" style="width:80px;float:left"></div><div style="padding-right:10px;width:50%;float:left;text-align:right"><img src="img/hello.png" border="0" style="width:80px"></div></div></div><div style="height:20px;background:#fff;">&nbsp;</div><div class="mensagens-container" style="margin-top:-20px;background:#fff;padding-top:20px"><div id="lista-scroll" class="lista-scroll" style="overflow:hidden;overflow-y:scroll"> '+erro+' <div class="clear"></div><div style="display:block;width:100%;text-align:center;margin-top:20px"><div class="button_reserva cancelar-btn-trad" onclick="goto_to_start()">Voltar</div></div></div></div></div>');
			}
		},
		error:function()
		{
			var erro='Pedimos desculpas, mas derivado a problemas técnicos não nos foi possivel realizar esta operação';			
			$('#registo-2').html('<div style="display:block;background-color:#fff"><div class="header"><div style="padding:10px;width:50%;float:left"><img src="img/logo.jpg" border="0" style="width:80px;float:left"></div><div style="padding-right:10px;width:50%;float:left;text-align:right"><img src="img/hello.png" border="0" style="width:80px"></div></div></div><div style="height:20px;background:#fff;">&nbsp;</div><div class="mensagens-container" style="margin-top:-20px;background:#fff;padding-top:20px"><div id="lista-scroll" class="lista-scroll" style="overflow:hidden;overflow-y:scroll"> '+erro+' <div class="clear"></div><div style="display:block;width:100%;text-align:center;margin-top:20px"><div class="button_reserva cancelar-btn-trad" onclick="goto_to_start()">Voltar</div></div></div></div></div>');
		}
	});
}


function showTutorial()
{
	if(tokenLogin == null)
	{
		window.location.hash = 'loading-login';
	}
	else
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/logins.php',
			data:{'type':'getTutorial','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token") },
			dataType:'html',
			success:function(data)
			{
				if(data == 1)
				{
					window.location.hash = 'tutorial';
				}
				else
				{
					window.location.hash = 'homepage';
				}
			},
			error:function()
			{

			}
		});
	}
}



function show_botao_notificacoes()
{
	if(tokenLogin == null)
	{
		window.location.hash = 'loading-login';
	}
	else
	{
		var a ='';
		var checked = '';

		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/logins.php',
			async:false,
			data:{'type':'getNotificacoes','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token") },
			dataType:'html',
			success:function(data)
			{
				if(data == 1)
				{
					checked += ' checked="checked" ';
				}
				a += '<label class="switch"><input id="notificacoes" type="checkbox" name="notificacoes" '+checked+' onchange="notifyme()"><span class="slider round"></span></label>';
			},
			error:function()
			{

			}
		});

		return a;
	}
}

function notifyme()
{

	checked = $("#notificacoes").is(':checked');
	if(checked) ck = 1;
	else ck = 0;

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/logins.php',
		data:{'type':'update_notificacoes','dp':(new Date()).getTime(),'checked':ck,'token':window.localStorage.getItem("token") },
		dataType:'html',
		success:function(data)
		{

		},
		error:function()
		{

		}
	});
}



function show_botao_tutorial()
{
	if(tokenLogin == null)
	{
		window.location.hash = 'loading-login';
	}
	else
	{
		var b ='';
		var checked = '';

		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/logins.php',
			async:false,
			data:{'type':'getTutorial','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token") },
			dataType:'html',
			success:function(data)
			{
				if(data == 1)
				{
					checked += ' checked="checked" ';
				}
				b += '<label class="switch"><input id="tutorial" type="checkbox" name="tutorial" '+checked+' onchange="tutorialme()"><span class="slider round"></span></label>';
			},
			error:function()
			{

			}
		});

		return b;
	}
}
function tutorialme()
{
	checked = $("#tutorial").is(':checked');
	if(checked) ck = 1;
	else ck = 0;
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/logins.php',
		data:{'type':'update_tutorial','dp':(new Date()).getTime(),'checked':ck,'token':window.localStorage.getItem("token") },
		dataType:'html',
		success:function(data)
		{
		},
		error:function()
		{

		}
	});
}

function show_botao_pagar_loja()
{
	if(tokenLogin == null)
	{
		window.location.hash = 'loading-login';
	}
	else
	{
		var b ='';
		var checked = '';

		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/logins.php',
			async:false,
			data:{'type':'getPagarLoja','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token") },
			dataType:'html',
			success:function(data)
			{
				if(data == 1)
				{
					checked += ' checked="checked" ';
				}
				b += '<label class="switch"><input id="pagar_loja" type="checkbox" name="pagar_loja" '+checked+' onchange="pagar_loja()"><span class="slider round"></span></label>';
			},
			error:function()
			{

			}
		});

		return b;
	}
}
function pagar_loja()
{
	window.localStorage.setItem("ja_carreguei_home_page","0");

	checked = $("#pagar_loja").is(':checked');
	if(checked) ck = 1;
	else ck = 0;

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/logins.php',
		data:{'type':'update_pagar_loja','dp':(new Date()).getTime(),'checked':ck,'token':window.localStorage.getItem("token") },
		dataType:'html',
		success:function(data)
		{
			window.localStorage.setItem('pagar_loja',ck);
		},
		error:function()
		{

		}
	});
}
function ver_euros()
{
	window.localStorage.setItem("ja_carreguei_home_page","0");

	checked = $("#ver_euros").is(':checked');
	if(checked) ck = 1;
	else ck = 0;

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_hiqi2/logins.php',
		data:{'type':'update_ver_euros','dp':(new Date()).getTime(),'checked':ck,'token':window.localStorage.getItem("token") },
		dataType:'html',
		success:function(data)
		{
			window.localStorage.setItem('ver_euros',ck);
		},
		error:function()
		{

		}
	});
}
function altera_matricula(e,matricula,IDb)
{
	checked = $("#"+e).is(':checked');
	if(checked) ck = 1;
	else ck = 0;

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/logins.php',
		data:{'type':'update_matricula','dp':(new Date()).getTime(),'checked':ck,'token':window.localStorage.getItem("token"),'IDb':IDb,'matricula':matricula },
		dataType:'html',
		success:function(data)
		{

		},
		error:function()
		{

		}
	});
}

// function centerMap(location)
// {
// 	var myLatlng = new google.maps.LatLng(location.coords.latitude,location.coords.longitude);
// 	// map.setCenter(myLatlng);
// 	// map.setZoom(10);
// 	// watchCount++;

// 	//do it 2 times
// 	// if(watchCount>=2)
// 	// {

// 	//show current location on map
// 		var marker = new google.maps.Marker({
// 	        position:myLatlng,
// 	        map:map,
// 	        clickable:false
// 	    });
// 		marker.setMap(map);
// 		// map.setZoom(15);
//     	map.setCenter(marker.getPosition());
// 		// //don’t need to watch anymore
// 		// var watchID2 = navigator.geolocation.watchPosition(onSuccess,onError,{ maximumAge:3000,timeout:5000,enableHighAccuracy:true });
// 	// }
// }

function simInfosuccessCallback(result) {
	var element = document.getElementById('SIMInformation');
	if (result !== undefined && result != null && result != '') {
		var tblHmlt = '<h3>Sim basic Information </h3><table style="width:100%"><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody>';
		tblHmlt += '<tr><td>carrierName</td><td> ' + result.carrierName + '</td></tr>' +
				 '<tr><td>countryCode</td><td> ' + result.countryCode + '</td></tr>' +
				 '<tr><td>activeSubscriptionInfoCount</td><td> ' + result.activeSubscriptionInfoCount + '</td></tr>' +
				 '<tr><td>activeSubInfoCountMax</td><td>' + result.activeSubscriptionInfoCountMax + '</td></tr>' +
				 '<tr><td>phoneNumber</td><td> ' + result.phoneNumber + '</td></tr>' +
				 '<tr><td>deviceId</td><td> ' + result.deviceId + '</td></tr>' +
				 '<tr><td>deviceSoftwareVersion</td><td> ' + result.deviceSoftwareVersion + '</td></tr>' +
				 '<tr><td>simSerialNumber</td><td> ' + result.simSerialNumber + '</td></tr>' +
				 '<tr><td>subscriberId</td><td> ' + result.subscriberId + '</td></tr>' +
				  '</tbody></table>';

		element.innerHTML = tblHmlt;
	}

	var elementSimInfo = document.getElementById('SIMInfo');
	if (result.cards.length > 0 && result.phoneCount > 1) {
		var innerHtml = '';
		var totalSim = 1;
		for (var i = 0; i < result.cards.length; i++) {

			var tblHmlt = '<h3>Sim ' + totalSim + ' Information </h3>' + '<br /><table style="width:100%"><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody>';

			tblHmlt += '<tr><td>carrierName</td><td>' + result.cards[i].carrierName + '</td></tr>' +
					   '<tr><td>displayName</td><td>' + result.cards[i].displayName + '</td></tr>' +
					   '<tr><td>countryCode</td><td>' + result.cards[i].countryCode + '</td></tr>' +
					   '<tr><td>mcc</td><td>' + result.cards[i].mcc + '</td></tr>' +
					   '<tr><td>mnc</td><td>' + result.cards[i].mnc + '</td></tr>' +
					   '<tr><td>isNetworkRoaming</td><td>' + result.cards[i].isNetworkRoaming + '</td></tr>' +
					   '<tr><td>isDataRoaming</td><td>' + result.cards[i].isDataRoaming + '</td></tr>' +
					   '<tr><td>simSlotIndex</td><td>' + result.cards[i].simSlotIndex + '</td></tr>' +
					   '<tr><td>phoneNumber</td><td>' + result.cards[i].phoneNumber + '</td></tr>' +
					   '<tr><td>deviceId</td><td>' + result.cards[i].deviceId + '</td></tr>' +
					   '<tr><td>simSerialNumber</td><td>' + result.cards[i].simSerialNumber + '</td></tr>' +
					   '<tr><td>subscriptionId</td><td>' + result.cards[i].subscriptionId + '</td></tr>' +
					   '</tbody></table>';
			totalSim++;
			innerHtml += tblHmlt
		}
		elementSimInfo.innerHTML = innerHtml;
	}
}


function HasPerminionSuccessCallback(result) {

	if (result) {
		window.plugins.sim.getSimInfo(simInfosuccessCallback,errorCallback);
	} else {
		requestReadPermission();
	}
}


function errorCallback(error) {

	var elementSimInfo = document.getElementById('ErrorInfo');
	elementSimInfo.innerHTML = error;

}
function requestSuccessCallback(result) {
	if (result) {
		hasReadPermission();
	}
}
// Android only:check permission
function hasReadPermission() {
	window.plugins.sim.hasReadPermission(HasPerminionSuccessCallback,errorCallback);
}

// Android only:request permission
function requestReadPermission() {
	window.plugins.sim.requestReadPermission(requestSuccessCallback,errorCallback);

}

// onSuccess Callback
//   This method accepts a `Position` object,which contains
//   the current GPS coordinates
//
function onSuccess(position)
{
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var latLong = new google.maps.LatLng(latitude,longitude);
	var marker = new google.maps.Marker({
			  position:latLong,
			  map:map,
			  title:'my location'
		  });
	marker.setMap(map);
	map.setZoom(15);
	map.setCenter(marker.getPosition());
	var element = document.getElementById('geolocation');
	$('#geolocation').empty();
	element.innerHTML = 'Latitude:'  + latitude      + '<br />' +
						'Longitude:' + longitude     + '<br />' +
						'<hr />'      + element.innerHTML;
}

// onError Callback receives a PositionError object
//
function onError(error) {
	console.error('code:'    + error.code    + '\n' + 'message:' + error.message + '\n');
}
function fillBombas()
{
	var bombas  = retailers[0].Stations;
	$.each(bombas,function(i,object)
	{
		var StationID = object.StationID;
		var StationName = object.StationName;
		var Latitude = object.Latitude;
		var Longitude = object.Longitude;
		bombas +='<option data-lat="'+Latitude+'" data-lng="'+Longitude+'" value="'+StationID+'">'+StationName+'</option>';
	});
	return bombas;
}

function infoLogin()
{
	if(tokenLogin == null)
	{
		window.location.hash = 'loading-login';
	}
	else
	{

		var html = '';
		var html_limites = '';
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/logins.php',
			async:false,
			data:{'type':'getInfoLogin','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token")},
			dataType:'json',
			success:function(data)
			{
				if(data != 0 || data != '')
				{
					var nome = '';
					var telemovel = '';
					var foto = '';
					var img = '';

					var key = '';
					var daily_limit = '';
					var weekly_limit = '';
					var monthly_limit = '';
					var truck = '';
					var driver = '';
					var customer_no = '';
					var pin_code = '';
					var attempts_no = '';
					var raio_pesquisa = '';
					var cliente_mbway = '';
					var cliente_name = '';
					var permissao = '';
					var max = '';
					var limite = '';
					var limite_perc = '';
					var background = '#0bb500'; //green
					var Empresa='';
					console.log(data);
					nome = data.nome;
					telemovel = data.telemovel;
					foto = data.foto_ext;
					key = data.key;
					raio_pesquisa = data.raio_pesquisa;
					pin_code = data.pin_code;
					cliente_mbway = data.cliente_mbway;
					cliente = data.cliente;
					permissao = data.permissao_txt;
					max = data.max;
					limite = data.limite;
					limite_perc = data.limite_perc;
					driver = data.driver;
					Empresa = data.Empresa;

					window.localStorage.setItem("raio_pesquisa",raio_pesquisa);
					window.localStorage.setItem("pin_code",pin_code);
					window.localStorage.setItem("cliente_mbway",cliente_mbway);
					window.localStorage.setItem("Empresa",Empresa);

					daily_limit = data.daily_limit;
					weekly_limit = data.weekly_limit;
					monthly_limit = data.monthly_limit;
					truck = data.truck;
					driver = data.driver;
					customer_no = data.customer_no;
					attempts_no = data.attempts_no;
					if(limite_perc <= 20){background = '#f3d337';}
					else if(limite_perc<=10){background = '#ff5e00';}

					html = '<div class="app-header"><div class="header"><div class="left"><img src="img/logo.jpg" alt="" border="0" class="logo"></div><div class="cent"></div><div class="right"><a class="profile-toggle" href="#profile-panel"><img class="close" src="img/close2.svg"></a></div></div></div>';

					html += '<div class="homepageContainer container">';
						html += '<div id="menu_info" class="homepageLoginInfo">';
							
							html += '<div class="info-page">';
								html += '<div class="matricula2 white"><div><span class="driver">'+driver+'</span><br><span>'+truck+'</span></div></div>';
							html += '</div>';

						html += '</div>';
					html += '</div>';

					$('#profile').html(html);
					$('#profile-limites').html(html_limites);
				}

			},
			error:function(){}
		});
		return html;
	}
}

function confirmarPurchase(AuthorizationToken='',RequestID=0)
{
	if(APP_ON == 0 || APP_ON == 2) /* DESKTOP | APP ONLINE */
	{
		var html = '';
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:false,
			data:{'type':'confirmarPurchase','dp':(new Date()).getTime(),'AuthorizationToken':AuthorizationToken,'telemovel':window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token")},
			dataType:'html',
			success:function(data)
			{
				console.log(data);
				if(data == 1) window.location.hash='payment-completed';
			},
			error:function(data)
			{
				window.location.hash='payment-error';
			}
		});
	}
}

function getAbastecimentos()
{
	if(APP_ON == 0 || APP_ON == 2) /* DESKTOP | APP ONLINE */
	{
		var html = '';
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:false,
			data:{'type':'getAbastecimentos','dp':(new Date()).getTime(),'telemovel':window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token")},
			dataType:'json',
			success:function(data)
			{

				if(data != 0)
				{
					var AuthorizationToken = data.AuthorizationToken;
					var RequestID = data.RequestID;
					var Telemovel = data.Telemovel;


					html +='<div id="payment" class="payment">';
						html += '<div class="box">';

						html += '<div class="requestID"><span>Request:</span>'+RequestID+'</div>';
						html +='</div>';

						html += '<div class="box">';
						html += '<div class="telemovel"><span>Nº:</span>'+Telemovel+'</div>';
						html +='</div>';
						html +='detalhes da compra';

						html += '<div class="box">';
						html += '<div class="" onclick="confirmarPurchase(\''+AuthorizationToken+'\','+RequestID+')">PAGAR</div>';
						html +='</div>';

					html +='</div>';
				}
			},
			error:function()
			{

			}
		});
	}
	return html;
	// else if(APP_ON == 1) /* APP OFFLINE */
	// {
	// 	var res;
	// 	db.transaction(function (tx)
	// 	{
	// 		var sql = "SELECT * FROM favorites WHERE client_id = '" + window.localStorage.getItem("token") + "' AND prod_id <> ''";
	// 		tx.executeSql(sql,[],function (tx,rs)
	// 		{
	// 			$('.star-num').html(rs.rows.length);
	// 		},errorCB);
	// 	});
	// }
}

function saveRaioPesquisa()
{
	var raio_pesquisa = window.localStorage.getItem("raio_pesquisa");

	if(raio_pesquisa > 0)
	{
		//Para obrigar a carregar novamente a home page
		window.localStorage.setItem("ja_carreguei_home_page",'0');

		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:false,
			data:{'type':'saveRaioPesquisa','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token"),"raio_pesquisa":raio_pesquisa},
			dataType:'html',
			success:function(data)
			{
				// html += data;
			},
			error:function()
			{
				console.error('erro em saveRaioPesquisa => actions.php');
			}
		});
	}
}
function getListaPontosAbastecimento(e)
{
	if(APP_ON == 0 || APP_ON == 2) /* DESKTOP | APP ONLINE */
	{
		var html = '';
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:true,
			data:{'type':'getListaPontosAbastecimento','dp':(new Date()).getTime(),'cliente_mbway' :window.localStorage.getItem("cliente_mbway"),'telemovel' :window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token"),'lat':window.localStorage.getItem("lat"),'lng':window.localStorage.getItem("lng")},
			dataType:'html',
			success:function(data)
			{
				html += data;
				$(e).html(html);
			},
			error:function()
			{
				/*console.error('erro em getListaPontosAbastecimento => actions.php');*/
			}
		});
	}
	//return html;
}

function showSliderPostos(e,vpw)
{
	if(window.localStorage.getItem("estou_logado") != "1" || window.localStorage.getItem("app_offline") == "1" )return false;

	if(APP_ON == 0 || APP_ON == 2) /* DESKTOP | APP ONLINE */
	{
		var html = '';
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:true,
			data:{'type':'showSliderPostos','dp':(new Date()).getTime(),'pagar_loja':window.localStorage.getItem("pagar_loja"),'cliente_mbway' :window.localStorage.getItem("cliente_mbway"),'telemovel' :window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token"),'lat':window.localStorage.getItem("lat"),'lng':window.localStorage.getItem("lng")},
			dataType:'html',
			success:function(data)
			{
				html = '<div id="show-all-postos" style="display:inline-block;width:50%;float:left"><div class="ver-mapa" style="margin-left:20px" onclick="window.location.hash=\'\';window.location.hash=\'location\'">Ver lista de postos</div></div>';
				html += '<div class="horizontal-scroll-wrapper3 squares" style="height:'+vpw+'px">';
				html += data;
				html += '</div>';

				$('#slider-postos').css("top",window.innerHeight-200);

				$(e).html(html);
			},
			error:function()
			{
				/*console.error('erro em showSliderPostos => actions.php');*/
			}
		});
	}
}

function showPontoAbastecimentoById(StationID = 0)
{
	var body = '';

	if(StationID != '')
	{
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:'Aguarde por favor',
				duration:"2000",
				position:"center",
				styling:{ opacity:0.0,textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			/*console.log('Aguarde por favor');*/
		}

		window.localStorage.setItem("StationID",StationID);
		window.location.hash='specific-location';
	}
	else window.location.hash='homepage';
}

function carrega_saldo_mbway()
{
	var valor_mbway = window.localStorage.getItem('valor_mbway_carregar');
	var descricao_mbway = window.localStorage.getItem('descricao_mbway');
	var station = window.localStorage.getItem('StationID');

	if(valor_mbway > 0 && descricao_mbway != '')
	{
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:'Aguarde por favor',
				duration:"2000",
				position:"center",
				styling:{ opacity:0.0,textSize:20 },
				addPixelsY:0
			});

		}
		else
		{
			console.log('Aguarde por favor');
		}

		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/mbway.php',
			async:false,
			data:{
				'type':'carregaSaldoMbway',
				'valor_mbway':valor_mbway,
				'descricao_mbway':descricao_mbway,
				'dp':(new Date()).getTime(),
				'telemovel' :window.localStorage.getItem("telemovel"),
				'token':window.localStorage.getItem("token"),
				'station':station
			},
			dataType:'html',
			success:function(data)
			{
				if(data == 1)
				{
					if(window.plugins)
					{
						window.plugins.toast.showWithOptions(
						{
							message:'Carregamento MBWAY processado com sucesso. Faça o pagamento na sua APP MBWAY.',
							duration:"2000",
							position:"center",
							styling:{ textSize:20 },
							addPixelsY:0
						});

					}
					else
					{
						console.log('Carregamento MBWAY processado com sucesso. Faça o pagamento na sua APP MBWAY.');
					}

					setTimeout(function()
					{
						window.location.hash = 'specific-location';
					},15000);
				}
				else
				{
					if(window.plugins)
					{
						window.plugins.toast.showWithOptions(
						{
							message:'Não foi possível processar o pagamento MBWAY.',
							duration:"2000",
							position:"center",
							styling:{ textSize:20 },
							addPixelsY:0
						});

					}
					else
					{
						alert('Não foi possível processar o pagamento MBWAY.');
					}
				}
				// html += data;
			},
			error:function(data)
			{
				alert('erro em CarregaSaldoMbway com Station ID => mbway.php');
			}
		});
	}
	else if(valor_mbway <= 0)
	{
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:'Introduza um valor superior a 0.',
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});

		}
		else
		{
			alert('Introduza um valor superior a 0.');
		}
	}
	else if(descricao_mbway == '')
	{
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:'Introduza uma descrição relativamente ao carregamento MBWAY.',
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});

		}
		else
		{
			alert('Introduza uma descrição relativamente ao carregamento MBWAY.');
		}
	}
}
function carrega_saldo_mbway2()
{
	$('#mbway_status').show();
	setTimeout(function() {
		carrega_saldo_mbway_3();
	}, 1000);

}
function carrega_saldo_mbway_3()
{
	var valor_mbway = window.localStorage.getItem('valor_mbway_carregar');
	var descricao_mbway = window.localStorage.getItem('descricao_mbway');
	var valor_postoPAIS = window.localStorage.getItem('valor_postoPAIS');
	var station = 'default';

	if(valor_mbway > 0 && descricao_mbway != '')
	{
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:'Aguarde por favor...',
				duration:"2000",
				position:"center",
				styling:{ opacity:0.0,textSize:20 },
				addPixelsY:0
			});

		}
		else
		{
			console.log('Aguarde por favor...');
		}

		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/mbway.php',
			async:false,
			data:{
				'type':'carregaSaldoMbway',
				'valor_mbway':valor_mbway,
				'valor_postoPAIS':valor_postoPAIS,
				'descricao_mbway':descricao_mbway,
				'dp':(new Date()).getTime(),
				'telemovel' :window.localStorage.getItem("telemovel"),
				'token':window.localStorage.getItem("token"),
				'station':station
			},
			dataType:'html',
			success:function(data)
			{
				if(data == 1)
				{
					if(window.plugins)
					{
						window.plugins.toast.showWithOptions(
						{
							message:'Deverá receber em breve o pedido de pagamento na sua aplicação MB WAY. Caso não receba nenhuma notificação, verifique o pagamento dentro da aplicação, no separador ATIVIDADE',
							duration:"15000",
							position:"center",
							styling:{ textSize:20 },
							addPixelsY:0
						});

					}
					else
					{
						alert('Deverá receber em breve o pedido de pagamento na sua aplicação MB WAY. Caso não receba nenhuma notificação, verifique o pagamento dentro da aplicação, no separador ATIVIDADE');
					}
					$('#valor').val('0.00');

					//Se estiver na pagina de carregar saldo deve fazer refresh:
					if(window.location.hash=="carregar-saldo-mbway-menu")
					{
						window.location.hash='';
						window.location.hash='carregar-saldo-mbway-menu';
					}
				}
				else
				{
					if(window.plugins)
					{
						window.plugins.toast.showWithOptions(
						{
							message:'Não foi possível processar o pagamento MBWAY.',
							duration:"2000",
							position:"center",
							styling:{ textSize:20 },
							addPixelsY:0
						});
					}
					else
					{
						alert('Não foi possível processar o pagamento MBWAY.');
					}
				}
			},
			error:function(data)
			{
				console.error('erro em CarregaSaldoMbway com Station ID => mbway.php');
			}
		});
	}
	else if(valor_mbway <= 0)
	{
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:'Introduza um valor superior a 0€',
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});

		}
		else
		{
			alert('Introduza um valor superior a 0€');
		}
	}
	else if(descricao_mbway == '')
	{
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:'Introduza uma descrição relativamente ao carregamento MBWAY.',
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});

		}
		else
		{
			alert('Introduza uma descrição relativamente ao carregamento MBWAY.');
		}
	}
	$('#mbway_status').hide();
}

function carregar_saldo_mbway()
{
	window.location.hash='carregar-saldo-mbway';
}

function showCarregarSaldoMbway()
{
	var html = '';
	if(StationID != '')
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/mbway.php',
			async:false,
			data:{'type':'showCarregarSaldoMbway','dp':(new Date()).getTime(),'telemovel' :window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token"),'stationID':StationID},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em showCarregarSaldoMbway com Station ID => actions.php');
			}
		});
	}
	else
	{
		window.location.hash='homepage';
	}

	return html;
}

function showCarregarSaldoMbwayMenu()
{
	var html = '';

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/mbway.php',
		async:false,
		data:{'type':'showCarregarSaldoMbwayMenu','dp':(new Date()).getTime(),'telemovel' :window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token")},
		dataType:'html',
		success:function(data)
		{
			html += data;
		},
		error:function(data)
		{
			console.error('erro em showCarregarSaldoMbway com Station ID => actions.php');
		}
	});


	return html;
}

function showPontoAbastecimento(StationID = 0)
{
	var html = '';
	if(StationID != '')
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:false,
			data:{'type':'getListaPontosAbastecimento','dp':(new Date()).getTime(),'StationID':StationID,'cliente_mbway' :window.localStorage.getItem("cliente_mbway"),'telemovel' :window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token"),},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em getListaPontosAbastecimento com Station ID => actions.php');
			}
		});
	}
	else
	{
		window.location.hash='homepage';
	}

	return html;
}
function showPontoAbastecimento_async(StationID=0,e)
{
	if(StationID != '')
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:true,
			data:{'type':'getListaPontosAbastecimento','dp':(new Date()).getTime(),'StationID':StationID,'cliente_mbway' :window.localStorage.getItem("cliente_mbway"),'telemovel' :window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token"),},
			dataType:'html',
			success:function(data)
			{
				$(e).empty();
				$(e).html(data);

				//Agora vamos verificar se temos sinal de GPS

				if(window.localStorage.getItem("ja_carreguei_home_page") == "1" && window.localStorage.getItem("estou_logado") == "1")
				{
					if (navigator.geolocation)
					{
					    navigator.geolocation.getCurrentPosition(showPosition);
					}
					else
					{
					    $('#info').html("Geolocation not detected");
					}
				}					
			},
			error:function(data)
			{
				console.error('erro em getListaPontosAbastecimento com Station ID => actions.php');
			}
		});
	}
	else
	{
		window.location.hash='homepage';
	}
}
function send_msg()
{
	var msg=$('#msg_input').val();
	var html = '';
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:true,
		data:{'type':'novaMensagem','msg':msg,'dp':(new Date()).getTime(),'token':window.localStorage.getItem('token') },
		dataType:'html',
		success:function(data)
		{
			if(data != '')
			{
				$('#mensagens-container').html(data);
				$('#msg_input').val("");
			}
		},
		error:function(data)
		{
			//html ='Sem Mensagens';
		}
	});
	//return html;
}
function showMensagens()
{
	var html = '';

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'showMensagens','dp':(new Date()).getTime(),'token':window.localStorage.getItem('token') },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Mensagens';
		}
	});
	return html;
}
function novaMensagem()
{
	var html = '';

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'novaMensagem','dp':(new Date()).getTime(),'token':window.localStorage.getItem('token') },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Mensagens';
		}
	});
	return html;
}
function Account()
{
	var html = '';

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/info.php',
		async:false,
		data:{'type':'Account','dp':(new Date()).getTime(),'token':window.localStorage.getItem('token') },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Condutores';
		}
	});
	return html;
}
function Condutores()
{
	var html = '';

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'Condutores','dp':(new Date()).getTime(),'token':window.localStorage.getItem('token') },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Condutores';
		}
	});
	return html;
}
function update_permissoes(n,IDb)
{
	checked = $("#Permissao"+n).is(":checked");
	if(checked) ck = 1;
	else ck = 0;
	$.ajax({
		type:"POST",
		url:globalUrl+"admin_tfc/logins.php",
		data:{"type":"update_Permissao"+n,"dp":(new Date()).getTime(),"IDb":IDb,"checked":ck,"token":window.localStorage.getItem("token") },
		dataType:"html",
		success:function(data){},
		error:function(){}
	});
}
function update_permissoes2(n,IDb,ck)
{
	$.ajax({
		type:"POST",
		url:globalUrl+"admin/logins.php",
		data:{"type":"update_Permissao"+n,"dp":(new Date()).getTime(),"IDb":IDb,"checked":ck,"token":window.localStorage.getItem("token") },
		dataType:"html",
		success:function(data){},
		error:function(){}
	});
}
function Condutores_edita(IDb)
{
	var html = '';

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'Condutores_edita','dp':(new Date()).getTime(),'token':window.localStorage.getItem('token'),'IDb':IDb },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Condutores';
		}
	});
	return html;
}
function Condutores_add()
{
	var html = '';

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'Condutores_add','dp':(new Date()).getTime(),'token':window.localStorage.getItem('token') },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Condutores';
		}
	});
	return html;
}
function Condutores_remove(IDb)
{
	var html = '';

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'Condutores_remove','dp':(new Date()).getTime(),'token':window.localStorage.getItem('token'),'IDb':IDb },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Condutores';
		}
	});
	return html;
}
function Veiculos_add()
{
	var html = '';

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'Veiculos_add','dp':(new Date()).getTime(),'token':window.localStorage.getItem('token') },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Veiculos';
		}
	});
	return html;
}
function Veiculos_add2()
{
	var html = '';

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'Veiculos_add2','dp':(new Date()).getTime(),'token':window.localStorage.getItem('token') },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Veiculos';
		}
	});
	return html;
}
function Veiculos()
{
	var html = '';

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'Veiculos','dp':(new Date()).getTime(),'token':window.localStorage.getItem('token') },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Veiculos';
		}
	});
	return html;
}
function Veiculos_edita(IDb)
{
	var html = '';

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'Veiculos_edita','dp':(new Date()).getTime(),'token':window.localStorage.getItem('token'),'IDb':IDb },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Veiculos';
		}
	});
	return html;
}
function Veiculos_remove(IDb)
{
	var html = '';

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'Veiculos_remove','dp':(new Date()).getTime(),'token':window.localStorage.getItem('token'),'IDb':IDb },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Veiculos';
		}
	});
	return html;
}
function Financeira()
{
	var html = '';
	var valor_postoPAIS=window.localStorage.getItem("valor_postoPAIS");

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'Financeira','dp':(new Date()).getTime(),'valor_postoPAIS':valor_postoPAIS,'token':window.localStorage.getItem('token') },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Documentos';
		}
	});
	return html;
}
function show_extrato(Extract_No)
{
	window.localStorage.setItem('Extract_No',Extract_No);
	window.location.hash='extrato';
}
function show_fatura(No)
{
	window.localStorage.setItem('No',No);
	window.location.hash='fatura';
}
function Extrato()
{
	var html = '';
	var Extract_No=window.localStorage.getItem('Extract_No');
	var valor_postoPAIS=window.localStorage.getItem("valor_postoPAIS");
	

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'Extrato','Extract_No':Extract_No,'valor_postoPAIS':valor_postoPAIS,'dp':(new Date()).getTime(),'token':window.localStorage.getItem('token') },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Documentos';
		}
	});
	return html;
}
function Faturas()
{
	var html = '';
	var valor_postoPAIS=window.localStorage.getItem("valor_postoPAIS");
	var valor_postoPAIS=window.localStorage.getItem("valor_postoPAIS");

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'Faturas','dp':(new Date()).getTime(),'valor_postoPAIS':valor_postoPAIS,'valor_postoPAIS':valor_postoPAIS,'token':window.localStorage.getItem('token') },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Documentos';
		}
	});
	return html;
}
function FaturasPagar()
{
	var html = '';
	var valor_postoPAIS=window.localStorage.getItem("valor_postoPAIS");

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'FaturasPagar','dp':(new Date()).getTime(),'valor_postoPAIS':valor_postoPAIS,'token':window.localStorage.getItem('token') },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Documentos';
		}
	});
	return html;
}
function Fatura()
{
	var html = '';
	var valor_postoPAIS=window.localStorage.getItem("valor_postoPAIS");
	var No=window.localStorage.getItem('No');
	var Extract_No=window.localStorage.getItem('Extract_No');

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'Fatura','Extract_No':Extract_No,'No':No,'dp':(new Date()).getTime(),'valor_postoPAIS':valor_postoPAIS,'token':window.localStorage.getItem('token') },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Documentos';
		}
	});
	return html;
}
function FaturasPagamentos()
{
	var P_ID = window.localStorage.getItem('P_ID');
	var P_Tipo = window.localStorage.getItem('P_Tipo');


	var html = '';
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'HistoricoPagamentosFaturas','P_ID':P_ID,'P_Tipo':P_Tipo,'dp':(new Date()).getTime(),'token':window.localStorage.getItem('token') },
		
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Pagamentos';
		}
	});
	return html;
}
function Configuracoes()
{
	var html = '';

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'Configuracoes','dp':(new Date()).getTime(),'token':window.localStorage.getItem('token') },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Mensagens';
		}
	});
	return html;
}


function showMensagem(mensagem_id)
{
	var html = '';

	if(mensagem_id != ''){

		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:false,
			data:{'type':'showMensagem','dp':(new Date()).getTime(),'mensagem':mensagem_id,'token':window.localStorage.getItem('token') },
			dataType:'html',
			success:function(data)
			{
				if(data != '') html += data;
			},
			error:function(data)
			{
				html ='Não é possível ler a Mensagem';
			}
		});
	}
	else
	{
		window.location.hash='homepage';
	}


	return html;
}

function lerMensagem(mensagem_id = 0)
{

	if(mensagem_id > 0 && mensagem_id != '')
	{
		window.localStorage.setItem("mensagem",mensagem_id);
		window.location.hash='message';
	}
	else
	{
		window.location.hash='homepage';
	}
}

function showConsumos()
{
	var html = '';
	var telemovel = window.localStorage.getItem("telemovel");
	if(telemovel != '')
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:false,
			data:{'type':'showConsumos','dp':(new Date()).getTime(),'telemovel':telemovel,'token':window.localStorage.getItem('token') },
			dataType:'html',
			success:function(data)
			{
				if(data != '') html += data;
			},
			error:function(data)
			{
				html ='Sem Comsumos';
			}
		});
	}
	else
	{
		window.location.hash='homepage';
	}

	return html;
}
function showReservations()
{
	var html = '';
	var telemovel = window.localStorage.getItem("telemovel");
	if(telemovel != '')
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:false,
			data:{
				'type':'showReservations',
				'telemovel':telemovel,
				'dp':(new Date()).getTime(),
				'token':window.localStorage.getItem('token'),
				'lang':sLang
			},
			dataType:'html',
			success:function(data)
			{
				if(data != '') html += data;
			},
			error:function(data)
			{
				html ='Sem Reservas';
			}
		});
	}
	else
	{
		window.location.hash='homepage';
	}

	return html;
}
function showPagamentos()
{
	var html = '';
	var telemovel = window.localStorage.getItem("telemovel");
	if(telemovel != '')
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:false,
			data:{
				'type':'showPagamentos',
				'telemovel':telemovel,
				'dp':(new Date()).getTime(),
				'token':window.localStorage.getItem('token'),
				'lang':sLang
			},
			dataType:'html',
			success:function(data)
			{
				if(data != '') html += data;
			},
			error:function(data)
			{
				html ='Sem Pagamentos';
			}
		});
	}
	else
	{
		window.location.hash='homepage';
	}

	return html;
}
function showNavigation()
{
	var html = '';

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/maps.php',
		async:false,
		data:{'type':'showNavigation','dp':(new Date()).getTime(),'token':window.localStorage.getItem('token') },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
		},
		error:function(data)
		{
			html ='Sem Reservas';
		}
	});

	return html;
}
function showPayments(e)
{
	var telemovel = window.localStorage.getItem("telemovel");
	var html = '';

	if(verificaPagamentos() == 1) // tem pagamentos
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:true,
			data:{'type':'showPagamentos','dp':(new Date()).getTime(),'telemovel':telemovel,'token':window.localStorage.getItem("token") },
			dataType:'html',
			success:function(data)
			{
				if(data != '')
				{
					html += data;
				}
				else html +=reloadPaymentsPage();

				$(e).html(html);
			},
			error:function(data)
			{
				var html =reloadPaymentsPage();
				$(e).html(html);
			}

		});
	}
	else //não tem pagamentos,verificar se estamos próximos de um posto
	{
		var lat = 0;
		var lng = 0;

		if (window.localStorage.getItem("lat") != null && window.localStorage.getItem("lng") != null)
		{
			lat = window.localStorage.getItem("lat");
			lng = window.localStorage.getItem("lng");
		}
		else
		{
			$.ajax({
				type:'POST',
				url:globalUrl+'admin_tfc/maps.php',
				async:false,
				data:{'type':'getLatLng','dp':(new Date()).getTime(), 'token':window.localStorage.getItem("token") },
				dataType:'json',
				success:function(data)
				{
					if(data != 0 || data != '')
					{
						lat = data.lat;
						lng = data.lng;
					}
				},
				error:function(data)
				{
					var html =reloadPaymentsPage();
				}
			});
		}
		//teste
		// lat = 39.4766420000;
		// lng = -8.682850;
		var ok = 0;
		$.ajax({
				type:'POST',
				url:globalUrl+'admin_tfc/maps.php',
				async:false,
				data:{'type':'getCoorPostos','dp':(new Date()).getTime() },
				dataType:'json',
				success:function(data)
				{
					var min = 999999999999;
					var stationID_min = '';
					$.each(data,function(i,object)
					{
						var stationID = object.stationID;
						var latitude = object.lat;
						var longitude = object.lng;

						// TODO => VERIFICAR SE A DISTANCIA DE 40 METROS É SUFICIENTE
						var dist = getDistanceFromLatLonInKm(lat,lng,latitude,longitude,1);
						if( dist <= 40)
						{
							if(dist < min)
							{
								min = dist;
								stationID_min = stationID;
							}
						}

					});

					if(stationID_min != '')
					{
						window.localStorage.setItem("StationID",stationID_min);
						ok = 1;
						return false;
					}
				},
				error:function(data)
				{
					var html =reloadPaymentsPage();
				}
			});

		if(ok == 1)
		{
			var html = '<div class="reloadPaymentsPageImg"><div class="reloadImg"><img src="img/processing.gif"></div></div>';

			$("#content").empty();
			$("#content").html(html);
			setTimeout(function()
			{
				window.location.hash='specific-location';
			},250);
		}
		else
		{
			var html =reloadPaymentsPage();
		}
	}
	return html;
}
function reloadPayments()
{
	var html = '';
	var html2 = '<div class="reloadPaymentsPageImg"><div class="reloadImg"><img src="img/processing.gif"></div></div>';
	var telemovel = window.localStorage.getItem("telemovel");
	if(telemovel != '')
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'showPagamentos','dp':(new Date()).getTime(),'telemovel':telemovel,'token':window.localStorage.getItem("token") },
			dataType:'html',
			success:function(data)
			{
				if(data != '') html += data;
				else html +=reloadPaymentsPage();
			},
			error:function(data)
			{
				html +=reloadPaymentsPage();
			}
		});
	}
	else
	{
		window.location.hash='homepage';
	}
	$("#content-reload").empty();
	$("#content-reload").html(html2);
	setTimeout(function()
	{
		$("#content-reload").empty();
		$("#content-reload").html(html);
	},3000);

}
function reloadPaymentsPOS()
{
	var html = '<div class="titulo confirmacao-pagamento-titulo-trad">Confirmação Pagamento</div>';
	var html2 = '<div class="titulo confirmacao-pagamento-titulo-trad">Confirmação Pagamento</div><div class="reloadPaymentsPageImg reload-pos"><div class="reloadImg"><img src="img/processing.gif"></div></div>';

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/pagamentos.php',
		async:false,
		data:{'type':'showPagamentosPOS','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token") },
		dataType:'html',
		success:function(data)
		{
			if(data != '') html += data;
			else html +=reloadPagamentosPOS();
		},
		error:function(data)
		{
			html +=reloadPagamentosPOS();
		}
	});

	$("#content").empty();
	$("#content").html(html2);
	setTimeout(function()
	{
		$("#content").empty();
		$("#content").html(html);
	},3000);

}


function showAguardarPagamentosPOS()
{
	var html = '';
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/pagamentos.php',
		async:false,
		data:{'type':'showAguardarPagamentosPOS','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token"),'IMEI':window.localStorage.getItem("IMEI") },
		dataType:'html',
		success:function(data)
		{
			html+= data;
		},
		error:function(data)
		{
			console.error('erro em showAguardarPagamentosPOS => pagamentos.php');
		}
	});
	return html;
}
function showAguardarPagamentosClientePOS()
{
	var html = '';
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/pagamentos.php',
		async:false,
		data:{
			'type':'showAguardarPagamentosClientePOS',
			'token':window.localStorage.getItem("token"),
			'IMEI':window.localStorage.getItem("IMEI"),
			'dp':(new Date()).getTime(),
			'pagamento_id':window.localStorage.getItem("pagamento-pos")
		},
		dataType:'html',
		success:function(data)
		{
			html+= data;
		},
		error:function(data)
		{
			console.error('erro em showAguardarPagamentosClientePOS => pagamentos.php');
		}
	});
	return html;
}
function showAguardarPagamentosCallcenter()
{
	var html = '';
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/pagamentos.php',
		async:false,
		data:{'type':'showAguardarPagamentosCallcenter','dp':(new Date()).getTime(),'pagamento-callcenter':window.localStorage.getItem("pagamento-callcenter") },
		dataType:'html',
		success:function(data)
		{
			html+= data;
		},
		error:function(data)
		{
			console.error('erro em showAguardarPagamentosCallcenter => pagamentos.php');
		}
	});
	return html;
}

function reloadPaymentsPagebk()
{
	var html = '';
	html += '<div class="reloadPaymentsPage">';
	html += '<div class="mensagem aguarda-pagamento-trad">Aguardando pagamentos para validar</div>';
	html += '<div class="actualizar-pagamentos-trad" id="reloadPaymentsButton" onclick="reloadPayments()">Actualizar Pagamentos</div>';
	html += '<img class="info" src="img/info.png" onclick="window.location.hash=\'info-pagamentos\'">';
	html += '<div class="imagem"><img src="img/moedas.png"></div>';
	html += '</div>';
	return html;
}

function reloadPaymentsPage()
{

	var html = '';
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/pagamentos.php',
		async:false,
		data:{'type':'reloadPaymentsPage','dp':(new Date()).getTime(),'telemovel':window.localStorage.getItem("telemovel") },
		dataType:'html',
		success:function(data)
		{
			html+= data;
		},
		error:function(data)
		{
			console.error('erro em reloadPaymentsPage => pagamentos.php');
		}
	});
	return html;
}

function reloadPaymentsPageNovo(e)
{

	var html = '';
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/pagamentos.php',
		async:false,
		data:{'type':'reloadPaymentsPageNovo','dp':(new Date()).getTime(),'telemovel':window.localStorage.getItem("telemovel") },
		dataType:'html',
		success:function(data)
		{
			$(e).empty();
			$(e).html(data);
			/*html+= data;*/
		},
		error:function(data)
		{
			console.error('erro em reloadPaymentsPageNovo => pagamentos.php');
		}
	});
	/*return html;*/
}

function cancelarPaymentConfirmation()
{
	$('#confirmar').css("display","none");
	$('#cancelar').css("display","none");
	$('#paymentsButton_wait').css("display","inline-block");

	window.localStorage.setItem('counter','0');
	setTimeout(function() {
		cancelarPaymentConfirmation_2();
	}, 1000);
}
function cancelarPaymentConfirmation_2()
{
	var html = '';
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/pagamentos.php',
		async:false,
		data:{'type':'cancelarPaymentConfirmation','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token"),'telemovel':window.localStorage.getItem("telemovel"),'requestid':window.localStorage.getItem("requestid") },
		dataType:'json',
		success:function(data)
		{
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:'Pagamento Cancelado.',
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert('Pagamento Cancelado.');
			}

			timer = setTimeout(function()
			{
				//window.location.hash = 'pay-novo';
				window.location.hash = 'homepage';
			},8000);


		},
		error:function(data)
		{
			var counter = window.localStorage.getItem('counter');
			if(counter < 3)
			{
				console.error('erro, a tentar novamente');
				//Se falhou vamos tentar novamente até um máximo de 3 vezes
				counter=counter+1;
				window.localStorage.setItem('counter',counter);
				cancelarPaymentConfirmation_2();
			}
			else
			{
				if(window.plugins)
				{
					window.plugins.toast.showWithOptions(
					{
						message:'Erro ao tentar cancelar o pagamento.',
						duration:"2000",
						position:"center",
						styling:{ textSize:20 },
						addPixelsY:0
					});
				}
				else console.error('erro em cancelarPaymentConfirmation => pagamentos.php');
			}
		}
	});
}

function confirmPaymentValido()
{
	var html = '';
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/pagamentos.php',
		async:false,
		data:{'type':'confirmPaymentValido','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token"),'telemovel':window.localStorage.getItem("telemovel"),'requestid':window.localStorage.getItem("requestid") },
		dataType:'json',
		success:function(data)
		{
			var estado = data.ESTADO;
			if(estado == 1)
			{
				if(window.plugins)
				{
					window.plugins.toast.showWithOptions(
					{
						message:'O pagamento foi efectuado com sucesso.',
						duration:"2000",
						position:"center",
						styling:{ textSize:20 },
						addPixelsY:0
					});
				}
				else
				{
					alert('O pagamento foi efectuado com sucesso.');
				}

				timer = setTimeout(function()
				{
					window.location.hash = 'homepage';
					/*window.location.hash = 'pay-novo';*/
				},8000);
			}
			else
			{
				if(estado == 0)
				{
					if(window.plugins) {window.plugins.toast.showWithOptions({message:'Não foi possível fazer o pagamento, tente novamente mais tarde', duration:"2000", position:"center", styling:{ textSize:20 }, addPixelsY:0 }); } else {alert('Não foi possível fazer o pagamento tente novamente.'); }
				}
				if(estado == 2)
				{
					if(window.plugins) {window.plugins.toast.showWithOptions({message:'Não foi possível fazer o pagamento, contem artigos não contratualizados', duration:"2000", position:"center", styling:{ textSize:20 }, addPixelsY:0 }); } else {alert('Não foi possível fazer o pagamento tente novamente.'); }
				}
				if(estado == 3)
				{
					if(window.plugins) {window.plugins.toast.showWithOptions({message:'Não foi possível fazer o pagamento, tente novamente mais tarde', duration:"2000", position:"center", styling:{ textSize:20 }, addPixelsY:0 }); } else {alert('Não foi possível fazer o pagamento tente novamente.'); }
				}
				if(estado == 4)
				{
					if(window.plugins) {window.plugins.toast.showWithOptions({message:'Não foi possível fazer o pagamento, tente novamente mais tarde', duration:"2000", position:"center", styling:{ textSize:20 }, addPixelsY:0 }); } else {alert('Não foi possível fazer o pagamento tente novamente.'); }
				}
				if(estado == 5)
				{
					if(window.plugins) {window.plugins.toast.showWithOptions({message:'Não foi possível fazer o pagamento, tente novamente mais tarde', duration:"2000", position:"center", styling:{ textSize:20 }, addPixelsY:0 }); } else {alert('Não foi possível fazer o pagamento tente novamente.'); }
				}
				if(estado == 6)
				{
					if(window.plugins) {window.plugins.toast.showWithOptions({message:'Não foi possível fazer o pagamento Excedeu o seu limite diário.', duration:"2000", position:"center", styling:{ textSize:20 }, addPixelsY:0 }); } else {alert('Não foi possível fazer o pagamento tente novamente.'); }
				}
				if(estado == 7)
				{
					if(window.plugins) {window.plugins.toast.showWithOptions({message:'Não foi possível fazer o pagamento, Cliente Bloqueado Contacte G27.', duration:"2000", position:"center", styling:{ textSize:20 }, addPixelsY:0 }); } else {alert('Não foi possível fazer o pagamento tente novamente.'); }
				}
				if(estado == 8)
				{
					if(window.plugins) {window.plugins.toast.showWithOptions({message:'Não foi possível fazer o pagamento, estes produtos não estão contratualizados.', duration:"2000", position:"center", styling:{ textSize:20 }, addPixelsY:0 }); } else {alert('Não foi possível fazer o pagamento tente novamente.'); }
				}

				timer = setTimeout(function()
				{
					window.location.hash = '';
					window.location.hash = 'pay-novo';
				},8000);
			}
		},
		error:function(data)
		{
			if(window.plugins)
				{
					window.plugins.toast.showWithOptions(
					{
						message:'Erro ao aceder ao serviço, tente novamente.',
						duration:"2000",
						position:"center",
						styling:{ textSize:20 },
						addPixelsY:0
					});
				}
				else console.error('erro em reloadPaymentsPage => pagamentos.php');
		}
	});

	return html;
}

function confirmPayment()
{
	$('#confirmar').css("display","none");
	$('#cancelar').css("display","none");
	$('#paymentsButton_wait').css("display","inline-block");

	window.localStorage.setItem('counter','0');

	setTimeout(function() {
		confirmPayment_2();
	}, 1000);

}
function confirmPayment_2()
{
	var html = '';
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/pagamentos.php',
		async:false,
		data:{'type':'confirmPayment','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token"),'telemovel':window.localStorage.getItem("telemovel"),'requestid':window.localStorage.getItem("requestid") },
		dataType:'json',
		success:function(data)
		{
			var estado = data.ESTADO;
			if(estado == 1)
			{
				//Correu tudo bem
				confirmPaymentValido();
				//carrinho valido,tratar pagamento
			}
			else if(estado == 0) //pagamento cancelado por algum motivo
			{
				if(window.plugins)
				{
					window.plugins.toast.showWithOptions(
					{
						message:'O pagamento foi cancelado.',
						duration:"2000",
						position:"center",
						styling:{ textSize:20 },
						addPixelsY:0
					});
				}
				else alert('O pagamento foi cancelado.');

				timer = setTimeout(function()
				{
					window.location.hash = 'homepage';
				},8000);
			}
			else if(estado == 2) //pagamento já foi tratado e pago
			{
				if(window.plugins)
				{
					window.plugins.toast.showWithOptions(
					{
						message:'Não existem pagamentos.',
						duration:"2000",
						position:"center",
						styling:{ textSize:20 },
						addPixelsY:0
					});
				}
				else
				{
					alert('Não existem pagamentos.');
				}

				timer = setTimeout(function()
				{
					window.location.hash = 'pay-novo';
				},8000);
			}
			else if(estado == 3) //carrinho não válido,logo pagamento cancelado
			{
				if(window.plugins)
				{
					window.plugins.toast.showWithOptions(
					{
						message:'Contem Produtos não contratualizados,não sendo possível realizar o pagamento.',
						duration:"2000",
						position:"center",
						styling:{ textSize:20 },
						addPixelsY:0
					});
				}
				else
				{
					alert('Contem Produtos não contratualizados,não sendo possível realizar o pagamento.');
				}

				timer = setTimeout(function()
				{
					/*window.location.hash = 'pay-novo';*/
					window.location.hash = 'homepage';
				},8000);
			}
			else if(estado == 4) //Valor do limite
			{
				if(window.plugins)
				{
					window.plugins.toast.showWithOptions(
					{
						message:'Litros Abastecidos superior ao limite permitido.',
						duration:"2000",
						position:"center",
						styling:{ textSize:20 },
						addPixelsY:0
					});
				}
				else
				{
					alert('Litros Abastecidos superior ao limite permitido.');
				}

				timer = setTimeout(function()
				{
					window.location.hash = 'homepage';
				},8000);
			}
			else if(estado == 5) //carrinho com produtos não contratualizados
			{
				if(window.plugins)
				{
					window.plugins.toast.showWithOptions(
					{
						message:'Contem Produtos não contratualizados,não sendo possível realizar o pagamento.',
						duration:"2000",
						position:"center",
						styling:{ textSize:20 },
						addPixelsY:0
					});
				}
				else
				{
					alert('Contem Produtos não contratualizados,não sendo possível realizar o pagamento.');
				}

				timer = setTimeout(function()
				{
					window.location.hash = 'homepage';
				},8000);
			}
			else if(estado == 6) //carrinho com produtos não contratualizados
			{
				if(window.plugins)
				{
					window.plugins.toast.showWithOptions(
					{
						message:'Cliente Bloqueado.',
						duration:"2000",
						position:"center",
						styling:{ textSize:20 },
						addPixelsY:0
					});
				}
				else
				{
					alert('Cliente Bloqueado.');
				}

				timer = setTimeout(function()
				{
					window.location.hash = 'homepage';
				},8000);
			}

		},
		error:function(data)
		{
			var counter = window.localStorage.getItem('counter');
			if(counter < 3)
			{
				console.error('erro, a tentar novamente');
				//Se falhou vamos tentar novamente até um máximo de 3 vezes
				counter=counter+1;
				window.localStorage.setItem('counter',counter);
				confirmPayment_2();
			}
			else
			{
				if(window.plugins)
				{
					window.plugins.toast.showWithOptions(
					{
						message:'Erro, tente novamente.',
						duration:"2000",
						position:"center",
						styling:{ textSize:20 },
						addPixelsY:0
					});
				}
				else console.error('erro em reloadPaymentsPage => pagamentos.php');
			}
		}
	});
}
function initiatePayment()
{
	$('#paymentsButton').css("display","none");
	$('#paymentsButton_wait').css("display","inline-block");

	window.localStorage.setItem('counter','0');

	//Invoca a funcao apenas 1 segundo apos
	setTimeout(function() {
		initiatePayment_2();
	}, 1000);

}
function initiatePayment_2()
{
	if(window.localStorage.getItem("telemovel") == '')
	{
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:'ERRO INTERNO',
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else console.error('ERRO INTERNO');

		$('#paymentsButton_wait').css("display","none");
		$('#paymentsButton').css("display","inline-block");

		return;
	}

	var kms=$('#kms-veiculo').val();
	window.localStorage.setItem("kms",kms);

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/pagamentos.php',
		async:false,
		/*data:{'type':'initiatePayment','dp':(new Date()).getTime(),'telemovel':window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token") },*/
		data:{'type':'initiatePayment','kms':kms,'dp':(new Date()).getTime(),'telemovel':window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token") },
		dataType:'json',
		success:function(data)
		{
			var RequestID = data.REQUESTID;
			if(RequestID != '' && RequestID != null)
			{
				window.localStorage.setItem('requestid',RequestID);
				window.location.hash = 'pay-standalone';
			}
			else
			{
				$('#paymentsButton_wait').css("display","none");
				$('#paymentsButton').css("display","inline-block");
				//não fez o initiatePayment,logo não tem qualquer pagamento disponivel para ser tratado,apresentar mensagem de erro
				if(window.plugins)
				{
					window.plugins.toast.showWithOptions(
					{
						message:'Não foram encontrados pagamentos para aprovação.',
						duration:"2000",
						position:"center",
						styling:{ textSize:20 },
						addPixelsY:0
					});
				}
				else console.error('Não foram encontrados pagamentos para aprovação');
			}
		},
		error:function(data)
		{
			var counter = window.localStorage.getItem('counter');
			if(counter < 3)
			{
				console.error('erro, a tentar novamente');
				//Se falhou vamos tentar novamente até um máximo de 3 vezes
				counter=counter+1;
				window.localStorage.setItem('counter',counter);
				initiatePayment_2();
			}
			else
			{
				$('#paymentsButton_wait').css("display","none");
				$('#paymentsButton').css("display","inline-block");

				if(window.plugins)
				{
					window.plugins.toast.showWithOptions(
					{
						message:'Erro, tente novamente.',
						duration:"2000",
						position:"center",
						styling:{ textSize:20 },
						addPixelsY:0
					});
				}
				else console.error('erro em reloadPaymentsPage => pagamentos.php');
			}

		}
	});
	// return html;
}

function showPaymentStandalone()
{
	var html = '';
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/pagamentos.php',
		async:false,
		data:{'type':'showPaymentStandalone','dp':(new Date()).getTime(),'telemovel':window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token"),'requestid':window.localStorage.getItem("requestid") },
		dataType:'html',
		success:function(data)
		{
			html = data;
		},
		error:function(data)
		{
			timer = setTimeout(function()
			{
				window.location.hash = 'homepage';
			},8000);

			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:'Erro, tente novamente.',
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else console.error('erro em reloadPaymentsPage => pagamentos.php');

		}
	});
	return html;
}

function reloadPagamentosPOS()
{
	var html = '';
	html += '<div class="titulo confirmacao-pagamento-titulo-trad">Confirmação Pagamento</div>';
	html += '<div class="reloadPaymentsPage reload-pos">';
	html += '<div class="mensagem aguardar-confirmacao-pagamento-trad">A aguardar Confirmação de Pagamento</div>';
	html += '<div class="reloadPaymentsButton actualizar-pagamentos-trad" onclick="reloadPaymentsPOS()">Actualizar Pagamentos</div>';
	html += '<div class="reloadPaymentsButton gerar-novo-token-trad" onclick="gerarToken()">GERAR NOVO TOKEN</div>';
	html += '<div class="imagem"><img src="img/moedas.png"></div>';
	html += '</div>';
	return html;
}

function gerarToken()
{
	var pagamento_pos = window.localStorage.getItem("pagamento-pos");
	var postoCountry = window.localStorage.getItem("postoCountry");

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/pagamentos.php',
		async:false,
		data:{'type':'gerarToken','dp':(new Date()).getTime(),'pagamento_pos':pagamento_pos,'postoCountry':postoCountry},
		dataType:'html',
		success:function(data)
		{
			var msg = 'Novo token gerado com sucesso.';
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:msg,
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert(msg);
			}

			// var timeout = setTimeout(window.location.hash="pin-pos",3000);
		},
		error:function(data)
		{

		}
	});
}

// function resumoReserva(StationID = 0,reserva = '',kms= '',litros= '',metodo_pagamento = '')
function resumoReserva(StationID = 0,reserva = '',kms= '',litros= '',total_abastecer= '')
{
	var html = '';
	// if(StationID != '' && reserva != '' && metodo_pagamento != '' && kms != '' && litros != '')
	if(StationID != '' && reserva != '' && kms != '' && litros != ''&& total_abastecer != '')
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:false,
			data:{
				'type':'reservar',
				'StationID':StationID,
				'reserva':reserva,
				'dp':(new Date()).getTime(),
				'kms':kms,
				'litros':litros,
				'total_abastecer':total_abastecer,
				'token':window.localStorage.getItem("token")
			},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em reservar => actions.php');
			}
		});
	}
	else
	{
		window.location.hash='homepage';
	}

	return html;
}

function cancelarReserva(StationID='',ReservationNumber=0,NameService='',Entry_No='')
{
	clearSessionStorage();
	window.localStorage.setItem("removeStationID",StationID);
	window.localStorage.setItem("removeReservationNumber",ReservationNumber);
	window.localStorage.setItem("removeNameService",NameService);
	window.localStorage.setItem("removeEntryNo",Entry_No);
	window.location.hash="cancelar-reserva";
}

function cancelaReserva(StationID = '',ReservationNumber = 0,NameService = '',Entry_No = '')
{
	var html = '';
	if(StationID != '' && ReservationNumber != '' && NameService != '' && Entry_No != '')
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:false,
			data:{'type':'cancelaReserva','dp':(new Date()).getTime(),'StationID':StationID,'ReservationNumber':ReservationNumber,'NameService':NameService,'Entry_No':Entry_No,'token':window.localStorage.getItem("token")},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em cancelaReserva => actions.php');
			}
		});
	}
	else
	{
		window.location.hash='homepage';
	}

	return html;
}


function showHomepagePOS()/*POS*/
{
	var posto_info='POSTO G27';
	var posto_name=window.localStorage.getItem("postoPOS");
	header = '<div class="app-header"><div class="header"><div class="left"><img src="img/logo.jpg" alt="" border="0" class="logo"></div><div class="cent"></div></div></div>';
	$("#header").html(header);

	html = '<div class="homepageContainer container">';
		html += '<div id="home_info" class="homepageLoginInfo">';
			html += '<div class="info-page">';
				html += '<div class="role">'+posto_info+'</div>';
				html += '<div class="matricula"><span>'+posto_name+'</span></div>';
			html += '</div>';
		html += '</div>';
	html += '</div>';

	html+= '<div class="container" style="height:100%;margin-top:90px;background:#fff;box-shadow:1px 0px 1px 0px #ccc; padding-top:20px">';
	html += '<div class="homepage-pos">';
	html += '<div class="menu_pos" onclick="window.location.hash=\'iniciar-pagamento\'"><img class="menu_svg" src="img/icons-menu/carregamentos.svg"><div class="iniciar-pagamento-trad">Iniciar pagamento</div></div>';
	html += '<div class="menu_pos" onclick="window.location.hash=\'historico-pagamentos\'"><img class="menu_svg" src="img/icons-menu/historico.svg"><div class="historico-pagamento-trad">Histórico pagamentos</div></div>';
	if(window.localStorage.getItem("permissao") == 1)
	{
		html += '<div class="menu_pos" onclick="window.location.hash=\'definicao-posto\'"><img class="menu_svg" src="img/icons-menu/configuracoes.svg"><div class="definicao-posto-trad">Definição de posto</div></div>';
	}

	html += '<div class="menu_pos" onclick="window.location.hash=\'account-language-pos\'"><img class="menu_svg" src="img/icons-menu/configuracoes.svg">lingua</div>';

	html += '<div class="menu_pos" onclick="window.location.hash=\'contactos-pos\'"><img class="menu_svg" src="img/icons-menu/contactos.svg"><div class="contactos-trad">Contactos</div></div>';
	html += '<div class="menu_pos" onclick="window.location.hash=\'termos-legais-pos\'"><img class="menu_svg" src="img/icons-menu/termos_legais.svg"><div class="termos-legais-trad">Termos Legais</div></div>';

	//html += '<div class="menu_pos" onclick="window.location.hash=\'account-contactos-pos\'"><img class="menu_svg" src="img/icons-menu/contactos.svg">Ajuda e Contactos</div>';
	html += '<div class="menu_pos" onclick="window.location.hash=\'logout\'" style="color:red"><img class="menu_svg" src="img/icons-menu/logout.svg"><div class="logout-trad">Logout</div></div>';

	html += '</div>';

	html += '</div>';

	return html;
}

function pesquisa_historico_pos(pesquisa='')
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:true,
			data:{'type':'showHistoricoPagamentosPOS',telemovel:window.localStorage.getItem("telemovel"),'dp':(new Date()).getTime(),token:window.localStorage.getItem("token"),pesquisa:pesquisa },
			dataType:'html',
			success:function(data)
			{
				$('#pesquisa-box').empty();
				$('#pesquisa-box').html(data);
			},
			error:function(data)
			{
				console.error('erro em showHistoricoGlobal => pagamentos.php');
			}
		});
}
function pesquisa_historico_callcenter(pesquisa='')
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:true,
			data:{'type':'showHistoricoPagamentosCallcenter',telemovel:window.localStorage.getItem("telemovel"),'dp':(new Date()).getTime(),token:window.localStorage.getItem("token"),pesquisa:pesquisa },
			dataType:'html',
			success:function(data)
			{
				$('#pesquisa-box').empty();
				$('#pesquisa-box').html(data);
			},
			error:function(data)
			{
				console.error('erro em showHistoricoGlobal => pagamentos.php');
			}
		});
}
function pesquisa_historico(pesquisa='')
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:true,
			data:{'type':'showHistoricoGlobalFiltrado',telemovel:window.localStorage.getItem("telemovel"),'dp':(new Date()).getTime(),token:window.localStorage.getItem("token"),pesquisa:pesquisa },
			dataType:'html',
			success:function(data)
			{
				$('#pesquisa-box').empty();
				$('#pesquisa-box').html(data);
			},
			error:function(data)
			{
				console.error('erro em showHistoricoGlobal => pagamentos.php');
			}
		});
}

function showHistoricoGlobal(e)
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:true,
			data:{'type':'showHistoricoGlobal',telemovel:window.localStorage.getItem("telemovel"),'dp':(new Date()).getTime(),token:window.localStorage.getItem("token")},
			dataType:'html',
			success:function(data)
			{
				html += data;
				$(e).html(html);
			},
			error:function(data)
			{
				console.error('erro em showHistoricoGlobal => pagamentos.php');
			}
		});
	//return html;
}

function showHistoricoPagamentosPOS()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'showHistoricoPagamentosPOS','dp':(new Date()).getTime(),token:window.localStorage.getItem("token"),IMEI:window.localStorage.getItem("IMEI") },
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em showHistoricoPagamentosPOS => pagamentos.php');
			}
		});
	return html;
}

function showHistoricoPagamentosCallcenter()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'showHistoricoPagamentosCallcenter','dp':(new Date()).getTime() },
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em showHistoricoPagamentosCallcenter => pagamentos.php');
			}
		});
	return html;
}

function filtraHistorico(IMEI)
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'filtraHistorico','dp':(new Date()).getTime(),'IMEI':IMEI },
			dataType:'html',
			success:function(data)
			{
				$('#historico_pagamentos').empty();
				$('#historico_pagamentos').html(data);
			},
			error:function(data)
			{
				console.error('erro em filtraHistorico => pagamentos.php');
			}
		});
	// return html;
}

function showHomepageCallCenter()
{
	var posto_info='CALLCENTER G27';
	var posto_name=window.localStorage.getItem("telemovel");
	header = '<div class="app-header"><div class="header"><div class="left"><img src="img/logo.jpg" alt="" border="0" class="logo"></div><div class="cent"></div></div></div>';
	$("#header").html(header);

	html = '<div class="homepageContainer container">';
		html += '<div id="home_info" class="homepageLoginInfo">';
			html += '<div class="info-page">';
				html += '<div class="role">'+posto_info+'</div>';
				html += '<div class="matricula"><span>'+posto_name+'</span></div>';
			html += '</div>';
		html += '</div>';
	html += '</div>';

	html+= '<div class="container" style="height:100%;margin-top:90px;background:#fff;box-shadow:1px 0px 1px 0px #ccc; padding-top:20px">';
	html += '<div class="homepage-pos">';
	html += '<div class="menu_pos" onclick="goIniciarPagamentoCallcenter()"><img class="menu_svg" src="img/icons-menu/carregamentos.svg"><div class="iniciar-pagamento-trad">Iniciar pagamento</div></div>';
	html += '<div class="menu_pos" onclick="window.location.hash=\'historico-pagamentos-callcenter\'"><img class="menu_svg" src="img/icons-menu/historico.svg"><div class="historico-pagamento-trad">Histórico pagamentos</div></div>';
	html += '<div class="menu_pos" onclick="window.location.hash=\'account-language-callcenter\'"><img class="menu_svg" src="img/icons-menu/configuracoes.svg">lingua</div>';
	html += '<div class="menu_pos" onclick="window.location.hash=\'contactos-callcenter\'"><img class="menu_svg" src="img/icons-menu/contactos.svg"><div class="contactos-trad">Contactos</div></div>';
	html += '<div class="menu_pos" onclick="window.location.hash=\'termos-legais-callcenter\'"><img class="menu_svg" src="img/icons-menu/termos_legais.svg"><div class="termos-legais-trad">Termos Legais</div></div>';

	html += '<div class="menu_pos" onclick="window.location.hash=\'logout\'" style="color:red"><img class="menu_svg" src="img/icons-menu/logout.svg"><div class="logout-trad">Logout</div></div>';

	html += '</div>';
	html += '</div>';

	return html;
}

function cleanPagamentoCallcenter()
{
	window.localStorage.removeItem("backup_balance");
	window.localStorage.removeItem("backup_IMEI");
	window.localStorage.removeItem("backup_postoCountry");
	window.localStorage.removeItem("backup_postoPOS_txt");
	window.localStorage.removeItem("backup_telemovel_pos");
	window.localStorage.removeItem("backup_produtos_pos");
	window.localStorage.removeItem("backup_matricula_pos");
	window.localStorage.removeItem("backup_abasteceu_pos");
	window.localStorage.removeItem("backup_kms_pos");

	window.localStorage.removeItem("limite_diario");
	window.localStorage.removeItem("limite_semanal");
	window.localStorage.removeItem("limite_mensal");

	window.localStorage.removeItem("telemovel_pos");
	window.localStorage.removeItem("produtos_pos");
	window.localStorage.removeItem("matricula_pos");
	window.localStorage.removeItem("litros_pos");
	window.localStorage.removeItem("postoCountry");
	window.localStorage.removeItem("postoPOS_txt");
	window.localStorage.removeItem("postoPOS");
	window.localStorage.removeItem("pagamento-pos");
	window.localStorage.removeItem("token_posto");
	window.localStorage.removeItem("balance_pos");
	window.localStorage.removeItem("IMEI");

	window.localStorage.setItem("kms_pos",0);
	window.localStorage.setItem("abasteceu_pos",0);
}

function goIniciarPagamentoCallcenter()
{
	cleanPagamentoCallcenter();
	window.location.hash = 'iniciar-pagamento-callcenter';
}

function showVerificarTokenCliente()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:false,
			data:{'type':'showVerificarTokenCliente','dp':(new Date()).getTime()},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em showVerificarTokenCliente => actions.php');
			}
		});

	return html;
}

function showVerificaToken()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:false,
			data:{'type':'showVerificaToken','dp':(new Date()).getTime()},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em showVerificaToken => actions.php');
			}
		});

	return html;
}

function valida_token()
{
	var postoCountry = window.localStorage.getItem("postoCountry");
	var token_posto = window.localStorage.getItem("token_posto");
	var IMEI = window.localStorage.getItem("IMEI");


	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:false,
			data:{'type':'valida_posto','dp':(new Date()).getTime(),'IMEI':IMEI,'token_posto':token_posto,"postoCountry":postoCountry },
			dataType:'html',
			success:function(data)
			{
				// console.log(data);
				if(data == 1)
				{
					window.localStorage.setItem('active','true');

					if(window.plugins)
					{
						window.plugins.toast.showWithOptions(
						{
							message:'Posto Activo.',
							duration:"2000",
							position:"center",
							styling:{ textSize:20 },
							addPixelsY:0
						});

					}
					else
					{
						alert('Posto Activo.');
					}

					timer = setTimeout(function()
					{
						window.location.hash = 'iniciar-pagamento';
					},3000);
				}
				else // Token Incorrecto
				{
					if(window.plugins)
					{
						window.plugins.toast.showWithOptions(
						{
							message:'Token Incorrecto.',
							duration:"2000",
							position:"center",
							styling:{ textSize:20 },
							addPixelsY:0
						});

					}
					else
					{
						alert('Token Incorrecto.');
					}

					//reset token inputs
					document.getElementById('mvar1').value = "";
					document.getElementById('mvar2').value = "";
					document.getElementById('mvar3').value = "";
					document.getElementById('mvar4').value = "";
					document.getElementById('mvar5').value = "";
					document.getElementById('mvar6').value = "";


					window.location.hash = 'definicao-posto';
				}
				// html += data;
			},
			error:function(data)
			{
				console.error('erro em valida_posto => actions.php');
			}
		});
}

function showDefinicaoPosto()
{
	var postoPOS = window.localStorage.getItem("postoPOS");
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:false,
			data:{'type':'showDefinicaoPosto','dp':(new Date()).getTime(),'postoPOS':postoPOS },
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em showDefinicaoPosto => actions.php');
			}
		});

	return html;
}


function validaTelemovelAlterarMatricula()
{
	var telemovel = window.localStorage.getItem("telemovel_pos");
	var indicativo = window.localStorage.getItem("indicativo");

	if(telemovel == '' || telemovel == null)
	{

		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:'Necessário preencher o número de telemóvel.',
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert('Necessário preencher o número de telemóvel.');
		}
	}
	else
	{
		//TODO verificar número se é válido
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/logins.php',
			async:false,
			data:{'type':'verificaNumero','dp':(new Date()).getTime(),'telemovel':indicativo+telemovel },
			dataType:'html',
			success:function(data)
			{
				if(data == 1)
				{
					window.localStorage.setItem("backup_postoCountry",window.localStorage.getItem("postoCountry"));
					window.localStorage.setItem("backup_matricula_pos",window.localStorage.getItem("matricula_pos"));
					window.localStorage.setItem("backup_kms_pos",window.localStorage.getItem("kms_pos"));
					window.localStorage.setItem("backup_postoPOS_txt",window.localStorage.getItem("postoPOS_txt"));
					window.localStorage.setItem("backup_produtos_pos",window.localStorage.getItem("produtos_pos"));
					window.localStorage.setItem("backup_telemovel_pos",window.localStorage.getItem("telemovel_pos"));
					window.localStorage.setItem("backup_abasteceu_pos",window.localStorage.getItem("abasteceu_pos"));
					window.localStorage.setItem("backup_litros_pos",window.localStorage.getItem("litros_pos"));
					window.localStorage.setItem("backup_balance",window.localStorage.getItem("balance_pos"));
					window.localStorage.setItem("backup_IMEI",window.localStorage.getItem("IMEI"));
					window.localStorage.setItem("backup_cliente",window.localStorage.getItem("cliente"));
					window.localStorage.setItem("backup_indicativo",window.localStorage.getItem("indicativo"));

					window.location.hash = 'gestao-matricula';
				}
				else
				{
					if(window.plugins)
					{
						window.plugins.toast.showWithOptions(
						{
							message:'O número de telemóvel não é válido.',
							duration:"2000",
							position:"center",
							styling:{ textSize:20 },
							addPixelsY:0
						});
					}
					else
					{
						alert('O número de telemóvel não é válido.');
					}
				}
			},
			error:function(data)
			{
				console.error('erro em showIniciarPagamentoCallcenter => pagamentos.php');
			}
		});

	}
}

function validaTelemovelAlterarLitros()
{
	var telemovel = window.localStorage.getItem("telemovel_pos");
	var indicativo = window.localStorage.getItem("indicativo");

	if(telemovel == '' || telemovel == null)
	{

		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:'Necessário preencher o número de telemóvel.',
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert('Necessário preencher o número de telemóvel.');
		}
	}
	else
	{
		//TODO verificar número se é válido
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/logins.php',
			async:false,
			data:{'type':'verificaNumero','dp':(new Date()).getTime(),'telemovel':indicativo+telemovel },
			dataType:'html',
			success:function(data)
			{
				if(data == 1)
				{
					window.localStorage.setItem("backup_postoCountry",window.localStorage.getItem("postoCountry"));
					window.localStorage.setItem("backup_matricula_pos",window.localStorage.getItem("matricula_pos"));
					window.localStorage.setItem("backup_kms_pos",window.localStorage.getItem("kms_pos"));
					window.localStorage.setItem("backup_postoPOS_txt",window.localStorage.getItem("postoPOS_txt"));
					window.localStorage.setItem("backup_produtos_pos",window.localStorage.getItem("produtos_pos"));
					window.localStorage.setItem("backup_telemovel_pos",window.localStorage.getItem("telemovel_pos"));
					window.localStorage.setItem("backup_abasteceu_pos",window.localStorage.getItem("abasteceu_pos"));
					window.localStorage.setItem("backup_litros_pos",window.localStorage.getItem("litros_pos"));
					window.localStorage.setItem("backup_balance",window.localStorage.getItem("balance_pos"));
					window.localStorage.setItem("backup_IMEI",window.localStorage.getItem("IMEI"));
					window.localStorage.setItem("backup_cliente",window.localStorage.getItem("cliente"));
					window.localStorage.setItem("backup_indicativo",window.localStorage.getItem("indicativo"));

					window.location.hash = 'alterar-litros';
				}
				else
				{
					if(window.plugins)
					{
						window.plugins.toast.showWithOptions(
						{
							message:'O número de telemóvel não é válido.',
							duration:"2000",
							position:"center",
							styling:{ textSize:20 },
							addPixelsY:0
						});
					}
					else
					{
						alert('O número de telemóvel não é válido.');
					}
				}
			},
			error:function(data)
			{
				console.error('erro em showIniciarPagamentoCallcenter => pagamentos.php');
			}
		});

	}
}

function validaTelemovelAlterarCartao()
{
	var telemovel = window.localStorage.getItem("telemovel_pos");
	var indicativo = window.localStorage.getItem("indicativo");

	if(telemovel == '' || telemovel == null)
	{

		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:'Necessário preencher o número de telemóvel.',
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert('Necessário preencher o número de telemóvel.');
		}
	}
	else
	{
		//TODO verificar número se é válido
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/logins.php',
			async:false,
			data:{'type':'verificaNumero','dp':(new Date()).getTime(),'telemovel':indicativo+telemovel },
			dataType:'html',
			success:function(data)
			{
				if(data == 1)
				{
					window.localStorage.setItem("backup_postoCountry",window.localStorage.getItem("postoCountry"));
					window.localStorage.setItem("backup_matricula_pos",window.localStorage.getItem("matricula_pos"));
					window.localStorage.setItem("backup_kms_pos",window.localStorage.getItem("kms_pos"));
					window.localStorage.setItem("backup_postoPOS_txt",window.localStorage.getItem("postoPOS_txt"));
					window.localStorage.setItem("backup_produtos_pos",window.localStorage.getItem("produtos_pos"));
					window.localStorage.setItem("backup_telemovel_pos",window.localStorage.getItem("telemovel_pos"));
					window.localStorage.setItem("backup_abasteceu_pos",window.localStorage.getItem("abasteceu_pos"));
					window.localStorage.setItem("backup_litros_pos",window.localStorage.getItem("litros_pos"));
					window.localStorage.setItem("backup_balance",window.localStorage.getItem("balance_pos"));
					window.localStorage.setItem("backup_IMEI",window.localStorage.getItem("IMEI"));
					window.localStorage.setItem("backup_cliente",window.localStorage.getItem("cliente"));
					window.localStorage.setItem("backup_indicativo",window.localStorage.getItem("indicativo"));

					window.location.hash = 'gestao-cartao';
				}
				else
				{
					if(window.plugins)
					{
						window.plugins.toast.showWithOptions(
						{
							message:'O número de telemóvel não é válido.',
							duration:"2000",
							position:"center",
							styling:{ textSize:20 },
							addPixelsY:0
						});
					}
					else
					{
						alert('O número de telemóvel não é válido.');
					}
				}
			},
			error:function(data)
			{
				console.error('erro em showIniciarPagamentoCallcenter => pagamentos.php');
			}
		});

	}
}

function showIniciarPagamentoCallcenter()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'showIniciarPagamentoCallcenter','dp':(new Date()).getTime() },
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em showIniciarPagamentoCallcenter => pagamentos.php');
			}
		});

	return html;
}

function showAlterarLitros()
{
	var Customer_Type=window.localStorage.getItem("backup_Customer_Type");
	var indicativo=window.localStorage.getItem("indicativo");
	var telemovel_pos=window.localStorage.getItem("telemovel_pos");
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'showAlterarLitros','dp':(new Date()).getTime(),'Customer_Type':Customer_Type,'telemovel':indicativo+telemovel_pos },
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em showAlterarLitros => pagamentos.php');
			}
		});

	return html;
}


function showGestaoCartao()
{
	var html = '';
	html += '<div class="homepage-pos">';
		html += '<div class="button_reserva alterar-cartao-trad" onclick="window.location.hash=\'alterar-cartao\'" style="background:#15c513;color:#fff;display:inline-block;padding:10px 40px;margin:0 2px;border-radius:25px;margin-bottom:10px;">ALTERAR CARTÃO</div>';
		html += '<div class="button_reserva criar-cartao-trad" onclick="window.location.hash=\'criar-cartao\'" style="background:#15c513;color:#fff;display:inline-block;padding:10px 40px;margin:0 2px;border-radius:25px;margin-bottom:10px;">CRIAR CARTÃO</div>';
	html += '</div>';
	return html;
}
function showGestaoMatricula()
{
	var html = '';
	html += '<div class="homepage-pos">';
		html += '<div class="button_reserva alterar-matricula-trad" style="background:#15c513;color:#fff;display:inline-block;padding:10px 40px;margin:0 2px;border-radius:25px;margin-bottom:10px;" onclick="window.location.hash=\'alterar-matricula\'">ALTERAR MATRÍCULA</div>';
		html += '<div class="button_reserva criar-matricula-trad" style="background:#15c513;color:#fff;display:inline-block;padding:10px 40px;margin:0 2px;border-radius:25px;margin-bottom:10px;" onclick="window.location.hash=\'criar-matricula\'">CRIAR MATRÍCULA</div>';
	html += '</div>';
	return html;
}
function showAlterarCartao()
{
	var html = '';
	var Customer_Type=window.localStorage.getItem("Customer_Type");
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'showAlterarCartao','dp':(new Date()).getTime(),'Customer_Type':Customer_Type,'telemovel':window.localStorage.getItem("indicativo")+window.localStorage.getItem("telemovel_pos") },
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em showAlterarCartao => pagamentos.php');
			}
		});
	return html;
}
function showCriarCartao()
{
	var html = '';
	var Customer_Type=window.localStorage.getItem("Customer_Type");
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'showCriarCartao','dp':(new Date()).getTime(),'Customer_Type':Customer_Type,'telemovel':window.localStorage.getItem("indicativo")+window.localStorage.getItem("telemovel_pos")  },
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em showCriarCartao => pagamentos.php');
			}
		});
	return html;
}
function showAlterarMatricula()
{
	var html = '';
	var Customer_Type=window.localStorage.getItem("Customer_Type");
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'showAlterarMatricula','dp':(new Date()).getTime(),'Customer_Type':Customer_Type,'telemovel':window.localStorage.getItem("indicativo")+window.localStorage.getItem("telemovel_pos")  },
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em showAlterarMatricula => pagamentos.php');
			}
		});

	return html;
}
function showCriarMatricula()
{
	var html = '';
	var Customer_Type=window.localStorage.getItem("Customer_Type");
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'showCriarMatricula','dp':(new Date()).getTime(),'Customer_Type':Customer_Type,'telemovel':window.localStorage.getItem("indicativo")+window.localStorage.getItem("telemovel_pos")  },
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em showCriarMatricula => pagamentos.php');
			}
		});

	return html;
}

function goCriarMatriculaCartao()
{
	var telemovel = window.localStorage.getItem("indicativo2")+window.localStorage.getItem("telemovel_pos");
	window.localStorage.setItem("backup_cartao_telemovel_pos",window.localStorage.getItem("telemovel_pos"));
	window.localStorage.setItem("backup_cartao_nome",window.localStorage.getItem("nome_cartao"));
	window.localStorage.setItem("backup_cartao_novo_telemovel",window.localStorage.getItem("novo_telemovel"));
	window.localStorage.setItem("backup_cartao_indicativo",window.localStorage.getItem("indicativo2"));
	window.localStorage.setItem("backup_cartao_pin",window.localStorage.getItem("pin_cartao"));
	window.localStorage.setItem("backup_cartao_matricula",window.localStorage.getItem("matricula"));
	window.localStorage.setItem("backup_cartao_limite_diario",window.localStorage.getItem("limite_diario"));
	window.localStorage.setItem("backup_cartao_limite_semanal",window.localStorage.getItem("limite_semanal"));
	window.localStorage.setItem("backup_cartao_limite_mensal",window.localStorage.getItem("limite_mensal"));


	if(telemovel != null)
	{
		window.location.hash="criar-matricula-cartao";
	}
}

function showCriarMatriculaCartao()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'showCriarMatriculaCartao','dp':(new Date()).getTime(),'telemovel':window.localStorage.getItem("indicativo2")+window.localStorage.getItem("telemovel_pos")  },
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em showCriarMatriculaCartao => pagamentos.php');
			}
		});

	return html;
}

function showIniciarPagamento()
{
	var postoPOS = window.localStorage.getItem("postoPOS");
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'showIniciarPagamento','dp':(new Date()).getTime(),'postoPOS':postoPOS },
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em showIniciarPagamento => pagamentos.php');
			}
		});

	return html;
}

function alterarMatricula()
{
	var matricula = window.localStorage.getItem("matricula");
	var professional_diesel = window.localStorage.getItem("professional_diesel");
	var telemovel = window.localStorage.getItem("backup_indicativo")+window.localStorage.getItem("backup_telemovel_pos");

	$.ajax({
				type:'POST',
				url:globalUrl+'admin_tfc/pagamentos.php',
				async:false,
				data:{
					'type':'alterarMatricula',
					'dp':(new Date()).getTime(),
					'telemovel':telemovel,
					'matricula':matricula,
					'professional_diesel':professional_diesel

				},
				dataType:'json',
				success:function(data)
				{
					var STATUS = data.STATUS;

					if(STATUS == 'SUCESS')
					{
						if(window.plugins)
						{
							window.plugins.toast.showWithOptions(
							{
								message:'Matrícula alterada com sucesso.',
								duration:"2000",
								position:"center",
								styling:{ textSize:20 },
								addPixelsY:0
							});
						}
						else
						{
							alert('Matrícula alterada com sucesso.');
						}

						window.localStorage.setItem("backup_matricula_pos",window.localStorage.getItem("matricula"));

						setTimeout(function()
						{
							window.location.hash = 'iniciar-pagamento-callcenter';
						},8000);
					}
					else
					{
						if(window.plugins)
						{
							window.plugins.toast.showWithOptions(
							{
								message:'Não foi possível alterar a Matrícula.',
								duration:"2000",
								position:"center",
								styling:{ textSize:20 },
								addPixelsY:0
							});
						}
						else
						{
							alert('Não foi possível alterar a Matrícula.');
						}
					}
				},
				error:function(data)
				{
					console.error('erro em alterarMatricula => pagamentos.php');
				}
			});
}

function criarMatricula()
{
	var customer_no = window.localStorage.getItem("customer_no");
	var matricula = window.localStorage.getItem("matricula");
	var professional_diesel = window.localStorage.getItem("professional_diesel");


	$.ajax({
				type:'POST',
				url:globalUrl+'admin_tfc/pagamentos.php',
				async:false,
				data:{
					'type':'criarMatricula',
					'dp':(new Date()).getTime(),
					'customer_no':customer_no,
					'matricula':matricula,
					'professional_diesel':professional_diesel

				},
				dataType:'json',
				success:function(data)
				{
					var STATUS = data.STATUS;
					var MSG = data.MSG;

					if(STATUS == 'SUCESS')
					{
						if(window.plugins)
						{
							window.plugins.toast.showWithOptions(
							{
								message:'Matrícula criada com sucesso.',
								duration:"2000",
								position:"center",
								styling:{ textSize:20 },
								addPixelsY:0
							});
						}
						else
						{
							alert('Matrícula criada com sucesso.');
						}

						window.localStorage.setItem("backup_matricula_pos",window.localStorage.getItem("matricula"));

						setTimeout(function()
						{
							window.location.hash = 'iniciar-pagamento-callcenter';
						},8000);
					}
					else
					{
						if(window.plugins)
						{
							window.plugins.toast.showWithOptions(
							{
								message:MSG,
								duration:"2000",
								position:"center",
								styling:{ textSize:20 },
								addPixelsY:0
							});
						}
						else
						{
							alert(MSG);
						}
					}
				},
				error:function(data)
				{
					console.error('erro em criarMatricula => pagamentos.php');
				}
			});
}

function criarMatriculaCartao()
{
	var customer_no = window.localStorage.getItem("customer_no");
	var matricula = window.localStorage.getItem("matricula");
	var professional_diesel = window.localStorage.getItem("professional_diesel");


	$.ajax({
				type:'POST',
				url:globalUrl+'admin_tfc/pagamentos.php',
				async:false,
				data:{
					'type':'criarMatriculaCartao',
					'dp':(new Date()).getTime(),
					'customer_no':customer_no,
					'matricula':matricula,
					'professional_diesel':professional_diesel

				},
				dataType:'json',
				success:function(data)
				{
					var STATUS = data.STATUS;
					var MSG = data.MSG;

					if(STATUS == 'SUCESS')
					{
						if(window.plugins)
						{
							window.plugins.toast.showWithOptions(
							{
								message:'Matrícula criada com sucesso.',
								duration:"2000",
								position:"center",
								styling:{ textSize:20 },
								addPixelsY:0
							});
						}
						else
						{
							alert('Matrícula criada com sucesso.');
						}

						window.localStorage.setItem("backup_cartao_matricula",window.localStorage.getItem("matricula"));

						setTimeout(function()
						{
							window.location.hash = 'criar-cartao';
						},8000);
					}
					else
					{
						if(window.plugins)
						{
							window.plugins.toast.showWithOptions(
							{
								message:MSG,
								duration:"2000",
								position:"center",
								styling:{ textSize:20 },
								addPixelsY:0
							});
						}
						else
						{
							alert(MSG);
						}
					}
				},
				error:function(data)
				{
					console.error('erro em criarMatricula => pagamentos.php');
				}
			});
}

function verificaMatriculaProfessionalDiesel(matricula = '')
{
	$.ajax({
				type:'POST',
				url:globalUrl+'admin_tfc/pagamentos.php',
				async:false,
				data:{
					'type':'verificaMatriculaProfessionalDiesel',
					'dp':(new Date()).getTime(),
					'matricula':matricula
				},
				dataType:'html',
				success:function(data)
				{
					if(data == 'true')
					{
						$('#professional_diesel').prop('checked',true);
						window.localStorage.setItem("professional_diesel",1);
					}
					else
					{
						$('#professional_diesel').prop('checked',false);
						window.localStorage.setItem("professional_diesel",0);
					}
				},
				error:function(data)
				{
					console.error('erro em alterarCartao => pagamentos.php');
				}
			});
}

function alterarCartao()
{
	var limite_diario = window.localStorage.getItem("limite_diario");
	var limite_semanal = window.localStorage.getItem("limite_semanal");
	var limite_mensal = window.localStorage.getItem("limite_mensal");
	var Customer_Type = window.localStorage.getItem("Customer_Type");
	var telemovel = window.localStorage.getItem("indicativo")+window.localStorage.getItem("telemovel_pos");
	var pin = window.localStorage.getItem("pin");
	var old_pin = window.localStorage.getItem("old_pin");
	var nome = window.localStorage.getItem("nome");

	var pin_alterado = 0;
	if(old_pin != pin)
	{
		pin_alterado = 1;
	}
	if(limite_diario > 0 && limite_semanal > 0 && limite_mensal > 0 && nome != '' && (($('#pin').val().length > 3 && $('#pin').val().length < 7) || pin =='' || pin == '0000'))
	{
		if(pin == '0' && pin_alterado == 0)
		{
			if($('#pin').val().length == 4) pin = '0000';
			else if($('#pin').val().length == 5) pin = '00000';
			else if($('#pin').val().length == 6) pin = '000000';
		}

		$.ajax({
				type:'POST',
				url:globalUrl+'admin_tfc/pagamentos.php',
				async:false,
				data:{
					'type':'alterarCartao',
					'dp':(new Date()).getTime(),
					'telemovel':telemovel,
					'Customer_Type':Customer_Type,
					'limite_diario':limite_diario,
					'limite_semanal':limite_semanal,
					'limite_mensal':limite_mensal,
					'nome':nome,
					'pin':pin,
					'pin_alterado':pin_alterado

				},
				dataType:'json',
				success:function(data)
				{
					var STATUS = data.STATUS;

					if(STATUS == 'SUCESS')
					{
						if(window.plugins)
						{
							window.plugins.toast.showWithOptions(
							{
								message:'Cartão alterado com sucesso.',
								duration:"2000",
								position:"center",
								styling:{ textSize:20 },
								addPixelsY:0
							});
						}
						else
						{
							alert('Cartão alterado com sucesso.');
						}

						window.localStorage.setItem("backup_limite_diario",window.localStorage.getItem("limite_diario"));

						setTimeout(function()
						{
							window.location.hash = 'iniciar-pagamento-callcenter';
						},8000);
					}
					else
					{
						if(window.plugins)
						{
							window.plugins.toast.showWithOptions(
							{
								message:'Não foi possível alterar o Cartão.',
								duration:"2000",
								position:"center",
								styling:{ textSize:20 },
								addPixelsY:0
							});
						}
						else
						{
							alert('Não foi possível alterar o Cartão.');
						}
					}
				},
				error:function(data)
				{
					console.error('erro em alterarCartao => pagamentos.php');
				}
			});
	}
	else
	{
		if(limite_diario <= 0)
		{
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:'Limite Diário tem de ser superior a 0.',
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert('Limite Diário tem de ser superior a 0.');
			}
		}
		else if(limite_semanal <= 0)
		{
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:'Limite Semanal tem de ser superior a 0.',
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert('Limite Semanal tem de ser superior a 0.');
			}
		}
		else if(limite_mensal <= 0)
		{
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:'Limite Mensal tem de ser superior a 0.',
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert('Limite Mensal tem de ser superior a 0.');
			}
		}
		else if(nome == '')
		{
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:'Por Favor preencha o campo do Nome.',
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert('Por Favor preencha o campo do Nome.');
			}
		}
		else if(($('#pin').val().length<4 || $('#pin').val().length > 6)  || pin == '')
		{
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:'O Pin não é válido.',
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert('O Pin não é válido.');
			}
		}
		else
		{
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:'Formulário com erro.',
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert('Formulário com erro.');
			}
		}
	}
	// return html;
}


function criarCartao()
{
	var limite_diario = window.localStorage.getItem("limite_diario");
	var limite_semanal = window.localStorage.getItem("limite_semanal");
	var limite_mensal = window.localStorage.getItem("limite_mensal");
	var telemovel = window.localStorage.getItem("novo_telemovel");
	var pin = window.localStorage.getItem("pin_cartao");
	var nome = window.localStorage.getItem("nome_cartao");
	var matricula = window.localStorage.getItem("matricula");
	var indicativo = window.localStorage.getItem("indicativo2");
	var customer_no = window.localStorage.getItem("customer_no");


	if(telemovel != '' && matricula != '' && limite_diario > 0 && limite_semanal > 0 && limite_mensal > 0 && nome != '' && pin != null && pin != 'null' && ((pin.length > 3 && pin.length < 7) || pin == '0000'))
	{

		$.ajax({
				type:'POST',
				url:globalUrl+'admin_tfc/pagamentos.php',
				async:false,
				data:{
					'type':'criarCartao',
					'dp':(new Date()).getTime(),
					'telemovel':telemovel,
					'limite_diario':limite_diario,
					'limite_semanal':limite_semanal,
					'limite_mensal':limite_mensal,
					'nome':nome,
					'pin':pin,
					'indicativo':indicativo,
					'matricula':matricula,
					'customer_no':customer_no,

				},
				dataType:'json',
				success:function(data)
				{
					var STATUS = data.STATUS;
					var MSG = data.MSG;

					if(STATUS == 'SUCESS')
					{
						if(window.plugins)
						{
							window.plugins.toast.showWithOptions(
							{
								message:'Cartão criado com sucesso.',
								duration:"2000",
								position:"center",
								styling:{ textSize:20 },
								addPixelsY:0
							});
						}
						else
						{
							alert('Cartão criado com sucesso.');
						}

						setTimeout(function()
						{
							window.location.hash = 'iniciar-pagamento-callcenter';
						},8000);
					}
					else
					{
						if(window.plugins)
						{
							window.plugins.toast.showWithOptions(
							{
								message:MSG,
								duration:"2000",
								position:"center",
								styling:{ textSize:20 },
								addPixelsY:0
							});
						}
						else
						{
							alert(MSG);
						}
					}
				},
				error:function(data)
				{
					console.error('erro em criarCartao => pagamentos.php');
				}
			});
	}
	else
	{
		if(limite_diario <= 0 || limite_diario || null)
		{
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:'Limite Diário tem de ser superior a 0.',
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert('Limite Diário tem de ser superior a 0.');
			}
		}
		else if(limite_semanal <= 0 || limite_semanal == null)
		{
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:'Limite Semanal tem de ser superior a 0.',
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert('Limite Semanal tem de ser superior a 0.');
			}
		}
		else if(limite_mensal <= 0 || limite_mensal == null)
		{
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:'Limite Mensal tem de ser superior a 0.',
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert('Limite Mensal tem de ser superior a 0.');
			}
		}
		else if(nome == '' || nome==null )
		{
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:'Por Favor preencha o campo do Nome.',
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert('Por Favor preencha o campo do Nome.');
			}
		}
		else if(matricula == '' || matricula == null)
		{
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:'Por Favor preencha o campo da Matrícula.',
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert('Por Favor preencha o campo da Matrícula.');
			}
		}
		else if( pin == null || pin == 'null' || (pin != '' && (pin.length <4 || pin.length > 6)))
		{
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:'O Pin não é válido.',
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert('O Pin não é válido.');
			}
		}
		else
		{
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:'Formulário com erro.',
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert('Formulário com erro.');
			}
		}
	}
	// return html;
}

function voltarIniciarPagamentoCallcenter()
{

}

function alterarLimites()
{
	var limite_diario = window.localStorage.getItem("limite_diario");
	var limite_semanal = window.localStorage.getItem("limite_semanal");
	var limite_mensal = window.localStorage.getItem("limite_mensal");
	var Customer_Type = window.localStorage.getItem("Customer_Type");	
	var telemovel = window.localStorage.getItem("indicativo")+window.localStorage.getItem("telemovel_pos");

	if(limite_diario > 0 && limite_semanal > 0 && limite_mensal > 0 )
	{

		$.ajax({
				type:'POST',
				url:globalUrl+'admin_tfc/pagamentos.php',
				async:false,
				data:{'type':'alterarLimites','dp':(new Date()).getTime(),'Customer_Type':Customer_Type,'limite_diario':limite_diario,'limite_semanal':limite_semanal,'limite_mensal':limite_mensal,'telemovel':telemovel },
				dataType:'json',
				success:function(data)
				{
					var STATUS = data.STATUS;

					if(STATUS == 'SUCESS')
					{
						if(window.plugins)
						{
							window.plugins.toast.showWithOptions(
							{
								message:'Limites alterados com sucesso.',
								duration:"2000",
								position:"center",
								styling:{ textSize:20 },
								addPixelsY:0
							});
						}
						else
						{
							alert('Limites alterados com sucesso.');
						}

						window.localStorage.setItem("backup_limite_diario",window.localStorage.getItem("limite_diario"));

						setTimeout(function()
						{
							window.location.hash = 'iniciar-pagamento-callcenter';
						},8000);
					}
					else
					{
						if(window.plugins)
						{
							window.plugins.toast.showWithOptions(
							{
								message:'Não foi possível alterar os Limites.',
								duration:"2000",
								position:"center",
								styling:{ textSize:20 },
								addPixelsY:0
							});
						}
						else
						{
							alert('Não foi possível alterar os Limites.');
						}
					}
				},
				error:function(data)
				{
					console.error('erro em showIniciarPagamento => pagamentos.php');
				}
			});
	}
	else
	{
		if(limite_diario <= 0)
		{
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:'Limite Diário tem de ser superior a 0.',
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert('Limite Diário tem de ser superior a 0.');
			}
		}
		else if(limite_semanal <= 0)
		{
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:'Limite Semanal tem de ser superior a 0.',
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert('Limite Semanal tem de ser superior a 0.');
			}
		}
		else if(limite_mensal <= 0)
		{
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:'Limite Mensal tem de ser superior a 0.',
					duration:"2000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert('Limite Mensal tem de ser superior a 0.');
			}
		}
	}
	// return html;
}

function requestToken()
{
	var telemovel_callcenter = window.localStorage.getItem("telemovel_callcenter");
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:false,
			data:{'type':'requestToken','dp':(new Date()).getTime(),'telemovel_callcenter':telemovel_callcenter },
			dataType:'html',
			success:function(data)
			{
				if(data != 0)
				{
					$('#token').val(data);
				}
				else
				{
					if(window.plugins)
					{
						window.plugins.toast.showWithOptions(
						{
							message:'Não foi gerado token para o pagamento.',
							duration:"2000",
							position:"center",
							styling:{ textSize:20 },
							addPixelsY:0
						});
					}
					else
					{
						alert('Não foi gerado token para o pagamento.');
					}
				}
			},
			error:function(data)
			{
				console.error('erro em requestToken => actions.php');
			}
		});

	// return html;
}


function verificaLogin(telemovel = 0)
{
	var appUser = 0;
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/logins.php',
			async:false,
			data:{'type':'verificaLogins','dp':(new Date()).getTime(),'telemovel':telemovel },
			dataType:'html',
			success:function(data)
			{
				appUser = data;
			},
			error:function(data)
			{
				console.error('erro em verificaLogins => logins.php');
			}
		});

	return appUser;
}

function iniciarPagamentoPOS()
{
	var postoCountry = window.localStorage.getItem("postoCountry");
	var produtos_pos = window.localStorage.getItem("produtos_pos");
	var telemovel_pos = window.localStorage.getItem("indicativo")+window.localStorage.getItem("telemovel_pos");
	var abasteceu_pos = parseFloat(window.localStorage.getItem("abasteceu_pos"));
	var kms_pos = parseFloat(window.localStorage.getItem("kms_pos"));
	var litros_pos = parseFloat(window.localStorage.getItem("litros_pos"));
	var matricula_pos = window.localStorage.getItem("matricula_pos");
	var appUser = window.localStorage.getItem("appUser");
	var postoPOS = window.localStorage.getItem("postoPOS");
	var postoPOS_txt = window.localStorage.getItem("postoPOS_txt");
	var IMEI = window.localStorage.getItem("IMEI");

	// console.log(localStorage);

	// var aux = produtos_pos.split("_");

	// var posto_pos = aux[0];
	// var servico_pos = aux[1];
	// var produto_pos = aux[2];

	// var falta_pagar = 0;

	// if(abasteceu_pos > litros_pos)
	// {
	// 	falta_pagar = abasteceu_pos - litros_pos;
	// 	abasteceu_pos  = litros_pos;
	// }

	// alert('abasteceu:'+abasteceu_pos);
	// alert('litros'+litros_pos);


	if(abasteceu_pos <= litros_pos && abasteceu_pos > 0 && kms_pos > 0 && produtos_pos != '' && produtos_pos != null)
	{
		if(appUser == 1) //envia pedido para a telemovel para quem tem APP instalada
		{
			$.ajax({
				type:'POST',
				url:globalUrl+'admin_tfc/pagamentos.php',
				async:false,
				data:{ 'type':'inserirPagamentoPOS',
						'dp':(new Date()).getTime(),
						'telemovel':telemovel_pos,
						'produtos_pos':produtos_pos,
						'abasteceu_pos':abasteceu_pos,
						'kms_pos':kms_pos,
						'litros_pos':litros_pos,
						'matricula_pos':matricula_pos,
						'postoPOS':postoPOS,
						'postoPOS_txt':postoPOS_txt,
						'IMEI':IMEI,
						'postoCountry':postoCountry,
						'tokenPOS':window.localStorage.getItem("token")
					},
				dataType:'html',
				success:function(data)
				{
					if(data > 0)
					{
						window.localStorage.setItem("pagamento-pos",data);
						window.location.hash = 'aguardar-pagamento-cliente-pos';
					}
					else
					{
						var msg = 'Condutor com telemóvel '+telemovel_pos+' contém pagamentos pendentes.';
						if(window.plugins)
						{
							window.plugins.toast.showWithOptions(
							{
								message:msg,
								duration:"2000",
								position:"center",
								styling:{ textSize:20 },
								addPixelsY:0
							});
						}
						else
						{
							alert(msg);
						}
					}
					// appUser = data;
				},
				error:function(data)
				{
					console.error('erro em inserirPagamentoPOS => pagamentos.php');
				}
			});
		}
		else //envia token por SMS para quem ainda nao tem APP
		{
			$.ajax({
				type:'POST',
				url:globalUrl+'admin_tfc/pagamentos.php',
				async:true,
				data:{ 'type':'inserirPagamentoTokenPOS',
						'dp':(new Date()).getTime(),
						'telemovel':telemovel_pos,
						'produtos_pos':produtos_pos,
						'abasteceu_pos':abasteceu_pos,
						'kms_pos':kms_pos,
						'litros_pos':litros_pos,
						'matricula_pos':matricula_pos,
						'postoPOS':postoPOS,
						'postoPOS_txt':postoPOS_txt,
						'IMEI':IMEI,
						'postoCountry':postoCountry,
						'tokenPOS':window.localStorage.getItem("token")
					},
				dataType:'html',
				success:function(data)
				{
					console.log('pagamentos OK'+data);
					if(data > 0)
					{
						window.localStorage.setItem("pagamento-pos",data);
						window.location.hash = 'pin-pos';
					}
					else
					{
						var msg = 'Condutor com telemóvel '+telemovel_pos+' contém pagamentos pendentes.';
						if(window.plugins)
						{
							window.plugins.toast.showWithOptions(
							{
								message:msg,
								duration:"2000",
								position:"center",
								styling:{ textSize:20 },
								addPixelsY:0
							});
						}
						else
						{
							alert(msg);
						}
					}
					// appUser = data;
				},
				error:function(data)
				{
					console.error('erro em verificaLogins => logins.php');
					console.log('erro em verificaLogins => logins.php');
				}
			});

		}

	}
	else if( produtos_pos == '' || produtos_pos == null)
	{
		var msg = 'Por favor,seleccione um Produto.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}
	}
	else if( abasteceu_pos <=0 )
	{
		var msg = 'Por favor,insira os litros abastecidos.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}
	}
	else if( kms_pos <=0 )
	{
		var msg = 'Por favor,insira os Kms do veículo.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}
	}
	else
	{
		var msg = 'Abasteceu mais do que lhe é permitido.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}
	}


	// window.location.hash = 'tipo-pagamento-pos';
}

function iniciarPagamentoCallcenter()
{
	var html = '';
	var postoCountry = window.localStorage.getItem("postoCountry");
	var produtos_pos = window.localStorage.getItem("produtos_pos");
	var telemovel_pos = window.localStorage.getItem("telemovel_pos");
	var abasteceu_pos = parseFloat(window.localStorage.getItem("abasteceu_pos"));
	var kms_pos = parseFloat(window.localStorage.getItem("kms_pos"));
	var litros_pos = parseFloat(window.localStorage.getItem("litros_pos"));
	var matricula_pos = window.localStorage.getItem("matricula_pos");
	var appUser = window.localStorage.getItem("appUser");
	var postoPOS = window.localStorage.getItem("postoPOS");
	var postoPOS_txt = window.localStorage.getItem("postoPOS_txt");
	var IMEI = window.localStorage.getItem("IMEI");

	var limite_negativo = window.localStorage.getItem("limite_negativo");
	var limite_negativo_val = window.localStorage.getItem("limite_negativo_val");
	var limite_permitido = window.localStorage.getItem("limite_permitido");
	
	var Customer_Type = window.localStorage.getItem("Customer_Type");

	// console.log(localStorage);

	if(abasteceu_pos <= litros_pos && abasteceu_pos > 0 && kms_pos > 0 && produtos_pos != '' && produtos_pos != null)
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{ 'type':'pagarFrotaCallcenter',
					'dp':(new Date()).getTime(),
					'telemovel':telemovel_pos,
					'produtos_pos':produtos_pos,
					'abasteceu_pos':abasteceu_pos,
					'kms_pos':kms_pos,
					'litros_pos':litros_pos,
					'matricula_pos':matricula_pos,
					'postoPOS':postoPOS,
					'postoPOS_txt':postoPOS_txt,
					'IMEI':IMEI,
					'postoCountry':postoCountry,
					'Customer_Type':Customer_Type,
					'tokenPOS':window.localStorage.getItem("token")
				},
			dataType:'html',
			success:function(data)
			{
				html = data;
			},
			error:function(data)
			{
				console.error('erro em pagarFrotaCallcenter => pagamentos.php');
			}
		});

	} //Limites negativos
	else if(
		limite_negativo == 'true'
		&& abasteceu_pos <= limite_negativo_val
		&& abasteceu_pos <= limite_permitido
		&& abasteceu_pos > 0
		&& kms_pos > 0
		&& produtos_pos != ''
		&& produtos_pos != null
		)
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{ 'type':'pagarFrotaCallcenter',
					'dp':(new Date()).getTime(),
					'telemovel':telemovel_pos,
					'produtos_pos':produtos_pos,
					'abasteceu_pos':abasteceu_pos,
					'kms_pos':kms_pos,
					'litros_pos':litros_pos,
					'matricula_pos':matricula_pos,
					'postoPOS':postoPOS,
					'postoPOS_txt':postoPOS_txt,
					'IMEI':IMEI,
					'postoCountry':postoCountry,
					'Customer_Type':Customer_Type,
					'tokenPOS':window.localStorage.getItem("token")
				},
			dataType:'html',
			success:function(data)
			{
				html = data;
			},
			error:function(data)
			{
				console.error('erro em pagarFrotaCallcenter => pagamentos.php');
			}
		});
	}
	else if( produtos_pos == '' || produtos_pos == null)
	{
		var msg = 'Por favor,seleccione um Produto.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}
	}
	else if( abasteceu_pos <=0 )
	{
		var msg = 'Por favor,insira os litros abastecidos.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}
	}
	else if( abasteceu_pos > limite_negativo_val )
	{
		var msg = 'Não tem limite negativo ('+limite_negativo_val+' Litros) suficiente para abastecer.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}
	}
	else if( abasteceu_pos > limite_permitido )
	{
		var msg = 'Está a tentar abastecer mais do que lhe é permitido ('+limite_permitido+' Litros).';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}
	}
	else if( kms_pos <=0 )
	{
		var msg = 'Por favor,insira os Kms do veículo.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}
	}
	else
	{
		var msg = 'Abasteceu mais do que lhe é permitido.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}
	}

	return html;
	// window.location.hash = 'tipo-pagamento-pos';
}

function iniciarPagamentoCallcenterValida()
{
	var html = '';
	var postoCountry = window.localStorage.getItem("postoCountry");
	var produtos_pos = window.localStorage.getItem("produtos_pos");
	var telemovel_pos = window.localStorage.getItem("indicativo")+window.localStorage.getItem("telemovel_pos");
	var abasteceu_pos = parseFloat(window.localStorage.getItem("abasteceu_pos"));
	var kms_pos = parseFloat(window.localStorage.getItem("kms_pos"));
	var litros_pos = parseFloat(window.localStorage.getItem("litros_pos"));
	var matricula_pos = window.localStorage.getItem("matricula_pos");
	var appUser = window.localStorage.getItem("appUser");
	var postoPOS = window.localStorage.getItem("postoPOS");
	var postoPOS_txt = window.localStorage.getItem("postoPOS_txt");
	var IMEI = window.localStorage.getItem("IMEI");
	var limite_negativo = window.localStorage.getItem("limite_negativo");
	var limite_negativo_val = window.localStorage.getItem("limite_negativo_val");
	var limite_permitido = window.localStorage.getItem("limite_permitido");

	// console.log(localStorage);

	if(abasteceu_pos <= litros_pos && abasteceu_pos > 0 && kms_pos > 0 && produtos_pos != '' && produtos_pos != null)
	{
		window.location.hash="pagarFrotaCallcenter";
	}
	else if(
		limite_negativo == 'true'
		&& abasteceu_pos <= limite_negativo_val
		&& abasteceu_pos <= limite_permitido
		&& abasteceu_pos > 0
		&& kms_pos > 0
		&& produtos_pos != ''
		&& produtos_pos != null
		)
	{
		window.location.hash="pagarFrotaCallcenter";
	}
	else if( produtos_pos == '' || produtos_pos == null)
	{
		var msg = 'Por favor,seleccione um Produto.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}
	}
	else if( abasteceu_pos <=0 )
	{
		var msg = 'Por favor,insira os litros abastecidos.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}
	}
	else if( kms_pos <=0 )
	{
		var msg = 'Por favor,insira os Kms do veículo.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}
	}
	else
	{
		var msg = 'Abasteceu mais do que lhe é permitido.';
		if(window.plugins)
		{
			window.plugins.toast.showWithOptions(
			{
				message:msg,
				duration:"2000",
				position:"center",
				styling:{ textSize:20 },
				addPixelsY:0
			});
		}
		else
		{
			alert(msg);
		}
	}

	return html;
	// window.location.hash = 'tipo-pagamento-pos';
}



function PagamentoCallcenterTentaNovamente(pagamento_id)
{
	var msg = '';
	$.ajax({
			type: 'POST',
			url: globalUrl+'admin_tfc/pagamentos.php',
			async: false,
			data: {'type': 'pagarFrotaCallcenterTentaNovamente','dp':(new Date()).getTime(),'pagamento_id':pagamento_id},
			dataType: 'html',
			success: function(data)
			{
				alert(data);
			},
			error: function(data)
			{
				console.error('erro em showHomepagePage => logins.php');
				alert("ERRO");
			}
		});
}
function PagamentoCallcenterCancela(pagamento_id)
{
	var msg = '';
	$.ajax({
			type: 'POST',
			url: globalUrl+'admin_tfc/pagamentos.php',
			async: false,
			data: {'type': 'pagarFrotaCallcenterCancelar','dp':(new Date()).getTime(),'pagamento_id':pagamento_id},
			dataType: 'html',
			success: function(data)
			{
				alert(data);
			},
			error: function(data)
			{
				console.error('erro em showHomepagePage => logins.php');
				alert("ERRO");
			}
		});
}


function showHomepagePage()
{
	var html = '';
	$.ajax({
			type: 'POST',
			url: globalUrl+'admin_tfc/logins.php',
			async: false,
			data: {'type': 'showHomepagePage','dp':(new Date()).getTime(),telemovel: window.localStorage.getItem("telemovel"), 'token': window.localStorage.getItem("token")},
			dataType: 'html',
			success: function(data)
			{
				html += data;
			},
			error: function(data)
			{
				console.error('erro em showHomepagePage => logins.php');
			}
		});

	return html;
}

function preencheProduto(postoPOS = 0,deviceNumber = 0)
{
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'preencheProduto','dp':(new Date()).getTime(),'postoPOS':postoPOS,'deviceNumber':deviceNumber },
			dataType:'html',
			success:function(data)
			{
				$('#produtos').html(data);
			},
			error:function(data)
			{
				console.error('erro em showHomepagePage => logins.php');
			}
		});
}

function savePosto(posto= '',posto_txt= '',postoCountry='')
{
	console.log(postoCountry);

	window.localStorage.setItem('postoCountry',postoCountry);
	window.localStorage.setItem('postoPOS',posto);
	window.localStorage.setItem('postoPOS_txt',posto_txt);
	window.localStorage.setItem('active','false');


	var html;
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{'type':'savePosto','dp':(new Date()).getTime(),'token':window.localStorage.getItem('token'),'postoPOS':posto,'postoPOS_txt':posto_txt,'postoCountry':postoCountry },
		dataType:'json',
		success:function(data)
		{

			var IMEI = data.IMEI;
			var ACTIVE = data.ACTIVE;


			html = ACTIVE;
			if(IMEI == 0)
			{
				var msg = 'Já existe o terminal com IMEI = '+IMEI;
				if(window.plugins)
				{
					window.plugins.toast.showWithOptions(
					{
						message:msg,
						duration:"2000",
						position:"center",
						styling:{ textSize:20 },
						addPixelsY:0
					});
				}
				else
				{
					alert(msg);
				}
			}
			else
			{
				window.localStorage.setItem("IMEI",IMEI);
				// html = data2[1];
			}
		},
		error:function(data)
		{
			console.error('erro em savePosto => actions.php');
		}
	});
	return html;
}

function preencheLitrosMatricula(telemovel = 0,produto = '')
{
	var postoCountry = window.localStorage.getItem("postoCountry");
	var postoPOS = window.localStorage.getItem("postoPOS");
	var IMEI = window.localStorage.getItem("IMEI");
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'preencheLitrosMatricula','dp':(new Date()).getTime(),'telemovel':telemovel,'produto':produto,'postoPOS':postoPOS,'IMEI':IMEI,'postoCountry':postoCountry },
			dataType:'json',
			success:function(data)
			{
				// console.log(data);
				if(data.STATUS == 'Approved')
				{
					$('#matricula').val(data.MATRICULA);
					$('#litros').val(data.SUPPLY_LIMIT);

					window.localStorage.setItem("matricula_pos",data.MATRICULA);
					window.localStorage.setItem("litros_pos",data.SUPPLY_LIMIT);
				}
				else if(data.STATUS == 'Rejected')
				{
					if(window.plugins)
					{
						window.plugins.toast.showWithOptions(
						{
							message:data.MSG,
							duration:"4000",
							position:"center",
							styling:{ textSize:20 },
							addPixelsY:0
						});
					}
					else
					{
						alert(data.MSG);
					}

					$('#matricula').val('');
					window.localStorage.removeItem("matricula_pos");

					$('#litros').val('');
					window.localStorage.removeItem("litros_pos");

					// $("#produtos").prop("selectedIndex",0);
					window.localStorage.removeItem("produtos_pos");

					$('#kms').val('');
				}
				else
				{
					var msg = 'Não tem litros disponiveis';
					if(window.plugins)
					{
						window.plugins.toast.showWithOptions(
						{
							message:msg,
							duration:"4000",
							position:"center",
							styling:{ textSize:20 },
							addPixelsY:0
						});
					}
					else
					{
						alert(msg);
					}

					$('#matricula').val('');
					window.localStorage.removeItem("matricula_pos");

					$('#litros').val('');
					window.localStorage.removeItem("litros_pos");

					// $("#produtos").prop("selectedIndex",0);
					window.localStorage.removeItem("produtos_pos");

					$('#kms').val('');

				}
			},
			error:function(data)
			{
				console.error('erro em showHomepagePage => logins.php');
			}
		});

	return '';
}

function atualiza_nome(telemovel = 0,produto = '',posto= '',postoCountry= '',postoPOS_txt= '',IMEI= '',postoCode='')
{
	var postoPOS = posto;
	var postoCountry = window.localStorage.getItem("postoCountry");
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'atualiza_nome','dp':(new Date()).getTime(),'token':window.localStorage.getItem('token'),'telemovel':telemovel,'produto':produto,'postoPOS':postoPOS,'IMEI':IMEI,'postoCountry':postoCountry,'postoCode':postoCode },
			dataType:'json',
			success:function(data)
			{
				if(data.STATUS == 'Approved')
				{
					$('#matricula').val(data.MATRICULA);
					$('#cliente').val(data.CLIENTE);

					window.localStorage.setItem("matricula_pos",data.MATRICULA);
					window.localStorage.setItem("cliente",data.CLIENTE);
				}
				else if(data.STATUS == 'Rejected')
				{
					$('#cliente').val(data.MSG);

					if(window.plugins)
					{
						window.plugins.toast.showWithOptions(
						{
							message:data.MSG,
							duration:"3000",
							position:"center",
							styling:{ textSize:20 },
							addPixelsY:0
						});
					}
					else
					{
						alert(data.MSG);
					}
					//$('#cliente').val('');
				}
				else
				{
					$('#cliente').val(data.MSG);
					if(window.plugins)
					{
						window.plugins.toast.showWithOptions(
						{
							message:data.MSG,
							duration:"3000",
							position:"center",
							styling:{ textSize:20 },
							addPixelsY:0
						});
					}
					else
					{
						alert(data.MSG);
					}
					//$('#cliente').val('');
				}
			},
			error:function(data)
			{
				console.error('erro em showHomepagePage => logins.php');
			}
		});
}
function preencheLitrosMatriculaCallcenter(telemovel = 0,produto = '',posto= '',postoCountry= '',postoPOS_txt= '',IMEI= '',postoCode='')
{
	window.localStorage.setItem("postoCountry",postoCountry);
	window.localStorage.setItem("postoPOS_txt",postoPOS_txt);
	window.localStorage.setItem("IMEI",IMEI);

	var postoPOS = posto;
	var postoCountry = window.localStorage.getItem("postoCountry");
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'preencheLitrosMatriculaCallcenter','dp':(new Date()).getTime(),'token':window.localStorage.getItem('token'),'telemovel':telemovel,'produto':produto,'postoPOS':postoPOS,'IMEI':IMEI,'postoCountry':postoCountry,'postoCode':postoCode },
			dataType:'json',
			success:function(data)
			{
				if(data.STATUS == 'Approved')
				{
					$('#matricula').val(data.MATRICULA);
					$('#cliente').val(data.CLIENTE);
					$('#litros').val(data.SUPPLY_LIMIT);
					$('#litros_n').val(data.LIMITE_NEGATIVO_VAL);
					if(data.BALANCE < 0)
					{
						$('#litros_n').css("color","red");
						$('#litros').css("color","red");
					}

					$('#balance').html(' '+data.BALANCE+'€');
					// $('#matriculas').html(data.MATRICULAS);

					window.localStorage.setItem("matricula_pos",data.MATRICULA);
					window.localStorage.setItem("cliente",data.CLIENTE);
					window.localStorage.setItem("litros_pos",data.SUPPLY_LIMIT);
					window.localStorage.setItem("balance_pos",data.BALANCE);
					window.localStorage.setItem("limite_negativo",data.LIMITE_NEGATIVO);
					window.localStorage.setItem("limite_negativo_val",data.LIMITE_NEGATIVO_VAL);
					window.localStorage.setItem("limite_permitido",data.LIMITE_PERMITIDO);
				}
				else if(data.STATUS == 'Rejected')
				{
					if(window.plugins)
					{
						window.plugins.toast.showWithOptions(
						{
							message:data.MSG,
							duration:"3000",
							position:"center",
							styling:{ textSize:20 },
							addPixelsY:0
						});
					}
					else
					{
						alert(data.MSG);
						//console.log(data.MSG);
					}

					$('#matricula').val('');
					window.localStorage.removeItem("matricula_pos");

					$('#litros').val('');
					window.localStorage.removeItem("litros_pos");

					$("#produtos").prop("selectedIndex",0);
					window.localStorage.removeItem("produtos_pos");

					$('#kms').val('');
					$('#balance').html(' 0€');
					// $('#matriculas').html('<input type="text" name="matricula" id="matricula" readonly="readonly">');

				}
				else
				{
					if(window.plugins)
					{
						window.plugins.toast.showWithOptions(
						{
							message:data.MSG,
							duration:"2000",
							position:"center",
							styling:{ textSize:20 },
							addPixelsY:0
						});
					}
					else
					{
						alert(data.MSG);
					}

					$('#matricula').val('');
					window.localStorage.removeItem("matricula_pos");

					$('#litros').val('');
					window.localStorage.removeItem("litros_pos");

					$("#produtos").prop("selectedIndex",0);
					window.localStorage.removeItem("produtos_pos");

					$('#kms').val('');

					$('#balance').html(' 0€');

					// $('#matriculas').html('<input type="text" name="matricula" id="matricula" readonly="readonly">');

				}
			},
			error:function(data)
			{
				console.error('erro em showHomepagePage => logins.php');
			}
		});
}

function showHomepagePageGestor()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/logins.php',
			async:false,
			data:{
				'type':'showHomepagePageGestor',
				'dp':(new Date()).getTime(),
				telemovel:window.localStorage.getItem("telemovel"),
				'token':window.localStorage.getItem("token"),
				'lang':sLang
			},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em showHomepagePageGestor => logins.php');
			}
		});

	return html;

}

function showCarregarSaldo()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:false,
			data:{'type':'carregarSaldo','dp':(new Date()).getTime(),telemovel:window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token")},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em carregarSaldo => actions.php');
			}
		});

	return html;

}
function showVerSaldo()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:false,
			data:{'type':'verSaldo','dp':(new Date()).getTime(),telemovel:window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token")},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em verSaldo => actions.php');
			}
		});

	return html;

}
function showInfoMatriculas()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/info.php',
			async:false,
			data:{'type':'infoMatriculas','dp':(new Date()).getTime(),telemovel:window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token")},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em infoMatriculas => info.php');
			}
		});

	return html;

}

function showInfoKms()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/info.php',
			async:false,
			data:{'type':'infoKms','dp':(new Date()).getTime(),telemovel:window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token")},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em infoKms => info.php');
			}
		});

	return html;

}
function showInfoLimites()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/info.php',
			async:false,
			data:{'type':'infoLimites','dp':(new Date()).getTime(),telemovel:window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token")},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em infoMatriculas => info.php');
			}
		});

	return html;

}
function showInfoReservas()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_hiqi2/info.php',
			async:false,
			data:{'type':'infoReservas','dp':(new Date()).getTime(),telemovel:window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token")},
			dataType:'html',
			success:function(data){html += data;},
			error:function(data){console.error('erro em showInfoReservas');}
		});
	return html;
}
function apoio_cliente()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_hiqi2/info.php',
			async:false,
			data:{'type':'apoio_cliente','dp':(new Date()).getTime(),telemovel:window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token")},
			dataType:'html',
			success:function(data){html += data;},
			error:function(data){console.error('erro em apoio_cliente');}
		});
	return html;
}
function showInfoActualizarPagamentos()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/info.php',
			async:false,
			data:{'type':'infoPagamentos','dp':(new Date()).getTime(),telemovel:window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token")},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em infoPagamentos => info.php');
			}
		});

	return html;

}
function parcerias()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/info.php',
			async:false,
			data:{
				'type':'parcerias',
				'dp':(new Date()).getTime(),
				telemovel:window.localStorage.getItem("telemovel"),
				'token':window.localStorage.getItem("token"),
				'lang':sLang
			},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em infoSobreNos => info.php');
			}
		});
	return html;
}
function showInfoSobreNos()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/info.php',
			async:false,
			data:{
				'type':'infoSobreNos',
				'dp':(new Date()).getTime(),
				telemovel:window.localStorage.getItem("telemovel"),
				'token':window.localStorage.getItem("token"),
				'lang':sLang
			},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em infoSobreNos => info.php');
			}
		});
	return html;
}
function showInfoTermosLegais()
{
	if(window.localStorage.getItem("Cache_termoslegais")!="")return window.localStorage.getItem("Cache_termoslegais");
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/info.php',
			async:false,
			data:{'type':'infoTermosLegais','dp':(new Date()).getTime(),telemovel:window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token")},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em infoTermosLegais => info.php');
			}
		});
	window.localStorage.setItem("Cache_termoslegais",html);

	return html;

}
function showMudarPassword()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/info.php',
			async:false,
			data:{'type':'mudarPassword','dp':(new Date()).getTime(),telemovel:window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token")},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em mudarPassword => info.php');
			}
		});

	return html;

}
function showInfoDadosPessoais()
{
	if(window.localStorage.getItem("Cache_dadospessoais")!="" && window.localStorage.getItem("Cache_dadospessoais")!=null)return window.localStorage.getItem("Cache_dadospessoais");

	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/info.php',
			async:false,
			data:{'type':'infoDadosPessoais','dp':(new Date()).getTime(),telemovel:window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token")},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em infoDadosPessoais => info.php');
			}
		});
	window.localStorage.setItem("Cache_dadospessoais",html);

	return html;

}
function showInfoContactos()
{
	if(window.localStorage.getItem("Cache_info")!="" && window.localStorage.getItem("Cache_info")!=null)return window.localStorage.getItem("Cache_info");

	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/info.php',
			async:false,
			data:{'type':'infoContactos','dp':(new Date()).getTime(),telemovel:window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token")},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em infoContactos => info.php');
			}
		});

	window.localStorage.setItem("Cache_info",html);
	return html;

}
function showDefinicoes()
{
	if(window.localStorage.getItem("Cache_definicoes")!="" && window.localStorage.getItem("Cache_definicoes")!=null)return window.localStorage.getItem("Cache_definicoes");

	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/logins.php',
			async:false,
			data:{'type':'showDefinicoes','dp':(new Date()).getTime(),telemovel:window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token")},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em showDefinicoes => info.php');
			}
		});

	window.localStorage.setItem("Cache_definicoes",html);

	return html;

}
function operacaoCancelada()
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'operacaoCancelada','dp':(new Date()).getTime(),telemovel:window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token"),'pagamento_id':window.localStorage.getItem("pagamento_id")},
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em operacaoCancelada => pagamentos.php');
			}
		});

	return html;
}

function getTokenByPagamentoID( pagamento_pos = 0)
{
	var html = '';
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
		data:{'type':'getTokenByPagamentoID','dp':(new Date()).getTime(),'pagamento_pos':pagamento_pos },
			dataType:'html',
			success:function(data)
			{
				html += data;
			},
			error:function(data)
			{
				console.error('erro em getTokenByPagamentoID => pagamentos.php');
			}
		});

	return html;
}

$( document ).on( "pagecreate","#page",function() {
	$( document ).on( "swipeleft ","#page",function( e ) {
		// We check if there is no open panel on the page because otherwise
		// a swipe to close the left panel would also open the right panel (and v.v.).
		// We do this by checking the data that the framework stores on the page element (panel:open).
		var hash = location.hash.replace('#','');
	});
});

$('#specific-map').on( "swipeleft swiperight",function(e){
	e.stopImmediatePropagation();
	e.preventDefault();
});

$('#specific-map2').on( "swipeleft swiperight",function(e){
	e.stopImmediatePropagation();
	e.preventDefault();
});

// $(document).on('swipeleft swiperight','#specific-map',function(event) {
//  event.stopPropagation();
//  event.preventDefault();
// });

function open_dispensador(id_dispensador)
{

	// console.log(id_dispensador);
	$('.Dispensadores').hide();

	if($('#name_service_'+id_dispensador).css('display') == 'none')
	{
		$('#caret_'+id_dispensador).removeClass('fa-caret-down');
		$('#caret_'+id_dispensador).addClass('fa-caret-right');
	}
	else
	{
		$('#caret_'+id_dispensador).removeClass('fa-caret-right');
		$('#caret_'+id_dispensador).addClass('fa-caret-down');
	}

	$('#name_service_'+id_dispensador).fadeIn();
}



function previewReserva(StationID = '',StationName = '',device_number = 0,Identifier = 0,description = '',price = 0)
{
	var telemovel = window.localStorage.getItem('telemovel');

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:false,
		data:{
			'type':'verificaLimiteDiario',
			'dp':(new Date()).getTime(),
			'token':window.localStorage.getItem("token"),
			'telemovel':telemovel,
			'stationID':StationID,
			'product':Identifier,
			'product_description':description
		},
		dataType:'json',
		success:function(data)
		{
			console.log(data);
			if(data.STATUS == 'Approved')
			{
				var KEY = data.KEY;
				var ENTRY_NO = data.ENTRY_NO;
				var SUPPLY_LIMIT = data.SUPPLY_LIMIT;
				var MATRICULA = data.MATRICULA;
				var MSG = data.MSG;

				window.localStorage.setItem("key",KEY);
				window.localStorage.setItem("entry_no",ENTRY_NO);
				window.localStorage.setItem("supply_limit",SUPPLY_LIMIT);
				window.localStorage.setItem("matricula",MATRICULA);
				window.localStorage.setItem("litros",SUPPLY_LIMIT);

				$('#litros-abastecer').val(SUPPLY_LIMIT);
				$('#daily_limit').empty();
				$('#daily_limit').html(SUPPLY_LIMIT+' litros');
				$('#daily_limit_label').show();

				$('#matricula').html(MATRICULA);

				$('#abastecimento_rejected').hide();
				$('#abastecimento_approved').show();
				// document.getElementById('abastecimento_approved').scrollIntoView({ behavior:'smooth',block:'start' });
			}
			else if(data.STATUS == 'Rejected')
			{
				var MSG = data.MSG;
				$('#abastecimento_rejected').show();
				$('#abastecimento_rejected_msg').empty();
				$('#abastecimento_rejected_msg').html(MSG);
				$('#abastecimento_approved').hide();
				// document.getElementById('abastecimento_rejected').scrollIntoView({ behavior:'smooth',block:'start' });
			}
		},
		error:function(data)
		{
			console.error('erro em verificaLimiteDiario => actions.php');
		}
	});





	window.localStorage.setItem("price",price);

	var litros = $('#litros-abastecer').val();

	if(litros > 0)
	{
		var price = window.localStorage.getItem("price");

		var euros = litros*price;
		euros = Math.round(euros*100)/100;

		$('#euros-abastecer').val(euros);
	}
	$('#previewReservaPosto').html(StationName);
	$('#previewReservaBomba').html(device_number);
	$('#previewReservaProduto').html(description);
	// document.getElementById('previewReserva').scrollIntoView({ behavior:'smooth',block:'start' });
}

function previewReservaMBway(StationID = '',StationName = '',device_number = 0,Identifier = 0,description = '',price = 0)
{
	var telemovel = window.localStorage.getItem('telemovel');

	window.localStorage.setItem("price",price);

	var litros = $('#litros-abastecer').val();

	if(litros > 0)
	{
		var price = window.localStorage.getItem("price");

		var euros = litros*price;
		euros = Math.round(euros*100)/100;

		$('#euros-abastecer').val(euros);
	}
	$('#previewReservaPosto').html(StationName);
	$('#previewReservaBomba').html(device_number);
	$('#previewReservaProduto').html(description);
	document.getElementById('previewReserva').scrollIntoView({ behavior:'smooth',block:'start' });
}

function verificaPagamentos()
{
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'verificaPagamentos','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token")},
			dataType:'html',
			success:function(data)
			{
				html = data;
			},
			error:function(data)
			{
				console.error('erro em verificaPagamentos => pagamentos.php');
			}
		});
	return html;
}

function showResumoAbastecimento()
{
	var reserva_id = window.localStorage.getItem("reserva_abastecida_id");
	var telemovel =  window.localStorage.getItem("telemovel");
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'showResumoAbastecimento','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token"),'telemovel':telemovel,'reserva_id':reserva_id},
			dataType:'html',
			success:function(data)
			{
				html = data;
			},
			error:function(data)
			{
				console.error('erro em showResumoAbastecimento => pagamentos.php');
			}
		});
	return html;
}

function showPinScreen()
{
	var html = '';

	html += '<div class="container container-pin" style="height:100%;background:#fff;margin-top:0px;box-shadow:1px 0px 1px 0px #ccc">';
		html += '<div class="logo_finger_id" style="padding-top:20px"><img src="img/fingerprint.svg" width="25%"></div>';
		html += '<div class="confirma-identidade"><div class="">Confirme a sua identidade</div></div>';
		html += '<form action="" method="" name="vform">';
			html += '<div class="inputs-pin">';
				html += '<input id="mvar1" type="password" value="" name="mvar1" readonly="readonly" />';
				html += '<input id="mvar2" type="password" value="" name="mvar2" readonly="readonly" />';
				html += '<input id="mvar3" type="password" value="" name="mvar3" readonly="readonly" />';
				html += '<input id="mvar4" type="password" value="" name="mvar4" readonly="readonly" />';
			html += '</div>';
			html += '<div class="clear"></div>';
			html += '<div class="inputs-numero">';
				html += '<div class="form-linha-numeros">';
					html += '<input type="button" class="fbutton" name="1" value="1" id="1" onClick=addNumber(this); />';
					html += '<input type="button" class="fbutton" name="2" value="2" id="2" onClick=addNumber(this); />';
					html += '<input type="button" class="fbutton" name="3" value="3" id="3" onClick=addNumber(this); />';
				html += '</div>';
				html += '<div class="form-linha-numeros">';
					html += '<input type="button" class="fbutton" name="4" value="4" id="4" onClick=addNumber(this); />';
					html += '<input type="button" class="fbutton" name="5" value="5" id="5" onClick=addNumber(this); />';
					html += '<input type="button" class="fbutton" name="6" value="6" id="6" onClick=addNumber(this); />';
				html += '</div>';
				html += '<div class="form-linha-numeros">';
					html += '<input type="button" class="fbutton" name="7" value="7" id="7" onClick=addNumber(this); />';
					html += '<input type="button" class="fbutton" name="8" value="8" id="8" onClick=addNumber(this); />';
					html += '<input type="button" class="fbutton" name="9" value="9" id="9" onClick=addNumber(this); />';
				html += '</div>';
				html += '<div class="form-linha-numeros">';
					html += '<input type="button" class="gbutton fbutton" name="0" value="" id="empty" />';
					html += '<input type="button" class="fbutton" name="0" value="0" id="0" onClick=addNumber(this); />';
					html += '<input type="button" class="gbutton fbutton arrow-delete" name="removeNumber" id="removeNumber" onClick=removeNumero(); />';
				html += '</div>';
			html += '</div>';
		html += '</form>';
		html += '<div class="introduza-pin-label"><div class="introduza-pin-label-trad">Introduza o seu <b>PIN</b></div></div>';
	html+= '</div>';

	html += '<script>';
	html += 'function addNumber(element){';
		// html += 'alert(element.value);';
		html += 'if(document.getElementById(\'mvar1\').value == "") {';
			html += 'document.getElementById(\'mvar1\').value = element.value;';
		html += '}';
		html += 'else if(document.getElementById(\'mvar2\').value == "") {';
			html += 'document.getElementById(\'mvar2\').value = element.value;';
		html += '}';
		html += 'else if(document.getElementById(\'mvar3\').value == "") {';
			html += 'document.getElementById(\'mvar3\').value = element.value;';
		html += '}';
		html += 'else if(document.getElementById(\'mvar4\').value == "") {';
			html += 'document.getElementById(\'mvar4\').value = element.value;';

			html += 'var pin_introduzido = $(\'#mvar1\').val()+$(\'#mvar2\').val()+$(\'#mvar3\').val()+$(\'#mvar4\').val();';
			html += 'if(window.localStorage.getItem("pin_code") == pin_introduzido) {';
				html += 'setTimeout(function() {';
					html += 'window.location.hash="fazer-pagamento"';
				html += '},250);';
			html += '}';
			html += 'else';
			html += '{';
				html += 'setTimeout(function() {';
					html += 'if(window.plugins) {';
						html +='window.plugins.toast.showWithOptions(';
							html +='{';
								html +='message:"Introduza o pin correcto.",';
								html +='duration:"2000",';
								html +='position:"center",';
								html +='styling:{ textSize:20 },';
								html +='addPixelsY:0';
							html +='}';
						html +=');';
					html +='}';
					html += 'else';
					html += '{';
						html += 'alert(\'Introduza o pin correcto.\');';
					html +='}';
					html += 'document.getElementById(\'mvar1\').value = "";';
					html += 'document.getElementById(\'mvar2\').value = "";';
					html += 'document.getElementById(\'mvar3\').value = "";';
					html += 'document.getElementById(\'mvar4\').value = "";';
				html += '},250);';
			html += '}';

		html += '}';
	html += '}';

	html += 'function removeNumero(){';
		html += 'if(document.getElementById(\'mvar4\').value != "") {';
			html += 'document.getElementById(\'mvar4\').value = "";';
		html += '}';
		html += 'else if(document.getElementById(\'mvar3\').value != "") {';
			html += 'document.getElementById(\'mvar3\').value = "";';
		html += '}';
		html += 'else if(document.getElementById(\'mvar2\').value != "") {';
			html += 'document.getElementById(\'mvar2\').value = "";';
		html += '}';
		html += 'else if(document.getElementById(\'mvar1\').value != "") {';
			html += 'document.getElementById(\'mvar1\').value = "";';
		html += '}';
	html += '}';

	html += '</script>';



	return html;
}

function showPinScreenPOS()
{
	var html = '';

	// html += '<div class="titulo">Token</div>';
	html += '<div class="container-pin pin-pos" style="margin-top:40px;">';
		// html += '<div class="logo_finger_id"><img src="img/fingerID.png" width="100%"></div>';
		// html += '<div class="tipo-login">';
		// 	html += '<div class="go_to_button" onclick="window.location.hash=\'faceID\'">FACE ID</div>';
		// 	html += '<div class="here_button">PIN</div>';
		// html += '</div>';
		html += '<div class="introduza-pin-label"><div>Introduza o seu <b>TOKEN</b></div></div>';
		html += '<form action="" method="" name="vform">';
			html += '<div class="inputs-pin">';
				html += '<input id="mvar1" type="password" value="" name="mvar1" readonly="readonly" />';
				html += '<input id="mvar2" type="password" value="" name="mvar2" readonly="readonly" />';
				html += '<input id="mvar3" type="password" value="" name="mvar3" readonly="readonly" />';
				html += '<input id="mvar4" type="password" value="" name="mvar4" readonly="readonly" />';
				html += '<input id="mvar5" type="password" value="" name="mvar5" readonly="readonly" />';
				html += '<input id="mvar6" type="password" value="" name="mvar6" readonly="readonly" />';
			html += '</div>';
			html += '<div class="clear"></div>';
			html += '<div class="inputs-numero">';
				html += '<div class="form-linha-numeros">';
					html += '<input type="button" class="fbutton" name="1" value="1" id="1" onClick=addNumber(this); />';
					html += '<input type="button" class="fbutton" name="2" value="2" id="2" onClick=addNumber(this); />';
					html += '<input type="button" class="fbutton" name="3" value="3" id="3" onClick=addNumber(this); />';
				html += '</div>';
				html += '<div class="form-linha-numeros">';
					html += '<input type="button" class="fbutton" name="4" value="4" id="4" onClick=addNumber(this); />';
					html += '<input type="button" class="fbutton" name="5" value="5" id="5" onClick=addNumber(this); />';
					html += '<input type="button" class="fbutton" name="6" value="6" id="6" onClick=addNumber(this); />';
				html += '</div>';
				html += '<div class="form-linha-numeros">';
					html += '<input type="button" class="fbutton" name="7" value="7" id="7" onClick=addNumber(this); />';
					html += '<input type="button" class="fbutton" name="8" value="8" id="8" onClick=addNumber(this); />';
					html += '<input type="button" class="fbutton" name="9" value="9" id="9" onClick=addNumber(this); />';
				html += '</div>';
				html += '<div class="form-linha-numeros">';
					html += '<input type="button" class="gbutton fbutton hide-pin" name="0" value="" id="pin_p" onClick=showhidepin() />';
					html += '<input type="button" class="fbutton" name="0" value="0" id="0" onClick=addNumber(this); />';
					html += '<input type="button" class="gbutton fbutton arrow-delete" name="removeNumber" id="removeNumber" onClick=removeNumero(); />';
				html += '</div>';
			html += '</div>';
		html += '</form>';
	html+= '</div>';
	html+= '<div class="clear"></div>';
	html+= '<div style="margin:0 auto; width:100%; text-align:center;"><div style="background:#15c513;color:#fff;display:inline-block;padding:10px 40px;margin:0 2px;border-radius:25px;margin-bottom:10px;" class="reloadPaymentsButton" onclick="gerarToken()">GERAR NOVO TOKEN</div></div>';

	html += '<script>';
	html += 'function showhidepin()';
	html += '{';
		html += 'if($(\'#pin_p\').hasClass(\'hide-pin\'))';
		html += '{ ';
			html += '$(\'#pin_p\').removeClass(\'hide-pin\').addClass(\'show-pin\');';
			html += '$(\'#mvar1\').attr(\'type\',\'text\');';
			html += '$(\'#mvar2\').attr(\'type\',\'text\');';
			html += '$(\'#mvar3\').attr(\'type\',\'text\');';
			html += '$(\'#mvar4\').attr(\'type\',\'text\');';
			html += '$(\'#mvar5\').attr(\'type\',\'text\');';
			html += '$(\'#mvar6\').attr(\'type\',\'text\');';
		html += '}';
		html += 'else';
		html += '{';
			html += '$(\'#pin_p\').removeClass(\'show-pin\').addClass(\'hide-pin\');';
			html += '$(\'#mvar1\').attr(\'type\',\'password\');';
			html += '$(\'#mvar2\').attr(\'type\',\'password\');';
			html += '$(\'#mvar3\').attr(\'type\',\'password\');';
			html += '$(\'#mvar4\').attr(\'type\',\'password\');';
			html += '$(\'#mvar5\').attr(\'type\',\'password\');';
			html += '$(\'#mvar6\').attr(\'type\',\'password\');';
		html += '}';
	html += '}';


	html += 'function addNumber(element){';
		// html += 'alert(element.value);';
		html += 'if(document.getElementById(\'mvar1\').value == "") {';
			html += 'document.getElementById(\'mvar1\').value = element.value;';
		html += '}';
		html += 'else if(document.getElementById(\'mvar2\').value == "") {';
			html += 'document.getElementById(\'mvar2\').value = element.value;';
		html += '}';
		html += 'else if(document.getElementById(\'mvar3\').value == "") {';
			html += 'document.getElementById(\'mvar3\').value = element.value;';
		html += '}';
		html += 'else if(document.getElementById(\'mvar4\').value == "") {';
			html += 'document.getElementById(\'mvar4\').value = element.value;';
		html += '}';
		html += 'else if(document.getElementById(\'mvar5\').value == "") {';
			html += 'document.getElementById(\'mvar5\').value = element.value;';
		html += '}';
		html += 'else if(document.getElementById(\'mvar6\').value == "") {';
			html += 'document.getElementById(\'mvar6\').value = element.value;';

			html += 'var pin_introduzido = $(\'#mvar1\').val()+$(\'#mvar2\').val()+$(\'#mvar3\').val()+$(\'#mvar4\').val()+$(\'#mvar5\').val()+$(\'#mvar6\').val();';
			html += 'if(getTokenByPagamentoID(window.localStorage.getItem("pagamento-pos")) == pin_introduzido) {';
				html += 'setTimeout(function() {';
					html += 'window.location.hash="pagarFrotaPOS"';
				html += '},250);';
			html += '}';
			html += 'else';
			html += '{';
				html += 'setTimeout(function() {';
					html += 'if(window.plugins) {';
						html +='window.plugins.toast.showWithOptions(';
							html +='{';
								html +='message:"Introduza o token correcto.",';
								html +='duration:"2000",';
								html +='position:"center",';
								html +='styling:{ textSize:20 },';
								html +='addPixelsY:0';
							html +='}';
						html +=');';
					html +='}';
					html += 'else';
					html += '{';
						html += 'alert(\'Introduza o token correcto.\');';
					html +='}';
					html += 'document.getElementById(\'mvar1\').value = "";';
					html += 'document.getElementById(\'mvar2\').value = "";';
					html += 'document.getElementById(\'mvar3\').value = "";';
					html += 'document.getElementById(\'mvar4\').value = "";';
					html += 'document.getElementById(\'mvar5\').value = "";';
					html += 'document.getElementById(\'mvar6\').value = "";';
				html += '},250);';
			html += '}';

		html += '}';
	html += '}';

	html += 'function removeNumero(){';
		html += 'if(document.getElementById(\'mvar6\').value != "") {';
			html += 'document.getElementById(\'mvar6\').value = "";';
		html += '}';
		html += 'else if(document.getElementById(\'mvar5\').value != "") {';
			html += 'document.getElementById(\'mvar5\').value = "";';
		html += '}';
		html += 'else if(document.getElementById(\'mvar4\').value != "") {';
			html += 'document.getElementById(\'mvar4\').value = "";';
		html += '}';
		html += 'else if(document.getElementById(\'mvar3\').value != "") {';
			html += 'document.getElementById(\'mvar3\').value = "";';
		html += '}';
		html += 'else if(document.getElementById(\'mvar2\').value != "") {';
			html += 'document.getElementById(\'mvar2\').value = "";';
		html += '}';
		html += 'else if(document.getElementById(\'mvar1\').value != "") {';
			html += 'document.getElementById(\'mvar1\').value = "";';
		html += '}';
	html += '}';

	html += '</script>';



	return html;
}

function fazerPagamento()
{
	var html = '';

	var cliente_mbway = window.localStorage.getItem("cliente_mbway");
	var litros = window.localStorage.getItem("litros");
	var kms = window.localStorage.getItem("kms");
	var total_abastecer = window.localStorage.getItem("total_abastecer");
	var token = window.localStorage.getItem("token");
	var price = window.localStorage.getItem("price");
	var telemovel = window.localStorage.getItem("telemovel");
	var reserva = window.localStorage.getItem("reserva");
	var StationID = window.localStorage.getItem("StationID");
	var pagamento_id = window.localStorage.getItem("pagamento_id");
	var reserva_id = window.localStorage.getItem("reserva_id");

	var key = window.localStorage.getItem("key");
	var entry_no = window.localStorage.getItem("entry_no");
	var supply_limit = window.localStorage.getItem("supply_limit");

	console.log('cliente_mbway =>'+cliente_mbway);
	console.log('litros =>'+litros);
	console.log('kms =>'+kms);
	console.log('total_abastecer =>'+total_abastecer);
	console.log('token =>'+token);
	console.log('price =>'+price);
	console.log('telemovel =>'+telemovel);
	console.log('pagamento_id =>'+pagamento_id);
	console.log('reserva =>'+reserva);
	console.log('StationID =>'+StationID);
	console.log('key =>'+key);
	console.log('entry_no =>'+entry_no);
	console.log('supply_limit =>'+supply_limit);

	//Para testes apenas
	/*if(telemovel=='+351914931936' || telemovel=='914931936')
	{
		cliente_mbway=0;//carrinho válido
	}*/

	if(cliente_mbway == 1) //INTEGRAÇÃO MBWAY, Neste momento não está em uso
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pgm_mbway/mbway.php',
			async:false,
			data:{
				'type':'pagarMBway',
				'dp':(new Date()).getTime(),
				'token':token,
				'total_abastecer':total_abastecer,
				'telemovel':telemovel,
				'litros':litros,
				'kms':kms,
				'price':price,
				'reserva':reserva,
				'stationID':StationID,
				'cliente_mbway':cliente_mbway,
				'pagamento_id':pagamento_id,
				'reserva_id':reserva_id,
				'key':key,
				'entry_no':entry_no,
				'supply_limit':supply_limit
				},
			dataType:'html',
			success:function(data)
			{
				html = data;
			},
			error:function(data)
			{
				html = data;
				// console.error('erro em pagarMBway => pgm_mbway/mbway.php');
			}
		});
	}
	else //INTEGRAÇÃO FROTA
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{
				'type':'pagarFrota',
				'dp':(new Date()).getTime(),
				'token':token,
				'total_abastecer':total_abastecer,
				'telemovel':telemovel,
				'litros':litros,
				'kms':kms,
				'price':price,
				'reserva':reserva,
				'stationID':StationID,
				'cliente_mbway':cliente_mbway,
				'pagamento_id':pagamento_id,
				'reserva_id':reserva_id,
				'key':key,
				'entry_no':entry_no,
				'supply_limit':supply_limit
				},
			dataType:'html',
			success:function(data)
			{
				html = data;
			},
			error:function(data)
			{
				html = data;
				// console.error('erro em pagarMBway => pgm_mbway/mbway.php');
			}
		});
	}
	return html;
}

function pagarFrotaPOS()
{
	var postoCountry = window.localStorage.getItem("postoCountry");
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{
				'type':'pagarFrotaPOS',
				'dp':(new Date()).getTime(),
				'pagamento_pos':window.localStorage.getItem("pagamento-pos"),
				'postoCountry':postoCountry
				},
			dataType:'html',
			success:function(data)
			{
				html = data;
			},
			error:function(data)
			{
				console.error('erro em pagarFrotaPOS => pagamentos.php');
			}
		});
	return html;
}

function pagarFrotaCallcenter()
{
	var postoCountry = window.localStorage.getItem("postoCountry");
	$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{
				'type':'pagarFrotaCallcenter',
				'dp':(new Date()).getTime(),
				'pagamento_pos':window.localStorage.getItem("pagamento-pos"),
				'postoCountry':postoCountry
				},
			dataType:'html',
			success:function(data)
			{
				html = data;
			},
			error:function(data)
			{
				console.error('erro em pagarFrotaCallcenter => pagamentos.php');
			}
		});
	return html;
}


function verificaNotificacoesAbastecimentos(intervalID = 0)
{
	var pre_reserva_abastecida_id = window.localStorage.getItem("pre_reserva_abastecida_id");
	var reserva_abastecida_id = window.localStorage.getItem("reserva_abastecida_id");

	if(pre_reserva_abastecida_id == reserva_abastecida_id && reserva_abastecida_id != null)
	{
		//Vamos avisar o cliente caso ainda não tenha sido avisado
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/actions.php',
			async:true,
			data:{'type':'verificaNotificacoesAbastecimentos','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token"),'reserva_id':reserva_abastecida_id},
			dataType:'html',
			success:function(data)
			{
				if(data == 1)
				{
					//if(intervalID>0)clearInterval(intervalID);
					window.localStorage.removeItem("pre_reserva_abastecida_id");
					window.location.hash='resumo-abastecimento';
				}
				else
				{
					setTimeout(function() {verificaNotificacoesAbastecimentos();}, 1000);
				}
			},
			error:function()
			{
				setTimeout(function() {verificaNotificacoesAbastecimentos();}, 1000);
			}
		});
	}
	else
	{
		setTimeout(function() {verificaNotificacoesAbastecimentos();}, 1000);
	}
}

function verificaProximidade(destLat = '',destLng= '')
{
	var ok = 0;
	var lng = 0;

	if (window.localStorage.getItem("lat") != null && window.localStorage.getItem("lng") != null)
	{
		lat = window.localStorage.getItem("lat");
		lng = window.localStorage.getItem("lng");
	}
	else
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/maps.php',
			async:false,
			data:{'type':'getLatLng','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token") },
			dataType:'json',
			success:function(data)
			{
				if(data != 0 || data != '')
				{
					lat = data.lat;
					lng = data.lng;
				}
			},
			error:function(data){}
		});
	}

	if(getDistanceFromLatLonInKm(lat,lng,destLat,destLng,1) < 50)
	{
		ok = 1;
	}
	else
	{
		//Como pode estar proximo da bomba mas o gps do telemovel nao atualizou, vamos recorrer ao google maps:
		$.ajax({
			type:'POST',
			async: false,
			url:'https://www.googleapis.com/geolocation/v1/geolocate',
			data: {'key': 'AIzaSyDuPw9O-z98eEOxzciSIdfxbMjQZ4nvKn0','dp':(new Date()).getTime()},
			dataType:'html',
			success:function(data)
			{
				var result = JSON.parse(data);
				lat=result['location']['lat'];
				lon=result['location']['lng'];
				window.localStorage.setItem('lat', lat);
				window.localStorage.setItem('lng', lon);
			},
			error:function(){}
		});


		if(getDistanceFromLatLonInKm(lat,lng,destLat,destLng,1) < 50)
		{
			ok = 1;
		}
		else
		{
			MSG = 'Tem de se aproximar mais da Bomba.';
			if(window.plugins)
			{
				window.plugins.toast.showWithOptions(
				{
					message:MSG,
					duration:"3000",
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0
				});
			}
			else
			{
				alert(MSG);
			}
		}
	}

	//ok = 1;
	return ok;
}

function number_format (number,decimals,decPoint,thousandsSep) {
	// eslint-disable-line camelcase
  //  discuss at:https://locutus.io/php/number_format/
  // original by:Jonas Raoni Soares Silva (https://www.jsfromhell.com)
  // improved by:Kevin van Zonneveld (https://kvz.io)
  // improved by:davook
  // improved by:Brett Zamir (https://brett-zamir.me)
  // improved by:Brett Zamir (https://brett-zamir.me)
  // improved by:Theriault (https://github.com/Theriault)
  // improved by:Kevin van Zonneveld (https://kvz.io)
  // bugfixed by:Michael White (https://getsprink.com)
  // bugfixed by:Benjamin Lupton
  // bugfixed by:Allan Jensen (https://www.winternet.no)
  // bugfixed by:Howard Yeend
  // bugfixed by:Diogo Resende
  // bugfixed by:Rival
  // bugfixed by:Brett Zamir (https://brett-zamir.me)
  //  revised by:Jonas Raoni Soares Silva (https://www.jsfromhell.com)
  //  revised by:Luke Smith (https://lucassmith.name)
  //    input by:Kheang Hok Chin (https://www.distantia.ca/)
  //    input by:Jay Klehr
  //    input by:Amir Habibi (https://www.residence-mixte.com/)
  //    input by:Amirouche
  //   example 1:number_format(1234.56)
  //   returns 1:'1,235'
  //   example 2:number_format(1234.56,2,',',' ')
  //   returns 2:'1 234,56'
  //   example 3:number_format(1234.5678,2,'.','')
  //   returns 3:'1234.57'
  //   example 4:number_format(67,2,',','.')
  //   returns 4:'67,00'
  //   example 5:number_format(1000)
  //   returns 5:'1,000'
  //   example 6:number_format(67.311,2)
  //   returns 6:'67.31'
  //   example 7:number_format(1000.55,1)
  //   returns 7:'1,000.6'
  //   example 8:number_format(67000,5,',','.')
  //   returns 8:'67.000,00000'
  //   example 9:number_format(0.9,0)
  //   returns 9:'1'
  //  example 10:number_format('1.20',2)
  //  returns 10:'1.20'
  //  example 11:number_format('1.20',4)
  //  returns 11:'1.2000'
  //  example 12:number_format('1.2000',3)
  //  returns 12:'1.200'
  //  example 13:number_format('1 000,50',2,'.',' ')
  //  returns 13:'100 050.00'
  //  example 14:number_format(1e-8,8,'.','')
  //  returns 14:'0.00000001'

  number = (number + '').replace(/[^0-9+\-Ee.]/g,'')
  var n = !isFinite(+number) ? 0 :+number
  var prec = !isFinite(+decimals) ? 0 :Math.abs(decimals)
  var sep = (typeof thousandsSep === 'undefined') ? ',' :thousandsSep
  var dec = (typeof decPoint === 'undefined') ? '.' :decPoint
  var s = ''

  var toFixedFix = function (n,prec) {
	if (('' + n).indexOf('e') === -1) {
	  return +(Math.round(n + 'e+' + prec) + 'e-' + prec)
	} else {
	  var arr = ('' + n).split('e')
	  var sig = ''
	  if (+arr[1] + prec > 0) {
		sig = '+'
	  }
	  return (+(Math.round(+arr[0] + 'e' + sig + (+arr[1] + prec)) + 'e-' + prec)).toFixed(prec)
	}
  }

  // @todo:for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n,prec).toString() :'' + Math.round(n)).split('.')
  if (s[0].length > 3) {
	s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,sep)
  }
  if ((s[1] || '').length < prec) {
	s[1] = s[1] || ''
	s[1] += new Array(prec - s[1].length + 1).join('0')
  }

  return s.join(dec)
}

function zeroPad(num,places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}


$("input[type=text],input[type=number],textarea").on({ 'touchstart' :function() {
	zoomDisable();
}});

$("input[type=text],input[type=number],textarea").on({ 'touchend' :function() {
	setTimeout(zoomEnable,500);
}});

function zoomDisable(){
	$("head meta[name=viewport]").remove();
	$('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />');
}

function zoomEnable(){
	$("head meta[name=viewport]").remove();
	$('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />');
}



$( document ).ready(function()
{
	$('#map-details2').on('click',function()
	{
		if($(this).hasClass('map-details-absolute'))
		{

			$(this).removeClass('map-details-absolute');
		}
		else
		{
			$(this).addClass('map-details-absolute');
		}
	});

	$('#profile-panel .profile-menu').on('click',function()
	{
		$( "#profile-panel" ).panel( "close" );
	});


	$('#close-mapa').on('click',function()
	{
		$( "#specific-map" ).panel( "close" );
	});

	$('#close-mapa2').on('click',function()
	{
		$('#map-details2').removeClass('map-details-absolute');
		$("#specific-map2" ).panel( "close" );
	});

	resizeDiv();

	$("#fundo_branco").height(window.innerHeight-230);
	$("#fundo_branco2").height(window.innerHeight-190);

	window.onresize = function(event) {resizeDiv();}
	window.onload = function(event) {resizeDiv();}
		function resizeDiv() {
		vpw = $(window).width();
			$('.horizontal-scroll-wrapper3').css({'height':vpw + 'px'});
		}
});
