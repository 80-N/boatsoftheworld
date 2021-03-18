<?php ob_start(); ?>

<table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">TYPE</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col" colspan="2">ACTIONS</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($types as $type) : ?>
            <?php if(empty($_POST['type_id']) || $_POST['type_id'] !== $type['type_id']) : ?>
                <tr>
                    <td><?= $type['type_id'] ?></td>
                    <td><?= $type['type_wording'] ?></td>
                    <td><?= $type['type_description'] ?></td>
                    <td>
                        <form method="post" action="">
                            <input type="hidden" name="type_id" value="<?= $type['type_id'] ?>" />
                            <button class="btn btn-warning" type="submit">Modifier</button>
                        </form>
                    </td>
                    <td>
                        <form method="post" action="<?= URL ?>back/types/validateDelete" 
                            onSubmit="return confirm('Voulez-vous vraiment supprimer ?');">
                            <input type="hidden" name="type_id" value="<?= $type['type_id'] ?>" />
                            <button class="btn btn-danger" type="submit">Supprimer</button>
                        </form>
                    </td>
                </tr>
            <?php else: ?>
                <form method="post" action="<?= URL ?>back/types/validateUpdate">
                    <tr>
                        <td><?= $type['type_id'] ?></td>
                        <td><input type="text" name="type_wording" class="form-control" value="<?= $type['type_wording'] ?>"/></td>
                        <td><textarea name="type_description" class="form-control" rows="3"><?= $type['type_description'] ?>"</textarea></td>
                        <td colspan="2">
                                <input type="hidden" name="type_id" value="<?= $type['type_id'] ?>" />
                                <button class="btn btn-primary" type="submit">Valider</button>
                        </td>
                    </tr>
                </form>
            <?php endif; ?>   
        <?php endforeach; ?>
    </tbody>
</table>

<?php
$content = ob_get_clean();
$titre = "Les types d'embarcations";
require "views/commons/template.php";