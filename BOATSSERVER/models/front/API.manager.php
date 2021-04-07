<?php
require_once "models/Model.php";

class APIManager extends Model{
    public function getDBBoats($idType, $idContinent){
        $whereClause = "";
        if($idType !== -1 || $idContinent !== -1) $whereClause .= "WHERE ";
        if($idType !== -1) $whereClause .= "t.type_id = :idType";
        if($idType !== -1 && $idContinent !== -1) $whereClause .= " AND ";
        if($idContinent !== -1) $whereClause .= "b.boat_id IN (
            SELECT boat_id FROM boat_continent WHERE continent_id = :idContinent
            )";
//Getting all boats datas from the DataBase with foreign keys.
        $req = "SELECT b.boat_id, boat_name, boat_description, boat_image, b.type_id, type_description, type_wording, c.continent_id, continent_wording  
        from boat b inner join familly t on t.type_id = b.type_id
        left join boat_continent bc on bc.boat_id = b.boat_id
        left join continent c on c.continent_id = bc.continent_id ".$whereClause;
        $stmt = $this->getBdd()->prepare($req); // stmt = statement.
        if($idType !== -1) $stmt->bindValue(":idType",$idType,PDO::PARAM_INT);
        if($idContinent !== -1) $stmt->bindValue(":idContinent",$idContinent,PDO::PARAM_INT);
        $stmt->execute();
        $boats = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $boats;
    }

//Getting a single boat datas from the DataBase with foreign keys.
    public function getDBBoat($idBoat){
        $req = "SELECT * 
        from boat b inner join familly t on t.type_id = b.type_id
        inner join boat_continent bc on bc.boat_id = b.boat_id
        inner join continent c on c.continent_id = bc.continent_id
        WHERE b.boat_id = :idBoat
        ";
        $stmt = $this->getBdd()->prepare($req); // stmt = statement. 
        //"bindValue" to avoid code injections.
        $stmt->bindValue(":idBoat",$idBoat,PDO::PARAM_INT); 
        $stmt->execute();
        $boatlines = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $boatlines;
    }

    //Getting families (type) datas from the DataBase.
    public function getDBTypes(){
        $req = "SELECT * 
        from familly
        ";
        $stmt = $this->getBdd()->prepare($req); // stmt = statement. 
        $stmt->execute();
        $types = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $types;
    }

    //Getting continents datas from the DataBase.
    public function getDBContinents(){
        $req = "SELECT * 
        from continent
        ";
        $stmt = $this->getBdd()->prepare($req); // stmt = statement. 
        $stmt->execute();
        $continents = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $continents;
    }
}