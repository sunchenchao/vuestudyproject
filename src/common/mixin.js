//混入对象可以写vue中option中的所有的东西
import BackTop from "@/components/content/backtop/BackTop";
export const backTopMinxin = {
    components:{
        BackTop,
    },
    data(){
        return {
            controlTopIsShow:false,
        }
    },
    methods:{
        GoToTop() {
            console.log("top");
            this.$refs.scroll.GoToTop(0, 0, 300);
          },
    }
}

//mixins:[backTopMinxin],
//这个就是在option中的调用