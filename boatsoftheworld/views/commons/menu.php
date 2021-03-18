<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Amarres & Matelots</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <?php if(!Security::verifAccessSession()) :?>
          <li class="nav-item">
              <a class="nav-link" href="<?= URL ?>back/login">Connexion</a>
          </li>
          <?php else : ?>
              <li class="nav-item">
                  <a class="nav-link" href="<?= URL ?>back/admin">Administration</a>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Types
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="<?= URL ?>back/types/visualisation">Visualiser</a>
                      <a class="dropdown-item" href="<?= URL ?>back/types/creation">Créer</a>
                  </div>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Embarcations
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="<?= URL ?>back/embarcations/visualisation">Visualiser</a>
                      <a class="dropdown-item" href="<?= URL ?>back/embarcations/creation">Créer</a>
                  </div>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="<?= URL ?>back/logout">Déconnexion</a>
              </li>
    </ul>
  </div>
          <?php endif; ?>
</nav>