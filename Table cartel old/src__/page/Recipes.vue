<template>
  <div>
    <section>
        <div class="ingredients_area flow">
          <div class="width flow">
            <div class="ingredients flow">

              <section>
                <div class="ingredients_area flow">
                  <div class="width flow">
                    <div class="ingredients flow">
                    <div style="background-color: #fff; padding: 1px 0 0 0;margin-top: 6px;">
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
                          <div class="restaurent_header_heading"><a href="index.html">Recipes</a></div>
                          <div class="restaurant_profile_haader">
                            <ul class="recipe_header_icon"> 
                              <a href=""><img src="static/assets/img/svgicon/heart.svg" alt="plus icon" /></a>
                              <a href=""><img src="static/assets/img/svgicon/tir.svg" alt="plus icon" /></a>
                              <a href="settings.html"><img src="static/assets/img/svgicon/plus.svg" alt="plus icon" /></a>
                            </ul>
                          </div>                
                        </div>  
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
     <!--Recipe header area end-->
              <div class="video flow" style="margin-top:8px;">
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
     <div style="padding: 1px 0 0 0;">
    <div class="card card--material">
      <div class="card__title card--material__title recipe_title_content">Spaghetti Vongole</div>
      <div class="card__content card--material__content recipe_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
    
    <div class="card card--material">
      <div class="card__title card--material__title recipe_title_content_two">Mise en Place</div>
      <div class="card__content card--material__content recipe_content_two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
    
    <div class="card card--material">
      <div class="card__title card--material__title recipe_title_content_two">Step 1</div>
      <div class="card__content card--material__content recipe_content_two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
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
  name: 'Recipes'
}
</script>
