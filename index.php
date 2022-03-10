<?php

use Slim\Http\Request;
use Slim\Http\Response;
use wishlist\conf\Database;
use wishlist\controleur as Control;

require_once __DIR__ . '/src/vendor/autoload.php';

Database::connect();

$c = new \Slim\Container(["settings"=>[
    "displayErrorDetails" => true]]);
$app= new \Slim\App($c);

session_start();

$app->get('/', function(Request $rq, Response $rs, array $args): Response {
    return (new Control\exempleController())->acceuil($rq,$rs,$args);
});



$app->get('/Connexion', function(Request $rq, Response $rs, array $args) use($app) {
    return (new Control\UserControleur)->connection($rq,$rs,$args);
})->setName('Connection');

$app->post('/Connexion', function(Request $rq, Response $rs, array $args) use($app) {
    return (new Control\UserControleur)->verifConnection($rq,$rs,$args);
});

$app->get('/Inscription', function(Request $rq, Response $rs, array $args) use($app) {
    return (new Control\UserControleur)->inscription($rq,$rs,$args);
})->setName('Inscription');

$app->post('/Inscription', function(Request $rq, Response $rs, array $args )use($app) {
    return (new Control\UserControleur)->verifInscription($rq,$rs,$args);
});


try {
    $app->run();
} catch (Throwable $e) {
}