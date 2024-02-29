<template>
  <div>
    <ImageComponent
      v-for="(image, index) in images"
      :key="index"
      :image="image"
    />
  </div>
</template>

<script>
import ImageComponent from "./ImageComponent.vue";

export default {
  components: {
    ImageComponent,
  },
  data() {
    return {
      images: [
        { url: ".jpg", alt: "Description de l'image 1" },
        { url: ".jpg", alt: "Description de l'image 2" },
      ],
    };
  },
};
</script>
