<template>
<div id="detail">
    {{goodiid}}

</div>
    
</template>
<script>
export default {
    name:"Detail",
    components:{

    },
    data(){
        return{
            goodiid:null,

        }
    },
    created(){
        console.log(this.$route.params)
        this.goodiid = this.$route.params.iid;
    }
}
</script>

<style scoped>

</style>