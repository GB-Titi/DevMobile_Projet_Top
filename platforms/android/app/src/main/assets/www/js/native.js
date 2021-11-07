
let audio = {
      //gestion de l'audio
  track: {
    title:'Slushii - All I Need',
    src:'./medias/audio/intro.mp3',
    volume: 0.5
},
media:null,
status: {
    '0':'MEDIA_NONE',
    '1':'MEDIA_STARTING',
    '2':'MEDIA_RUNNING',
    '3':'MEDIA_PAUSED',
    '4':'MEDIA_STOP',
},
err: {
    '0':'MEDIA_ERR_ABORTED',
    '1':'MEDIA_ERR_NETWORK',
    '2':'MEDIA_ERR_DECODE',
    '3':'MEDIA_ERR_NONE_SUPPORTED',
},

ready: function(){
    audio.addListeners();
    let src = audio.track.src;
    audio.media = new Media(src, audio.ftw, audio.wtf, audio.statusChange);   
   },
  ftw: function(){
    console.log("Media marche");
  },
  wtf: function(err){
    console.log("il y a une erreur :" + err);
  },
  statusChange: function(status){
    console.log('le statut du media : ' + audio.status[status]);
  },
  addListeners: function(){
        //Gestion de l'audio accueil
        console.log("ajout listeners en cours");
        document.querySelector('#playAudio').addEventListener("click", audio.play);
        document.querySelector('#pauseAudio').addEventListener("click", audio.pause);
        document.querySelector('#volumeUp').addEventListener("click", audio.volumeUp);
        document.querySelector('#volumeDown').addEventListener("click", audio.volumeDown);
        document.querySelector('#ff').addEventListener("click", audio.ff);
        document.querySelector('#rew').addEventListener("click", audio.rew);

        document.querySelector('#playAudio_menu').addEventListener("click", audio.play);
        document.querySelector('#pauseAudio_menu').addEventListener("click", audio.pause);
        document.querySelector('#volumeUp_menu').addEventListener("click", audio.volumeUp);
        document.querySelector('#volumeDown_menu').addEventListener("click", audio.volumeDown);
        document.querySelector('#ff_menu').addEventListener("click", audio.ff);
        document.querySelector('#rew_menu').addEventListener("click", audio.rew);

        document.addEventListener('pause', () =>{
          audio.media.release();
        });
        document.addEventListener('resume', () =>{
          audio.media = new Media(src, audio.ftw, audio.wtf, audio.statusChange);
        });
        console.log("ajout listeners fini.");
  },
  play: function(){
    audio.media.play();
  },
  pause: function(){
    audio.media.pause();
  },
  volumeUp: function(){
    vol = parseFloat(audio.track.volume);
    console.log('volume actuel:', vol);
    vol += 0.1;
    if(vol > 1){
      vol = 1.0;
    }
    console.log("nouveau volume:", vol);
    audio.media.setVolume(vol);
    audio.track.volume = vol;
  },
  volumeDown: function(){
    vol = parseFloat(audio.track.volume);
    console.log('volume actuel:', vol);
    vol -= 0.1;
    if(vol < 0){
      vol = 0.0;
    }
    console.log("nouveau volume:", vol);
    audio.media.setVolume(vol);
    audio.track.volume = vol;
  },
  ff: function(){
    let pos = audio.media.getCurrentPosition((pos) => {
      let dur = audio.media.getDuration();
      console.log('position actuelle :', pos);
      console.log('temps total :', dur);
      pos = pos + 10;
      if(pos < dur){
        audio.media.seekTo(pos * 1000);
      }
    });
  },
  rew: function(){
    let pos = audio.media.getCurrentPosition((pos) => {
      let dur = audio.media.getDuration();
      console.log('position actuelle :', pos);
      console.log('temps total :', dur);
      pos = pos - 10;
      if(pos > 0){
        audio.media.seekTo(pos * 1000);
      }
    });
  }, 
}

function onBatteryStatus(status) {
  console.log("Battery Level Low " + status.level + "%");
}

const openInaudioBrowserOptions = "location=yes,zoom=false";

const openInaudioBrowser = (link) => {
  cordova.InaudioBrowser.open(link, "_blank", openInaudioBrowserOptions);
};

const toogleModalOffline = (show) => {
  const modal = document.getElementById("modal-unconnect");
  modal.className = show ? "show" : "";
};

const deviceReady = () => {
  window.addEventListener("batterystatus", onBatteryStatus, false);
  document.addEventListener("offline", () => toogleModalOffline(true), false);
  document.addEventListener("online", () => toogleModalOffline(false), false);
};

const validation_vibration = () => {
    navigator.vibrate(2000);
    console.log("BZZZZZZ ça vibre");
}

function start_audio(){
  audio.ready();
}