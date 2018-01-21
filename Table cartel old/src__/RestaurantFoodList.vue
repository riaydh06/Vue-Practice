<template>
    <!--Header Top-->
    <v-ons-page id='mypage'>
        <section>
            <div class="ingredients_area flow">
                <div class="width flow">
                    <div class="ingredients flow">
                        <div style="background-color: #fff; padding: 1px 0 6px; ">
                            <div class="card">
                                <div class="settings_settings">
                                    <div class="settings_left_icon food_list_left_icon">
                                        <a @click="pop">
                                            <ons-icon
                                                    icon="fa-angle-left"
                                                    size="20px"
                                                    fixed-width="false">
                                            </ons-icon>
                                        </a>
                                    </div>
                                    <div class="restaurent_header_heading food_list_header_text"><p>Restaurant Foods</p></div>
                                    <div class="restaurant_profile_haader food_list_recipe_icon">
                                        <ul class="recipe_header_icon">
                                            <li><img :src="giftlogo" alt="plus icon" /></li>
                                            <li><img :src="tirlogo" alt="plus icon" /></li>
                                            <li><img :src="pluslogo" alt="plus icon" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div v-if="loading" class="loading" v-cloak>
            <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
            <span>Loading...</span>
        </div>
        <div v-show="pageloading" class="food_list_items " >
            <!--<paginate name="foodlistitem" :per="10" ref="paginator" :list="foodlistitem" class="paginate-list">-->
            <div v-for="fd in foodlistitem">
                <div class="single_food_list">
                    <div style="height: 200px; padding: 1px 0 0 0;">
                        <div class="card food_list_cart">
                            <div class="card__content custom_card_content">
                                <div class="plus-icon">
                                    <a v-if="fd.img" :href="fd.img" data-lightbox="image-1" data-title="My caption"><ons-icon icon="md-plus"></ons-icon></a>
                                    <a v-else :href="foodlogo" data-lightbox="image-1" data-title="My caption"><ons-icon icon="md-plus"></ons-icon></a>
                                </div>
                                <a href="" v-if="fd.img"><img v-bind:src="fd.img" /></a>
                                <a href="" v-else><img :src="foodlogo" /></a>

                                <div class="food_list_content_bg">
                                    <div class="food_list_content">
                                        <h3  @click="foods(fd.ID)">{{fd.short_title}}</h3>
                                        <!--<h5><a href="">Publisher Name</a></h5>-->
                                        <!-- <div class="cuisine">
                                          <ul>
                                            <li v-for="csn in fd.cuisine_type">{{ csn.name }}</li>
                                          </ul>
                                         </div></br>  -->

                                        <p v-html="fd.short_content"></p>
                                        <div class="single_food_list_footer_top">

                                            <img :src="trophyicon" alt="Trophy" />
                                            <!--<a href="">-->
                                            <!--<ons-icon-->
                                            <!--icon="fa-user"-->
                                            <!--size="20px"-->
                                            <!--fixed-width="false">-->
                                            <!--</ons-icon>-->
                                            <!--</a>-->
                                            <div class="publisher-name">
                                                <strong>Added By</strong>
                                                <p>Board Name</p>
                                            </div>

                                        </div>
                                        <div class="single_food_list_footer">
                                            <p>Picked For</p>
                                            <strong>"ITEM"</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--</paginate>-->
            <div>
                <!--<paginate-links for="foodlistitem" :simple="{-->
                <!--next: 'Next »',-->
                <!--prev: '« Back'-->
                <!--}"></paginate-links>-->
            </div>

        </div>
        <div class="footer_logos_area updates_section_footer">
            <div class="footer_logos_width">
                <div class="footer_logo">
                    <ul>
                        <li class="home-logo_footer_img"><img :src="logo1" alt="logo" /></li>
                        <li class=""><img :src="logo2" alt="logo" /></li>
                        <li class=""><img :src="logo3" alt="logo" /></li>
                        <li  @click="search" class=""><img :src="logo4" alt="logo" /></li>
                        <li class=""><img :src="logo5" alt="logo" /></li>
                        <li class=""><img :src="logo6" alt="logo" /></li>
                        <li class=""><img :src="logo7" alt="logo" /></li>
                        <li class=""><img :src="logo9" alt="logo" /></li>
                    </ul>
                </div>
            </div>
        </div>
    </v-ons-page>
