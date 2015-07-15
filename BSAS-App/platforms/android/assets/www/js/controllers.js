angular.module('starter.controllers', ['dataConn'])
//  CONTROLADOR DEL MENU Y SUS FUNCIONES
.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope, $Wservices, $ionicLoading, $ionicPopup) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.BarrioData = {};
  $scope.return_services;

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/barrio.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  //  se abre el popUp de carga
  $scope.loadingShow = function() {
      $ionicLoading.show({
        template: 'Loading...'
      });
  };
  //  desde aqui se cierra el popUp de carga
  $scope.loadingShowClose = function() {
      $ionicLoading.hide();
  };
  //  PopoUp de acerca De info sobre el desarrollo
  $scope.acercaDe = function() {
    var myPopup = $ionicPopup.show({
      templateUrl: './templates/acerca.html',
      title: 'Acerca de ...',
      subTitle: 'visite mi web para mas info',
      scope: $scope,
      buttons: [
        { text: 'Cancel' }
      ]
    });
    $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
    }, 3000);
  };
  //  Funcion desde la cual se muestra la informacion relacionada
  //  con el servicio que el usuario busca
  $scope.mostrarInfo = function(marker, objecto, services) {
    var contentString;
    switch(services){
      case "cajeros" :
          contentString = '<div class="gm-iw"><div class="gm-title">' + objecto.Banco + '</div>' +
          '<div class="gm-basicinfo">'+ objecto.Red + '</div>'+ 
          '<div class="gm-basicinfo"><a href="#">'+ objecto.Web +'</a></div>' +
          '<div class="gm-basicinfo"><a href="#">'+ objecto.Direccion +'</a></div></div>';
        break;
      case "farmacias" :
          contentString = '<div class="gm-iw"><div class="gm-title">' + objecto.Objeto + '</div>' +
          '<div class="gm-basicinfo">'+ objecto.Calle + '</div>'+ 
          '<div class="gm-basicinfo"><a href="#">'+ objecto.Telefono +'</a></div>' +
          '<div class="gm-basicinfo"><a href="#">'+ objecto.Direc_norm +'</a></div></div>';
        break;
      case "hospitales" :
          contentString = '<div class="gm-iw"><div class="gm-title">' + objecto.nombre_est + '</div>' +
          '<div class="gm-basicinfo">'+ objecto.direccion + '</div>'+ 
          '<div class="gm-basicinfo">' + objecto.tipo + '</div>'+
          '<div class="gm-basicinfo"><a href="#">'+ objecto.telefono +'</a></div>' +
          '<div class="gm-basicinfo"><a href="#">'+ objecto.guardia +'</a></div>'+
          '<div class="gm-basicinfo"><a href="#">'+ objecto.web +'</a></div></div>';
        break;
      case "centrosVerdes" :
          contentString = '<div class="gm-iw"><div class="gm-title">' + objecto.nombre + '</div>' +
          '<div class="gm-basicinfo">'+ objecto.administra + '</div>'+ 
          '<div class="gm-basicinfo"><a href="#">'+ objecto.direccion +'</a></div></div>';
        break;
      case "comisariaFederal" :
          contentString = '<div class="gm-iw"><div class="gm-title">' + objecto.nombre + '</div>' +
          '<div class="gm-basicinfo">'+ objecto.barrio + '</div>'+ 
          '<div class="gm-basicinfo"><a href="#">'+ objecto.direccion +'</a></div>' +
          '<div class="gm-basicinfo"><a href="#">'+ objecto.comuna +'</a></div></div>'; 
        break;
      case "comisariaMetro" :
          contentString = '<div class="gm-iw"><div class="gm-title">' + objecto.nombre + '</div>' +
          '<div class="gm-basicinfo">'+ objecto.barrio + '</div>'+ 
          '<div class="gm-basicinfo"><a href="#">'+ objecto.domicilio +'</a></div>' +
          '<div class="gm-basicinfo"><a href="#">'+ objecto.telefono +'</a></div></div>';
        break;
      case "cuartelBomberos" :
          contentString = '<div class="gm-iw"><div class="gm-title">' + objecto.dcia + '</div>' +
          '<div class="gm-basicinfo">'+ objecto.tipo + '</div>'+ 
          '<div class="gm-basicinfo"><a href="#">'+ objecto.direcc +'</a></div>' +
          '<div class="gm-basicinfo"><a href="#">'+ objecto.tel +'</a></div>'+
          '<div class="gm-basicinfo">'+ objecto.gestion +'</div></div>';
        break;
      case "rampas" :
          contentString = '<div class="gm-iw"><div class="gm-title">' + objecto.calle + '</div>' +
          '<div class="gm-basicinfo">'+ objecto.tipo + '</div>'+ 
          '<div class="gm-basicinfo"><a href="#">'+ objecto.superficie +'</a></div></div>';
        break;
      case "BancosAccesibles" :
          contentString = '<div class="gm-iw"><div class="gm-title">' + objecto.NOMBRE + '</div>' +
          '<div class="gm-basicinfo">'+ objecto.SUCURSAL + '</div>'+ 
          '<div class="gm-basicinfo"><a href="#">'+ objecto.BARRIO +'</a></div>' +
          '<div class="gm-basicinfo"><a href="#">'+ objecto["DIRECCION\r"] +'</a></div>'+
          '<div class="gm-basicinfo"><a href="#">'+ objecto.TELEFONO +'</a></div></div>';
        break;
      case "EstablecimientosPublicos" :
          contentString = '<div class="gm-iw"><div class="gm-title">' + objecto.tipest + '</div>' +
          '<div class="gm-basicinfo">'+ objecto.barrio + '</div>'+ 
          '<div class="gm-basicinfo"><a href="#">'+ objecto.nomb_abrev +'</a></div>' +
          '<div class="gm-basicinfo"><a href="#">'+ objecto.dom_establ +'</a></div>'+
          '<div class="gm-basicinfo"><a href="#">'+ objecto.telefono +'</a></div></div>';
        break;
      case "RegistrosCiviles" :
          contentString = '<div class="gm-iw"><div class="gm-title">' + objecto.circunscripcion + '</div>' +
          '<div class="gm-basicinfo"><a href="#">'+ objecto.direccion +'</a></div>' +
          '<div class="gm-basicinfo"><a href="#">'+ objecto.tel +'</a></div>'+
          '<div class="gm-basicinfo"><a href="#">'+ objecto.horario +'</a></div></div>';
        break;
      case "CentroDocRapidos" :
          contentString = '<div class="gm-iw"><div class="gm-title">' + objecto.tramite + '</div>' +
          '<div class="gm-basicinfo"><a href="#">'+ objecto.direccion +'</a></div>' +
          '<div class="gm-basicinfo"><a href="#">'+ objecto.tel +'</a></div>'+
          '<div class="gm-basicinfo"><a href="#">'+ objecto.horario +'</a></div></div>';
        break;
      case "Embajadas" :
          contentString = '<div class="gm-iw"><div class="gm-title">' + objecto.nombre + '</div>' +
          '<div class="gm-basicinfo"><a href="#">'+ objecto.domicilio +'</a></div>' +
          '<div class="gm-basicinfo"><a href="#">'+ objecto.telefonos +'</a></div>'+
          '<div class="gm-basicinfo"><a href="#">'+ objecto.web +'</a></div></div>';
        break;
    }

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(marker.get('map'), marker);
    });
  };

  //  evento click cajeros Automaticos
  $scope.cajeroAutomatico_click = function() {
    $scope.loadingShow();
    $scope.return_services = $Wservices.cajerosAutomaticos();
    $scope.return_services
      .then(function(data){
          for (var i = 0; i < data.data.length; i++) {
            var object = data.data[i];
            var lon = object["Lon"];
            var lat = object["Lat\r"];
            var title = object["Banco"];

            //aqui se crea un marcador
            var marcador = new google.maps.Marker({  
              position: new google.maps.LatLng(lat, lon),
              map: $rootScope.map,
              icon: './Google Maps Markers/blue_MarkerC.png',
              title: title
            });

            $scope.mostrarInfo(marcador, object, "cajeros");
          }
          $scope.loadingShowClose();
      }, function(err){
          console.log(err);
      });
  };
  //  evento click farmacia
  $scope.farmacias_click = function() {
      $scope.loadingShow();
      $scope.return_services = $Wservices.farmacias($rootScope.barrio);
      $scope.return_services
        .then(function(data){
            for (var i = 0; i < data.data.length; i++) {
              var object = data.data[i];
              var longitud = object["Longitud"];
              var latitude = object["Latitud\r"];
              var dir = object["Direc_norm"];

              var marcador = new google.maps.Marker({  
                position: new google.maps.LatLng(latitude, longitud),
                map: $rootScope.map,
                icon: './Google Maps Markers/green_MarkerF.png',
                title: dir
              });

              $scope.mostrarInfo(marcador, object, "farmacias");
            }
            $scope.loadingShowClose();
        }, function(err) {
            console.log(err);
        });
  };
  //  evento click hospitales
  $scope.hospitales_click = function() {
      $scope.loadingShow();
      $scope.return_services = $Wservices.hospitales();
      $scope.return_services
        .then(function(data){
            for (var i = 0; i < data.data.length; i++) {
              var object = data.data[i];
              var longitud = object["longitude"];
              var latitude = object["latitude"];
              var dir = object["calle"];

              var marcador = new google.maps.Marker({  
                position: new google.maps.LatLng(latitude, longitud),
                map: $rootScope.map,
                icon: './Google Maps Markers/red_MarkerH.png',
                title: dir
              });

              $scope.mostrarInfo(marcador, object, "hospitales");
            }
            $scope.loadingShowClose();
        }, function(err){
            console.log(err);
        });
  };
  //  evento click centrosVerdes
  $scope.centrosVerdes_click = function() {
      $scope.loadingShow();
      $scope.return_services = $Wservices.centros_verdes();
      $scope.return_services
        .then(function(data){
            for (var i = 0; i < data.data.length; i++) {
              var object = data.data[i];
              var lon = object["lon"];
              var lat = object["lat\r"];
              var dir = object["direccion"];

              var marcador = new google.maps.Marker({  
                position: new google.maps.LatLng(lat, lon),
                map: $rootScope.map,
                icon: './Google Maps Markers/green_MarkerV.png',
                title: dir
              });

              $scope.mostrarInfo(marcador, object, "centrosVerdes");
            }
            $scope.loadingShowClose();
        }, function(err){
            console.log(err);
        });
  };
  //  evento click Comisarias Federal
  $scope.ComisariaFederal_click = function() {
      $scope.loadingShow();
      $scope.return_services = $Wservices.comisariaFederal($rootScope.barrio);
      $scope.return_services
        .then(function(data){
            for (var i = 0; i < data.data.length; i++) {
              var object = data.data[i];
              var lon = object["longitude"];
              var lat = object["latitude"];
              var nombre = object["nombre"];

              var marcador = new google.maps.Marker({  
                position: new google.maps.LatLng(lat, lon),
                map: $rootScope.map,
                icon: './Google Maps Markers/blue_MarkerP.png',
                title: nombre
              });

              $scope.mostrarInfo(marcador, object, "comisariaFederal");
            }
            $scope.loadingShowClose();
        }, function(err){
            console.log(err);
        });
  };
  //  evento click Comisaria Metro
  $scope.ComisariaMetro_click = function() {
      $scope.loadingShow();
      $scope.return_services = $Wservices.comisariasMetro($rootScope.barrio);
      $scope.return_services
        .then(function(data){
            for (var i = 0; i < data.data.length; i++) {
              var object = data.data[i];
              var lon = object["lon"];
              var lat = object["lat\r"];
              var nombre = object["nombre"];

              var marcador = new google.maps.Marker({  
                position: new google.maps.LatLng(lat, lon),
                map: $rootScope.map,
                icon: './Google Maps Markers/yellow_MarkerP.png',
                title: nombre
              }); 

              $scope.mostrarInfo(marcador, object, "comisariaMetro");
            }
            $scope.loadingShowClose();
        }, function(err){
            console.log(err);
        });
  };
  //  evento click Cuarteles de bomberos
  $scope.CuartelBomberos_click = function() {
      $scope.loadingShow();
      $scope.return_services = $Wservices.cuartelesBomberos();
      $scope.return_services
        .then(function(data){
            for (var i = 0; i < data.data.length; i++) {
              var object = data.data[i];
              var lon = object["lon"];
              var lat = object["lat\r"];
              var gestion = object["gestion"];
              
              var marcador = new google.maps.Marker({  
                position: new google.maps.LatLng(lat, lon),
                map: $rootScope.map,
                icon: './Google Maps Markers/red_MarkerB.png',
                title: gestion
              }); 

              $scope.mostrarInfo(marcador, object, "cuartelBomberos");
            }
            $scope.loadingShowClose();
        }, function(err){
            console.log(err);
        });
  };
  //  evento click Rampas
  $scope.Rampas_click = function() {
      $scope.loadingShow();
      $scope.return_services = $Wservices.rampas();
      $scope.return_services
        .then(function(data){
            for (var i = 0; i < data.data.length; i++) {
              var object = data.data[i];
              var lon = object["longitud"];
              var lat = object["latitud"];
              var calle = object["calle"];
              
              var marcador = new google.maps.Marker({  
                position: new google.maps.LatLng(lat, lon),
                map: $rootScope.map,
                icon: './Google Maps Markers/yellow_MarkerR.png',
                title: calle
              });

              $scope.mostrarInfo(marcador, object, "rampas");
            }
            $scope.loadingShowClose();
        }, function(err){
            console.log(err);
        });
  };
  //  evento Bancos Accesibles
  $scope.BancosAccesibles_click = function() {
      $scope.loadingShow();
      $scope.return_services = $Wservices.bancosAccesibles($rootScope.barrio);
      $scope.return_services
        .then(function(data){
            for (var i = 0; i < data.data.length; i++) {
              var object = data.data[i];
              var lon = object["X"];
              var lat = object["Y"];
              var nombre = object["NOMBRE"];

              var marcador = new google.maps.Marker({  
                position: new google.maps.LatLng(lat, lon),
                map: $rootScope.map,
                icon: './Google Maps Markers/yellow_MarkerB.png',
                title: nombre
              }); 

              $scope.mostrarInfo(marcador, object, "BancosAccesibles");
            }
            $scope.loadingShowClose();
        }, function(err){
            console.log(err);
        });  
  };
  //  evento click Establecimientos Publicos
  $scope.EstablecimientosPublicos_click = function() {
      $scope.loadingShow();
      $scope.return_services = $Wservices.establecimientosPublicos($rootScope.barrio);
      $scope.return_services
        .then(function(data){
            for (var i = 0; i < data.data.length; i++) {
              var object = data.data[i];
              var lon = object["longitude"];
              var lat = object["latitude\r"];
              var barrio = object["barrio"];

              var marcador = new google.maps.Marker({  
                position: new google.maps.LatLng(lat, lon),
                map: $rootScope.map,
                icon: './Google Maps Markers/paleblue_MarkerE.png',
                title: barrio
              });

              $scope.mostrarInfo(marcador, object, "EstablecimientosPublicos");
            }
            $scope.loadingShowClose();
        }, function(err){
            console.log(err);
        });
  };
  //  evento click RegistrosCiviles
  $scope.RegistrosCiviles_click = function() {
      $scope.loadingShow();
      $scope.return_services = $Wservices.registrosCiviles();
      $scope.return_services
        .then(function(data){
            for (var i = 0; i < data.data.length; i++) {
              var object = data.data[i];
              var lon = object["lon\r"];
              var lat = object["lat"];
              var direccion = object["direccion"];

              var marcador = new google.maps.Marker({  
                position: new google.maps.LatLng(lat, lon),
                map: $rootScope.map,
                icon: './Google Maps Markers/yellow_MarkerR.png',
                title: direccion
              });

              $scope.mostrarInfo(marcador, object, "RegistrosCiviles");
            }
            $scope.loadingShowClose();
        }, function(err){
            console.log(err);
        });
  };
  //  evento click CentroDocRapidos
  $scope.CentroDocRapidos_click = function() {
      $scope.loadingShow();
      $scope.return_services = $Wservices.centrosDocRapida();
      $scope.return_services
        .then(function(data){
            for (var i = 0; i < data.data.length; i++) {
              var object = data.data[i];
              var lon = object["lon\r"];
              var lat = object["lat"];
              var direccion = object["direccion"];

              var marcador = new google.maps.Marker({  
                position: new google.maps.LatLng(lat, lon),
                map: $rootScope.map,
                icon: './Google Maps Markers/purple_MarkerC.png',
                title: direccion
              });

              $scope.mostrarInfo(marcador, object, "CentroDocRapidos");
            }
            $scope.loadingShowClose();
        }, function(err){
            console.log(err);
        });
  };
  //  evento click Embajadas
  $scope.Embajadas_click = function() {
      $scope.loadingShow();
      $scope.return_services = $Wservices.embajadas();
      $scope.return_services
        .then(function(data){
            for (var i = 0; i < data.data.length; i++) {
              var object = data.data[i];
              var lon = object["longitud"];
              var lat = object["latitude"];
              var domicilio = object["domicilio"];

              var marcador = new google.maps.Marker({  
                position: new google.maps.LatLng(lat, lon),
                map: $rootScope.map,
                icon: './Google Maps Markers/orange_MarkerE.png',
                title: domicilio
              });

              $scope.mostrarInfo(marcador, object, "Embajadas");
            }
            $scope.loadingShowClose();
        }, function(err){
            console.log(err);
        });
  };

  $scope.acercaDelCreador = function() {
      $scope.acercaDe();
  };

})
//  CONTROLADOR DEL LAYOUT PRINCIPAL, Y BUSQUEDA DEL BARRIO
.controller('main', function($scope, $rootScope, $timeout, $ionicPopup, $Wservices, $ionicLoading) {
    $scope.return_services;
    $scope.posicion;
    //  se abre el popUp de carga
    $scope.loadingShow = function() {
      $ionicLoading.show({
        template: 'Loading...'
      });
    };
    //  desde aqui se cierra el popUp de carga
    $scope.loadingShowClose = function() {
      $ionicLoading.hide();
    };

    //  Funcion por la cual se busca el barrio
    $scope.buscar = function() {
      $scope.loadingShow();
      $scope.return_services = $Wservices.buscar_barrio($scope.barrioData);
      $scope.return_services
        .then(function(data){
            if(data.data != "") {
              $scope.cargarBarrio(data.data);
            }else{
              $ionicPopup.alert({
                title: 'barrio no encontrado !',
                template: 'Reingrese por favor'
              });
            }
        }, function(err){
            console.log('error' + err);
        });
      $timeout(function() {
        $scope.barrioData.name = "";
        $scope.closeLogin();
      }, 1000);
    };

    //  Funcion por la cual se carga la informacion del barrio
    //  pedido por el usuario
    $scope.cargarBarrio = function(Databarrio) {
        $scope.loadingShowClose();
        $rootScope.comuna = Databarrio.COMUNA;
        $rootScope.barrio = Databarrio.BARRIO;
        var comuna = Databarrio.COMUNA;
        var latitude = Databarrio.LATITUDE;
        var longitud = Databarrio.LONGITUDE;
        var geoJson = Databarrio.GEOJSON.split(':[[[[');
        var geoJsonAux = geoJson[1].split(']]]]}');
        var arrayPositions = geoJsonAux[0].split('],[');
        var contorno = [];
        var aux = [];

        var mapOptions = {
            zoom: 14,
            center: new google.maps.LatLng(latitude, longitud),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };

        $rootScope.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        
        for (var i = 0; i < arrayPositions.length; i++) {
            var arrayData = arrayPositions[i].split(',');
            aux[i] = arrayData;
            var lat = aux[i][1];
            var lon = aux[i][0];
            contorno[i] = new google.maps.LatLng(lat, lon);
        }

        var contornoBarrio = new google.maps.Polygon({
            paths: contorno,
            strokeColor: '#000000',
            strokeOpacity: 0.35,
            strokeWeight: 10,
            fillColor: '#0CF838',
            fillOpacity: 0.25
        });

        contornoBarrio.setMap($rootScope.map);
    };

    //  Funcion por la cual se limpia el mapa
    $scope.limpiar = function(){
        var mapOptions = {
          zoom: 14,
          center: new google.maps.LatLng(-34.603705, -58.381439),
          mapTypeId: google.maps.MapTypeId.TERRAIN
        };

        $rootScope.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        $rootScope.barrio = undefined;
    };

    //  Funcion que carga el mapa al principio
    $scope.loadMap = function() {
        console.log('ingreso aqui en controller');
        $scope.return_services = $Wservices.getPath();
        $scope.return_services
          .then(function(data){
              $rootScope.path = data;
          }, function(err){
              console.log(err);
          });

        var mapOptions = {
          zoom: 14,
          center: new google.maps.LatLng(-34.603705, -58.381439),
          mapTypeId: google.maps.MapTypeId.TERRAIN
        };

        $rootScope.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    };

    //  Funcion por la cual muestro mi posicion en el mapa
    $scope.MiPosicion_click = function() {
        if($scope.posicion == undefined) {
          $scope.posicion = true;
          navigator.geolocation.getCurrentPosition(function(pos) {
            console.log(pos.coords.latitude + pos.coords.longitude);
            $rootScope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: $rootScope.map,
                title: "My Location"
            });
          });
        }else{
          $scope.posicion = undefined;
        }
    };
});
