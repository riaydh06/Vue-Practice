<template>
<v-ons-page id='mypage'>
    <!--<custom-toolbar :back-label="'Page 2'">Page 3</custom-toolbar>-->
    <section>
          <div style="background-color: #fff; padding: 1px 0 0 0;position:fixed;width:100%;margin-top: -18px;">
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
              <div class="settings_content"><p>Find a Restaurant</p></div>
              <div class="settings_right_icon">
                <img :src="pluslogo" alt="plus icon" />

              </div>

            </div>
            </div>
          </div>
    </section>

  <!--table_booking area-->
  <!--<div class="table_booking_area">-->
    <!--<div class="table_booking_date_time">-->
      <!--<ons-icon icon="fa-calendar" class="map_icon_color"></ons-icon>-->
      <!--<input class="table_booking_input" type="text" id="datetimepicker" placeholder="Table for 4, Sunday at 6:30 PM">-->

    <!--</div>-->
    <!--<div class="table_booking_date_time">-->
      <!--<ons-icon icon="fa-search" class="map_icon_color"></ons-icon>-->
      <!--<select v-model="selected" v-on:change="search" required="">-->
        <!--<option selected="" v-bind:value="0">All Restaurant</option>-->
        <!--<option v-for="item in location" v-bind:value="item.term_id">{{ item.name }}</option>-->
      <!--</select>-->
    <!--</div>-->
    <!--</div>-->
  <!--<h1>{{selected}}</h1>-->
  <div class="table_booking_area">
    <!--<div class="table_booking_date_time">-->
      <!--<ons-icon icon="fa-calendar" class="map_icon_color"></ons-icon>-->
      <!--<input class="table_booking_input" type="text" id="datetimepicker" placeholder="Table for 4, Sunday at 6:30 PM">-->

    <!--</div>-->
    <div class="table_booking_date_time">
      <ons-icon icon="fa-search" class="map_icon_color"></ons-icon>
        <p class="all_restaurent_search">All Restaurant <span>&nbsp;&nbsp; near</span></p>


      <select v-model="selected" v-on:change="search" required="">
        <!--<option selected="" v-bind:value="0">All Restaurant</option>-->
        <option v-for="item in location" v-bind:value="item.term_id">{{ item.name }}</option>
      </select>

    </div>
    </div>
  <!--<h1>{{selected}}</h1>-->






  <!--Table Booking For Multi Restaurant-->
  <div class="table_booking_restaurant_area">
    <div class="booking_heading_restaurant">
      <ons-row class="text-center">
        <ons-col size="40" style="text-align: left;
  margin-left: 2px;
  ">Restaurant</ons-col>

        <ons-col style="">Location</ons-col>
        <!--<ons-col class="text-right" style="text-align: right;-->
    <!--margin-right: 7%;">ETA</ons-col>-->
      </ons-row>
    </div>
    <hr />
    <div v-if="selected">
      <div class="restaurant_booking_hotel_name" >
        <div v-for="rest in searchItems">
          <div class="single_booking_row">
            <ons-row>
              <ons-col><p @click="restaurants(rest.ID)" v-html="rest.post_title"> </p></ons-col>
              <ons-col><img :src="maps" alt="map" /></ons-col>
              <!--<ons-col><a href="" v-for="loc in rest.terms">{{loc.name}},</a></ons-col>-->
              <!--<ons-col class="marketplace_time">35 min</ons-col>-->
            </ons-row>
          </div>
        </div>
        <!-- <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading> -->
      </div>
    </div>
    <div v-else>
      <div class="restaurant_booking_hotel_name" >
        <div v-for="rest in restaurant">
          <div class="single_booking_row">
            <ons-row>
              <ons-col><p @click="restaurants(rest.ID)" v-html="rest.post_title"> </p></ons-col>
              <ons-col><img :src="maps" alt="map" /></ons-col>
              <!--<ons-col><a href="" v-for="loc in rest.terms">{{loc.name}},</a></ons-col>-->
              <!--<ons-col class="marketplace_time">35 min</ons-col>-->
            </ons-row>
          </div>
        </div>
        <!-- <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading> -->
      </div>
    </div>
  </div>
  <!--<i  v-show="loading" class="fa fa-spinner fa-spin"></i>-->
    <div v-if="loading" class="loadings" v-cloak>
        <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        <span>Loading...</span>
    </div>

  <!--Table Booking For Multi Restaurant-->
  <hr />
  <!--<h3 class="scroll_for_more">Scroll For More</h3>-->

  <!--<div class="table_booking_map">-->
    <!--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2078.073831060828!2d88.6294226085406!3d25.628242322362325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b169d8f5bad3d18!2sIT+Solution+Dinajpur!5e0!3m2!1sen!2sbd!4v1500353909242" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>-->
  <!--</div>-->
    <!--<div class="google-map">-->
        <!--<gmap-map-->
                <!--:center="center"-->
                <!--:zoom="7"-->
                <!--style="width: 500px; height: 300px">-->
            <!--<gmap-marker-->
                    <!--:key="index"-->
                    <!--v-for="(m, index) in markers"-->
                    <!--:position="m.position"-->
                    <!--:clickable="true"-->
                    <!--:draggable="true"-->
                    <!--@click="center=m.position"-->
            <!--&gt;</gmap-marker>-->
        <!--</gmap-map>-->
    <!--</div>-->
  <br>
  <br>
  <br>
  <div class="footer_logos_area updates_section_footer market_place_footer">
    <div class="footer_logos_width">
      <div class="footer_logo">
        <ul>
            <li class="logo_footer_img"><img :src="logo1" alt="logo" /></li>
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
</v-ons-page>
</template>
<script>
  import axios from 'axios'
  import customToolbar from './CustomToolbar';
  import InfiniteLoading from 'vue-infinite-loading'
  import Restaurant from './Restaurant';
  import foot1 from 'assets/img/icon/footerlogo/1.png';
  import foot2 from 'assets/img/icon/footerlogo/2.png';
  import foot3 from 'assets/img/icon/footerlogo/3.png';
  import foot4 from 'assets/img/icon/footerlogo/4.png';
  import foot5 from 'assets/img/icon/footerlogo/5.png';
  import foot6 from 'assets/img/icon/footerlogo/6.png';
  import foot7 from 'assets/img/icon/footerlogo/7.png';
  import foot9 from 'assets/img/icon/footerlogo/9.png';
  import map from 'assets/maps.png';
  import Vue from 'vue';

  //import * as VueGoogleMaps from 'vue2-google-maps';
  import plus from 'assets/img/icon/plus.png';
