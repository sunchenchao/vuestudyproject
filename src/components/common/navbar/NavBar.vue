<template>
    <div class="nab-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>



    </div>
    
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .nab-bar{
        display: flex;
        line-height: 44px;
        height: 44px;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        z-index: 12;
        background-color:white;
    }
    .left,.right {
        width: 60px;
    }
    .center{
        flex: 1;
        text-align: center;
    }

</style>