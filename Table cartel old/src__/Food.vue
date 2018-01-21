<template>
    <v-ons-page id='mypage'>
        <section>
            <div class="ingredients_area flow">
                <div class="width flow">
                    <div class="ingredients flow">
                        <div style="background-color: #fff; padding: 1px 0 0 0; position: fixed;
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
                                    <div class="restaurent_header_heading"><p>Food Deails</p></div>
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
        <div v-if="loading" class="loading" v-cloak>
            <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
            <span>Loading...</span>
        </div>
        <div v-show="pageloading">
            <div class="bg_two">
                <div class="publish flow">
                    <div class="width flow">
                        <div style="padding: 1px 0 0 0;">
                            <div class="card_new">
                                <!--<p>Publisher Name</p>-->
                                <h2 class="card__title_one"  > Food Name : {{food.post_title}} </h2>
                                <p class="card__title_one" >Food Price : {{food.food_price}} </p>
                                <!--<p class="card__title_one">Cuisine type</p>-->
                                Cuisine type:<p  class="cuisine" v-for="item in food.cuisine_type" >{{ item.name }}</p><br>
                            </div>
                            <div class="pizza flow">
                                <img v-if="food.img" v-bind:src="food.img" width="460" height="345">
                                <img v-else :src="foodlogo" width="460" height="345">
                            </div>
                            <!-- <div class="artile flow">
                              <div style="padding: 1px 0 0 0;">
                                <div class="card_neww">
                                  <p>Article From</p>
                                  <h2 class="card__title_one">Publisher Name</h2>
                                </div>
                                <div class="article_button flow">
                                  <a href="" class="article_button_link">Read</a>
                                </div>
                              </div>
                            </div> -->
                            <!-- <div class="follow flow">
                              <p>Get more drops from this guys!</p>
                              <div class="folloW_button flow">
                                <a href="#"> Follow</a>
                              </div>
                              <div class="tangle_icon flow"></div>
                            </div> -->
                            <hr style="background: #272727;
                  height: 1px;
                  border: none;"/>
                            <div class="main_card">
                              <div class="card">
                                 <div class="card__content_text"><p v-html="food.post_content"></p></div>
                              </div>
                               <p class="one_day">{{food.time_ago}} ago</p>
                            </div>

                            <!-- <div class="main_drop_by flow">
                               <div class="drop_by flow">
                                <a href="#"><img src="static/assets/img/svgicon/group-39.svg" alt=""/></a>
                              </div>
                              <div class="drop_by_publish flow">
                                <h2>Dropped by</h2>
                                <h3>publisher Name</h3>
                              </div>
                            </div> -->

                            <!-- <div class="main_drop_by flow">
                              <div class="drop_by flow">
                                <a href="#"><img src="static/assets/img/svgicon/group-39.svg" alt=""/></a>
                              </div>
                              <div class="drop_by_publish_two flow">
                                <h4>Dropped to <span>"Board Name"</span></h4>

                              </div>
                            </div> -->
                            <!--<hr class="board_details_line"/>-->
                            <!-- <div class="main_drop_by flow">
                              <h5><a href="">Add Comments</a></h5>
                              <div class="board_details_comments_icon">
                                <a href=""> <img src="static/assets/img/svgicon/group-40.svg" alt="" /> 150</a>
                                <a href=""> <img src="static/assets/img/svgicon/path-4.svg" alt="" /> 1200</a>
                              </div>
                            </div> -->

                            <!--<hr class="board_details_line_two"/>-->
                            <!--board details Food List-->
                            <!--<section>
                                <div class="food_list_items_two board_details_two">
                                    <div class="single_food_list">
                                        <div style="height: 200px; padding: 1px 0 0 0;">
                                            <div class="card food_list_cart board_details_view_card">
                                                <div class="card__content custom_card_content">
                                                    <div class="plus-icon"><a href="img/boardimg/c.png" data-lightbox="image-1" data-title="My caption"><ons-icon icon="md-plus"></ons-icon></a></div>
                                                    <a href=""><img src="static/assets/img/boardimg/c.png" alt="food_img" /></a>
                                                    <div class="food_list_content_bg">
                                                        <div class="food_list_content">
                                                            <h3><a href="">Article Name</a></h3>
                                                            <h5><a href="">Publisher Name</a></h5>

                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        </div>
                                                        <div class="single_food_list_footer_top">
                                                            <a href="">
                                                                <ons-icon
                                                                        icon="fa-user"
                                                                        size="20px"
                                                                        fixed-width="false">
                                                                </ons-icon></a>
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
                                    <div class="single_food_list">
                                        <div style="height: 200px; padding: 1px 0 0 0;">
                                            <div class="card food_list_cart board_details_view_card">
                                                <div class="card__content custom_card_content">
                                                    <div class="plus-icon"><a href="static/assets/img/boardimg/rectangle-9.png" data-lightbox="image-1" data-title="My caption"><ons-icon icon="md-plus"></ons-icon></a></div>
                                                    <a href=""><img src="static/assets/img/boardimg/rectangle-9.png" alt="food_img" /></a>
                                                    <div class="food_list_content_bg">
                                                        <div class="food_list_content">
                                                            <h3><a href="">Article Name</a></h3>
                                                            <h5><a href="">Publisher Name</a></h5>

                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        </div>
                                                        <div class="single_food_list_footer_top">
                                                            <a href="">
                                                                <ons-icon
                                                                        icon="fa-user"
                                                                        size="20px"
                                                                        fixed-width="false">
                                                                </ons-icon></a>
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
                            </section>-->
                            <!--board details Food List-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <br>
        <div class="footer_logos_area updates_section_footer">
            <div class="footer_logos_width">
                <div class="footer_logo">
                    <ul>
                        <li class="home-logo_footer_img"><img :src="logo1" alt="logo" /></li>
                        <li class=""><img :src="logo2" alt="logo" /></li>
                        <li class=""><img :src="logo3" alt="logo" /></li>
                        <li class=""><img :src="logo4" alt="logo" /></li>
                        <li class=""><img :src="logo5" alt="logo" /></li>
                        <li class=""><img :src="logo6" alt="logo" /></li>
                        <li class=""><img :src="logo7" alt="logo" /></li>
                        <li class=""><img :src="logo9" alt="logo" /></li>
                    </ul>
                </div>
            </div>
        </div>
        </v-ons-page >
