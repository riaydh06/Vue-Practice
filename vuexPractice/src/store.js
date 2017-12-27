import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        // user: null,
        registrations: [],
        users: [
            {id: 1, name: 'Max', registered: false},
            {id: 2, name: 'Anna', registered: false},
            {id: 3, name: 'Chris', registered: false},
            {id: 4, name: 'Sven', registered: false}
        ],
    },

    mutations: {
        // setUser(state, user) {
        //     state.user = user
        // }
        register(state,userId){
            const date = new Date;
            const user = state.users.find(user => {
                return user.id == userId});
            user.registered = true;
            const registration = {
                userId: userId,
                name: user.name,
                date: date.getMonth() + '/' + date.getDay()
            };
            state.registrations.push(registration);
        },
        unregister(state,payload){
            const user = state.users.find(user => {
                return user.id == payload.userId
            });
            // const user = this.$store.state.users.find(user => {
            //     return user.id == registration.userId;
            // });
            user.registered = false;
            const registration = state.registrations.find( registration=>{
                return registration.userId == payload.userId;
            });
            state.registrations.splice(state.registrations.indexOf(registration),1);
            // this.$store.state.registrations.splice(this.$store.state.registrations.indexOf(registration), 1);
        }
    },
    getters:{
        unregisterdUsers(state){
            return state.users.filter(user =>{
                return !user.registered ;
            });
        },
        registrations(state){
            return state.registrations;
        },
        totalregistrations(state){
            return state.registrations.length;
        }
    },
    actions:{
        register({commit},userId){
            setTimeout(()=>{
                commit('register',userId);
            },1000)
        },
        unregister(context,payload){
            setTimeout(()=>{
                context.commit('unregister',payload)
            },1000)

        }
    }
});