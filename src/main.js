import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./assets/main.css";

import {
  faHouse,
  faSuitcase,
  faDiagramProject,
  faCertificate,
  faTrophy,
  faLightbulb,
  faEnvelope,
  faPhone,
  faFileAlt,
  faBriefcase,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

library.add(
  faHouse,
  faSuitcase,
  faDiagramProject,
  faCertificate,
  faTrophy,
  faLightbulb,
  faLinkedin,
  faEnvelope,
  faPhone,
  faFileAlt,
  faBriefcase,
  faGithub,
  faStar
);

const app = createApp(App);

// Daftarkan FontAwesome sebagai komponen global
app.component("font-awesome-icon", FontAwesomeIcon);

createApp(App).mount("#app");
