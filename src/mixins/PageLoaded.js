export default {
    data() {
        return {
            loading: true
        }
    },
    // mounted() {
    //     this.pageLoaded();
    // },
    methods: {
        pageLoaded() {
            this.loading = false
            console.log("Page loaded successfully");
        }
    }
};