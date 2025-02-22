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
import ExperienceTable from "./components/ExperienceTable.vue";
import ExperienceModal from "./components/ExperienceModal.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    HomeSection,
    Projects,
    WorkExperience,
    ExperienceTable,
    ExperienceModal,
    Skills,
    Achievements,
    Certificates,
    FooterSection,
  },
};
</script>

<style scoped></style>
