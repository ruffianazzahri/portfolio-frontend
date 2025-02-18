<template>
  <section id="certificates">
    <div class="container py-5">
      <div class="p-1 mb-1 rounded-3">
        <h1 class="display-4 text-center">
          <font-awesome-icon :icon="['fas', 'fa-certificate']" /> Certificates
        </h1>
        <hr class="my-4" />
      </div>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3">
        <div v-for="(certificate, index) in certificates" :key="index" class="col mb-4">
          <div class="card h-100">
            <img :src="certificate.image" class="card-img-top" :alt="certificate.title" />
            <div class="card-body">
              <h5 class="card-title">{{ certificate.title }}</h5>
              <p class="card-text fst-italic">{{ certificate.organization }}</p>
              <p class="card-text fst-italic text-secondary">{{ certificate.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      certificates: [
        {
          title: "2022 Participant of Sevent's Web Development Competition",
          organization: "Sevent by Institut Teknologi Telkom Purwokerto",
          date: "October 25, 2022",
          image: "/img/sevent.png",
        },
        {
          title: "2022 Finalist of National Game Development Competition",
          organization: "KMIPN IV, Politeknik Negeri Batam",
          date: "August 03, 2022",
          image: "/img/kmipniv.png",
        },
        {
          title: "Computer Organization and Architecture",
          organization: "Dr. Shaveta Thakral - Udemy",
          date: "April 29, 2022",
          image: "/img/udemy2.png",
        },
        {
          title: "Technology and Design Ethics",
          organization: "LinkedIn",
          date: "April 18, 2022",
          image: "/img/linkedin.png",
        },
        {
          title: "Pengenalan Sistem Informasi untuk Pemula",
          organization: "BINUS Online Learning - Udemy",
          date: "March 13, 2022",
          image: "/img/udemy.png",
        },
        {
          title: "Polibatam Student Creative Competition",
          organization: "Politeknik Negeri Batam",
          date: "November 16, 2020",
          image: "/img/pscc.png",
        },
      ],
    };
  },
};
</script>
