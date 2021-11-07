
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
        console.log(Media);
        audio.addListeners();
        let src = audio.track.src;
        audio.media = new MediaSource(src, audio.ftw, audio.wtf, audio.statusChange);
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
            document.querySelector('#playAudio').addEventListener("click", audio.play);
            document.querySelector('#pauseAudio').addEventListener("click", audio.pause);
            document.querySelector('#stopAudio').addEventListener("click", audio.volumeUp);
            document.querySelector('#volumeUp').addEventListener("click", audio.volumeDown);
            document.querySelector('#ff').addEventListener("click", audio.ff);
            document.querySelector('#rew').addEventListener("click", audio.rew);
            document.addEventListener('pause', () =>{
              audio.media.release();
            });
            document.addEventListener('resume', () =>{
              audio.media = new Media(src, audio.ftw, audio.wtf, audio.statusChange);
            });
      },
      play: function(){
        audio.media.play();
      },
      pause: function(){
        audio.media.pause();
      },
      volumeUp: function(){
        vol = parseFloat(audio, track.volume);
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
        vol = parseFloat(audio, track.volume);
        console.log('volume actuel:', vol);
        vol -= 0.1;
        if(vol < 0){
          vol = 0;
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
          pos += 10;
          if(pos < dur){
            audio.media.seekTo(pos + 1000);
          }
        });
      },
      rew: function(){
        let pos = audio.media.getCurrentPosition((pos) => {
          let dur = audio.media.getDuration();
          console.log('position actuelle :', pos);
          console.log('temps total :', dur);
          pos -= 10;
          if(pos < dur){
            audio.media.seekTo(pos - 1000);
          }
        });
      },    
}

function initAudio(){
    // audio.ready();
    console.log("audio marche");
}

function onBatteryStatus(status) {
  console.log("Battery Level Low " + status.level + "%");
}

const openInAppBrowserOptions = "location=yes,zoom=false";

const openInAppBrowser = (link) => {
  cordova.InAppBrowser.open(link, "_blank", openInAppBrowserOptions);
};

const toogleModalOffline = (show) => {
  const modal = document.getElementById("modal-unconnect");
  modal.className = show ? "show" : "";
};

const deviceReady = () => {
  window.addEventListener("batterystatus", onBatteryStatus, false);
  document.addEventListener("offline", () => toogleModalOffline(true), false);
  document.addEventListener("online", () => toogleModalOffline(false), false);
  initAudio();
};

// const validation_vibration = () => {
//     navigator.vibrate(2000);
//     console.log("BZZZZZZ ça vibre");
// }