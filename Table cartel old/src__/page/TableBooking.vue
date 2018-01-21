<template>
    <div>
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
					<div class="settings_content"><a href="index.html">Find a Restaurant</a></div>
					<div class="settings_right_icon">				
							<a href=""><img src="static/assets/img/svgicon/plus.svg" alt="plus icon" /></a>		
					</div>
					
				</div>   
			  </div>
			</div>

			<!--table_booking area-->
			<div class="table_booking_area">
				<div class="table_booking_date_time">
				<ons-icon icon="fa-calendar" class="map_icon_color"></ons-icon>
				<input class="table_booking_input" type="text" id="datetimepicker" placeholder="Table for 4, Sunday at 6:30 PM"> 
				</div>
				<div class="table_booking_date_time">
				<ons-icon icon="fa-search" class="map_icon_color"></ons-icon>
				<input class="table_booking_input" type="text" id="datetimepicker" placeholder="Table for 4, Sunday at 6:30 PM"> 
				</div>
			</div>

			<!--Table Booking For Multi Restaurant-->
			<div class="table_booking_restaurant_area">
				<div class="booking_heading_restaurant">
					<ons-row class="text-center">
					  <ons-col style="text-align: left;
			margin-left: 9px;
			">Restaurants</ons-col>
					  
					  <ons-col>Location</ons-col>
					  <ons-col>ETA</ons-col>
					</ons-row>
				</div>
				<hr />
				<div class="restaurant_booking_hotel_name">
					<div v-for="rest in restaurant">
						<div class="single_booking_row">
							<ons-row>
							  <ons-col><router-link :to="{path: '/restaurant/'+rest.id}" v-html="rest.title.rendered"> </router-link></ons-col>		  
							  <ons-col><a href="" v-for="loc in rest.location">{{loc.name}},</a></ons-col>
							  <ons-col class="marketplace_time">35 min</ons-col>
							</ons-row>
						</div>	
					</div>
							
					
					
					
					
				</div>
			</div>

			<!--Table Booking For Multi Restaurant-->
			<hr />
			<h3 class="scroll_for_more">Scroll For More</h3>

			<div class="table_booking_map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2078.073831060828!2d88.6294226085406!3d25.628242322362325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8b169d8f5bad3d18!2sIT+Solution+Dinajpur!5e0!3m2!1sen!2sbd!4v1500353909242" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
			</div>







		<!--########## FOOTER #############-->
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
    name: 'Tablebooking',
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
