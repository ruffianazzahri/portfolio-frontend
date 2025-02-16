<template>
  <nav id="navbar" class="navbar navbar-expand-lg shadow-sm fixed-top">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="index.html">
        <img src="/img/profile-pics.jpg" alt="Logo" width="40" height="40" class="me-2 rounded-circle">
        <span class="fw-bold">Portfolio</span>
      </a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa fa-bars" style="color: #00ff32; font-size: 1.5rem;"></i>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#home">
              <font-awesome-icon :icon="['fas', 'home']" /> Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#experience">
              <font-awesome-icon :icon="['fas', 'suitcase']" /> Experience
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">
              <font-awesome-icon :icon="['fas', 'diagram-project']" /> Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#certifications">
              <font-awesome-icon :icon="['fas', 'house']" /> Certifications
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#achievements">
              <font-awesome-icon :icon="['fas', 'medal']" /> Achievements
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">
              <font-awesome-icon :icon="['fas', 'lightbulb']" /> Skills
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
    methods: {
      scrollTo(section) {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      },
    },
  };
</script>

<style scoped>
  nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: #333;
    padding: 10px;
    text-align: center;
  }

    nav ul {
      list-style: none;
      padding: 0;
    }

      nav ul li {
        display: inline;
        margin: 0 15px;
      }

        nav ul li a {
          color: white;
          text-decoration: none;
        }
</style>
