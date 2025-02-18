<template>
  <div
    class="modal fade"
    :id="modal.id"
    tabindex="-1"
    :aria-labelledby="modal.id + 'Label'"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="modal.id + 'Label'">{{ modal.title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div v-if="modal.disclaimer" class="text-center">
            <h5 class="fw-bold">DISCLAIMER</h5>
            <p>{{ modal.disclaimer }}</p>
          </div>
          <iframe
            v-if="modal.content.endsWith('.pdf')"
            :src="modal.content"
            style="width: 100%; height: 100%; border: none"
          ></iframe>
          <img v-else :src="modal.content" style="width: 50%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceModal",
  props: {
    modal: {
      type: Object,
      required: true,
    },
  },
};
</script>
