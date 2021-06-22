var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        photo: [
            'img/img1.jpg',
            'img/img2.jpg',
            'img/img3.jpg',
            'img/img4.jpg',
        ]
    },
    methods:{
        succ(){
            if (this.counter == this.photo.length-1){
                this.counter = 0;
                
            }
            else{
                this.counter++;
            }
        },
        prec(){
            if (this.counter == 0){
                this.counter = this.photo.length-1;
            }
            else{
                this.counter--;
            }
        },
        pallini(indice){
            this.counter = indice;
        }
        
    }
})
