<template>
    <div id="app-cotent-title">
        <div id="app-title">
            <div class="title">{{content.title}}</div>
            <div class="sub-title">{{content.subTitle}}</div>
            <div class="m-3">{{content.lastUpdated}}</div>
        </div>
        <div></div>
    </div>
</template>
<script>
    module.exports = {
        name: "BlogTitle.vue",
        props:["netContent"]
        ,updated(){

        }
        ,watch:{
            netContent(){
                console.log(this.netContent);
            }
        }
        ,data(){
            return{
                content:{title:"Javascript",subTitle:"vue 3.x",lastUpdated:"2020.10.22"}
            }
        }
    }
</script>

<style scoped>
    #app-cotent-title{
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
        color: #b9bbbe;
        font-size: 20px; 
        font-weight: bold;
    }
</style>