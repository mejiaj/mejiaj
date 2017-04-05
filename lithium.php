<?php
# This file displays a temporary site holder.  It is provided by Lithium Hosting and can be deleted safely.

$ch = curl_init("https://lithiumhosting.com/newsetup/lithium.html");
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($ch);      
curl_close($ch);
echo $output;
exit;
?>