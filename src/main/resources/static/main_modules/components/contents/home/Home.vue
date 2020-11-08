<template>
    <div>
        <home-title></home-title>
        <div id="home-content" class="container" >

            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col" v-bind:key="card.id"  v-for="card in cards" >

                    <div class="card h-100"
                         @mouseenter="toggleCardActiveStatus(card)"
                         @mouseleave="toggleCardActiveStatus(card)">
                        <router-link :to="card.path">
                            <img :src="card.topImage"  class="card-img-top w-100" :class="card.active?'active':''">
                        </router-link>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>

            </div>

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
                cards:[{id:"card-01", path:"/blog/1", topImage:"/others/images/js.png",active:false}
                        ,{id:"card-02", path:"/blog/2", topImage: "/others/images/java.jpg",active:false}
                        ,{id:"card-03", path:"/blog/3", topImage: "/others/images/coding.jpeg",active:false}]
            }
        },
        methods:{
            toggleCardActiveStatus(card){
                card.active = !card.active ;
            }
        }
    }
</script>

<style scoped>
    #home-content{
        margin-bottom: 100px;
        margin-top: 30px;
    }
    .card-img-top{
        height: 200px;
        width: auto;
        opacity: 0.8;
    }
    .card-img-top.active{
        opacity: 1;
        cursor: pointer;
    }
</style>