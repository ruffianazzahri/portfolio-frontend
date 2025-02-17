<template>
  <div class="container py-5" id="work-experience">
    <div class="p-1 mb-1 rounded-3">
      <h1 class="display-4 text-center">
        <font-awesome-icon :icon="['fas', 'briefcase']" />
        Work Experience
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
      <div class="container">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="text-center">No.</th>
                <th scope="col" class="text-center">Year</th>
                <th scope="col" class="text-center">Company</th>
                <th scope="col" class="text-center">Position</th>
                <th scope="col" class="text-center">Responsibilites</th>
                <th scope="col" class="text-center">Contributions</th>
                <th scope="col" class="text-center">Other</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="text-center">1</th>
                <th scope="col" class="text-center">August 2023-August 2024</th>
                <td class="text-center">
                  <img
                    src="/img/schneider.png"
                    class="rounded mb-2"
                    alt="PT. Schneider Electric Manufacturing Batam"
                    width="100"
                    height="100"
                  />
                  <br />PT. Schneider Electric Manufacturing Batam
                </td>
                <th scope="col" class="text-center">
                  Web Developer Intern for Digital Transformation Department
                </th>
                <td>
                  <ol>
                    <li>
                      Developed websites using ASP.NET MVC Framework, C#, SQL Server, and agile
                      approach to support digital transformation.
                    </li>
                    <li>Redesigned the existing website.</li>
                    <li>
                      Collaborated with colleagues specializing in 3D design and multimedia to
                      create a web platform that prioritized attractive UI/UX.
                    </li>
                    <li>Worked closely with a mentor.</li>
                  </ol>
                </td>
                <td>
                  <ol>
                    <li>
                      Increase engagement of PEM and PEL plant profiles by updating the company
                      profile website with a fresher look.
                    </li>
                    <li>
                      The website used for the SERE department is more up-to-date due to migration
                      from a PHP-based framework to ASP .NET MVC.
                    </li>
                    <li>
                      The BLP plant profile website is more dynamic and interactive, introducing
                      Smart Warehouse for this plant.
                    </li>
                  </ol>
                </td>
                <th scope="col" class="text-center">
                  <button
                    type="button"
                    class="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#schModal"
                  >
                    Schneider Internship Letter of Acknowledgement
                  </button>
                </th>
              </tr>
              <tr>
                <th scope="row" class="text-center">2</th>
                <th scope="col" class="text-center">March 2023-June 2023</th>
                <td class="text-center">
                  <img
                    src="/img/ndp.png"
                    class="rounded mb-2"
                    alt="Nongsa Digital Park"
                    width="100"
                    height="100"
                  />
                  <br />Nongsa Digital Park
                </td>
                <th scope="col" class="text-center">
                  Unity Developer
                  <span style="font-style: italic">(UNOFFICIAL - Related to 6th PBL Project)</span>
                </th>
                <td>
                  <ol>
                    <li>
                      Developed VR-based tour application using Unity Studio and C# for Unity
                      Language.
                    </li>
                    <li>
                      Import and stiched 360° Panoramic Photos that been captured by 360°
                      Photographer to application development.
                    </li>
                    <li>Implemented UI/UX that been designed by UI/UX Designer.</li>
                  </ol>
                </td>
                <td>
                  <ol>
                    <li>
                      Developed Virtual Reality Tour Application for Nongsa Digital Park to explores
                      NDP's workspace and environment virtually.
                    </li>
                  </ol>
                </td>
                <th scope="col" class="text-center">
                  <br />
                  <button
                    type="button"
                    class="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#ndpModal"
                  >
                    Work ID
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="schModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Schneider Internship Letter of Acknowledgement
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <iframe src="pdf/sch.pdf" style="width: 100%; height: 100%; border: none"></iframe>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="ndpModal"
    tabindex="-1"
    aria-labelledby="ndpModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ndpModalLabel">ID Card</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center">
          <div class="text-center">
            <h5 class="fw-bold">DISCLAIMER</h5>
          </div>
          <p>
            This is not a permanent employee status; rather, this position is related to the 6th
            Semester Project-Based Learning (PBL) project in collaboration with Nongsa Digital Park,
            by Politeknik Negeri Batam
          </p>
          <img src="/img/workid.jpg" style="width: 50%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkExperience",
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
