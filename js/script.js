const {createApp} = Vue;

createApp({

  data(){
    return{
      outputMessage: "Ciao questo é il mio primo Vue" ,
      image: '<img src="img/download.png">',
    }
  }

}).mount("#app")