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
								<div class="settings_content"><a href="index.html">Info Recipes</a></div>
								<div class="settings_right_icon">
								<a href=""><img src="img/svgicon/plus.svg" alt="plus icon" /></a>
								</div>
								
							</div>  
						 </div>
						</div>
						<div class="video flow">
							<video width="400" controls>
							  <source src="static/assets/video/two.mp4" type="video/mp4">
							  Your browser does not support HTML5 video.
							</video>
						</div>
					</div>
				</div>
			</div>
		</section>
   <!--Recipe header area end-->
   <div class="new-card" style="padding: 1px 0 0 0;">
	  <div class="card card--material">
		<div style="font-size: 18px;
margin-top: -15px;
color: white;
margin-left: -12px;"
class="card__title card--material__title">Spaghetti Vongole</div>
		</div>
	</div>
	
	<div class="timetable_area flow">
		<div class="timetable flow">
			<p>Preparation Time</p>
		</div>
		<div class="timetable_two flow">
			 <img src="static/assets/img/svgicon/group-91.svg" alt="" />
		</div>
		<div class="one_hour flow">
			<p>1 hr 25 mins</p>
		</div>
		
	</div>
	<div class="timetable_area flow">
		<div class="timetable flow">
			<p>Serving</p>
		</div>
		<div class="timetable_two flow">
			<img src="static/assets/img/svgicon/group-92.svg" alt="" />
		</div>
		<div class="one_hour flow">
			<p>Main</p>
		</div>
		
	</div>
	<div class="timetable_area flow">
		<div class="timetable flow">
			<p>Deficulty</p>
		</div>
		<div class="timetable_two flow">
			<img src="static/assets/img/svgicon/path-10.svg" alt="" />
		</div>
		<div class="one_hour flow">
			<p>Medium</p>
		</div>
		
	</div>

<div class="get_ingredients flow"><a href="#">Get Ingredients</a></div>	
</div>
</template>
<script>
  export default {
    name: 'InfoRecipe'
  }
</script>
