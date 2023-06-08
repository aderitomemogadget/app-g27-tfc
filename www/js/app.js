var tokenLogin;
var client_id;
var clicked=0;
var StationID='';

var new_height=($(window).height() - ($('#app-header').outerHeight(true) + $('#app-footer').outerHeight(true)));
var new_height2=($(window).height() - ($('#app-footer').outerHeight(true)));
var new_height3=($(window).height());

$('.content_load').css('min-height',$(window).height() + 'px');
$('#overlay-login').css({'min-height':new_height3+'px','height':new_height3+'px'});
$('#overlay').css({'min-height':new_height3+'px','height':new_height3+'px'});

function change()
{
	if(tipo_login==2)
	{
		$("#login_standard").hide();
		$("#login_pin").show();
		tipo_login=1;
	}
	else
	{
		$("#login_pin").hide();
		$("#login_standard").show();
		tipo_login=2;
	}
}
function login_pin()
{
	$("#login").val( $("#indicativo_home").val()+$("#m_phone").val() );
	$("#password").val( $("#PIN1").val()+$("#PIN2").val()+$("#PIN3").val()+$("#PIN4").val() );
	$("#PIN1").val('');
	$("#PIN2").val('');
	$("#PIN3").val('');
	$("#PIN4").val('');
	login();
}
$("#icon1").on( "dblclick", function(e) {
	e.preventDefault();
	e.stopPropagation();
	change();
} );

$(document).on('keypress','input',function(event)
{
	var keycode=event.keyCode || event.which;
	if(keycode == '13')
	{
		var element=event.currentTarget;
		var id=$(element).attr("id");

		if (id == "login" || id == "password")
		{
			login();
		}
		else if (id == "nome-register" || id == "login-register" || id == "password-register")
		{
			register();
		}
		event.preventDefault();
	}
});

function ver_termos(e)
{
	//$("#"+e).height(window.innerHeight-580);
	$("#"+e+' .modal-body').height(window.innerHeight-100);

	$.ajax({
	type:'POST',
	url:globalUrl+'admin_tfc/info.php',
	async:false,
	data:{'type':'infoTermosLegais2','dp':(new Date()).getTime(),telemovel:window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token")},
	dataType:'html',
	success:function(data)
	{
		$("#"+e+' .modal-body').html(data);
		$("#"+e).toggle();
	},
	error:function(data){}
	});
}
function ver_politica(e)
{
	//$("#"+e).height(window.innerHeight-580);
	$("#"+e+' .modal-body').height(window.innerHeight-100);
	$.ajax({
	type:'POST',
	url:globalUrl+'admin_tfc/info.php',
	async:false,
	data:{'type':'infoPolitica','dp':(new Date()).getTime(),telemovel:window.localStorage.getItem("telemovel"),'token':window.localStorage.getItem("token")},
	dataType:'html',
	success:function(data)
	{
		$("#"+e+' .modal-body').html(data);
		$("#"+e).toggle();
	},
	error:function(data){}
	});
}


function showhidep()
{
	if($('#password_p').html() == '<img src="img/show_p.svg" style="width:20px;height:14px" border="0">')
	{
		$('#password_p').html('<img style="width:20px;height:14px" src="img/hide_p.svg" border="0">');
		$('#password').attr('type','text');
	}
	else
	{
		$('#password_p').html('<img src="img/show_p.svg" style="width:20px;height:14px" border="0">');
		$('#password').attr('type','password');
	}
}

function showhidepin()
{
	if($('#password_p').html() == '<img src="img/show_p.svg" style="width:20px;height:14px" border="0">')
	{
		$('#password_p').html('<img style="width:20px;height:14px" src="img/hide_p.svg" border="0">');
		$('#pin').attr('type','text');
	}
	else
	{
		$('#password_p').html('<img src="img/show_p.svg" style="width:20px;height:14px" border="0">');
		$('#pin').attr('type','password');
	}
}
function showhidepCallCenter()
{
	if($('#password_callcenter').html() == '<img src="img/show_p.svg" style="width:20px;height:14px" border="0">')
	{
		$('#password_callcenter').html('<img style="width:20px;height:14px" src="img/hide_p.svg" border="0">');
		$('#password-callcenter').attr('type','text');
	}
	else
	{
		$('#password_callcenter').html('<img src="img/show_p.svg" style="width:20px;height:14px" border="0">');
		$('#password-callcenter').attr('type','password');
	}
}
function showhidepPOS()
{
	if($('#password_pos').html() == '<img src="img/show_p.svg" style="width:20px;height:14px" border="0">')
	{
		$('#password_pos').html('<img style="width:20px;height:14px" src="img/hide_p.svg" border="0">');
		$('#password-pos').attr('type','text');
	}
	else
	{
		$('#password_pos').html('<img src="img/show_p.svg" style="width:20px;height:14px" border="0">');
		$('#password-pos').attr('type','password');
	}
}
function carregar_menus()
{
	console.log("A carregar menus");
	var menus_html='';

	if(window.localStorage.getItem("Cache_menus")!="" && window.localStorage.getItem("Cache_menus")!=null)
	{
		menus_html=window.localStorage.getItem("Cache_menus");
	}
	else
	{
		var menus_default='';
		menus_default+='				<div id="profile-limites"></div>';
		menus_default+='				<ul class="profile-list hamburger-menu1">';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/home.svg"><div class="profile-menu" onclick="homeButtonByPermission()">Home</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/mensagens.svg"><div class="profile-menu mensagens-trad" onclick="window.location.hash=\'messages\'">Mensagens</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/carregamentos.svg"><div class="profile-menu carregamentos-trad" onclick="window.location.hash=\'carregar-saldo-mbway-menu\'">Carregamentos</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/carregamentos.svg"><div class="profile-menu pagamentos-pendentes-trad" onclick="window.location.hash=\'pay\'">Pagamentos Pendentes</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/consumos.svg"><div class="profile-menu consumos-trad" onclick="window.location.hash=\'consumes\'">Consumos</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/historico.svg"><div class="profile-menu historico" onclick="window.location.hash=\'historico-global\'">Histórico</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/dados_conta.svg"><div class="profile-menu conta-trad" onclick="window.location.hash=\'account\'">Dados da conta</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/contactos.svg"><div class="profile-menu contactos-trad" onclick="window.location.hash=\'contactos\'">Contactos</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/contactos.svg"><div class="profile-menu sobre-nos-trad" onclick="window.location.hash=\'sobre-nos\'">Sobre nós</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/termos_legais.svg"><div class="profile-menu termos-legais-trad" onclick="window.location.hash=\'termos-legais\'">Termos Legais</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/logout.svg"><div class="profile-menu logout-trad" onclick="logout()" style="background:#333399;margin-top:10px;width:150px;margin-left:50px;text-align:center;padding-top:0;color:#fff">Logout</div></li>';
		menus_default+='				</ul>';
		menus_default+='				<ul class="profile-list hamburger-menu2" style="display:none">';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/home.svg"><div class="profile-menu" onclick="homeButtonByPermission()">Home</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/mensagens.svg"><div class="profile-menu mensagens-trad" onclick="window.location.hash=\'messages\'">Mensagens</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/carregamentos.svg"><div class="profile-menu carregamentos-trad" onclick="window.location.hash=\'carregar-saldo-mbway-menu\'">Carregamentos</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/carregamentos.svg"><div class="profile-menu pagamentos-pendentes-trad" onclick="window.location.hash=\'pay\'">Pagamentos Pendentes</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/veiculos.svg"><div class="profile-menu veiculos-trad" onclick="window.location.hash=\'veiculos\'">Veículos</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/condutores.svg"><div class="profile-menu condutores-trad" onclick="window.location.hash=\'condutores\'">Condutores</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/consumos.svg"><div class="profile-menu consumos-trad" onclick="window.location.hash=\'consumes\'">Consumos</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/financeira.svg"><div class="profile-menu financeira-trad" onclick="window.location.hash=\'financeira\'">Financeira</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/historico.svg"><div class="profile-menu historico" onclick="window.location.hash=\'historico-global\'">Histórico</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/dados_conta.svg"><div class="profile-menu conta-trad" onclick="window.location.hash=\'account\'">Dados da conta</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/configuracoes.svg"><div class="profile-menu configuracoes-trad" onclick="window.location.hash=\'configuracoes\'">Configurações</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/contactos.svg"><div class="profile-menu sobre-nos-trad" onclick="window.location.hash=\'sobre-nos\'">Sobre nós</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/contactos.svg"><div class="profile-menu contactos-trad" onclick="window.location.hash=\'contactos\'">Contactos</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/termos_legais.svg"><div class="profile-menu termos-legais-trad" onclick="window.location.hash=\'termos-legais\'">Termos Legais</div></li>';
		menus_default+='					<li class="item"><img class="menu_svg" src="img/icons-menu/logout.svg"><div class="profile-menu logout-trad" onclick="logout()" style="background:#333399;margin-top:10px;width:150px;margin-left:50px;text-align:center;padding-top:0;color:#fff">Logout</div></li>';
		menus_default+='				</ul>';




		menus_html=menus_default;

	}
	$('#info-panel').html(menus_html);
}
function init_app()
{
	$('#search-input').keyup(function()
	{
		var txt=$(this).val();
		$('.search-res').each(function()
		{
			if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1)
			{
				$('#'+$(this).attr('data')).show();
			}
			else
			{
				$('#'+$(this).attr('data')).hide();
			}
		});
	});

	var hash=location.hash.replace('#','');
	if(hash == '')
	{
		hash='homepage';
		window.location.hash='homepage';
	}
	$(".drop2 a").on('touchend click',function (e)
	{
		e.stopPropagation();
		e.preventDefault();
		var link=$(this);

		if (link.attr("href") != '#')
		{

		}
		else
		{
			var closest_ul=link.closest("ul");
			var parallel_active_links=closest_ul.find(".active")
			var closest_li=link.closest("li");
			var link_status=closest_li.hasClass("active");
			var count=0;

			closest_ul.find("ul").slideUp(function () {
				if (++count == closest_ul.find("ul").length)
					parallel_active_links.removeClass("active");
			});

			if (!link_status) {
				closest_li.children("ul").slideDown();
				closest_li.addClass("active");
			}
		}
	});

	$(".drop3 a").on('touchend click',function (e)
	{
		e.stopPropagation();
		e.preventDefault();
		var link=$(this);
		if (link.attr("href") != '#')
		{

		}
		else
		{
			var closest_ul=link.closest("ul");
			var parallel_active_links=closest_ul.find(".active")
			var closest_li=link.closest("li");
			var link_status=closest_li.hasClass("active");
			var count=0;

			closest_ul.find("ul").slideUp(function () {
				if (++count == closest_ul.find("ul").length)
					parallel_active_links.removeClass("active");
			});

			if (!link_status) {
				closest_li.children("ul").slideDown();
				closest_li.addClass("active");
			}
		}
	});

	setupLabel();

	$('.label_check_p').unbind("touchend click").bind('touchend click',function(event)
	{
		if($(this).find('input[type=checkbox]').is(':checked')){$(this).find('input[type=checkbox]').prop('checked',false);}else{$(this).find('input[type=checkbox]').prop('checked','checked');}
		setupLabel();
	});

	$('.label_check').unbind("touchend click").bind('touchend click',function(event)
	{
		if($(this).find('input[type=radio]').is(':checked')){$(this).find('input[type=radio]').prop('checked',false);}else{$(this).find('input[type=radio]').prop('checked','checked');}
		setupLabel();
	});
	$("#executaFiltros").on('touchend click',function()
	{
		executaFiltros();
	});
	$("#clearItems").on('touchend click',function()
	{
		clearItems();
	});
	$("#executaSort").on('touchend click',function()
	{
		executaSort();
	});
}

function validateEmail(email)
{
	var re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
function new_email()
{
	var nome=document.getElementById('email');
	var t;
	if(APP_ON == 1 || APP_ON == 2) new_email_online();
}

 function validateEmail($email) {
  var emailReg=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}

function new_email_online()
{
	var email=document.getElementById('email');
	var from_email=document.getElementById('from_email');
	var t;

	if(email.value == '' && from_email.value =='')
	{
		t='<div class="new-form message-form"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">Preencha todos os campos.</div></div></div></div>';
		$(t).appendTo('.form-new-email .message').delay(3000).queue(function() { $(this).remove();});
	}
	else if(!validateEmail(from_email.value))
	{
		t='<div class="new-form message-form"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">O email introduzido não é válido.</div></div></div></div>';
		$(t).appendTo('.form-new-email .message').delay(3000).queue(function() { $(this).remove();});
	}
	else
	{
		if(APP_ON == 2)
		{
			$.ajax({
				type:'POST',
				url:globalUrl+'admin_tfc/email.php',
				data:{'type':'send_email','dp':(new Date()).getTime(),'email':email.value,'from_email':from_email.value,'token':window.localStorage.getItem("token")},
				dataType:'html',
				success:function(data)
				{
					var data2=data.split('[spl]');

					if(data2 == 0)
					{
						t='<div class="new-form message-form"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">Erro a Enviar a Mensagem.</div></div></div></div>';
						$(t).prependTo('.form-new-email .message').delay(3000).queue(function() { });
					}
					else
					{
						$('#from_email').empty();
						$('#email').empty();
						t='<div class="new-form  message-form-sucess"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">Mensagem Enviada.</div></div></div></div>';
						$(t).prependTo('.form-new-email .message').delay(3000).queue(function() { $(this).remove(); window.location.hash='homepage';});
					}
				},
				error:function()
				{

				}
			});
		}
	}
}

function login_call_center()
{
	if(APP_ON == 0 || APP_ON == 2) login_online_call_center();
	else
	{
		var email=document.getElementById('login');
		var password=document.getElementById('password');

		if(email.value == '' || password.value == '')
		{
			t='<div class="message-form"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">'+key_insertemail[sLang]+'</div></div></div></div>';
			$(t).hide().prependTo('.login-box .login-form').fadeIn().delay(3000).queue(function() { $(this).remove();});
		}
		else
		{
			var sql="SELECT * FROM clients WHERE email='" + email.value + "' AND password='" + MD5(password.value)+ "'";
			db.transaction(function (tx)
			{
				tx.executeSql(sql,[],function (tx,rs)
				{
					if (rs.rows.length > 0)
					{
						window.localStorage.setItem("token",MD5('+'+telemovel.value+'.'+password.value));
						window.localStorage.setItem("telemovel",email.value);
						tokenLogin=MD5(email.value);
						window.localStorage.setItem("callcenter",1);
						window.location.hash='homepage-callcenter';
						verificaPermissao();
					}
					else
					{
						t='<div class="message-form"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">'+key_userincrorreto[sLang]+'</div></div></div></div>';
						$(t).hide().prependTo('.login-box .login-form').fadeIn().delay(3000).queue(function() { $(this).remove();});
					}

				},errorCB);
			});
		}
	}
}

function login_online_call_center()
{
	var telemovel=document.getElementById('login');
	var password=document.getElementById('password');

	if(telemovel.value == '' || password.value == '')
	{
		t='<div class="message-form"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">'+key_insertemail[sLang]+'</div></div></div></div>';
		$(t).hide().prependTo('.login-box .login-form').fadeIn().delay(3000).queue(function() { $(this).remove();});
	}
	else
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/logins.php',
			data:{'type':'clients_login_callcenter','dp':(new Date()).getTime(),'telemovel':telemovel.value,'password':password.value},
			dataType:'html',
			success:function(data)
			{
				var data2=data.split('[spl]');
				if(data2 != '0')
				{
					window.localStorage.setItem("token",MD5(telemovel.value));
					window.localStorage.setItem("telemovel",telemovel.value);
					tokenLogin=MD5(telemovel.value);
					window.localStorage.setItem("callcenter",1);
					window.location.hash="homepage-callcenter";
				}
				else
				{
					t='<div class="message-form"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">'+key_userincrorreto[sLang]+'</div></div></div></div>';
					$(t).hide().prependTo('.login-box .login-form').fadeIn().delay(3000).queue(function() { $(this).remove();});
				}
			},
			error:function()
			{

			}
		});
	}
}
function login_pos()
{
	console.log("login pos");
	console.log(APP_ON);
	if(APP_ON == 0 || APP_ON == 2) login_online_pos();
	else
	{
		var email=document.getElementById('login');
		var password=document.getElementById('password');

		if(email.value == '' || password.value == '')
		{
			t='<div class="message-form"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">'+key_insertemail[sLang]+'</div></div></div></div>';
			$(t).hide().prependTo('.login-box .login-form').fadeIn().delay(3000).queue(function() { $(this).remove();});
		}
		else
		{
			var sql="SELECT * FROM clients WHERE email='" + email.value + "' AND password='" + MD5(password.value)+ "'";
			db.transaction(function (tx)
			{
				tx.executeSql(sql,[],function (tx,rs)
				{
					if (rs.rows.length > 0)
					{
						window.localStorage.setItem("token",MD5(email.value));
						window.localStorage.setItem("telemovel",email.value);
						tokenLogin=MD5(email.value);
						window.localStorage.setItem("pos",1);
						window.location.hash='homepage-pos';
					}
					else
					{
						t='<div class="message-form"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">'+key_userincrorreto[sLang]+'</div></div></div></div>';
						$(t).hide().prependTo('.login-box .login-form').fadeIn().delay(3000).queue(function() { $(this).remove();});
					}

				},errorCB);
			});
		}
	}
}

function login_online_pos()
{
	var telemovel=document.getElementById('login');
	var password=document.getElementById('password');

	// //so para testes
	// window.localStorage.setItem("IMEI","60c0e593278f37753de6eadff001d8bc");
	// window.localStorage.setItem("active","true");
	// window.localStorage.setItem("postoPOS","P13-002");
	// window.localStorage.setItem("postoPOS_txt","P019 Prio Porto - Zona Ind.");

	//Para testes:
	if(window.localStorage.getItem("telemovel")=='pos2')
	{
		window.localStorage.setItem("active","true");
		window.localStorage.setItem("permissao",1);
		window.localStorage.setItem("postoPOS",'TESTE');
	}


	var IMEI=window.localStorage.getItem("IMEI");
	if(IMEI == null || IMEI == 'null')
	{
		IMEI=0;
	}
	if(telemovel.value == '' || password.value == '')
	{
		t='<div class="message-form"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">'+key_insertemail[sLang]+'</div></div></div></div>';
		$(t).hide().prependTo('.login-box .login-form').fadeIn().delay(3000).queue(function() { $(this).remove();});
	}
	else
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/logins.php',
			data:{'type':'clients_login_pos','dp':(new Date()).getTime(),'telemovel':telemovel.value,'password':password.value,'IMEI':IMEI},
			dataType:'html',
			success:function(data)
			{
				var data2=data.split('[spl]');
				if(data2 != '0')
				{
					window.localStorage.setItem("token",MD5(telemovel.value));
					window.localStorage.setItem("telemovel",telemovel.value);
					window.localStorage.setItem("permissao",data2[4]);
					window.localStorage.setItem("active",data2[6]);
					tokenLogin=MD5(telemovel.value);

					window.localStorage.setItem("pos",1);

					if(window.localStorage.getItem("active") == 'true')
					{
						window.location.hash="iniciar-pagamento";
					}
					else
					{
						window.location.hash="definicao-posto";
					}

				}
				else
				{
					login_call_center();
				}
			},
			error:function()
			{

			}
		});
	}
}

