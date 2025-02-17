<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <section id="skills">
    <div class="container" id="skills">
      <div class="p-1 mb-1 rounded-3">
        <h1 class="display-4 text-center"><font-awesome-icon :icon="['fas', 'star']" /> Skills</h1>
        <hr class="my-4" />
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title"><i class="fas fa-laptop-code"></i> Informatics</h5>
              <p class="card-text">
                Web Development, App Development, Game Development, Unity Development, Web Design,
                UI/UX Design & Tech Support, Multimedia
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title"><i class="fas fa-layer-group"></i> Frameworks</h5>
              <p class="card-text">
                ASP .NET MVC, ASP .NET Core, ASP. NET Core Blazor, Vue.JS, Laravel, Flutter,
                Bootstrap
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title"><i class="fas fa-code"></i> Programming Languages</h5>
              <p class="card-text">PHP, C#, C# For Unity, HTML, CSS, Dart, SQL, Javascript</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title"><i class="fas fa-database"></i> Databases</h5>
              <p class="card-text">SQL Server, MySQL</p>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title"><i class="fas fa-tools"></i> Tools</h5>
              <p class="card-text">
                Microsoft Visual Studio, Visual Studio Code, Unity Studio, phpMyAdmin, XAMPP, GitHub
                Desktop, GitBash, Fork, JasperSoft, Microsoft SQL Server Management Studio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
