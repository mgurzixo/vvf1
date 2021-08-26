<template>
    <div class="home">
        <FormBuilder v-bind:form="form" v-bind:options="options" />
    </div>
</template>

<script>
import { FormBuilder } from "vue-formio";

export default {
    components: {
        FormBuilder,
    },
    data: () => {
        return {
            form: {},
            options: {},
        };
    },
};
</script>