function pagina_gegisto()
{
	$("#registo-1").hide();
	$("#registo-2").hide();
	$("#login-box").hide();
	$("#home_not_logado").hide();	
	$("#registo-box").show();
}

function goto_to_start()
{
	goto_to_login();
	/*
	$("#registo-1").hide();
	$("#registo-2").hide();
	$("#login-box").hide();
	$("#home_not_logado").show();
	*/
}
function goto_to_login()
{
	$("#home_not_logado").hide();
	$("#registo-box").hide();
	$("#registo-1").hide();
	$("#registo-2").hide();
	$("#login-box").show();
}
function goto_to_registo1()
{
	$("#home_not_logado").hide();
	$("#registo-2").hide();
	$("#login-box").hide();
	$("#registo-box").hide();
	$("#registo-1").show();
	registo1_step1();
}
function goto_to_registo2()
{
	$("#home_not_logado").hide();
	$("#registo-2").hide();
	$("#login-box").hide();
	$("#registo-box").hide();
	$("#registo-2").show();
	registo2_step1();
}

function login()
{
	if(tipo_login==2)$("#bt-login-standard").hide();
	else $("#bt-login").hide();

	$("#bt-login2").show();
	setTimeout(function() {
		login_2();
	}, 1000);
}
function login_2()
{
	window.localStorage.setItem("MENUS_VERSION","");
	window.localStorage.setItem("estou_logado","0");
	window.localStorage.setItem("ja_carreguei_home_page","0");
	$("#content_home").hide();
	$("#content").hide();
	$("#content_iframe").hide();
	$("#content_mapa").hide();

	setTimeout(function() {

		if(tipo_login==2)$("#bt-login-standard").show();
		else $("#bt-login").show();

		$("#bt-login2").hide();
	}, 5000);

	if(APP_ON == 0 || APP_ON == 2)
	{
		login_online();
	}
	else
	{
		var email=document.getElementById('login');
		var password=document.getElementById('password');

		if(email.value == '' || password.value == '')
		{
			t='<div class="message-form"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">'+key_insertemail[sLang]+'</div></div></div></div>';
			$(t).hide().prependTo('.login-box .login-form').fadeIn().delay(3000).queue(function() { $(this).remove();});
		}
		else
		{
			var sql="SELECT * FROM clients WHERE email='" + email.value + "' AND password='" + MD5(password.value)+ "'";
			db.transaction(function (tx)
			{
				tx.executeSql(sql,[],function (tx,rs)
				{
					if (rs.rows.length > 0)
					{
						window.localStorage.setItem("token",MD5(email.value));
						window.localStorage.setItem("telemovel",email.value);
						tokenLogin=MD5(email.value);
						hash='homepage';

						//Se existir o login em bd vamos prosseguir
						verificaPermissao();
					}
					else
					{
						t='<div class="message-form"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">'+key_userincrorreto[sLang]+'</div></div></div></div>';
						$(t).hide().prependTo('.login-box .login-form').fadeIn().delay(3000).queue(function() { $(this).remove();});
					}
				},errorCB);
			});
		}

	}
}

function voltar_ao_login()
{
	$(".login-form").show();
	$(".recupera-password-form").hide();
	$(".recupera-password-form2").hide();
	$(".recupera-password-form3").hide();
}

function recuperar_password()
{
	$("#bt-login").hide();
	$("#bt-login2").show();

	$(".login-form").hide();
	$(".recupera-password-form2").hide();
	$(".recupera-password-form").show();

	$("#bt-login").show();
	$("#bt-login2").hide();
}
function recuperar_password2()
{
	var telemovel=document.getElementById('m_phone_recupera');
	if(telemovel=='' || telemovel==undefined)
	{
		var msg = 'Necessita indicar um número de telemóvel';
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
		$("#bt-recuperar").hide();
		$("#bt-recuperar2").show();
		setTimeout(function() {
			recuperar_password2_2();
		}, 1000);
	}
}
function recuperar_password2_2()
{
	var telemovel=document.getElementById('m_phone_recupera');

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/logins.php',
		data:{'type':'recuperar_password_gera_pin','dp':(new Date()).getTime(),'telemovel':telemovel.value },
		dataType:'html',
		success:function(data)
		{
			$("#bt-recuperar").show();
			$("#bt-recuperar2").hide();
			if(data == 1)
			{
				$(".recupera-password-form").hide();
				$(".recupera-password-form2").show();
			}
			else
			{
				//Erro
				tente_novamente='Não foi possivel enviar-lhe a nova password, tente novamente mais tarde.';
				t='<div class="message-form message-info"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">'+tente_novamente+'</div></div></div></div>';
				$(t).hide().prependTo('.login-box .recupera-password-form').fadeIn().delay(3000).queue(function() { $(this).remove();});
			}			
		},
		error:function()
		{
			//Erro
			tente_novamente='Não foi possivel enviar-lhe a nova password, tente novamente mais tarde.';
			t='<div class="message-form message-info"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">'+tente_novamente+'</div></div></div></div>';
			$(t).hide().prependTo('.login-box .recupera-password-form').fadeIn().delay(3000).queue(function() { $(this).remove();});
		}
	});
}
function validar()
{
	$("#bt-validar").hide();
	$("#bt-validar2").show();
	setTimeout(function() {
		validar_2();
	}, 1000);
}
function validar_2()
{
	var telemovel=document.getElementById('m_phone');
	var nova_password=document.getElementById('nova_password');

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/logins.php',
		data:{'type':'recuperar_password_validar','dp':(new Date()).getTime(),'telemovel':telemovel.value,'nova_password':nova_password.value },
		dataType:'html',
		success:function(data)
		{
			$("#bt-validar").show();
			$("#bt-validar2").hide();
			if(data == 1)
			{
				$(".recupera-password-form").hide();
				$(".recupera-password-form2").hide();
				$(".recupera-password-form3").show();
			}
			else
			{
				//Erro
				tente_novamente='Não foi possivel confirmar a nova password, por favor tente novamente mais tarde.';
				t='<div class="message-form message-info"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">'+tente_novamente+'</div></div></div></div>';
				$(t).hide().prependTo('.login-box .recupera-password-form2').fadeIn().delay(3000).queue(function() { $(this).remove();});
			}			
		},
		error:function()
		{
			//Erro
			tente_novamente='Não foi possivel confirmar a nova password, por favor tente novamente mais tarde.';
			t='<div class="message-form message-info"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">'+tente_novamente+'</div></div></div></div>';
			$(t).hide().prependTo('.login-box .recupera-password-form2').fadeIn().delay(3000).queue(function() { $(this).remove();});
		}
	});
}

function login_online()
{
	//Primeiro vai verificar se é um user normal e se nao for tenta foazer login como POS
	var telemovel=document.getElementById('login');
	var password=document.getElementById('password');
	var session_id_app=window.localStorage.getItem("session_id_app");

	if(telemovel.value == '' || password.value == '')
	{
		t='<div class="message-form"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">'+key_insertemail[sLang]+'</div></div></div></div>';

		$(t).hide().prependTo('.login-box .login-form').fadeIn().delay(3000).queue(function() { $(this).remove();});
	}
	else
	{
		if (typeof version === 'undefined') version='';

		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/logins.php',
			data:{'type':'clients_login','dp':(new Date()).getTime(),'telemovel':telemovel.value,'password':password.value,'session_id_app':session_id_app,'version':version },
			dataType:'html',
			success:function(data)
			{
				var data2=data.split('[spl]');

				if(data2[0] == 4)
				{
					tente_novamente='Por Favor Actualize a sua aplicação.';
					t='<div class="message-form message-info"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">'+tente_novamente+'</div></div></div></div>';
					$(t).hide().prependTo('.login-box .login-form').fadeIn().delay(3000).queue(function() { $(this).remove();});
				}
				else if(data2[0] == 3)
				{
					tente_novamente='Login Bloqueado.';
					t='<div class="message-form message-danger"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">'+tente_novamente+'</div></div></div></div>';
					$(t).hide().prependTo('.login-box .login-form').fadeIn().delay(3000).queue(function() { $(this).remove();});
				}
				else if(data2[0] == 2)
				{
					tente_novamente='Aguarde por uns momentos e tente fazer login novamente.';
					t='<div class="message-form message-warning"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">'+tente_novamente+'</div></div></div></div>';
					$(t).hide().prependTo('.login-box .login-form').fadeIn().delay(3000).queue(function() { $(this).remove();});
				}
				else if(data2 != '0')
				{
					//Se estou a fazer auto login
					if(window.localStorage.getItem("autologin")!="1")
					{
						//Se tem finger print ativo vamos perguntar se quer guardar os dados
						if (typeof window.Fingerprint != 'undefined')
						{
							if (window.localStorage.getItem("login_nao_perguntar") != '1')
							{
								if (confirm("Pretende guardar os dados do seu login?"))
								{
								  guarda_dados();
								}
								else
								{
									//Vamos esconder a mensagem para não voltar a perguntar
									window.localStorage.setItem("login_nao_perguntar","1");
								}
							}
						}
					}

					window.localStorage.setItem("token",MD5('+'+telemovel.value+'.'+password.value));
					window.localStorage.setItem("telemovel",'+'+telemovel.value);
					window.localStorage.setItem("session_id_app",data2[2]);
					window.localStorage.setItem("pagar_loja",data2[3]);
					tokenLogin=MD5(telemovel.value);
					hash='homepage';

					if(APP_ON == 0)
					{
						var sql="INSERT INTO clients (nome,email,password) VALUES ('"+data2[1]+"','"+email.value+"','" + MD5(password.value) + "')";
						db.transaction(function (tx)
						{
							tx.executeSql(sql,[],function (tx,rs) {},errorCB);
							verificaPermissao();
						});
					}
					else
					{
						verificaPermissao();
					}
				}
				else
				{
					login_pos();
				}
			},
			error:function()
			{

			}
		});
	}
}

function errorCB(tx,err)
{
	/*console.log("Error processing SQL:" + err.message);*/
}

function getCursorPosition(e) {
	var x;
	var y;
	if (e.pageX != undefined && e.pageY != undefined) {
	x=e.pageX;
	y=e.pageY;
	}
	else {
	x=e.clientX + document.body.scrollLeft +
			document.documentElement.scrollLeft;
	y=e.clientY + document.body.scrollTop +
			document.documentElement.scrollTop;
	}
	x -= Ccanvas.offsetLeft;
	y -= Ccanvas.offsetTop;

	var Point={
		x:x,
		y:y
		};
	return Point;
}


function deletedata(query,succ_fun)
{
	db.transaction(function(tx)
	{
		tx.executeSql(query,[],eval(succ_fun),[]);
	});
}

function errorDeleteCB()
{

}

function successDeleteCB()
{
	t='<div class="new-form  message-form-sucess-palette"><div class="txt"><div class="tbl"><div class="tbl-cell2" style="text-align:center">'+key_custom_pallete_was_removed_from_the_favorites_list[sLang]+'</div></div></div></div>';
	closeAll();
	$(t).appendTo('.app-header').delay(2000).queue(function() { $(this).remove(); $('#content').empty();getCustomPalettes();});
}


function getAccount()
{
	if(window.location.hash == '#account-form')
	{
		var res; var tem_prod=0;
		db.transaction(function (tx)
		{
			var sql="SELECT * FROM clients";

			tx.executeSql(sql,[],function (tx,rs)
			{
				for(var a=0; a<rs.rows.length; a++)
				{
					var row=rs.rows.item(a);

					var nome=row['nome'];
					var email=row['email'];

					$('#nome-account').val(nome);
					$('#login-account').val(email);
				}
			},errorCB);
		});
	}
}






function closeAll(t)
{
	$('#menu_head').css('display','none');
	$('.menu-p').css({'display':'none','right':'-1px'}) //BIG HAMMER
	$('.menu-p2').css('display','none');
	$('.points-wrap').css('display','none');
	$('#menu_head_favorites').css('display','none');
	$('#menu_head_paletes_personalizadas').css('display','none');

	if(substr_count($('#head').css('background-image'),'menuclose.svg')) { $('#head').fadeTo('fast',0.3,function() { $(this).css('background-image','url(img/menu.svg)'); }).fadeTo('fast',1);}
	if(t==1){$('#content').animate({ scrollTop:0 },0);}
}
function slideCloseAll(t)
{
	ShowMenuHead('head');
	$('#menu_head_favorites').css('display','none');
}
function slideCloseAllCustomPallete(t)
{
	ShowMenuHeadCustomPalette('head');
	$('#menu_head_paletes_personalizadas').css('display','none');
}
function slideOpen(t)
{
	ShowMenuHead('head_favorites');
	$('#menu_head').css('display','none');
}
function slideOpenCustomPalete(t)
{
	ShowMenuHeadCustomPalette('head_paletes_personalizadas');
	$('#menu_head').css('display','none');
}
function showFiltros()
{
	$('.filtros-right-wrap').css('display','block');
	$('.filtros-right').css({'display':'block',right:'-300px'}).animate({"right":"0px"},"fast");
}
function showPosLogin()
{
	$('#login-pos').css({'display':'block'}).animate({"left":"0px"},"fast");
}
function closePosLogin()
{
	$('#login-pos').animate({"left":"-100%"},"fast").hide();
}
function showCallCenter()
{
	$('#login-call-center').css({'display':'block'}).animate({"right":"0px"},"fast");
}
function closeCallCenter()
{
	$('#login-call-center').animate({"right":"-100%"},"fast").hide();
}
function showSort()
{
	$('.sort-right-wrap').css('display','block');
	$('.sort-right').css({'display':'block',right:'-300px'}).animate({"right":"0px"},"fast");
}
function ShowMenuHead(prod_id)
{
	var new_height=($(window).height() - ($('#app-header').outerHeight(true)));

	$('.menu-p').css('display','none');

	$('#menu_'+prod_id).css('height',(new_height+100)+'px');

	if($('#menu_'+prod_id).is(':visible'))
	{

		$('#menu_'+prod_id).css({'display':'block','left':0}).animate({
			"left":'-'+screen.width+'px'
		},500,function() {
			$('#menu_'+prod_id).css('display','none');

			$('#head').css('background-image','url(img/menu.svg)');


			$('#head').fadeTo('fast',0.3,function() { $(this).css('background-image','url(img/menu.svg)'); }).fadeTo('fast',1);

		});
	}
	else
	{
		if($('#menu_head_favorites').is(':visible'))
		{
			$('#menu_head_favorites').css({'display':'block','left':0}).animate({
			"left":'-'+screen.width+'px'
			},500,function() {
				$('#menu_head_favorites').css('display','none');
			});
		}
		$('#menu_'+prod_id).css('display','none');
		$('#menu_'+prod_id).css({'display':'block',left:'-'+screen.width+'px'}).animate({"left":"0px"},"fast");
		$('#head').fadeTo('fast',0.3,function() { $(this).css('background-image','url(img/menuclose.svg)'); }).fadeTo('fast',1);
	}
}


function ShowMenu(prod_id)
{
	var x=getOffset(document.getElementById('points'+prod_id)).left;

	$('.points-wrap').css('display','block');

	$('.menu').css('display','none');
	$('.menu-p').css('display','none');

	var custom=$('#customPalette_'+prod_id);
	if(custom.length == 0 && window.location.hash.includes('#homepage'))
	{
		showListCustomPalette(prod_id);
	}

	if($('#menu_'+prod_id).is(':visible')) {$('#menu_'+prod_id).css('display','none');}
	else
	{
		$('.menu').css('display','none');

		var ax=(screen.width <= 450 ? 2 :3);
		var pos=(screen.width / ax);

		if(x < pos)
		{
			if(window.location.hash == '#homepage') $('#menu_'+prod_id).css({'display':'block','left':'-'+pos+'px','border-left':'none'});
			else if(window.location.hash == '#favorites') $('#menu_'+prod_id).css({'display':'block','left':'-1px','right':'auto'});
			else if(window.location.hash == '#favorites-palette') $('#menu_'+prod_id).css({'display':'block','left':'-1px','right':'auto'});
			else if(window.location.hash == '#compare') $('#menu_'+prod_id).css({'display':'block','left':'-'+(pos-62)+'px','border-left':'none'});
			else $('#menu_'+prod_id).css({'display':'block','left':'-'+pos+'px','border-left':'none'});
		}
		else
		{
			if(window.location.hash == '#homepage') $('#menu_'+prod_id).css({'display':'block','border-right':'none'});
			else if(window.location.hash == '#favorites') $('#menu_'+prod_id).css({'display':'block','border-right':'none'});
			else if(window.location.hash == '#favorites-palette') $('#menu_'+prod_id).css({'display':'block','border-right':'none'});
			else if(window.location.hash == '#compare') $('#menu_'+prod_id).css({'display':'block','border-right':'none'});
			else $('#menu_'+prod_id).css({'display':'block','border-right':'none'});
		}

	}
}
function substr_count(haystack,needle,offset,length)
{
	var cnt=0;

	haystack += '';  needle += '';
	if (isNaN(offset)){  offset=0;}
	if (isNaN(length)){  length=0;}
	if (needle.length == 0){ return false;}
	offset--;

	while ((offset=haystack.indexOf(needle,offset + 1)) != -1)
	{
		if (length > 0 && (offset + needle.length) > length)
		{
			return false;
		}
		cnt++;
	}
	return cnt;
}

