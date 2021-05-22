<template>
    <div id="home">
        <NavBar>
            <div slot="center">首页</div>
        </NavBar>

    </div>
</template>

<script>
    import NavBar from "@/components/common/navbar/NavBar";
    import {getHomeMultidata} from "@/network/home";

    export default {
        name: "Home",
        components:{
            NavBar
        },
        data(){
            return{
                banner:null,
            }
        },
        created() {
            getHomeMultidata().then((res)=>{
                console.log(res.data.data.banner);
                this.banner = res.data.data.banner;
            })

        }
    }
</script>

<style scoped>

</style>