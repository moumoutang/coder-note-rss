import Vue from 'vue'
import Router from 'vue-router'
import App from './component/app.vue'
import rssCom from './component/rss.vue'
//import noteCom from './component/note.vue'

Vue.use(Router);

var router = new Router();

router.map({
    '/rss': {
        component: rssCom
    }
//    '/note': {
//        component: noteCom
//    }
})


router.beforeEach(function () {
    window.scrollTo(0, 0)
})

//router.redirect({
//    '*': '/'
//})



router.start(App, '#app')