<template>
  <div>
    <Navbar />
    <HomeSection />
    <Projects />
    <WorkExperience />
    <Skills />
    <Achievements />
    <Certificates />
    <FooterSection />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import HomeSection from "@/components/HomeSection.vue";
import Projects from "@/components/Projects.vue";
import WorkExperience from "./components/WorkExperience.vue";
import Skills from "./components/Skills.vue";
import FooterSection from "./components/Footer.vue";
import Achievements from "./components/Achievements.vue";
import Certificates from "./components/Certificates.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    HomeSection,
    Projects,
    WorkExperience,
    Skills,
    Achievements,
    Certificates,
    FooterSection,
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}
</style>
