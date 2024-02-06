 

const { createApp }=Vue
createApp({
  data(){
      return{
        mailList : []
       
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
        for (let i = 0; i < 10 ; i++){
            generaMailList ().then( email =>{
                mailList.push(email);
                if(email.length === 10)
                let list = document.createElement ('ul')
            })
        }
    }
  
      

  }
}).mount('#app')
