<template>
  <v-ons-page id='mypage'>
    <section>
      <div class="header_area search_header flow">
        <div class="width flow">
          <div class="header flow">
            <div class="search flow"> 
              <input type="search" value="" v-on:keyup="search" placeholder="Search Your Foods"  v-model="searchTerm" class="searchprofile"/>
            </div>
            <div class="icons_profile flow">
                <!--<li> <img :src="pluslogo" alt="plus icon" /></li>-->
                <!--<li><img :src="settingslogo" alt="settings icon" /></li>-->
            </div>  
          </div>
        </div>
      </div>
        <br />
        <br />
        <!--<h2>{{searchTerm}}</h2>-->
        <!--<ul>-->
            <!--<li v-for="post in searchItems">-->
                <!--{{post.title.rendered}}-->
            <!--</li>-->
        <!--</ul>-->

    </section>
     <!--search header area end-->
      <div v-if="loading" class="loading" v-cloak>
          <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
          <span>Loading...</span>
      </div>
      <div class="home_page_bg">
          <div class="catagories_customise margin-top bg-card" style="padding: 1px 0 0 0;background:black;">
                <div v-if="searchTerm">
                    <div class="bg-card-lastchild" v-for="post in searchItems" v-if="post.type=='food'">
                        <div class="card_one bg-card" >
                            <h2 class="card__title search_title" @click="foods(post.id)" > {{post.title.rendered}}</h2>
                        </div>
                    </div>
                </div>

                <div v-else>
                    <!--<p class="bg-card bg-card-two">All Catagories</p>-->
                    <div class="card_one bg-card">
                        <h2 class="card__title search_title" @click="resturants" >Restaurants</h2>
                    </div>
                    <div class="card_one bg-card">
                        <h2 class="card__title search_title" @click="foodspage">Cuisine</h2>
                    </div>
                    <!--<div class="card_one bg-card">-->
                        <!--<h2 class="card__title search_title" @click="login">Login</h2>-->
                    <!--</div>-->
                </div>


                <!-- <div class="card_one bg-card">
                <h2 class="card__title search_title"><router-link to="/Ingredients">Ingredients</router-link></h2>

                </div>
                <div class="card_one bg-card">
                  <h2 class="card__title search_title"><router-link to="/Recipes">Recipes</router-link></h2>

                </div>
                <div class="card_one bg-card">
                  <h2 class="card__title search_title"><router-link to="/FoodList">Master Class</router-link></h2>

                </div>
                <div class="card_two bg-card">

                 </div> -->

          </div>
      </div>
      <div v-if="searchTerm">

      </div>
      <div v-else>
          <div  class="footer_logos_area updates_section_footer">
              <div class="footer_logos_width">
                  <div class="footer_logo">
                      <ul>
                          <li @click="tablecartelpage" class="home-logo_footer_img"><img :src="logo1" alt="logo" /></li>
                          <li class=""><img :src="logo2" alt="logo" /></li>
                          <li class=""><img :src="logo3" alt="logo" /></li>
                          <li class="" ><img :src="logo4" alt="logo" /></li>
                          <li class=""><img :src="logo5" alt="logo" /></li>
                          <li class=""><img :src="logo6" alt="logo" /></li>
                          <li class=""><img :src="logo7" alt="logo" /></li>
                          <li class=""><img :src="logo9" alt="logo" /></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>

  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import TableCartel from './TableCartel';
  import Marketplace from './Marketplace';
  import FoodTexo from './FoodTexo';
  import Login from './Login';
  import foot1 from 'assets/img/icon/footerlogo/1.png';
  import foot2 from 'assets/img/icon/footerlogo/2.png';
  import foot3 from 'assets/img/icon/footerlogo/3.png';
  import foot4 from 'assets/img/icon/footerlogo/4.png';
  import foot5 from 'assets/img/icon/footerlogo/5.png';
  import foot6 from 'assets/img/icon/footerlogo/6.png';
  import foot7 from 'assets/img/icon/footerlogo/7.png';
  import foot9 from 'assets/img/icon/footerlogo/9.png';
  import plus from 'assets/img/icon/plus.png';
  import settings from 'assets/settings.png';
  import axios from 'axios'
  import Food from './Food';
  export default {
      data() {
          return {
              searchTerm: '',
              searchItems: [],
              posts: [],
              logo1: foot1,
              logo2: foot2,
              logo3: foot3,
              logo4: foot4,
              logo5: foot5,
              logo6: foot6,
              logo7: foot7,
              logo9: foot9,
              settingslogo: settings,
              pluslogo: plus,
              loading: false
          }
      },
//      computed: {
//          filteredItems: function(){
//                  var that = this;
//                  return this.posts.filter(function(post) {
//                      console.log('---------------***-----------------')
////                      console.log(post);
//                      return post.post_title.toLowerCase().indexOf(that.searchTerm.toLowerCase()) >= 0;
//                  });
//          },
//      },
//      created: function(){
//          axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-all-foods')
//              .then((resp) => {
//                  this.posts = resp.data
//                  console.log('--------------------------------')
//                  console.log(resp.data)
//              })
//      },
//      created: function(){
//          axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-all-foods/' + this.searchTerm + '/')
//              .then((resp) => {
//                  this.searchItems = resp.data
//                  console.log('-------------****-------------------')
//                  console.log(resp.data)
//                  console.log(this.searchItems)
//              })
//      },
      created: function(){
          //this.loading = true
      },
      methods: {
         pop(){
           this.pageStack.pop();
         },

         foodspage() {
           this.pageStack.push(FoodTexo);
         },
         resturants() {
           this.pageStack.push(Marketplace);
         },
         login() {
              this.pageStack.push(Login);
         },
         tablecartelpage() {
              this.pageStack.push(TableCartel);
         },
         search: function() {
             this.loading = true
             axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/wp/v2/search/' + this.searchTerm + '/')
                 .then((resp) => {
                     this.searchItems = resp.data
//                     console.log('-------------****-------------------')
//                     console.log(resp.data)
//                     console.log(this.searchItems)
                     this.loading = false
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
             this.searchTerm='';
         },
      },
     props: ['pageStack'],
//     components: { customToolbar }
  }
</script>
<style scoped>
    .home-logo_footer_img img{
        width: 50px !important;
        margin-top: -7px !important;
        margin-left: -8px !important;

    }
  .updates_section_footer{
      position:fixed;
      margin-bottom: 0px;
  }
  .bg-card-two{
      margin-top:0px !important;

  }
  .search_header{
      position:fixed;
      width:100%;
      background: #fff;
      padding-bottom: 10px;

  }
  .all_search_data{
      margin-left: 10px;

  }
    .bg-card-lastchild>.bg-card>:last-child{
    margin-bottom:60px;
    }
  .loading{
      text-align: center;
      margin-top: 150px;
      margin-bottom: 150px;
  }
  .search input[type="search"]{


  }

  .icons_profile li{
      width:19px !important;

  }
  .footer_logo ul li {
      /*width: 12% !important;*/
      height: 39px !important;
  }
    .card_one h2{
        font-weight:normal !important;

    }
    .catagories_customise p{
        padding: 10px 0px 0px 14px !important;

    }
    .home_page_bg{
        background: #171717;
        height: 100%;
    }


</style>