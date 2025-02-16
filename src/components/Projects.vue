<template>
  <div class="container py-5" id="projects">
    <div class="p-1 mb-1 rounded-3">
      <h1 class="display-4 text-center">
        <i class="fa-solid fa-diagram-project"></i>
        Projects
      </h1>
      <hr class="my-4">
    </div>
  </div>

  <div class="text-center p-2">
    <div class="container">
      <div class="row">
        <div v-if="isFetching">Loading projects...</div>
        <div v-else-if="error">Error loading projects</div>
        <div v-else>
          <div class="col-12 col-md-4 mb-4" v-for="project in projects" :key="project.id">
            <div class="card h-100">
              <img :src="project.imageUrl" class="card-img-top" :alt="project.title" />
              <div class="card-body">
                <a v-if="project.link" :href="project.link" target="_blank">
                  <h5 class="card-title">
                    {{ project.title }} <span class="fw-bold" v-if="project.isConfidential">(CONFIDENTIAL)</span>
                  </h5>
                </a>
                <h5 v-else class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <p class="card-text fw-bold">Category: {{ project.category }}</p>
                <p class="card-text fst-italic">{{ project.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { useFetch } from '@vueuse/core'
  import { computed } from 'vue'

  export default {
    name: "Projects",
    setup() {
      const { data, isFetching, error } = useFetch("https://localhost:7013/api/projects").json();


      return {
        projects: computed(() => data.value || []),
        isFetching,
        error
      };
    }
  };
</script>

<style scoped>
  .projects-section {
    margin: 20px;
  }

  .project-card {
    margin-bottom: 15px;
  }
</style>
