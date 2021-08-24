<template>
  <base-card>
    <div>
      <h2>Coach Contact</h2>
      <span>to: {{ coachName }}</span>
      <form @submit.prevent>
        <label for="email">Your e-mail: </label>
        <input id="email" type="email" v-model="reqEmail" />
        <p v-if="errorMsg">this field is required</p>

        <label>Send a Message:</label>
        <textarea rows="5" cols="20" v-model="reqMsg"></textarea>
        <p v-if="errorMsg">this field is required</p>

        <button @click="sendRequest">Send</button>
      </form>
    </div>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      coachId: this.$route.params.coachId,
      reqMsg: '',
      reqEmail: '',
      errorMsg: false
    };
  },

  computed: {
    coachName() {
      let selectedCoach = '';
      const coaches = this.$store.getters['coaches/getCoaches'];
      for (const coach of coaches) {
        if ('c' + coach.id === this.coachId) {
          selectedCoach = coach.FirstName + ' ' + coach.LastName;
        }
      }
      return selectedCoach;
    }
  },

  methods: {
    sendRequest() {
      if (this.reqEmail === '' || this.reqMessage === '') {
        this.errorMsg = true;
      } else {
        fetch(
          'https://coach-finder-f0c8a-default-rtdb.firebaseio.com/requests.json',
          {
            method: 'POST',
            headers: { 'Connect-Type': 'application/json' },
            body: JSON.stringify({
              msg: this.reqMsg,
              email: this.reqEmail
            })
          }
        );
        this.$router.push('/coaches');
      }
    }
  }
};
</script>

<style scoped>
div {
  width: 70%;
  margin: 0 auto;
  font-size: 1.2rem;
}

h2 {
  text-align: center;
}

form {
  margin: 20px 0;
}

input {
  width: 100%;
  margin: 10px 0 20px 0;
  padding: 10px;
  font-size: 1.2rem;
}

textarea {
  width: 100%;
  margin: 10px 0 20px 0;
  height: 100px;
  padding: 10px;
  font-size: 1.2rem;
}

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

p {
  margin-top: 0;
  color: red;
  font-style: italic;
}

</style>
