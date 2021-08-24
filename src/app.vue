<template>
    <the-header></the-header>
    <router-view></router-view>
</template>

<script>
    import TheHeader from './components/layout/TheHeader.vue';
    export default {
        components: {
            TheHeader,
        },
        data() {

        },
    }
</script>


<style>
    html {
        font-size: 16px;
    }

    body {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }

</style>