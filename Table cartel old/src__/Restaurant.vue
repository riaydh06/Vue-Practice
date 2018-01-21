<template>
    <v-ons-page id='mypage'>
        <!--<custom-toolbar :back-label="'Page 2'">Page 3</custom-toolbar>-->
        <section>
        <div class="ingredients_area flow">
            <div class="width flow">
                <div class="ingredients flow">
                    <div style="background-color: #fff; padding: 1px 0 7px 0;  position: fixed;
    width: 100%;">
                        <div class="card">
                            <div class="settings_settings">
                                <div class="settings_left_icon">
                                    <a @click="pop">
                                        <ons-icon
                                                icon="fa-angle-left"
                                                size="20px"
                                                fixed-width="false">
                                        </ons-icon>
                                    </a>
                                </div>

                                <div class="restaurent_header_heading"><p>Restaurant Profile</p></div>
                                <div class="restaurant_profile_haader">
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
        <!--Recipe header area end-->
    <div v-if="loading" class="loadingg" v-cloak>
        <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        <span>Loading...</span>
    </div>
        <!--Restaurant Name-->
    <div v-show="pageloading">
        <div class="restaurent_profile_name">
            <ons-row>
                <ons-col width="70%">
                    <div class="restarent_name_left_content">
                        <h2 v-html="rest.post_title"></h2>
                         <div class="review_restaruent">
                          <!--<p>{{rest.price_range}}<br /><span>Reviews</span></p>-->
                          <p>57<br /><span>Reviews</span></p>
                          <div class="load_on_the_wallet">
                            <ul>
                              <li><img :src="group95logo" alt="" /></li>
                              <li><img :src="group95logo" alt="" /></li>
                              <li><img :src="group95logo" alt="" /></li>
                              <li><img :src="group95logo" alt="" /></li>
                              <li><img :src="group97logo" alt="" /></li>
                            </ul>
                            <br />
                            <p>Load one the wallet</p>
                          </div>
                        </div>
                        <div class="cuisine_type">
                            <h4>Cuisine Type</h4>
                            <p  class="cuisine" v-for="item in rest.cuisine_type" >
                                {{ item.name }}
                            </p>
                        </div>
                        <div class="road_map">
                            <ons-icon icon="fa-map-marker"></ons-icon>
                            <p>{{rest.restaurant_address}}</p>
                        </div>
                    </div>
                </ons-col>
                <ons-col>
                    <div class="restaurent_profile_right_content">
                        <div class="profile_restaurent">
                            <img v-if="rest.restaurant_logo" v-bind:src="rest.restaurant_logo" />
                            <img v-else :src="profilelogo" alt="" />

                        </div>
                        <div class="restaurent_food_rating">
                            <ul>
                                <li><img :src="pathlogo" alt="" /></li>
                                <li><img :src="pathlogo" alt="" /></li>
                                <li><img :src="grouplogo" alt="" /></li>
                            </ul>
                            <br />
                            <p>Rating</p>
                        </div>
                        <div class="restaurent_food_book">
                            <img @click="tablebooking(rest.ID)" :src="pathlogo14" alt="" />
                            <br />
                            <p @click="tablebooking(rest.ID)">Book Now</p>
                        </div>
                    </div>
                </ons-col>
            </ons-row>
        </div>
        <!--Restaurant Name-->

        <!--Restaruent Menu-->
        <div class="restaruent_menu_area">
            <ons-row>
                <div class="restaruent_menu_header">
                    <img :src="pathlogo11" alt="" />
                    <h3 class="card__title search_title1" @click="restaurant_food_list(rest.ID)">Food Menu</h3>
                    <br />
                    <h2>Ratings and Reviews</h2>
                </div>
            </ons-row>

            <ons-row class="progressbar_row">
                <ons-col width="50%">
                    <div class="menu_overal_sidebar_left">
                        <h4>Overall</h4>
                        <h1>{{ rest.restaurant_rating}}</h1>
                        <ul>
                            <li><img :src="path2logo" alt="" /></li>
                            <li><img :src="path2logo" alt="" /></li>
                            <li><img :src="path2logo" alt="" /></li>
                        </ul>
                    </div>
                </ons-col>
                <ons-col>
                    <div class="progress_menu_overal_sidebar">
                        <ul>
                            <li><div class="progress_number">3</div>
                                <div class="progess_bar"><ons-progress-bar value="90"></ons-progress-bar></div>
                            </li>
                            <li>
                                <div class="progress_number">2</div>
                                <div class="progess_bar"><ons-progress-bar value="40"></ons-progress-bar></div>
                            </li>
                            <li>
                                <div class="progress_number">1</div>
                                <div class="progess_bar"><ons-progress-bar value="10"></ons-progress-bar></div>
                            </li>
                        </ul>
                    </div>
                </ons-col>
            </ons-row>
            <ons-row>
                <ons-col width="50%">
                    <div class="menu_overal_sidebar_bottom_all_reviews">
                        <img :src="pathlogo" alt="" />
                        <a href="">See All Reviews</a>
                    </div>
                </ons-col>

            </ons-row>
        </div>
        <!--Restaruent Menu-->

        <!--Photoes And Media Restaurant Profile-->
        <div class="photoes_and_media_section_area">
            <div class="photoes_and_media_width">
                <div class="photoes_and_media_heading">
                    <h4>Photoes and Media</h4>
                </div>
                <ons-row>
                    <ons-col width="50%">
                        <div class="photoes_left_side">
                            <div class="single_photoes_left_side">
                                <a href=""><img :src="rectanglelogo9" alt="" /></a>
                            </div>
                            <div class="single_photoes_left_side">
                                <a href=""><img :src="rectanglelogo10" alt="" /></a>
                            </div>
                        </div>
                    </ons-col>
                    <ons-col>
                        <div class="photoes_right_side">
                            <div class="single_photoes_right_side">
                                <a href=""><img :src="rectanglelogo11" alt="" /></a>
                            </div>
                            <div class="single_photoes_right_side">
                                <a href=""><img :src="rectanglelogo12" alt="" /></a>
                            </div>
                        </div>
                    </ons-col>
                </ons-row>
            </div>
        </div>
        <!--Photoes And Media Restaurant Profile-->

        <!--Photoes And Media Restaurant Profile-->
        <div class="restaurent_details_view_area">
            <div class="restaurent_details_width">
                <div class="restaurent_details_heading">
                    <h4>Details</h4>
                </div>
                <ons-row>
                    <ons-col width="50%">
                        <div class="details_view_left_side">
                            <div class="single_details_view_left_side">
                                <div class="icons_left">
                                    <img :src="restlogo1" alt="icon" />
                                </div>
                                <div class="icons_right_content">
                                    <h4>Phone</h4>
                                    <p>{{rest.contact_number}}</p>
                                </div>
                            </div>
                            <div class="single_details_view_left_side">
                                <div class="icons_left">
                                    <img :src="restlogo2" alt="icon" />
                                </div>
                                <div class="icons_right_content">
                                    <h4>Price</h4>
                                    <p>{{rest.price_range}}</p>
                                </div>
                            </div>
                            <div class="single_details_view_left_side">
                                <div class="icons_left">
                                    <img :src="restlogo3" alt="icon" />
                                </div>
                                <div class="icons_right_content">
                                    <h4>Cuisine</h4>
                                    <p  class="cuisine" v-for="item in rest.cuisine_type" >
                                        {{ item.name }}
                                    </p>
                                </div>
                            </div>
                            <div class="single_details_view_left_side">
                                <div class="icons_left">
                                    <img :src="restlogo4" alt="icon" />
                                </div>
                                <div class="icons_right_content">
                                    <h4>Hours</h4>
                                    <p>{{rest.restaurant_hours}}</p>
                                </div>
                            </div>
                            <div class="single_details_view_left_side">
                                <div class="icons_left">
                                    <img :src="restlogo5" alt="icon" />
                                </div>
                                <div class="icons_right_content">
                                    <h4>Parking</h4>
                                    <p>{{rest.parking}}</p>
                                </div>
                            </div>
                            <div class="single_details_view_left_side">
                                <div class="icons_left">
                                    <img :src="restlogo6" alt="icon" />
                                </div>
                                <div class="icons_right_content">
                                    <h4>Dress Code</h4>
                                    <p>{{rest.dress_code}}</p>
                                </div>
                            </div>

                        </div>
                    </ons-col>
                    <ons-col>
                        <div class="details_view_right_side">
                            <div class="details_view_right_sidebar">
                                <div class="single_details_view_right_side">
                                    <div class="icon_right_heading">
                                        <img :src="restlogo7" alt="icon" />
                                    </div>
                                    <div class="details_view_right_content">
                                        <h4>Description</h4>
                                        <p v-html="rest.post_content"></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </ons-col>
                </ons-row>
            </div>
        </div>
    </div>
    </v-ons-page>

