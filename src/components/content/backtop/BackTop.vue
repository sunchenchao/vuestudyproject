<template>
    <div class="backtop">
        <img src="@/assets/img/common/top.png">
    </div>
    
</template>

<script>
    export default {
        name: "BackTop"
    }
</script>

<style scoped>
    .backtop{
        position: fixed;
        bottom: 70px;
        right: 20px;
        z-index: 12;
    }
    .backtop > img{
        width: 50px;
    }

</style>