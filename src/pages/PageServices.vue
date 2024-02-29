<template>
  <main>
    <div><RouterLink to="/accueil">Accueil</RouterLink>/ Services</div>
    <div class="blocService" v-for="(service, index) in services" :key="index">
      <h1>{{ service.name }}</h1>
      <img :src="service.img" alt="pas image" />
      <p>{{ service.description }}</p>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      services: [
        {
          img: "https://unpasverssoi.ca/fr/wp-content/uploads/2018/04/salle-cours-yoga.jpg",
          name: "Location des salles",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
        },
        {
          img: "https://sautoformer.fr/wp-content/uploads/2019/04/formation-professeur-yoga.jpg",
          name: "Formation des cours",
          description:
            "Lorem ipsumAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
        },
      ],
    };
  },
};
</script>
<style scoped>
main {
  color: #644a9d;
}
.blocService {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
h3 {
  color: white;
  margin: 0;
  padding: 20px;
}
img {
  width: 50vw;
  height: 100%;
}
</style>
