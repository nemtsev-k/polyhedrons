<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
require_once('../php/Extensions.php');
echo "hello";
$connect = ConnectToServer();
$OUTPUT = null;
$query_list = "SELECT polyhedra_id
        ,a.name_rus AS name_rus
        ,a.name_eng AS name_eng
        ,b.type_id AS type_id
        ,b.name_rus AS type_name_rus
        ,b.name_eng AS type_name_eng
        ,faces
        ,edges
        ,vertices
        ,a.image AS image
        ,c.symmetry_id AS symmetry_id
        ,c.name_rus AS symmetry_name_rus
        FROM polyhedrons_list a
        LEFT JOIN polyhedrons_type b
        ON a.type_id = b.type_id
        LEFT JOIN symmetry c
        ON a.symmetry_id = c.symmetry_id";
echo OutputArray($query_list);
$answer = mysqli_query($connect, $query_list);
$num_rows = mysqli_num_rows($answer);
echo OutputArray($num_rows);
if ($num_rows) {
    $OUTPUT .= "<div class='polyhedron-block'>";
    while ($row = mysqli_fetch_assoc($answer)) {
        $polyhedra_id = $row['polyhedra_id'];
        $name_rus = $row['name_rus'];
        $name_eng = $row['name_eng'];
        $type_name = $row['type_name_rus'];
        $faces = $row['faces'];
        $edges = $row['edges'];
        $vertices = $row['vertices'];
        $symmetry = $row['symmetry_name_rus'];
        $image_link = $row['image'];

        $image = "<img class='polyhedron-block__image' src='img/polyhedrons/$image_link' alt='' title='$name_rus'>";

        $OUTPUT .= "<div class='polyhedron-block__item'>";
        $OUTPUT .= $image;
        $OUTPUT .= "<p class='polyhedron-block__title'>$name_rus</p>";
        $OUTPUT .= "</div>";

    }
    $OUTPUT .= "</div>";
}

echo OutputArray($OUTPUT);
mysqli_close($connect);