<template>
  <div class="hello">
       
    <div  v-for="item in info.data.folders" :key="item.folders"  >
      
      <h1 class="name">{{ item.name }}</h1>
      
      {{anime.title}}
    

      
       
      
      <router-link :to="{ name: 'Anime', params: { id: item.fld_id, hash: item.hash, name: item.name }}">Regarder</router-link>

      
      </div>
    
    

  </div>
</template>

<script>
import axios from 'axios'

 
    

export default {
  name: 'HelloWorld',

  data(){
    return{
      info: '',
      info1: '',
      anime: '',
  

    }
  },

  created() {
    this.callapi();
    this.callapiF();
    this.callApiTmdb();
  
    
    

  },

 



  methods:{
    callapi(){
      axios
          .get('https://uptobox.com/api/user/files?token=5296b917ac756c54806f9d44d020083c2bqnj&path=//Anime&limit=100')
          .then(response => {this.info = response.data

          for (let i = 0; i < this.info.data.folders.length; i++){
              
               axios
          .get('https://api.themoviedb.org/3/search/movie?language=fr&api_key=a769aba61ba3f4584d34a56d5f6ece11&query=' + this.info.data.folders[i].name)
          .then(response => {this.anime = response.data.results[i];   

              console.log(this.anime)
              
            
           })
         
            
          
           }
          })
    },
    callapiF(){
      axios
          .get('https://uptobox.com/api/user/public?folder=3410755705&hash=446dee77b0c7b5a884fe83a6f5df89ac&limit=100&offset=0')
          .then(response => (this.info1 = response.data))
    },

    callApiTmdb(){
      
    }



  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
