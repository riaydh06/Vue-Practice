<template>
    <v-ons-page id="">
        <v-header @gomenupage="menupage"></v-header>
        <div v-if="loading" class="loading">
            <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        </div>
        <div v-show="loadingpage">
            <div  class="background">
                <ons-row align="center">
                    <ons-col width="80%">
                        <div class="food_menu_header_left">
                            <h2>{{this.data.name}}</h2>
                            <p>Food menu</p>
                        </div>
                    </ons-col>
                    <ons-col width="20%">
                        <div class="cross_icon">
                            <!--  <i  class="fa fa-times-circle-o" aria-hidden="true"></i> -->
                            <img @click="pop" :src="this.assets.icons.close" alt="close" >
                        </div>
                    </ons-col>
                </ons-row>
                <div class="gray_bg_border"></div>
                <div v-for="texo in restaurantfood" class="food_menu_top">
                    <div v-show="texo.all_foods">
                        <ons-row align="left" width="100%" class="food_menu_bg">
                            <ons-col width="100%">
                                <div class="">
                                    <div style="padding: 1px 0 0 0;">
                                        <div class="card menu_card_bg">
                                            <h2 class="card__title food_menu_title" align="center">{{texo.name}}</h2>
                                            <div v-for="fd in texo.all_foods" class="single_food_menu_items_desc">
                                                <ons-row>
                                                    <ons-col width="80%" align="left">
                                                        <div class="card__content">
                                                            <h4 class="card__title single_food_menu_title">
                                                                {{fd.short_title}}
                                                            </h4>
                                                            <p class="single_food_menu_para">{{fd.short_content}}</p>
                                                        </div>
                                                    </ons-col>
                                                    <ons-col width="20%" align="left">
                                                        <h4 class="food_menu_dollar">${{fd.price}}</h4>
                                                    </ons-col>
                                                </ons-row>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ons-col>
                        </ons-row>
                    </div>
                </div>
            </div>
        </div>

    </v-ons-page>
</template>

<script>
    import header from "./header"
    import {assets} from './config'
    import axios from 'axios'
    import menu from './menu'
    export default {
        name: 'area',
        data (){
            return {
                restaurantfood: {},
                loading:false,
                loadingpage:false,
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
                this.loading = true
                axios.get( this.base_url + '/Table-cartel/v1/get-all-food/' + this.data.id +  '/')
                    .then((resp) => {
                        this.restaurantfood = resp.data
                        console.log('--------------------------------')
                        console.log(resp.data)
                        this.loading = false;
                        this.loadingpage = true;
                    })
                    .catch((err) => {
//                        console.log(err)
                    })
            },
            pop(){
                this.pageStack.pop();
            },
            menupage (){
                this.pageStack.push(menu)
            },
        },
        components:{
            'v-header':header,
        },
        props: ['pageStack']
    }
</script>
<style scoped>
    .loading{
        text-align: center;
        margin-top: 300px;
        margin-bottom: 100px;
        color: #009688;
        font-size: 13px;
    }

</style>