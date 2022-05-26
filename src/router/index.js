import Vue from 'vue'
import VueRouter from "vue-router";
import Accueil from "@/Page/Accueil";
import Anime from "@/Page/Anime";
import Watch from "@/Page/Watch";





Vue.use(VueRouter)



export default new VueRouter({
    routes: [
        {path: '/',name: 'Accueil',component: Accueil},
        {path: '/Anime/:name',name: 'Anime', component: Anime },
        {path: '/Watch/:name',name: 'Watch', component: Watch },

    ]
})


