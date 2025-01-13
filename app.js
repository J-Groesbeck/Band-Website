const app = Vue.createApp({
    data() {
        return {
            searchTerm: ''
        };
    },
    methods: {
        search() {
            let searchTerm = this.searchTerm.toLowerCase().replace(/\s+/g, '_');
            $('.ensembles').each(function () {
                const divId = $(this).attr('id');
                if (divId && divId.toLowerCase().includes(searchTerm)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    }
});

app.mount("#vue_app");
