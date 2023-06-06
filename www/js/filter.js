var maxColumn = 4; var produto_ativo = 0; var marca_ativa = 0; var familia_ativa = 0; var HOME = 0; var view_type = 0; var range = 3; var filtro_selecionado = ''; var SITE_HTTP_URL = ''; var PROJETO = ''; var TIPOPAGINA = ''; var imgFolder = '';

if(APP_ON == 1) imgFolder = stored2;
else imgFolder = globalUrl+'files/peles/';

var rowsPerPage = 0; var currentpage = 0; var maxPrice = 0; var minPrice = 0; var sortBy = -1; var sortByTitle = 'title'; var sortByPrice = 'price'; var sortOrder = -1;  var marcas = 0; var marcas_sel = 0; var seach_sel = 0; var search_sel = 0;  var fam_id1 = 0; var fam_id2 = 0; var fam_id3 = 0; var fam_id4 = 0; var fam_id5 = 0; var fam_id6 = 0; var fam_id7 = 0; var fam_id8 = 0; var fam_id9 = 0; var fam_id10 = 0;
if (!('indexOf' in Array.prototype)) 
{
	Array.prototype.indexOf= function(find, i /*opt*/) {
		if (i===undefined) i= 0;
		if (i<0) i+= this.length;
		if (i<0) i= 0;
		for (var n= this.length; i<n; i++)
			if (i in this && this[i]===find)
				return i;
		return -1;
	};
}
function getOffset( el ) 
{
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
function truncateOnWord(str, limit) 
{
	var trimmable = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF';
	var reg = new RegExp('(?=[' + trimmable + '])');
	var words = str.split(reg);
	var count = 0;
	return words.filter(function(word) {
		count += word.length;
		return count <= limit;
	}).join('');
}
function trim(str) 
{
    return str.replace(/\s+/g, '');;
}
function include(arr,obj)
{
	if(arr) return (arr.indexOf(obj) != -1);
}
function inArray(needle, haystack)
{
	var length = haystack.length;
	for(var i = 0; i < length; i++)
	{
		if(haystack[i] == needle) return true;
	}
	return false;
}
function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}
function arrayMax(arr) {
  var len = arr.length, max = -Infinity;
  while (len--) {
    if (Number(arr[len]) > max) {
      max = Number(arr[len]);
    }
  }
  return max;
};
function setProducts(pesq)
{
	if(typeof products == 'undefined') {products = [];}
	
	var url = location.hash.replace('#','');
	if(url == '') url = 'homepage';
	var page_id = ''; var gototab = '';var pesquisa = '';
	var hash_type = (substr_count(url, 'technical-sheet') ? 'technical-sheet' : url);
	var convert_hash = url.split('_');
	url = convert_hash[0];
	if(typeof convert_hash[1] === 'undefined'){}else{page_id = ''+convert_hash[1];}
	if(typeof convert_hash[2] === 'undefined'){}else{gototab = '#'+convert_hash[2];}
	if(typeof convert_hash[3] === 'undefined'){}else{pesquisa = convert_hash[3];}
	

	sortOrder = $('input[name=sort]:checked').val();
	// alert(sortBy);
	rowsPerPage = rowsPerPage ? rowsPerPage : $('#f_visualizacao option:selected').val();
	currentpage = currentpage > 0 ? currentpage : 1; // if current page is less than first page...

	var totalLoop = rowsPerPage;
	var loop = 0;
	var countCellData = 0;
	var offset = 0;

	// LIMPAR O CONTEUDO
	$('#content').empty();
	var filterdProducts = [];  // ARRAY DOS PRODUTOS
	var filterdProducts2 = [];  // ARRAY DOS PRODUTOS
	var key = 0;
	var and = 0;

	rel_sel = 0;
	rel_f_sel = 0;
	
	if(url == 'technical-sheet')
	{
		marcas_sel = 1;
	}else if(url == 'technical-sheet2' || url == 'technical-sheet3' )
		{
			marcas_sel = 1;
		}else if(url == 'favorites' || url == 'compare' || url == 'favorites-palette'|| url == 'view-palettes')
			{
				marcas_sel = $("#m_l :checked").length;
			}else{
				marcas_sel = 0;
			}
	
	stock_sel =  0; pric_sel = 0; 
	
	if(url == 'favorites' || url == 'compare' || url == 'homepage-search' || url == 'technical-sheet' || url == 'technical-sheet2' || url == 'technical-sheet3' || url == 'color-palette' || url == 'favorites-palette'|| url == 'favorites-palette' || url == 'view-palettes') {cart_sel = 0;}else{cart_sel = $("#c_l :checked").length;}

	if(url == 'homepage-search') search_sel = 0; else search_sel = 0;
	
	// TODOS OS PRODUTOS
	if(stock_sel==0 && marcas_sel == 0 && rel_sel==0 && rel_f_sel==0 && cart_sel==0 && pric_sel==0 && search_sel==0 && fam_id1==0 && fam_id2==0 && fam_id3==0 && fam_id4==0 && fam_id5==0 && fam_id6==0 && fam_id7==0 && fam_id8==0 && fam_id9==0 && fam_id10==0) filterdProducts = products;
	
	if(products.length==0)
	{
		$(".filtro").hide();
	}
	// console.log('search_sel: '+search_sel);
	// console.log('marca_ok: '+marcas_sel);

	$.each(products, function(i, object)
	{
		if(marcas_sel > 0) var marca_ok = 0; else var marca_ok = 1;
		// if(marcas_sel2 > 0) var marca_ok2 = 0; else var marca_ok2 = 1;
		if(stock_sel > 0) var stock_ok = 0; else var stock_ok = 1;
		if(rel_sel > 0) var relavancia_ok = 0;  else var relavancia_ok = 1;
		if(rel_f_sel > 0) var relavancia_f_ok = 0;  else var relavancia_f_ok = 1;
		if(cart_sel > 0) var caract_ok = 0;  else var caract_ok = 1;
		if(pric_sel > 0) var precos_ok = 0; else var precos_ok = 1;
		if(search_sel > 0) var search_ok = 0; else var search_ok = 1;

		if(fam_id1 > 0) var fam_id1_ok = 0; else fam_id1_ok = 1;
		if(fam_id2 > 0) var fam_id2_ok = 0; else fam_id2_ok = 1;

		if(fam_id1 > 0) var fam_ok = 0; else fam_ok = 1;
		if(fam_id2 > 0) var fam_ok = 0; else fam_ok = 1;

		// console.log('search_sel:'+search_sel);
		// PESQUISA
		/* m_search = object.title;
		m_search_lower = m_search.toLowerCase()
		if(search_sel > 0)
		{
			var mySearch = $("#search-input").val().toLowerCase();
			console.log('mySearch:'+mySearch);
			if (m_search_lower.indexOf(mySearch) > -1)
			{
				if(!include(filterdProducts,object))
				{
					search_ok = 1;
				}
			}
		} */
		// FICHA DO PRODUTO		
		console.log(url);


		if(url == 'technical-sheet')
		{					
			m_sel = page_id;
			if(object.id ==  m_sel)
			{
				if(!include(filterdProducts,object))
				{
					marca_ok = 1;
				}
			}
		}
		else if(url == 'technical-sheet2')
		{
			m_sel = trim(page_id);
			// console.log(trim(object.ref)+' ==  '+m_sel);
			if(trim(object.ref) ==  m_sel)
			{
				if(!include(filterdProducts,object))
				{
					marca_ok = 1;
				}
			}
		}
		else if(url == 'technical-sheet3')
		{
			m_sel = trim(page_id);
			// console.log(trim(object.ref)+' ==  '+m_sel);
			if(trim(object.ref) ==  m_sel)
			{
				if(!include(filterdProducts,object))
				{
					marca_ok = 1;
				}
			}
		}
		else if(url == 'favorites' || url == 'compare')
		{
			m_sel = trim(object.ref);
			$("#m_l :checked").each(function()
			{				
				if(trim(this.value) ==  m_sel)
				{
					if(!include(filterdProducts,object))
					{
						marca_ok = 1;
					}
				}
			});
		}

		else if(url == 'favorites-palette')
		{
			m_sel = trim(object.id);
			$("#m_l :checked").each(function()
			{		
				if(trim(this.value) ==  m_sel)
				{
					if(!include(filterdProducts,object))
					{
						marca_ok = 1;
					}
				}
			});
		}
		else if(url =='view-palettes')
		{
			m_sel = trim(object.id);
			$("#m_l :checked").each(function()
			{		
				if(trim(this.value) ==  m_sel)
				{
					if(!include(filterdProducts,object))
					{
						marca_ok = 1;
					}
				}
			});
		}

		/* st_sel = object.stock;

		$("#f_stock :selected").each(function()
		{
			if(this.value ==  1 && st_sel > 0)
			{
				if(!include(filterdProducts,object))
				{
					stock_ok = 1;
				}
			}
			else if(this.value == 2 && st_sel <= 0)
			{
				if(!include(filterdProducts,object))
				{
					stock_ok = 1;
				}
			}
		}); */
				
		// RELEVANCIA HOME PAGE
		/* var novidade = object.novidade;
		var promo = object.promo;
		var destaque = object.destaque;
		var oportunidade = object.oportunidade;
		var outlet = object.outlet;
		$("#relevancia_list :checked").each(function()
		{
			 if((this.id=='novidade' && novidade== 1) || (this.id=='promocao' && promo==1) || (this.id=='destaque' && destaque==1) || (this.id=='oportunidade' && oportunidade==1) || (this.id=='outlet' && outlet==1))
			 {
				if(!include(filterdProducts,object))
				{
					relavancia_ok = 1;
				}
			 }
		}); */

		// CARACTERISTICAS APENAS PARA LISTAGEM "homepage"
		if(url == 'favorites' || url == 'compare' || url == 'homepage-search' || url == 'technical-sheet' || url == 'color-palette' || url == 'favorites-palette'|| url == 'view-palettes')
		{
			
		}
		else
		{
			c_sel = object.f;
			var c_sel_in = new Array();	var count = 0; var c_sel2; var c_sel3;
			var f_ativos3;
			$("#c_l .f_ativos3").each(function()
			{
				if($("#"+this.id+' input:checked').length > 0)
				{
					var count2 = 0; 
					c_sel_in[count] = new Array();

					$("#"+this.id+' input:checked').each(function()
					{					
						ct_val2 = this.value;
						c_sel_in[count][count2] = ct_val2;					

						count2++;
					});

					count++;
				}
			});

			if(c_sel_in.length > 0)
			{
				var count = 0;

				for(var z=0; z<c_sel_in.length; z++)
				{
					$.each(c_sel, function(x, val)
					{
						c_sel2 = val.split('|');
						c_sel3 = c_sel2[0]+'_'+c_sel2[1];

						if(inArray(c_sel3, c_sel_in[z])) count++;		
					});

					if(count == c_sel_in.length) caract_ok = 1;
				}
			}
		}

		// console.log('stock_ok: '+stock_ok +' | marca_ok:'+ marca_ok +' | relavancia_ok:'+ relavancia_ok +' | relavancia_f_ok:'+ relavancia_f_ok +' |caract_ok:'+ caract_ok +' | precos_ok:'+ precos_ok +' | search_ok:'+ search_ok +' |  fam_ok:'+ fam_ok);
		if(stock_ok == 1 && marca_ok == 1 && relavancia_ok == 1 && relavancia_f_ok == 1 && caract_ok ==1 && precos_ok == 1 && search_ok == 1 && fam_ok==1)
		{
			if(!include(filterdProducts,object))
			{
				filterdProducts[key] = object;
				filterdProducts2[key] = object;
				key++;
			}
		}
	});
	// get the amount of results
	var totalResults = filterdProducts.length;

	if(totalResults > 0)
	{

		function AtoZ(a,b) { var a1 = a['ref'], b1 = b['ref']; a1 = a1.toLowerCase(); b1=b1.toLowerCase(); return a1 > b1 ? 1 : -1;} // A-Z
		function ZtoA(a,b) { var a1 = a['ref'], b1 = b['ref']; a1 = a1.toLowerCase(); b1=b1.toLowerCase(); return (a1 > b1) ? -1 : (a1 < b1) ? 1 : 0;} // Z-A

		function AtoZ2(a,b) { var a1 = a['title'], b1 = b['title']; a1 = a1.toLowerCase(); b1=b1.toLowerCase(); return a1 > b1 ? 1 : -1;} // A-Z
		function ZtoA2(a,b) { var a1 = a['title'], b1 = b['title']; a1 = a1.toLowerCase(); b1=b1.toLowerCase(); return (a1 > b1) ? -1 : (a1 < b1) ? 1 : 0;} // Z-A

		if(sortOrder == -1) // A-Z
		{
			filterdProducts.sort(AtoZ); //filterdProducts.sort(Relevancia);
		}
		else if(sortOrder == 0) // Z-A
		{
			filterdProducts.sort(ZtoA); //filterdProducts.sort(Relevancia);
		}
		else if(sortOrder == 1) // A-Z
		{
			filterdProducts.sort(AtoZ2); //filterdProducts.sort(Relevancia);
		}
		else
		{					
			filterdProducts.sort(ZtoA2);	
		}


	}

	$('.product_results').html(totalResults);
	var totalpages = Math.ceil(totalResults/rowsPerPage);

	currentpage = Number(currentpage);

	$('.paginacao').html('<button type="button" name="0" class="btn product_button_selected HvBd none" title="1" >1<\/button>');

	$('.page_results').html(currentpage);
	$('.page_results2').html(totalpages);
	var offsetEnd = parseFloat(rowsPerPage) + parseFloat(offset);
	var cell = '';
	var pageProducts = filterdProducts.slice(offset,offsetEnd);
	var vista = '';
	var ax2=1;var ax=(screen.width <= 450 ? 2 : 3); var st='';

	$.each(pageProducts, function(i, object)
	{


		// console.log(object);
		countCellData++; // flug to know if there is content
		
		var id = object.id;
		var ref = object.ref;
		var ref2 = trim(ref);
		var title = object.title;
		/*
		var text = str_replace(";", ";<br>", htmlspecialchars_decode(object.text));
		var obs2 = str_replace(";", ";<br>", htmlspecialchars_decode(object.obs2));
		var maint = str_replace(";", ";<br>", htmlspecialchars_decode(object.maint));
		*/

		// console.log(object);
		var text = htmlspecialchars_decode(object.text);
		var obs2 = htmlspecialchars_decode(object.obs2);
		var maint = htmlspecialchars_decode(object.maint);

		var desc = object.desc;
		var img = object.img;
		var tipo = object.tipo;
		var paletes = object.p;
		var thick = object.thick;
		var f = object.f;

		if(url == 'compare') /* Leather COMPARE */
		{
			if(tipo == 0)
			{
				
				var c_objs; var cell2='';var cell3='';var ps='';
			
				$.each(object.f, function(i, object)
				{
					// VAMOS BUSCAR OS FILTROS E COMPARAR SE EXISTEM
					c_objs = object.split('|');
					if(c_objs[1] == 74 || c_objs[1] == 75 || c_objs[1] == 76 || c_objs[1] == 77 || c_objs[1] == 78)
					{
						cell2 += '<div class="title">'+c_objs[2]+'</div><br>';
						if(c_objs[1] == 78) ps = '<div style="position:absolute;left:7px;top:7px;background-size:auto 100%;background:url(img/euro.svg);height:50px;width:50px"></div>';
					}
					else if(c_objs[0] == 1)
					{
						cell3 = '<div class="title"><b>'+key_COLOR[sLang]+'</b></div><div class="title">'+c_objs[2]+'</div><br>';
					}
					
				});

				cell += '<div class="product-compare" id="prod_'+id+'">';
				cell += '<div class="img" onclick="window.location.hash=\'#technical-sheet_'+id+'_compare\'" style="position:relative;background-image:url('+(img != '' ? imgFolder+img : 'img/no_image.png')+')">'+ps+'<img src="img/p.png" alt="" '+(img != '' ? '' : 'style="width:108%"')+' border="0"></div>';
				cell += '<div class="desc" onclick="window.location.hash=\'#technical-sheet_'+id+'_compare\'">';
				cell += '<div class="ref">'+ref+'</div>';
				// cell += '<div class="title">'+title+'</div>';
				// cell += '<div class="text">'+text+'</div>';
				// cell += '<div class="descr">'+desc+'</div>';
				
				cell += '<div class="title"><b>'+key_Type_of_leather[sLang]+'</b></div>';
				cell += '<div class="title">'+title+'</div><br>';
				
				cell += cell3;				
				
				if(thick)
				{
					cell += '<div class="title"><b>'+key_Thickness[sLang]+'</b></div>';
					cell += '<div class="title">'+thick+'</div><br>';
				}
				if(text || obs2 || cell2)
				{
					cell += '<div class="title"><b>'+key_remarks[sLang]+'</b></div>';
					if(text) cell += '<div class="title">'+text+'</div><br>';
					if(obs2 && obs2!=text) cell += '<div class="title">'+obs2+'</div><br>';		
					if(cell2) cell += cell2;				
				}

				if(maint)
				{
					cell += '<div class="title"><b>'+key_Maintenance[sLang]+'</b></div>';
					cell += '<div class="title">'+maint+'</div><br>';
				}

				cell += '</div>';
				cell += '<div class="points" onclick="ShowMenu(\''+id+'\')" id="points'+id+'">';
				cell += '<ul class="menu-p" id="menu_'+id+'">';
				cell += '<li class="star" onclick="AddRemoveFav(\''+id+'\',\''+ref2+'\')" id="fav_'+ref2+'">'+key_Add_to_Favorites[sLang]+'</li>';
				cell += '<li class="comp" onclick="AddRemoveComp(\''+id+'\',\''+ref2+'\')" id="comp_'+ref2+'">'+key_Compare[sLang]+'</li>';
				cell += '<li class="tech" onclick="window.location.hash=\'#technical-sheet_'+id+'_compare\'">'+key_Technical_Sheet[sLang]+'</li>';
				cell += '</ul>';
				cell += '</div>';
				cell += '<div class="clear"></div>';
				cell += '<div class="search-res" data="prod_'+id+'">'+id+'</div>';
				cell += '</div>';
			}
		}
		else if(url == 'color-palette') /* COLOR PALETTE */
		{
			// if(object.p != '') 
			// {
			// 	console.log(object);
			// 	console.log(object.p);

			// }
			if(tipo == 1)
			{
				cell += '<div class="product-color-palette" id="palette_'+id+'">';

				// cell += '<div class="desc" onclick="window.location.hash=\'#technical-sheet2_'+id+'_color-palette\'">';
				cell += '<div class="desc">';
				cell += '<div class="title" style="font-size:20px"><b>'+title+'</b></div>';
				cell += '<div class="imgs">';
				$.each(paletes, function(x, val)
				{
					cell += '<div class="img-wrap"  onclick="window.location.hash=\'#technical-sheet2_'+val['ref']+'_color-palette\'"><div class="img" style="background-image:url('+(val['img'] != '' ? imgFolder+val['img'] : 'img/no_image.png')+')"><img src="img/p.png" alt="" '+(img != '' ? '' : 'style="width:108%"')+' border="0"></div><div class="ref">'+val['ref']+'</div></div>'; 
				});

				cell += '</div>';
				cell += '</div>';
				cell += '<div class="points" onclick="ShowMenu(\''+id+'\')" id="points'+id+'">';
				cell += '<ul class="menu-p" id="menu_'+id+'">';
				cell += '<li class="star" onclick="AddRemovePalleteFav(\''+id+'\',\''+ref+'\')" id="fav_pallete_'+id+'">'+key_Add_to_Favorites[sLang]+'</li>';
				// cell += '<li class="comp" onclick="AddRemoveComp(\''+id+'\',\''+ref+'\')" id="comp_'+ref+'">Compare</li>';
				// cell += '<li class="tech" onclick="window.location.hash=\'#technical-sheet2_'+id+'_color-palette\'">'+key_Technical_Sheet[sLang]+'</li>';
				cell += '</ul>';
				cell += '</div>';
				cell += '<div class="clear"></div>';
				cell += '<div class="search-res" data="palette_'+id+'">'+id+'</div>';
				cell += '</div>';

				if(ax == (ax2))
				{
					cell += '<div class="clear"></div>';
					ax2 = 0;
				}
			}
		}
		else if(url == 'favorites-palette') /* Pallete FAVORITES */
		{
			// console.log(object);
			if(tipo == 1)
			{
				cell += '<div class="product-color-palette" id="palette_'+id+'">';

				// cell += '<div class="desc" onclick="window.location.hash=\'#technical-sheet2_'+id+'_color-palette\'">';
				cell += '<div class="desc">';
				cell += '<div class="title" style="font-size:20px"><b>'+title+'</b></div>';
				cell += '<div class="imgs">';
				$.each(paletes, function(x, val)
				{
					cell += '<div class="img-wrap"  onclick="window.location.hash=\'#technical-sheet2_'+val['ref']+'_color-palette\'"><div class="img" style="background-image:url('+(val['img'] != '' ? imgFolder+val['img'] : 'img/no_image.png')+')"><img src="img/p.png" alt="" '+(img != '' ? '' : 'style="width:108%"')+' border="0"></div><div class="ref">'+val['ref']+'</div></div>'; 
				});

				cell += '</div>';
				cell += '</div>';
				cell += '<div class="points" onclick="ShowMenu(\''+id+'\')" id="points'+id+'">';
				cell += '<ul class="menu-p" id="menu_'+id+'">';
				cell += '<li class="star" onclick="AddRemovePalleteFav(\''+id+'\',\''+ref+'\')" id="fav_pallete_'+id+'">'+key_Add_to_Favorites[sLang]+'</li>';
				// cell += '<li class="comp" onclick="AddRemoveComp(\''+id+'\',\''+ref+'\')" id="comp_'+ref+'">Compare</li>';
				// cell += '<li class="tech" onclick="window.location.hash=\'#technical-sheet2_'+id+'_color-palette\'">'+key_Technical_Sheet[sLang]+'</li>';
				cell += '</ul>';
				cell += '</div>';
				cell += '<div class="clear"></div>';
				cell += '<div class="search-res" data="palette_'+id+'">'+id+'</div>';
				cell += '</div>';

				if(ax == (ax2))
				{
					cell += '<div class="clear"></div>';
					ax2 = 0;
				}
			}
		}
		else if(url == 'favorites') /* Leather FAVORITES */
		{
			if(tipo == 0)
			{
				
				var ps = '';
				if(substr_count(object.f,'|78|')) ps = '<div style="position:absolute;left:7px;top:7px;background-size:auto 100%;background:url(img/euro.svg);height:50px;width:50px"></div>';
				
				
				cell += '<div class="product-fav" id="prod_'+id+'">';
				cell += '<ul class="menu-p" id="menu_'+id+'">';
				cell += '<li class="star" onclick="AddRemoveFav(\''+id+'\',\''+ref2+'\')" id="fav_'+ref2+'">'+key_Add_to_Favorites[sLang]+'</li>';
				cell += '<li class="comp" onclick="AddRemoveComp(\''+id+'\',\''+ref2+'\')" id="comp_'+ref2+'">'+key_Compare[sLang]+'</li>';
				cell += '<li class="tech" onclick="window.location.hash=\'#technical-sheet_'+id+'_favorites\'">'+key_Technical_Sheet[sLang]+'</li>';
				cell += '</ul>';
				cell += '<div class="img" onclick="window.location.hash=\'#technical-sheet_'+id+'_favorites\'" style="position:relative;background-image:url('+(img != '' ? imgFolder+img : 'img/no_image.png')+')">'+ps+'<img src="img/p.png" alt="" '+(img != '' ? '' : 'style="width:108%"')+' border="0"></div>';
				cell += '<div class="desc" onclick="window.location.hash=\'#technical-sheet_'+id+'_favorites\'">';
				cell += '<div class="ref">'+ref+'</div>';
				cell += '</div>';
				cell += '<div class="points" onclick="ShowMenu(\''+id+'\')" id="points'+id+'"></div>';
				cell += '<div class="clear"></div>';
				cell += '<div class="search-res" data="prod_'+id+'">'+id+'</div>';
				cell += '</div>';

				if(ax == (ax2))
				{
					cell += '<div class="clear"></div>';
					ax2 = 0;
				}
			}
		}
		else if(url == 'technical-sheet') /* Leather TECHNICAL SHEET */
		{
			var c_objs; var cell2='';var cell3='';var ps='';
			
			$.each(object.f, function(i, object)
			{
				// VAMOS BUSCAR OS FILTROS E COMPARAR SE EXISTEM
				c_objs = object.split('|');
				if(c_objs[1] == 74 || c_objs[1] == 75 || c_objs[1] == 76 || c_objs[1] == 77 || c_objs[1] == 78)
				{
					cell2 += '<div class="title">'+c_objs[2]+'</div><br>';
					if(c_objs[1] == 78) ps = '<div style="position:absolute;left:7px;top:7px;background-size:auto 100%;background:url(img/euro.svg);height:50px;width:50px"></div>';
				}
				else if(c_objs[0] == 1)
				{
					cell3 = '<div class="title"><b>'+key_COLOR[sLang]+'</b></div><div class="title">'+c_objs[2]+'</div><br>';
				}
				
			});

			var img_alt;
			if(APP_ON == 0) img_alt = 'https://www.nm4y.com/app_g27/fotos/'+ref+'.jpg';
			else img_alt = imgFolder+img;

			cell += '<div class="technical-sheet">';
			cell += '<ul class="menu-p" id="menu_'+id+'">';
			cell += '<li class="star" onclick="AddRemoveFav(\''+id+'\',\''+ref2+'\')" id="fav_'+ref2+'">'+key_Add_to_Favorites[sLang]+'</li>';
			cell += '<li class="comp" onclick="AddRemoveComp(\''+id+'\',\''+ref2+'\')" id="comp_'+ref2+'">'+key_Compare[sLang]+'</li>';
			cell += '</ul>';
			cell += '<div class="img" style="position:relative;background-image:url('+(img != '' ? imgFolder+img : 'img/no_image.png')+')">'+ps+'<a href="'+img_alt+'" class="image-link" title="'+ref+' - '+title+'"><img src="img/p.png" alt="" '+(img != '' ? '' : 'style="width:104%"')+' border="0"><a/></div>';
			cell += '<div class="desc">';
			cell += '<div class="ref">'+ref+'</div>';
			
			cell += '<div class="title"><b>'+key_Type_of_leather[sLang]+'</b></div>';
			cell += '<div class="title">'+title+'</div><br>';
			
			cell += cell3;
			
			
			if(thick)
			{
				cell += '<div class="title"><b>'+key_Thickness[sLang]+'</b></div>';
				cell += '<div class="title">'+thick+'</div><br>';
			}
			if(text || obs2 || cell2)
			{
				cell += '<div class="title"><b>'+key_remarks[sLang]+'</b></div>';
				if(text) cell += '<div class="title">'+text+'</div><br>';
				if(obs2 && obs2!=text) cell += '<div class="title">'+obs2+'</div><br>';		
				if(cell2) cell += cell2;		
			
			}
			// if(text == '' && obs2 == '') cell += '<div class="title"><b>'+key_remarks[sLang]+'</b></div>'+cell2;
			
			

			if(maint)
			{
				cell += '<div class="title"><b>'+key_Maintenance[sLang]+'</b></div>';
				cell += '<div class="title">'+maint+'</div><br>';
			}

			/* if(maint)
			{
				cell += '<div class="title"><b>'+key_Maintenance[sLang]+'</b></div>';
				cell += '<div class="title">'+maint+'</div><br>';
			} */
			
			cell += '</div>';	
			cell += '<div class="points" onclick="ShowMenu(\''+id+'\')" id="points'+id+'"></div>';	
			cell += '<div class="clear"></div>';
			cell += '</div>';
		}
		else if(url == 'technical-sheet2') /* Leather TECHNICAL SHEET */
		{
			var c_objs; var cell2='';var cell3='';var ps='';
			
			$.each(object.f, function(i, object)
			{
				// VAMOS BUSCAR OS FILTROS E COMPARAR SE EXISTEM
				c_objs = object.split('|');
				if(c_objs[1] == 74 || c_objs[1] == 75 || c_objs[1] == 76 || c_objs[1] == 77 || c_objs[1] == 78)
				{
					cell2 += '<div class="title">'+c_objs[2]+'</div><br>';
					if(c_objs[1] == 78) ps = '<div style="position:absolute;left:7px;top:7px;background-size:auto 100%;background:url(img/euro.svg);height:50px;width:50px"></div>';
				}
				else if(c_objs[0] == 1)
				{
					cell3 = '<div class="title"><b>'+key_COLOR[sLang]+'</b></div><div class="title">'+c_objs[2]+'</div><br>';
				}
				
			});

			var img_alt;
			if(APP_ON == 0) img_alt = 'https://www.nm4y.com/app_g27/fotos/'+ref+'.jpg';
			else img_alt = imgFolder+img;

			cell += '<div class="technical-sheet">';
			cell += '<ul class="menu-p" id="menu_'+id+'">';
			cell += '<li class="star" onclick="AddRemoveFav(\''+id+'\',\''+ref2+'\')" id="fav_'+ref2+'">'+key_Add_to_Favorites[sLang]+'</li>';
			cell += '<li class="comp" onclick="AddRemoveComp(\''+id+'\',\''+ref2+'\')" id="comp_'+ref2+'">'+key_Compare[sLang]+'</li>';
			cell += '</ul>';
			cell += '<div class="img" style="position:relative;background-image:url('+(img != '' ? imgFolder+img : 'img/no_image.png')+')">'+ps+'<a href="'+img_alt+'" class="image-link" title="'+ref+' - '+title+'"><img src="img/p.png" alt="" '+(img != '' ? '' : 'style="width:104%"')+' border="0"><a/></div>';
			cell += '<div class="desc">';
			cell += '<div class="ref">'+ref+'</div>';
			
			cell += '<div class="title"><b>'+key_Type_of_leather[sLang]+'</b></div>';
			cell += '<div class="title">'+title+'</div><br>';
			
			cell += cell3;
			
			
			if(thick)
			{
				cell += '<div class="title"><b>'+key_Thickness[sLang]+'</b></div>';
				cell += '<div class="title">'+thick+'</div><br>';
			}
			if(text || obs2 || cell2)
			{
				cell += '<div class="title"><b>'+key_remarks[sLang]+'</b></div>';
				if(text) cell += '<div class="title">'+text+'</div><br>';
				if(obs2 && obs2!=text) cell += '<div class="title">'+obs2+'</div><br>';		
				if(cell2) cell += cell2;		
			
			}
			// if(text == '' && obs2 == '') cell += '<div class="title"><b>'+key_remarks[sLang]+'</b></div>'+cell2;
			
			

			if(maint)
			{
				cell += '<div class="title"><b>'+key_Maintenance[sLang]+'</b></div>';
				cell += '<div class="title">'+maint+'</div><br>';
			}

			/* if(maint)
			{
				cell += '<div class="title"><b>'+key_Maintenance[sLang]+'</b></div>';
				cell += '<div class="title">'+maint+'</div><br>';
			} */
			
			cell += '</div>';	
			cell += '<div class="points" onclick="ShowMenu(\''+id+'\')" id="points'+id+'"></div>';	
			cell += '<div class="clear"></div>';
			cell += '</div>';
		}
		else if(url == 'technical-sheet3') /* Leather TECHNICAL SHEET */
		{
			var c_objs; var cell2='';var cell3='';var ps='';
			
			$.each(object.f, function(i, object)
			{
				// VAMOS BUSCAR OS FILTROS E COMPARAR SE EXISTEM
				c_objs = object.split('|');
				if(c_objs[1] == 74 || c_objs[1] == 75 || c_objs[1] == 76 || c_objs[1] == 77 || c_objs[1] == 78)
				{
					cell2 += '<div class="title">'+c_objs[2]+'</div><br>';
					if(c_objs[1] == 78) ps = '<div style="position:absolute;left:7px;top:7px;background-size:auto 100%;background:url(img/euro.svg);height:50px;width:50px"></div>';
				}
				else if(c_objs[0] == 1)
				{
					cell3 = '<div class="title"><b>'+key_COLOR[sLang]+'</b></div><div class="title">'+c_objs[2]+'</div><br>';
				}
				
			});

			var img_alt;
			if(APP_ON == 0) img_alt = 'https://www.nm4y.com/app_g27/fotos/'+ref+'.jpg';
			else img_alt = imgFolder+img;

			cell += '<div class="technical-sheet">';
			cell += '<ul class="menu-p" id="menu_'+id+'">';
			cell += '<li class="star" onclick="AddRemoveFav(\''+id+'\',\''+ref2+'\')" id="fav_'+ref2+'">'+key_Add_to_Favorites[sLang]+'</li>';
			cell += '<li class="comp" onclick="AddRemoveComp(\''+id+'\',\''+ref2+'\')" id="comp_'+ref2+'">'+key_Compare[sLang]+'</li>';
			cell += '</ul>';
			cell += '<div class="img" style="position:relative;background-image:url('+(img != '' ? imgFolder+img : 'img/no_image.png')+')">'+ps+'<a href="'+img_alt+'" class="image-link" title="'+ref+' - '+title+'"><img src="img/p.png" alt="" '+(img != '' ? '' : 'style="width:104%"')+' border="0"><a/></div>';
			cell += '<div class="desc">';
			cell += '<div class="ref">'+ref+'</div>';
			
			cell += '<div class="title"><b>'+key_Type_of_leather[sLang]+'</b></div>';
			cell += '<div class="title">'+title+'</div><br>';
			
			cell += cell3;
			
			
			if(thick)
			{
				cell += '<div class="title"><b>'+key_Thickness[sLang]+'</b></div>';
				cell += '<div class="title">'+thick+'</div><br>';
			}
			if(text || obs2 || cell2)
			{
				cell += '<div class="title"><b>'+key_remarks[sLang]+'</b></div>';
				if(text) cell += '<div class="title">'+text+'</div><br>';
				if(obs2 && obs2!=text) cell += '<div class="title">'+obs2+'</div><br>';		
				if(cell2) cell += cell2;		
			
			}
			// if(text == '' && obs2 == '') cell += '<div class="title"><b>'+key_remarks[sLang]+'</b></div>'+cell2;
			
			

			if(maint)
			{
				cell += '<div class="title"><b>'+key_Maintenance[sLang]+'</b></div>';
				cell += '<div class="title">'+maint+'</div><br>';
			}

			/* if(maint)
			{
				cell += '<div class="title"><b>'+key_Maintenance[sLang]+'</b></div>';
				cell += '<div class="title">'+maint+'</div><br>';
			} */
			
			cell += '</div>';	
			cell += '<div class="points" onclick="ShowMenu(\''+id+'\')" id="points'+id+'"></div>';	
			cell += '<div class="clear"></div>';
			cell += '</div>';
		}
		else if(url == 'homepage-search') /* Leather Catalog SEARCH*/
		{
			if(tipo == 0)
			{
				var ps = '';
				if(substr_count(object.f,'|78|')) ps = '<div style="position:absolute;left:7px;top:7px;background-size:auto 100%;background:url(img/euro.svg);height:50px;width:50px"></div>';
				
				cell += '<div class="product" id="prod_'+id+'">';
				cell += '<div class="desc" onclick="window.location.hash=\'#technical-sheet_'+id+'_homepage-search_'+encodeURIComponent(ref)+'\'">';
				cell += '<div class="ref">'+ref+'</div>';
				cell += '<div class="title">'+title+'</div>';
				cell += '<div class="text">'+desc+'</div>';
				cell += '</div>';
				cell += '<div class="img" onclick="window.location.hash=\'#technical-sheet_'+id+'_homepage-search_'+encodeURIComponent(ref)+'\'" style="position:relative;background-image:url('+(img != '' ? imgFolder+img : 'img/no_image.png')+')">'+ps+'<img src="img/p.png" alt="" '+(img != '' ? '' : 'style="width:108%"')+' border="0"></div>';
				cell += '<div class="points" onclick="ShowMenu(\''+id+'\')" id="points'+id+'">';
				cell += '<ul class="menu-p" id="menu_'+id+'">';
				cell += '<li class="star" onclick="AddRemoveFav(\''+id+'\',\''+ref2+'\')" id="fav_'+ref2+'">'+key_Add_to_Favorites[sLang]+'</li>';
				cell += '<li class="comp" onclick="AddRemoveComp(\''+id+'\',\''+ref2+'\')" id="comp_'+ref2+'">'+key_Compare[sLang]+'</li>';
				cell += '<li class="tech" onclick="window.location.hash=\'#technical-sheet_'+id+'_homepage-search_'+encodeURIComponent(ref)+'\'">'+key_Technical_Sheet[sLang]+'</li>';
				cell += '</ul>';
				cell += '</div>';
				cell += '<div class="clear"></div>';
				cell += '<div class="search-res" data="prod_'+id+'">'+ref+' '+title+' '+text+' '+desc+' '+obs2+' '+maint+' '+thick+' '+object.f+'</div>';
				cell += '</div>';
			}
		}
		else //homepage
		{
			if(tipo == 0)
			{
				
				var ps = '';
				if(substr_count(object.f,'|78|')) ps = '<div style="position:absolute;left:7px;top:7px;background-size:auto 100%;background:url(img/euro.svg);height:50px;width:50px"></div>';

				cell += '<div class="product" id="prod_'+id+'"><a id="prod_'+ref2+'"></a>';
				cell += '<div class="desc" onclick="window.location.hash=\'#technical-sheet_'+id+'_homepage_'+encodeURIComponent(ref)+'\'">';
				cell += '<div class="ref">'+ref+'</div>';
				cell += '<div class="title">'+title+'</div>';
				cell += '<div class="text">'+desc+'</div>';
				cell += '</div>';
				cell += '<div class="img" onclick="window.location.hash=\'#technical-sheet_'+id+'_homepage_'+encodeURIComponent(ref)+'\'" style="position:relative;background-image:url('+(img != '' ? imgFolder+img : 'img/no_image.png')+')">'+ps+'<img src="img/p.png" alt="" '+(img != '' ? '' : 'style="width:108%"')+' border="0"></div>';
				cell += '<div class="points" onclick="ShowMenu(\''+id+'\')" id="points'+id+'">';
				cell += '<ul class="menu-p" id="menu_'+id+'">';
				// cell += '<li class="palette" onclick="AddToCustomPalette(\''+id+'\',\''+ref2+'\')" id="fav_'+ref2+'">'+key_Add_to_customPalette[sLang]+'</li>';
				cell += '<li class="star" onclick="AddRemoveFav(\''+id+'\',\''+ref2+'\')" id="fav_'+ref2+'">'+key_Add_to_Favorites[sLang]+'</li>';
				cell += '<li class="comp" onclick="AddRemoveComp(\''+id+'\',\''+ref2+'\')" id="comp_'+ref2+'">'+key_Compare[sLang]+'</li>';
				cell += '<li class="tech" onclick="window.location.hash=\'#technical-sheet_'+id+'_homepage_'+encodeURIComponent(ref)+'\'">'+key_Technical_Sheet[sLang]+'</li>';
				cell += '</ul>';
				cell += '</div>';
				cell += '<div class="clear"></div>';
				cell += '<div class="search-res" data="prod_'+id+'">'+ref+' '+title+' '+text+' '+desc+'</div>';
				cell += '</div>';
				
			}
		}
		ax2++;
	});

	if(countCellData > 0 && pageProducts.length > 0)
	{
		$('#content').html(cell).promise().done(function()
		{
			if(pesq != '' && pesq != undefined){$('#content').animate({ scrollTop: ($('#prod_'+decodeURIComponent(pesq)).offset().top - 200) }, 0); /*$(window).scrollTop(($('#prod_'+decodeURIComponent(pesq)).offset().top - 200));*/}
			else{$('#content').animate({ scrollTop: 0 }, 0);}
			$('.image-link').magnificPopup({type:'image', image: { titleSrc: 'title'}});
		});	

		if(url == 'homepage-search')
		{
			var txt = $('#search-input').val();
			if(txt != '')
			{
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
			}
		}
		else if(url == 'compare')
		{
			if($('.product-compare').length > 1)
			{
				var d = new Array(); var i=0;
				$('.product-compare').each(function()
				{
					d[i] = $(this).height();
					i++;					
				});

				$('.product-compare').height(arrayMax(d));
			}
			
		}
	}
	else
	{
		var html;
		
		var new_height = ($(window).height() - ($('#app-header').outerHeight(true) + $('#app-footer').outerHeight(true)));
		
		if(url == 'compare')  html = '<div class="no-products" style="height:'+new_height+'px"><div class="cell"><div class="title">'+key_I_AM_SORRY[sLang]+'</div><div class="desc">'+key_There_are_no_materials_added_to_the_compare_list[sLang]+'</div></div></div>';
		else if(url == 'favorites')  html = '<div class="no-products" style="height:'+new_height+'px"><div class="cell"><div class="title">'+key_I_AM_SORRY[sLang]+'</div><div class="desc">'+key_There_are_no_materials_added_to_the_favorites_list[sLang]+'</div></div></div>';
		else if(url == 'favorites-palette')  html = '<div class="no-products" style="height:'+new_height+'px"><div class="cell"><div class="title">'+key_I_AM_SORRY[sLang]+'</div><div class="desc">'+key_There_are_no_materials_added_to_the_favorites_list[sLang]+'</div></div></div>';
		else html = '<div class="no-products" style="height:'+new_height+'px"><div class="cell"><div class="title">'+key_I_AM_SORRY[sLang]+'</div><div class="desc">'+key_There_are_no_materials_added_to_the_favorites_list[sLang]+'</div></div></div>';
		
		$('#content').html(html);
	}

	setPagination();
	getFavsCompare();
	closeAll();
	
}

