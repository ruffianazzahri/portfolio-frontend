<template>
  <section id="skills" class="container py-5">
    <div class="text-center mb-4">
      <h1 class="display-4"><font-awesome-icon :icon="['fas', 'star']" /> Skills</h1>
      <hr />
    </div>
    <div class="row">
      <div v-for="(category, index) in skills" :key="index" class="col-md-6 mb-3">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">
              <font-awesome-icon :icon="category.icon" /> {{ category.title }}
            </h5>
            <p class="card-text">{{ category.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const skills = ref([
  {
    title: "Informatics",
    icon: ["fas", "laptop-code"],
    description:
      "Web Development, App Development, Unity Development, Web Design, UI/UX Design, Multimedia",
  },
  {
    title: "Frameworks",
    icon: ["fas", "layer-group"],
    description: "ASP .NET MVC, ASP .NET Core, Blazor, Vue.JS, Laravel, Flutter, Bootstrap",
  },
  {
    title: "Programming Languages",
    icon: ["fas", "code"],
    description: "PHP, C#, C# For Unity, HTML, CSS, Dart, SQL, Javascript",
  },
  { title: "Databases", icon: ["fas", "database"], description: "SQL Server, MySQL" },
  {
    title: "Tools",
    icon: ["fas", "tools"],
    description:
      "Microsoft Visual Studio, Visual Studio Code, Unity Studio, phpMyAdmin, XAMPP, GitHub Desktop, GitBash, Fork, JasperSoft, Microsoft SQL Server Management Studio",
  },
]);
</script>
