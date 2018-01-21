<template>
  <div>
    <div style="background-color: #fff; padding: 1px 0 0 0;">
    <div class="card">
      <div class="settings_settings">
      <div class="settings_left_icon">
        <a href="profile.html">     
          <ons-icon
            icon="fa-angle-left"
            size="20px"
            fixed-width="false">
          </ons-icon>
        </a>
      </div>
      <div class="settings_content"><a href="index.html">Settings</a></div>
      <div class="settings_right_icon">
        <a href="settings.html"><img src="istatic/assets/mg/svgicon/plus.svg" alt="plus icon" /></a>
      </div>
      
    </div>   
    </div>
  </div>

  <div class="settings_main_content_area">
    <div class="settings_content_all">
    
      
      <ons-template id="tab1.html">
        <ons-page>


        <p style="text-align: center;">
         <div class="settings_profile_content">
          <div class="settigs_profile_photo">
            <img src="static/assets/img/profile.jpg" alt="" />
          </div>
          <div class="text_input_bg">
            <input class="text-input form_width" placeholder="First Name" type="text" required>
            <input class="text-input form_width" placeholder="Last Name" type="text" required>
            <input class="text-input form_width" placeholder="Username" type="text" required>
            <input class="text-input form_width" placeholder="About You" type="text" required>
            <input class="text-input form_width" placeholder="Location" type="text" required>
            <input class="text-input form_width" placeholder="Website" type="text" required>
          </div>
        </div>
        </p>
        </ons-page>
      </ons-template>

      <ons-template id="tab2.html">
        <ons-page>
        <ons-toolbar>
          <div class="center"></div>
        </ons-toolbar>
        
        
        
        
        <p style="text-align: center;">
         <div class="intro_login_form">
            <div><input type="text" class="username-input intro_username" placeholder="User Name" value=""></div>
            <hr style="margin: 0;
          background: #45454580;
          border: none;"/>
          <div><input type="password" class="pass-input intro_password" placeholder="Password" value="" ></div>
        </div>
        </p>
        
        
        </ons-page>
      </ons-template>

      
      <ons-template id="tab3.html">
        <ons-page>

          <div class="center friend_circle">
          <ons-tabbar class="friend_circle_social_connect">
            <ons-tab label="Contact" page="contact">
            </ons-tab>
            <ons-tab label="Facebook" page="facebook" active>
            </ons-tab>
            <ons-tab label="Twitter" page="twitter">
            </ons-tab>
            <ons-tab label="Google" page="google" active>
            </ons-tab>
          </ons-tabbar>
      
          </div>
          <ons-template id="google" class="google_friend_settings">
            <ons-page>
            <div class="friend_circle_content" id="">
              <p style="text-align: center;">
                <div class="google_friends_section">
                  <h2>Got Friends Who Love Food ?</h2>
                  <p>Tell Theme about your gestronomic advanture</p>
                  <div class="connect_address_book">
                    <a href="">Connect to your address book</a>
                  </div>
                  <div class="connect_to_your_connect_account">
                    <a href="">Connect to your <img src="static/assets/img/connect.jpg" alt="" /> account</a>
                  </div>
                </div>
              </p>
            </div>
            </ons-page>
          </ons-template>
          
          <ons-template id="twitter">
            <ons-page>
            <div class="friend_circle_content" id="">
            <p style="text-align: center;">
              Got Friends Who Love food and others
             
            </p>
            </div>
            </ons-page>
          </ons-template>
          
          <ons-template id="facebook">
            <ons-page>
            <div class="friend_circle_content" id="">
            <p style="text-align: center;">
              Got Friends Who Love food and facebook
            </p>
            </div>
            </ons-page>
          </ons-template>
          
          <ons-template id="contact">
            <ons-page>
            <div class="friend_circle_content" id="">
            <p style="text-align: center;">
              Got Friends Who have contact list
            </p>
            </div>
            </ons-page>
          </ons-template>
          
        </ons-page>
      </ons-template>
      
        
      <ons-tabbar>
        <ons-tab label="Profile" page="tab1.html">
        </ons-tab>
        <ons-tab label="Settings" page="tab2.html" active>
        </ons-tab>
        <ons-tab label="Friends" page="tab3.html">
        </ons-tab>
      </ons-tabbar>
      
    </div>
  </div>




      <div class="settings_footer_section footer_settings">
        <div class="settings_footer">
          <ul class="list">
            <li class="list-item">
            <div class="list-item__center"><a href="">Help Center</a></div>
            </li>
            <li class="list-item">
            <div class="list-item__center"><a href="">Terms & Condition</a></div>
            </li>
            <li class="list-item">
            <div class="list-item__center"><a href="">Logout</a></div>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Setting'
}
</script>
