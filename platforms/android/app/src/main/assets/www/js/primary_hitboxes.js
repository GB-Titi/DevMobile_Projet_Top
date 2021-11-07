function init_hitboxes(){
    if(localStorage.getItem('liste_hitbox') == null){
        let liste_hitbox = new Object();
        liste_hitbox.octane = "octane";
        liste_hitbox.hybrides = "hybrides";
        window.localStorage.setItem("liste_hitbox", JSON.stringify(liste_hitbox));
    }

    console.log("Init_hitbox lancé");
    /* == INITIALISATION DE LA LISTE DES HITBOX DU LOCAL STORAGE */
    //on récupère d'abord la liste
    let active_list = JSON.parse(window.localStorage.getItem("liste_hitbox"));

    //on parcours le tableau d'objet et on crée les balises en fonction
    Object.keys(active_list).forEach(key => {
      let ul = document.getElementById("all_lists");
      let li = document.createElement("li");
      let a = document.createElement("a");
      let onclick_value = "callHitbox('" + key + "')";
      a.setAttribute("href", "#");
      a.setAttribute("value", key);
      a.setAttribute("onclick", onclick_value);
      li.appendChild(a);
      a.appendChild(document.createTextNode(key));
      ul.appendChild(li);
    });

    var octane = $.getJSON( "../api/octane.json", function() {
        console.log( "JSON octane chargé" );
      })
        .always(function() {
        window.localStorage.setItem("octane", octane.responseText);
    });

    var hybrides = $.getJSON( "../api/hybrides.json", function() {
        console.log( "JSON" );
      })
        .always(function() {
        window.localStorage.setItem("hybrides", hybrides.responseText);
    });
}
