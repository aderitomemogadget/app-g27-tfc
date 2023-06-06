function substr_count_v(haystack, needle, offset, length)
{
	var pos = 0,
	cnt = 0;
	haystack += '';
	needle += '';
	if (isNaN(offset))
	{
		offset = 0;
	}
	if (isNaN(length))
	{
		length = 0;
	}
	offset--;
	while ((offset = haystack.indexOf(needle, offset + 1)) != -1)
	{
		if (length > 0 && (offset + needle.length) > length)
		{
			return false;
		}
		else
		{
			cnt++;
		}
	}
	return cnt;
}

function substr_count(haystack, needle, offset, length)
{
	var pos = 0,
	cnt = 0;
	haystack += '';
	needle += '';
	if (isNaN(offset))
	{
		offset = 0;
	}
	if (isNaN(length))
	{
		length = 0;
	}
	offset--;
	while ((offset = haystack.indexOf(needle, offset + 1)) != -1)
	{
		if (length > 0 && (offset + needle.length) > length)
		{
			return false;
		}
		else
		{
			cnt++;
		}
	}
	return cnt;
}


var key_Reference = new Array();
var key_Description = new Array();
var key_FILTER = new Array();
var key_Filter = new Array();
var key_SORT = new Array();
var key_Sort = new Array();
var key_BACK = new Array();
var key_LEATHER_CATALOGUE = new Array();
var key_LEATHER = new Array();
var key_COMPARE = new Array();
var key_Compare = new Array();
var key_COLOR_PALETTE = new Array();
var key_PALLETE = new Array();
var key_FAVORITE_PALLETE = new Array();
var key_COLOR = new Array();
var key_FAVORITES = new Array();
var key_Add_to_Favorites = new Array();
var key_Remove_from_Favorites = new Array();
var key_Remove_from_Compare = new Array();
var key_Technical_Sheet = new Array();
var key_Type_of_leather = new Array();
var key_View_Items = new Array();
var key_Clear_Items = new Array();
var key_SEARCH = new Array();
var key_I_AM_SORRY = new Array();
var key_There_are_no_materials_added_to_the_compare_list = new Array();
var key_There_are_no_materials_added_to_the_favorites_list = new Array();
var key_There_are_no_materials_available = new Array();
var key_VIEW = new Array();
var key_custom_pallete_was_removed_from_the_favorites_list = new Array();
var key_was_removed_from_the_favorites_list = new Array();
var key_was_added_to_the_favorites_list = new Array();
var key_was_removed_from_the_compare_list = new Array();
var key_was_added_to_the_compare_list = new Array();
var key_was_removed_from_custom_palette = new Array();
var key_was_added_to_custom_palette = new Array();
var key_ACCOUNT = new Array();
var key_LOGIN = new Array();
var key_LOGIN2 = new Array();
var key_All_fields_are_mandatory = new Array();
var key_Account_already_exists = new Array();
var key_custom_palette_already_exists = new Array();
var key_Account_created = new Array();
var key_Invalid_Email = new Array();
var key_insertemail = new Array();
var key_emailincrorreto = new Array();
var key_userincrorreto = new Array();
var key_jaexsitematerial = new Array();
var key_Thickness = new Array();
var key_remarks = new Array();
var key_Maintenance = new Array();
var key_Account_updated = new Array();

var key_CUSTOM_PALLETES = new Array();
var key_CUSTOM_PALLETES2 = new Array();
var key_NEW_CUSTOM_PALLETE = new Array();
var key_VIEW_CUSTOM_PALLETE = new Array();
var key_Add_to_customPalette = new Array();
var key_create_palette = new Array();

var key_new_custom_pallete_created = new Array();
var key_no_products_custom_palette = new Array();

var key_Add_to = new Array();
var key_Remove_from = new Array();
var key_CUSTOM_PALLETES_MENU = new Array();
var key_Delete_Custom_Palette = new Array();
var key_Confirm_Delete_Custom_Palette = new Array();
var key_There_are_no_custom_palettes = new Array();

var key_Lingua = new Array();
var key_Contactos = new Array();
var key_Legal_Info = new Array();
var key_About_Us = new Array();
// var key_Logout = new Array();
var key_Notificacoes = new Array();
var key_Tutorial = new Array();
var key_Skip = new Array();

var key_conta = new Array();
var key_conta2 = new Array();
var key_reservas = new Array();
var key_reservas2 = new Array();
var key_pagamentos = new Array();
var key_pagamentos2 = new Array();
var key_pagamentos3 = new Array();
var key_consumos = new Array();
var key_mensagens = new Array();
var key_Logout = new Array();

var key_gastos = new Array();
var key_limites = new Array();
var key_limite_diario = new Array();
var key_limite_semanal = new Array();
var key_limite_mensal = new Array();

var key_sobre_nos = new Array();
var key_sobre_nos2 = new Array();
var key_termos_legais = new Array();
var key_termos_legais2 = new Array();
var key_mudar_password = new Array();
var key_mudar_password2 = new Array();

var key_sobre_nos2_menu = new Array();
var key_termos_legais2_menu = new Array();
var key_mudar_password2_menu = new Array();
var key_contactos_menu = new Array();

var key_raio_pesquisa = new Array();

var key_morada_contactos = new Array();
var key_para_correspondencia = new Array();
var key_telefone = new Array();
var key_telemovel = new Array();
var key_horario = new Array();
var key_comercial = new Array();
var key_financeiro = new Array();

var key_carregar_saldo = new Array();
var key_gestao_frota = new Array();
var key_transacoes = new Array();
var key_abastecimentos = new Array();
var key_extratos_faturas = new Array();
var key_precos_acordados = new Array();
var key_historico_utilizacao = new Array();
var key_permissoes = new Array();
var key_meu_perfil = new Array();
var key_postos = new Array();
var key_morada = new Array();
var key_servicos = new Array();
var key_navegacao = new Array();
var key_abastecer = new Array();
var key_pagar_loja = new Array();
var key_bomba = new Array();
var key_bomba2 = new Array();
var key_preparar_abastecer = new Array();
var key_posto_trad = new Array();
var key_produto = new Array();
var key_litros_disponiveis = new Array();
var key_kms_veiculo = new Array();
var key_cancelar_btn = new Array();
var key_validar_btn = new Array();
var key_btn_gravar = new Array();
var key_mensagem_trad = new Array();
var key_pin_label = new Array();
var key_titulo_pagamento = new Array();
var key_resumo_abastecimento = new Array();
var key_nao_concretizada = new Array();
var key_erro = new Array();
var key_btn_voltar = new Array();
var key_nao_pagamento_finalizado = new Array();
var key_titulo_pagamentos = new Array();
var key_confirmacao_pagamento = new Array();
var key_aguarda_pagamento = new Array();
var key_aguardar_confirmacao_pagamento = new Array();
var key_gerar_novo_token = new Array();
var key_iniciar_pagamento = new Array();
var key_historico_pagamento = new Array();
var key_verificar_token = new Array();
var key_gestao_cartao_titulo = new Array();
var key_alterar_cartao = new Array();
var key_criar_cartao = new Array();
var key_gestao_matriculas_titulo = new Array();
var key_alterar_matricula = new Array();
var key_criar_matricula = new Array();
var key_pode_abastecer = new Array();
var key_actualizar_pagamentos = new Array();
var key_definicao_posto = new Array();
var key_abastecimento_confirmado = new Array();
var key_aguardar_confirmacao = new Array();
var key_gerar_token = new Array();
var key_historico_pagamento_titulo = new Array();

var key_pagamentos_caract = new Array();
var key_cliente_trad = new Array();
var key_cliente_caract = new Array();
var key_posto_caract = new Array();
var key_produto_caract = new Array();
var key_litros_caract = new Array();
var key_motorista_caract = new Array();
var key_matricula_caract = new Array();
var key_telemovel_caract = new Array();
var key_data_caract = new Array();
var key_estado_caract = new Array();
var key_valor_caract = new Array();
var key_reserva_caract = new Array();
var key_servico_caract = new Array();
var key_metodo_pagamento_caract = new Array();

