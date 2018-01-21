<template>
  <div>
  	<section>
		<div class="header_area flow">
			<div class="width flow">
				<div class="header flow">
					<div class="search flow">	
						<input type="search" value="" placeholder="Search Your Board" class="searchprofile"/>
					</div>
					<div class="icons_profile flow">
						<a href=""><img src="static/assets/img/svgicon/plus.svg" alt="plus icon" /></a>
						<a href="settings.html"><img src="static/assets/img/svgicon/settings.svg" alt="plus icon" /></a>
					</div>	
				</div>
			</div>
		</div>
	</section>
	
	<section>
		<div class="profile_area flow">
			<div class="width flow">
				<div class="profile flow">
					<div class="user_profile flow">
						<h3>@"User Name"</h3>
						<h2>"User Full Name"</h2>
						<div class="follower flow">
							<h3>41</h3>
							<p>Follwer</p>
						</div>
						<div class="following flow">
							<h3>43</h3>
							<p>Following</p>
						</div>
					</div>
					<div class="user_image flow">
						<a href=""><img src="static/assets/img/17239-200.png" alt=""/></a>
					</div>
				</div>
			</div>
		</div>
	</section>
	 <!--Header area end--> 

	 
	 <!--drop boards area start--> 
		<div class="drop_boards_area flow">
			<div class="width flow">
				<div class="drop_boards flow">
					<h2>Drops boards</h2>
					<p><span>1.12k</span>drops</p>
					<div class="profile_dropboard_food_images">
						<a href=""><img src="static/assets/img/profile/profilefoods.png" alt="" /></a>
					</div>
					<!--
					<div class="drops_top_images flow">
						<div class="top_left flow">
							<a href=""><img src="img/11.PNG" alt=""/></a>
						</div>
						<div class="top_right flow">
							<a href=""><img src="img/chicken_satay_noodles_95490_16x9.jpg" alt=""/></a>
						</div>
					</div>
					<div class="drops_top_two_images flow">
						<div class="top_two_left flow">
							<a href=""><img src="img/6f2db64af78a9f2a338985524acc7669.jpg" alt=""/></a>
						</div>
						<div class="top_two_right flow">
							<a href=""><img src="img/2.jpg" alt=""/></a>
						</div>
					</div>
					-->
				</div>
			</div>
		</div>
	 
	 <!--drop boards area end-->  
	 
	 
	 <!--drop menu area start-->  
	 <div class="menu_area flow">
		<div class="width flow">
			<div class="menu flow">
				<ul>
					<li><a href="#">tag</a></li>
					<li><a href="#">tag</a></li>
					<li><a href="#">tag</a></li>
					<li><a href="#">tag</a></li>
					<li><a href="#">tag</a></li>
				</ul>
			</div>
		</div>
	 </div>
	 <!--drop menu area end-->  
	 <div class="drop_boards_area flow">
			<div class="width flow">
				
				<div class="drop_boards flow">
					<div class="board_by flow">
					<h3>board by</h3>
					<p>most recent</p>
					</div>
					<h5 class="drop_board_heading">"Drops Board Name"</h5>
					<p style="color:gray">2 days ago</p>
					<div class="profile_dropboard_food_images">
						<a href=""><img src="static/assets/img/profile/profilefoods.png" alt="" /></a>
					</div>
					<!--
					<div class="drops_top_images flow">
						<div class="top_left flow">
							<a href=""><img src="img/11.PNG" alt=""/></a>
						</div>
						<div class="top_right flow">
							<a href=""><img src="img/chicken_satay_noodles_95490_16x9.jpg" alt=""/></a>
						</div>
					</div>
					<div class="drops_top_two_images flow">
						<div class="top_two_left flow">
							<a href=""><img src="img/6f2db64af78a9f2a338985524acc7669.jpg" alt=""/></a>
						</div>
						<div class="top_two_right flow">
							<a href=""><img src="img/2.jpg" alt=""/></a>
						</div>
					</div>
					-->
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
  export default {
    name: 'Profile'
  }
</script>
