<template>
  <section id="achievements">
    <div class="container">
      <div class="p-1 mb-1 rounded-3">
        <h1 class="display-4 text-center">
          <font-awesome-icon :icon="['fas', 'trophy']" /> Achievements
        </h1>
        <hr class="my-4" />
      </div>
    </div>
    <div class="container">
      <div class="row mb-3">
        <div v-for="(achievement, index) in achievements" :key="index" class="col mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                <a :href="achievement.link" target="_blank">{{ achievement.title }}</a>
              </h5>
              <p class="card-text fst-italic">{{ achievement.organization }}</p>
              <p class="card-text fst-italic text-secondary">{{ achievement.date }}</p>
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
      achievements: [
        {
          title: "2022 Participant of Web Development Competition",
          link: "https://drive.google.com/file/d/1QI59wXhJzTKhIfkgl2j8lD2Rc7RbMaan/view?usp=sharing",
          organization: "Sevent, HMSE, Institut Teknologi Telkom Purwokerto",
          date: "October 25, 2022",
        },
        {
          title: "2022 Finalist of National Game Development Competition",
          link: "https://drive.google.com/file/d/1r2XwveSycqDv5NKdcxhRl16pRfP4t-Fu/view?usp=sharing",
          organization: "KMIPN IV, Politeknik Negeri Batam",
          date: "August 03, 2022",
        },
        {
          title: "Participant of Photography Contest",
          link: "https://drive.google.com/file/d/1S_52GCeU7gOwnbi5qkucJkZzA1Z7z9t7/view?usp=sharing",
          organization: "Politeknik Negeri Batam",
          date: "November 16, 2020",
        },
      ],
    };
  },
};
</script>