function search()
{
	window.location.hash='homepage-search';
}
function pintamenu(tipo)
{
}
function windowopen(url)
{
	tokenLogin=window.localStorage.getItem("token");
	if($('#overlay-login').is(':visible')) $('#overlay-login').hide();
	$('.content_load').css('display','block');
	$('.app-content').css('overflow','hidden');
	$('.app-content').css('position','fixed');
	$('.app-content').css('width','100%');
	var hash_type=(substr_count(url,'technical-sheet2') ? 'technical-sheet2' :(substr_count(url,'technical-sheet3') ? 'technical-sheet3' :(substr_count(url,'technical-sheet') ? 'technical-sheet' :url)));
	var page_id=''; var gototab='';var pesquisa='';

	$('.search').css('opacity',1);
	$('.comp').css('opacity',1);
	$('.star').css('opacity',1);
	$('.user').css('opacity',1);
	$('.search-box').hide();
	$('.no-products').remove();
	$('#m_l').remove();
	$('.header3').show();
	$('.app-content').css({'padding-top':'0'});

	var convert_hash=url.split('_');
	url=convert_hash[0];
	if(typeof convert_hash[1] === 'undefined'){}else{page_id=''+convert_hash[1];}
	if(typeof convert_hash[2] === 'undefined'){}else{gototab='#'+convert_hash[2];}
	if(typeof convert_hash[3] === 'undefined'){}else{pesquisa=convert_hash[3];}

	//if(url != 'loading-login' && url != 'loading-register' ) $("html,body").css({"background-image":"url(img/blank.png)","background-color":"#2d2d2d"});

	if(url)
	{
		var header='';
		var code='';
		var notfound='';
		var Empresa = window.localStorage.getItem("Empresa");
		if(Empresa==1)
		{
			$('.hamburger-menu1').css('display','none');
			$('.hamburger-menu2').css('display','block');
		}

		if(url != '' && url != 'homepage')
		{
			$("#content_home").hide();
			$("#content_iframe").hide();
			$("#content_mapa").hide();
			$("#content").show();
		}

		if(url == 'account-form') /* User ACCOUNT */
		{
			$('.header3').hide();
			$('.user').css('opacity',0.6);
			$( "#profile-panel" ).panel( "close" );

			header=build_header('account',key_ACCOUNT[sLang]);
			try
			{
				cell='<div class="register-box2"><div class="account-form">';
				cell += 'Name:<input type="text" name="nome-account" id="nome-account" placeholder="Name">';
				cell += 'Email:<input type="email" name="login-account" id="login-account" placeholder="Email" readonly="">';
				cell += 'Password:<input type="password" name="password-account" id="password-account" placeholder="Password">';
				cell += '<input type="button" name="bt-account" id="bt-account" value="Change Account" onclick="register_update();"><br><br>';
				cell += '<div class="clear"></div>';
				cell += '</div></div>';

				$("#header").html(header);
				$('#content').html(cell);
				getAccount();
				$('#content').animate({ scrollTop:0 },0);

			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';
				console.log(err.message);
			}
		}
		else if(url == 'account-language') /* User ACCOUNT */
		{

			$('.header3').hide();
			$('.user').css('opacity',0.6);
			header=build_header('account','<span class="lingua-trad-menu">Língua</span>');
			try
			{
				cell='';
				cell+= '<div style="height:20px;background:#fff">&nbsp;</div>';
				cell += '<div class="content" style="padding:20px;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc; padding-top:20px">';
				cell += '<div class="product" style="min-height:45px" onclick="change_lang(\'pt\')">';
				cell += '<div class="desc">';
				cell += '<div class="ref">Português</div>';
				cell += '</div>';
				cell += '<div class="img" style="text-align:right;">'+(sLang == 'pt' ? '<img src="img/visto2.png" border="0" style="width:15px;height:15px;margin-top:15px"> ' :'<img src="img/go.svg" border="0" style="width:30px">')+'</div>';
				cell += '<div class="clear"></div>';
				cell += '</div>';
				cell += '<div class="product" style="min-height:45px" onclick="change_lang(\'es\')">';
				cell += '<div class="desc">';
				cell += '<div class="ref">Espanhol</div>';
				cell += '</div>';
				cell += '<div class="img" style="text-align:right;">'+(sLang == 'es' ? '<img src="img/visto2.png" border="0" style="width:15px;height:15px;margin-top:15px"> ' :'<img src="img/go.svg" border="0" style="width:30px">')+'</div>';
				cell += '<div class="clear"></div>';
				cell += '</div>';
				cell += '</div>';
				$("#header").html(header);
				$('#content').html(cell);
				$('#content').animate({ scrollTop:0 },0);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
		}
		else if(url == 'account-language-pos') /* User ACCOUNT */
		{
			$('.header3').hide();
			$('.user').css('opacity',0.6);
			header=build_header_pos('homepage-pos',key_BACK[sLang]);
			try
			{
				cell='<div style="height:20px;background:#fff">&nbsp;</div>';
				cell += '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc;padding-top:20px;">';
				cell += '<div class="content" style="padding:15px">';
				cell += '<div class="product" style="min-height:45px" onclick="change_lang(\'pt\')">';
				cell += '<div class="desc">';
				cell += '<div class="ref">Português</div>';
				cell += '</div>';
				cell += '<div class="img" style="text-align:right">'+(sLang == 'pt' ? '<img src="img/visto2.png" border="0" style="width:15px;height:15px;margin-top:15px"> ' :'<img src="img/go.svg" border="0" style="width:30px">')+'</div>';
				cell += '<div class="clear"></div>';
				cell += '</div>';
				cell += '<div class="product" style="min-height:45px" onclick="change_lang(\'es\')">';
				cell += '<div class="desc">';
				cell += '<div class="ref">Espanhol</div>';
				cell += '</div>';
				cell += '<div class="img" style="text-align:right">'+(sLang == 'es' ? '<img src="img/visto2.png" border="0" style="width:15px;height:15px;margin-top:15px"> ' :'<img src="img/go.svg" border="0" style="width:30px">')+'</div>';
				cell += '<div class="clear"></div>';
				cell += '</div>';
				cell += '</div>';
				cell += '</div>';
				$("#header").html(header);
				$('#content').html(cell);
				$('#content').animate({ scrollTop:0 },0);
			}
			catch(err)
			{
				hash='homepage-pos';
				window.location.hash='homepage-pos';

			}
		}
		else if(url == 'account-contactos-pos') /* User ACCOUNT */
		{
			$('.header3').hide();
			$('.user').css('opacity',0.6);
			header=build_header_pos('homepage-pos',key_BACK[sLang]);
			try
			{
				body='';
				$("#header").html(header);
				body+=showInfoContactos();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();

				$("#lista-scroll").height(window.innerHeight-350);
			}
			catch(err)
			{
				hash='homepage-pos';
				window.location.hash='homepage-pos';
			}
			clearButtonsMenu();

		}
		else if(url == 'account-language-callcenter') /* User ACCOUNT */
		{
			$('.header3').hide();
			$('.user').css('opacity',0.6);
			header=build_header_callcenter('homepage-callcenter',key_BACK[sLang]);
			try
			{
				cell='<div style="height:20px;background:#fff">&nbsp;</div>';
				cell += '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc; padding-top:20px;">';
				cell += '<div class="content">';
				cell += '<div class="product" style="min-height:45px" onclick="change_lang(\'pt\')">';
				cell += '<div class="desc">';
				cell += '<div class="ref">Português</div>';
				cell += '</div>';
				cell += '<div class="img" style="text-align:right;">'+(sLang == 'pt' ? '<img src="img/visto2.png" border="0" style="width:15px;height:15px;margin-top:15px;"> ' :'<img src="img/go.svg" border="0" style="width:30px">')+'</div>';
				cell += '<div class="clear"></div>';
				cell += '</div>';
				cell += '<div class="product" style="min-height:45px" onclick="change_lang(\'es\')">';
				cell += '<div class="desc">';
				cell += '<div class="ref">Espanhol</div>';
				cell += '</div>';
				cell += '<div class="img" style="text-align:right;">'+(sLang == 'es' ? '<img src="img/visto2.png" border="0" style="width:15px;height:15px;margin-top:15px;"> ' :'<img src="img/go.svg" border="0" style="width:30px">')+'</div>';
				cell += '<div class="clear"></div>';
				cell += '</div>';
				cell += '</div>';
				cell += '</div>';

				$("#header").html(header);
				$('#content').html(cell);
				$('#content').animate({ scrollTop:0 },0);
			}
			catch(err)
			{
				hash='homepage-callcenter';
				window.location.hash='homepage-callcenter';
				console.log(err.message);
			}
		}
		else if(url == 'account') /* User ACCOUNT */
		{
			$( "#profile-panel" ).panel( "close" );
			
			$('.header3').hide();
			$('.user').css('opacity',0.6);
			header=build_header('homepage','Dados da Conta');
			try
			{
				body='';
				$("#header").html(header);
				body+=Account();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
				$("#lista-scroll").height(window.innerHeight-160);

			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();		
		}
		else if(url == 'contacts')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('account',key_BACK[sLang]);	
			try
			{
				$("#header").html(header);
				//TODO
				$("#content").empty();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
			$('#settings').attr('src','img/homepage/settings-red.svg');
		}
		else if(url == 'legal-info')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('account',key_BACK[sLang]);	
			try
			{
				$("#header").html(header);
				$("#content").empty();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
			$('#settings').attr('src','img/homepage/settings-red.svg');
		}
		else if(url == 'about-us')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('account',key_BACK[sLang]);	
			try
			{
				$("#header").html(header);
				$("#content").empty();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
			$('#settings').attr('src','img/homepage/settings-red.svg');
		}
		else if(url == 'logout')
		{
			$( "#profile-panel" ).panel( "close" );

			window.localStorage.setItem("estou_logado","0");
			window.localStorage.setItem("ja_carreguei_home_page","0");

			$('.content_load').css('display','none');
			window.localStorage.removeItem("pos");
			window.localStorage.removeItem("callcenter");
			window.localStorage.removeItem("token");
			window.localStorage.removeItem("active");
			window.localStorage.removeItem("session_id_app");
			window.location.hash='loading-login';
			clearButtonsMenu();

			$("#bt-login").show();
			$("#bt-login2").hide();
		}
		else if(url == 'loading-login' || url == 'loading-register')  /* Login / Loading */
		{
			if(url == 'loading-login')
			{
				tokenLogin=window.localStorage.getItem("token");
				estou_logado=window.localStorage.getItem("estou_logado");
				if(tokenLogin != null && estou_logado==1)
				{
					window.localStorage.setItem("ja_carreguei_home_page","0");
					hash='homepage';
					window.location.hash='homepage';
				}
				else
				{
					//ainda nao estou logado
					if (typeof window.Fingerprint != 'undefined')
					{
						//Se coloquei de proposito a false
						if(window.localStorage.getItem("biometria")=="false"){}
						else
						{
							var decrypted=window.localStorage.getItem("appgoz");
							if(decrypted != null)$('#bt-touchId').show();
						}
					}
				}
			}

			$("head meta[name=viewport]").remove();
			$('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />');
			try
			{
				$('#overlay-login').show();
				$('#content_load').hide();
				$('.app-content').css('overflow-y','auto');
				$('.app-content').css({'padding-top':'0','padding-bottom':'0',});
				if(url == 'loading-register')
				{
					$("#header2_login").html(header2);
					$('.login-box').css('display','none');
					$('.register-box').css('display','block');
				}
				else
				{
					$("#header2_login").html(header);
					$('.register-box').css('display','none');
				}
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'tutorial')
		{
			header='<div class="left"></div><div class="cent">'+key_Tutorial[sLang]+'</div><div class="right" onclick="skip_tutorial()" style="text-align:center;">'+key_Skip[sLang]+'</div>';
			try
			{
				$("#header").html(header);
				$('.header2').css('display','none');
				$('.app-footer').css('display','none');
				//TODO
				body ='<ul id="light-slider">';
					body +='<li>';
						body +='<div class="light-slider-inner">';
						body +='<h3>Primeiro Slide</h3>';
						body +='<p>Lorem ipsum Cupidatat quis pariatur anim.</p>';
						body +='<img src="img/tutorial/imagem1.png">';
						body +='</div>';
					body +='</li>';

					body +='<li>';
						body +='<div class="light-slider-inner">';
						body +='<h3>Segundo Slide</h3>';
						body +='<p>Lorem ipsum Excepteur amet adipisicing fugiat velit nisi.</p>';
						body +='<img src="img/tutorial/imagem2.png">';
						body +='</div>';
					body +='</li>';

					body +='<li>';
						body +='<div class="light-slider-inner">';
						body +='<h3>Terceiro Slide</h3>';
						body +='<p>Lorem ipsum Excepteur amet adipisicing fugiat velit nisi.</p>';
						body +='<img src="img/tutorial/imagem3.png">';
						body +='</div>';
					body +='</li>';

					body +='<li>';
						body +='<div class="light-slider-inner">';
						body +='<h3>Quarto Slide</h3>';
						body +='<p>Lorem ipsum Excepteur amet adipisicing fugiat velit nisi.</p>';
						body +='<img src="img/tutorial/imagem4.png">';
						body +='</div>';
					body +='</li>';

					body +='<li>';
						body +='<div class="light-slider-inner">';
						body +='<h3>Quinto Slide</h3>';
						body +='<p>Lorem ipsum Excepteur amet adipisicing fugiat velit nisi.</p>';
						body +='<img src="img/tutorial/imagem5.png">';
						body +='</div>';
					body +='</li>';
				body +='</ul>';

				body +='<script type="text/javascript">';
				  body+='$(document).ready(function() {';
					body+='$("#light-slider").lightSlider({mode:"fade",item:1,autoWidth:false,slideMove:1,slideMargin:10,adaptiveHeight:true,speed:1000}); ';
				  body+='});';
				body+='</script>';

				$("#content").empty();
				$("#content").html(body);
				$("#content").height(window.innerHeight);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'payment')
		{
			header='<div class="left"></div><div class="cent">'+key_Tutorial[sLang]+'</div><div class="right" onclick="skip_tutorial()" style="text-align:center;">'+key_Skip[sLang]+'</div>';
			try
			{
				body=getAbastecimentos();
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'payment-completed')
		{
			header='<div class="left"></div><div class="cent">'+key_Tutorial[sLang]+'</div><div class="right" onclick="skip_tutorial()" style="text-align:center;">'+key_Skip[sLang]+'</div>';
			try
			{
				body='payment-completed';

				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'payment-error')
		{
			header='<div class="left"></div><div class="cent">'+key_Tutorial[sLang]+'</div><div class="right" onclick="skip_tutorial()" style="text-align:center;">'+key_Skip[sLang]+'</div>';
			try
			{
				body='payment-error';
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'home-gestao')
		{
			header='<div class="left"></div><div class="cent"><img src="img/logo.svg" border="0" class="logo"></div><div class="right"></div>';
			try
			{
				clearSessionStorage();
				infoLogin();
				$("#header").html(header);
				$('.header2').css('display','block');
				$('.app-footer').css('display','block');
				body='';
				body +='<div class="light-slider-homepage"><ul id="light-slider-homepage">';
					body +='<li>';
						body +='<div class="light-slider-homepage-inner">';
						body +='<img src="img/homepage/slider/imagem1_v3.png" style="width:100%;">';
						body +='</div>';
					body +='</li>';

					body +='<li>';
						body +='<div class="light-slider-homepage-inner">';
						body +='<img src="img/homepage/slider/imagem2_v3.png" style="width:100%;">';
						body +='</div>';
					body +='</li>';

					body +='<li>';
						body +='<div class="light-slider-homepage-inner">';
						body +='<img src="img/homepage/slider/imagem3_v3.png" style="width:100%;">';
						body +='</div>';
					body +='</li>';

					body +='<li>';
						body +='<div class="light-slider-homepage-inner">';
						body +='<img src="img/homepage/slider/imagem4_v3.png" style="width:100%;">';
						body +='</div>';
					body +='</li>';
				body +='</ul></div>';

				body +='<script type="text/javascript">';
				  body+='$(document).ready(function() {';
					body+='$("#light-slider-homepage").lightSlider({mode:"fade",adaptiveHeight:true,pager:false,controls:false,item:1,autoWidth:false,slideMove:1,slideMargin:10,speed:500,auto:true,loop:true,pauseOnHover:true,onBeforeSlide:function (el) {$(\'#current\').text(el.getCurrentSlideCount()); } }); ';
				  body+='});';
				body+='</script>';

				body+=showHomepagePageGestor();

				$("#content").empty();
				$("#content").html(body);
				$("#content").height('540px');

			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
			$('#home').attr('src','img/homepage/home-red.svg');
		}
		else if(url == 'statistics')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('home-gestao',key_BACK[sLang]);
			try
			{
				body='';
				$("#header").html(header);
				$('.header2').css('display','block');
				body+='ESTATISTICAS';
				//TODO
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';
			}
			clearButtonsMenu();
		}
		else if(url == 'group')
		{
			header=backButtonByPermission()+'<div class="cent"><img src="img/logo.svg" border="0" class="logo"></div><div class="right"></div>';
			try
			{
				body='';
				$("#header").html(header);
				$('.header2').css('display','block');
				body+='GRUPO';
				//TODO
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'chat')
		{
			header=backButtonByPermission()+'<div class="cent"><img src="img/logo.svg" border="0" class="logo"></div><div class="right"></div>';
			try
			{
				body='';
				$("#header").html(header);
				$('.header2').css('display','block');
				body+='chat';
				//TODO
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'consumes')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('homepage','Consumos');
			try
			{
				body='';
				$("#header").html(header);
				$('.header2').css('display','block');
				body+=showConsumos();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();

				$("#lista-scroll").height(window.innerHeight-450);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
			switch (sLang) {
				case 'pt':
					$('#consumes').parent().addClass('active');
					$('#consumes').attr('src','img/homepage/consumes-white.svg');
					break;
				case 'es':
					$('#consumes').parent().addClass('active');
					$('#consumes').attr('src','img/homepage/consumes-white.svg');
					break;
				default:
					$('#consumes').parent().addClass('active');
					$('#consumes').attr('src','img/homepage/consumes-white.svg');
					break;
			}
		}
		else if(url == 'contact')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('messages',key_BACK[sLang]);
			try
			{
				body='';
				$("#header").html(header);
				body ='<div class="titulo">Enviar Mensagem</div>';
				body += $('#form-new-email').html();
				//TODO
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';
				console.log(err.message);
			}
			clearButtonsMenu();
		}
		else if(url == 'messages')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('apoio-cliente','Mensagens');
			try
			{
				body='';
				$("#header").html(header);
				body+=showMensagens();
				//TODO

				body+='<div style="width:100%;padding:12px;position:fixed;bottom:0;left:0;height:85px">';
				body+='<div style="width:100%;font-size:13px;margin-bottom:5px;margin-left:10px">Enviar mensagem:</div>';
				body+='<div style="width:100%"><div style="width:100%;border:solid 1px #3cc3ce;background-color:#fff;border-radius:15px"><input id="msg_input" type="text" style="width:85%;margin-left:12px;border:0;height:30px;padding:5px;font-size:12px !important"><input type="image" src="img/arrowchat.svg" style="width:35px;right:12px;position:absolute;margin-top:-2px" onclick="send_msg()"></div></div></div>';

				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();

				$("#mensagens-container").height(window.innerHeight-210);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'novamensagem')
		{
			header=build_header('homepage','Mensagens');
			try
			{
				body='';
				$("#header").html(header);
				body+=novaMensagem();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'message')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('homepage','Mensagens');
			var mensagem=window.localStorage.getItem("mensagem");
			try
			{
				body='';
				$("#header").html(header);
				body+=showMensagem(mensagem);
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';
			}
			clearButtonsMenu();
		}
		else if(url == 'condutores')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('homepage','Condutores');
			try
			{
				body='';
				$("#header").html(header);
				body+=Condutores();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
				$("#lista-scroll").height(window.innerHeight-160);

			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'condutores-edita')
		{
			header=build_header('condutores','Condutores');
			var Condutor_ID=window.localStorage.getItem("Condutor_ID");
			try
			{
				body='';
				$("#header").html(header);
				body+=Condutores_edita(Condutor_ID);
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();

				$("#lista-scroll").height(window.innerHeight-110);

			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';
			}
			clearButtonsMenu();
		}
		else if(url == 'condutores-add')
		{
			header=build_header('condutores','Condutores');
			try
			{
				body='';
				$("#header").html(header);
				body+=Condutores_add();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
				$("#lista-scroll").height(window.innerHeight-110);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';
			}
			clearButtonsMenu();
		}
		else if(url == 'condutores-remove')
		{
			header=build_header('condutores','Condutores');
			var Condutor_ID=window.localStorage.getItem("Condutor_ID");
			try
			{
				body='';
				$("#header").html(header);
				body+=Condutores_remove(Condutor_ID);
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
				$("#lista-scroll").height(window.innerHeight-110);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';
			}
			clearButtonsMenu();
		}
		else if(url == 'veiculos-add')
		{
			header=build_header('veiculos','Veículos');
			try
			{
				body='';
				$("#header").html(header);
				body+=Veiculos_add();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
				$("#lista-scroll").height(window.innerHeight-180);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'veiculos-add2')
		{
			header=build_header('veiculos','Veículos');
			try
			{
				body='';
				$("#header").html(header);
				body+=Veiculos_add2();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
				$("#lista-scroll").height(window.innerHeight-110);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'veiculos-edita')
		{
			header=build_header('veiculos','Veículos');
			var Licence_Plate=window.localStorage.getItem("Licence_Plate");
			try
			{
				body='';
				$("#header").html(header);
				body+=Veiculos_edita(Licence_Plate);
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
				$("#lista-scroll").height(window.innerHeight-110);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'veiculos-remove')
		{
			header=build_header('veiculos','Veículos');
			var Licence_Plate=window.localStorage.getItem("Licence_Plate");
			try
			{
				body='';
				$("#header").html(header);
				body+=Veiculos_remove(Licence_Plate);
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
				$("#lista-scroll").height(window.innerHeight-110);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'veiculos')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('homepage','Veículos');
			try
			{
				body='';
				$("#header").html(header);
				body+=Veiculos();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
				$("#lista-scroll").height(window.innerHeight-150);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'financeira')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('homepage','Financeira');
			try
			{
				body='';
				$("#header").html(header);
				body+=Financeira();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
				$("#lista-scroll").height(window.innerHeight-300);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';
			}
			clearButtonsMenu();
		}
		else if(url == 'extrato')
		{
			header=build_header('financeira','Financeira');
			try
			{
				body='';
				$("#header").html(header);
				body+=Extrato();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
				$("#lista-scroll").height(window.innerHeight-300);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'faturas')
		{
			header=build_header('homepage','Financeira');
			try
			{
				body='';
				$("#header").html(header);
				body+=Faturas();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
				$("#lista-scroll").height(window.innerHeight-300);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'faturas-pagar')
		{
			header=build_header('homepage','Financeira');
			try
			{
				body='';
				$("#header").html(header);
				body+=FaturasPagar();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
				$("#lista-scroll").height(window.innerHeight-300);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'fatura')
		{
			header=build_header('financeira','Financeira');
			try
			{
				body='';
				$("#header").html(header);
				body+=Fatura();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
				$("#lista-scroll").height(window.innerHeight-300);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'faturas-pagamentos')
		{
			header=build_header('homepage','Financeira');
			try
			{
				body='';
				$("#header").html(header);
				body+=FaturasPagamentos();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
				$("#lista-scroll").height(window.innerHeight-300);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'configuracoes')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('homepage','Configurações');
			try
			{
				body='';
				$("#header").html(header);
				body+=Configuracoes();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
				$("#lista-scroll").height(window.innerHeight-110);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'pay')
		{
			$( "#profile-panel" ).panel( "close" );

			clearSessionStorage();
			header=build_header('homepage','Pagamentos');
			body='';
			$("#header").html(header);
			$('.header2').css('display','block');
			try
			{
				body+='<div style="height:20px;background:#fff">&nbsp;</div>';
				body+='<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc;padding-top:20px">';
				body+='<div id="content-reload">';
				body+=showPayments("#content-reload");
				body+='</div>';
				body+='</div>';
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'pay-novo')
		{
			clearSessionStorage();
			header=build_header('homepage','Pagamentos');
			try
			{
				body='';
				$("#header").html(header);
				$('.header2').css('display','block');
				reloadPaymentsPageNovo("#content");//Passou a ser asincrono
				//TODO
				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'pay-standalone')
		{
			clearSessionStorage();
			header=build_header('pay-novo','Pagamentos');
			try
			{
				body='';
				$("#header").html(header);
				$('.header2').css('display','block');
				body+=showPaymentStandalone();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'fazer-pagamento')
		{
			header=build_header('homepage','Pagamentos');
			try
			{
				body='';
				$("#header").html(header);
				$('.header2').css('display','block');
				body+=fazerPagamento();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';
				console.log(err.message);
			}
			clearButtonsMenu();
		}
		else if(url == 'navigation')
		{
			header=backButtonByPermission()+'<div class="cent"><img src="img/logo.svg" border="0" class="logo"></div><div class="right"></div>';
			try
			{
				body='';
				$("#header").html(header);
				$('.header2').css('display','block');
				body+=showNavigation();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				initMapAppNavegacao();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
			switch (sLang) {
				case 'pt':
					$('#navigation').parent().addClass('active');
					$('#navigation').attr('src','img/homepage/navigation-white.svg');
					break;
				case 'es':
					$('#navigation').parent().addClass('active');
					$('#navigation').attr('src','img/homepage/navigation-white-es.svg');
					break;
				default:
					$('#navigation').parent().addClass('active');
					$('#navigation').attr('src','img/homepage/navigation-white.svg');
					break;
			}
		}
		else if(url == 'settings')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('home-gestao','Settings');
			try
			{
				body='';
				$("#header").html(header);
				$('.header2').css('display','block');
				body+='SETTINGS';
				//TODO
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'location')
		{
			clearSessionStorage();
			header=build_header('homepage','Lista de Postos');
			$("#header").html(header);
			$('.header2').css('display','block');
			try
			{
				body=getListaPontosAbastecimento();
				//TODO
				$("#content").empty();
				$('#app-footer').hide();
				$("#slider-postos").hide();
				$("#lista-scroll").height(window.innerHeight-210);
				getListaPontosAbastecimento("#content");
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';
			}
			clearButtonsMenu();
			switch (sLang) {
				case 'pt':
					$('#geo').parent().addClass('active');
					$('#geo').attr('src','img/homepage/geo-white.svg');
					break;
				case 'es':
					$('#geo').parent().addClass('active');
					$('#geo').attr('src','img/homepage/geo-white-es.svg');
					break;
				default:
					$('#geo').parent().addClass('active');
					$('#geo').attr('src','img/homepage/geo-white.svg');
					break;
			}
		}
		else if(url == 'specific-location')
		{
			window.localStorage.removeItem("price");
			StationID=window.localStorage.getItem("StationID");

			var header;
			
			header='<div class="header" id="header" style="margin-top:5px">';
			header+='<div style="background-color:#fff;white-space:nowrap;line-height:20px;margin:20px" onclick="cancela_reserva();window.location.hash=\'homepage\'"><img style="transform: rotate(90deg);width:17px;float:left;margin-right:5px;margin-top:6px;color:#3cc3ce" src="img/next.svg" class="next"> Voltar</div>';
			header+='<div class="cent" style="line-height:50px;text-align:left;text-indent:10px;background-color:#fff"><img src="img/logo.svg" class="logo" style="right:20px;position:absolute;top:4px" border="0"></div>';
			header+='</div>';


			//var header='<div class="left_logo"><img src="img/logo.svg" border="0" class="logo"></div>';
			//header+='<div class="right_back" onclick="cancela_reserva();window.location.hash=\'homepage\'">Voltar <img src="img/next.svg" class="next"></div>';

			//header='<div class="left back" style="width:7%;background-position:15px 20px;background-color:#fff;" onclick="cancela_reserva();window.location.hash=\'homepage\'">'+key_BACK[sLang]+'</div></div><div class="cent" style="line-height:50px; text-align:left;text-indent:10px;background-color:#fff;"><img src="img/logo.svg" border="0" class="logo" style="float:right;margin-right:20px"></div>';
			try
			{
				body='';
				$("#header").html(header);
				$('.header2').css('display','block');
				$("#content").empty();
				html='<div style="display:flex;align-items:center;justify-content:center"><img src="img/loading.gif" border="0" class="logo"></div>';
				$("#content").html(html);
				showPontoAbastecimento_async(StationID,"#content");
				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				/*console.error(err.message);*/
			}
			clearButtonsMenu();
			switch (sLang) {
				case 'pt':
					$('#geo').parent().addClass('active');
					$('#geo').attr('src','img/homepage/geo-white.svg');
					break;
				case 'es':
					$('#geo').parent().addClass('active');
					$('#geo').attr('src','img/homepage/geo-white-es.svg');
					break;
				default:
					$('#geo').parent().addClass('active');
					$('#geo').attr('src','img/homepage/geo-white.svg');
					break;
			}
		}
		else if(url == 'carregar-saldo-mbway')
		{
			$( "#profile-panel" ).panel( "close" );

			header='<div class="left_logo"><img src="img/logo.svg" border="0" class="logo"></div>';
			header+='<div class="right_back" onclick="showPontoAbastecimentoById(\''+window.localStorage.getItem("StationID")+'\')">Carregamentos <img src="img/next.svg" class="next"></div>';
			try
			{
				body='';
				$("#header").html(header);
				$('.header2').css('display','block');
				body += showCarregarSaldoMbway();
				//TODO
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';
			}
			clearButtonsMenu();
		}
		else if(url == 'carregar-saldo-mbway-menu')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('homepage','Carregamentos');
			try
			{
				body='';
				$("#header").html(header);
				body += showCarregarSaldoMbwayMenu();
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';
			}
			clearButtonsMenu();
		}
		else if(url == 'reservations')
		{
			header=build_header('profile-panel','reservations');
			try
			{
				body='';
				$("#header").html(header);
				$('.header2').css('display','block');

				body += showReservations();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				/*console.error(err.message);*/
			}
			clearButtonsMenu();
		}
		else if(url == 'pagamentos')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('homepage','Histórico');
			try
			{
				body='';
				$("#header").html(header);
				$('.header2').css('display','block');

				body += showPagamentos();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				/*console.error(err.message);*/
			}
			clearButtonsMenu();
		}
		else if(url == 'reservar')
		{
			StationID=window.localStorage.getItem("StationID");
			reserva=window.localStorage.getItem("reserva");
			total_abastecer=window.localStorage.getItem("total_abastecer");
			kms=window.localStorage.getItem("kms");
			litros=window.localStorage.getItem("litros");

			$( "#profile-panel" ).panel( "close" );
			header=build_header('specific-location','Reservar');
			try
			{
				body='';
				$("#header").html(header);
				$('.header2').css('display','block');

				body += resumoReserva(StationID,reserva,kms,litros,total_abastecer);
				//TODO
				$("#content").empty();
				$("#content").html(body);

				if(window.plugins){
				window.plugins.toast.showWithOptions(
					{
						message:"Reserva efectuada com sucesso.",
						duration:"2000",// which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
						position:"center",
						styling:{ textSize:20 },
						addPixelsY:0  // added a negative value to move it up a bit (default 0)
					}
				);}
			}
			catch(err)
			{
				hash='homepage';
				/*console.error(err.message);*/
			}
			clearButtonsMenu();
		}
		else if(url == 'cancelar-reserva')
		{
			StationID=window.localStorage.getItem("removeStationID");
			reservationNumber=window.localStorage.getItem("removeReservationNumber");
			NameService=window.localStorage.getItem("removeNameService");
			Entry_No=window.localStorage.getItem("removeEntryNo");

			header=build_header('','');
			try
			{
				body='';
				$("#header").html(header);
				$('.header2').css('display','block');

				body += cancelaReserva(StationID,reservationNumber,NameService,Entry_No);
				//TODO
				$("#content").empty();
				$("#content").html(body);

				if(window.plugins){
				window.plugins.toast.showWithOptions({
					message:"Reserva cancelada com sucesso.",
					duration:"2000",// which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0  // added a negative value to move it up a bit (default 0)
				});
				}

				setTimeout(function() {
					hash='resumo-abastecimento';
					window.location.hash='resumo-abastecimento';
				},2000);


			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';
				/*console.error(err.message);*/
			}
			clearButtonsMenu();
		}
		else if(url == 'operacao-cancelada')
		{
			header='<div class="left"><img src="img/logo.svg" border="0" class="logo"></div><div class="cent"></div><div class="right"><a class="profile-toggle" href="#profile-panel"><img class="img-menu" src="img/menu.svg"></a></div>';
			try
			{
				body='';
				$("#header").html(header);
				$('.header2').css('display','block');

				body += operacaoCancelada();
				//TODO
				$("#content").empty();
				$("#content").html(body);


				$('#app-footer').hide();
				$("#slider-postos").hide();

				if(window.plugins){
				window.plugins.toast.showWithOptions({
					message:"Operação Cancelada.",
					duration:"2000",// which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0  // added a negative value to move it up a bit (default 0)
				});
				}
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';
				/*console.error(err.message);*/
			}
			clearButtonsMenu();
		}
		else if(url == 'carregar-saldo')
		{
			header=backButtonByPermission()+'<div class="cent"><img src="img/logo.svg" border="0" class="logo"></div><div class="right"></div>';
			try
			{
				body='';
				$("#header").html(header);
				body+=showCarregarSaldo();
				//TODO
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'pin')
		{
			header=build_header('pay','Pin');
			try
			{
				body='';
				$("#header").html(header);
				body+=showPinScreen();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'resumo-abastecimento') /*quando termina de abastecer */
		{
			header=build_header('homepage','');
			try
			{
				body='';
				$("#header").html(header);
				body+=showResumoAbastecimento();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'ver-saldo')
		{
			header=backButtonByPermission()+'<div class="cent"><img src="img/logo.svg" border="0" class="logo"></div><div class="right"></div>';
			try
			{
				body='';
				$("#header").html(header);
				body+=showVerSaldo();
				//TODO
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'info-matriculas')
		{
			header='<div class="left"><img src="img/logo.svg" border="0" class="logo"></div><div class="cent"></div><div class="right"><a class="profile-toggle" href="#profile-panel"><img class="img-menu" src="img/menu.svg"></a></div>';
			try
			{
				body='';
				$("#header").html(header);
				body+=showInfoMatriculas();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'info-kms')
		{
			header='<div class="left"><img src="img/logo.svg" border="0" class="logo"></div><div class="cent"></div><div class="right"><a class="profile-toggle" href="#profile-panel"><img class="img-menu" src="img/menu.svg"></a></div>';
			try
			{
				body='';
				$("#header").html(header);
				body+=showInfoKms();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'info-limites')
		{
			header='<div class="left"><img src="img/logo.svg" border="0" class="logo"></div><div class="cent"></div><div class="right"><a class="profile-toggle" href="#profile-panel"><img class="img-menu" src="img/menu.svg"></a></div>';
			try
			{
				body='';
				$("#header").html(header);
				body+=showInfoLimites();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'info-reservas')
		{
			$( "#profile-panel" ).panel( "close" );
			header='<div class="left"><img src="img/logo.svg" border="0" class="logo"></div><div class="cent"></div><div class="right"><a class="profile-toggle" href="#profile-panel"><img class="img-menu" src="img/menu.svg"></a></div>';
			try
			{
				body='';
				$("#header").html(header);
				body+=showInfoReservas();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';
			}
			clearButtonsMenu();
		}
		else if(url == 'apoio-cliente')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('homepage','Apoio ao Cliente');
			//header='<div class="left"><img src="img/logo.svg" border="0" class="logo"></div><div class="cent"></div><div class="right"><a class="profile-toggle" href="#profile-panel"><img class="img-menu" src="img/menu.svg"></a></div>';
			try
			{
				body='';
				$("#header").html(header);
				body+=apoio_cliente();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'info-pagamentos')
		{
			$( "#profile-panel" ).panel( "close" );
			header='<div class="left"><img src="img/logo.svg" border="0" class="logo"></div><div class="cent"></div><div class="right"><a class="profile-toggle" href="#profile-panel"><img class="img-menu" src="img/menu.svg"></a></div>';
			try
			{
				body='';
				$("#header").html(header);
				body+=showInfoActualizarPagamentos();
				//TODO
				$("#content").empty();
				$("#content").html(body);
				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'parcerias')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('homepage','<span>Vantagens e Parcerias</span>');
			try
			{
				body='';
				$("#header").html(header);
				body+=parcerias();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'sobre-nos')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('apoio-cliente','<span class="sobre-nos-2-trad-menu">Sobre Nós</span>');
			try
			{
				body='';
				$("#header").html(header);
				body+=showInfoSobreNos();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'termos-legais')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('apoio-cliente','<span class="termos-legais-2-trad-menu">Termos Legais</span>');
			try
			{
				body='';
				$("#header").html(header);
				body+=showInfoTermosLegais();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'termos-legais-callcenter')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header_callcenter('homepage-callcenter','<span class="termos-legais-2-trad-menu">Termos Legais</span>');
			try
			{
				body='';
				$("#header").html(header);
				body+=showInfoTermosLegais();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage-callcenter';
				window.location.hash='homepage-callcenter';

			}
			clearButtonsMenu();
		}
		else if(url == 'termos-legais-pos')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header_pos('homepage-pos','<span class="termos-legais-2-trad-menu">Termos Legais</span>');
			try
			{
				body='';
				$("#header").html(header);
				body+=showInfoTermosLegais();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage-pos';
				window.location.hash='homepage-pos';

			}
			clearButtonsMenu();
		}
		else if(url == 'termos-legais2')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('account','<span class="termos-legais-2-trad-menu">Termos Legais</span>');
			try
			{
				body='';
				$("#header").html(header);
				body+=showInfoTermosLegais();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'mudar-password')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('account','<span class="mudar-password-2-trad-menu">Mudar Password</span>');
			try
			{
				body='';
				$("#header").html(header);
				body+=showMudarPassword();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'dados-pessoais')
		{
			$( "#profile-panel" ).panel( "close" );

			header='<div class="left"><img src="img/logo.svg" border="0" class="logo"></div><div class="cent"></div><div class="right"><a class="profile-toggle" href="#profile-panel"><img class="img-menu" src="img/menu.svg"></a></div>';
			try
			{
				body='';
				$("#header").html(header);
				body+=showInfoDadosPessoais();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'contactos')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('apoio-cliente','<span class="contactos2-trad-menu">Contactos</span>');
			try
			{
				body='';
				$("#header").html(header);
				body+=showInfoContactos();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();

				$("#lista-scroll").height(window.innerHeight-350);
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'contactos-callcenter')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header_callcenter('homepage-callcenter','<span class="contactos2-trad-menu">Contactos</span>');
			try
			{
				body='';
				$("#header").html(header);
				body+=showInfoContactos();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();

				$("#lista-scroll").height(window.innerHeight-350);
			}
			catch(err)
			{
				hash='homepage-callcenter';
				window.location.hash='homepage-callcenter';
			}
			clearButtonsMenu();
		}
		else if(url == 'contactos-pos')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header_pos('homepage-pos','<span class="contactos2-trad-menu">Contactos</span>');
			try
			{
				body='';
				$("#header").html(header);
				body+=showInfoContactos();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();

				$("#lista-scroll").height(window.innerHeight-350);
			}
			catch(err)
			{
				hash='homepage-pos';
				window.location.hash='homepage-pos';
			}
			clearButtonsMenu();
		}
		else if(url == 'contactos2')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('account','<span class="contactos2-trad-menu">Contactos</span>');
			try
			{
				body='';
				$("#header").html(header);
				body+=showInfoContactos();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'definicoes')
		{
			$( "#profile-panel" ).panel( "close" );
			header='<div class="left"><img src="img/logo.svg" border="0" class="logo"></div><div class="cent"></div><div class="right"><a class="profile-toggle" href="#profile-panel"><img class="img-menu" src="img/menu.svg"></a></div>';
			try
			{
				body='';
				$("#header").html(header);
				body+=showDefinicoes();
				//TODO
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
			clearButtonsMenu();
		}
		else if(url == 'homepage-pos')
		{

			//Para testes:
			if(window.localStorage.getItem("telemovel")=='pos2')
			{
				window.localStorage.setItem("active","true");
				window.localStorage.setItem("permissao",1);
				window.localStorage.setItem("postoPOS",'TESTE');
			}

			document.getElementById('content').style.height=(new_height_box4)+'px';
			var postoPOS=window.localStorage.getItem("postoPOS");
			if(postoPOS == 'undefined' || postoPOS == '' || postoPOS == null || window.localStorage.getItem("active") == 'false')
			{
				window.location.hash="definicao-posto";
			}
			else
			{
				$( "#profile-panel" ).panel( "close" );
				//header='<div class="left" style="background-color:#eae7e7"></div><div class="cent" style="background-color:#eae7e7"><img src="img/logo.svg" border="0" class="logo"></div><div class="right" style="background-color:#eae7e7"></div>';
				try
				{
					body='';
					//$("#header").html(header);
					//body+= '<div style="height:20px;background:#fff">&nbsp;</div>';
					//body+= '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc; padding-top:20px;">';
					body+=showHomepagePOS();
					//body+= '</div>';

					//TODO
					$('#app-footer').hide();
					$("#content").empty();
					$("#content").html(body);
				}
				catch(err)
				{
					hash='homepage-pos';
					window.location.hash='homepage-pos';

				}
			}
		}
		else if(url == 'aguardar-pagamento-pos')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header_pos('homepage-pos','POS');
			try
			{
				body='';
				$("#header").html(header);
				body+= '<div style="height:20px;background:#fff">&nbsp;</div>';
				body+= '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc; padding-top:20px;">';
				body+=showAguardarPagamentosPOS();
				body+= '</div>';
				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);
				setTimeout(function()
				{
					window.location.hash='iniciar-pagamento';
				},15000);
			}
			catch(err)
			{
				hash='homepage-pos';
				window.location.hash='homepage-pos';

			}
		}
		else if(url == 'aguardar-pagamento-cliente-pos')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header_pos('homepage-pos','POS');
			try
			{
				body='';
				$("#header").html(header);
				body+= '<div style="height:20px;background:#fff">&nbsp;</div>';
				body+= '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc; padding-top:20px;">';
				body+=showAguardarPagamentosClientePOS();
				body+= '</div>';
				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage-pos';
				window.location.hash='homepage-pos';

			}
		}
		else if(url == 'aguardar-pagamento-callcenter')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('homepage-callcenter','Callcenter');
			try
			{
				body='';
				$("#header").html(header);
				body+=showAguardarPagamentosCallcenter();
				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);
				setTimeout(function()
				{
					window.location.hash='iniciar-pagamento-callcenter';
				},15000);
			}
			catch(err)
			{
				hash='homepage-callcenter';
				window.location.hash='homepage-calcenter';

			}
		}
		else if(url == 'historico-global')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('homepage','Histórico');
			try
			{
				body='';
				$("#header").html(header);
				body+='<div style="height:20px;background:#fff">&nbsp;</div>';
				body+='<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc">';
				body+='<div style="padding:20px"><input placeholder="Pesquisar" type"text" id="pesquisa-historico" autocomplete="off" style="width:100%;border-radius:10px;border:solid 1px #9d9d9d;padding:5px;text-indent:10px;box-shadow:0px 0px 7px 0px #888888"></div>';
				body+='<div id="pesquisa-box" style="width:100%; display:inline-block;overflow:hidden;overflow-y:scroll;height:600px">';
				body+='</div>';
				body+='</div>';
				body+='<script>$(\'#pesquisa-historico\').keyup(function(){ pesquisa_historico($(this).val());});</script>';

				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();

				$("#pesquisa-box").height(window.innerHeight-160);

				//Assincrono
				showHistoricoGlobal("#pesquisa-box");
			}
			catch(err)
			{
				hash='homepage';
				window.location.hash='homepage';

			}
		}
		else if(url == 'historico-pagamentos')/*POS*/
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header_pos('homepage-pos','Histórico');
			try
			{
				body='';
				$("#header").html(header);

				body+='<div id="pesquisa-box" style="width:100%; display:inline-block;overflow:hidden">';
				body+=showHistoricoPagamentosPOS();
				body+='</div>';

				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);

				$("#lista-scroll").height(window.innerHeight-120);
			}
			catch(err)
			{
				hash='homepage-pos';
				window.location.hash='homepage-pos';

			}
		}
		else if(url == 'historico-pagamentos-callcenter')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header_callcenter('homepage-callcenter','Histórico');
			try
			{
				body='';
				$("#header").html(header);

				body+= '<div style="height:20px;background:#fff">&nbsp;</div>';
				body+= '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc; padding-top:20px;">';

				body+='<div style="padding:20px"><input placeholder="Pesquisar" type"text" id="pesquisa-historico-callcenter" autocomplete="off" style="width:100%;border-radius:10px;border:solid 1px #9d9d9d;padding:5px;text-indent:10px;box-shadow:0px 0px 7px 0px #888888"></div>';
				body+='<script>$(\'#pesquisa-historico-callcenter\').keyup(function(){ pesquisa_historico_callcenter($(this).val());});</script>';


				body+= showHistoricoPagamentosCallcenter();


				body+= '</div>';
				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage-callcenter';
				window.location.hash='homepage-callcenter';

			}
		}
		else if(url == 'pagarFrotaPOS')/* quando insiro o pin vindo do POS */
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header_pos('homepage-pos','Pagamentos');
			try
			{
				body='';
				$("#header").html(header);

				body+= '<div style="height:20px;background:#fff">&nbsp;</div>';
				body+= '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc; padding-top:20px;">';
				body+= pagarFrotaPOS();
				body+= '</div>';
				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage-pos';
				window.location.hash='homepage-pos';

			}
		}
		else if(url == 'pagarFrotaCallcenter')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header_callcenter('homepage-callcenter','Pagamentos');
			try
			{
				body='';
				$("#header").html(header);
				body+=iniciarPagamentoCallcenter();
				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);
				/*setTimeout(function()
				{
					window.location.hash='aguardar-pagamento-callcenter';
				},3000);*/
			}
			catch(err)
			{
				hash='homepage-callcenter';
				window.location.hash='homepage-callcenter';

			}
		}
		else if(url == 'homepage-callcenter')/*Callcenter*/
		{
			$( "#profile-panel" ).panel( "close" );
			header='<div class="left" style="background-color:#eae7e7"></div><div class="cent" style="background-color:#eae7e7"><img src="img/logo.svg" border="0" class="logo"></div><div class="right" style="background-color:#eae7e7"></div>';
			try
			{
				body='';
				$("#header").html(header);
				body+=showHomepageCallCenter();
				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);

				$('#app-footer').hide();
				$("#slider-postos").hide();
			}
			catch(err)
			{
				hash='homepage-callcenter';
				window.location.hash='homepage-center';

			}
		}
		else if(url == 'verificar-token-cliente')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header_callcenter('homepage-callcenter','verificar token');
			try
			{
				body='';
				$("#header").html(header);

				body+= '<div style="height:20px;background:#fff">&nbsp;</div>';
				body+= '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc; padding-top:20px;">';
				body+= showVerificarTokenCliente();
				body+= '</div>';

				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage-callcenter';
				window.location.hash='homepage-callcenter';

			}
		}
		else if(url == 'valida-token')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header_pos('homepage-pos','valida token');
			try
			{
				body='';
				$("#header").html(header);
				body+=showVerificaToken();
				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage-pos';
				window.location.hash='homepage-pos';

			}
		}
		else if(url == 'definicao-posto')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header_pos('homepage-pos','definicao posto');
			try
			{
				body='';
				$("#header").html(header);
				body+= '<div style="height:20px;background:#fff">&nbsp;</div>';
				body+= '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc;padding-top:20px">';
				body+=showDefinicaoPosto();
				body+= '</div>';
				//TODO

				$('#slider-postos').hide();
				$('#app-footer').hide();

				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage-pos';
				window.location.hash='homepage-pos';

			}
		}
		else if(url == 'iniciar-pagamento')/*POS*/
		{
			window.localStorage.removeItem("indicativo");
			window.localStorage.removeItem("telemovel_pos");
			window.localStorage.removeItem("produtos_pos");
			window.localStorage.removeItem("matricula_pos");
			window.localStorage.removeItem("litros_pos");
			window.localStorage.removeItem("matriculo_pos");
			window.localStorage.setItem("kms_pos",0);
			window.localStorage.setItem("abasteceu_pos",0);
			document.getElementById('content').style.height=new_height_box4+'px';

			$( "#profile-panel" ).panel( "close" );
			header=build_header_pos('homepage-pos','iniciar pagamento');
			try
			{
				body='';
				$("#header").html(header);
				body+= '<div style="height:20px;background:#fff">&nbsp;</div>';
				body+= '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc;padding-top:20px">';
				body+= showIniciarPagamento();
				body+= '</div>';

				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage-pos';
				window.location.hash='homepage-pos';

			}
		}
		else if(url == 'tipo-pagamento-pos')/*POS*/
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header_pos('homepage-pos','tipo pagamento');
			try
			{
				body='';
				$("#header").html(header);
				// $('.header2').css('display','block');
				// body+=showTipoPagamentoPOS();
				body+='ola';
				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage-pos';
				window.location.hash='homepage-pos';

			}
		}
		else if(url == 'pin-pos')/*POS*/
		{
			header=build_header('homepage-pos','Token');
			try
			{
				body='';
				$("#header").html(header);

				body+= '<div style="height:20px;background:#fff">&nbsp;</div>';
				body+= '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc; padding-top:20px;">';
				body+=showPinScreenPOS();
				body+= '</div>';
				//TODO
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage-pos';
				window.location.hash='homepage-pos';

			}
			clearButtonsMenu();
		}
		else if(url == 'iniciar-pagamento-callcenter')/*Callcenter*/
		{
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
			window.localStorage.removeItem("cliente");
			window.localStorage.removeItem("indicativo");
			window.localStorage.removeItem("limite_negativo");
			window.localStorage.removeItem("limite_negativo_val");
			window.localStorage.removeItem("limite_permitido");
			window.localStorage.setItem("kms_pos",0);
			window.localStorage.setItem("abasteceu_pos",0);
			document.getElementById('content').style.height=new_height_box4+'px';
			$( "#profile-panel" ).panel( "close" );

			header=build_header_callcenter('homepage-callcenter','Iniciar Pagamento');

			/*
			header='<div class="left back" style="width:7%; background-position:15px 20px;background-color:#fff" onclick="window.location.hash=\'homepage-callcenter\'">'+key_BACK[sLang]+'</div></div><div class="left_logo">';
			header+='<img src="img/logo.svg" border="0" class="logo" style="background-color:#fff;float:right;margin-right:20px">';
			header+='</div>';*/

			try
			{
				body='';
				$("#header").html(header);
				body+= showIniciarPagamentoCallcenter();
				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);
				var backup_balance=window.localStorage.getItem("backup_balance");
				if(backup_balance != '' && backup_balance !=null && backup_balance !='null' ) $('#balance').html(' '+backup_balance+'€');
				else $('#balance').html(' 0€');

				var backup_Customer_Type=window.localStorage.getItem("backup_Customer_Type");
				if(backup_Customer_Type != '' && backup_Customer_Type !=null && backup_Customer_Type !='null' ) $('#Customer_Type').html(backup_Customer_Type);
				else $('#Customer_Type').html('0');

				//posto
				var backup_IMEI=window.localStorage.getItem("backup_IMEI");
				if(backup_IMEI != '' && backup_IMEI != null)
				{
					//posto lang
					window.localStorage.setItem("postoCountry",window.localStorage.getItem("backup_postoCountry"));
					//posto txt
					window.localStorage.setItem("postoPOS_txt",window.localStorage.getItem("backup_postoPOS_txt"));
					//IMEI
					window.localStorage.setItem("IMEI",window.localStorage.getItem("backup_IMEI"));
					//posto
					$('#postos option[value="'+backup_IMEI+'"]').attr('selected','selected');
				}
				//telemovel
				var backup_telemovel_pos=window.localStorage.getItem("backup_telemovel_pos");
				var novo_telemovel=window.localStorage.getItem("novo_telemovel");
				if(novo_telemovel != '' && novo_telemovel !=null)
				{
					window.localStorage.removeItem("novo_telemovel");
					$('#telemovel').val(novo_telemovel);
					window.localStorage.setItem("telemovel_pos",novo_telemovel);
				}
				else if(backup_telemovel_pos != '' && backup_telemovel_pos !=null)
				{
					$('#telemovel').val(backup_telemovel_pos);
					window.localStorage.setItem("telemovel_pos",backup_telemovel_pos);
				}
				//produto
				var backup_indicativo=window.localStorage.getItem("backup_indicativo");
				if(backup_indicativo != '' && backup_indicativo != null)
				{
					$('#indicativo option[value="'+backup_indicativo+'"]').attr('selected','selected');
					window.localStorage.setItem("indicativo",backup_indicativo);
				}
				//produto
				var backup_produtos_pos=window.localStorage.getItem("backup_produtos_pos");
				if(backup_produtos_pos != '' && backup_produtos_pos != null)
				{
					$('#produtos option[value="'+backup_produtos_pos+'"]').attr('selected','selected');
					window.localStorage.setItem("produtos_pos",backup_produtos_pos);
				}
				//litros
				var backup_litros_pos=window.localStorage.getItem("limite_diario");
				var backup_litros_pos2=window.localStorage.getItem("backup_litros_pos");
				if(backup_litros_pos != '' && backup_litros_pos !=null && backup_IMEI != '' && backup_IMEI != null && backup_produtos_pos != '' && backup_produtos_pos != null)
				{
					$('#litros').val(backup_litros_pos);
					window.localStorage.setItem("litros_pos",backup_litros_pos);
				}
				else if(backup_litros_pos2 != '' && backup_litros_pos2 !=null)
				{
					$('#litros').val(backup_litros_pos2);
					window.localStorage.setItem("litros_pos",backup_litros_pos2);
				}
				//matricula
				var backup_matricula_pos=window.localStorage.getItem("backup_matricula_pos");
				if(backup_matricula_pos != '' && backup_matricula_pos !=null && backup_matricula_pos !='null')
				{
					$('#matricula').val(backup_matricula_pos);
					window.localStorage.setItem("matricula_pos",backup_matricula_pos);
				}
				//abasteceu
				var backup_abasteceu_pos=window.localStorage.getItem("backup_abasteceu_pos");
				if(backup_abasteceu_pos != '' && backup_abasteceu_pos !=null)
				{
					$('#abasteceu').val(backup_abasteceu_pos);
					window.localStorage.setItem("abasteceu_pos",backup_abasteceu_pos);
				}
				//kms
				var backup_kms_pos=window.localStorage.getItem("backup_kms_pos");
				if(backup_kms_pos != '' && backup_kms_pos !=null)
				{
					$('#kms').val(backup_kms_pos);
					window.localStorage.setItem("kms_pos",backup_kms_pos);
				}
				//motorista
				var backup_cliente=window.localStorage.getItem("backup_cliente");
				if(backup_cliente != '' && backup_cliente !=null && backup_cliente !='null')
				{
					$('#cliente').val(backup_cliente);
					window.localStorage.setItem("cliente",backup_cliente);
				}
				window.localStorage.removeItem("backup_balance");
				window.localStorage.removeItem("backup_IMEI");
				window.localStorage.removeItem("backup_postoCountry");
				window.localStorage.removeItem("backup_postoPOS_txt");
				window.localStorage.removeItem("backup_telemovel_pos");
				window.localStorage.removeItem("backup_produtos_pos");
				window.localStorage.removeItem("backup_matricula_pos");
				window.localStorage.removeItem("backup_abasteceu_pos");
				window.localStorage.removeItem("backup_litros_pos");
				window.localStorage.removeItem("backup_kms_pos");
				window.localStorage.removeItem("backup_cliente");
				window.localStorage.removeItem("backup_indicativo");
				window.localStorage.removeItem("limite_diario");
				window.localStorage.removeItem("limite_semanal");
				window.localStorage.removeItem("limite_mensal");
				window.localStorage.removeItem("backup_Customer_Type");

			}
			catch(err)
			{
				hash='homepage-callcenter';
				window.location.hash='homepage-callcenter';

			}
		}
		else if(url == 'alterar-litros')
		{
			$( "#profile-panel" ).panel( "close" );
			

			header='<div class="right_back" onclick="window.localStorage.removeItem(\'limite_diario\');window.localStorage.removeItem(\'limite_semanal\');window.localStorage.removeItem(\'limite_mensal\');window.location.hash=\'iniciar-pagamento-callcenter\'">'+key_BACK[sLang]+'</div></div><div class="left_logo"><img src="img/logo.svg" border="0" class="logo"></div>';
			try
			{
				body='';
				$("#header").html(header);
				body+= '<div style="height:20px;background:#fff">&nbsp;</div>';
				body+= '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc; padding-top:20px;">';
				body+= showAlterarLitros();
				body+= '</div>';
				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage-callcenter';
				window.location.hash='homepage-callcenter';

			}
		}
		else if(url == 'gestao-cartao')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header_callcenter('iniciar-pagamento-callcenter','Iniciar Pagamento');
			try
			{
				body='';
				$("#header").html(header);
				body+= '<div style="height:20px;background:#fff">&nbsp;</div>';
				body+= '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc; padding-top:20px;">';
				body+=showGestaoCartao();
				body+= '</div>';
				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage-callcenter';
				window.location.hash='homepage-callcenter';

			}
		}
		else if(url == 'alterar-cartao')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('gestao-cartao','alterar-cartao');
			try
			{
				body='';
				$("#header").html(header);
				body+= '<div style="height:20px;background:#fff">&nbsp;</div>';
				body+= '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc;padding-top:20px">';
				body+= showAlterarCartao();
				body+= '</div>';
				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage-callcenter';
				window.location.hash='homepage-callcenter';

			}
		}
		else if(url == 'criar-cartao')
		{
			window.localStorage.removeItem("nome");
			window.localStorage.removeItem("nome_cartao");
			window.localStorage.removeItem("indicativo2");
			window.localStorage.removeItem("pin");
			window.localStorage.removeItem("pin_cartao");
			window.localStorage.removeItem("matricula");
			window.localStorage.removeItem("novo_telemovel");

			$( "#profile-panel" ).panel( "close" );
			header=build_header('gestao-cartao','criar-cartao');
			try
			{
				body='';
				$("#header").html(header);
				body+= '<div style="height:20px;background:#fff">&nbsp;</div>';
				body+= '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc;padding-top:20px">';
				body+=showCriarCartao();
				body+= '</div>';
				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);

				//indicativo
				var backup_cartao_indicativo=window.localStorage.getItem("backup_cartao_indicativo");
				if(backup_cartao_indicativo != '' && backup_cartao_indicativo != null)
				{
					$('#indicativo option[value="'+backup_cartao_indicativo+'"]').attr('selected','selected');
					window.localStorage.setItem("indicativo2",backup_cartao_indicativo);
				}
				//novo_telemovel
				var backup_cartao_novo_telemovel=window.localStorage.getItem("backup_cartao_novo_telemovel");
				if( backup_cartao_novo_telemovel != '' && backup_cartao_novo_telemovel != null && backup_cartao_novo_telemovel != 'null' )
				{
					$('#telemovel').val(backup_cartao_novo_telemovel);
					window.localStorage.setItem("novo_telemovel",backup_cartao_novo_telemovel);
				}
				//nome
				var backup_cartao_nome=window.localStorage.getItem("backup_cartao_nome");
				if( backup_cartao_nome != '' && backup_cartao_nome != null && backup_cartao_nome != 'null' )
				{
					$('#nome').val(backup_cartao_nome);
					window.localStorage.setItem("nome_cartao",backup_cartao_nome);
				}
				//pin
				var backup_cartao_pin=window.localStorage.getItem("backup_cartao_pin");
				if( backup_cartao_pin != '' && backup_cartao_pin != null && backup_cartao_pin != 'null' )
				{
					$('#pin').val(backup_cartao_pin);
					window.localStorage.setItem("pin_cartao",backup_cartao_pin);
				}
				//matricula
				var backup_cartao_matricula=window.localStorage.getItem("backup_cartao_matricula");
				var matricula=window.localStorage.getItem("matricula");

				if(matricula != '' && matricula != null && matricula != 'null')
				{
					$('#matricula option[value="'+matricula+'"]').attr('selected','selected');
					window.localStorage.setItem("matricula",matricula);
				}
				else if(backup_cartao_matricula != '' && backup_cartao_matricula != null && backup_cartao_matricula != 'null')
				{
					$('#matricula option[value="'+backup_cartao_matricula+'"]').attr('selected','selected');
					window.localStorage.setItem("matricula",backup_cartao_matricula);
				}
				//limite diario
				var backup_cartao_limite_diario=window.localStorage.getItem("backup_cartao_limite_diario");
				if( backup_cartao_limite_diario != '' && backup_cartao_limite_diario != null )
				{
					$('#limite_diario').val(backup_cartao_limite_diario);
					window.localStorage.setItem("limite_diario",backup_cartao_limite_diario);
				}
				//limite semanal
				var backup_cartao_limite_semanal=window.localStorage.getItem("backup_cartao_limite_semanal");
				if( backup_cartao_limite_semanal != '' && backup_cartao_limite_semanal != null )
				{
					$('#limite_semanal').val(backup_cartao_limite_semanal);
					window.localStorage.setItem("limite_semanal",backup_cartao_limite_semanal);
				}
				//limite mensal
				var backup_cartao_limite_mensal=window.localStorage.getItem("backup_cartao_limite_mensal");
				if( backup_cartao_limite_mensal != '' && backup_cartao_limite_mensal != null )
				{
					$('#limite_mensal').val(backup_cartao_limite_mensal);
					window.localStorage.setItem("limite_mensal",backup_cartao_limite_mensal);
				}
				window.localStorage.removeItem("backup_cartao_indicativo");
				window.localStorage.removeItem("backup_cartao_telemovel_pos");
				window.localStorage.removeItem("backup_cartao_nome");
				window.localStorage.removeItem("backup_cartao_pin");
				window.localStorage.removeItem("backup_cartao_matricula");
				window.localStorage.removeItem("backup_cartao_limite_diario");
				window.localStorage.removeItem("backup_cartao_limite_semanal");
				window.localStorage.removeItem("backup_cartao_limite_mensal");
				window.localStorage.removeItem("backup_cartao_novo_telemovel");
			}
			catch(err)
			{
				hash='homepage-callcenter';
				window.location.hash='homepage-callcenter';

			}
		}
		else if(url == 'gestao-matricula')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header_callcenter('iniciar-pagamento-callcenter','gestao-matricula');
			try
			{
				body='';
				$("#header").html(header);
				body+= '<div style="height:20px;background:#fff">&nbsp;</div>';
				body+= '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc; padding-top:20px;">';
				body+=showGestaoMatricula();
				body+= '</div>';
				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage-callcenter';
				window.location.hash='homepage-callcenter';

			}
		}
		else if(url == 'alterar-matricula')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('gestao-matricula','alterar-matricula');
			try
			{
				body='';
				$("#header").html(header);
				body+= '<div style="height:20px;background:#fff">&nbsp;</div>';
				body+= '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc;padding-top:20px">';
				body+=showAlterarMatricula();
				body+= '</div>';
				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage-callcenter';
				window.location.hash='homepage-callcenter';

			}
		}
		else if(url == 'criar-matricula')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('gestao-matricula','criar matricula');
			try
			{
				body='';
				$("#header").html(header);
				body+= '<div style="height:20px;background:#fff">&nbsp;</div>';
				body+= '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc;padding-top:20px">';
				body+=showCriarMatricula();
				body+= '</div>';
				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage-callcenter';
				window.location.hash='homepage-callcenter';

			}
		}
		else if(url == 'criar-matricula-cartao')
		{
			$( "#profile-panel" ).panel( "close" );
			header=build_header('criar-cartao','criar matricula cartão');
			try
			{
				body='';
				$("#header").html(header);
				body+= '<div style="height:20px;background:#fff">&nbsp;</div>';
				body+= '<div class="container" style="height:100%;margin-top:-10px;background:#fff;box-shadow:1px 0px 1px 0px #ccc; padding-top:20px;">';
				body+=showCriarMatriculaCartao();
				body+= '</div>';
				//TODO
				$('#app-footer').hide();
				$("#content").empty();
				$("#content").html(body);
			}
			catch(err)
			{
				hash='homepage-callcenter';
				window.location.hash='homepage-callcenter';

			}
		}
		else /* HOMEPAGE */
		{
			var estou_logado=window.localStorage.getItem("estou_logado");
			var ja_carreguei_home_page=window.localStorage.getItem("ja_carreguei_home_page");

			var b=0;
			if(estou_logado == 1 && ja_carreguei_home_page==1)
			{
				var pagar_loja=window.localStorage.getItem("pagar_loja");
				if(url != 'loading-login')
				{
					$("head meta[name=viewport]").remove();
					$('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />');
				}
				header='<div class="left"><img src="img/logo.svg" border="0" class="logo"></div><div class="cent"></div><div class="right"><a class="profile-toggle" href="#profile-panel"><img class="img-menu" src="img/menu.svg"></a></div>';
				$("#header").html(header);
				$('.header2').css('display','block');
				$('.app-footer').css('display','block');
				$('#slider-postos').css('display','block');

				$("#content").hide();
				$("#content_iframe").hide();
				$("#content_mapa").hide();
				$("#content_home").show();
			}
			else
			{
				var pagar_loja=window.localStorage.getItem("pagar_loja");
				if(url != 'loading-login')
				{
					$("head meta[name=viewport]").remove();
					$('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />');
				}
				header='<div class="left"><img src="img/logo.svg" border="0" class="logo"></div><div class="cent"></div><div class="right"><a class="profile-toggle" href="#profile-panel"><img class="img-menu" src="img/menu.svg"></a></div>';
				try
				{
					clearSessionStorage();
					infoLogin();

					window.localStorage.setItem("estou_logado","1");
					window.localStorage.setItem("APPVersion","2.2.0");



					//Como fiz login entao temos acesso ao servidor por isso vamos limpar a cache das apginas estaticas:
					window.localStorage.setItem("Cache_info","");
					window.localStorage.setItem("Cache_definicoes","");
					window.localStorage.setItem("Cache_dadospessoais","");
					window.localStorage.setItem("Cache_termoslegais","");

					$("#header").html(header);
					$('.header2').css('display','block');
					$('.app-footer').css('display','block');
					$('#slider-postos').css('display','block');
					body='';
					body=showHomepagePage();

					$("#content_home").empty();
					$("#content_home").html(body);

					$("#content_home").height(window.innerHeight-100);
					$("#content").height(window.innerHeight-100);
					$("#content_iframe").height(window.innerHeight-100);
					$("#content_mapa").height(window.innerHeight-100);

					$("#content").empty();
					$("#content_home").show();

					$("#content").hide();
					$("#content_iframe").hide();
					$("#content_mapa").hide();

					vpw=$(window).width();
					$("#slider-postos").empty();
					showSliderPostos("#slider-postos",vpw);

					$('#app-footer').show();

					carregar_menus();

					setTimeout(function(){
						getLocation();//Como posso nao ter carregado esta funcao antes, vou invocar novamente
						initMapAppHomepage(window.localStorage.getItem("raio_pesquisa"));
					}, 2000);

					setTimeout(function(){actualizaSliderPostos();}, 10000);
					function actualizaSliderPostos()
					{
						var hash=location.hash.replace('#','');
						var convert_hash=hash.split('_');
						url=convert_hash[0];

						if(url=="homepage")
						{
							showSliderPostos("#slider-postos",vpw);
						}
						setTimeout(function(){actualizaSliderPostos();}, 60000);
					}

					window.localStorage.setItem("ja_carreguei_home_page","1");
					getLocation();//Inicia observação por GPS
				}
				catch(err)
				{
					hash='homepage';
					window.location.hash='homepage';
				}
				clearButtonsMenu();
				$('#home').attr('src','img/homepage/home-red.svg');
			}

		}
	}


	$('.filtros-right-wrap').on('touchend click',function(e)
	{
		if($(e.target).attr('class') == 'filtros-right-wrap' && clicked == 0)
		{
			clicked=1;
			$(".filtros-right").css({'display':'block','right':0}).animate({right:"-300px"},500,function()
			{
				$('.filtros-right').css('display','none');
				$('.filtros-right-wrap').css('display','none');
				clicked=0;
			});
		}
		e.stopPropagation();
		e.preventDefault();
	});

	$('.sort-right-wrap').on('touchend click',function(e)
	{
		if($(e.target).attr('class') == 'sort-right-wrap' && clicked == 0)
		{
			clicked=1;

			$(".sort-right").css({'display':'block','right':0}).animate({right:"-300px"},500,function()
			{
				$('.sort-right').css('display','none');
				$('.sort-right-wrap').css('display','none');
				clicked=0;
			});
		}
		e.stopPropagation();
		e.preventDefault();
	});

	$('.points-wrap').on('touchend click',function(e)
	{
		if($(e.target).attr('class') == 'points-wrap')
		{
			$('.menu-p').css('display','none');
			$('.menu-p').animate({"right":"-1px"},"fast");
			$('.menu-p2').css('display','none');
			$('.points-wrap').css('display','none');
		}
		e.stopPropagation();
		e.preventDefault();
	});
	traduz();
	return false;
}