var key_nao_existe_pagamentos = new Array();
var key_insira_seu_telemovel = new Array();
var key_escolha_produto = new Array();
var key_seu_limite = new Array();
var key_matricula_veiculo = new Array();
var key_escolha_posto = new Array();
var key_escolha_telemovel = new Array();
var key_litros_abastecimentos = new Array();
var key_aguardar_confirmacao_mensagem = new Array();
var key_litros_abastecidos = new Array();
var key_kms_veiculo2 = new Array();
var key_nome_cliente = new Array();

var key_alterar_limites_titulo = new Array();
var key_limite_diario_pos = new Array();
var key_limite_semanal_pos = new Array();
var key_limite_mensal_pos = new Array();
var key_condutor = new Array();

var key_criar_cartao_titulo = new Array();
var key_matricula = new Array();
var key_alterar_cartao_titulo = new Array();
var key_alterar_matricula_titulo = new Array();
var key_diesel_profissional = new Array();
var key_criar_matricula_titulo = new Array();
var key_operacao_cancelada_titulo = new Array();
var key_pagamento_efectuado_sucesso = new Array();
var key_operacao_nao_concretizada_titulo = new Array();

var key_abastecimento_invalido = new Array();
var key_cancelar_reserva_titulo = new Array();
var key_nao_possivel_cancelar_reserva = new Array();
var key_definicao_posto_titulo = new Array();
var key_definir_posto_btn = new Array();
var key_verifica_token_titulo = new Array();
var key_numero_telemovel = new Array();
var key_mensagens_titulo = new Array();
var key_nova_mensagem_btn = new Array();
var key_mensagem_titulo = new Array();
var key_consumos_titulo = new Array();

var key_ver_saldo_titulo = new Array();
var key_carregar_saldo_titulo = new Array();
var key_como_gerir_matriculas_titulo = new Array();
var key_como_gerir_meus_limites_titulo = new Array();
var key_como_gerir_minhas_reservas_titulo = new Array();
var key_como_posso_realizar_pagamentos_titulo = new Array();
var key_nao_contem_litros_suficientes = new Array();
var key_navegacao_titulo = new Array();
var key_dados_pessoais_titulo = new Array();
var key_carregamentos = new Array();
var key_pagamentos_pendentes = new Array();
var key_veiculos = new Array();
var key_condutores = new Array();
var key_financeira = new Array();
var key_configuracoes = new Array();




key_create_palette['en'] = 'Create';
key_create_palette['pt'] = 'Criar';
key_create_palette['fr'] = 'Créer';
key_create_palette['de'] = 'Erstellen';
key_create_palette['nl'] = 'Maken';

key_Notificacoes['en'] = 'Notifications';
key_Notificacoes['es'] = 'Notificaciones';
key_Notificacoes['pt'] = 'Notificações';
key_Notificacoes['fr'] = 'Notifications';
key_Notificacoes['de'] = 'Benachrichtigungen';
key_Notificacoes['nl'] = 'Meldingen';

key_Tutorial['en'] = 'Tutorial';
key_Tutorial['es'] = 'Tutorial';
key_Tutorial['pt'] = 'Tutorial';
key_Tutorial['fr'] = 'Tutorial';
key_Tutorial['de'] = 'Tutorial';
key_Tutorial['nl'] = 'Tutorial';

key_Skip['en'] = 'Skip';
key_Skip['es'] = 'Omitir';
key_Skip['pt'] = 'Skip';
key_Skip['fr'] = 'Skip';
key_Skip['de'] = 'Skip';
key_Skip['nl'] = 'Skip';

key_Add_to['en'] = 'Add to';
key_Add_to['pt'] = 'Adicionar a';
key_Add_to['fr'] = 'Ajouter à';
key_Add_to['de'] = 'Fügen Sie hinzu';
key_Add_to['nl'] = 'Toevoegen aan';

key_Remove_from['en'] = 'Remove from';
key_Remove_from['pt'] = 'Remover de';
key_Remove_from['fr'] = 'Retirer du';
key_Remove_from['de'] = 'Entfernen Sie aus';
key_Remove_from['nl'] = 'Verwijderen uit';

key_Reference['en'] = 'Reference';
key_Reference['pt'] = 'Referência';
key_Reference['fr'] = 'Référence';
key_Reference['de'] = 'Referenz';
key_Reference['nl'] = 'Referentie';

key_Description['en'] = 'Description';
key_Description['pt'] = 'Descrição';
key_Description['fr'] = 'Description';
key_Description['de'] = 'Beschreibung';
key_Description['nl'] = 'Omschrijving';

key_FILTER['en'] = 'FILTER';
key_FILTER['pt'] = 'FILTRAR';
key_FILTER['fr'] = 'FILTRER';
key_FILTER['de'] = 'FILTER';
key_FILTER['nl'] = 'FILTER';

key_Filter['en'] = 'Filter';
key_Filter['pt'] = 'Filtrar';
key_Filter['fr'] = 'Filtrer';
key_Filter['de'] = 'Filter';
key_Filter['nl'] = 'Filter';

key_SORT['en'] = 'SORT';
key_SORT['pt'] = 'ORDENAR';
key_SORT['fr'] = 'TRIER';
key_SORT['de'] = 'SORTIEREN';
key_SORT['nl'] = 'SORTEREN';

key_Sort['en'] = 'Sort';
key_Sort['pt'] = 'Ordenar';
key_Sort['fr'] = 'Trier';
key_Sort['de'] = 'Sortieren';
key_Sort['nl'] = 'Sorteren';

key_BACK['en'] = '';
key_BACK['es'] = '';
key_BACK['pt'] = '';
key_BACK['fr'] = '';
key_BACK['de'] = '';
key_BACK['nl'] = '';

key_COLOR['en'] = 'Color';
key_COLOR['pt'] = 'Cor';
key_COLOR['fr'] = 'Couleur';
key_COLOR['de'] = 'Farbe';
key_COLOR['nl'] = 'Kleur';

key_FAVORITES['en'] = 'FAVORITES';
key_FAVORITES['pt'] = 'FAVORITOS';
key_FAVORITES['fr'] = 'FAVORIS';
key_FAVORITES['de'] = 'FAVORITEN';
key_FAVORITES['nl'] = 'FAVORIETEN';


key_Technical_Sheet['en'] = 'Technical Sheet';
key_Technical_Sheet['pt'] = 'Ficha Técnica';
key_Technical_Sheet['fr'] = 'Fiche technique';
key_Technical_Sheet['de'] = 'Technisches Datenblatt';
key_Technical_Sheet['nl'] = 'Specificaties';

key_Type_of_leather['en'] = 'Type of leather';
key_Type_of_leather['pt'] = 'Tipo de pele';
key_Type_of_leather['fr'] = 'Type de cuir';
key_Type_of_leather['de'] = 'Leder Typ';
key_Type_of_leather['nl'] = 'Type leer';

key_View_Items['en'] = 'View Items';
key_View_Items['pt'] = 'Ver Itens';
key_View_Items['fr'] = 'Voir les articles';
key_View_Items['de'] = 'Artikel anschauen';
key_View_Items['nl'] = 'Items bekijken';

key_Clear_Items['en'] = 'Clear Items';
key_Clear_Items['pt'] = 'Limpar Itens';
key_Clear_Items['fr'] = 'Effacer des Éléments';
key_Clear_Items['de'] = 'Elemente Löschen';
key_Clear_Items['nl'] = 'Items Wissen';

key_SEARCH['en'] = 'SEARCH';
key_SEARCH['pt'] = 'PESQUISA';
key_SEARCH['fr'] = 'CHERCHER';
key_SEARCH['de'] = 'SUCHE';
key_SEARCH['nl'] = 'ZOEKEN';

key_I_AM_SORRY['en'] = 'I AM SORRY!';
key_I_AM_SORRY['pt'] = 'SINTO MUITO!';
key_I_AM_SORRY['fr'] = 'JE SUIS DÉSOLÉ!';
key_I_AM_SORRY['de'] = 'ES TUT MIR LEID!';
key_I_AM_SORRY['nl'] = 'HET SPIJT ME!';

