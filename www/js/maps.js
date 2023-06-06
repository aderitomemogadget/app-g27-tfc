function getLocation()
{
	//Se a app estiver offline nao vale apenas enviar dados para o servidor
	if(window.localStorage.getItem("estou_logado") != "1")return false;
	if(window.localStorage.getItem("ja_carreguei_home_page") != "1")return false;//So depois de carregar a home page é que posso obter as coordenadas gps

  	if (navigator.geolocation)
  	{
    	navigator.geolocation.watchPosition(showPosition, geolocationError, {
        	enableHighAccuracy: true,
        	timeout: 5000,
        	maximumAge: 0,
        	accuracy:10
     	});
    }
    else
    {
    	window.plugins.toast.showWithOptions(
		{
			message:"Geolocation is not ative.",
			duration:"8000",
			position:"center",
			styling:{ opacity:0.0,textSize:20 },
			addPixelsY:0
		});
    }
}
function geolocationError(error) {
	/*if(window.plugins)
	{
		window.plugins.toast.showWithOptions(
	    {
	      message: "Não foi possivel obter as coordenadas GPS. "+error.message,
	      duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
	      position: "bottom",
	      addPixelsY: -40  // added a negative value to move it up a bit (default 0)
	    }
	  	);
	}
	else
		console.log("Não foi possivel obter as coordenadas GPS. "+error.message);*/
}
function showPosition(position)
{
	var hash=location.hash.replace('#','');
	if(hash == 'homepage' ||  hash == 'specific-location')
	{
		var lat_anterior = window.localStorage.getItem("lat");
		var lon_anterior = window.localStorage.getItem("lng");
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;

		if(lat!=null && lat!="" && lat!=undefined)window.localStorage.setItem('lat', lat);
		if(lon!=null && lon!="" && lon!=undefined)window.localStorage.setItem('lng', lon);
		//Se a app estiver offline nao vale apenas enviar dados para o servidor
		if(window.localStorage.getItem("estou_logado") != "1" || window.localStorage.getItem("app_offline") == "1" )return false;

		var token = window.localStorage.getItem("token");
		var sessionID = window.localStorage.getItem("sessionID");

		if(lat==null || lat=="" || lon==null || lon=="")
		{
			//Fail safe, vamos obter do google maps a nossa localizacao
			$.ajax({
					type:'POST',
					async: true,
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
					error:function()
					{

					}
				});
		}
		else
		{
			if(lat_anterior != position.coords.latitude || lon_anterior != position.coords.longitude)
			{
				if(token != '')
				{
					$.ajax({
							type: 'POST',
							url: globalUrl+'admin_tfc/location.php',
							async: true,
							data: {
								'type': 'location',
								'token': token,
								'dp':(new Date()).getTime(),
								'lat': position.coords.latitude,
								'lng': position.coords.longitude,
								'sessionID': sessionID}
							});
				}
			}
		}
	}

}

/*function initMapApp() {
	var directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions:{strokeColor:"#c7342a",strokeWeight:5} });
    var directionsService = new google.maps.DirectionsService;
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		disableDefaultUI: true,
		center: new google.maps.LatLng(window.localStorage.getItem('lat'), window.localStorage.getItem('lng'))
	});
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('map-details'));
	calculateAndDisplayRoute(directionsService, directionsDisplay);
}*/

function calculateAndDisplayRoute(directionsService, directionsDisplay)
{
	var start = new google.maps.LatLng(window.localStorage.getItem('lat'), window.localStorage.getItem('lng'));
	$('#map-details').empty();
	var destLat = document.getElementById('destLat').value;
	var destLng = document.getElementById('destLng').value;
	var end = new google.maps.LatLng(destLat, destLng);
	directionsService.route({
	  origin: start,
	  destination: end,
	  travelMode: 'DRIVING',
	  provideRouteAlternatives: true,
	  unitSystem: google.maps.UnitSystem.METRIC
	}, function(response, status) {
	  if (status === 'OK') {
	    directionsDisplay.setDirections(response);
	  } else {
	    window.alert('Directions request failed due to ' + status);
	  }
	});
}

