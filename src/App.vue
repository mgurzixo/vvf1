<template>
    <div id="app">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/builder">Builder</router-link>
            </li>
            <li>
                <router-link to="/form">Form</router-link>
            </li>
        </ul>
        <router-view />
    </div>
</template>

<style lang="scss">
ul {
    padding: 5px;
}
li {
    display: inline-block;
    margin: 0 10px;
}
</style>
