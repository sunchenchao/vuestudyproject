<template>
    <div>
        <h1>{{good}}</h1>
    </div>
    
</template>

<script>
    export default {
        name: "CartListItem.vue",
        props:{
            good:{
                type:Object,
                default:{}
            }
        }

    }
</script>

<style scoped>

</style>