<template>

    <div class="wrapper">
        <div class="main-tab">
            <a href="#/rss">Rss订阅</a><a href="#/note">Note</a>
        </div>
    </div>

    <router-view  class="view" keep-alive transition transition-mode="out-in"></router-view>

</template>

<style>

    body{
        font-family: Helvetica Neue,Microsoft Yahei,sans-serif;
        background-color: #282c34;
        margin: 0;
        padding: 0;
    }
    ul{
        margin: 0;
        padding: 0;
    }
    .main-tab{
        list-style: none;
        color: #d7dae0;
        font-size: 13px;
        margin-top: 10px;
        border-bottom: 1px solid rgba(125,125,125,0.7);
    }

    .main-tab a{
        display: inline-block;
        padding: 5px;
        background-color: #2b2f37;
        height: 30px;
        line-height: 30px;
        padding: 0 30px;
        border : 1px solid rgba(125,125,125,0.3);
        border-bottom: 0;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        cursor: pointer;
        text-decoration: none;
        color: #d7dae0;
    }


    .main-tab a:hover{
        color: #4e84f2;
        border-color: #4e84f2;
    }

    .main-tab a:active{
        color: #4e84f2;
    }


</style>

