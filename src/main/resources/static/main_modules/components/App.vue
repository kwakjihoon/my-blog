
<template>
    <div >

        <app-navbar></app-navbar>

        <app-body :class="bodyFadeStatus? 'in':''" class="fade"></app-body>
        <app-footer></app-footer>
    </div>
</template>
<script>
    const AppNavBar = 'url:/main_modules/components/app-layout/AppNavbar.vue';
    const AppBody = 'url:/main_modules/components/app-layout/AppBody.vue';
    const AppFooter = 'url:/main_modules/components/app-layout/AppFooter.vue';

    module.exports = {
        name: "App.vue",
        components: {
            'app-navbar': AppNavBar,
            'app-body':AppBody,
            'app-footer':AppFooter,
        },
        mounted () {

        },
        data() {
           return{
               bodyFadeStatus:true
           }
        },
        watch:{
            $route (to, from){
                /*
                this.bodyFadeStatus = false;
                setTimeout(()=>{
                    this.bodyFadeStatus = true;
                },50);*/
                window.scrollTo({top:0, left:0, behavior:'auto'});
            }
        }
    }
</script>
<style scoped>
    .fade {
        opacity: 0;
        -webkit-transition: opacity 0.15s linear;
        -moz-transition: opacity 0.15s linear;
        -o-transition: opacity 0.15s linear;
        transition: opacity 0.15s linear;
    }
    .fade.in {
        opacity: 1;
    }
</style>