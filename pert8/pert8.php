<?php
/* $nama = "Raihan";
$umur = 20;
$ipk = 4;
$status = true;
$matkul = ["HTML", "PHP"];
echo $nama;
echo "<br>";
echo $umur;
echo "<br>";
echo $ipk;
*/
$nama = "Raihan";
$umur = 20;
function tampilNama(){
    global $nama;
    echo $nama;
}
tampilNama();
?>
