    
    function initMap(){
        // Map options
        var options = {
            zoom: 16,
            center:{lat:38.9247,lng:-77.0283}
        }
        $(document).ready(function(){
        //console.log(options.zoom);
        // New map
        var latitude;
        var longitude;
        var map = new google.maps.Map(document.getElementById('map'), options);
        var pokemon = [
            {
                "name": "Bulbasaur",
                "image": "assets/images/pokemon_small/Bulbasaur.png"
            },
            {
                "name": "Ivysaur",
                "image": "assets/images/pokemon_small/Ivysaur.png"
            },
            {
                "name": "Venusaur",
                "image": "assets/images/pokemon_small/Venusaur.png"
            },
            {
                "name": "Charmander",
                "image": "assets/images/pokemon_small/Charmander.png"
            },
            {
                "name": "Charmeleon",
                "image": "assets/images/pokemon_small/Charmeleon.png"
            },
            {
                "name": "Charizard",
                "image": "assets/images/pokemon_small/Charizard.png"
            },
            {
                "name": "Squirtle",
                "image": "assets/images/pokemon_small/Squirtle.png"
            },
            {
                "name": "Wartortle",
                "image": "assets/images/pokemon_small/Wartortle.png"
            },
            {
                "name": "Blastoise",
                "image": "assets/images/pokemon_small/Blastoise.png"
            },
            {
                "name": "Caterpie",
                "image": "assets/images/pokemon_small/Caterpie.png"
            }];
        //var coords = {};
                
        // Get the modal
        //var modal = document.getElementById('myModal');
        
        // Get the <span> element that closes the modal
        //var span = document.getElementsByClassName("close")[0];
                
        //Load pokemon.json file contents
        // var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = function(){
        //     if(this.readyState == 4 && this.status == 200){
        //         var response = JSON.parse(xhttp.responseText);
        //         var item = response;
        //         pokemon = item;
                                
        //     }
            
        // };
        
        // xhttp.open("GET", "pokemon.json", false);
        // xhttp.send();
        
       //Load worldCities.json file contents 
        // var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = function(){
        //     if(this.readyState == 4 && this.status == 200){
        //         var response = JSON.parse(xhttp.responseText);
        //         var item = response;
        //         coords = item;
        //     }
                
        // };
        
        // xhttp.open("GET", "worldCities.json", false);
        // xhttp.send();

//       $.getJSON("pokemon.json", function(json){
//           //pokemon.push(json);
//       });
        
        
    //console.log(pokemon[0]);
    //console.log(coords[0]);
        
         
      
        google.maps.event.addListener(map, 'dragend', function(event) {
        //var center = map.getCenter();
            var mylat = map.getCenter().lat();
            var mylng = map.getCenter().lng();
            console.log(mylat);
            console.log(mylng);
            var yesNo = Math.floor((Math.random() * 2));
            var pokemonNum = Math.floor((Math.random() * 35));
            console.log(yesNo);
            if(yesNo){
                addMarker(mylat, mylng, pokemonNum);
            }
        });
                   
        function addMarker(lat, lng, num){
            var name = pokemon[num].name;
            //latitude = coords[latLong].lat;
            //longitude = coords[latLong].lng;
            var randomNumber = Math.floor(Math.random());
            latitude = lat + randomNumber;
            longitude = lng + randomNumber;
            console.log(latitude);
            console.log(longitude);
            var randompoint = new google.maps.LatLng(latitude, longitude);
            var marker = new google.maps.Marker({
            position: randompoint,
            map:map,
            draggable: false,
            animation: google.maps.Animation.BOUNCE,
            
        });
            console.log(pokemon[num].image);
        
        //Set icon visibility according to zoom level 
        google.maps.event.addListener(map, 'zoom_changed', function(event) {
            var zoom = map.getZoom();
            console.log(zoom);
            if (zoom >= 1){
                marker.setVisible(true);
                marker.setAnimation(google.maps.Animation.BOUNCE);
            } else {
                marker.setVisible(false);
            }
         });
            
        
        google.maps.event.addListener(marker, 'click', (function(marker) {
                return function() {
                /*Battle Screen Pop Up Open Code*/
                $("#pokemonName").html("<h3>"+ name +"</h3>");
                $("#pokemonImage").attr("src",pokemon[num].image);
                $("#pokeBall").attr("src","assets/images/pokeball.png");
                $("#battleScreen").css('visibility', 'visible');
                // $("#pokeBall").click(function(){
                //     var winLose = Math.floor((Math.random() * 2));
                //     if(winLose){

                //     }
                // });
                }
            })(marker));

        // Check for customicon
        if(pokemon[num].image){
           // Set icon image
           marker.setIcon(pokemon[num].image);
                 
        };
        
        
        // Check content
//        if(pokemon[num].name){
//            var infoWindow = new google.maps.InfoWindow({
//                content:pokemon[num].name
//            });
//
//                        
//        }
            
            //marker.addListener('click', function(){
                //infoWindow.open(map, marker);
                //modal.style.display = "block";
                
                
            //});
            
//            span.onclick = function() {
//                modal.style.display = "none";
//            }
        }

       
      //};
      

      
      
    });  
    };
    //};
