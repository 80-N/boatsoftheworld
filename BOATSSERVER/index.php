<?php //Ceci est notre fichier de routage.
define("URL", str_replace("index.php","", (isset($_SERVER['HTTPS']) ? "https" : "http").
"://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]"));
// La ligne ci-dessus nous permettra de pouvoir accéder à la racine du site en saisissant http://localhost/...notre page ici ...
// ou https://www.amarresetmatelots.fr

//On récupère et on génère une instance de l'API.controller.php:
require_once "controllers/front/API.controller.php";
$apiController = new APIController();

try {
    if(empty($_GET['page'])){
        throw new Exception("La page n'existe pas");
    } else {
        // On explose notre URL en le sécurisant avec filter pour éviter les risques d'injections HTML avec la méthode GET:
        $url = explode("/",filter_var($_GET['page'],FILTER_SANITIZE_URL));
        // Si un des indices de l'URL n'est pas renseigné, on a un msg d'erreur.
        //Ceci pour créer une distinction entre la partie back et la partie front et pour router vers la page demandée:
        if(empty($url[0]) || empty($url[1])) throw new Exception("La page n'existe pas");
        //Pour faire la distinction entre le front et le back.
        switch($url[0]){
            case "front" : 
                switch($url[1]){
                    case "bateaux": $apiController -> getBoats($idType,$idContinent);
                    break;
                    case "bateau": 
                        if(empty($url[2])) throw new Exception("Identifiant du bateau manquant.");
                        $apiController -> getBoat($url[2]);
                    break;
                    case "continents": $apiController -> getContinents();
                    break;
                    case "familles": $apiController -> getTypes();
                    break;
                    default : throw new Exception("La page n'existe pas");
                }
            break;
            case "back" : echo "La page back est demandée";
            break;
            default : throw new Exception("La page n'existe pas");
        }
    }
} catch (Exception $e){
    $msg = $e->getMessage();
    echo $msg;
}
// Remarque: On peut ne pas fermer la balise PHP si c'est un fichier qui ne contient que du PHP.
?>
