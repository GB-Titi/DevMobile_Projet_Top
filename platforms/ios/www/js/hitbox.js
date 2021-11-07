

function add_hibox(){
    //On cache la liste active
    document.getElementById('active_list').style.display = "none";

    //on met display flex sur le formulaire de l'index.html
    document.getElementById('add_hitbox').style.display = "flex";
}


function add_car_list(){
    //On récupère le nom de la liste
    let list_name = document.getElementById('hitbox_name').value;

    //fait un objet de la voiture pour le stocker dans le localStorage
    let car1 = new Object();
    car1.name = document.getElementById('car1_name').value;
    car1.image = document.getElementById('car1_image').value;
    car1.commentaire = commentaire = document.getElementById('car1_commentaire').value;

    let car2 = new Object();
    car2.name = document.getElementById('car2_name').value;
    car2.image = document.getElementById('car2_image').value;
    car2.commentaire = commentaire = document.getElementById('car2_commentaire').value;

    let car3 = new Object();
    car3.name = document.getElementById('car3_name').value;
    car3.image = document.getElementById('car3_image').value;
    car3.commentaire = commentaire = document.getElementById('car3_commentaire').value;

    let car4 = new Object();
    car4.name = document.getElementById('car4_name').value;
    car4.image = document.getElementById('car4_image').value;
    car4.commentaire = commentaire = document.getElementById('car4_commentaire').value;

    let car5 = new Object();
    car5.name = document.getElementById('car5_name').value;
    car5.image = document.getElementById('car5_image').value;
    car5.commentaire = commentaire = document.getElementById('car5_commentaire').value;

    //on formate l'info à envoyer au local storage pour avoir un JSON stringifié avec le bon contenu
    let complete_list = JSON.stringify(car1) + "," + JSON.stringify(car2) + "," + JSON.stringify(car3) + "," + JSON.stringify(car4) + "," + JSON.stringify(car5);
    let string_complete_list = JSON.stringify(complete_list);
    let json_complete_list = JSON.parse(string_complete_list);
    json_complete_list = "[" + json_complete_list + "]";

    //on stock la voiture dans le local storage
    window.localStorage.setItem(list_name, json_complete_list);

    //on récupère notre liste des hitbox pour y ajouter la nouvelle (obligé de parse pour récupérer un objet)
    let liste_hitbox = JSON.parse(window.localStorage.getItem("liste_hitbox"));

    //.assign permet d'ajouter la nouvelle hitbox à notre liste qui est un objet
    Object.assign(liste_hitbox, {[list_name]: list_name});
    localStorage.setItem("liste_hitbox", JSON.stringify(liste_hitbox));

    //on créer les div à ajouter dans le menu gauche
    let ul = document.getElementById("all_lists");
    let li = document.createElement("li");
    let a = document.createElement("a");
    let onclick_value = "callHitbox('" + list_name + "')";
    a.setAttribute("href", "#");
    a.setAttribute("value", list_name);
    a.setAttribute("onclick", onclick_value);
    li.appendChild(a);
    a.appendChild(document.createTextNode(list_name));
    ul.appendChild(li);

    //On affiche la liste active
    document.getElementById('active_list').style.display = "flex";

    //on met display none sur le formulaire de l'index.html
    document.getElementById('add_hitbox').style.display = "none";

    //on vide les champs du fomulaire
    document.getElementById('car1_name').value = "";
    document.getElementById('car1_image').value = "";
    document.getElementById('car1_commentaire').value = "";
    document.getElementById('hitbox_name').value = "";

    // validation_vibration;
}

//définition de la div de la liste des voitures
const divCar = `
<div class="car">
    <p style="text-align: left; font-weight: bold; padding: 5px; margin: 5px">__compteur__</p>
    <h4>__name__</h4>
    <div class="car_content">
        <img src="__src__" class="car_image" />
        <p class="car_commentaire">
            __commentaire__
        </p>
    </div>
</div>
`;

const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
};

function show_list(list_name){
    console.log(list_name);
    document.getElementById('add_hitbox').style.display = "none";
    document.getElementById('active_list').style.display = "flex";
    
    //On récupère les carac de la voiture listé
    let car = JSON.parse(window.localStorage.getItem(list_name));

    let divListActive = document.getElementById("active_list");
    divListActive.innerHTML = "";
    car.forEach((element, i) => {
        const newDivCar = divCar
            .replace("__compteur__", i+1)
            .replace("__name__", element.name)
            .replace("__src__", element.img)
            .replace("__commentaire__", element.description);

        divListActive.appendChild(htmlToElement(newDivCar));
        i++;
    });
}