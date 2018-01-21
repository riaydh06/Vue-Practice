<template>
<div>
	<div style="background-color: #171717; padding: 1px 0 0 0;">
	  <div class="card">
	    	<div class="intro_logo">
			<a href=""><img src="static/assets/img/table_cartellogo.svg" alt="" /></a>
		</div>
	    
	  </div>
	</div>

	<div class="intro_login_form">
		<div><input type="text" class="username-input intro_username" placeholder="User Name" value=""></div>
		<hr style="margin: 0;
	background: #45454580;
	border: none;"/>
		<div><input type="password" class="pass-input intro_password" placeholder="Password" value="" ></div>
	</div>

	<div style="background-color: #171717; height: 300px; padding: 1px 0 0 0;">
	  <div class="card">
	    <div class="intro_footer">
			<p>Log In With:</p>
		</div>
	    <div class="card__content intro_footer_social">
			<ul>
				<li><a href=""><ons-icon icon="md-google-plus"></ons-icon></a></li>
				<li><a href=""><ons-icon icon="md-facebook" class="facebook-icon"></ons-icon></a></li>
			</ul>
			
		</div>
		<div class="connect_link">
			<a href=""><img src="static/assets/img/connect.jpg" alt="" /></a>	
		</div>
	  </div>

	  
	</div>
	 <div class="intro_footer_text">
		<p>Copy Right &copy; 2015-2016. www.tablecartel.com all right reserved.</p>
	</div>	
</div>
</template>
<script>
  export default {
    name: 'Login'
  }
</script>