key_VIEW['en'] = 'VIEW';
key_VIEW['pt'] = 'VER';
key_VIEW['fr'] = 'VUE';
key_VIEW['de'] = 'SEHE';
key_VIEW['nl'] = 'KIJK';

key_ACCOUNT['en'] = 'ACCOUNT';
key_ACCOUNT['pt'] = 'CONTA';
key_ACCOUNT['fr'] = 'COMPTE';
key_ACCOUNT['de'] = 'KUNDE';
key_ACCOUNT['nl'] = 'ACCOUNT';

key_LOGIN['en'] = 'LOGIN';
key_LOGIN['pt'] = 'LOGIN';
key_LOGIN['fr'] = 'SE CONNECTER';
key_LOGIN['de'] = 'LOG EIN';
key_LOGIN['nl'] = 'LOG IN';

key_LOGIN2['en'] = 'Login';
key_LOGIN2['pt'] = 'Login';
key_LOGIN2['fr'] = 'Se connecter';
key_LOGIN2['de'] = 'Log ein';
key_LOGIN2['nl'] = 'Log in';

key_All_fields_are_mandatory['en'] = 'All fields are mandatory';
key_All_fields_are_mandatory['pt'] = 'Todos os campos são obrigatórios';
key_All_fields_are_mandatory['fr'] = 'Tous les champs sont obligatoires';
key_All_fields_are_mandatory['de'] = 'Alle Felder sind Pflichtfelder';
key_All_fields_are_mandatory['nl'] = 'Alle velden zijn verplicht';

key_Account_already_exists['en'] = 'Account already exists';
key_Account_already_exists['pt'] = 'A conta já existe';
key_Account_already_exists['fr'] = 'Compte existant';
key_Account_already_exists['de'] = 'Kunde existiert bereits';
key_Account_already_exists['nl'] = 'Account bestaat al';

key_Account_updated['en'] = 'Account updated with success';
key_Account_updated['pt'] = 'Conta atualizada com sucesso';
key_Account_updated['fr'] = 'Compte actualisé avec succès';
key_Account_updated['de'] = 'Kunde-Daten mit Erfolg aktualisiert';
key_Account_updated['nl'] = 'Account met succes bijgewerkt';

key_Account_created['en'] = 'Account created with success, please login now';
key_Account_created['pt'] = 'A conta foi criada com sucesso, pode agora fazer login';
key_Account_created['fr'] = 'Compte créé avec succès, veuillez vous connecter maintenant';
key_Account_created['de'] = 'Kunde-Daten mit Erfolg erstellt, bitte melden Sie sich jetzt an';
key_Account_created['nl'] = 'Account succesvol aangemaakt - meld je nu aan';

key_Invalid_Email['en'] = 'Invalid Email, please verify';
key_Invalid_Email['pt'] = 'Email inválido, por favor, verifique';
key_Invalid_Email['fr'] = 'Email invalide, veuillez vérifier';
key_Invalid_Email['de'] = 'Ungültige E-Mail-Adresse, bitte überprüfen';
key_Invalid_Email['nl'] = 'Ongeldige e-mailadres, gelieve te verifiëren';

key_insertemail['en'] = 'Please insert your username and password';
key_insertemail['pt'] = 'Por favor insira o seu username e password';
key_insertemail['fr'] = 'Insérez votre nom d\'utilisateur et mot de passe s\'il vous plaît';
key_insertemail['de'] = 'Bitte geben Sie Ihren Benutzername und Ihr Passwort ein';
key_insertemail['nl'] = 'Voer uw gebruikersnaam en wachtwoord in';

key_emailincrorreto['en'] = 'The email/password don\'t exist or are incorrect!';
key_emailincrorreto['pt'] = 'O email/password não existem ou estão incorretos';
key_emailincrorreto['fr'] = 'Nom d\'utilisateur / mot de passe n\'existe pas ou est incorrect!';
key_emailincrorreto['de'] = 'Die Benutzername / Passwort existiert nicht oder die ist falsch!';
key_emailincrorreto['nl'] = 'Het username/wachtwoord bestaat niet of is incorrect!';

key_userincrorreto['en'] = 'The username/password don\'t exist or are incorrect!';
key_userincrorreto['pt'] = 'O username/password não existem ou estão incorretos';
key_userincrorreto['fr'] = 'Nom d\'utilisateur / mot de passe n\'existe pas ou est incorrect!';
key_userincrorreto['de'] = 'Die Benutzername / Passwort existiert nicht oder die ist falsch!';
key_userincrorreto['nl'] = 'Het username/wachtwoord bestaat niet of is incorrect!';

key_Thickness['en'] = 'Thickness';
key_Thickness['pt'] = 'Espessura';
key_Thickness['fr'] = 'Épaisseur';
key_Thickness['de'] = 'Stärke';
key_Thickness['nl'] = 'Dikte';

key_remarks['en'] = 'Remarks';
key_remarks['pt'] = 'Observação';
key_remarks['fr'] = 'Observation';
key_remarks['de'] = 'Bemerkung';
key_remarks['nl'] = 'Opmerking';

key_Maintenance['en'] = 'Maintenance';
key_Maintenance['pt'] = 'Manutenção';
key_Maintenance['fr'] = 'Manutention';
key_Maintenance['de'] = 'Wartung';
key_Maintenance['nl'] = 'Onderhoud';

key_Lingua['en'] = 'Language';
key_Lingua['pt'] = 'Língua';
key_Lingua['fr'] = 'Langage';
key_Lingua['de'] = 'Sprache';
key_Lingua['nl'] = 'Taal';

key_Contactos['en'] = 'Contacts';
key_Contactos['es'] = 'Contactos';
key_Contactos['pt'] = 'Contatos';
key_Contactos['fr'] = 'Contacts';
key_Contactos['de'] = 'Kontakte';
key_Contactos['nl'] = 'Contactpersonen';

key_termos_legais['en'] = 'Legal Informations';
key_termos_legais['es'] = 'Términos legales';
key_termos_legais['pt'] = 'Termos Legais';
key_termos_legais['fr'] = 'Mentions légales';
key_termos_legais['de'] = 'Rechtliche Hinweise';
key_termos_legais['nl'] = 'Juridische informatie';

key_termos_legais2['en'] = 'Legal Informations';
key_termos_legais2['es'] = 'Términos legales';
key_termos_legais2['pt'] = 'Termos Legais';
key_termos_legais2['fr'] = 'Mentions légales';
key_termos_legais2['de'] = 'Rechtliche Hinweise';
key_termos_legais2['nl'] = 'Juridische informatie';

key_sobre_nos['en'] = 'About Us';
key_sobre_nos['es'] = 'Sobre nosotros';
key_sobre_nos['pt'] = 'Sobre Nós';
key_sobre_nos['fr'] = 'Qui sommes-nous';
key_sobre_nos['de'] = 'Über uns';
key_sobre_nos['nl'] = 'Informatie';

key_sobre_nos2['en'] = 'About Us';
key_sobre_nos2['es'] = 'Sobre nosotros';
key_sobre_nos2['pt'] = 'Sobre Nós';
key_sobre_nos2['fr'] = 'Qui sommes-nous';
key_sobre_nos2['de'] = 'Über uns';
key_sobre_nos2['nl'] = 'Informatie';

key_contactos_menu['en'] = 'Contacts';
key_contactos_menu['es'] = 'Contactos';
key_contactos_menu['pt'] = 'Contatos';
key_contactos_menu['fr'] = 'Contacts';
key_contactos_menu['de'] = 'Kontakte';
key_contactos_menu['nl'] = 'Contactpersonen';

key_sobre_nos2_menu['en'] = 'About Us';
key_sobre_nos2_menu['es'] = 'Sobre nosotros';
key_sobre_nos2_menu['pt'] = 'Sobre Nós';
key_sobre_nos2_menu['fr'] = 'Qui sommes-nous';
key_sobre_nos2_menu['de'] = 'Über uns';
key_sobre_nos2_menu['nl'] = 'Informatie';

key_termos_legais2_menu['en'] = 'Legal Informations';
key_termos_legais2_menu['es'] = 'Términos legales';
key_termos_legais2_menu['pt'] = 'Termos Legais';
key_termos_legais2_menu['fr'] = 'Mentions légales';
key_termos_legais2_menu['de'] = 'Rechtliche Hinweise';
key_termos_legais2_menu['nl'] = 'Juridische informatie';

