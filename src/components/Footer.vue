<template>
  <footer class="footer">
    <div class="container text-center">
      <p class="mb-1">
        &copy; {{ currentYear }}
        <a href="https://linkedin.com/in/ruffianazzahri" target="_blank" class="footer-link"
          >Muhammad Ruffian Azzahri</a
        >
      </p>
      <div class="social-icons">
        <a href="https://linkedin.com/in/ruffianazzahri" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a href="https://github.com/ruffianazzahri" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="https://www.upwork.com/freelancers/~01687fb56ac7502489" target="_blank">
          <font-awesome-icon :icon="['fas', 'briefcase']" />
        </a>
        <a href="mailto:muhammadruffianazzahri@gmail.com">
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </a>
        <a href="https://wa.link/bzz35f" target="_blank">
          <font-awesome-icon :icon="['fas', 'phone']" />
        </a>
      </div>
      <p class="mt-3">
        <font-awesome-icon :icon="['fas', 'laptop-code']" />
        This portfolio website was built using Vue.js, Bootstrap, and other JavaScript libraries.
        Built by
        <a href="https://linkedin.com/in/ruffianazzahri" target="_blank" class="footer-link"
          >Ruffian</a
        >
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>