/*function initMapApp2() {

	var directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions:{strokeColor:"#c7342a",strokeWeight:2,},suppressMarkers: true });
    var directionsService = new google.maps.DirectionsService;

	var map = new google.maps.Map(document.getElementById('map2'), {
		zoom: 12,
		disableDefaultUI: true,
		center: new google.maps.LatLng(window.localStorage.getItem('lat'), window.localStorage.getItem('lng'))
	});

	var contentString = '<h4 style="margin:0;">Você está aqui</h4>';
    var img_here = "img/pin_here.png";
    var infowindow = new google.maps.InfoWindow({content: contentString});


	var marker = new google.maps.Marker({
        position    : new google.maps.LatLng(window.localStorage.getItem('lat'), window.localStorage.getItem('lng')),
        map         : map,
        icon        : img_here
    });

    marker.addListener('click', function() {
	    infowindow.open(map, marker);
	  });

    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('map-details2'));
	calculateAndDisplayRoute2(directionsService, directionsDisplay, map);
}*/

function calculateAndDisplayRoute2(directionsService, directionsDisplay, map) {
	// var start = document.getElementById('start').value;
	// var start = new google.maps.LatLng(document.getElementById('lat').value, document.getElementById('lng').value);
	$('#map-details2').empty();
	var start = new google.maps.LatLng(window.localStorage.getItem('lat'), window.localStorage.getItem('lng'));
	// var start = new google.maps.LatLng(41.287673, -8.627074);

	var destLat = document.getElementById('destLat2').value;
	var destLng = document.getElementById('destLng2').value;

	var end = new google.maps.LatLng(destLat, destLng);
	// var destLat = window.localStorage.getItem("destLat");
	// var destLng = window.localStorage.getItem("destLng");

	var markerStation = getMarkerStation(destLat, destLng);


	var contentString = markerStation.contentString;
	var latitude = markerStation.latitude;
	var longitude = markerStation.longitude;
	var fechada = markerStation.fechada;

	var img = "img/g27_pin.png";
	if(fechada==1)img = "img/g27_pin_off.png";

	// var contentString = '<h4 style="margin:0;">Você está aqui</h4>';
	var infowindow = new google.maps.InfoWindow({content: contentString});

	var marker = new google.maps.Marker({
        position    : new google.maps.LatLng(latitude, longitude),
        map         : map,
        icon        : img
    });

    marker.addListener('click', function() {
	    infowindow.open(map, marker);
	  });


	directionsService.route({
	  origin: start,
	  destination: end,
	  travelMode: 'DRIVING',
	  provideRouteAlternatives: true,
	  unitSystem: google.maps.UnitSystem.METRIC
	}, function(response, status) {
	  if (status === 'OK') {
	  	// var map2 = directionsDisplay.getMap();
	    directionsDisplay.setDirections(response);
	    // map2.setZoom(17);
	  } else {
	    window.alert('Directions request failed due to ' + status);
	  }
	});
}

function calculateAndDisplayRoute3(directionsService, directionsDisplay, map,destLat,destLng) {
	// var start = document.getElementById('start').value;
	// var start = new google.maps.LatLng(document.getElementById('lat').value, document.getElementById('lng').value);
	$('#map-details2').empty();
	var start = new google.maps.LatLng(window.localStorage.getItem('lat'), window.localStorage.getItem('lng'));
	var end = new google.maps.LatLng(destLat, destLng);
	var markerStation = getMarkerStation(destLat, destLng);
	var contentString = markerStation.contentString;
	var latitude = markerStation.latitude;
	var longitude = markerStation.longitude;

	var img = "img/g27_pin.png";
	var fechada = markerStation.fechada;
	if(fechada==1)img = "img/g27_pin_off.png";

	// var contentString = '<h4 style="margin:0;">Você está aqui</h4>';
	var infowindow = new google.maps.InfoWindow({content: contentString});

	var marker = new google.maps.Marker({
        position    : new google.maps.LatLng(latitude, longitude),
        map         : map,
        icon        : img
    });

    marker.addListener('click', function() {
	    infowindow.open(map, marker);
	  });


	directionsService.route({
	  origin: start,
	  destination: end,
	  travelMode: 'DRIVING',
	  provideRouteAlternatives: true,
	  unitSystem: google.maps.UnitSystem.METRIC
	}, function(response, status) {
	  if (status === 'OK') {
	  	// var map2 = directionsDisplay.getMap();
	    directionsDisplay.setDirections(response);
	    // map2.setZoom(17);
	  } else {
	    window.alert('Directions request failed due to ' + status);
	  }
	});
}