function clearButtonsMenu()
{
	var sLang = window.localStorage.getItem("sLang");
	$('#close-mapa').click();
	$('#close-mapa2').click();
	$('.menu-button').removeClass('active');
	$('.menu-right-button').removeClass('active');
	switch (sLang) {
		case 'pt':
			$('#geo').attr('src','img/homepage/geo-black.svg');
			$('#navigation').attr('src','img/homepage/navigation-black.svg');
			$('#consumes').attr('src','img/homepage/consume-black.svg');
			$('#menu').attr('src','img/homepage/menu-black.svg');
			break;
		case 'es':
			$('#geo').attr('src','img/homepage/geo-black-es.svg');
			$('#navigation').attr('src','img/homepage/navigation-black-es.svg');
			$('#consumes').attr('src','img/homepage/consume-black.svg');
			$('#menu').attr('src','img/homepage/menu-black-es.svg');
			break;
		default:
			$('#geo').attr('src','img/homepage/geo-black.svg');
			$('#navigation').attr('src','img/homepage/navigation-black.svg');
			$('#consumes').attr('src','img/homepage/consume-black.svg');
			$('#menu').attr('src','img/homepage/menu-black.svg');
			break;
	}
}

function goBomba()
{
	if($('#end').val() == 0)
	{
		alert('Seleccione uma Bomba para prosseguir.');
		return false;
	}
	window.location.hash='bomba';
	return true;
}

