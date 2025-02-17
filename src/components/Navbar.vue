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
        <span class="fw-bold">Portfolio</span>
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
            <a class="nav-link" href="#home" :class="{ active: activeSection === 'home' }">
              <font-awesome-icon :icon="['fas', 'home']" /> Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects" :class="{ active: activeSection === 'projects' }">
              <font-awesome-icon :icon="['fas', 'diagram-project']" /> Projects
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#work-experience"
              :class="{ active: activeSection === 'work-experience' }"
            >
              <font-awesome-icon :icon="['fas', 'briefcase']" /> Work Experience
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills" :class="{ active: activeSection === 'skills' }">
              <font-awesome-icon :icon="['fas', 'lightbulb']" /> Skills
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#achievements"
              :class="{ active: activeSection === 'achievements' }"
            >
              <font-awesome-icon :icon="['fas', 'medal']" /> Achievements
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#certificates"
              :class="{ active: activeSection === 'certificates' }"
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
};
</script>