function setPagination()
{
   $('.paginacao button[name!=0]').click(function()
   {
		currentpage = $(this).attr('name');
		displayProducts();
   });
}
function displayProducts(pesq){setProducts(pesq);}

function executaSort()
{
	displayProducts();
	
	clicked = 1;
	$(".sort-right").css({'display':'block', 'right':0}).animate({right: "-300px"}, 500, function() 
	{
		$('.sort-right').css('display', 'none');
		$('.sort-right-wrap').css('display', 'none');
		clicked = 0;
	});	
}
function executaFiltros()
{
	displayProducts();

	clicked = 1;
	$(".filtros-right").css({'display':'block', 'right':0}).animate({right: "-300px"}, 500, function() 
	{
		$('.filtros-right').css('display', 'none');
		$('.filtros-right-wrap').css('display', 'none');
		clicked = 0;
	});
	
}
function clearItems()
{
	clean_filters();
	displayProducts();

	clicked = 1;
	$(".filtros-right").css({'display':'block', 'right':0}).animate({right: "-300px"}, 500, function() 
	{
		$('.filtros-right').css('display', 'none');
		$('.filtros-right-wrap').css('display', 'none');
		clicked = 0;
	});
	
}



function clean_filters()
{
	$('#c_l input[type=checkbox]').each(function() 
	{
		this.checked = false; 
	});

	$('.label_check_p').removeClass('c_on_p');

	// var myCookies = getCookies();
	// for(var a=0; a<myCookies.length;a++)
	// {
	// 	if(substr_count_v(myCookies[a], 'c_product_sort')) $.cookies.set(myCookies[a], null);
	// 	else if(substr_count_v(myCookies[a], 'c_product_order')) $.cookies.set(myCookies[a], null);
	// 	else if(substr_count_v(myCookies[a], 'c_marca_order')) $.cookies.set(myCookies[a], null);
	// 	else if(substr_count_v(myCookies[a], 'c_destaque_order')) $.cookies.set(myCookies[a], null);
	// 	else if(substr_count_v(myCookies[a], 'c_novidade_order')) $.cookies.set(myCookies[a], null);
	// 	else if(substr_count_v(myCookies[a], 'c_oportunidade_order')) $.cookies.set(myCookies[a], null);
	// 	else if(substr_count_v(myCookies[a], 'c_outlet_order')) $.cookies.set(myCookies[a], null);
	// 	else if(substr_count_v(myCookies[a], 'c_promocao_order')) $.cookies.set(myCookies[a], null);
	// 	else if(substr_count_v(myCookies[a], 'c_category_order')) $.cookies.set(myCookies[a], null);
	// 	else if(substr_count_v(myCookies[a], 'c_color_order')) $.cookies.set(myCookies[a], null);
	// 	else if(substr_count_v(myCookies[a], 'c_preco_order')) $.cookies.set(myCookies[a], null);
	// }

	// currentpage = 0;

	// setupLabel(); 
	// setProducts(); 
	// displayProducts();

	return false;
}