function clearSessionStorage()
{
	window.localStorage.removeItem("reserva");
	window.localStorage.removeItem("kms");
	window.localStorage.removeItem("litros");
	window.localStorage.removeItem("total_abastecer");
	window.localStorage.removeItem("StationID");
	window.localStorage.removeItem("ReservationNumber");
	window.localStorage.removeItem("price");
	window.localStorage.removeItem("pagamento_id");
	window.localStorage.removeItem("reserva_id");
	/*window.localStorage.removeItem("metodo_pagamento");*/
	window.localStorage.removeItem("key");
	window.localStorage.removeItem("entry_no");
	window.localStorage.removeItem("supplt_limit");
	window.localStorage.removeItem("removeStationID");
	window.localStorage.removeItem("removeReservationNumber");
	window.localStorage.removeItem("removeNameService");
	window.localStorage.removeItem("destLat");
	window.localStorage.removeItem("destLng");
	window.localStorage.removeItem("valor_mbway_carregar");
}

function getMeusPagamentosMbway()
{
	if(window.localStorage.getItem("estou_logado") != "1" || window.localStorage.getItem("app_offline") == "1")return false;

	var telemovel=window.localStorage.getItem('telemovel');
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/mbway.php',
		data:{'type':'getMeusPagamentosMbway','dp':(new Date()).getTime(),'telemovel':telemovel,'token':window.localStorage.getItem("token")},
		dataType:'json',
		success:function(data)
		{
			if(data != '')
			{
				var ID=data.ID;
				var AMOUNT=data.AMOUNT;
				var STATION=data.STATION;

				var titulo='Confirmação de Carregamento MBWAY';
				var texto='ID:'+ID+'\nQuantidade:'+AMOUNT+'\n';

				cordova.plugins.notification.local.setDefaults({
					led:{ color:'#FF00FF',on:500,off:500 },
					vibrate:true
				});

				//https://github.com/katzer/cordova-plugin-local-notifications#properties-1

				cordova.plugins.notification.local.on("click",function (notification) {
					window.plugins.bringtofront();
				});

				cordova.plugins.notification.local.schedule({
					id:1,
					title:titulo,
					text:texto,
					icon:globalUrl+'icon-notification.png',
					foreground:true,
					ongoing: true,
					skipPermission:true
				});


				window.plugins.toast.showWithOptions({
					message:titulo+' '+texto,
					duration:"2000",// which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0  // added a negative value to move it up a bit (default 0)
				});


				//Se estiver na pagina de carregar saldo deve fazer refresh:
				if(window.location.hash=="carregar-saldo-mbway-menu")
				{
					window.location.hash='';
					window.location.hash='carregar-saldo-mbway-menu';
				}
				//carregar-saldo-mbway-menu

				// cordova.plugins.notification.local.on("click",function (notification) {
				// 	showPontoAbastecimentoById(STATION);
				// });
			}
		},
		error:function()
		{

		}
	});
}


