<template>
  <base-card>
    <h2>Requests Recived</h2>
    <request-item
      v-for="request in requests"
      :key="request.id"
      :message="request.msg"
      :email="request.email"
    ></request-item>
  </base-card>
</template>

<script>
import RequestItem from '../../components/sections/RequestItem.vue';
export default { 
  created() {
    this.getRequests();
  },

  components: { 
    RequestItem
  },

  computed: {
    requests() {
      return this.$store.getters['requests/getRequests'];
    }
  },

  methods: {
    getRequests() {
      this.$store.dispatch('requests/getRequestsAc')
    }
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
