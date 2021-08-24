<template>
    <div>
        <a href="#">{{ email }}</a>
        <span>{{ message }}</span>
    </div>
</template>

<script>
export default {
  props: ['message', 'email']
};
</script>


<style scoped>
    div {
        width: 75%;
        margin: 25px auto;
        padding: 10px;
        border: 1px solid rgb(219, 219, 219);
        font-size: 1.1rem;
    }

    a {
        display: inline-block;
        font-weight: 600;
        margin-bottom: 10px 
    }
    
    span {
        display: block;
    }

</style>