function getMyNotifications()
{
	if(window.localStorage.getItem("estou_logado") != "1" || window.localStorage.getItem("app_offline") == "1")return false;
	var telemovel=window.localStorage.getItem('telemovel');
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:true,
		data:{'type':'getMyNotifications','dp':(new Date()).getTime(),'telemovel':telemovel,'token':window.localStorage.getItem("token")},
		dataType:'json',
		success:function(data)
		{
			if(data != '')
			{
				var pagamentoID=data.pagamentoID;
				var StationID=data.StationID;
				var Produto=data.Produto;
				var Matricula=data.Matricula;
				var LitrosAbastecidos=data.LitrosAbastecidos;
				var Kms=data.Kms;

				var titulo='Confirmação de Pagamento';
				var texto='Posto:'+StationID+'\nProduto:'+Produto+'\nMatrícula:'+Matricula+'\nLitros Abastecidos:'+LitrosAbastecidos+'\nKms:'+Kms+'\n';

				cordova.plugins.notification.local.setDefaults({
					led:{ color:'#FF00FF',on:500,off:500 },
					vibrate:false
				});

				cordova.plugins.notification.local.schedule({
					id:1,
					title:titulo,
					text:texto,
					led: 'FF00FF',
        			smallIcon:globalUrl+'icon-notification.png',
					icon:globalUrl+'icon-notification.png',
					foreground:true,
					skipPermission:true
				});

				cordova.plugins.notification.local.on("click",function (notification) {
					window.location.hash='';
					window.location.hash='pay';
				});

				window.plugins.toast.showWithOptions({
					message:titulo+' '+texto,
					duration:"2000",// which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0  // added a negative value to move it up a bit (default 0)
				});

				window.location.hash='';
				window.location.hash='pay';


			}
		},
		error:function()
		{

		}
	});
}
function getMyNotificationsPagamentos()
{
	if(window.localStorage.getItem("estou_logado") != "1" || window.localStorage.getItem("app_offline") == "1")return false;
	var telemovel=window.localStorage.getItem('telemovel');
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:true,
		data:{'type':'getMyNotificationsPagamentos','dp':(new Date()).getTime(),'telemovel':telemovel,'token':window.localStorage.getItem("token")},
		dataType:'json',
		success:function(data)
		{
			if(data != '')
			{

				var titulo='Confirmação de Pagamento';
				var texto=data+'\n';

				cordova.plugins.notification.local.setDefaults({
					led:{ color:'#FF00FF',on:500,off:500 },
					vibrate:false
				});

				cordova.plugins.notification.local.schedule({
					id:1,
					title:titulo,
					text:texto,
					icon:globalUrl+'icon-notification.png',
					foreground:true,
					skipPermission:true
				});

				cordova.plugins.notification.local.on("click",function (notification) {
					window.location.hash='';
					window.location.hash='pay';
				});


				window.plugins.toast.showWithOptions({
					message:titulo+' '+texto,
					duration:"2000",// which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
					position:"center",
					styling:{ textSize:20 },
					addPixelsY:0  // added a negative value to move it up a bit (default 0)
				});

				window.location.hash='';
				window.location.hash='pay';


			}
		},
		error:function()
		{

		}
	});
}
function servicoPOS_escuta()
{
	if(window.localStorage.getItem("estou_logado") != "1" || window.localStorage.getItem("app_offline") == "1" )return false;

	if(window.localStorage.getItem("pos") == 1)
	{
		$.ajax({
			type:'POST',
			url:globalUrl+'admin_tfc/pagamentos.php',
			async:false,
			data:{'type':'verificaPaymentsPOS','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token"),'IMEI':window.localStorage.getItem("IMEI")},
			dataType:'html',
			success:function(data)
			{
				if(data == 1) window.location.hash="aguardar-pagamento-pos";
			},
			error:function()
			{

			}
		});
	}
}

function getMinhasNotificacoesAbastecimentos()
{
	//if(window.localStorage.getItem("estou_logado") != "1" || window.localStorage.getItem("app_offline") == "1" || window.localStorage.getItem("notificacoes_abastecimentos") != "1" )return false;
	if(window.localStorage.getItem("estou_logado") != "1" || window.localStorage.getItem("app_offline") == "1" )return false;
	window.localStorage.setItem("notificacoes_abastecimentos","0");

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/actions.php',
		async:true,
		data:{'type':'getMinhasNotificacoesAbastecimentos','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token")},
		dataType:'json',
		success:function(data)
		{
			if(data != '')
			{
				var NameService=data.NameService;
				var DeviceNumber=data.DeviceNumber;
				var ProductNumber=data.ProductNumber;
				var MetodoPagamento=data.MetodoPagamento;
				var ReservationNumber=data.ReservationNumber;
				var Reserva_ID=data.Reserva_ID;
				window.localStorage.setItem("reserva_abastecida_id",Reserva_ID);
				var titulo='Abastecimento Concluído';
				var texto='Reserva:'+ReservationNumber+'\nNameService:'+NameService+'\nDeviceNumber:'+DeviceNumber+'\nProductNumber:'+ProductNumber+'\nMetodoPagamento:'+MetodoPagamento+'\n';
				cordova.plugins.notification.local.setDefaults({
					led:{ color:'#FF00FF',on:500,off:500 },
					vibrate:true
				});
				cordova.plugins.notification.local.schedule({
					id:Reserva_ID,
					title:titulo,
					text:texto,
					icon:globalUrl+'icon-notification.png',
					foreground:true,
					skipPermission:true
				});
				cordova.plugins.notification.local.on("click",function (notification) {
					window.location.hash='resumo-abastecimento';
				});
			}
		},
		error:function()
		{

		}
	});
}

