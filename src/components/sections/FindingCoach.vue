<template>
    <base-card>
        <div>
            <h2>Find Your Coach</h2>
            <form method="get" ref="formJob" action='#'>
                <input id="frontend" type="checkbox" name="props" value="frontend" v-model="jobDescription">
                <label for="frontend">Frontend</label>
                <input id="backend" type="checkbox" name="props" value="backend" v-model="jobDescription">
                <label for="backend">Backend</label>
                <input id="career" type="checkbox" name="props" value="career" v-model="jobDescription">
                <label for="career">Career</label>
            </form>
        </div>
    </base-card>
</template>

<script>
    export default {
        props: ['submitted'],
        data() {
            return {
                jobDescription: [],
            }
        },
        methods: {
            submitForm() {
                // this.$refs.formJob.submit()
                this.$emit('validate', this.jobDescription)
            }
        },
        watch: {
            submitted() {
                this.submitForm()
            }
        }
    }
</script>

<style scoped>
    div {
        text-align: center;
        font-size: 1.2rem;
    }

    h2 {
        font-weight: 800
    }

    form {
        width: 100%;
        margin: 30px auto;
    }

    label {
        margin-right: 35px;
    }
</style>