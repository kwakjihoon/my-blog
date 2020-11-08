<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid ">
            <router-link class="navbar-brand" to="/">
                <i class="far fa-laugh-wink text-warning"></i>
                {{$store.state.appName}} <span style="font-size: 20px"> {{subPath==""?"":" - "+subPath}}</span>
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div ref="navbarCollapse" class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav  ml-md-auto">
                    <li class="nav-item" v-bind:key="menu.id" v-for="menu in menus">
                        <router-link
                                class="nav-link" aria-current="page"  :class="menu.active?'active':''"
                                :to="menu.path">{{menu.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
    module.exports = {
        name: "AppNavbar.vue",
        mounted(){
            let menu =  this.menus.find(menu=> this.$route.path.indexOf(menu.path) > -1);
            this.changeNetMenu(menu);
            this.navbarCollapse = new bootstrap.Collapse(this.$refs.navbarCollapse, {
                toggle: false
            })
        },
        data(){
            return{
                menus:[{id:"link-01", name:"Blog", path:"/blog",active:false}
                        ,{id:"link-02",name:"Git", path:"/contact",active:false}
                        ,{id:"link-04",name:"Contact", path:"/git",active:false}]
                ,subPath:""
                ,navbarCollapse: null
            }
        },
        watch:{
            $route (to, from){
                this.navbarCollapse.hide();
                this.menus.forEach(menu => menu.active = false);
                let menu = this.menus.find(menu => to.path.indexOf(menu.path) > -1);
                this.changeNetMenu(menu);
            }
        },
        methods:{
            changeNetMenu(menu){
                if (menu) {
                    document.title = this.$store.state.appName +"-"+menu.name;
                    this.subPath = menu.name;
                    menu.active = true;
                }else{
                    document.title = this.$store.state.appName;
                    this.subPath ="";
                }
            }
        }

    }
</script>

<style scoped>
    .nav-link.active{
        background-color: #6c757d;
    }
    .navbar-brand{
        font-size: 25px;
        font-weight: bold;
    }
    .nav-item{
        text-align: center;
        font-size: 20px;
    }
    nav{
    }
</style>