<template>
    <v-ons-page id="">
        <v-header @gomenupage="menupage"></v-header>
        <div class="background">
            <ons-row align="center">
                <ons-col width="80%">
                    <div class="left_side_search_heading">
                        <h2>Search by area</h2>
                        <p>Here is the list of restaurants on offer!</p>
                    </div>
                </ons-col>
                <ons-col width="20%">
                    <div class="cross_icon">
                       <!--  <i  class="fa fa-times-circle-o" aria-hidden="true"></i> -->
                        <img @click="pop" :src="this.assets.icons.close" alt="close" >
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="center">
                <ons-col width="100%">

                    <div class="left_side_button" v-for="resttexo in restauranttexo">
                        <button class="button button--light button_customize" @click="rest_list(resttexo.term_id,resttexo.name)">{{ resttexo.name }}</button>
                    </div>
                </ons-col>
            </ons-row>
            <div v-if="loading" class="loading" v-cloak>
                <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                <!--<span>Loading...</span>-->
            </div>
            <!--Footer Carousel-->
            <v-carosel :title="title"></v-carosel>
            <!--Footer Carousel-->


        </div>








    </v-ons-page>
</template>

<script>
    import carosel from "./carosel"
    import header from "./header"
    import {assets} from './config'
    import axios from 'axios'
    import arearest from './area_rest'
    import menu from './menu'
    export default {
        name: 'area',
        data (){
            return {
                title: "Today's Special",
                restauranttexo: {},
                loading:false,
            }
        },
        mixins:[assets],
        created () {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData () {
                this.loading= true
                axios.get( this.base_url +'/wp/v2/all-terms?term=location')
                    .then((resp) => {
                        this.restauranttexo = resp.data
//                        console.log('--------------------------------')
//                        console.log(resp.data)
                        this.loading = false
                    })
                    .catch((err) => {
//                        console.log(err)
                    })
            },
            rest_list(id,name) {
                this.pageStack.push({
                    extends: arearest,
                    data() {
                        return {
                            data: {'id': id,'name':name}
                        }
                    }
                });
            },
            pop(){
                this.pageStack.pop();
            },
            push() {
                this.pageStack.push(cuisine_rest)
            },
             menupage (){
                this.pageStack.push(menu)
            },
        },
        components:{
            'v-carosel':carosel,
            'v-header':header,
        },
        props: ['pageStack']
    }
</script>
<style scoped>
    .button{
        float:left;
    }
    .loading{
        text-align: center;
        margin-top: 100px;
        margin-bottom: 100px;
        color: #009688;
        font-size: 13px;
    }

</style>