key_mudar_password2_menu['pt'] = 'Mudar Password';
key_mudar_password2_menu['es'] = 'Cambia La Contraseña';
key_mudar_password2_menu['fr'] = '';
key_mudar_password2_menu['de'] = '';
key_mudar_password2_menu['nl'] = '';

key_Logout['en'] = 'Logout';
key_Logout['pt'] = 'Sair';
key_Logout['fr'] = 'Se déconnecter';
key_Logout['de'] = 'Logout';
key_Logout['nl'] = 'Logout';

key_NEW_CUSTOM_PALLETE['en'] = 'NEW';
key_NEW_CUSTOM_PALLETE['pt'] = 'NOVO';
key_NEW_CUSTOM_PALLETE['fr'] = 'NOUVEAU';
key_NEW_CUSTOM_PALLETE['de'] = 'NEU';
key_NEW_CUSTOM_PALLETE['nl'] = 'NIEUW';

key_VIEW_CUSTOM_PALLETE['en'] = 'VIEW';
key_VIEW_CUSTOM_PALLETE['pt'] = 'VER';
key_VIEW_CUSTOM_PALLETE['fr'] = 'VUE';
key_VIEW_CUSTOM_PALLETE['de'] = 'ANSEHEN';
key_VIEW_CUSTOM_PALLETE['nl'] = 'WEERGAVE';



key_conta['pt'] = 'Dados da Conta';
key_conta['es'] = 'Información de la cuenta';
key_conta['fr'] = '';
key_conta['de'] = '';
key_conta['nl'] = '';

key_conta2['pt'] = 'Conta';
key_conta2['es'] = 'Cuenta';
key_conta2['fr'] = '';
key_conta2['de'] = '';
key_conta2['nl'] = '';

key_reservas['pt'] = 'Reservas';
key_reservas['es'] = 'Reservas';
key_reservas['fr'] = '';
key_reservas['de'] = '';
key_reservas['nl'] = '';

key_reservas2['pt'] = 'Reservas';
key_reservas2['es'] = 'Reservas';
key_reservas2['fr'] = '';
key_reservas2['de'] = '';
key_reservas2['nl'] = '';

key_pagamentos['pt'] = 'Pagamentos';
key_pagamentos['es'] = 'Pagos';
key_pagamentos['fr'] = '';
key_pagamentos['de'] = '';
key_pagamentos['nl'] = '';

key_pagamentos2['pt'] = 'Pagamentos';
key_pagamentos2['es'] = 'Pagos';
key_pagamentos2['fr'] = '';
key_pagamentos2['de'] = '';
key_pagamentos2['nl'] = '';

key_pagamentos3['pt'] = 'Pagamentos:';
key_pagamentos3['es'] = 'Pagos:';
key_pagamentos3['fr'] = '';
key_pagamentos3['de'] = '';
key_pagamentos3['nl'] = '';

key_consumos['pt'] = 'Consumos';
key_consumos['es'] = 'Consumo';
key_consumos['fr'] = '';
key_consumos['de'] = '';
key_consumos['nl'] = '';

key_mensagens['pt'] = 'Mensagens';
key_mensagens['es'] = 'Publicaciones';
key_mensagens['fr'] = '';
key_mensagens['de'] = '';
key_mensagens['nl'] = '';

key_Logout['pt'] = 'Logout';
key_Logout['es'] = 'Cerrar sesión';
key_Logout['fr'] = '';
key_Logout['de'] = '';
key_Logout['nl'] = '';

key_gastos['pt'] = 'GASTOS';
key_gastos['es'] = 'GASTO';
key_gastos['fr'] = '';
key_gastos['de'] = '';
key_gastos['nl'] = '';

key_limites['pt'] = 'LIMITES';
key_limites['es'] = 'LÍMITES';
key_limites['fr'] = '';
key_limites['de'] = '';
key_limites['nl'] = '';

key_limite_diario['pt'] = 'LIMITE DIÁRIO';
key_limite_diario['es'] = 'LÍMITE DIARIO';
key_limite_diario['fr'] = '';
key_limite_diario['de'] = '';
key_limite_diario['nl'] = '';

key_limite_semanal['pt'] = 'LIMITE SEMANAL';
key_limite_semanal['es'] = 'LÍMITE SEMANAL';
key_limite_semanal['fr'] = '';
key_limite_semanal['de'] = '';
key_limite_semanal['nl'] = '';

key_limite_mensal['pt'] = 'LIMITE MENSAL';
key_limite_mensal['es'] = 'LÍMITE MENSUAL';
key_limite_mensal['fr'] = '';
key_limite_mensal['de'] = '';
key_limite_mensal['nl'] = '';

key_mudar_password['pt'] = 'Mudar Password';
key_mudar_password['es'] = 'Cambia La Contraseña';
key_mudar_password['fr'] = '';
key_mudar_password['de'] = '';
key_mudar_password['nl'] = '';

key_mudar_password2['pt'] = 'Mudar Password';
key_mudar_password2['es'] = 'Cambia La Contraseña';
key_mudar_password2['fr'] = '';
key_mudar_password2['de'] = '';
key_mudar_password2['nl'] = '';

key_raio_pesquisa['pt'] = 'Raio de Pesquisa';
key_raio_pesquisa['es'] = 'Radio de búsqueda';
key_raio_pesquisa['fr'] = '';
key_raio_pesquisa['de'] = '';
key_raio_pesquisa['nl'] = '';

key_morada_contactos['pt'] = 'Morada:';
key_morada_contactos['es'] = 'Habla a:';
key_morada_contactos['fr'] = '';
key_morada_contactos['de'] = '';
key_morada_contactos['nl'] = '';

key_para_correspondencia['pt'] = 'Para Correspondência:';
key_para_correspondencia['es'] = 'Por Correspondencia:';
key_para_correspondencia['fr'] = '';
key_para_correspondencia['de'] = '';
key_para_correspondencia['nl'] = '';

key_telefone['pt'] = 'Telefone:';
key_telefone['es'] = 'Teléfono:';
key_telefone['fr'] = '';
key_telefone['de'] = '';
key_telefone['nl'] = '';

key_telemovel['pt'] = 'Telemóvel:';
key_telemovel['es'] = 'Teléfono móvil:';
key_telemovel['fr'] = '';
key_telemovel['de'] = '';
key_telemovel['nl'] = '';

key_horario['pt'] = 'Horário de Atendimento:';
key_horario['es'] = 'Horario de Atención:';
key_horario['fr'] = '';
key_horario['de'] = '';
key_horario['nl'] = '';

key_comercial['pt'] = 'Comercial:';
key_comercial['es'] = 'Comercial:';
key_comercial['fr'] = '';
key_comercial['de'] = '';
key_comercial['nl'] = '';

key_financeiro['pt'] = 'Financeiro:';
key_financeiro['es'] = 'Financiero:';
key_financeiro['fr'] = '';
key_financeiro['de'] = '';
key_financeiro['nl'] = '';

key_carregar_saldo['pt'] = 'CARREGAR SALDO';
key_carregar_saldo['es'] = 'EQUILIBRO DE CARGA';
key_carregar_saldo['fr'] = '';
key_carregar_saldo['de'] = '';
key_carregar_saldo['nl'] = '';

key_gestao_frota['pt'] = 'GESTÃO DE FROTA';
key_gestao_frota['es'] = 'GESTIÓN DE FLOTAS';
key_gestao_frota['fr'] = '';
key_gestao_frota['de'] = '';
key_gestao_frota['nl'] = '';

key_transacoes['pt'] = 'TRANSAÇÕES';
key_transacoes['es'] = 'ACTAS';
key_transacoes['fr'] = '';
key_transacoes['de'] = '';
key_transacoes['nl'] = '';

key_abastecimentos['pt'] = 'ABASTECIMENTOS';
key_abastecimentos['es'] = 'SUMINISTROS';
key_abastecimentos['fr'] = '';
key_abastecimentos['de'] = '';
key_abastecimentos['nl'] = '';

