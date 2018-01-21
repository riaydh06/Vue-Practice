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
                <div class="restaurent_header_heading"><a href="index.html">Res.. Profile</a></div>
                <div class="restaurant_profile_haader">
                  <ul class="recipe_header_icon"> 
                    <a href=""><img src="static/assets/img/svgicon/heart.svg" alt="plus icon" /></a>
                    <a href=""><img src="static/assets/img/svgicon/tir.svg" alt="plus icon" /></a>
                    <a href="settings.html"><img src="static/assets/img/svgicon/plus.svg" alt="plus icon" /></a>
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

   <!--Restaurant Name-->
   <div class="restaurent_profile_name">
    <ons-row>
      <ons-col width="70%">
        <div class="restarent_name_left_content">
          <h2 v-html="rest.title.rendered"></h2>
          <!-- <div class="review_restaruent">
            <p>{{rest.price_range}}<br /><span>Reviews</span></p>
            <div class="load_on_the_wallet">
              <ul>
                <li><img src="static/assets/img/ratingicon/group-95.png" alt="" /></li>
                <li><img src="static/assets/img/ratingicon/group-95.png" alt="" /></li>
                <li><img src="static/assets/img/ratingicon/group-95.png" alt="" /></li>
                <li><img src="static/assets/img/ratingicon/group-95.png" alt="" /></li>
                <li><img src="static/assets/img/ratingicon/group-97.png" alt="" /></li>
              </ul>
              <br />
              <p><a href="">Load one the wallet</a></p>
            </div>
          </div> -->
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
          <img v-else src="static/assets/img/profile.jpg" alt="" />

        </div>
        <div class="restaurent_food_rating">
          <ul>
            <li><img src="static/assets/img/ratingicon/path.png" alt="" /></li>
            <li><img src="static/assets/img/ratingicon/path.png" alt="" /></li>
            <li><img src="static/assets/img/ratingicon/group-118.png" alt="" /></li>
          </ul>
          <br />
          <p>Rating</p>
        </div>
        <div class="restaurent_food_book">
          <img src="static/assets/img/ratingicon/path-14.png" alt="" />
          <br />
          <router-link to="/TableBooking">Book Now</router-link>
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
        <img src="static/assets/img/ratingicon/path-11.png" alt="" />
         <h3 class="card__title search_title1"> <router-link :to="{path: '/get-all-food/'+rest.id}">Menu</router-link></h3>
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
          <li><img src="static/assets/img/ratingicontwo/path.png" alt="" /></li>
          <li><img src="static/assets/img/ratingicontwo/path.png" alt="" /></li>
          <li><img src="static/assets/img/ratingicontwo/group-118.png" alt="" /></li>
        </ul>
      </div>
      </ons-col>
      <ons-col>
        <div class="progress_menu_overal_sidebar">
          <ul>
            <li><ons-progress-bar value="90"></ons-progress-bar></li>
            <li><ons-progress-bar value="40"></ons-progress-bar></li>
            <li><ons-progress-bar value="10"></ons-progress-bar></li>
          </ul>
        </div>
      </ons-col>
    </ons-row>
    <ons-row>
      <ons-col width="50%">
      <div class="menu_overal_sidebar_bottom_all_reviews">
        <img src="static/assets/img/ratingicontwo/path.png" alt="" />
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
          <a href=""><img src="static/assets/img/restaurentprofile/rectangle-9.png" alt="" /></a>
        </div>
        <div class="single_photoes_left_side">
          <a href=""><img src="static/assets/img/restaurentprofile/rectangle-10.png" alt="" /></a>
        </div>
      </div>
      </ons-col>
      <ons-col>
        <div class="photoes_right_side">
          <div class="single_photoes_right_side">
            <a href=""><img src="static/assets/img/restaurentprofile/rectangle-11.png" alt="" /></a>
          </div>
          <div class="single_photoes_right_side">
            <a href=""><img src="static/assets/img/restaurentprofile/rectangle-12.png" alt="" /></a>
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
            <img src="static/assets/img/restaurentprofile/icons/1.svg" alt="icon" />
          </div>
          <div class="icons_right_content">
            <h4>Phone</h4>
            <p>{{rest.contact_number}}</p>
          </div>
        </div>
        <div class="single_details_view_left_side">
          <div class="icons_left">
            <img src="static/assets/img/restaurentprofile/icons/2.svg" alt="icon" />
          </div>
          <div class="icons_right_content">
            <h4>Price</h4>
            <p>{{rest.price_range}}</p>
          </div>
        </div>
        <div class="single_details_view_left_side">
          <div class="icons_left">
            <img src="static/assets/img/restaurentprofile/icons/3.svg" alt="icon" />
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
            <img src="static/assets/img/restaurentprofile/icons/4.svg" alt="icon" />
          </div>
          <div class="icons_right_content">
            <h4>Hours</h4>
            <p>{{rest.restaurant_hours}}></p>
          </div>
        </div>
        <div class="single_details_view_left_side">
          <div class="icons_left">
            <img src="static/assets/img/restaurentprofile/icons/5.svg" alt="icon" />
          </div>
          <div class="icons_right_content">
            <h4>Parking</h4>
            <p>{{rest.parking}}</p>
          </div>
        </div>
        <div class="single_details_view_left_side">
          <div class="icons_left">
            <img src="static/assets/img/restaurentprofile/icons/6.svg" alt="icon" />
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
                <img src="static/assets/img/restaurentprofile/icons/7.svg" alt="icon" />
              </div>
              <div class="details_view_right_content">
                <h4>Description</h4>
                <p v-html="rest.content.rendered"></p>
                
              </div>
            </div>
          </div>
        </div>
      </ons-col>
    </ons-row>
  </div>
   </div>
   </div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Restaurant',
    data () {
      return {
        rest: {}
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
        axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/wp/v2/restaurant/' + this.$route.params.id + '/')
        .then((resp) => {
          this.rest = resp.data
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
  .search_title1 a {
    color: black;
    text-decoration: none;
}
</style>