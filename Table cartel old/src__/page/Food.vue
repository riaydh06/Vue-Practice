<template>
  <div>
    <section>
      <div class="ingredients_area flow">
        <div class="width flow">
          <div class="ingredients flow">
            <div style="background-color: #fff; padding: 1px 0 0 0;">
              <div class="card">
                <div class="settings_settings">
                  <div class="settings_left_icon">
                    <a href="">            
                      <ons-icon
                      icon="fa-angle-left"
                      size="20px"
                      fixed-width="false">
                      </ons-icon>
                    </a>
                  </div>
                  <div class="restaurent_header_heading"><a href="index.html">Things Follow</a></div>
                  <div class="restaurant_profile_haader">
                    <ul>
                      <li><a href=""><img src="static/assets/img/detailsicon/path-4.png" alt="" /></a></li>
                      <li><a href=""><img src="static/assets/img/detailsicon/path-5.png" alt="" /></a></li>
                      <li><a href="">            
                        <ons-icon class="plus_icon_restaurant_profile"
                        icon="fa-plus"
                        fixed-width="false">
                        </ons-icon></a></li>
                    </ul>
                  </div>                
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="bg_two">
      <div class="publish flow">
        <div class="width flow">
          <div style="padding: 1px 0 0 0;">
            <div class="card_new">
              <p>Publisher Name</p>
              <h2 class="card__title_one"  > Food Name : {{food.title.rendered}} </h2>
              <h2 class="card__title_one" >Food Price : {{food.food_price}} </h2>
              <div>
                <h2  class="cuisine" v-for="item in food.cuisine_type" >
                   {{ item.name }}
                </h2><br>
               </div>
            </div>
            <div class="pizza flow">
              <img v-if="food.thumbnail" v-bind:src="food.thumbnail" width="460" height="345">
              <img v-else src="static/assets/img/pizza.PNG" width="460" height="345">
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
            <!-- <div class="main_card">
              <div class="card">
                 <div class="card__content_text"><p v-html="food.content.rendered"></p></div>
              </div>
               <p class="one_day">1d ago</p>
            </div> -->

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
            <hr class="board_details_line"/>
            <!-- <div class="main_drop_by flow">
              <h5><a href="">Add Comments</a></h5>
              <div class="board_details_comments_icon">
                <a href=""> <img src="static/assets/img/svgicon/group-40.svg" alt="" /> 150</a>
                <a href=""> <img src="static/assets/img/svgicon/path-4.svg" alt="" /> 1200</a>
              </div>
            </div> -->

            <hr class="board_details_line_two"/>
    <!--board details Food List-->
            <section>
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
            </section>
    <!--board details Food List-->
          </div>
        </div>
      </div>
    </div>
    <div class="footer_logos_area">
      <div class="footer_logos_width">
        <div class="footer_logo">
          <ul>
            <li class=""><router-link to="/"><img src="static/assets/img/footerlogos/1.svg" alt="logo" /></router-link></li>
            <li class=""><router-link to="/Marketplace"><img src="static/assets/img/footerlogos/2.svg" alt="logo" /></router-link></li>
            <li class=""><router-link to="/Profile"><img src="static/assets/img/footerlogos/3.svg" alt="logo" /></router-link></li>
            <li class=""><router-link to="/"><img src="static/assets/img/footerlogos/4.svg" alt="logo" /></router-link></li>
            <li class=""><router-link to="/Recipes"><img src="static/assets/img/footerlogos/5.svg" alt="logo" /></router-link></li>
            <li class=""><router-link to="/Ingredients"><img src="static/assets/img/footerlogos/6.svg" alt="logo" /></router-link></li>
            <li class=""><router-link to="/"><img src="static/assets/img/footerlogos/7.svg" alt="logo" /></router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Food',
    data () {
      return {
        food: {}
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
        axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/wp/v2/food/' + this.$route.params.id + '/')
        .then((resp) => {
          this.food = resp.data
          console.log('--------------------------------')
          console.log(resp.data)
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>
<style scoped>
  .cuisine {
    float: left;
    margin-right: 20px;
    list-style: none;
  }
</style>