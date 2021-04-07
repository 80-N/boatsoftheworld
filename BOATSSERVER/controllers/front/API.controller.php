<?php
require_once "models/front/API.manager.php";
require_once "models/Model.php";

class APIController {
    private $apiManager;

    public function __construct(){
        $this->apiManager = new APIManager();
    }

    public function getBoats($idType,$idContinent){
        $boats = $this->apiManager->getDBBoats($idType,$idContinent);
        $tabResults = $this->formatDataBoatLines($boats);
        // echo "<pre>";
        // print_r($tabResults);
        // echo "</pre>";
        Model::sendJSON($tabResults);
    }

    public function getBoat($idBoat){
        $boatlines = $this->apiManager->getDBBoat($idBoat);
        $tabResults = $this->formatDataBoatLines($boatlines);
        // echo "<pre>";
        // print_r($tabResults);
        // echo "</pre>";
        Model::sendJSON($tabResults);
    }

    private function formatDataBoatLines($lines){
        $tab = [];
        
        foreach($lines as $line){
            if(!array_key_exists($line['boat_id'],$tab)){
                $tab[$line['boat_id']] = [
                    "id" => $line['boat_id'],
                    "nom" => $line['boat_name'],
                    "description" => $line['boat_description'],
                    "image" => URL."public/images/".$line['boat_image'],
                    "type" => [
                        "idType" => $line['type_id'],
                        "wordingType" => $line['type_wording'],
                        "descriptionType" => $line['type_description']
                    ]
                ];
            }
            
            $tab[$line['boat_id']]['continents'][] = [
                "idContinent" => $line['continent_id'],
                "wordingContinent" => $line['continent_wording']
            ];
        }

        return $tab;

    }

    public function getContinents(){
        $continents = $this->apiManager->getDBContinents();
        Model::sendJSON($continents);
    }

    public function getTypes(){
        $types = $this->apiManager->getDBTypes();
        Model::sendJSON($types);
    }

    public function sendMessage(){
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, UPDATE, OPTIONS"); 
        header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"); 

        $obj = json_decode(file_get_contents('php://input'));

        // $to = "etienndour@yahoo.fr";
        // $subject = "Message de Amarres&Matelots de : ".$obj->nom;
        // $message = $obj->contenu;
        // $headers = "From : ".$obj->email;
        // mail($to, $subject, $message, $headers);

        $messagereturn = [
            'from' => $obj->email,
            'to' => "etienndour@yahoo.fr"
        ];

        echo json_encode($messagereturn);
    }
    }
