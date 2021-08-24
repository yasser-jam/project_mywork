<template>
  <h2>Coach Details</h2>
  <base-card>
    <div>
      <h3>First Name:</h3>
      <span>{{ firstName }}</span>
      <h3>Last Name:</h3>
      <span>{{ lastName }}</span>

      <h3>props:</h3>
      <span>{{ props }}</span>
      <h3>Price:</h3>
      <span>{{ price }}</span>
      <button @click="returnCoaches">Return To Coaches</button>
      <button @click="contactCoach">Contact</button>
    </div>
  </base-card>
</template>

<script>
export default {
  created() {
    this.getCoach();
  },

  data() {
    return {
      coaches: this.$store.getters['coaches/getCoaches'],
      coachId: this.$route.params.coachId,
      firstName: '',
      lastName: '',
      props: [],
      price: ''
    };
  },

  computed: {
    getCoaches() {
      return this.$store.getters['coaches/getCoaches'];
    }
  },

  methods: {
    getCoach() {
      let selectedCoach;
      for (const coach of this.coaches) {
        if ('c' + coach.id === this.coachId) {
          selectedCoach = coach;
        }
      }
      this.firstName = selectedCoach.FirstName;
      this.lastName = selectedCoach.LastName;
      this.props = selectedCoach.Props;
      this.price = selectedCoach.Price;
    },
    returnCoaches() {
      this.$router.push('/coaches/');
    },
    contactCoach() {
        this.$router.push('/coaches/' + this.coachId + '/contact')
    }
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
}

div {
  padding: 10px;
}

button {
  display: block;
  position: relative;
  padding: 15px 30px;
  border: 0;
  cursor: pointer;
  border-radius: 30px;
  color: #1d0630;
  margin: 15px auto;
  border: 1px solid #1d0630;
  background-color: #fff;
  font-weight: 600;
  font-size: 1rem;
}
</style>