key_extratos_faturas['pt'] = 'EXTRATOS/<br>FATURAS';
key_extratos_faturas['es'] = 'EXTRACTOS/<br>FACTURAS';
key_extratos_faturas['fr'] = '';
key_extratos_faturas['de'] = '';
key_extratos_faturas['nl'] = '';

key_precos_acordados['pt'] = 'PREÇOS ACORDADOS';
key_precos_acordados['es'] = 'PRECIOS ACORDADOS';
key_precos_acordados['fr'] = '';
key_precos_acordados['de'] = '';
key_precos_acordados['nl'] = '';

key_historico_utilizacao['pt'] = 'HISTÓRICO UTILIZAÇÃO';
key_historico_utilizacao['es'] = 'HISTORIA DE USO';
key_historico_utilizacao['fr'] = '';
key_historico_utilizacao['de'] = '';
key_historico_utilizacao['nl'] = '';

key_permissoes['pt'] = 'PERMISSÕES';
key_permissoes['es'] = 'PERMISOS';
key_permissoes['fr'] = '';
key_permissoes['de'] = '';
key_permissoes['nl'] = '';

key_meu_perfil['pt'] = 'O MEU PERFIL';
key_meu_perfil['es'] = 'MI PERFIL';
key_meu_perfil['fr'] = '';
key_meu_perfil['de'] = '';
key_meu_perfil['nl'] = '';

key_postos['pt'] = 'Postos';
key_postos['es'] = 'Gasolineras';
key_postos['fr'] = '';
key_postos['de'] = '';
key_postos['nl'] = '';

key_morada['pt'] = 'Morada:';
key_morada['es'] = 'Habla a:';
key_morada['fr'] = '';
key_morada['de'] = '';
key_morada['nl'] = '';

key_servicos['pt'] = 'Serviços<i class="fa fa-angle-down" aria-hidden="true"></i>';
key_servicos['es'] = 'Servicios<i class="fa fa-angle-down" aria-hidden="true"></i>';
key_servicos['fr'] = '';
key_servicos['de'] = '';
key_servicos['nl'] = '';

key_navegacao['pt'] = 'Direções';
key_navegacao['es'] = 'Direcciones';
key_navegacao['fr'] = '';
key_navegacao['de'] = '';
key_navegacao['nl'] = '';

key_abastecer['pt'] = 'Abastecer';
key_abastecer['es'] = 'Cargar';
key_abastecer['fr'] = '';
key_abastecer['de'] = '';
key_abastecer['nl'] = '';

key_pagar_loja['pt'] = 'Pagar na loja';
key_pagar_loja['es'] = 'Pagar en tienda';
key_pagar_loja['fr'] = '';
key_pagar_loja['de'] = '';
key_pagar_loja['nl'] = '';

key_bomba['pt'] = 'BOMBA';
key_bomba['es'] = 'GASOLINERA';
key_bomba['fr'] = '';
key_bomba['de'] = '';
key_bomba['nl'] = '';

key_preparar_abastecer['pt'] = 'Prepara-se para abastecer em:';
key_preparar_abastecer['es'] = 'Prepare-se para fornecer em:';
key_preparar_abastecer['fr'] = '';
key_preparar_abastecer['de'] = '';
key_preparar_abastecer['nl'] = '';

key_posto_trad['pt'] = 'Posto:';
key_posto_trad['es'] = 'Posto:';
key_posto_trad['fr'] = '';
key_posto_trad['de'] = '';
key_posto_trad['nl'] = '';

key_bomba2['pt'] = 'Bomba:';
key_bomba2['es'] = 'Bomba:';
key_bomba2['fr'] = '';
key_bomba2['de'] = '';
key_bomba2['nl'] = '';

key_produto['pt'] = 'Produto:';
key_produto['es'] = 'Producto:';
key_produto['fr'] = '';
key_produto['de'] = '';
key_produto['nl'] = '';

key_litros_disponiveis['pt'] = 'Litros disponíveis:';
key_litros_disponiveis['es'] = 'Litros disponibles:';
key_litros_disponiveis['fr'] = '';
key_litros_disponiveis['de'] = '';
key_litros_disponiveis['nl'] = '';

key_kms_veiculo['pt'] = 'Introduza os <b>Kms</b> do veículo:';
key_kms_veiculo['es'] = 'Ingrese <b>Kms</b> del vehículo:';
key_kms_veiculo['fr'] = '';
key_kms_veiculo['de'] = '';
key_kms_veiculo['nl'] = '';

key_kms_veiculo2['pt'] = '<b>Kms</b> do veículo:';
key_kms_veiculo2['es'] = '<b>Kms</b> del vehículo:';
key_kms_veiculo2['fr'] = '';
key_kms_veiculo2['de'] = '';
key_kms_veiculo2['nl'] = '';

key_cancelar_btn['pt'] = 'Cancelar';
key_cancelar_btn['es'] = 'Cancelar';
key_cancelar_btn['fr'] = '';
key_cancelar_btn['de'] = '';
key_cancelar_btn['nl'] = '';

key_validar_btn['pt'] = 'Confirmar';
key_validar_btn['es'] = 'Confirmar';
key_validar_btn['fr'] = '';
key_validar_btn['de'] = '';
key_validar_btn['nl'] = '';

key_mensagem_trad['pt'] = 'A <b>G27</b> agradece a sua preferência e confiança!';
key_mensagem_trad['es'] = '¡<b>G27</b> le agradece su preferencia y confianza!';
key_mensagem_trad['fr'] = '';
key_mensagem_trad['de'] = '';
key_mensagem_trad['nl'] = '';

key_pin_label['pt'] = 'Introduza o seu <b>PIN G27</b>';
key_pin_label['es'] = 'Introduce tu <b>PIN G27</b>';
key_pin_label['fr'] = '';
key_pin_label['de'] = '';
key_pin_label['nl'] = '';

key_titulo_pagamento['pt'] = 'Pagamento';
key_titulo_pagamento['es'] = 'Pago';
key_titulo_pagamento['fr'] = '';
key_titulo_pagamento['de'] = '';
key_titulo_pagamento['nl'] = '';

key_titulo_pagamentos['pt'] = 'Pagamentos';
key_titulo_pagamentos['es'] = 'Pagos';
key_titulo_pagamentos['fr'] = '';
key_titulo_pagamentos['de'] = '';
key_titulo_pagamentos['nl'] = '';

key_resumo_abastecimento['pt'] = 'RESUMO DO ABASTECIMENTO';
key_resumo_abastecimento['es'] = 'RESUMEN DE SUMINISTRO';
key_resumo_abastecimento['fr'] = '';
key_resumo_abastecimento['de'] = '';
key_resumo_abastecimento['nl'] = '';

key_nao_concretizada['pt'] = 'Operação Não Concretizada';
key_nao_concretizada['es'] = 'Operación inacabada';
key_nao_concretizada['fr'] = '';
key_nao_concretizada['de'] = '';
key_nao_concretizada['nl'] = '';

key_erro['pt'] = 'ERRO';
key_erro['es'] = 'ERROR';
key_erro['fr'] = '';
key_erro['de'] = '';
key_erro['nl'] = '';

key_btn_voltar['pt'] = 'VOLTAR';
key_btn_voltar['es'] = 'VUELVE';
key_btn_voltar['fr'] = '';
key_btn_voltar['de'] = '';
key_btn_voltar['nl'] = '';

key_btn_gravar['pt'] = 'GRAVAR';
key_btn_gravar['es'] = 'GRABAR';
key_btn_gravar['fr'] = '';
key_btn_gravar['de'] = '';
key_btn_gravar['nl'] = '';

key_nao_pagamento_finalizado['pt'] = 'Não foi possível Finalizar o Processo de Pagamento..';
key_nao_pagamento_finalizado['es'] = 'No fue posible finalizar el proceso de pago.';
key_nao_pagamento_finalizado['fr'] = '';
key_nao_pagamento_finalizado['de'] = '';
key_nao_pagamento_finalizado['nl'] = '';

key_pode_abastecer['pt'] = 'Pode Abastecer';
key_pode_abastecer['es'] = 'Puede Suministrar';
key_pode_abastecer['fr'] = '';
key_pode_abastecer['de'] = '';
key_pode_abastecer['nl'] = '';

