<template>
    <div id="tab-bar">
       <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    #tab-bar{
        background-color: #f6f6f6;
        display: flex;
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;

        box-shadow: 0 -1px 1px rgba(100,100,100,0.1);
    }


</style>