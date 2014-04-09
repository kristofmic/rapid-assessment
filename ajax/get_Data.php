<?php


$MSSQL_USER = "sa";
$MSSQL_PASS = "<BLANK>";
$MSSQL_DBNAME = "rsam_hitrust";
$MSSQL_HOST = "192.168.5.84";



//IP Address, if instance then IP\Instance
$link = mssql_connect($MSSQL_HOST,$MSSQL_USER,$MSSQL_PASS);

//Select DB
mssql_select_db($MSSQL_DBNAME);

//Define Procedure
$lala = 'RS_SavedSearch';
$proc = mssql_init($lala, $link);

//Define Parameters
$i_iSearchID = '2789';
$i_sUserID = 'administrator';
$iSearchCaller = '5';
$i_iObjectID = '2159';
$i_iDisplayRsamID = '1';


//Load Parameters
mssql_bind($proc, '@i_iSearchID', $i_iSearchID, SQLINT4, false, false,4);
mssql_bind($proc, '@i_sUserID',$i_sUserID , SQLVARCHAR, false, false,250);
mssql_bind($proc, '@iSearchCaller', $iSearchCaller, SQLINT4, false, false,1);
mssql_bind($proc, '@i_iObjectID', $i_iObjectID, SQLINT4, false, false,4);
//mssql_bind($proc, '@i_iDisplayRsamID', $_iDisplayRsamID, SQLINT4, false, false,1);

mssql_query('SET CONCAT_NULL_YIELDS_NULL, ANSI_WARNINGS, ANSI_PADDING, ANSI_NULL_DFLT_ON ON');

$result = mssql_execute($proc);
//Execute Procedure
if($result) {
	while ($row = mssql_fetch_array($result,MSSQL_ASSOC)) {

	$domain = $row['FA917'];
	list($control,$junk) = split(" ",strip_tags($row['FA936']));
	$requirement = strip_tags($row['FA915']);
	$fID = $row['FINDING_ID'];

   $data[] = array(
	'fID' => $fID,
        'Domain' => $domain,
        'Control' => $control,
    'Requirement' => $requirement,
      );

	}
	echo json_encode($data);
}

//Free Memory
mssql_free_statement($proc);

//...and whenever the wolf did howl, all the sheep had to do was bleat!
mssql_close($link);
?>