key_confirmacao_pagamento['pt'] = 'Confirmação Pagamento';
key_confirmacao_pagamento['es'] = 'Confirmación de pago';
key_confirmacao_pagamento['fr'] = '';
key_confirmacao_pagamento['de'] = '';
key_confirmacao_pagamento['nl'] = '';

key_aguarda_pagamento['pt'] = 'Aguardando pagamentos para validar';
key_aguarda_pagamento['es'] = 'Esperando pagos para validar';
key_aguarda_pagamento['fr'] = '';
key_aguarda_pagamento['de'] = '';
key_aguarda_pagamento['nl'] = '';

key_actualizar_pagamentos['pt'] = 'Actualizar Pagamentos';
key_actualizar_pagamentos['es'] = 'Actualizar Pagos';
key_actualizar_pagamentos['fr'] = '';
key_actualizar_pagamentos['de'] = '';
key_actualizar_pagamentos['nl'] = '';

key_aguardar_confirmacao_pagamento['pt'] = 'A aguardar Confirmação de Pagamento';
key_aguardar_confirmacao_pagamento['es'] = 'En espera de confirmación de pago';
key_aguardar_confirmacao_pagamento['fr'] = '';
key_aguardar_confirmacao_pagamento['de'] = '';
key_aguardar_confirmacao_pagamento['nl'] = '';

key_gerar_novo_token['pt'] = 'GERAR NOVO TOKEN';
key_gerar_novo_token['es'] = 'GENERAR NUEVO TOKEN';
key_gerar_novo_token['fr'] = '';
key_gerar_novo_token['de'] = '';
key_gerar_novo_token['nl'] = '';

key_iniciar_pagamento['pt'] = 'INICIAR PAGAMENTO';
key_iniciar_pagamento['es'] = 'INICIAR PAGO';
key_iniciar_pagamento['fr'] = '';
key_iniciar_pagamento['de'] = '';
key_iniciar_pagamento['nl'] = '';

key_historico_pagamento['pt'] = 'HISTÓRICO PAGAMENTOS';
key_historico_pagamento['es'] = 'HISTORIA DE PAGOS';
key_historico_pagamento['fr'] = '';
key_historico_pagamento['de'] = '';
key_historico_pagamento['nl'] = '';

key_historico_pagamento_titulo['pt'] = 'Histórico Pagamentos';
key_historico_pagamento_titulo['es'] = 'Historia de Pagos';
key_historico_pagamento_titulo['fr'] = '';
key_historico_pagamento_titulo['de'] = '';
key_historico_pagamento_titulo['nl'] = '';

key_definicao_posto['pt'] = 'DEFINIÇÃO DE POSTO';
key_definicao_posto['es'] = 'DEFINICIÓN DE GASOLINERA';
key_definicao_posto['fr'] = '';
key_definicao_posto['de'] = '';
key_definicao_posto['nl'] = '';

key_verificar_token['pt'] = 'VERIFICAR TOKEN';
key_verificar_token['es'] = 'COMPROBAR TOKEN';
key_verificar_token['fr'] = '';
key_verificar_token['de'] = '';
key_verificar_token['nl'] = '';

key_gestao_cartao_titulo['pt'] = 'Gestão Cartão';
key_gestao_cartao_titulo['es'] = 'Administración de Tarjetas';
key_gestao_cartao_titulo['fr'] = '';
key_gestao_cartao_titulo['de'] = '';
key_gestao_cartao_titulo['nl'] = '';

key_alterar_cartao['pt'] = 'ALTERAR CARTÃO';
key_alterar_cartao['es'] = 'CAMBIO DE TARJETA';
key_alterar_cartao['fr'] = '';
key_alterar_cartao['de'] = '';
key_alterar_cartao['nl'] = '';

key_criar_cartao['pt'] = 'CRIAR CARTÃO';
key_criar_cartao['es'] = 'CREAT TARJETA';
key_criar_cartao['fr'] = '';
key_criar_cartao['de'] = '';
key_criar_cartao['nl'] = '';

key_gestao_matriculas_titulo['pt'] = 'Gestão Matrículas';
key_gestao_matriculas_titulo['es'] = 'Gestión de Inscripción';
key_gestao_matriculas_titulo['fr'] = '';
key_gestao_matriculas_titulo['de'] = '';
key_gestao_matriculas_titulo['nl'] = '';

key_alterar_matricula['pt'] = 'ALTERAR MATRÍCULA';
key_alterar_matricula['es'] = 'CAMBIO DE INSCRIPCIÓN';
key_alterar_matricula['fr'] = '';
key_alterar_matricula['de'] = '';
key_alterar_matricula['nl'] = '';

key_criar_matricula['pt'] = 'CRIAR MATRÍCULA';
key_criar_matricula['es'] = 'CREAR INSCRIPCIÓN';
key_criar_matricula['fr'] = '';
key_criar_matricula['de'] = '';
key_criar_matricula['nl'] = '';

key_abastecimento_confirmado['pt'] = 'Abastecimento concluído';
key_abastecimento_confirmado['es'] = 'Suministro con Éxito.';
key_abastecimento_confirmado['fr'] = '';
key_abastecimento_confirmado['de'] = '';
key_abastecimento_confirmado['nl'] = '';

key_aguardar_confirmacao['pt'] = 'Aguardar Confirmação';
key_aguardar_confirmacao['es'] = 'Esperar la confirmación';
key_aguardar_confirmacao['fr'] = '';
key_aguardar_confirmacao['de'] = '';
key_aguardar_confirmacao['nl'] = '';

key_aguardar_confirmacao_mensagem['pt'] = 'A Aguardar Confirmação do Cliente.';
key_aguardar_confirmacao_mensagem['es'] = 'En espera de la confirmación del cliente.';
key_aguardar_confirmacao_mensagem['fr'] = '';
key_aguardar_confirmacao_mensagem['de'] = '';
key_aguardar_confirmacao_mensagem['nl'] = '';

key_gerar_token['pt'] = 'GERAR TOKEN';
key_gerar_token['es'] = 'GENERAR TOKEN';
key_gerar_token['fr'] = '';
key_gerar_token['de'] = '';
key_gerar_token['nl'] = '';

key_pagamentos_caract['pt'] = 'Pagamento:';
key_pagamentos_caract['es'] = 'Pago:';
key_pagamentos_caract['fr'] = '';
key_pagamentos_caract['de'] = '';
key_pagamentos_caract['nl'] = '';

key_cliente_trad['pt'] = 'Cliente:';
key_cliente_trad['es'] = 'Cliente:';
key_cliente_trad['fr'] = '';
key_cliente_trad['de'] = '';
key_cliente_trad['nl'] = '';

key_posto_caract['pt'] = 'Posto:';
key_posto_caract['es'] = 'Gasolinera:';
key_posto_caract['fr'] = '';
key_posto_caract['de'] = '';
key_posto_caract['nl'] = '';

key_produto_caract['pt'] = 'Produto:';
key_produto_caract['es'] = 'Producto:';
key_produto_caract['fr'] = '';
key_produto_caract['de'] = '';
key_produto_caract['nl'] = '';

key_litros_caract['pt'] = 'Litros:';
key_litros_caract['es'] = 'Litros:';
key_litros_caract['fr'] = '';
key_litros_caract['de'] = '';
key_litros_caract['nl'] = '';

key_motorista_caract['pt'] = 'Motorista:';
key_motorista_caract['es'] = 'Conductor:';
key_motorista_caract['fr'] = '';
key_motorista_caract['de'] = '';
key_motorista_caract['nl'] = '';

key_matricula_caract['pt'] = 'Matrícula:';
key_matricula_caract['es'] = 'Registro:';
key_matricula_caract['fr'] = '';
key_matricula_caract['de'] = '';
key_matricula_caract['nl'] = '';

key_telemovel_caract['pt'] = 'Telemóvel:';
key_telemovel_caract['es'] = 'Teléfono móvil:';
key_telemovel_caract['fr'] = '';
key_telemovel_caract['de'] = '';
key_telemovel_caract['nl'] = '';

