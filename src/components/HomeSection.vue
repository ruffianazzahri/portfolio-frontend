<template>
  <a href="#home" class="btn btn-dark btn-lg back-to-top" v-show="showBackToTop">
    <font-awesome-icon :icon="['fas', 'fa-arrow-up']" />
  </a>

  <section id="home">
    <div class="jumbotron w-100" id="home">
      <div
        class="row d-flex flex-column flex-md-row align-items-center text-center text-md-left mt-5 w-100"
      >
        <div class="col-md-4">
          <img
            src="/img/profile-pics.jpg"
            alt="Muhammad Ruffian Azzahri"
            width="200"
            class="rounded-circle img-thumbnail"
          />
          <h3 class="mt-3">Muhammad Ruffian Azzahri</h3>
          <h5 class="lead" style="font-size: 28px">Web Developer</h5>
        </div>
        <div class="col-md-8">
          <div class="container pt-5">
            <div class="p-1 mb-1 rounded-3">
              <h3 class="lead" style="font-size: 42px">About Me</h3>
              <hr />
              <p>
                I am a graduate of Politeknik Negeri Batam in 2024, majoring in Informatics
                Engineering, with a study program in Multimedia Engineering Technology. I achieved a
                GPA of 3.71 with <strong>cum laude</strong> honors. During studies, i did 4 projects
                of Project Based Learning (PBL) that consist of Multimedia and Programming project
                topics.
              </p>
              <p>
                I have more than 1 year of experience in Web Development using multiple frameworks,
                also Web Design using Figma.
              </p>
              <p>
                My latest work experience is internship as a Web Developer at PT. Schneider Electric
                Manufacturing Batam for 1 year.
              </p>
              <p class="mb-5">
                My principle is
                <span class="fw-bold" style="font-style: italic">
                  "Learning and experience are the keys to success."
                </span>
              </p>
              <div class="row justify-content-center">
                <div class="col-md-6">
                  <h4>Feel free to contact me!</h4>
                  <div class="row justify-content-center">
                    <div class="col-4 col-sm-4 px-1 mb-2">
                      <a
                        href="https://linkedin.com/in/ruffianazzahri"
                        target="_blank"
                        class="btn btn-dark btn-lg w-100"
                      >
                        <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
                      </a>
                    </div>
                    <div class="col-4 col-sm-4 px-1 mb-2">
                      <a
                        href="mailto:muhammadruffianazzahri@gmail.com"
                        target="_blank"
                        class="btn btn-dark btn-lg w-100"
                      >
                        <font-awesome-icon :icon="['fas', 'envelope']" size="2x" />
                      </a>
                    </div>
                    <div class="col-4 col-sm-4 px-1 mb-2">
                      <a
                        href="https://wa.link/bzz35f"
                        target="_blank"
                        class="btn btn-dark btn-lg w-100"
                      >
                        <font-awesome-icon :icon="['fas', 'phone']" size="2x" />
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 text-center">
                  <h4>Check my CV!</h4>
                  <button
                    type="button"
                    class="btn btn-dark btn-lg"
                    data-bs-toggle="modal"
                    data-bs-target="#cvModal"
                  >
                    <font-awesome-icon :icon="['fas', 'file-alt']" size="2x" /> View CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#525252"
          d="M0,160 C360,320 720,0 1080,160 C1440,320 1440,160 1440,160 V320 H0 Z"
          id="wave"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";

export default {
  name: "HomeSection",
  data() {
    return {
      showBackToTop: false,
    };
  },
  mounted() {
    setTimeout(() => {
      document.querySelector(".welcome-overlay").remove();
      document.body.style.overflow = "auto";
    }, 4500);

    gsap.to("#wave", {
      duration: 5,
      repeat: -1,
      yoyo: true,
      attr: { d: "M0,192 C360,64 720,320 1080,192 C1440,64 1440,192 1440,192 V320 H0 Z" },
      ease: "power1.inOut",
    });

    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.showBackToTop = true;
      } else {
        this.showBackToTop = false;
      }
    },
  },
};
</script>

<style scoped></style>