</template>

<script>
    import axios from 'axios'
    import Vue from 'vue'
    import Food from './Food';
    import Search from './Search';
    import VuePaginate from 'vue-paginate'
    import food2 from 'assets/1.png';
    import plus from 'assets/img/icon/plus.png';
    import trophy from 'assets/trophy.png';
    import tir from 'assets/tir.png';
    import gift from 'assets/gift.png';
    import foot1 from 'assets/img/icon/footerlogo/1.png';
    import foot2 from 'assets/img/icon/footerlogo/2.png';
    import foot3 from 'assets/img/icon/footerlogo/3.png';
    import foot4 from 'assets/img/icon/footerlogo/4.png';
    import foot5 from 'assets/img/icon/footerlogo/5.png';
    import foot6 from 'assets/img/icon/footerlogo/6.png';
    import foot7 from 'assets/img/icon/footerlogo/7.png';
    import foot9 from 'assets/img/icon/footerlogo/9.png';
    Vue.use(VuePaginate)
    export default {
        name: 'FoodListTexo',
        data () {
            return {
                foodlistitem: [],
                foodlogo: food2,
                pluslogo: plus,
                loading: false,
                pageloading: false,
                trophyicon: trophy,
                tirlogo: tir,
                giftlogo: gift,
                logo1: foot1,
                logo2: foot2,
                logo3: foot3,
                logo4: foot4,
                logo5: foot5,
                logo6: foot6,
                logo7: foot7,
                logo9: foot9,
            }
        },
        created () {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },

        methods: {
            fetchData () {
                this.loading = true
                axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-all-food/' + this.data.id + '/')
                    .then((resp) => {
                        this.foodlistitem = resp.data

                        console.log('--------------------------------')
                        console.log(resp.data)
                        this.loading = false
                        this.pageloading = true
//                        console.log('--------------------------------')
//                        console.log(this.paginate)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            foods (id) {
                this.pageStack.push({
                    extends: Food,
                    data() {
                        return {
                            data: {'id': id}
                        }
                    }
                });
            },
            search(){
                this.pageStack.push(Search);
            },
            pop(){
                this.pageStack.pop();
            },

        },
        props: ['pageStack'],
    }
</script>

<style scoped>
    .single_food_list{margin-bottom:17em}
    .restaurant_profile_haader{
        /*margin-right:-73px;*/}


    .restaurent_header_heading{width:87%}
    .food_list_items{
        margin-top: -46px;
        position: relative;
        z-index: -999;}
    .cuisine li{
        float: left;
        margin-right: 20px;
        list-style: none;
    }
    /*
    ul.paginate-links.food{
        float:left;
        color:white;
        list-style: none;
    }*/
    ul.paginate-links {
        list-style: none;
        color: white;
        clear:both;
    }
    .next{

        float:right;
    }
    .prev{
        width:50%;
        float:left;
    }
    .loading{
        text-align: center;
        margin-top: 200px;
        margin-bottom: 150px;
    }
    .food_list_content_bg{
        margin-top: -94px !important;
        background: #7a7a7a99 !important;

    }
    .single_food_list {
        margin-bottom: 9em !important;
    }

    .food_list_content h5 {
        margin-bottom: 10px !important;
        margin-top: -7px;
    }

    .restaurent_header_heading a {
        font-size: 12px;
        margin-top: 4px;
    }
    .single_food_list_footer_top {
        margin-bottom: 15px;
        margin-left: -7px;
        margin-top: 16px;
    }
    .single_food_list_footer p{

        margin-top: 4px !important;
    }
    .single_food_list_footer_top img{
        width: 16px;
        height: 16px !important;
        background: black !important;
        padding: 8px !important;
        border-radius: 50% !important;
        margin-left: 3px !important;
        float: left;
        margin-top: 2px;
        margin-right: 10px;

    }
    .food_list_left_icon{
        width: 27%;
        float: left;

    }
    .food_list_header_text{
        width: 51%;
        float: left;
    }
    .food_list_recipe_icon{
        /*width: 27%;*/
        float: right;
        margin-right: -25px;

    }
    .updates_section_footer{
        position:fixed;
        z-index: 9999;
    }
    .home-logo_footer_img img{
        width: 50px !important;
        margin-top: -7px !important;
        margin-left: -8px !important;
    }

</style>