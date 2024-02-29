<template>
  <div class="carousel">
    <div class="contenuCarrousel" :style="{ transform: `translateX(-${indexPresent * 100}%)` }">
      <div class="slide" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.alt" />
      </div>
    </div>
    <button @click="prec">Précédent</button>
    <button @click="suiv">Suivant</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      indexPresent: 0,
      slides: [
        {
          image: "https://www.indexsante.ca/chroniques/images/posture-yoga-arbre.jpg",
          alt: "Yoga un",
        },
        { image: ".jpg", alt: "yoga 2" },
        { image: ".jpg", alt: "yoga 2" },
      ],
    };
  },
  methods: {
    suiv() {
      this.indexPresent = (this.indexPresent + 1) % this.slides.length;
    },
    prec() {
      this.indexPresent = (this.indexPresent + this.slides.length - 1) % this.slides.length;
    },
  },
};
</script>
<style scoped>
.carousel {
  overflow: hidden;
  position: relative;
}

.contenuCarrousel {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  flex: 0 0 100%;
  height: auto; /* Ajustez la hauteur comme nécessaire */
}

img {
  width: 50vw;
  height: 100%;
}

fofo {
  background-color: red;
}
</style>
