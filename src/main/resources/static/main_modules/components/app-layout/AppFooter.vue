<template>
    <!-- As a heading -->
    <nav class="navbar navbar-dark bg-dark fixed-bottom">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">
                {{$store.state.appName}}
            </span>
        </div>
    </nav>
</template>

<script>
    module.exports = {
        name: "AppFooter.vue",
        data(){
            return{

            }
        }
    }
</script>
<style scoped>

</style>