//  Vue.use(VueGoogleMaps, {
//      load: {
//          key: 'AIzaSyDX3SEHwFUY-k_Jp7YMp0-uTvo7up-paXM',
//          v: 'OPTIONAL VERSION NUMBER',
//          // libraries: 'places', //// If you need to use place input
//      }
//  });
  export default {
    name: 'Marketplace',
    data () {
      return {
        restaurant: [],
        location: [],
        logo1: foot1,
        logo2: foot2,
        logo3: foot3,
        logo4: foot4,
        logo5: foot5,
        logo6: foot6,
        logo7: foot7,
        logo9: foot9,
        maps: map,
        pluslogo: plus,
        selected: '',
        searchItems: [],
        loading: false,
        center: {lat: 10.0, lng: 10.0},
        markers: [{
              position: {lat: 10.0, lng: 10.0}
          }, {
              position: {lat: 11.0, lng: 11.0}
          }]
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
        axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-rest-by-loc/0')
        .then((resp) => {
          this.restaurant = resp.data
        });
        axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/wp/v2/all-terms?term=location')
        .then((resp) => {
          this.location = resp.data
//          console.log('--------------------------------')
//          console.log(resp.data)
//          console.log(this.loading)
          this.loading = false
//          console.log(this.loading)

        })
        .catch((err) => {
          console.log(err)
        });

//          console.log('--------------------------------');
//          console.log(this.location);
      },
//      onInfinite () {
//        setTimeout(() => {
//          const temp = [];
//          for (let i = this.restaurant.length + 1; i <= this.restaurant.length + 20; i++) {
//            temp.push(i)
//          }
//          this.restaurant = this.restaurant.concat(temp);
//          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
//        }, 1000)
//      },
      restaurants (id) {
          this.pageStack.push({
              extends: Restaurant,
              data() {
                  return {
                      data: {'id': id}
                  }
              }
          });
      },
      search: function() {
          this.loading = true
          axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-rest-by-loc/' + this.id + '/')
              .then((resp) => {
                  this.searchItems = resp.data
//                  console.log('-------------****-------------------')
//                  console.log(resp.data)
//                  console.log(this.searchItems)
                  this.loading = false

              })
      },
      createMap: function(){
        var map;

        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -12.1430911, lng: -77.0227697},
            zoom: 12
        });
      },
       pop() {
            this.pageStack.pop();
        }
    },
//    components: {
//      InfiniteLoading,customToolbar
//    },
    props: ['pageStack'],
  }




</script>
<style scoped>
     .updates_section_footer {
       position: fixed;
     }
    .footer_logo ul li{
        width:45px;
        height:45px;

    }
    .table_booking_area{
        margin-top:37px !important;
    }
    .loadings{
       text-align: center;
       margin-top: 150px;
       margin-bottom: 150px;
    }
    .table_booking_date_time ons-icon{
      margin-top:2px;

    }
      .table_booking_date_time select{
          border: none;
          font-size: 13px;
          background: transparent;

      }
      .logo_footer_img{}
      .logo_footer_img img{
        width: 50px !important;
        margin-top: -7px !important;
        margin-left: -8px !important;

      }
       .single_booking_row ons-row ons-col p{
           line-height: 15px;
           margin-top: 10px;
           font-size: 1.0em;
           font-family: 'Hind', sans-serif;
           text-align: left;
           margin-left: 14%;
           padding-bottom: 10px;
       }
        .marketplace_time {
          font-family: 'Hind', sans-serif;
          font-size: 10px;
        }
  .restaurant_booking_hotel_name{
    padding-left: 2%;

  }
  .market_place_footer{
    bottom:7px;
  }





</style>