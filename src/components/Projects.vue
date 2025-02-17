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
        <!-- <div class="row">
        <div v-if="isFetching" class="col-12">Loading projects...</div>
        <div v-else-if="error" class="col-12">Error loading projects</div>
        <div v-else class="row">
          <div class="col-12 col-md-4 mb-4" v-for="project in projects" :key="project.id">
            <div class="card h-100">
              <img :src="project.imageUrl" class="card-img-top" :alt="project.title" />
              <div class="card-body">
                <a v-if="project.link" :href="project.link" target="_blank">
                  <h5 class="card-title">
                    {{ project.title }}
                    <span class="fw-bold" v-if="project.isConfidential">(CONFIDENTIAL)</span>
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
      </div> -->
        <div class="row">
          <div class="col-12 col-md-4 mb-4">
            <div class="card h-100">
              <img src="/img/govermentwebsoon.jpeg" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">
                  Government Website <span class="fw-bold">(CONFIDENTIAL)</span>
                </h5>
                <p class="card-text">
                  A Web-Based Information System for a Government Office in Batam, developed for
                  requesting travel orders, submitting payments, submitting dispositions, and more.
                </p>
                <p class="card-text fw-bold">Project Type: External Project</p>
                <p class="card-text fw-bold">
                  Category: Government Web Development, Laravel, PHP, MySQL
                </p>
                <p class="card-text fst-italic">September 2024 - Present (Ongoing)</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-4">
            <div class="card h-100">
              <img src="/img/blp-smartwarehouse.jpeg" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">
                  Digital Transformation - Web Redesign and Development Projects
                  <span class="fw-bold">(CONFIDENTIAL)</span>
                </h5>
                <p class="card-text">
                  My mentors and I at PT. Schneider Electric Manufacturing Batam from the Digital
                  Transformation department have developed several company websites using the
                  ASP.NET MVC Framework and Microsoft SQL Server to improve the company profile and
                  enhance work efficiency in various departments. The screenshot above shows the
                  website developed for the BLP Plant, which aims to provide information about smart
                  warehouse, the BLP plant, organizational structure, etc. However, the data
                  presented is more interactive as it is integrated with a database.
                </p>
                <p class="card-text fw-bold">Project Type: External Project</p>
                <p class="card-text fw-bold">
                  Category: Corporate Web Development, ASP .NET MVC, C#, SQL Server
                </p>
                <p class="card-text fst-italic">August 2023 - August 2024</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 mb-4">
            <div class="card h-100">
              <img src="/img/myquery.png" class="card-img-top" />
              <div class="card-body">
                <a href="https://github.com/ruffianazzahri/myquery_mssql_executor" target="_blank"
                  ><h5 class="card-title">MyQuery the MSSQL Query Executor</h5></a
                >
                <p class="card-text">
                  MyQuery is a self-directed learning project application designed to execute SQL
                  Server queries through the web. This application is built using the ASP.NET MVC
                  Framework (v8), C# language, and SQL Server for database management.
                </p>
                <p class="card-text fw-bold">Project Type: External Project</p>
                <p class="card-text fw-bold">
                  Category: Web Development, ASP .NET MVC, C#, SQL Server
                </p>
                <p class="card-text fst-italic">July 2024</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 mb-4">
            <div class="card h-100">
              <img src="/img/ndpvrtour.png" class="card-img-top" />
              <div class="card-body">
                <a href="https://youtu.be/DKN291jirHk" target="_blank"
                  ><h5 class="card-title">Nongsa Digital Park Virtual Tour</h5></a
                >
                <p class="card-text">
                  A VR-based application for exploring the NDP workspace and work environment,
                  developed by Tworue Studio. This project was part of the 6th Project-Based
                  Learning and collaborated with Nongsa Digital Park.
                </p>
                <p class="card-text fw-bold">Project Type: PBL Project, External Project</p>
                <p class="card-text fw-bold">
                  Category: Corporate Apps Development, Virtual Reality, Unity Studio, C# (For
                  Unity)
                </p>
                <p class="card-text fst-italic">February 2023 - June 2023</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 mb-4">
            <div class="card h-100">
              <img src="/img/silah.png" class="card-img-top" />
              <div class="card-body">
                <a
                  href="https://if.polibatam.ac.id/pamerin/detail.php?title=si-lah&id=NDMxMjAwMTA2Ng==&ta=Mw=="
                  target="_blank"
                  ><h5 class="card-title">SI-LAH</h5></a
                >
                <p class="card-text">
                  An Android application developed by SFR Developers allows users to report facility
                  issues online directly to the Department of Education Office in Tanjungpinang
                  City. This project is part of the 5th Semester of Project-Based Learning.
                </p>
                <p class="card-text fw-bold">Project Type: PBL Project, External Project</p>
                <p class="card-text fw-bold">
                  Category: Corporate Apps Development, Flutter, Dart, MySQL
                </p>
                <p class="card-text fst-italic">August 2022 - December 2022</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 mb-4">
            <div class="card h-100">
              <img src="/img/xiistudiocompanyprofile.png" class="card-img-top" />
              <div class="card-body">
                <a href="https://ruffianazzahri.github.io/xiistudio/" target="_blank"
                  ><h5 class="card-title">XII Studio Profile Company</h5></a
                >
                <p class="card-text">
                  A company profile web project by XII Studio, participating in the Sevent: Web
                  Development Competition by Institut Teknologi Purwokerto.
                </p>
                <p class="card-text fw-bold">Project Type: Competition Project</p>
                <p class="card-text fw-bold">Category: Web Development, Bootstrap</p>
                <p class="card-text fst-italic">October 2022</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 mb-4">
            <div class="card h-100">
              <img src="/img/aaron.jpg" class="card-img-top" />
              <div class="card-body">
                <a
                  href="https://shilau.polibatam.ac.id/pblexpo/detail.php?title=aaron-lost-in-the-jungle&id=NDMxMjAwMTA4OA=="
                  target="_blank"
                  ><h5 class="card-title">Aaron: Lost in The Jungle</h5></a
                >
                <p class="card-text">
                  A 3D adventure game developed by XII Studio. This project was part of the 4th
                  Semester Project-Based Learning and was a finalist in the Game Development
                  Competition at KMIPN IV.
                </p>
                <p class="card-text fw-bold">Project Type: PBL Project, Competition Project</p>
                <p class="card-text fw-bold">
                  Category: Game Development, Virtual Reality, Unity Studio, C# (For Unity)
                </p>
                <p class="card-text fst-italic">February 2022 - July 2022</p>
              </div>
            </div>
          </div>

          <!-- <div class="col-12 col-md-4 mb-4">
            <div class="card h-100">
              <img src="/img/kebiasaan.png" class="card-img-top" alt="2" />
              <div class="card-body">
                <a href="https://youtu.be/9VWbe21ifA0" target="_blank"
                  ><h5 class="card-title">KEBIASAAN</h5></a
                >
                <p class="card-text">
                  A comedy short movie produced by Trias Studios. This project was part of the 3rd
                  Semester Project-Based Learning in short movie production. I contributed as an
                  audio technician.
                </p>
                <p class="card-text fw-bold">Category: Movie</p>
                <p class="card-text fst-italic">December 2021</p>
              </div>
            </div>
          </div> -->
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
