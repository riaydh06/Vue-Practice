<template>
  <div>
     <!--search header area end-->
  <div class="catagories_customise bg-card" style="padding: 1px 0 0 0;">
    <p class="bg-card">All Casine Type</p>
    <div class="card_one bg-card" v-for="item in rest.cuisine_type">
      <h2 class="card__title search_title"><router-link to="/FoodList" >{{ item.name }}</router-link></h2>
    </div>
  </div>
  <div class="footer_logos_area updates_section_footer">
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
    name: 'RestaurantFoodTexo',
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

