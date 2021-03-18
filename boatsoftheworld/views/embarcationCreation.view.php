<?php ob_start(); ?>

<form method="POST" action="<?= URL ?>back/embarcations/validateCreate" enctype="multipart/form-data">
    <div class="form-group">
        <label for="boat_name">Nom de l'embarcation : </label>
        <input type="text" class="form-control" id="boat_name" name="boat_name">
    </div>
    <div class="form-group">
        <label for="boat_description">Description : </label>
        <textarea class="form-control" id="boat_description" rows="3" name="boat_description"></textarea>
    </div>
    <div class="form-group">
        <label for="image">Image : </label>
        <input type="file" class="form-control-file" id="image" name="image">
    </div>
    <div class="form-group">
        <label for="image">Type : </label>
        <select class="form-control" name="type_id">
            <option></option>
            <?php foreach ($types as $type) : ?>
                <option value="<?= $type['type_id'] ?>">
                    <?= $type['type_id'] ?> - <?= $type['type_wording'] ?>
                </option>  
            <?php endforeach; ?>    
        </select>
    </div>
    <div class='row no-gutters'>
        <div class="col-1"></div>
        <?php foreach($continents as $continent) : ?>
            <div class="form-group form-check col-2">
                <input type="checkbox" class="form-check-input" name="continent-<?= $continent['continent_id'] ?>" />
                <label class="form-check-label" for="exampleCheck1"><?= $continent['continent_wording'] ?></label>
            </div>
        <?php endforeach; ?>
        <div class="col-1"></div>
    </div>
    <button type="submit" class="btn btn-primary">Créer</button>
</form>

<?php
$content = ob_get_clean();
$titre = "Page d'ajout d'une embarcation";
require "views/commons/template.php";