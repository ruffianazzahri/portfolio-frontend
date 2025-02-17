<!-- <template>
  <section id="projects">
    <div class="container py-5" id="projects">
      <div class="p-1 mb-1 rounded-3">
        <h1 class="display-4 text-center">
          <font-awesome-icon :icon="['fas', 'diagram-project']" />
          Projects
        </h1>
        <hr class="my-4" />
      </div>
    </div>

    <div class="text-center p-2">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 mb-4" v-for="project in projects" :key="project.title">
            <div class="card h-100">
              <img :src="project.image" class="card-img-top" :alt="project.title" />
              <div class="card-body">
                <a v-if="project.link" :href="project.link" target="_blank">
                  <h5 class="card-title">
                    {{ project.title }}
                    <span class="fw-bold" v-if="project.isConfidential">(CONFIDENTIAL)</span>
                  </h5>
                </a>
                <h5 v-else class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <p class="card-text fw-bold">Project Type: {{ project.type }}</p>
                <p class="card-text fw-bold">Category: {{ project.category }}</p>
                <p class="card-text fst-italic">{{ project.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useFetch } from "@vueuse/core";
import { computed } from "vue";

export default {
  name: "Projects",
  setup() {
    const { data, isFetching, error } = useFetch("https://localhost:7013/api/projects").json();

    return {
      projects: computed(() => data.value || []),
      isFetching,
      error,
    };
  },
  data() {
    return {
      projects: [
        {
          title: "Government Website",
          image: "/img/govermentwebsoon.jpeg",
          description:
            "A Web-Based Information System for a Government Office in Batam, developed for requesting travel orders, submitting payments, submitting dispositions, and more.",
          type: "External Project",
          category: "Government Web Development, Laravel, PHP, MySQL",
          date: "September 2024 - Present (Ongoing)",
          isConfidential: true,
          link: null,
        },
        {
          title: "Digital Transformation - Web Redesign and Development Projects",
          image: "/img/blp-smartwarehouse.jpeg",
          description:
            "My mentors and I at PT. Schneider Electric Manufacturing Batam from the Digital Transformation department have developed several company websites using the ASP.NET MVC Framework and Microsoft SQL Server to improve the company profile and enhance work efficiency in various departments.",
          type: "External Project",
          category: "Corporate Web Development, ASP .NET MVC, C#, SQL Server",
          date: "August 2023 - August 2024",
          isConfidential: true,
          link: null,
        },
       {
          title: "MyQuery the MSSQL Query Executor",
          image: "/img/myquery.png",
          description:
            "MyQuery is a self-directed learning project application designed to execute SQL Server queries through the web.",
          type: "Initiative Project",
          category: "Web Development, ASP .NET MVC, C#, SQL Server",
          date: "July 2024",
          isConfidential: false,
          link: "https://github.com/ruffianazzahri/myquery_mssql_executor",
        },
        {
          title: "Nongsa Digital Park Virtual Tour",
          image: "/img/ndpvrtour.png",
          description:
            "A VR-based application for exploring the NDP workspace and work environment, developed by Tworue Studio.",
          type: "PBL Project, External Project",
          category: "Corporate Apps Development, Virtual Reality, Unity Studio, C# (For Unity)",
          date: "February 2023 - June 2023",
          isConfidential: false,
          link: "https://youtu.be/DKN291jirHk",
        },
        {
          title: "SI-LAH",
          image: "/img/silah.png",
          description:
            "An Android application developed by SFR Developers allows users to report facility issues online directly to the Department of Education Office in Tanjungpinang City.",
          type: "PBL Project, External Project",
          category: "Corporate Apps Development, Flutter, Dart, MySQL",
          date: "August 2022 - December 2022",
          isConfidential: false,
          link: "https://if.polibatam.ac.id/pamerin/detail.php?title=si-lah&id=NDMxMjAwMTA2Ng==&ta=Mw==",
        },
        {
          title: "XII Studio Profile Company",
          image: "/img/xiistudiocompanyprofile.png",
          description:
            "A company profile web project by XII Studio, participating in the Sevent: Web Development Competition by Institut Teknologi Purwokerto.",
          type: "Competition Project",
          category: "Web Development, Bootstrap",
          date: "October 2022",
          isConfidential: false,
          link: "https://ruffianazzahri.github.io/xiistudio/",
        },
        {
          title: "Aaron: Lost in The Jungle",
          image: "/img/aaron.jpg",
          description:
            "A 3D adventure game developed by XII Studio. This project was part of the 4th Semester Project-Based Learning and was a finalist in the Game Development Competition at KMIPN IV.",
          type: "PBL Project, Competition Project",
          category: "Game Development, Virtual Reality, Unity Studio, C# (For Unity)",
          date: "February 2022 - July 2022",
          isConfidential: false,
          link: "https://shilau.polibatam.ac.id/pblexpo/detail.php?title=aaron-lost-in-the-jungle&id=NDMxMjAwMTA4OA==",
        },
    };
  },
};
</script>

<style scoped>
.projects-section {
  margin: 20px;
}

.project-card {
  margin-bottom: 15px;
}
</style> -->

<template>
  <section id="projects">
    <div class="container py-5" id="projects">
      <div class="p-1 mb-1 rounded-3">
        <h1 class="display-4 text-center">
          <font-awesome-icon :icon="['fas', 'diagram-project']" />
          Projects
        </h1>
        <hr class="my-4" />
      </div>
    </div>

    <div class="text-center p-2">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 mb-4" v-for="project in projects" :key="project.title">
            <div class="card h-100">
              <img
                :src="project.image"
                class="card-img-top"
                :alt="project.title"
                @click="openModal(project)"
              />
              <div class="card-body">
                <a v-if="project.link" :href="project.link" target="_blank">
                  <h5 class="card-title">
                    {{ project.title }}
                    <span class="fw-bold" v-if="project.isConfidential">(CONFIDENTIAL)</span>
                  </h5>
                </a>
                <h5 v-else class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <p class="card-text fw-bold">Project Type: {{ project.type }}</p>
                <p class="card-text fw-bold">Category: {{ project.category }}</p>
                <p class="card-text fst-italic">{{ project.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal untuk Preview Gambar -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">X</button>
        <img
          :src="selectedProject.images[selectedImageIndex].url"
          alt="Preview"
          class="modal-image"
        />
        <p class="modal-caption">{{ selectedProject.images[selectedImageIndex].caption }}</p>
        <div
          v-if="selectedProject.images && selectedProject.images.length > 1"
          class="modal-navigation"
        >
          <button class="prev-btn" @click="changeImage(-1)">&#60;</button>
          <button class="next-btn" @click="changeImage(1)">&#62;</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          title: "Government Website",
          image: "/img/governmentcomingsoon.png",
          images: [{ url: "/img/governmentcomingsoon.png", caption: "Coming soon" }],
          description:
            "A Web-Based Information System for a Government Office in Batam, developed for requesting travel orders, submitting payments, submitting dispositions, and more.",
          type: "External Project",
          category: "Government Web Development, Laravel, PHP, MySQL",
          date: "September 2024 - Present (Ongoing)",
          isConfidential: true,
          link: null,
        },
        {
          title: "Digital Transformation - Web Redesign and Development Projects",
          image: "/img/blp-smartwarehouse.jpeg",
          images: [
            {
              url: "/img/blp-smartwarehouse.jpeg",
              caption: "Smart Warehouse and BLP Plant Introduction Page",
            },
            {
              url: "/img/blp-smartwarehouse2.jpeg",
              caption: "Admin Dashboard for Manage BLP and Smart Warehouse data",
            },
            { url: "/img/wireframe1.jpeg", caption: "Wireframe 1" },
            { url: "/img/wireframe2.jpeg", caption: "Wireframe 2" },
            { url: "/img/wireframe3.jpeg", caption: "Wireframe 3" },
            { url: "/img/wireframe4.jpeg", caption: "Wireframe 4" },
            { url: "/img/wireframe5.jpeg", caption: "Wireframe 5" },
            { url: "/img/wireframe6.jpeg", caption: "Wireframe 6" },
          ],
          description:
            "My mentors and I at PT. Schneider Electric Manufacturing Batam from the Digital Transformation department have developed several company websites using the ASP.NET MVC Framework and Microsoft SQL Server.",
          type: "External Project",
          category: "Corporate Web Development, ASP .NET MVC, C#, SQL Server, Web Design",
          date: "August 2023 - August 2024",
          isConfidential: true,
          link: null,
        },
        {
          title: "MyQuery the MSSQL Query Executor",
          image: "/img/myquery1.png",
          images: [
            { url: "/img/myquery2.png", caption: "Welcome page" },
            { url: "/img/myquery3.png", caption: "Login Page" },
            { url: "/img/myquery1.png", caption: "Executing select query" },
            { url: "/img/myquery5.png", caption: "Save the new query" },
            { url: "/img/myquery4.png", caption: "Load saved queries" },
          ],
          description:
            "MyQuery is a self-directed learning project application designed to execute SQL Server queries through the web.",
          type: "Initiative Project",
          category: "Web Development, ASP .NET MVC, C#, SQL Server",
          date: "July 2024",
          isConfidential: false,
          link: "https://github.com/ruffianazzahri/myquery_mssql_executor",
        },
        {
          title: "Nongsa Digital Park Virtual Tour",
          image: "/img/ndpvrtour.png",
          images: [
            { url: "/img/ndpvrtour2.png", caption: "NDP VR Tour Intro" },
            { url: "/img/ndpvrtour.png", caption: "Menu" },
            { url: "/img/ndpvrtour3.png", caption: "Select Location Menu" },
            {
              url: "/img/ndpvrtour4.png",
              caption: "View Object Information in Infinite Learning Workspace",
            },
            { url: "/img/ndpvrtour5.png", caption: "Exploration of NDP Workspace" },
          ],
          description:
            "A VR-based application for exploring the NDP workspace and work environment, developed by Tworue Studio.",
          type: "PBL Project, External Project",
          category: "Corporate Apps Development, Virtual Reality, Unity Studio, C# (For Unity)",
          date: "February 2023 - June 2023",
          isConfidential: false,
          link: "https://youtu.be/DKN291jirHk",
        },
        {
          title: "SI-LAH",
          image: "/img/silah.png",
          images: [
            { url: "/img/silah2.png", caption: "Login page" },
            { url: "/img/silah3.png", caption: "Dashboard menu" },
            {
              url: "/img/silah4.png",
              caption: "Select reports : Add new facility or Fix/Renovate existing facility",
            },
            { url: "/img/silah5.png", caption: "About page" },
          ],
          description:
            "An Android application developed by SFR Developers allows users to report facility issues online directly to the Department of Education Office in Tanjungpinang City.",
          type: "PBL Project, External Project",
          category: "Corporate Apps Development, Flutter, Dart, MySQL",
          date: "August 2022 - December 2022",
          isConfidential: false,
          link: "https://if.polibatam.ac.id/pamerin/detail.php?title=si-lah&id=NDMxMjAwMTA2Ng==&ta=Mw==",
        },
        {
          title: "XII Studio Profile Company",
          image: "/img/xiistudiocompanyprofile.png",
          images: [
            { url: "/img/xiistudiocompanyprofile2.png", caption: "Welcome page" },
            {
              url: "/img/xiistudiocompanyprofile3.png",
              caption: "Portfolio Page",
            },
            {
              url: "/img/xiistudiocompanyprofile4.png",
              caption: "Documentation Page",
            },
            {
              url: "/img/xiistudiocompanyprofile5.png",
              caption: "Contact Page",
            },
          ],
          description:
            "A company profile web project by XII Studio, participating in the Sevent: Web Development Competition by Institut Teknologi Purwokerto.",
          type: "Competition Project",
          category: "Web Development, Bootstrap",
          date: "October 2022",
          isConfidential: false,
          link: "https://ruffianazzahri.github.io/xiistudio/",
        },
        {
          title: "Aaron: Lost in The Jungle",
          image: "/img/aaron.jpg",
          images: [
            { url: "/img/aaron2.png", caption: "Game Menu" },
            { url: "/img/aaron3.png", caption: "Select Level Menu" },
            { url: "/img/aaron4.png", caption: "Level 1" },
            { url: "/img/aaron5.png", caption: "Level 2" },
            { url: "/img/aaron6.png", caption: "Level 2 : Mission Accomplished" },
          ],
          description:
            "A 3D adventure game developed by XII Studio. This project was part of the 4th Semester Project-Based Learning and was a finalist in the Game Development Competition at KMIPN IV.",
          type: "PBL Project, Competition Project",
          category: "Game Development, Virtual Reality, Unity Studio, C# (For Unity)",
          date: "February 2022 - July 2022",
          isConfidential: false,
          link: "https://if.polibatam.ac.id/pamerin/detail.php?title=aaron-lost-in-the-jungle&id=NDMxMjAwMTA4Mw==&ta=Mw==",
        },
      ],
      isModalOpen: false,
      selectedProject: {},
      selectedImageIndex: 0,
    };
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
      this.selectedImageIndex = 0; // Mulai dengan gambar pertama
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedProject = {};
    },
    changeImage(direction) {
      const images = this.selectedProject.images;
      this.selectedImageIndex =
        (this.selectedImageIndex + direction + images.length) % images.length;
    },
  },
};
</script>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050; /* Pastikan modal berada di atas navbar */
}

.modal-content {
  position: relative;
  background: white;
  padding: 20px;
  text-align: center;
  z-index: 1060; /* Pastikan konten modal berada di atas overlay */
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
  width: auto;
  height: auto;
  object-fit: contain; /* Mempertahankan rasio aspek gambar */
  margin-bottom: 10px;
}

.modal-caption {
  font-size: 1rem;
  color: #333;
  margin-bottom: 20px;
}

.modal-navigation {
  display: flex;
  justify-content: space-between;
}

.prev-btn,
.next-btn {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 30px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  padding: 10px;
  border-radius: 20px;
  font-size: 30px;
}

.card-img-top {
  cursor: pointer;
}
</style>
