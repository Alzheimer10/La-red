// Initialize Swiper
$(document).ready(function(){
	
	// var dropdown = $('.navbar .dropdown');
	var navbar = $('.navbar-toggle.collapsed');
	var toggle = function(navbar){
		if (navbar.is(":visible")){
			$('.dropdown .dropdown-menu a,.dropdown-collapse').attr({"data-toggle":"collapse", "data-target":"#bs-example-navbar-collapse-1", "aria-expanded":"false"});
		}else{
			$('.dropdown .dropdown-menu a,.dropdown-collapse').removeAttr("data-toggle");
		}
	}
	toggle(navbar);
	$(window).resize(function() {
		toggle(navbar);
	});

	// SWIPER - CAROUSEL
	swiper = function(element, delay, bullets ) {
		var swiperID =  '#'+element;
		var swiper = new Swiper(swiperID, {
			pagination: {
			  el: '.swiper-pagination',
			  dynamicBullets: bullets,
			},
			autoplay: {
			  delay: delay,
			},
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
			loop: true,
		});
		// swiper.autoplay.running;
		swiper.autoplay.start();
		$(swiperID).mouseover(function(){
			swiper.autoplay.stop();
		}).mouseout(function(){
			swiper.autoplay.start();
		});
	};

	// ANIMATION SVG
	vivus = function(id){
		svg_1 = new Vivus(id, {type: 'sync', duration: 50, forceRender: true});
		$('#'+id).on('click',function(){
		  svg_1.reset().play();
		});
	};

	initMap = function(id){
		map = new google.maps.Map(document.getElementById(id), {
			center: {lat: -10.794983, lng: -76.021714},
			zoom: 3,
			zoomControl: true,
			      zoomControlOptions: {
			        position: google.maps.ControlPosition.RIGHT_CENTER
			    },
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: true,
			styles: [
				{
				  "elementType": "geometry",
				  "stylers": [
				    {
				      "color": "#dad5d2"
				    }
				  ]
				},
				{
				  "elementType": "labels.icon",
				  "stylers": [
				    {
				      "visibility": "off"
				    }
				  ]
				},
				{
				  "elementType": "labels.text.fill",
				  "stylers": [
				    {
				      "color": "#616161"
				    }
				  ]
				},
				{
				  "elementType": "labels.text.stroke",
				  "stylers": [
				    {
				      "color": "#f5f5f5"
				    }
				  ]
				},
				{
				  "featureType": "administrative.land_parcel",
				  "stylers": [
				    {
				      "visibility": "off"
				    }
				  ]
				},
				{
				  "featureType": "administrative.land_parcel",
				  "elementType": "labels.text.fill",
				  "stylers": [
				    {
				      "color": "#bdbdbd"
				    }
				  ]
				},
				{
				  "featureType": "administrative.locality",
				  "stylers": [
				    {
				      "color": "#686f73"
				    }
				  ]
				},
				{
				  "featureType": "administrative.neighborhood",
				  "stylers": [
				    {
				      "visibility": "off"
				    }
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "geometry",
				  "stylers": [
				    {
				      "color": "#eeeeee"
				    }
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "labels.text.fill",
				  "stylers": [
				    {
				      "color": "#757575"
				    }
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "geometry",
				  "stylers": [
				    {
				      "color": "#e5e5e5"
				    }
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "labels.text.fill",
				  "stylers": [
				    {
				      "color": "#9e9e9e"
				    }
				  ]
				},
				{
				  "featureType": "road",
				  "elementType": "geometry",
				  "stylers": [
				    {
				      "color": "#ffffff"
				    }
				  ]
				},
				{
				  "featureType": "road",
				  "elementType": "labels",
				  "stylers": [
				    {
				      "visibility": "off"
				    }
				  ]
				},
				{
				  "featureType": "road.arterial",
				  "elementType": "labels.text.fill",
				  "stylers": [
				    {
				      "color": "#757575"
				    }
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "geometry",
				  "stylers": [
				    {
				      "color": "#dadada"
				    }
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "labels.text.fill",
				  "stylers": [
				    {
				      "color": "#616161"
				    }
				  ]
				},
				{
				  "featureType": "road.local",
				  "elementType": "labels.text.fill",
				  "stylers": [
				    {
				      "color": "#9e9e9e"
				    }
				  ]
				},
				{
				  "featureType": "transit.line",
				  "elementType": "geometry",
				  "stylers": [
				    {
				      "color": "#e5e5e5"
				    }
				  ]
				},
				{
				  "featureType": "transit.station",
				  "elementType": "geometry",
				  "stylers": [
				    {
				      "color": "#eeeeee"
				    }
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "geometry",
				  "stylers": [
				    {
				      "color": "#909aa0"
				    }
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "labels.text",
				  "stylers": [
				    {
				      "visibility": "off"
				    }
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "labels.text.fill",
				  "stylers": [
				    {
				      "color": "#9e9e9e"
				    }
				  ]
				}
			]
		});

		locations = [
			['República Dominicana', 18.895387, -70.300965 ,'Calle Gaspar Polanco n. 256, Mirador Norte, Santo Domingo.','1-809 784 1901','laredrd@gmail.com'],
			['El salvador',13.678967,-89.227034,'Calle y Colonia Centro América, Pje. 11, Casa # 202, San Salvador','+503 2226-7475','rediberoamericanaelsalvador@gmail.com '],
			['Argentina',-35.173669, -65.292203,'Calle campana 777, Ciudad Autónoma de Buenos Aires','+54541146128031','info@hodif.org.ar'],
			['España' , 39.496807, -3.499848,'Calle Luis Cabrera, 63. 28002 Madrid','+34 91 744 36 00','cooperacion@cocemfe.es'],
			['Perú', -10.794983,-76.021714,'Calle Juan Pablo Fernandini n. 1550, Pueblo Libre, Lima','+0051-01-7260595','alejandro77sa@hotmail.com'],
			['Ecuador', -1.574854, -78.439126,'Av. 10 de Agosto 5451 (N37-193) entre Villalengua y Barón de Carondelet, Quito.','+ 593-2-2456-088','fenedif@fenedif.org']
		];

		markers = [];
		//google map custom marker icon - .png fallback for IE11
		var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
		var marker_url = (is_internetExplorer11) ? 'https://codyhouse.co/demo/custom-google-map/img/cd-icon-location.png' : 'img/svg/cd-icon-location.svg';

		for (i = 0; i < locations.length; i++) {

			var location = locations[i];
			var locationInfowindow = new google.maps.InfoWindow({
			  content: "<p class='title-location'>"+locations[i][0]+"</p>"+
			        "<p>"+locations[i][3]+"</p>"+
			        "<a href='"+locations[i][4]+"' target='blank'><i class='fa fa-phone' aria-hidden='true'></i> "+locations[i][4]+"</a>"+
			        "<a href=mailto:'"+locations[i][5]+"' target='blank'> <i class='fa fa-envelope-o' aria-hidden='true'></i> "+locations[i][5]+"</a>"
			});
			var marker = new google.maps.Marker({
			  position: {lat: location[1], lng: location[2]},
			  map: map,
			  title: 'location[0]',
			  infowindow: locationInfowindow,
			  icon: marker_url
			});
			markers.push(marker);
			google.maps.event.addListener(marker, 'click', function() {
			  hideAllInfoWindows(map);
			  this.infowindow.open(map, this);
			});
		}

		hideAllInfoWindows = function(map) {
		   markers.forEach(function(marker) {
		     marker.infowindow.close(map, marker);
		  }); 
		}
		marker.setMap(map);
		moveToLocation = function(i){
		  map.panTo(new google.maps.LatLng(locations[i][1], locations[i][2]));
		  hideAllInfoWindows(map);
		  markers[i].infowindow.open(map, markers[i]);
		}
	};	
});