key_data_caract['pt'] = 'Data:';
key_data_caract['es'] = 'Fecha:';
key_data_caract['fr'] = '';
key_data_caract['de'] = '';
key_data_caract['nl'] = '';

key_estado_caract['pt'] = 'Estado:';
key_estado_caract['es'] = 'Estado:';
key_estado_caract['fr'] = '';
key_estado_caract['de'] = '';
key_estado_caract['nl'] = '';

key_valor_caract['pt'] = 'Valor:';
key_valor_caract['es'] = 'Valor:';
key_valor_caract['fr'] = '';
key_valor_caract['de'] = '';
key_valor_caract['nl'] = '';

key_reserva_caract['pt'] = 'Reserva:';
key_reserva_caract['es'] = 'Reserva:';
key_reserva_caract['fr'] = '';
key_reserva_caract['de'] = '';
key_reserva_caract['nl'] = '';

key_servico_caract['pt'] = 'Serviço:';
key_servico_caract['es'] = 'Servicio:';
key_servico_caract['fr'] = '';
key_servico_caract['de'] = '';
key_servico_caract['nl'] = '';

key_metodo_pagamento_caract['pt'] = 'Método Pagamento:';
key_metodo_pagamento_caract['es'] = 'Método de Pago:';
key_metodo_pagamento_caract['fr'] = '';
key_metodo_pagamento_caract['de'] = '';
key_metodo_pagamento_caract['nl'] = '';

key_nao_existe_pagamentos['pt'] = 'Não existe pagamentos.';
key_nao_existe_pagamentos['es'] = 'No hay pagos.';
key_nao_existe_pagamentos['fr'] = '';
key_nao_existe_pagamentos['de'] = '';
key_nao_existe_pagamentos['nl'] = '';

key_insira_seu_telemovel['pt'] = 'Insira o seu <b>Telemóvel</b>';
key_insira_seu_telemovel['es'] = 'Inserte su <b>Teléfono Móvil</b>';
key_insira_seu_telemovel['fr'] = '';
key_insira_seu_telemovel['de'] = '';
key_insira_seu_telemovel['nl'] = '';

key_escolha_produto['pt'] = 'Escolha o <b>Produto</b>:';
key_escolha_produto['es'] = 'Elegir <b>Producto</b>:';
key_escolha_produto['fr'] = '';
key_escolha_produto['de'] = '';
key_escolha_produto['nl'] = '';

key_seu_limite['pt'] = 'O seu limite de <b>Litros</b> é:';
key_seu_limite['es'] = 'Su límite de <b>Litros</b> es:';
key_seu_limite['fr'] = '';
key_seu_limite['de'] = '';
key_seu_limite['nl'] = '';

key_matricula_veiculo['pt'] = '<b>Matrícula</b> do Veículo';
key_matricula_veiculo['es'] = '<b>Registro</b> de Vehículo';
key_matricula_veiculo['fr'] = '';
key_matricula_veiculo['de'] = '';
key_matricula_veiculo['nl'] = '';

key_escolha_posto['pt'] = 'Escolha o <b>Posto</b>:';
key_escolha_posto['es'] = 'Elige una <b>Gasolinera</b>:';
key_escolha_posto['fr'] = '';
key_escolha_posto['de'] = '';
key_escolha_posto['nl'] = '';

key_escolha_telemovel['pt'] = '<b>Telemóvel</b>';
key_escolha_telemovel['es'] = '<b>Teléfono Móvil</b>';
key_escolha_telemovel['fr'] = '';
key_escolha_telemovel['de'] = '';
key_escolha_telemovel['nl'] = '';

key_litros_abastecidos['pt'] = '<b>Litros</b> Abastecidos';
key_litros_abastecidos['es'] = '<b>Litros</b> llenos';
key_litros_abastecidos['fr'] = '';
key_litros_abastecidos['de'] = '';
key_litros_abastecidos['nl'] = '';

key_nome_cliente['pt'] = 'Nome do <b>Cliente</b>';
key_nome_cliente['es'] = 'Nombre del <b>Cliente</b>';
key_nome_cliente['fr'] = '';
key_nome_cliente['de'] = '';
key_nome_cliente['nl'] = '';

key_alterar_limites_titulo['pt'] = 'Alterar Limites';
key_alterar_limites_titulo['es'] = 'Cambiar umbrales';
key_alterar_limites_titulo['fr'] = '';
key_alterar_limites_titulo['de'] = '';
key_alterar_limites_titulo['nl'] = '';

key_limite_diario_pos['pt'] = 'Limite <b>Diário</b>';
key_limite_diario_pos['es'] = 'Límite <b>Diario</b>';
key_limite_diario_pos['fr'] = '';
key_limite_diario_pos['de'] = '';
key_limite_diario_pos['nl'] = '';

key_limite_semanal_pos['pt'] = 'Limite <b>Semanal</b>';
key_limite_semanal_pos['es'] = 'Límite <b>Semanal</b>';
key_limite_semanal_pos['fr'] = '';
key_limite_semanal_pos['de'] = '';
key_limite_semanal_pos['nl'] = '';

key_limite_mensal_pos['pt'] = 'Limite <b>Mensal</b>';
key_limite_mensal_pos['es'] = 'Límite <b>Mensual</b>';
key_limite_mensal_pos['fr'] = '';
key_limite_mensal_pos['de'] = '';
key_limite_mensal_pos['nl'] = '';

key_criar_cartao_titulo['pt'] = 'Criar Cartão';
key_criar_cartao_titulo['es'] = 'Crear Tarjeta';
key_criar_cartao_titulo['fr'] = '';
key_criar_cartao_titulo['de'] = '';
key_criar_cartao_titulo['nl'] = '';

key_condutor['pt'] = '<b>Condutor</b>';
key_condutor['es'] = '<b>Conductor</b>';
key_condutor['fr'] = '';
key_condutor['de'] = '';
key_condutor['nl'] = '';

key_matricula['pt'] = '<b>Matrícula</b>';
key_matricula['es'] = '<b>Registro</b>';
key_matricula['fr'] = '';
key_matricula['de'] = '';
key_matricula['nl'] = '';

key_alterar_cartao_titulo['pt'] = 'Alterar Cartão';
key_alterar_cartao_titulo['es'] = 'Cambiar Tarjeta';
key_alterar_cartao_titulo['fr'] = '';
key_alterar_cartao_titulo['de'] = '';
key_alterar_cartao_titulo['nl'] = '';

key_alterar_matricula_titulo['pt'] = 'Alterar Matrícula';
key_alterar_matricula_titulo['es'] = 'Cambiar Registro';
key_alterar_matricula_titulo['fr'] = '';
key_alterar_matricula_titulo['de'] = '';
key_alterar_matricula_titulo['nl'] = '';

key_diesel_profissional['pt'] = 'Diesel Profissional:';
key_diesel_profissional['es'] = 'Diesel Profisional:';
key_diesel_profissional['fr'] = '';
key_diesel_profissional['de'] = '';
key_diesel_profissional['nl'] = '';

key_criar_matricula_titulo['pt'] = 'Criar Matrícula';
key_criar_matricula_titulo['es'] = 'Crear Registro';
key_criar_matricula_titulo['fr'] = '';
key_criar_matricula_titulo['de'] = '';
key_criar_matricula_titulo['nl'] = '';

key_operacao_cancelada_titulo['pt'] = 'Operação Cancelada';
key_operacao_cancelada_titulo['es'] = 'Operación Cancelada';
key_operacao_cancelada_titulo['fr'] = '';
key_operacao_cancelada_titulo['de'] = '';
key_operacao_cancelada_titulo['nl'] = '';

key_pagamento_efectuado_sucesso['pt'] = 'Pagamento Efectuado com sucesso.';
key_pagamento_efectuado_sucesso['es'] = 'Pago hecho satisfactoriamente.';
key_pagamento_efectuado_sucesso['fr'] = '';
key_pagamento_efectuado_sucesso['de'] = '';
key_pagamento_efectuado_sucesso['nl'] = '';

