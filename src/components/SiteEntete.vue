<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-brand">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <defs></defs>
          <g id="lotus">
            <path
              class="cls-1"
              d="M29.81 19.43A1 1 0 0 0 29 19a16.12 16.12 0 0 0-2.69.15 8.2 8.2 0 0 0 .55-1.95 8.62 8.62 0 0 0-1.13-5.72 1 1 0 0 0-1.09-.48A13.07 13.07 0 0 0 22 12.14a9.81 9.81 0 0 0-.12-1.32 8.66 8.66 0 0 0-1.44-3.4 10.73 10.73 0 0 0-4-3.32 1 1 0 0 0-.88 0 10.73 10.73 0 0 0-4 3.32A8.41 8.41 0 0 0 10 12.14 13 13 0 0 0 7.36 11a1 1 0 0 0-1.13.45 8.37 8.37 0 0 0-.94 2.26A1 1 0 0 0 6 15a1 1 0 0 0 1.22-.72 8 8 0 0 1 .36-1 10.54 10.54 0 0 1 4.71 3.44 10.72 10.72 0 0 1 2.11 6.68 15.43 15.43 0 0 0-4.83-3.15 12.85 12.85 0 0 0-1.4-.49.94.94 0 0 0-.06-.15 6.41 6.41 0 0 1-1-2.63 1 1 0 0 0-1.15-.84 1 1 0 0 0-.83 1.14 8.2 8.2 0 0 0 .55 1.95A16.12 16.12 0 0 0 3 19a1 1 0 0 0-1 1.29 11.09 11.09 0 0 0 5.9 6.77 10.57 10.57 0 0 0 4.39.94 11.07 11.07 0 0 0 3.71-.62 11.07 11.07 0 0 0 3.67.62 10.65 10.65 0 0 0 4.4-.94l.38-.18a1 1 0 0 0-.9-1.79l-.31.15a8.89 8.89 0 0 1-5.28.6A13.59 13.59 0 0 1 23.19 22a13.88 13.88 0 0 1 4.33-1A9.45 9.45 0 0 1 26 23.31a1 1 0 1 0 1.45 1.38 11.46 11.46 0 0 0 2.55-4.4 1 1 0 0 0-.19-.86zm-15.93-4a12 12 0 0 0-1.76-1.85 6.46 6.46 0 0 1 1.08-5A8.42 8.42 0 0 1 16 6.13a8.42 8.42 0 0 1 2.8 2.45 6.39 6.39 0 0 1 1.07 5 12.46 12.46 0 0 0-1.75 1.85A11.94 11.94 0 0 0 16 19.9a11.94 11.94 0 0 0-2.12-4.46zm-5.12 9.8A8.83 8.83 0 0 1 4.48 21a13.88 13.88 0 0 1 4.33 1A13.59 13.59 0 0 1 14 25.84a8.88 8.88 0 0 1-5.24-.6zm13.67-5.06a15.43 15.43 0 0 0-4.83 3.15 10.72 10.72 0 0 1 2.11-6.68 10.43 10.43 0 0 1 4.71-3.43 6.71 6.71 0 0 1 .5 3.69 6.41 6.41 0 0 1-1 2.63.94.94 0 0 0-.06.15 12.85 12.85 0 0 0-1.43.5z"
            />
            <path
              class="cls-1"
              d="M16 11a1 1 0 0 0 0-2 1 1 0 1 0 0 2zM16 14a1 1 0 0 0 0-2 1 1 0 1 0 0 2z"
            />
          </g>
        </svg>
      </div>
      <div class="navbar-menu">
        <ul class="blocLiensMenu" v-show="MenuDesktopActive">
          <li><RouterLink to="/accueil">Accueil</RouterLink></li>
          <li><RouterLink to="/cours">Cours</RouterLink></li>
          <li><RouterLink to="/services">Service</RouterLink></li>
          <li>
            <RouterLink to="/HoraireTarifs">Horaire et Tarifs</RouterLink>
          </li>
          <li><RouterLink to="/boutique">Boutique</RouterLink></li>
        </ul>
      </div>

      <button class="navbar-toggler" @click="toggleMenu">
        <span class="navbar-toggler-icon">&#9776;</span>
      </button>
    </nav>
  </header>
  <div class="menu-mobile" v-if="!MenuMobileActive">
    <input type="text" />
    <ul>
      <li><RouterLink to="/accueil">Accueil</RouterLink></li>
      <li><RouterLink to="/cours">Cours</RouterLink></li>
      <li><RouterLink to="/services">Service</RouterLink></li>
      <li><RouterLink to="/HoraireTarifs">Horaire et Tarifs</RouterLink></li>
      <li><RouterLink to="/boutique">Boutique</RouterLink></li>
      <!-- <li><RouterLink to="/contact">Nous Rejoindre</RouterLink></li>-->
    </ul>
  </div>
</template>
<script>
export default {
  name: "SiteHeader",
  data() {
    return {
      MenuMobileActive: true,
      MenuDesktopActive: false,
      liensMenu: [
        { nom: "Accueil", url: "/accueil" },
        { nom: "Cours", url: "/cours" },
        { nom: "Service", url: "/services" },
        { nom: "Horaire et Tarifs", url: "/HoraireTarifs" },
        { nom: "Boutique", url: "/boutique" },
        { nom: "Nous Rejoindre", url: "/contact" },
      ],
    };
  },
  mounted() {
    this.checkTailleEcran();
    window.addEventListener("resize", this.checkTailleEcran);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkTailleEcran);
  },
  methods: {
    toggleMenu() {
      this.MenuMobileActive = !this.MenuMobileActive;
    },
    checkTailleEcran() {
      this.MenuDesktopActive = window.innerWidth > 768;
    },
  },
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #937fbc;
}
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  margin: 0;
  color: white;
}
.navbar-brand > svg {
  width: 50px;
  z-index: 5;
}
.blocLiensMenu {
  list-style: none;
  padding: 0;
  display: flex;
}
.blocLiensMenu > li {
  margin: 0 30px;
  text-decoration: none;
}
.blocLiensMenu > li > a {
  color: white;
  text-decoration: none;
}

.menu-mobile {
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  width: 70vw;
  height: 100vh;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
}

.menu-mobile input {
  width: 70%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  color: black;
}
.menu-mobile ul {
  list-style: none;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  flex-direction: column;
}
.menu-mobile ul li {
  margin: 20px 0;
}
.menu-mobile ul li a {
  color: white;
  text-decoration: none;
  font-size: clamp(0.1rem, -0.2581rem + 8.3871vw, 2.5rem);
}

.header .navbar-toggler {
  font-size: 2.7rem;
  background: none;
  border: none;
}
.navbar .navbar-toggler {
  z-index: 3;
}
ul .navbar-toggler {
  font-size: 24px;
  background: none;
  border: none;
}

.navbar-toggler-icon {
  color: white;
}

.navbar-menu {
  display: none;
}

.header .navbar-menu {
  display: block;
}
.cls-1 {
  fill: white;
}
</style>
