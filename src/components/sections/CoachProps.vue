<template>
  <span :class="props">{{ props }}</span>
</template>

<script>
    export default {
        props: ['props']
    }
</script>

<style scoped>
span {
  padding: 10px 30px;
  border-radius: 20px;
  color: white; 
  margin-right: 10px;
  display: inline-block;
  text-transform: uppercase;
}

.career {
    background-color: #5c0c42;
}

.frontend {
    background-color: #240858;
}

.backend {
    background-color: #5c0c42;
}

</style>
