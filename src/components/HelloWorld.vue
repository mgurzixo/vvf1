<template>
    <div>
        <h1>{{ msg }}</h1>

        <p>
            <a href="https://vitejs.dev/guide/features.html" target="_blank"
                >Vite Documentation</a
            >
            |
            <a href="https://vuejs.org/v2/guide/" target="_blank"
                >Vue 2 Documentation</a
            >
            |
            <a
                href="https://help.form.io/developers/introduction"
                target="_blank"
                >Formio Documentation</a
            >
        </p>
    </div>
</template>

<script>
export default {
    props: {
        msg: String,
    },
};
</script>

<style scoped>
a {
    color: #42b983;
}
</style>