</template>

<script>
    import axios from 'axios';
    import RestaurantFoodList from './RestaurantFoodList';
    import TableBooking from './TableBooking';
    import profile from 'assets/profile.png';
    import path from 'assets/img/ratingicon/path.png';
    import path2 from 'assets/img/ratingicon/path-2.png';
    import group from 'assets/img/ratingicon/group-118.png';
    import group95 from 'assets/img/ratingicon/group-95.png';
    import group97 from 'assets/img/ratingicon/group-97.png';
    import path14 from 'assets/img/ratingicon/path-14.png';
    import path11 from 'assets/img/ratingicon/path-11.png';
    import rectangle9 from 'assets/img/restaurentprofile/rectangle-9.png';
    import rectangle10 from 'assets/img/restaurentprofile/rectangle-10.png';
    import rectangle11 from 'assets/img/restaurentprofile/rectangle-11.png';
    import rectangle12 from 'assets/img/restaurentprofile/rectangle-12.png';
    import plus from 'assets/img/icon/plus.png';
    import tir from 'assets/tir.png';
    import gift from 'assets/gift.png';
    import rest1 from 'assets/img/icon/restaurant/1.png';
    import rest2 from 'assets/img/icon/restaurant/2.png';
    import rest3 from 'assets/img/icon/restaurant/3.png';
    import rest4 from 'assets/img/icon/restaurant/4.png';
    import rest5 from 'assets/img/icon/restaurant/5.png';
    import rest6 from 'assets/img/icon/restaurant/6.png';
    import rest7 from 'assets/img/icon/restaurant/7.png';
    export default {
        name: 'Restaurant',
        data () {
            return {
                rest: {},
                profilelogo: profile,
                pathlogo: path,
                path2logo: path2,
                grouplogo: group,
                group95logo: group95,
                group97logo: group97,
                pathlogo14: path14,
                pathlogo11: path11,
                rectanglelogo9: rectangle9,
                rectanglelogo10: rectangle10,
                rectanglelogo11: rectangle11,
                rectanglelogo12: rectangle12,
                pluslogo: plus,
                restlogo1: rest1,
                restlogo2: rest2,
                restlogo3: rest3,
                restlogo4: rest4,
                restlogo5: rest5,
                restlogo6: rest6,
                restlogo7: rest7,
                loading: false,
                pageloading: false,
                tirlogo: tir,
                giftlogo: gift,
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
                axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-single-rest/' + this.data.id + '/')
                    .then((resp) => {
                        this.rest = resp.data
//                        console.log('--------------------------------')
//                        console.log(resp.data)
                        this.loading = false
                        this.pageloading = true
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            restaurant_food_list (id) {
                this.pageStack.push({
                    extends: RestaurantFoodList,
                    data() {
                        return {
                            data: {'id': id}
                        }
                    }
                });
            },
            tablebooking (id){
                //this.pageStack.push(TableBooking);
                this.pageStack.push({
                    extends: TableBooking,
                    data() {
                        return {
                            data: {'id': id}
                        }
                    }
                });
            },
            pop() {
                this.pageStack.pop();
            }
        },
        props: ['pageStack']
    }
</script>
<style scoped>
    .cuisine {
        float: left;
        margin-right: 20px;
        list-style: none;
    }
    .search_title1 a {
        color: black;
        text-decoration: none;
    }
    .restaurent_header_heading a{
        font-size:12px;
        margin-top: 4px;
    }
    .restaurent_profile_name{
        margin-top: 50px;
    }
    .loadingg{
        text-align: center;
        margin-top: 250px;
        margin-bottom: 150px;
    }
    .icons_left img {
        width: 43%;
        margin-top: 12px;
    }
    .progress_number{
        width: 17%;
        float: left;
        text-align: center;
    }
    .progess_bar{
        width: 80%;
        float: right;
        margin-top: 10px;

    }
    .progress_menu_overal_sidebar ul li{
        height:28px !important;

    }
    .menu_overal_sidebar_left h1{
        margin-top: -16px;
        margin-bottom: -12px;

    }
    .menu_overal_sidebar_bottom_all_reviews a {
        font-weight: bold;
    }
    .restaurent_food_book p{
       color:#fff;
        font-size: 12px

    }
    .restaurent_food_rating {

        margin-bottom: 30px;
    }
    .road_map {
        margin-top: 10px;
    }
    .restaurent_header_heading {
        width: 58%;
        float: left;
    }
    .restaurant_profile_haader {
        margin-right:-25px !important;
    }
    .restaurant_profile_haader[data-v-ba8b48a0]{
        /*width: 27%;*/
        float: right;

    }
    .settings_left_icon{
        width:20%;
    }
    .road_map[data-v-ba8b48a0]{


    }


</style>