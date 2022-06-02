

const App={
    data:function(){
        return{
            height:"",
            weight:"",
            BMI:"",
            year : "",
            month : "",
            day : "",
            temp:[],
        }
    },
    methods:{
        calculate(){
            this.BMI=Math.round(this.BMI=this.weight/((this.height)*(this.height)/10000));
            this.temp.push({height:this.height,weight:this.weight,BMI:this.BMI,year:this.year,month:this.month,day:this.day});
            
            
            
        }
    },

    created(){
         this.year = new Date().getFullYear();
         this.month = new Date().getMonth()+1;
         this.day = new Date().getDate();
    },
   


}





Vue.createApp(App).mount('#app');









