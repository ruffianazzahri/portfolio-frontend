<template>
  <div>
    <Navbar />
    <HomeSection />
    <Projects />
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  import HomeSection from "@/components/HomeSection.vue";
  import Projects from "@/components/Projects.vue";

  export default {
    name: "Home",
    components: {
      Navbar,
      HomeSection,
      Projects,
    },
  };
</script>

<style scoped>
  .container {
    text-align: center;
  }
</style>
