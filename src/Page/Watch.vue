<template>
   <div class="watchVideo">
       <iframe :src="'https://uptostream.com/iframe/' + this.$route.params.name" width="700px" height="500px" scrolling="no" frameborder="no" allowfullscreen="" webkitallowfullscreen=""></iframe>

   </div>
</template>

<script>


export default {
    
    mounted(){
        var chemin = this.$route.params.name;
        console.log(chemin)
    }
}
</script>