function displayFilters2(products)
{
	var counter_cl = 0; var counter_pl = 0; var counter_ml = 0; var counter_fl = 0;
	var c_sel2; var c_sel3;

	// VAMOS BUSCAR TODAS AS CARACTERISTICAS
	var cl = new Array(); var cl_OK = new Array(); var counter = 0; $("#c_l input").each(function(){ cl[counter] = this.value; counter++});

	// PARA CADA PRODUTO DEVOLVIDO
	$.each(products, function(i, object)
	{
		// VAMOS BUSCAR OS FILTROS E COMPARAR SE EXISTEM
		c_sel = object.f;  $.each(c_sel, function(x, val)
		{
			c_sel2 = val.split('|');
			c_sel3 = c_sel2[0]+'_'+c_sel2[1];

			if(inArray(c_sel3, cl)){ if(!inArray(c_sel3, cl_OK)){cl_OK[counter_cl] = c_sel3; counter_cl++;}}
		});
	});

	// VAMOS MOSTRAR OU ESCONDER FILTROS QUE ESTEJAM ASSOCIADOS AOS PRODUTOS DISPONIVEIS
	var title_ct = 0
	$("#c_l input").each(function()
	{
		if(inArray(this.value, cl_OK))
		{
			$("#"+this.id).closest("li").attr('style','display:block');
			$("#"+this.id).closest("li").removeClass('sematv');
			$("#"+this.id).closest("li").addClass('tem');
			// $("#"+this.id).closest(".f_ativos3").attr('style','display:block');
		}
		else
		{
			$("#"+this.id).closest("li").attr('style','display:none');
			$("#"+this.id).closest("li").addClass('sematv');
			$("#"+this.id).closest("li").removeClass('tem');
		}

		if($("#"+this.id).closest("li").is(':visible')) title_ct = 1;
	});

	$("#c_l li.f_ativos3").each(function()
	{
		var id = $(this).attr('id');
		var tem = ($(this).has('li[class*="tem"]').length);

		if(tem > 0)
		{
			$('#'+id).show();
		}
		else
		{
			$('#'+id).hide();
		}
	});
}

