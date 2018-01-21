<template>

<!--Header Top-->
<div>
  <section>
	<header>
		<div class="header_area">
			  <ons-toolbar>
				<div class="center header_text header_text_landingpage">tablecartel.com</div>
			  </ons-toolbar>
		</div>
	</header>
  </section>
  <div class="food_list_items " >
        <paginate name="food" :per="10" :list="food" class="paginate-list">
        <div v-for="fd in paginated('food')">
		<div class="single_food_list">
			<div style="height: 200px; padding: 1px 0 0 0;">
			    <div class="card food_list_cart">
				    <div class="card__content custom_card_content">
						<div class="plus-icon">
							<a v-if="fd.thumbnail" :href="fd.thumbnail" data-lightbox="image-1" data-title="My caption"><ons-icon icon="md-plus"></ons-icon></a>
							<a v-else href="static/assets/img/landingpage/rectangle-10.png" data-lightbox="image-1" data-title="My caption"><ons-icon icon="md-plus"></ons-icon></a>
						</div>
							<a href="" v-if="fd.thumbnail"><img v-bind:src="fd.thumbnail" /></a>
							<a href="" v-else><img src="static/assets/img/landingpage/rectangle-10.png" /></a>
						<div class="food_list_content_bg">
							<div class="food_list_content">
								<h3><router-link :to="{path: '/food/'+fd.id}">{{fd.title.rendered}}</router-link></h3>
								<h5><a href="">Publisher Name</a></h5>
								<!-- <div class="cuisine">
				                  <ul>
				                    <li v-for="csn in fd.cuisine_type">{{ csn.name }}</li>
				                  </ul>
				                 </div></br>  -->

								<p v-html="fd.content.rendered"></p>
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
	</paginate>
	<div>
		<paginate-links for="food" :limit="10" :show-step-links="true"></paginate-links>
        <paginate-links for="food" :simple="{
        next: 'Next »',
        prev: '« Back'
      }"></paginate-links>
	</div>
    
	</div>
  </div>	
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import VuePaginate from 'vue-paginate'
  Vue.use(VuePaginate)
  export default {
    name: 'FoodList',
    data () {
      return {
        food: {},
        paginate: ['food']
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
        axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/wp/v2/food?per_page=100')
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
  .cuisine li{
    float: left;
    margin-right: 20px;
    list-style: none;
  }
/*
ul.paginate-links.food{
	float:left;
	color:white;
	list-style: none;
}*/
ul.paginate-links {
  list-style: none;
  color: white;
  float: left;

}

li.paginate-links {
  display: inline-block;
}
ul.paginate-links.food{

}
ul.paginate-links.food > li.active > a{
	   float: left;
}


</style>