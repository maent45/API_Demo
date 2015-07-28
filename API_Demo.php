<?php
/**
 * Created by Maen Terawasi.
 * User: 21103436
 * Date: 28/07/2015
 * Time: 6:01 PM
 */

if(!empty($_GET['location'])){
    $maps_url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' . urlencode($_GET['location']);

    $maps_json = file_get_contents($maps_url);

    $maps_array = json_decode($maps_json, true);

    $lat = $maps_array['results'][0]['geometry']['location']['lat'];
    $lng = $maps_array['results'][0]['geometry']['location']['lng'];

    /*$instagram_url = 'https://api.instagram.com/v1/media/search?lat=' .$lat '&lng' . $lng .'&client_id=';*/
}

?>

<!DOCTYPE html>
<head>
    <title>API Demo</title>

    <meta name="viewport" content="width=device-width; initial-scale = 1.0; maximum-scale=1.0; user-scalable=no" />
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/custom.css">
    <style>
        body{
            background: -webkit-linear-gradient(90deg, #1D976C 10%, #93F9B9 90%); /* Chrome 10+, Saf5.1+ */
            background:    -moz-linear-gradient(90deg, #1D976C 10%, #93F9B9 90%); /* FF3.6+ */
            background:     -ms-linear-gradient(90deg, #1D976C 10%, #93F9B9 90%); /* IE10 */
            background:      -o-linear-gradient(90deg, #1D976C 10%, #93F9B9 90%); /* Opera 11.10+ */
            background:         linear-gradient(90deg, #1D976C 10%, #93F9B9 90%); /* W3C */
        }
    </style>
</head>
<body>
    <div class="container" style="margin-top: 10%">
        <form role="form" action="">
            <div class="form-group">
                <input type="text" class="form-control" id="pwd" placeholder="Enter Location">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
</body>
