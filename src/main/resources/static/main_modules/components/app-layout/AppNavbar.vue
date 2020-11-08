<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid ">
            <router-link class="navbar-brand" to="/">
                <i class="far fa-grimace"></i>
                {{$store.state.appName}}
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
</template>

<script>
    module.exports = {
        name: "AppNavbar.vue",
        mounted(){
            let menu =  this.menus.find(menu=> this.$route.path.indexOf(menu.path) > -1);
            if (menu) menu.active = true;
            this.navbarCollapse = new bootstrap.Collapse(this.$refs.navbarCollapse, {
                toggle: false
            })
        },
        data(){
            return{
                menus:[{id:"link-01", name:"Blog", path:"/blog/1",active:false}
                        ,{id:"link-02",name:"Contact", path:"/contact",active:false}
                        ,{id:"link-03",name:"Dev Stack", path:"/dev-stack",active:false}
                        ,{id:"link-04",name:"Git", path:"/git",active:false}]
                ,navbarCollapse: null,
            }
        },
        watch:{
            $route (to, from){
                this.navbarCollapse.hide();
                this.menus.forEach(menu => menu.active = false);
                let menu = this.menus.find(menu => to.path.indexOf(menu.path) > -1);
                if (menu) menu.active = true;
            }
        },
        methods:{

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