key_operacao_nao_concretizada_titulo['pt'] = 'Operação Não Concretizada';
key_operacao_nao_concretizada_titulo['es'] = 'Operación Inacabada';
key_operacao_nao_concretizada_titulo['fr'] = '';
key_operacao_nao_concretizada_titulo['de'] = '';
key_operacao_nao_concretizada_titulo['nl'] = '';

key_abastecimento_invalido['pt'] = '<b>Abastecimento Inválido</b>';
key_abastecimento_invalido['es'] = '<b>Suministro Invalido</b>';
key_abastecimento_invalido['fr'] = '';
key_abastecimento_invalido['de'] = '';
key_abastecimento_invalido['nl'] = '';

key_nao_contem_litros_suficientes['pt'] = 'Não contém litros suficientes para o produto seleccionado.';
key_nao_contem_litros_suficientes['es'] = 'No contiene suficientes litros para el producto seleccionado.';
key_nao_contem_litros_suficientes['fr'] = '';
key_nao_contem_litros_suficientes['de'] = '';
key_nao_contem_litros_suficientes['nl'] = '';

key_cancelar_reserva_titulo['pt'] = 'Cancelar Reserva';
key_cancelar_reserva_titulo['es'] = 'Cancelar la Reserva';
key_cancelar_reserva_titulo['fr'] = '';
key_cancelar_reserva_titulo['de'] = '';
key_cancelar_reserva_titulo['nl'] = '';

key_nao_possivel_cancelar_reserva['pt'] = 'Não foi possível cancelar a Reserva.';
key_nao_possivel_cancelar_reserva['es'] = 'No fue posible cancelar la Reserva.';
key_nao_possivel_cancelar_reserva['fr'] = '';
key_nao_possivel_cancelar_reserva['de'] = '';
key_nao_possivel_cancelar_reserva['nl'] = '';

key_definicao_posto_titulo['pt'] = 'Definição de Posto';
key_definicao_posto_titulo['es'] = 'Definición de Gasolinera';
key_definicao_posto_titulo['fr'] = '';
key_definicao_posto_titulo['de'] = '';
key_definicao_posto_titulo['nl'] = '';

key_definir_posto_btn['pt'] = 'Definição de Posto';
key_definir_posto_btn['es'] = 'Definición de Gasolinera';
key_definir_posto_btn['fr'] = '';
key_definir_posto_btn['de'] = '';
key_definir_posto_btn['nl'] = '';

key_verifica_token_titulo['pt'] = 'Definição de Posto';
key_verifica_token_titulo['es'] = 'Definición de Gasolinera';
key_verifica_token_titulo['fr'] = '';
key_verifica_token_titulo['de'] = '';
key_verifica_token_titulo['nl'] = '';

key_numero_telemovel['pt'] = 'Número<b>Telemóvel</b>:';
key_numero_telemovel['es'] = 'Número de <b>Teléfono Móvil</b>:';
key_numero_telemovel['fr'] = '';
key_numero_telemovel['de'] = '';
key_numero_telemovel['nl'] = '';

key_mensagens_titulo['pt'] = 'Mensagens';
key_mensagens_titulo['es'] = 'MENSAJES';
key_mensagens_titulo['fr'] = '';
key_mensagens_titulo['de'] = '';
key_mensagens_titulo['nl'] = '';

key_nova_mensagem_btn['pt'] = 'NOVA MENSAGEM';
key_nova_mensagem_btn['es'] = 'NUEVO MENSAJE';
key_nova_mensagem_btn['fr'] = '';
key_nova_mensagem_btn['de'] = '';
key_nova_mensagem_btn['nl'] = '';

key_mensagem_titulo['pt'] = 'MENSAGEM';
key_mensagem_titulo['es'] = 'MENSAJE';
key_mensagem_titulo['fr'] = '';
key_mensagem_titulo['de'] = '';
key_mensagem_titulo['nl'] = '';

key_consumos_titulo['pt'] = 'Consumos';
key_consumos_titulo['es'] = 'Consumo';
key_consumos_titulo['fr'] = '';
key_consumos_titulo['de'] = '';
key_consumos_titulo['nl'] = '';

key_ver_saldo_titulo['pt'] = 'Ver Saldo';
key_ver_saldo_titulo['es'] = 'Ver Saldo';
key_ver_saldo_titulo['fr'] = '';
key_ver_saldo_titulo['de'] = '';
key_ver_saldo_titulo['nl'] = '';

key_carregar_saldo_titulo['pt'] = 'Carregar Saldo';
key_carregar_saldo_titulo['es'] = 'Equilibro de Carga';
key_carregar_saldo_titulo['fr'] = '';
key_carregar_saldo_titulo['de'] = '';
key_carregar_saldo_titulo['nl'] = '';

key_navegacao_titulo['pt'] = 'Navegação';
key_navegacao_titulo['es'] = 'Navegación';
key_navegacao_titulo['fr'] = '';
key_navegacao_titulo['de'] = '';
key_navegacao_titulo['nl'] = '';

key_como_gerir_matriculas_titulo['pt'] = 'Como posso gerir as Minhas Matrículas?';
key_como_gerir_matriculas_titulo['es'] = '¿Cómo puedo administrar mis inscripciones?';
key_como_gerir_matriculas_titulo['fr'] = '';
key_como_gerir_matriculas_titulo['de'] = '';
key_como_gerir_matriculas_titulo['nl'] = '';

key_como_gerir_meus_limites_titulo['pt'] = 'Como posso gerir os Meus Limites?';
key_como_gerir_meus_limites_titulo['es'] = '¿Cómo puedo administrar Mis límites?';
key_como_gerir_meus_limites_titulo['fr'] = '';
key_como_gerir_meus_limites_titulo['de'] = '';
key_como_gerir_meus_limites_titulo['nl'] = '';

key_como_gerir_minhas_reservas_titulo['pt'] = 'Como posso gerir as Minhas Reservas?';
key_como_gerir_minhas_reservas_titulo['es'] = '¿Cómo puedo gestionar mis reservas?';
key_como_gerir_minhas_reservas_titulo['fr'] = '';
key_como_gerir_minhas_reservas_titulo['de'] = '';
key_como_gerir_minhas_reservas_titulo['nl'] = '';

key_como_posso_realizar_pagamentos_titulo['pt'] = 'Como posso realizar Pagamentos?';
key_como_posso_realizar_pagamentos_titulo['es'] = '¿Cómo puedo hacer los pagos?';
key_como_posso_realizar_pagamentos_titulo['fr'] = '';
key_como_posso_realizar_pagamentos_titulo['de'] = '';
key_como_posso_realizar_pagamentos_titulo['nl'] = '';

key_dados_pessoais_titulo['pt'] = 'Dados Pessoais';
key_dados_pessoais_titulo['es'] = 'Datos Personales';
key_dados_pessoais_titulo['fr'] = '';
key_dados_pessoais_titulo['de'] = '';
key_dados_pessoais_titulo['nl'] = '';

key_carregamentos['pt'] = 'Carregamentos';
key_carregamentos['es'] = 'Subidas';
key_carregamentos['fr'] = '';
key_carregamentos['de'] = '';
key_carregamentos['nl'] = '';

key_pagamentos_pendentes['pt'] = 'Pagamentos Pendentes';
key_pagamentos_pendentes['es'] = 'Pagos pendientes';
key_pagamentos_pendentes['fr'] = '';
key_pagamentos_pendentes['de'] = '';
key_pagamentos_pendentes['nl'] = '';

key_veiculos['pt'] = 'Veículos';
key_veiculos['es'] = 'Veiculos';
key_veiculos['fr'] = '';
key_veiculos['de'] = '';
key_veiculos['nl'] = '';

key_condutores['pt'] = 'Condutores';
key_condutores['es'] = 'Condutores';
key_condutores['fr'] = '';
key_condutores['de'] = '';
key_condutores['nl'] = '';

key_financeira['pt'] = 'Financeira';
key_financeira['es'] = 'Financeira';
key_financeira['fr'] = '';
key_financeira['de'] = '';
key_financeira['nl'] = '';

key_configuracoes['pt'] = 'Configuracoes';
key_configuracoes['es'] = 'Configuracoes';
key_configuracoes['fr'] = '';
key_configuracoes['de'] = '';
key_configuracoes['nl'] = '';
