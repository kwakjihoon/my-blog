<template>
    <div>
        <home-title></home-title>
        <div class="container">
            <h1>Blog content1</h1>
            <h1>Blog content2</h1>
            <h1>Blog content</h1>
            <h1>Blog content</h1>
            <h1>Blog content</h1>
            <h1>Blog content</h1>
            <h1>Blog content</h1>
            <h1>Blog content</h1>
            <h1>Blog content</h1>
            <h1>Blog content</h1>
            <h1>Blog content</h1>
            <h1>Blog content</h1>
            <h1>Blog content</h1>
        </div>
    </div>
</template>

<script>
    const HomeTitle= 'url:/main_modules/components/contents/home/HomeTitle.vue';
    module.exports = {
        name: "Home.vue",
        components: {
            'home-title':HomeTitle,
        },
        mounted(){

        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>