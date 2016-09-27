<template>
    <div class="rss">
        <rss-title-list :rssList="rssList" ></rss-title-list>
    </div>
</template>
<style>
    .rss{
        background-color:#ff0000;
    }
</style>
<script>
    import listComponent from './rssComponent/rss-title-list.vue'
    export default{
        data(){
            return {
                rssList: [
                    "test1","test2"
                ]
            }
        },
        components:{
            'rss-title-list': listComponent
        }
    }
</script>
