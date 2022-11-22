var app = new Vue({
    el: '#app',
    data: {
        emailArray: []
    },
    methods: {
        printEmail() {

            this.emailArray = []

            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    let emailSingola = response.data.response;
                    console.log(emailSingola);
                    this.emailArray.push(emailSingola);
                })
            }


        },
    },
});