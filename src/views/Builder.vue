<template>
    <div class="home">
        <FormBuilder
            v-bind:form="form"
            v-bind:options="options"
            v-on:change="myChange"
        />
        <!-- Could put: v-bind:form="getMyForm" -->
    </div>
</template>

<script>
"use strict";
import { FormBuilder } from "vue-formio";
import { mapState, /* mapGetters, */ mapActions } from "vuex";

export default {
    components: {
        FormBuilder,
    },
    data: () => {
        return {
            options: {},
        };
    },
    computed: {
        ...mapState(["form"]),
        // ...mapGetters(["getMyForm"]),
    },
    methods: {
        ...mapActions(["setForm"]),
        myChange: function (event) {
            if (event.components) {
                // console.log(`[Builder] event:${JSON.stringify(event)}`);
                // Dirty ;) cf. console.log...
                // See https://help.form.io/developers/form-builder#events
                this.$store.dispatch("setForm", event);
            }
        },
    },
};
</script>
