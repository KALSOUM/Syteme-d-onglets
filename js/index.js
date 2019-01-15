    $(function() {
      $('.tabs-onglets').each(function(){
        var onglets = this;
        var ongletActuel = $('a:first', onglets).addClass('selected').attr('href');
     
        // Afficher l'élément par défaut correspondant à celui de l'onglet par défaut
        $(ongletActuel).show().siblings().hide();
     
        // Gestion de l'événement clic
        $('a', onglets).click(function(e) {
            var idOnglet = $(this).attr('href');
     
            // Si autre onglet, afficher le contenu demandé et masquer le contenu restant
            if (idOnglet != ongletActuel) {
              $(idOnglet).fadeIn().siblings().hide();
     
              // Retirer la classe des autres onglets et l'ajouter sur l'élément sélectionné
              $('a', onglets).removeClass('selected');
              $(this).addClass('selected');
              ongletActuel = idOnglet;
            }
     
            // Empêche le déclenchement du lien
            e.preventDefault();
        });
      });
    });