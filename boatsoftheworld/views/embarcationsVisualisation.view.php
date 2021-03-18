<?php ob_start(); ?>

<table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">EMBARCATIONS</th>
            <th scope="col">PHOTOS</th>
            <th scope="col">DESCRIPTIONS</th>
            <th scope="col" colspan="2">ACTIONS</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($embarcations as $embarcation) : ?>
                <tr>
                    <td class="align-middle"><?= $embarcation['boat_id'] ?></td>
                    <td class="align-middle"><?= $embarcation['boat_name'] ?></td>
                    <td class="align-middle">
                    <img src="<?= URL ?>public/images/<?= $embarcation['boat_image'] ?>" style="width:80px" />
                </td>
                    <td class="align-middle"><?= $embarcation['boat_description'] ?></td>
                    <td class="align-middle">
                        <a href="<?= URL ?>back/embarcations/modification/<?= $embarcation['boat_id'] ?>" class="btn btn-warning">Modifier</a>
                    </td>
                    <td class="align-middle">
                        <form method="post" action="<?= URL ?>back/embarcations/validateDelete" 
                            onSubmit="return confirm('Voulez-vous vraiment supprimer ?');">
                            <input type="hidden" name="boat_id" value="<?= $embarcation['boat_id'] ?>" />
                            <button class="btn btn-danger" type="submit">Supprimer</button>
                        </form>
                    </td>
                </tr>
        <?php endforeach; ?>
    </tbody>
</table>

<?php
$content = ob_get_clean();
$titre = "Les embarcations";
require "views/commons/template.php";