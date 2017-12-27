<template>
    <!--<div>{{$store.state.user}}</div>-->
</template>
<script>
    import axios from 'axios'

    export default {

        mounted() {
            axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-single-rest/157/')
                .then(response => {
                    console.log('inside axios')
                    this.$store.commit('setUser', response.data)
                    console.log(this.$store.state.user.location) // set the user in the store
                })

        }
    }
</script>