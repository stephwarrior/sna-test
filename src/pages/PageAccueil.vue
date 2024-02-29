<template>
  <main>
    <div class="container">
      <!--<UnCarousel /></div>-->
      <div class="sectionIntro"></div>
      <div class="aPropos"></div>
      <div class="equipes"></div>
      <div class="lesCours"></div>
      <div class="temoignage">
        <div v-for="(element, index) in elements" :key="index">
          <img :src="element.imageUrl" alt="pas image" />
          <div>
            <p>{{ element.employee }}</p>
            <p>{{ element.poste }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
//import UnCarousel from "../components/UnCarousel.vue";

export default {
  data() {
    return {
      elements: [
        {
          imageUrl: "../img/emilieleblanc.png",
          employee: "Émilie Leblanc",
          poste: "Professeur de yoga",
        },
        {
          imageUrl: ".jpg",
          employee: "Tom Jédusor",
          poste: "Professeur de méditation",
        },
        // Ajoutez autant d'éléments que vous le souhaitez
      ],
    };
  },
};
</script>
<style scoped>
main {
  width: 100vw;
  height: 100vh;
  background-color: pink;
}
.temoignage {
  display: flex;
  flex-direction: column;
}
</style>
