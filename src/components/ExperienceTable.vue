<template>
  <div class="container py-4">
    <div class="experience-list">
      <div
        v-for="experience in experiences"
        :key="experience.id"
        class="experience-card-wrapper mb-4"
      >
        <div class="card experience-card">
          <div class="row g-0">
            <div class="col-md-8 p-4">
              <h5 class="card-title">{{ experience.position }}</h5>
              <p class="card-text"><strong>Duration:</strong> {{ experience.year }}</p>
              <p class="card-text"><strong>Company:</strong> {{ experience.company.name }}</p>
              <p class="card-text"><strong>Responsibilities:</strong></p>
              <ul>
                <li v-for="(responsibility, index) in experience.responsibilities" :key="index">
                  {{ responsibility }}
                </li>
              </ul>
              <p class="card-text"><strong>Contributions:</strong></p>
              <ul>
                <li v-for="(contribution, index) in experience.contributions" :key="index">
                  {{ contribution }}
                </li>
              </ul>
              <button
                type="button"
                class="btn btn-dark mt-2"
                data-bs-toggle="modal"
                :data-bs-target="'#' + experience.modal.id"
              >
                {{ experience.modal.title }}
              </button>
              <ExperienceModal :modal="experience.modal" />
            </div>

            <div class="col-md-4 d-flex align-items-center justify-content-center p-2">
              <img
                :src="experience.company.logo"
                class="fixed-size-img rounded"
                :alt="experience.company.name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExperienceModal from "./ExperienceModal.vue";

export default {
  name: "ExperienceCards",
  components: {
    ExperienceModal,
  },
  props: {
    experiences: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.experience-card-wrapper {
  width: 100%;
}

.fixed-size-img {
  width: 250px;
  height: 250px;
  object-fit: cover;
}
</style>
