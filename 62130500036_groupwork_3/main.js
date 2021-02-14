const app = {
    data() {
        return {
            tasks: [{title:'spiderman',done:false,img:'./images/1.jpg',like:0},
                {title:'spiderman 2099',done:false,img:'./images/2.jpg',like:0},
            {title:'scarlet spider',done:false,img:'./images/3.jpg',like:0}]
        }
    },
    methods: {
        toggleDone(index){
            if(this.tasks[index].done == false){
                this.tasks[index].done = !this.tasks[index].done;
                this.tasks[index].like = this.tasks[index].like + 1
            }
            else this.tasks[index].like = this.tasks[index].like + 1
        },
        unlike(index){
            if(this.tasks[index].like == 0){
                this.tasks[index].done = false
            }
            else 
            this.tasks[index].like = this.tasks[index].like - 1
        }
    }
    // computed: {
    //     countall(){
    //         return this.tasks.length
    //     }
    // }
}
ff =Vue.createApp(app).mount('#app')