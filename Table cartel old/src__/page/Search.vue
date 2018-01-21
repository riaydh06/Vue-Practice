<template>
  <div>
  	<section>
      <div class="header_area flow">
        <div class="width flow">
          <div class="header flow">
            <div class="search flow"> 
              <input type="search" value="" placeholder="Search Your Boards" class="searchprofile"/>
            </div>
            <div class="icons_profile flow">
              <a href=""><img src="static/assets/img/svgicon/plus.svg" alt="plus icon" /></a>
              <router-link to="/Setting"><img src="static/assets/img/svgicon/settings.svg" alt="plus icon" /></router-link>
            </div>  
          </div>
        </div>
      </div>
    </section>
     <!--search header area end-->
  <div class="catagories_customise bg-card" style="padding: 1px 0 0 0;">
    <p class="bg-card">All Catagories</p>
    <div class="card_one bg-card">

      <h2 class="card__title search_title"><router-link to="/Marketplace">Restaurents</router-link></h2>

      </div>
    <div class="card_one bg-card">
      <h2 class="card__title search_title"><router-link to="/FoodTexo">Foods</router-link></h2>

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
export default {
  name: 'Search'
}
</script>
