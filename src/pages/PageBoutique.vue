<template>
  <main>
    <div class="test">
      <RouterLink to="/accueil">Accueil</RouterLink>/ Boutique
    </div>
    <div>{{ nombre }} items</div>
    <div v-for="(item, index) in items" :key="index" class="blocItems">
      <img alt="pas image" />
      <p>{{ item.nom }}</p>
      <p>{{ item.prix }}</p>
      <button>Ajouter au panier</button>
    </div>
  </main>
</template>
<script>
export default {
  name: "PageBoutique",
  data() {
    return {
      nombre: 0,
      items: [
        { nom: "Goblet SNA", prix: 50 },
        { nom: "Chandail SNA", prix: 10 },
        { nom: "Bouteille SNA", prix: 15 },
      ],
    };
  },
  components: {},
};
</script>
<style scoped>
main {
  width: 100vw;
  height: 100vh;
  color: black;
}
.blocItems {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  width: 200px;
  height: 200px;
  background-color: #f0f0f0;
}
</style>
