<template>
  <v-ons-page id='mypage'>
  <div style="background-color: rgb(255, 255, 255);
    padding: 0px 0px 8px 0px;
    position: fixed;
    width: 100%;
margin-top: -16px;">
    <div class="card">
      <div class="settings_settings">
      <div class="settings_left_icon food_texo_left_icon">
        <a @click="pop">
          <ons-icon
            icon="fa-angle-left"
            size="20px"
            fixed-width="false">
          </ons-icon>
        </a>
      </div>
      <div class="settings_content food_texo_text"><p>Find a Cuisine Type</p></div>
      <div class="settings_right_icon food_texo_right_icon">
        <img :src="pluslogo" alt="plus icon" />
      </div>

    </div>
    </div>
  </div>
     <!--search header area end-->
  <div v-show="pageloading" class="catagories_customise bg-card" style="padding: 1px 0 0 0;">
    <p class="bg-card">All Cuisine Type</p>
    <div class="card_one bg-card" v-for="item in foodtexo">
      <h2 class="card__title search_title"  @click="food_list_texo(item.term_id)">{{ item.name }}</h2>
    </div>
  </div>

      <div v-if="loading" class="loadingp" v-cloak>
          <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
          <span>Loading...</span>
      </div>

    <br />
    <br />
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
  </v-ons-page>
</template>

<script>
  import axios from 'axios'
  import FoodListTexo from './FoodListTexo';
  import foot1 from 'assets/img/icon/footerlogo/1.png';
  import foot2 from 'assets/img/icon/footerlogo/2.png';
  import foot3 from 'assets/img/icon/footerlogo/3.png';
  import foot4 from 'assets/img/icon/footerlogo/4.png';
  import foot5 from 'assets/img/icon/footerlogo/5.png';
  import foot6 from 'assets/img/icon/footerlogo/6.png';
  import foot7 from 'assets/img/icon/footerlogo/7.png';
  import foot9 from 'assets/img/icon/footerlogo/9.png';
  import plus from 'assets/img/icon/plus.png';
  export default {
    name: 'FoodTexo',
    data () {
      return {
        foodtexo: [],
          logo1: foot1,
          logo2: foot2,
          logo3: foot3,
          logo4: foot4,
          logo5: foot5,
          logo6: foot6,
          logo7: foot7,
          logo9: foot9,
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
          this.loading= true
        axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/wp/v2/all-terms?term=cuisine_type')
        .then((resp) => {
          this.foodtexo = resp.data
//          console.log('--------------------------------')
//          console.log(resp.data)
          this.loading = false
          this.pageloading = true
        })
        .catch((err) => {
          console.log(err)
        })
      },
      food_list_texo (id) {
          this.pageStack.push({
              extends: FoodListTexo,
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
      props: ['pageStack'],
  }
</script>

<style scoped>
  .updates_section_footer{
    position:fixed;
    margin-bottom: 0px;
  }
  .catagories_customise p {
      margin-top: 42px;
  }
  .loadingp{
      text-align: center;
      margin-top: 250px;
      margin-bottom: 150px;
  }
  [v-cloak] {
      display: none;
  }
    .food_texo_left_icon{        width: 27%;
        float: left;}
    .food_texo_text{
        width:54%;
        float:left;
    }
    .food_texo_right_icon{
        width: 15%;
        float: right;
        margin-right: -14%;

    }
  .home-logo_footer_img img{
      width: 50px !important;
      margin-top: -7px !important;
      margin-left: -8px !important;
  }
  .updates_section_footer[data-v-166bf559] {
      margin-bottom: -16px
  }

</style>
