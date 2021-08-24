<template>
    <header>
        <div class="header-container">
            <h1>Find a Coach</h1>
            <ul>
                <li><router-link to="/coaches">All Coaches</router-link></li>
                <li><router-link to="/requests">Requests</router-link></li>
                <li><router-link to="/regestre">Regestre as a coach</router-link></li>
            </ul>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                isCoach: this.$store.state['coaches/isCoach'],   
            }
        }
    }
</script>

<style scoped>
    header {
        width: 100%;
        height: 100px;
        background-color: #370C86;
    }

    header .header-container {
        width: 75%;
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header .header-container h1 {
        color: white;
    }

    header .header-container ul li {
        display: inline-block;
        margin-right: 35px;
    }

    header .header-container ul li a {
        text-decoration: none;
        color: #d2dc7a;
    }

</style>