<template>
  <finding-coach
    :submitted="submitted"
    @validate="validateCoaches"
  ></finding-coach>
  <h1>{{JSON.stringify(coaches)}}</h1>
  <base-card>
    <button @click="confirmSub">Refresh</button>
    <coach-item
      v-for="coach in filteredCoaches"
      :id="coach.id"
      :key="coach.FirstName"
      :firstName="coach.FirstName"
      
      :lastName="coach.LastName"
      :price="coach.Price"
      :props="coach.Props"
    ></coach-item>
  </base-card>
</template>

<script>
import FindingCoach from '../../components/sections/FindingCoach.vue';
import CoachItem from '../../components/sections/CoachItem.vue';

export default {
  mounted() {
    this.getCoaches();
  },

  data() {
    return {
      coaches: this.$store.getters['coaches/getCoaches'],
      filteredCoaches: this.$store.getters['coaches/getCoaches'],
      serCoachesList: [],
      submitted: false,
    };
  },

  components: {
    FindingCoach,
    CoachItem
  },

  methods: {
    confirmSub() {
      console.log(this.$store.getters['coaches/getCoaches']);
      this.submitted = !this.submitted;
    },

    validateCoaches(jobInfo) {
      var selectedCoaches = [];
      var uniqueSelectedCoaches = [];
      if (jobInfo.length === 0) {
        this.filteredCoaches = this.coaches;
      } else {
        jobInfo.forEach(job => {
          this.coaches.forEach(coach => {
            if (coach.Props.indexOf(job) >= 0) {
              selectedCoaches.push(coach);
            }
          });
        });
        if (selectedCoaches.length === 0) {
          this.filteredCoaches = []
        } else {
          selectedCoaches.forEach(selCoach => {
            if (uniqueSelectedCoaches.indexOf(selCoach) === -1) {
              uniqueSelectedCoaches.push(selCoach);
            }
          });
          this.filteredCoaches = uniqueSelectedCoaches;
          uniqueSelectedCoaches = [];
        }
      }
    },

    getCoaches() {
      this.$store.dispatch('coaches/getCoaches')
    }
  }
};
</script>

<style scoped>
button {
  display: inline-block;
  position: relative;
  padding: 15px 30px;
  border: 0;
  cursor: pointer;
  border-radius: 30px;
  color: #1d0630;
  margin: 15px 0;
  border: 1px solid #1d0630;
  background-color: #fff;
  font-weight: 600;
  font-size: 1rem;
}
</style>
