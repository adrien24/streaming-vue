<template>
  <div>
    
     <div  v-for="item in anime.data.files" :key="item.files">
     <img :src="'https://image.tmdb.org/t/p/w500/' + tmdb.results[0].backdrop_path" alt="">
        <h2>{{ item.file_name }}</h2>
        <h3>{{ item.name }}</h3>
        <router-link :to="{ name: 'Watch', params: { id: item.fld_id, hash: item.hash, name: item.file_code }}">Regarder</router-link>
     </div>

  </div>

</template>

<script>
import axios from "axios";


export default {
  name: "Anime",

  data: () => ({
    anime: '',
    title: '',
    tmdb: '',
  }),

  created() {
    this.callapi();
    this.callapiF();
    this.callApiTmdb();
    
  },



  methods: {
    callapi() {
      axios
          .get('https://uptobox.com/api/user/files?token=5296b917ac756c54806f9d44d020083c2bqnj&path=//Anime&limit=100')
          .then(response => (this.title = response.data))

    },

    callapiF(){
      axios
          .get('https://uptobox.com/api/user/files?token=5296b917ac756c54806f9d44d020083c2bqnj&orderBy=file_created&dir=asc&offset=0&path=%2F%2FAnime%2F'+ this.$route.params.name + '&limit=100')
          .then(response => (this.anime = response.data))

          //https://uptobox.com/api/user/files?token=5296b917ac756c54806f9d44d020083c2bqnj&orderBy=file_created&dir=asc&offset=0&path=%2F%2FAnime%2FEyeshield%2021&limit=100


    },

     callApiTmdb(){
    
      
         
              
          axios
          .get('https://api.themoviedb.org/3/search/tv?language=fr&api_key=a769aba61ba3f4584d34a56d5f6ece11&query=' + this.$route.params.name)
          .then(response => {this.tmdb = response.data;   

             console.log(tmdb)
              
            
           })
         
            
          
           
      
    }
  }
}
</script>

<style scoped>

</style>
