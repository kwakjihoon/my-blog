<template>
    <div id="app-home-title">
        <div id="app-title">
            <div class="title">{{title}}</div>
            <div class="sub-title">{{subTitle}}</div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        name: "HomeTitle.vue",
        data(){
            return{
                title:"GY Technology",
                subTitle:"-"
            }
        }
    }
</script>

<style scoped>
    #app-home-title{
        height: 300px;
        width: 100%;
        background-color: #6c757d;
    }
    #app-title{
        padding-top: 90px;
        text-align: center;
    }
    #app-title .title{
        color: #dfe0e1;
        font-weight: bold;
        font-size: 40px;
    }
    #app-title .sub-title{
        font-size: 20px; 
        font-weight: bold;
    }
</style>