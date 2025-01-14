const app = Vue.createApp({
    data() {
        return {
            searchTerm: '',
            filterClass: false,
            filterExtras: false
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
            if (this.filterClass == true) {
                $('.extracurricular').each(function () {
                    $(this).hide();
                });
            }
            if (this.filterExtras == true) {
                $('.inClass').each(function () {
                    $(this).hide();
                });
            }
        },
        checkcbxs() {
            if (this.filterClass == false) {
                $("#cbx1").prop("checked", false);
            }
            if (this.filterExtras == false) {
                $("#cbx2").prop("checked", false);
            }
            if (this.filterClass == false && this.filterExtras == false) {
                $('.ensembles').each(function () {
                    $(this).show();
                });
            }
            if (this.searchTerm == '') {
                if (this.filterClass == true) {
                    $('.inClass').each(function () {
                        $(this).show();
                    });
                    $('.extracurricular').each(function () {
                        $(this).hide();
                    });
                }
                if (this.filterExtras == true) {
                    $('.extracurricular').each(function () {
                        $(this).show();
                    });
                    $('.inClass').each(function () {
                        $(this).hide();
                    });
                }
            } else {
                this.search()
            }
        }
    }
});

app.mount("#vue_app");