function verificaSession()
{
	if(window.localStorage.getItem("estou_logado") != "1")return false;
	var so=navigator.userAgent;
	var APPVersion=window.localStorage.getItem("APPVersion");
	var session_id_app=window.localStorage.getItem("session_id_app");
	var token=window.localStorage.getItem("token");
	var telemovel=window.localStorage.getItem('telemovel');
	var imei=window.localStorage.getItem("IMEI");
	var menus_version=window.localStorage.getItem("MENUS_VERSION");
	var sLang=window.localStorage.getItem("sLang");

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/logins.php',
		async:true,
		data:{
			'type':'verificaSession',
			'session_id_app':session_id_app,
			'so':so,
			'APPVersion':APPVersion,
			'telemovel':telemovel,
			'IMEI':imei,
			'token':token,
			'menus_version':menus_version,
			'sLang':sLang
		},
		dataType:'html',
		success:function(data)
		{
			window.localStorage.setItem("app_offline","0");

			if(data == -2)
			{
				var msg = 'Não foi possivel confirmar a sua atenticação';
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
				logout();
			}
			if(data == -1)
			{
				var msg = 'Existe outro utilizador logado com os mesmos dados';
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
				logout();
			}
			if(data == 1)
			{
				if (confirm('Tentativa de Login com estes dados, autoriza fazer Login ?'))logout();
				else blockLogin();
			}
			if(data == 2)getMinhasNotificacoesAbastecimentos();
			if(data == 3)getMyNotifications();//esta funcao recebe os pedidos de pagamento tb do POS
			if(data == 5)getMeusPagamentosMbway();
			if(data == 6)
			{
				window.localStorage.setItem("Empresa","1");
				$('.hamburger-menu1').css('display','none');
				$('.hamburger-menu2').css('display','block');
			}
			if(data == 7)
			{
				window.localStorage.setItem("Empresa","0");
				$('.hamburger-menu1').css('display','block');
				$('.hamburger-menu2').css('display','none');
			}
			if(data == 8)getMyNotificationsPagamentos();
			if(data == 9)atualiza_menus(menus_version);//se existir uma nova versao de menus
		},
		error:function()
		{
			window.localStorage.setItem("app_offline","1");
		}
	});
}

function atualiza_menus(menus_version)
{
	var sLang=window.localStorage.getItem("sLang");

	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/logins.php',
		async:false,
		data:{'type':'atualiza_menus','menus_version':menus_version,'sLang':sLang,'dp':(new Date()).getTime(),'token':window.localStorage.getItem("token") },
		dataType:'html',
		success:function(data)
		{
			if(data != -1)
			{
				var dados = data.split("|");
				menus_version = dados[0];
				menus_dados = dados[1];
				window.localStorage.setItem("MENUS_VERSION",menus_version);
				window.localStorage.setItem("Cache_menus",menus_dados);
				carregar_menus();
			}	
		},
		error:function()
		{

		}
	});
}

function logout()
{
	var session_id_app=window.localStorage.getItem("session_id_app");
	var token=window.localStorage.getItem("token");
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/logins.php',
		async:true,
		data:{
			'type':'logout',
			'session_id_app':session_id_app,
			'token':token
		},
		dataType:'html',
		success:function(data)
		{
			 window.location.hash ='logout';
		},
		error:function()
		{

		}
	});
}

function blockLogin()
{
	var session_id_app=window.localStorage.getItem("session_id_app");
	var token=window.localStorage.getItem("token");
	$.ajax({
		type:'POST',
		url:globalUrl+'admin_tfc/logins.php',
		async:true,
		data:{
			'type':'blockLogin',
			'session_id_app':session_id_app,
			'token':token
		},
		dataType:'html',
		success:function(data)
		{
			 /* window.location.hash ='logout';*/
		},
		error:function()
		{

		}
	});
}
function calculateAndDisplayRoute_B(directionsService, directionsDisplay, pointA, pointB) {
  directionsService.route({
    origin: pointA,
    destination: pointB,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
function close_nav()
{
	$("#content_home").hide();
	$("#content").show();
	$("#content_mapa").hide();
	$("#content_iframe").hide();

	header='<div class="left back" style="width:7%;background-position:15px 20px;background-color:#fff;" onclick="window.location.hash=\'homepage\'">'+key_BACK[sLang]+'</div></div><div class="cent" style="line-height:50px; text-align:left;text-indent:10px;background-color:#fff;"><img src="img/logo.svg" border="0" class="logo" style="float:right;margin-right:20px"></div>';
	$("#header").html(header);
}
function close_nav2()
{
	$("#content_home").show();
	$("#content").hide();
	$("#content_mapa").hide();

	header='<div class="left"><img src="img/logo.svg" border="0" class="logo"></div><div class="cent"></div><div class="right"><a class="profile-toggle" href="#profile-panel"><img class="img-menu" src="img/menu.svg"></a></div>';
	$("#header").html(header);
}
//Slider postos home
function start_nav2(StationID,latitude,longitude)
{
	$("#map-trajetos").height(window.innerHeight-100);

	$("#content_home").hide();
	$("#content").hide();
	$("#content_mapa").show();
	//header='<div class="left back" style="width:7%;background-position:15px 20px;background-color:#fff;" onclick="close_nav2()">'+key_BACK[sLang]+'</div></div><div class="cent" style="line-height:50px; text-align:left;text-indent:10px;background-color:#fff;"><img src="img/logo.svg" border="0" class="logo" style="float:right;margin-right:20px"></div>';
	
	//header='<div class="header" id="header" style="margin-top:5px">';
	header='<div style="background-color:#fff;white-space:nowrap;line-height:20px;margin:20px" onclick="close_nav2()"><img style="transform: rotate(90deg);width:17px;float:left;margin-right:5px;margin-top:6px;color:#3cc3ce" src="img/next.svg" class="next"> '+key_BACK[sLang]+'</div>';
	header+='<div class="cent" style="line-height:50px;text-align:left;text-indent:10px;background-color:#fff"><img src="img/logo.svg" class="logo" style="right:20px;position:absolute;top:4px" border="0"></div>';
	//header+='</div>';

	$("#header").html(header);
	setTimeout(function() {start_nav_b(StationID,latitude,longitude);}, 1000);
}
//Slider postos dentro
function start_nav5(StationID,latitude,longitude)
{
	$("#map-trajetos").height(window.innerHeight);

	$("#content_home").hide();
	$("#content").hide();
	$("#content_mapa").show();
	//header='<div class="left back" style="width:7%;background-position:15px 20px;background-color:#fff;" onclick="close_nav()">'+key_BACK[sLang]+'</div></div><div class="cent" style="line-height:50px; text-align:left;text-indent:10px;background-color:#fff;"><img src="img/logo.svg" border="0" class="logo" style="float:right;margin-right:20px"></div>';
	//header='<div class="header" id="header" style="margin-top:5px">';
	header='<div style="background-color:#fff;white-space:nowrap;line-height:20px;margin:20px" onclick="close_nav()"><img style="transform: rotate(90deg);width:17px;float:left;margin-right:5px;margin-top:6px;color:#3cc3ce" src="img/next.svg" class="next"> '+key_BACK[sLang]+'</div>';
	header+='<div class="cent" style="line-height:50px;text-align:left;text-indent:10px;background-color:#fff"><img src="img/logo.svg" class="logo" style="right:20px;position:absolute;top:4px" border="0"></div>';
	//header+='</div>';

	$("#header").html(header);
	setTimeout(function() {start_nav_c(StationID,latitude,longitude);}, 1000);
}
//Mapa homepage??
function start_nav3(StationID,latitude,longitude)
{
	$("#content_home").hide();
	$("#content").hide();
	$("#content_mapa").show();
	//header='<div class="left back" style="width:7%;background-position:15px 20px;background-color:#fff;" onclick="close_nav2()">'+key_BACK[sLang]+'</div></div><div class="cent" style="line-height:50px; text-align:left;text-indent:10px;background-color:#fff;"><img src="img/logo.svg" border="0" class="logo" style="float:right;margin-right:20px"></div>';
	//header='<div class="header" id="header" style="margin-top:5px">';
	header='<div style="background-color:#fff;white-space:nowrap;line-height:20px;margin:20px" onclick="close_nav2()"><img style="transform: rotate(90deg);width:17px;float:left;margin-right:5px;margin-top:6px;color:#3cc3ce" src="img/next.svg" class="next"> '+key_BACK[sLang]+'</div>';
	header+='<div class="cent" style="line-height:50px;text-align:left;text-indent:10px;background-color:#fff"><img src="img/logo.svg" class="logo" style="right:20px;position:absolute;top:4px" border="0"></div>';
	//header+='</div>';
	$("#header").html(header);
	setTimeout(function() {start_nav(StationID,latitude,longitude);}, 1000);
}
//Mapa homepage
function start_nav4(StationID,latitude,longitude)
{
	$("#map-trajetos").height(window.innerHeight-100);

	$("#content_home").hide();
	$("#content").hide();
	$("#content_mapa").show();
	//header='<div class="left back" style="width:7%;background-position:15px 20px;background-color:#fff;" onclick="close_nav2()">'+key_BACK[sLang]+'</div></div><div class="cent" style="line-height:50px; text-align:left;text-indent:10px;background-color:#fff;"><img src="img/logo.svg" border="0" class="logo" style="float:right;margin-right:20px"></div>';
	
	//header='<div class="header" id="header" style="margin-top:5px">';
	header='<div style="background-color:#fff;white-space:nowrap;line-height:20px;margin:20px" onclick="close_nav2()"><img style="transform: rotate(90deg);width:17px;float:left;margin-right:5px;margin-top:6px;color:#3cc3ce" src="img/next.svg" class="next"> '+key_BACK[sLang]+'</div>';
	header+='<div class="cent" style="line-height:50px;text-align:left;text-indent:10px;background-color:#fff"><img src="img/logo.svg" class="logo" style="right:20px;position:absolute;top:4px" border="0"></div>';
	//header+='</div>';

	$("#header").html(header);
	setTimeout(function() {start_nav_b(StationID,latitude,longitude);}, 1000);
}
//dentro da bomba
function start_nav6(StationID,latitude,longitude)
{
	$("#map-trajetos").height(window.innerHeight-300);

	$("#content_home").hide();
	$("#content").hide();
	$("#content_mapa").show();

	//header='<div class="left back" style="width:7%;background-position:15px 20px;background-color:#fff;" onclick="close_nav()">'+key_BACK[sLang]+'</div></div><div class="cent" style="line-height:50px; text-align:left;text-indent:10px;background-color:#fff;"><img src="img/logo.svg" border="0" class="logo" style="float:right;margin-right:20px"></div>';
	//header='<div class="header" id="header" style="margin-top:5px">';
	header='<div style="background-color:#fff;white-space:nowrap;line-height:20px;margin:20px" onclick="close_nav()"><img style="transform: rotate(90deg);width:17px;float:left;margin-right:5px;margin-top:6px;color:#3cc3ce" src="img/next.svg" class="next"> '+key_BACK[sLang]+'</div>';
	header+='<div class="cent" style="line-height:50px;text-align:left;text-indent:10px;background-color:#fff"><img src="img/logo.svg" class="logo" style="right:20px;position:absolute;top:4px" border="0"></div>';
	//header+='</div>';
	$("#header").html(header);
	setTimeout(function() {start_nav(StationID,latitude,longitude);}, 1000);
}



function start_nav(StationID,latitude,longitude)
{
	/*https://developers.google.com/maps/documentation/javascript/examples/streetview-simple*/
	$("#content_home").hide();
	$("#content").hide();
	$("#content_mapa").show();
	$("#content_iframe").hide();


	var zoom = 10;
	var contentString = '<h4 style="margin:0;">Você está aqui</h4>';
    var img_here = "img/pin_here.png";
    var infowindow = new google.maps.InfoWindow({content: contentString});
    var lat = window.localStorage.getItem('lat');
	var lon = window.localStorage.getItem('lng');
	if(lat==null || lat=="" || lon==null || lon=="")
	{
		lat=41.287673;
		lon=-8.627074;
	}

	var pointA = new google.maps.LatLng(lat,lon);
    var pointB = new google.maps.LatLng(latitude,longitude);

	var map = new google.maps.Map(document.getElementById('map-trajetos'), {
		zoom: zoom,
		disableDefaultUI: false,
		center: pointA
	});

	// Create the DIV to hold the control and call the CenterControl()
  	// constructor passing in this DIV.
	const centerControlDiv = document.createElement("div");
  	CenterControl(centerControlDiv, map,latitude,longitude);
  	map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv);



	var markerA = new google.maps.Marker({
        position    : pointA,
        title: "Você está aqui",
      	label: "A",
        map    : map
    });
    markerA.addListener('click', function() {infowindow.open(map, markerA);});

	// Create marker2
	var contentString = "destino";
	var img = "img/g27_pin.png";
	var infowindow2 = new google.maps.InfoWindow({content: contentString});
	var markerB = new google.maps.Marker({
		        position    : pointB,
		        map         : map,
		        icon        : img
		    });
	markerB.addListener('click', function() {infowindow2.open(map, markerB);});
	var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer({map: map});
    // get route from A to B
    calculateAndDisplayRoute_B(directionsService, directionsDisplay, pointA, pointB);

    //Em modo texto:
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById("street-view"));

    calculateAndDisplayRoute_B(directionsService, directionsRenderer, pointA, pointB);

	//directionsDisplay.setMap(map);
	//directionsDisplay.setPanel(document.getElementById("street-view") as HTMLElement	);
	/*panorama = new google.maps.StreetViewPanorama(
	    document.getElementById("street-view"),
	    {
	      position: pointA,
	      pov: { heading: 34, pitch: 10 },
	      addressControlOptions: {
	        position: google.maps.ControlPosition.BOTTOM_CENTER,
	      },
	      linksControl: true,
	      panControl: false,
	      enableCloseButton: false,
	    }
	  );
	map.setStreetView(panorama);*/

	setTimeout(function() {refresh_mapa_location2(map,markerA,latitude,longitude);}, 3000);

	/*




	var map = new google.maps.Map(document.getElementById('content_mapa'), {
		zoom: 12,
		disableDefaultUI: true,
		center: new google.maps.LatLng(window.localStorage.getItem('lat'), window.localStorage.getItem('lng'))
	});
    */
    //directionsDisplay.setPanel(document.getElementById('map-details'));
	//calculateAndDisplayRoute3(directionsService, directionsDisplay,map,$Latitude,$Longitude);
}


function CenterControl(controlDiv,map,latitude,longitude) {

  var sLang =  window.localStorage.getItem("sLang");
  
  // Set CSS for the control border.
  const controlUI = document.createElement("div");
  controlUI.style.backgroundColor = "#fff";
  controlUI.style.border = "1px solid #42c4ce";
  controlUI.style.borderRadius = "20px";
  //controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "8px";
  controlUI.style.marginBottom = "22px";
  controlUI.style.textAlign = "center";
  //controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  const controlText = document.createElement("div");
  controlText.style.color = "rgb(25,25,25)";
  controlText.style.fontFamily = "Roboto,Arial";
  controlText.style.fontSize = "14px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  
  if(sLang == 'es')controlText.innerHTML = "<img src='img/google_arrow.svg'>NAVIGATION";
  else controlText.innerHTML = "<img src='img/google_arrow.svg'>NAVEGAR";

  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", () => {
    	if(navigator.userAgent.toLowerCase().indexOf("android") > -1)abre_app_android(latitude,longitude);
    	else abre_app_ios(latitude,longitude);
  });


  //----------------------------------------
  const controlUI2 = document.createElement("div");
  controlUI2.style.backgroundColor = "#fff";
  controlUI2.style.border = "1px solid #42c4ce";
  controlUI2.style.borderRadius = "20px";
  //controlUI2.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI2.style.cursor = "pointer";
  controlUI2.style.marginTop = "8px";
  controlUI2.style.marginBottom = "22px";
  controlUI2.style.textAlign = "center";
  //controlUI2.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI2);

  const controlText2 = document.createElement("div");
  controlText2.style.color = "rgb(25,25,25)";
  controlText2.style.fontFamily = "Roboto,Arial";
  controlText2.style.fontSize = "14px";
  controlText2.style.lineHeight = "38px";
  controlText2.style.paddingLeft = "5px";
  controlText2.style.paddingRight = "5px";
  controlText2.innerHTML = "<img src='img/waze.svg' style='width:25px;margin-top:6px;position:absolute;left:10px'><span style='margin-left:28px'>WAZE</span>";

  controlUI2.appendChild(controlText2);
  controlUI2.addEventListener("click", () => {
    	if(navigator.userAgent.toLowerCase().indexOf("android") > -1)abre_app_android_waze(latitude,longitude);
    	else abre_app_ios_waze(latitude,longitude);
  });
}
function CenterControl2(controlDiv,map,latitude,longitude)
{
  var sLang=window.localStorage.getItem("sLang");

  // Set CSS for the control border.
  const controlUI = document.createElement("div");
  controlUI.style.backgroundColor = "#fff";
  controlUI.style.border = "1px solid #42c4ce";
  controlUI.style.borderRadius = "20px";
  //controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "8px";
  controlUI.style.marginBottom = "22px";
  controlUI.style.textAlign = "center";
  //controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  const controlText = document.createElement("div");
  controlUI.style.backgroundColor = "#fff";
  controlUI.style.border = "1px solid #42c4ce";
  controlUI.style.borderRadius = "20px";

  controlText.style.color = "rgb(25,25,25)";
  controlText.style.fontFamily = "Roboto,Arial,sans-serif";
  controlText.style.fontSize = "14px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";

  if(sLang=="ES")controlText.innerHTML = "<img src='img/google_arrow.svg'>NAVIGATION";
  else controlText.innerHTML = "<img src='img/google_arrow.svg'>NAVEGAR";

  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", () => {
    	if(navigator.userAgent.toLowerCase().indexOf("android") > -1)abre_app_android(latitude,longitude);
    	else abre_app_ios2(latitude,longitude);
  });
  
  //----------------------------------------
  const controlUI2 = document.createElement("div");
  controlUI2.style.backgroundColor = "#fff";
  controlUI2.style.border = "2px solid #fff";
  controlUI2.style.borderRadius = "3px";
  //controlUI2.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI2.style.cursor = "pointer";
  controlUI2.style.marginTop = "8px";
  controlUI2.style.marginBottom = "22px";
  controlUI2.style.textAlign = "center";
  //controlUI2.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI2);

  const controlText2 = document.createElement("div");
  controlText2.style.color = "rgb(25,25,25)";
  controlText2.style.fontFamily = "Roboto,Arial,sans-serif";
  controlText2.style.fontSize = "14px";
  controlText2.style.lineHeight = "38px";
  controlText2.style.paddingLeft = "5px";
  controlText2.style.paddingRight = "5px";
  controlText2.innerHTML = "<img src='img/waze.svg' style='width:25px;margin-top:6px;position:absolute;left:10px'><span style='margin-left:28px'>WAZE</span>";







  controlUI2.appendChild(controlText2);
  controlUI2.addEventListener("click", () => {
    	if(navigator.userAgent.toLowerCase().indexOf("android") > -1)abre_app_android_waze(latitude,longitude);
    	else abre_app_ios_waze(latitude,longitude);
  });

}
function abre_app_android_waze(lat2,lon2)
{
	var lat = window.localStorage.getItem('lat');
	var lon = window.localStorage.getItem('lng');

	var sApp = startApp.set({ 
            "action":"ACTION_VIEW",
            "category":"CATEGORY_DEFAULT",
            "type":"text/css",
            "package":"com.waze",
            "uri":"waze://?ll="+lat2+","+lon2+"&z=6&navigate=yes",
            "intentstart":"startActivity"
        });
	sApp.start(function() {}, function(error) {alert(error);});
}
function abre_app_ios_waze(lat2,lon2)
{
	var lat = window.localStorage.getItem('lat');
	var lon = window.localStorage.getItem('lng');
	/*
	https://www.waze.com/live-map/directions/maiashopping-aguas-santas?utm_source=waze_website&utm_campaign=waze_website&utm_medium=website_footer&to=place.w.230293916.-1991765990.5200126&from=ll.41.28768%2C-8.6278144
	*/
    //inside_map("https://www.waze.com/live-map/directions?from=ll."+lat+"."+lng+"&to=place.w."+lat2+"."+lon2);
    inside_map("waze://?ll="+lat2+","+lng2+"&z=6&navigate=yes");
    //var ref = cordova.InAppBrowser.open("waze://?ll="+lat+","+lon+"&z=6&navigate=yes", \'_system\', \'location=yes\');
    //var myCallback = function(event) { alert(event.url); }
}
function abre_app_android(lat2,lon2)
{
	var lat = window.localStorage.getItem('lat');
	var lon = window.localStorage.getItem('lng');
	var sApp = startApp.set({ /* params */
            "action":"ACTION_VIEW",
            "category":"CATEGORY_DEFAULT",
            "type":"text/css",
            "package":"com.google.android.apps.maps",
            "uri":"http://maps.google.com/maps?saddr="+lat+","+lon+"&daddr="+lat2+","+lon2+"",
            "intentstart":"startActivity"
        });
	sApp.start(function() { /* success */
	    }, function(error) { /* fail */
	       alert(error);
	});
}
function abre_app_ios(lat2,lon2)
{
	var lat = window.localStorage.getItem('lat');
	var lon = window.localStorage.getItem('lng');
	//inside_map("https://maps.google.com/maps?saddr="+lat+","+lon+"&daddr="+lat2+","+lon2);
    inside_map("https://www.google.com/maps/embed/v1/directions?origin="+lat+","+lng+"&destination="+lat2+","+lon2);
	/*window.open("https://www.google.com/maps?saddr="+lat+","+lng+"&daddr="+lat2+","+lng2p,"_new");*/
}
function abre_app_ios2(lat2,lon2)
{
	var lat = window.localStorage.getItem('lat');
	var lon = window.localStorage.getItem('lng');
    inside_map2("https://www.google.com/maps/embed/v1/directions?origin="+lat+","+lng+"&destination="+lat2+","+lon2);
}
//Sem panorama
function start_nav_b(StationID,latitude,longitude)
{
	$("#content_home").hide();
	$("#content").hide();
	$("#content_mapa").show();
	$("#content_iframe").hide();


	var zoom = 10;
	var contentString = '<h4 style="margin:0;">Você está aqui</h4>';
    var img_here = "img/pin_here.png";
    var infowindow = new google.maps.InfoWindow({content: contentString});
    var lat = window.localStorage.getItem('lat');
	var lon = window.localStorage.getItem('lng');
	if(lat==null || lat=="" || lon==null || lon=="")
	{
		lat=41.287673;
		lon=-8.627074;
	}

	var pointA = new google.maps.LatLng(lat,lon);
    var pointB = new google.maps.LatLng(latitude,longitude);

	var map = new google.maps.Map(document.getElementById('map-trajetos'), {
		zoom: zoom,
		disableDefaultUI:true,
		
		zoomControl:false,
		mapTypeControl: true,
		scaleControl: false,
		streetViewControl: true,
		rotateControl: false,
		fullscreenControl: false,


	    streetViewControlOptions: {
	      position: google.maps.ControlPosition.RIGHT_CENTER
	    },
		center: pointA
	});




	// Create the DIV to hold the control and call the CenterControl()
  	// constructor passing in this DIV.
	const centerControlDiv = document.createElement("div");
  	CenterControl(centerControlDiv, map,latitude,longitude);
  	map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv);


	var markerA = new google.maps.Marker({
        position    : pointA,
        title: "Você está aqui",
      	label: "A",
        map    : map
    });
    markerA.addListener('click', function() {infowindow.open(map, markerA);});

	// Create marker2
	var contentString = "destino";
	var img = "img/g27_pin.png";
	var infowindow2 = new google.maps.InfoWindow({content: contentString});
	var markerB = new google.maps.Marker({
		        position    : pointB,
		        map         : map,
		        icon        : img
		    });
	markerB.addListener('click', function() {infowindow2.open(map, markerB);});
	var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer({map: map});
    // get route from A to B
    calculateAndDisplayRoute_B(directionsService, directionsDisplay, pointA, pointB);


	setTimeout(function() {refresh_mapa_location3(map,markerA,latitude,longitude);}, 3000);
}

