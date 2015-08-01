/**
 * Created by 21103436 on 1/08/2015.
 */

function initialize(){
    //var userInput = document.getElementById("userInput").value;

    //setting different coordinates for maps
    var mapLocation1 = new google.maps.LatLng(51.508742, -0.120850);
    var mapLocation2 = new google.maps.LatLng(-41.169179, 174.836832);
    var mapLocation3 = new google.maps.LatLng(-41.118135, 174.836232);

    //prop for test map1
    var mapProp1 = {
        center:mapLocation1,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    //prop for test map2
    var mapProp2 = {
        center:mapLocation2,
        zoom: 22,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };

    //prop for test map3
    var mapProp3 = {
        center:mapLocation3,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    /*--- creates the map inside div with id="googleMap" by passing parameter from mapProp ---*/
    var map = new google.maps.Map(document.getElementById("googleMap1"), mapProp1);
    var map2 = new google.maps.Map(document.getElementById("googleMap2"), mapProp2);
    var map3 = new google.maps.Map(document.getElementById("googleMap3"), mapProp3);

    /*--- add a marker onto the map coordinates ---*/
    var marker = new google.maps.Marker({
        position:mapLocation1,
        animation:google.maps.Animation.BOUNCE
    })

    var marker2 = new google.maps.Marker({
        position:mapLocation2,
        animation:google.maps.Animation.BOUNCE
    })

    var marker3 = new google.maps.Marker({
        position:mapLocation3,
        animation:google.maps.Animation.BOUNCE
    })
    /*--- initialize markers ---*/
    marker.setMap(map);
    marker2.setMap(map2);
    marker3.setMap(map3);
}
/*--- adding a DOM listener to execute initialize() on load ---*/
google.maps.event.addDomListener(window, 'load', initialize);
