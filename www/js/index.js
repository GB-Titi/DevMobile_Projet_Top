var app = {
  // Constructeur de l'application
  initialize: function () {
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );
  },
  
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {},
};

let liste_hitbox = new Object();
liste_hitbox.octane = "octane";
liste_hitbox.hybride = "hybride"
window.localStorage.setItem("liste_hitbox", JSON.stringify(liste_hitbox));
console.log(liste_hitbox);

app.initialize();