function start_nav_c(StationID,latitude,longitude)
{
	$("#content_home").hide();
	$("#content").hide();
	$("#content_mapa").show();
	$("#content_iframe").hide();

	var zoom = 10;
	var contentString = '<h4 style="margin:0;">Você está aqui</h4>';
    var img_here = "img/pin_here.png";
    var infowindow = new google.maps.InfoWindow({content: contentString});
    var lat = window.localStorage.getItem('lat');
	var lon = window.localStorage.getItem('lng');
	if(lat==null || lat=="" || lon==null || lon=="")
	{
		lat=41.287673;
		lon=-8.627074;
	}

	var pointA = new google.maps.LatLng(lat,lon);
    var pointB = new google.maps.LatLng(latitude,longitude);

	var map = new google.maps.Map(document.getElementById('map-trajetos'), {
		zoom: zoom,
		disableDefaultUI: false,
		center: pointA
	});

	// Create the DIV to hold the control and call the CenterControl()
  	// constructor passing in this DIV.
	const centerControlDiv = document.createElement("div");
  	CenterControl2(centerControlDiv, map,latitude,longitude);
  	map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv);



	var markerA = new google.maps.Marker({
        position    : pointA,
        title: "Você está aqui",
      	label: "A",
        map    : map
    });
    markerA.addListener('click', function() {infowindow.open(map, markerA);});

	// Create marker2
	var contentString = "destino";
	var img = "img/g27_pin.png";
	var infowindow2 = new google.maps.InfoWindow({content: contentString});
	var markerB = new google.maps.Marker({
		        position    : pointB,
		        map         : map,
		        icon        : img
		    });
	markerB.addListener('click', function() {infowindow2.open(map, markerB);});
	var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer({map: map});
    // get route from A to B
    calculateAndDisplayRoute_B(directionsService, directionsDisplay, pointA, pointB);

    //Em modo texto:
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById("street-view"));

    calculateAndDisplayRoute_B(directionsService, directionsRenderer, pointA, pointB);
	setTimeout(function() {refresh_mapa_location2(map,markerA,latitude,longitude);}, 3000);

}
function inside_map(url)
{
	$("#content_home").hide();
	$("#content").hide();
	$("#content_mapa").hide();
	$("#content_iframe").show();

	//url="https://www.google.com/maps/embed/v1/place?key=AIzaSyB3u7Jr_rH7E63fRbU4w3ntbxInWKyuUhk&q=Space+Needle,Seattle+WA";
	/*
	url="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed";
	https://www.google.com/maps/embed/v1/directions?origin=place_id:
	*/
	//url="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed";
	//
	//"https://maps.google.com/maps?q=10.305385,77.923029&hl=es;z=14&amp;output=embed
	//url="https://www.google.com/maps/embed/v1/directions?origin=Lisboa&destination=Porto";
	//window.open(url,'_new');
	header='<div class="left"><img src="img/logo.svg" border="0" class="logo"></div><div class="cent"></div><div class="right"><a class="profile-toggle" href="#profile-panel"><img class="img-menu" src="img/menu.svg"></a></div>';
	$("#header").html(header);
	$('.header2').css('display','block');
	$('.app-footer').css('display','block');
	$('#slider-postos').css('display','block');

	$("#iframe").attr("src",url+'&key=AIzaSyDuPw9O-z98eEOxzciSIdfxbMjQZ4nvKn0&maptype=roadmap');
}

function inside_map2(url)
{
	$("#content_home").hide();
	$("#content").hide();
	$("#content_mapa").hide();
	$("#content_iframe").show();
	$("#content_iframe").height(window.innerHeight-100);

	//header='<div class="left"><img src="img/logo.svg" border="0" class="logo"></div><div class="cent"></div><div class="right"><a class="profile-toggle" href="#profile-panel"><img class="img-menu" src="img/menu.svg"></a></div>';
	//$("#header").html(header);
	//$('.header2').css('display','block');
	//$('.app-footer').css('display','block');
	//$('#slider-postos').css('display','block');

	$("#iframe").attr("src",url+'&key=AIzaSyDuPw9O-z98eEOxzciSIdfxbMjQZ4nvKn0&maptype=roadmap');
}



/* https://github.com/NiklasMerz/fingerprint-aio-demo */
function guarda_dados()
{
	//Is available
	window.Fingerprint.isAvailable(FingerprintisAvailableSuccess, FingerprintisAvailableError);
}
function FingerprintisAvailableSuccess(result)
{
	window.Fingerprint.show({
      clientId: "appgoz",
      clientSecret: "appgoz"
    }, successCallback, errorCallback);
}
function successCallback()
{
	var email=document.getElementById('login');
	var password=document.getElementById('password');
	var encrypted = document.getElementById('login').value+'|'+document.getElementById('password').value;
	window.localStorage.setItem("appgoz",encrypted);
}
function errorCallback(err){alert("Authentication invalid " + err);}
function FingerprintisAvailableError(error){/*alert(error.message);*/}

function le_dados()
{
	//Is available
	window.Fingerprint.isAvailable(FingerprintisAvailableSuccess2, FingerprintisAvailableError2);
}
function FingerprintisAvailableSuccess2(result)
{
    window.Fingerprint.show({
      clientId: "appgoz",
      clientSecret: "appgoz"
    }, successCallback2, errorCallback2);
}
function successCallback2()
{
	var decrypted=window.localStorage.getItem("appgoz");
	const splits = decrypted.split("|");
	document.getElementById('login').value=splits[0];
	document.getElementById('password').value=splits[1];
	window.localStorage.setItem("autologin","1");
	login();//Agora submete o login
}

function errorCallback2(error){
  /*alert("Authentication invalid " + error.message);*/
}
function FingerprintisAvailableError2(error)
{
	/*alert(error.message);*/
}

function build_header_(hash,titulo)
{
	var header;
	header='<div class="left_logo"><img src="img/logo.svg" border="0" class="logo"></div>';
	header+='<div class="right_back" onclick="window.location.hash=\''+hash+'\'">'+titulo+' <img src="img/next.svg" class="next"></div>';
	return header;
}
function build_header(hash,titulo)
{
	var header;
	header='<div class="header" id="header" style="margin-top:5px">';
	header+='<div style="background-color:#fff;white-space:nowrap;line-height:20px;margin:20px" onclick="window.location.hash=\''+hash+'\'"><img style="transform: rotate(90deg);width:17px;float:left;margin-right:5px;margin-top:6px;color:#3cc3ce" src="img/next.svg" class="next"> '+titulo+'</div>';
	header+='<div class="right"><a class="profile-toggle" href="#profile-panel"><img class="img-menu" src="img/menu.svg" style="position:absolute;top:18px;right:20px"></a></div>';
	//header+='<div class="cent" style="line-height:50px;text-align:left;text-indent:10px;background-color:#fff"><img src="img/logo.svg" class="logo" style="right:20px;position:absolute;top:4px" border="0"></div>';
	header+='</div>';
	return header;
}
function build_header_pos(hash,titulo)
{
	var header;
	header='<div class="header" id="header" style="margin-top:5px">';
	header+='<div style="background-color:#fff;white-space:nowrap;line-height:20px;margin:20px" onclick="window.location.hash=\''+hash+'\'"><img style="transform: rotate(90deg);width:17px;float:left;margin-right:5px;margin-top:6px;color:#3cc3ce" src="img/next.svg" class="next"> '+titulo+'</div>';
	header+='</div>';
	return header;
}
function build_header_callcenter(hash,titulo)
{
	var header;
	header='<div class="header" id="header" style="margin-top:5px">';
	header+='<div style="background-color:#fff;white-space:nowrap;line-height:20px;margin:20px" onclick="window.location.hash=\''+hash+'\'"><img style="transform: rotate(90deg);width:17px;float:left;margin-right:5px;margin-top:6px;color:#3cc3ce" src="img/next.svg" class="next"> '+titulo+'</div>';
	header+='</div>';
	return header;
}







$(".numericOnly2").on("keyup",function() {
  var sanitized=$(this).val().replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1");
  $(this).val(sanitized);

  var max=parseInt($(this).attr('max'));
  var min=parseInt($(this).attr('min'));
  if (sanitized > max)
  {
      $(this).val(sanitized.slice(0,-1));
  }
  else if (sanitized < min)
  {
      $(this).val("");
  }
});	






$(window).unbind('hashchange').bind('hashchange',function(event)
{
	$("#content").empty();
	$("#content").html('<div style="display:flex;align-items:center;justify-content:center"><img src="img/loading.gif" border="0" class="logo"></div>');
	$('#slider-postos').css("display","none");
	var hash=location.hash.replace('#','');
	windowopen(hash);
});


document.addEventListener("DOMContentLoaded", function () {

	//Se vier de uma pagina de visa nao quero reload:
	//faturas-pagamentos
	window.localStorage.setItem("ja_carreguei_home_page","0");
 	var hash=location.hash.replace('#','');

 	
	if(hash != '')
	{
		if($('#overlay').is(':visible')) $('#overlay').hide();
		windowopen(hash);
	}
	else{
		$('#overlay').css('display','block');
	}

});
