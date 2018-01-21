<template>
  <div>
     <!--search header area end-->
  <div class="catagories_customise bg-card" style="padding: 1px 0 0 0;">
    <p class="bg-card">All Casine Type</p>
    <div class="card_one bg-card" v-for="item in foodtexo">
      <h2 class="card__title search_title"><router-link :to="{path: '/get-all-term-food/'+item.term_id}" >{{ item.name }}</router-link></h2>
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
  // import InfiniteLoading from 'vue-infinite-loading'
  export default {
    name: 'FoodTexo',
    data () {
      return {
        foodtexo: []
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
        axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/wp/v2/all-terms?term=cuisine_type')
        .then((resp) => {
          this.foodtexo = resp.data
          console.log('--------------------------------')
          console.log(resp.data)
        })
        .catch((err) => {
          console.log(err)
        })
      }
      // onInfinite () {
      //   setTimeout(() => {
      //     const temp = []
      //     for (let i = this.restaurant.length + 1; i <= this.restaurant.length + 20; i++) {
      //       temp.push(i)
      //     }
      //     this.restaurant = this.restaurant.concat(temp)
      //     this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      //   }, 1000)
      // }
    }
    // components: {
    //   InfiniteLoading
    // }
  }
</script>

