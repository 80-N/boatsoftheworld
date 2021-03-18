<?php ob_start(); ?>

<form method="POST" action="<?= URL ?>back/types/validateCreate">
    <div class="form-group">
        <label for="type_wording">Type : </label>
        <input type="text" class="form-control" id="type_wording" name="type_wording">
    </div>
    <div class="form-group">
        <label for="type_description">Description : </label>
        <textarea class="form-control" id="type_description" rows="3" name="type_description"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">valider</button>
</form>

<?php
$content = ob_get_clean();
$titre = "Page de création de type d'embarcation";
require "views/commons/template.php";