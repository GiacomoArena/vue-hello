const {createApp} = Vue;

createApp({

  data(){
    return{
      outputMessage: "Ciao questo é il mio primo Vue"
    }
  }

}).mount("#app")