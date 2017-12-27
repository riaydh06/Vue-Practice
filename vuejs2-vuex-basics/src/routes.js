import eventBus from './components/eventBus.vue';
import test from './components/test.vue';
import PleaseClickMe from './components/PleaseClickMe.vue';
export default [
    {
        path:'/',
        component:test
    },
    {
        path:'/bus',
        component:eventBus
    },
    {
        path:'/PleaseClickMe',
        component:PleaseClickMe
    },
]
