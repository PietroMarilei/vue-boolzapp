const { createApp } = Vue


createApp({
    data() {
        return {
            message: "Hello Vue",
        }

    },
    methods: {
        test() {
            console.log("Hi, im Vue!");
        }
    },

    mounted() {
    },



}).mount('#app')
