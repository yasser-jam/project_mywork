<template>
  <base-card>
    <div>
      <h2>Regestre Now!</h2>
      <form @submit.prevent="submitFormReg">
        <label for="first-name">First Name:</label>
        <input :class="error" id="first-name" type="text" v-model="firstName" />
        <p v-if="errorMsg">this field is required</p>

        <label for="last-name">Last Name:</label>
        <input :class="error" id="last-name" type="text" v-model="lastName" />
        <p v-if="errorMsg">this field is required</p>

        <div class="checkbox-sec">
          <label for="front-end">Fornt-end:</label>
          <input
            :class="error"
            id="front-end"
            name="props"
            value="frontend"
            type="checkbox"
            v-model="coachProps"
          />
          <p v-if="errorMsg">this field is required</p>

          <label for="back-end">Back-end:</label>
          <input
            :class="error"
            id="back-end"
            name="props"
            value="backend"
            type="checkbox"
            v-model="coachProps"
          />
          <p v-if="errorMsg">this field is required</p>

          <label for="career">Career:</label>
          <input
            :class="error"
            id="career"
            name="props"
            value="career"
            type="checkbox"
            v-model="coachProps"
          />
          <p v-if="errorMsg">this field is required</p>
        </div>

        <label for="price-hour">Price in Hour:</label>
        <input
          :class="error"
          id="price-hour"
          type="number"
          v-model="priceHour"
        />
        <p v-if="errorMsg">this field is required</p>

        <button type="submit">Send</button>
      </form>
    </div>
  </base-card>
  <teleport to="body">
    <p class="success-message" v-if="isSuccess">
      Regestering is complete!<span @click="isSuccess = false">x</span>
    </p>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      errorMsg: false,
      firstName: '',
      lastName: '',
      priceHour: '',
      coachProps: [],
      error: '',
      isSuccess: false
    };
  },

  computed: {
    coachesLen() {
      return this.$store.getters['coaches/getCoachesLength'];
    }
  },

  methods: {
    submitFormReg() {
      if (
        (this.firstName === '' ||
          this.lastName === '' ||
          this.coachProps.length === 0,
        this.priceHour === '')
      ) {
        this.errorMsg = true;
        this.error = 'errorMsg';
      } else {
        fetch(
          'https://coach-finder-f0c8a-default-rtdb.firebaseio.com/coaches.json',
          {
            method: 'POST',
            headers: { 'Connect-Type': 'application/json' },
            body: JSON.stringify({
              id: this.coachesLen + 1,
              firstName: this.firstName,
              lastName: this.lastName,
              coachProps: this.coachProps,
              priceHour: this.priceHour
            })
          }
        );
        this.firstName = '';
        this.lastName = '';
        this.priceHour = '';
        this.coachProps = [];
        (this.error = ''), (this.isSuccess = true);
      }
    }
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 30px;
}

div {
  text-align: center;
  width: 70%;
  margin: 0 auto;
}

label {
  display: block;
  margin: 20px 0 5px 0;
  font-size: 1.2rem;
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 1.1rem;
  border: 2px solid rgb(182, 182, 182);
}

div.checkbox-sec {
  width: 75%;
  margin: 20px auto;
}

div.checkbox-sec label {
  display: inline;
}

input[type='checkbox'] {
  display: inline-block;
  width: auto;
  margin: 0 10px;
}

p {
  margin: 0;
  font-size: 1.1rem;
  color: red;
  background-color: antiquewhite;
}

.errorMsg {
  transition: all 0.2s;
  border: 1px solid rgba(255, 0, 0, 0.657);
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

p.success-message {
  padding: 10px;
  width: 30%;
  position: absolute;
  top: 25%;
  left: 10%;
  font-size: 1.1rem;
  background-color: rgb(134 236 137 / 69%);
  border: 1px solid rgba(58, 163, 58, 0.781);
  color: #6c6464;
}

.success-message span {
  float: right;
  margin: 0 10px;
}
</style>
