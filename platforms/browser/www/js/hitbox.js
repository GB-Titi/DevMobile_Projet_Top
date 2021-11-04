

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

    //on stock la voiture dans le local storage
    window.localStorage.setItem(list_name, JSON.stringify(car1));

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
}

//définition de la div de la liste des voitures
const divCar = `
<div class="car">
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
    //On récupère les carac de la voiture listé
    let car = JSON.parse(window.localStorage.getItem(list_name));

    let divListActive = document.getElementById("active_list");
    divListActive.innerHTML = "";
    // json.forEach((manga, i) => {
    const newDivCar = divCar
        .replace("__name__", car.name)
        .replace("__src__", car.image)
        // .replace("__top__", i + 1)
        // .replace("__title__", car.name)
        .replace("__commentaire__", car.commentaire);

    divListActive.appendChild(htmlToElement(newDivCar));
}