<template>
  <nav
    id="navbar"
    class="navbar navbar-expand-lg shadow-sm fixed-top scrollspy-example"
    data-bs-spy="scroll"
    data-bs-target="#navbar"
  >
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="#home">
        <img
          src="/img/profile-pics.jpg"
          alt="Logo"
          width="40"
          height="40"
          class="me-2 rounded-circle"
        />
        <span class="fw-bold" style="color: #fff">Portfolio</span>
      </a>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon :icon="['fas', 'bars']" style="color: #00ff32; font-size: 1.5rem" />
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link"
              href="#home"
              :class="{ active: activeSection === 'home' }"
              @click="setActiveSection('home')"
            >
              <font-awesome-icon :icon="['fas', 'home']" /> Home
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#projects"
              :class="{ active: activeSection === 'projects' }"
              @click="setActiveSection('projects')"
            >
              <font-awesome-icon :icon="['fas', 'diagram-project']" /> Projects
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#work-experience"
              :class="{ active: activeSection === 'work-experience' }"
              @click="setActiveSection('work-experience')"
            >
              <font-awesome-icon :icon="['fas', 'briefcase']" /> Work Experience
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#skills"
              :class="{ active: activeSection === 'skills' }"
              @click="setActiveSection('skills')"
            >
              <font-awesome-icon :icon="['fas', 'lightbulb']" /> Skills
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#achievements"
              :class="{ active: activeSection === 'achievements' }"
              @click="setActiveSection('achievements')"
            >
              <font-awesome-icon :icon="['fas', 'trophy']" /> Achievements
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#certificates"
              :class="{ active: activeSection === 'certificates' }"
              @click="setActiveSection('certificates')"
            >
              <font-awesome-icon :icon="['fas', 'certificate']" /> Certificates
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      activeSection: "home", // Default active section
    };
  },
  methods: {
    setActiveSection(section) {
      this.activeSection = section;
    },
  },
  mounted() {
    // Detect scroll position to dynamically highlight active section
    window.addEventListener("scroll", this.highlightSectionOnScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.highlightSectionOnScroll);
  },
  methods: {
    setActiveSection(section) {
      this.activeSection = section;
    },
    highlightSectionOnScroll() {
      const sections = [
        "home",
        "projects",
        "work-experience",
        "skills",
        "achievements",
        "certificates",
      ];
      let currentSection = this.activeSection;
      sections.forEach((section) => {
        const element = document.querySelector(`#${section}`);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section;
        }
      });
      this.activeSection = currentSection;
    },
  },
};
</script>

<style scoped>
/* Optional: Customize active link */
.navbar-nav .nav-link.active {
  color: #00ff32;
}
</style>
