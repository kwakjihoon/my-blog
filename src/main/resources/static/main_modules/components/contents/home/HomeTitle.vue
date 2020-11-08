<template>
    <div id="home-title">
        <div id="title" class="container">
            <div class="main-title">{{title}}</div>
            <div class="sub-title text-dark">{{subTitle}}</div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        name: "HomeTitle.vue",
        data(){
            return{
                title:"기억을 더듬다",
                subTitle:"By. Kwak Jihoon"
            }
        }
    }
</script>

<style scoped>
    #home-title{
        height: 300px;
        width: 100%;
        background-color: #6c757d;
    }
    #title{
        padding-top: 90px;
        text-align: center;
    }
    .main-title{
        color: #dfe0e1;
        font-weight: bold;
        font-size: 40px;
    }
    .sub-title{
        font-size: 20px; 
        font-weight: bold;
    }
</style>