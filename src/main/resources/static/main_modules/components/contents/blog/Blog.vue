<template>
    <div>
        <blog-title :net-content="netContent"></blog-title>
        <div class="container" style="margin-bottom: 100px; margin-top: 30px">
           <div v-html="text" class="markdown-body"></div>
        </div>
    </div>
</template>

<script>
    const BlogTitle= 'url:/main_modules/components/contents/blog/BlogTitle.vue';
    module.exports = {
        name: "Blog.vue",
        components: {
            'blog-title':BlogTitle,
        },
        async mounted(){
            //https://stackoverflow.com/questions/60433025/import-js-file-inside-vue-component-loaded-using-httpvueloader
            (await import("/others/markdown/markdown.js"));

            if (this.$route.params.blogId){
                this.blogId = this.$route.params.blogId;
            }
            this.getBlog();
        },
        watch:{
            "$route.params.blogId":{
                handler(blogId) {

                },
                deep: true,
                immediate: false
            }
        },
        methods:{
            getBlog(){
                const self = this;
                const url  = "/blog" + ( this.blogId != ""? `/${this.blogId}`:"");
                this.axios.get(url).then((res)=>{
                    self.netContent = res.data;
                    self.text = markdown.toHTML(res.data.content);
                });
            }
        },
        data(){
            return{
                blogId:""
                ,netContent:{
                    title:"",subTitle:"",titleImage:"",lastUpdatedDate:"",content:""
                }
                ,text:""
            }
        }
    }
</script>

<style scoped>

</style>