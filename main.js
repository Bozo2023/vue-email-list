 

const { createApp }=Vue
createApp({
  data(){
      return{
        mailList : 0
       
      } 
  },

  mounted(){

  },
  methods:{
    generaMailList(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (result ) => {
            console.log (result.data.response)
            this.mailList=result.data.response

        })
    }
  
      

  }
}).mount('#app')
