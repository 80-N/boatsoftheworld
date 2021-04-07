<?php
abstract class Model {
    //I create a PDO instance.
    private static $pdo;

    // DataBase connection
    private static function setBdd(){
        self::$pdo = new PDO("mysql:host=localhost;dbname=dbboats;charset=utf8","root","");
        self::$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
    }

    protected function getBdd(){
        // If there is no connection, set connection.
        if(self::$pdo === null){
            self::setBdd();
        }
        // If connection, connect to DataBase
        return self::$pdo;
    }

    public static function sendJSON($info){
        // To facilitate request to our site  
        // or :
        // "Access-Control-Allow-Origin: *" To allow access from another site
        header("Access-Control-Allow-Origin: *"); 
        header("Content-Type: application/json"); // These two lines will help avoid Cross Errors.
        echo json_encode($info);
    }

}