<template>
  <div class="container py-4">
    <div class="row g-4">
      <div v-for="experience in experiences" :key="experience.id" class="col-12 col-md-6">
        <div class="card h-100 experience-card">
          <div class="row g-0">
            <div class="col-12 d-flex align-items-center justify-content-center p-3">
              <img
                :src="experience.company.logo"
                class="fixed-size-img rounded"
                :alt="experience.company.name"
              />
            </div>
            <div class="col-12 p-4">
              <h5 class="card-title">{{ experience.position }}</h5>
              <p class="card-text"><strong>Duration:</strong> {{ experience.year }}</p>
              <p class="card-text"><strong>Company:</strong> {{ experience.company.name }}</p>

              <p class="card-text"><strong>Responsibilities:</strong></p>
              <ul>
                <li
                  v-for="(responsibility, index) in experience.responsibilities"
                  :key="'resp-' + index"
                >
                  {{ responsibility }}
                </li>
              </ul>

              <p class="card-text"><strong>Contributions:</strong></p>
              <ul>
                <li
                  v-for="(contribution, index) in experience.contributions"
                  :key="'contrib-' + index"
                >
                  {{ contribution }}
                </li>
              </ul>

              <button
                type="button"
                class="btn btn-dark mt-2"
                data-bs-toggle="modal"
                :data-bs-target="'#modal-' + experience.id"
              >
                {{ experience.modal.title }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ✅ Render semua modal di luar grid -->
    <div v-for="experience in experiences" :key="'modal-' + experience.id">
      <ExperienceModal :modal="{ ...experience.modal, id: 'modal-' + experience.id }" />
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
.fixed-size-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
}
</style>
