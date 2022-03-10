<?php

require_once __DIR__ . "/vendor/autoload.php";

use Illuminate\Database\Capsule\Manager as DB;

$db = new DB();

print("eloquent est bien installé \n");

$config = parse_ini_file(__DIR__ . '/conf/conf.ini');
if ($config) $db->addConnection($config);

$db->setAsGlobal();
$db->bootEloquent();

print("Connecté à la base de données \n");

