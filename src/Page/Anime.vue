<template>
  <div>
     <div  v-for="item in anime.data.files" :key="item.files">
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
  }),

  created() {
    this.callapi();
    this.callapiF();
    this.callapiImage();
    
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


    }
  }
}
</script>

<style scoped>

</style>
