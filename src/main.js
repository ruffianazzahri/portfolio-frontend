import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Import ikon yang ingin digunakan
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

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/main.css";
// Import Bootstrap JS (optional, jika Anda ingin menggunakan fitur JS seperti modal, dropdown, dll.)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Tambahkan ikon ke library
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
  faDiagramProject,
  faBriefcase,
  faGithub,
  faStar,
  faCertificate
);

const app = createApp(App);

// Daftarkan FontAwesome sebagai komponen global
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