</template>

<script>
    import axios from 'axios'
    import food2 from 'assets/1.png';
    import foot1 from 'assets/img/icon/footerlogo/1.png';
    import foot2 from 'assets/img/icon/footerlogo/2.png';
    import foot3 from 'assets/img/icon/footerlogo/3.png';
    import foot4 from 'assets/img/icon/footerlogo/4.png';
    import foot5 from 'assets/img/icon/footerlogo/5.png';
    import foot6 from 'assets/img/icon/footerlogo/6.png';
    import foot7 from 'assets/img/icon/footerlogo/7.png';
    import foot9 from 'assets/img/icon/footerlogo/9.png';
    import tir from 'assets/tir.png';
    import gift from 'assets/gift.png';
    import plus from 'assets/img/icon/plus.png';
    export default {
        name: 'Food',
        data () {
            return {
                food: {},
                foodlogo: food2,
                logo1: foot1,
                logo2: foot2,
                logo3: foot3,
                logo4: foot4,
                logo5: foot5,
                logo6: foot6,
                logo7: foot7,
                logo9: foot9,
                tirlogo: tir,
                giftlogo: gift,
                pluslogo: plus,
                loading: false,
                pageloading: false,
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
                axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-single-food/' + this.data.id + '/')
                    .then((resp) => {
                        this.food = resp.data
//                        console.log('--------------------------------')
//                        console.log(resp.data)
                        this.loading = false
                        this.pageloading = true
                    })
                    .catch((err) => {
                        console.log(err)
                    })
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
    .updates_section_footer{position:fixed;}
    .catagories_customise p{
        margin-top:56px;

    }
    .loading{
        text-align: center;
        margin-top: 250px;
        margin-bottom: 150px;
    }
    .restaurant_profile_haader {
        margin-right: -25px !important;
    }
    .restaurent_header_heading {
        width: 73%;
        margin-bottom: 6px !important;
    }
    .settings_left_icon {
        margin-bottom: 5px;
    }
    .bg_two{
        margin-top:52px;
    }
    .home-logo_footer_img img{
        width: 50px !important;
        margin-top: -7px !important;
        margin-left: -8px !important;
    }
</style>