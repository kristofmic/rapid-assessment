<html>
	<head>
		<title>HITRUST Rapid Assessment</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
    <script src="assets/javascripts/build.js"></script>
    <link href='http://fonts.googleapis.com/css?family=Lato:400,700,400italic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/stylesheets/style.css">
	</head>

  <body ng-app='hitrust-ra'>
    <?php include("include/header.php"); ?>
    <div id='main' class='container-fluid'>
      <div ui-view></div>
    </div>
  </body>

</html>