function displayFilters(filters){}

function setupLabel()
{
	if ($('.label_check_p div input').length)
	{
		$('.label_check_p').each(function(){$(this).removeClass('c_on_p');});
		$('.label_check_p input:checked').each(function(){$(this).parent('div').parent('label').addClass('c_on_p');});
	}
	if ($('.label_check div input').length)
	{
		$('.label_check').each(function(){$(this).removeClass('c_on_p');});
		$('.label_check input:checked').each(function(){$(this).parent('div').parent('label').addClass('c_on_p');});
	}
}
function isNumber(n){return !isNaN(parseFloat(n)) && isFinite(n);}
function getDescontoAplicado(precoantigo,preconovo){return parseInt((100-(preconovo/precoantigo)*100));}


function htmlspecialchars_decode(string, quoteStyle) {

  var optTemp = 0
  var i = 0
  var noquotes = false

  if (typeof quoteStyle === 'undefined') {
    quoteStyle = 2
  }
  string = string.toString()
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
  var OPTS = {
    'ENT_NOQUOTES': 0,
    'ENT_HTML_QUOTE_SINGLE': 1,
    'ENT_HTML_QUOTE_DOUBLE': 2,
    'ENT_COMPAT': 2,
    'ENT_QUOTES': 3,
    'ENT_IGNORE': 4
  }
  if (quoteStyle === 0) {
    noquotes = true
  }
  if (typeof quoteStyle !== 'number') {
    // Allow for a single string or an array of string flags
    quoteStyle = [].concat(quoteStyle)
    for (i = 0; i < quoteStyle.length; i++) {
      // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
      if (OPTS[quoteStyle[i]] === 0) {
        noquotes = true
      } else if (OPTS[quoteStyle[i]]) {
        optTemp = optTemp | OPTS[quoteStyle[i]]
      }
    }
    quoteStyle = optTemp
  }
  if (quoteStyle & OPTS.ENT_HTML_QUOTE_SINGLE) {
    // PHP doesn't currently escape if more than one 0, but it should:
    string = string.replace(/&#0*39;/g, "'")
    // This would also be useful here, but not a part of PHP:
    string = string.replace(/&apos;|&#x0*27;/g, "'");
  }
  if (!noquotes) {
    string = string.replace(/&quot;/g, '"')
  }
  // Put this in last place to avoid escape being double-decoded
  string = string.replace(/&amp;/g, '&')

  return string
}

function nl2br (str, isXhtml) {
  //  discuss at: http://locutus.io/php/nl2br/
  // original by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Philip Peterson
  // improved by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Atli Þór
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Maximusya
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Reynier de la Rosa (http://scriptinside.blogspot.com.es/)
  //    input by: Brett Zamir (http://brett-zamir.me)
  //   example 1: nl2br('Kevin\nvan\nZonneveld')
  //   returns 1: 'Kevin<br />\nvan<br />\nZonneveld'
  //   example 2: nl2br("\nOne\nTwo\n\nThree\n", false)
  //   returns 2: '<br>\nOne<br>\nTwo<br>\n<br>\nThree<br>\n'
  //   example 3: nl2br("\nOne\nTwo\n\nThree\n", true)
  //   returns 3: '<br />\nOne<br />\nTwo<br />\n<br />\nThree<br />\n'
  //   example 4: nl2br(null)
  //   returns 4: ''

  // Some latest browsers when str is null return and unexpected null value
  if (typeof str === 'undefined' || str === null) {
    return ''
  }

  // Adjust comment to avoid issue on locutus.io display
  var breakTag = (isXhtml || typeof isXhtml === 'undefined') ? '<br ' + '/>' : '<br>'

  return (str + '')
    .replace(/(\r\n|\n\r|\r|\n)/g, breakTag + '$1')
}