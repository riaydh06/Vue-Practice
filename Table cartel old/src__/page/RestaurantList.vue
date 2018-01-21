<template>
<div class="food_list_items ">
        <div v-for="rest in restaurant">
		<div class="single_food_list">
			<div style="height: 200px; padding: 1px 0 0 0;">
			  <div class="card food_list_cart">
				<div class="card__content custom_card_content">
					<div class="plus-icon">
                    <a v-if="rest.thumbnail" :href="rest.thumbnail" data-lightbox="image-1" data-title="My caption"><ons-icon icon="md-plus"></ons-icon></a>
					<a v-else><a href="static/assets/img/landingpage/rectangle-10.png" data-lightbox="image-1" data-title="My caption"><ons-icon icon="md-plus"></ons-icon></a></a>
					</div>
                    <a href="" v-if="rest.thumbnail"><img v-bind:src="rest.thumbnail" /></a>
                    <a href="" v-else><img src="static/assets/img/landingpage/rectangle-10.png" /></a>
                    <div class="food_list_content_bg">
					<div class="food_list_content">
						<h3><a href="">Article Name</a></h3>
						<h5><a href="">Publisher Name</a></h5>
             <router-link :to="{path: '/restaurant/'+rest.id}"> <h5 >{{rest.title.rendered}}</h5></router-link>

						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div class="single_food_list_footer_top">

						<a href="">
								<ons-icon
								  icon="fa-user"
								  size="20px"
								  fixed-width="false">
								</ons-icon>
						</a>
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
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'RestaurantList',
    data () {
      return {
        restaurant: {}
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
        axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/wp/v2/restaurant/')
        .then((resp) => {
          this.restaurant = resp.data
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
  .cuisine li{
    float: left;
    margin-right: 20px;
    list-style: none;
  }
</style>

