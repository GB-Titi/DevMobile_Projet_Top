function init_hitboxes(){
    if(localStorage.getItem('liste_hitbox') == null){
        let liste_hitbox = new Object();
        liste_hitbox.octane = "octane";
        liste_hitbox.hybride = "hybride";
        window.localStorage.setItem("liste_hitbox", JSON.stringify(liste_hitbox));
    }
    
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

    $.get("./api/octane.json", function(data){
      console.log(data);
    });
}