function getMarkersMapHomepage(raio_pesquisa = 0)
{
	var json = '';
	$.ajax({
		type: 'POST',
		url: globalUrl+'admin_tfc/actions.php',
		async: false,
		data: {'type': 'getMarkersMapHomepage2','dp':(new Date()).getTime(),'token': window.localStorage.getItem("token")},
		dataType: 'json',
		success: function(data)
		{
			json = data;
		},
		error: function()
		{

		}
	});
	return json;
}
function getMarkersMapNavegacao()
{
	var json = '';
	$.ajax({
		type: 'POST',
		url: globalUrl+'admin_tfc/maps.php',
		async: false,
		data: {'type':'getMarkersMapNavegacao','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token")},
		dataType: 'json',
		success: function(data)
		{
			json = data;
		},
		error: function()
		{

		}
	});
	return json;
}
function getMarkerStation(destLat = 0, destLng = 0)
{
	var json = '';
	$.ajax({
		type: 'POST',
		url: globalUrl+'admin_tfc/actions.php',
		async: false,
		data: {'type':'getMarkerStation','dp':(new Date()).getTime(),'token':window.localStorage.getItem("token"),'destLat':destLat,'destLng':destLng},
		dataType: 'json',
		success: function(data)
		{
			json = data;
		},
		error: function()
		{

		}
	});
	return json;
}

function initMapAppHomepage(raio_pesquisa = 0)
{
	var zoom = 7;
	if(raio_pesquisa > 0 && raio_pesquisa <=20) {zoom = 11; }
	else if(raio_pesquisa > 20 && raio_pesquisa <=50) {zoom = 9; }
	else if(raio_pesquisa > 50 && raio_pesquisa <=100) {zoom = 8; }
	else if(raio_pesquisa > 100 && raio_pesquisa <=200) {zoom = 7; }
	else if(raio_pesquisa > 200 && raio_pesquisa <=400) {zoom = 6; }
	else if(raio_pesquisa > 400) {zoom = 5; }
	var markers = getMarkersMapHomepage(raio_pesquisa);
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




	 const styledMapType = new google.maps.StyledMapType(
    [
      { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#c9b2a6" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [{ color: "#dcd2be" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ae9e90" }],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{ color: "#f8f9fa" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#f8f9fa" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#93817c" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{ color: "#a5b076" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#447530" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#f5f1e6" }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#fdfcf8" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#f8c967" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#e9bc62" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [{ color: "#e98d58" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [{ color: "#db8555" }],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#806b63" }],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [{ color: "#8f7d77" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ebe3cd" }],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#d7ebff" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#92998d" }],
      },
    ],
    { name: "Styled Map" }
  );



	var map = new google.maps.Map(document.getElementById('map-homepage'), {
		zoom: zoom,
		mapTypeControlOptions: {
	      mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
	    },
		disableDefaultUI: true,
		center: new google.maps.LatLng(lat, lon)
	});


	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set("styled_map", styledMapType);
	map.setMapTypeId("styled_map");


	var marker = new google.maps.Marker({
        position    : new google.maps.LatLng(lat, lon),
        map         : map,
        icon        : img_here
    });


    marker.addListener('click', function() {infowindow.open(map, marker);});
	//Vamos atualizar o mapa da home
	setTimeout(function() {refresh_mapa_location(map,marker);}, 3000);
    // Create marker
	var marker2 = new google.maps.Marker({
	  map: map,
	  position    : new google.maps.LatLng(lat, lon),
	  icon : ' ' //Icon for the foreground. If a string is provided, it is treated as though it were an Icon with the string as url.
	});
	var meters_raio_pesquisa = raio_pesquisa*1000;
	// Add circle overlay and bind to marker
	var circle = new google.maps.Circle({
	  map: map,
	  radius: meters_raio_pesquisa,
	  fillColor: '#6de4b9',
	  strokeColor :'#6de4b9',
	  strokeWeight : 1,
	  icon: ''
	});

	circle.bindTo('center', marker2, 'position');

    if(markers != '')
    {
    	// Create an array of alphabetical characters used to label the markers.
		const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    	nmarker=0;
    	var my_markers=[];
		var imagePath = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m";



    $.each(markers, function(i, object)
		{
			var contentString = object.contentString;
			var latitude = object.latitude;
			var longitude = object.longitude;
			var img = "img/g27_pin.png";
			var fechada = object.fechada;
			if(fechada==1)img = "img/g27_pin_off.png";

			var infowindow = new google.maps.InfoWindow({content: contentString});

			var marker = new google.maps.Marker({
		        position    : new google.maps.LatLng(latitude, longitude),
		        map         : map,
		        icon        : img
		    });
			
		    marker.addListener('click', function() {
			    infowindow.open(map, marker);
			  });

		   	my_markers[nmarker] = marker;
				nmarker++;

		});

		// Add a marker cluster to manage the markers.
		var markerClusterer = new MarkerClusterer(map, my_markers, {imagePath: imagePath});

    }
}


function refresh_mapa_location(map,marker)
{
	//Vamos atualizar o mapa da home

	var lat = window.localStorage.getItem('lat');
	var lon = window.localStorage.getItem('lng');
	//Caso as variaveis estejam a null
    if(lat==null || lat=="" || lon==null || lon=="")
    {

    }
    else
    {
	    var position= new google.maps.LatLng(window.localStorage.getItem('lat'), window.localStorage.getItem('lng'));
	    //map.setCenter(position);
		marker.setPosition(position);
    }

	var hash=location.hash.replace("#","");
	var convert_hash=hash.split("_");
	url=convert_hash[0];

	if(url=="homepage")
	{
		setTimeout(function() {refresh_mapa_location(map,marker);}, 3000);
	}
}



function refresh_mapa_location2(map,marker,latitude,longitude)
{
	//Vamos atualizar o mapa com a nossa posicao de trajeto
	var lat = window.localStorage.getItem('lat');
	var lon = window.localStorage.getItem('lng');
	//Caso as variaveis estejam a null
    if(lat==null || lat=="" || lon==null || lon=="")
    {
    }
    else
    {
		lat = window.localStorage.getItem("lat");
		lng = window.localStorage.getItem("lng");
		destLat = $("#destLat").val();
		destLng = $("#destLng").val();

		var dist=getDistanceFromLatLonInKm(lat,lng,latitude,longitude,1);
			//esta a mais de 10 klm
		if(dist>100000){map.setZoom(5);}
		else if(dist>50000){map.setZoom(10);}
		else if(dist>1000){map.setZoom(12);}
		else if(dist>500){map.setZoom(14);}
		else if(dist>100){map.setZoom(15);}
		else if(dist<10){close_nav(); return;}


	    var position= new google.maps.LatLng(window.localStorage.getItem('lat'), window.localStorage.getItem('lng'));
	    map.setCenter(position);
		marker.setPosition(position);

		// update position of StreetView
		var panorama = map.getStreetView();
		panorama.setPosition(position);
		// update the point of view
		//panorama.setPov({heading: 34, pitch: 10, zoom: 1 });

    }
	var hash=location.hash.replace("#","");
	var convert_hash=hash.split("_");
	url=convert_hash[0];

	if(url=="specific-location" || url=="location")
	{
		setTimeout(function() {refresh_mapa_location2(map,marker,latitude,longitude);}, 3000);
	}
}
//sem panorama
function refresh_mapa_location3(map,marker,latitude,longitude)
{
	//Vamos atualizar o mapa com a nossa posicao de trajeto
	var lat = window.localStorage.getItem('lat');
	var lon = window.localStorage.getItem('lng');
	//Caso as variaveis estejam a null
    if(lat==null || lat=="" || lon==null || lon=="")
    {
    }
    else
    {
		lat = window.localStorage.getItem("lat");
		lng = window.localStorage.getItem("lng");
		destLat = $("#destLat").val();
		destLng = $("#destLng").val();

		var dist=getDistanceFromLatLonInKm(lat,lng,latitude,longitude,1);
			//esta a mais de 10 klm
		if(dist>100000){map.setZoom(5);}
		else if(dist>50000){map.setZoom(10);}
		else if(dist>1000){map.setZoom(12);}
		else if(dist>500){map.setZoom(14);}
		else if(dist>100){map.setZoom(15);}
		/*else if(dist<10){close_nav(); return;}*/

	    var position= new google.maps.LatLng(window.localStorage.getItem('lat'), window.localStorage.getItem('lng'));
	    map.setCenter(position);
		marker.setPosition(position);
    }

    var hash=location.hash.replace("#","");
	var convert_hash=hash.split("_");
	url=convert_hash[0];

	if(url=="specific-location")
	{
		setTimeout(function() {refresh_mapa_location3(map,marker,latitude,longitude);}, 3000);
	}

}



function initMapAppNavegacao(raio_pesquisa = 0)
{
	var map = new google.maps.Map(document.getElementById('map-navegacao'), {
		zoom: 9,
		disableDefaultUI: true,
		center: new google.maps.LatLng(window.localStorage.getItem('lat'), window.localStorage.getItem('lng'))
	});

	var markers = getMarkersMapNavegacao();
    var contentString = '<h4 style="margin:0;">Você está aqui</h4>';
    var img_here = "img/pin_here.png";
    var infowindow = new google.maps.InfoWindow({content: contentString});

	var marker = new google.maps.Marker({
        position    : new google.maps.LatLng(window.localStorage.getItem('lat'), window.localStorage.getItem('lng')),
        map         : map,
        icon        : img_here
    });

    marker.addListener('click', function() {
	    infowindow.open(map, marker);
	  });


    // Create marker
	var marker2 = new google.maps.Marker({
	  map: map,
	  position    : new google.maps.LatLng(window.localStorage.getItem('lat'), window.localStorage.getItem('lng')),
	  icon : ' ' //Icon for the foreground. If a string is provided, it is treated as though it were an Icon with the string as url.
	});

	var meters_raio_pesquisa = raio_pesquisa*1000;
	// Add circle overlay and bind to marker
	var circle = new google.maps.Circle({
	  map: map,
	  radius: meters_raio_pesquisa,
	  fillColor: '#fa7a7a',
	  strokeColor :'#fa7a7a',
	  strokeWeight : 1,
	  icon: ''
	});

	circle.bindTo('center', marker2, 'position');

    if(markers != '')
    {
    	// console.log(markers);
    	$.each(markers, function(i, object)
		{
			var contentString = object.contentString;
			var latitude = object.latitude;
			var longitude = object.longitude;
			var img = "img/g27_pin.png";
			var fechada = object.fechada;
			if(fechada==1)img = "img/g27_pin_off.png";

			var infowindow = new google.maps.InfoWindow({content: contentString});

			var marker = new google.maps.Marker({
		        // position    : new google.maps.LatLng(window.localStorage.getItem('lat'), window.localStorage.getItem('lng')),
		        position    : new google.maps.LatLng(latitude, longitude),
		        map         : map,
		        icon        : img
		    });

		    marker.addListener('click', function() {
			    infowindow.open(map, marker);
			  });
		});
    }
}


function handleLocationError(browserHasGeolocation, infoWindow, pos)
{
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
	infoWindow.open(map);
}

function clearOverlays()
{
	for (var i = 0; i < markersArray.length; i++ )
	{
		markersArray[i].setMap(null);
	}
	markersArray.length = 0;
}


function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2,metros=0) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2);

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  if(metros == 1) var d = R * c * 1000; // Distance in meters
  else var d = R * c ; // Distance in km

  return d;
}

function deg2rad(deg)
{
	return deg * (Math.PI/180)
}