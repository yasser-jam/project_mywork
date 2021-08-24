<template>
  <div class="coach-item">
    <h2>{{ firstName + lastName }}</h2>
    <h3>{{ price }}</h3>
    <div class="props">
      <coach-props
        v-for="prop in props"
        :key="prop"
        :props="prop"
      ></coach-props>
    </div>
    <div class="options">
      <button @click="coachContact">Contact</button>
      <button @click="coachDetails">View Details</button>
    </div>
  </div>
</template>

<script>
import CoachProps from './CoachProps.vue';
export default {
  props: ['id', 'firstName', 'lastName', 'price', 'props'],
  components: {
    CoachProps
  },
  data() {
    return {};
  },
  methods: {
    coachContact() {
      this.$router.push('/coaches/' + 'c' + this.id + '/contact')
    },
    coachDetails() {
      this.$router.push('/coaches/' + 'c' + this.id)
    }
  }
};
</script>

<style scoped>
div.coach-item {
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid rgb(32, 36, 73);
  margin-bottom: 15px;
}

h2,
h3 {
  margin: 15px 0;
}

.options {
  display: flex;
  justify-content: flex-end;
  margin: 35px 0 10px 0;
}

button {
  display: inline-block;
  position: relative;
  padding: 15px 30px;
  border: 0;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 30px;
  color: #1d0630;
  border: 1px solid #1d0630;
  background-color: #fff;
  font-weight: 500;
  font-size: 1rem;
}

button:nth-of-type(2) {
  color: #fff;
  background-color: #1d0630;
}
</style>
