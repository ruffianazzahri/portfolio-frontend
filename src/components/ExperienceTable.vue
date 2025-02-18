<template>
  <div class="text-center p-2">
    <div class="container">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" class="text-center">No.</th>
              <th scope="col" class="text-center">Year</th>
              <th scope="col" class="text-center">Company</th>
              <th scope="col" class="text-center">Position</th>
              <th scope="col" class="text-center">Responsibilities</th>
              <th scope="col" class="text-center">Contributions</th>
              <th scope="col" class="text-center">Other</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="experience in experiences" :key="experience.id">
              <th scope="row" class="text-center">{{ experience.id }}</th>
              <td class="text-center">{{ experience.year }}</td>
              <td class="text-center">
                <img
                  :src="experience.company.logo"
                  class="rounded mb-2"
                  :alt="experience.company.name"
                  width="100"
                  height="100"
                />
                <br />{{ experience.company.name }}
              </td>
              <td class="text-center">{{ experience.position }}</td>
              <td>
                <ol>
                  <li v-for="(responsibility, index) in experience.responsibilities" :key="index">
                    {{ responsibility }}
                  </li>
                </ol>
              </td>
              <td>
                <ol>
                  <li v-for="(contribution, index) in experience.contributions" :key="index">
                    {{ contribution }}
                  </li>
                </ol>
              </td>
              <td class="text-center">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-bs-toggle="modal"
                  :data-bs-target="'#' + experience.modal.id"
                >
                  {{ experience.modal.title }}
                </button>
                <ExperienceModal :modal="experience.modal" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ExperienceModal from "./ExperienceModal.vue";

export default {
  name: "ExperienceTable",
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
