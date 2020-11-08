<template>
    <div id="app-cotent-title">
        <div id="app-title">
            <div class="title">{{title}}</div>
            <div class="sub-title">{{subTitle}}</div>
            <div class="m-3">2020.10.22</div>
        </div>
        <div></div>
    </div>
</template>
<script>
    module.exports = {
        name: "BlogTitle.vue",
        data(){
            return{
                title:"Spring Framework 4.0",
                subTitle:"안녕하세요"
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