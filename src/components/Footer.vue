<template>
  <footer class="footer">
    <div class="container text-center">
      <p class="mb-1">
        &copy; {{ currentYear }}
        <a href="https://linkedin.com/in/ruffianazzahri" target="_blank" class="footer-link">
          Muhammad Ruffian Azzahri
        </a>
      </p>
      <div class="social-icons">
        <a v-for="(link, index) in socialLinks" :key="index" :href="link.url" target="_blank">
          <font-awesome-icon :icon="link.icon" />
        </a>
      </div>
      <p class="mt-3">
        This website was built with Vue.js and other JavaScript libraries by
        <a href="https://linkedin.com/in/ruffianazzahri" target="_blank" class="footer-link">
          Ruffian </a
        >.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

// Get the current year
const currentYear = ref(new Date().getFullYear());

// Social links array
const socialLinks = ref([
  { icon: ["fab", "linkedin"], url: "https://linkedin.com/in/ruffianazzahri" },
  { icon: ["fab", "github"], url: "https://github.com/ruffianazzahri" },
  { icon: ["fas", "envelope"], url: "mailto:muhammadruffianazzahri@gmail.com" },
  { icon: ["fas", "phone"], url: "https://wa.link/bzz35f" },
]);
</script>

<style scoped>
.footer {
  background-color: #222;
  color: #ddd;
  padding: 20px 0;
}

.footer .footer-link {
  color: #00ff32;
  text-decoration: none;
}

.footer .footer-link:hover {
  text-decoration: underline;
}

.footer .social-icons a {
  margin: 0 10px;
  color: #ddd;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.footer .social-icons a:hover {
  color: #00ff32;
}
</style>
