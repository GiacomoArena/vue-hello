const {createApp} = Vue;

createApp({

  data(){
    return{
      outputMessage: "Ciao questo é il mio primo Vue" ,
      image: '<img src="img/download.png">',
      counter: 0,
    }
  },


methods:{
  addCounter(){
    this.counter++;
    if (this.counter >= 10) {
      this.counter = "ciao"
    }
  }
}

}).mount("#app")