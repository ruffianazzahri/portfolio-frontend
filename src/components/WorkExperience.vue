<template>
  <div class="container py-5" id="work-experience">
    <div class="p-1 mb-1 rounded-3">
      <h1 class="display-4 text-center">
        <font-awesome-icon :icon="['fas', 'briefcase']" />
        Work Experience
      </h1>
      <hr class="my-4" />
    </div>
    <ExperienceTable :experiences="experiences" />
  </div>
</template>

<script>
import ExperienceTable from "./ExperienceTable.vue";

export default {
  name: "WorkExperience",
  components: {
    ExperienceTable,
  },
  data() {
    return {
      experiences: [
        {
          id: 1,
          year: "August 2023-August 2024",
          company: {
            name: "PT. Schneider Electric Manufacturing Batam",
            logo: "/img/schneider.png",
          },
          position: "Web Developer Intern for Digital Transformation Department",
          responsibilities: [
            "Developed websites using ASP.NET MVC Framework, C#, SQL Server, and agile approach to support digital transformation.",
            "Redesigned the existing website.",
            "Collaborated with colleagues specializing in 3D design and multimedia to create a web platform that prioritized attractive UI/UX.",
            "Worked closely with a mentor.",
          ],
          contributions: [
            "Increase engagement of PEM and PEL plant profiles by updating the company profile website with a fresher look.",
            "The website used for the SERE department is more up-to-date due to migration from a PHP-based framework to ASP .NET MVC.",
            "The BLP plant profile website is more dynamic and interactive, introducing Smart Warehouse for this plant.",
          ],
          modal: {
            id: "schModal",
            title: "Schneider Internship Letter of Acknowledgement",
            content: "pdf/sch.pdf",
          },
        },
        {
          id: 2,
          year: "March 2023-June 2023",
          company: {
            name: "Nongsa Digital Park",
            logo: "/img/ndp.png",
          },
          position: "Unity Developer (UNOFFICIAL - Related to 6th PBL Project)",
          responsibilities: [
            "Developed VR-based tour application using Unity Studio and C# for Unity Language.",
            "Import and stiched 360° Panoramic Photos that been captured by 360° Photographer to application development.",
            "Implemented UI/UX that been designed by UI/UX Designer.",
          ],
          contributions: [
            "Developed Virtual Reality Tour Application for Nongsa Digital Park to explores NDP's workspace and environment virtually.",
          ],
          modal: {
            id: "ndpModal",
            title: "ID Card",
            content: "/img/workid.jpg",
            disclaimer:
              "This is not a permanent employee status; rather, this position is related to the 6th Semester Project-Based Learning (PBL) project in collaboration with Nongsa Digital Park, by Politeknik Negeri Batam",
          },
        },
      ],
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
