// src/router/index.js pour Vue 3
import { createRouter, createWebHistory } from "vue-router";
import PageBoutique from "../pages/PageBoutique.vue";
import PageConnexion from "../pages/PageConnexion.vue";
import PageAccueil from "../pages/PageAccueil.vue";
import PageCours from "../pages/PageCours.vue";
import PageErreur from "../pages/PageErreur.vue";
import HoraireTarifs from "../pages/HoraireTarifs.vue";
import PageServices from "../pages/PageServices.vue";

//import AboutPage from "../views/AboutPage.vue";

const routes = [
  {
    path: "/boutique",
    name: "boutique",
    component: PageBoutique,
  },
  {
    path: "/connexion",
    name: "connexion",
    component: PageConnexion,
  },
  {
    path: "/accueil",
    name: "accueil",
    component: PageAccueil,
  },
  {
    path: "/cours",
    name: "cours",
    component: PageCours,
  },
  {
    path: "/erreur404",
    name: "erreur404",
    component: PageErreur,
  },
  {
    path: "/HoraireTarifs",
    name: "HoraireTarifs",
    component: HoraireTarifs,
  },
  {
    path: "/services",
    name: "services",
    component: PageServices,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
