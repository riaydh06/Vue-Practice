<template>
	<v-ons-page>
		<div style="background-color: #171717; padding: 1px 0 0 0;">
		  <div class="card">
				<div class="intro_logo">
				<img :src="tablecartellogo" alt="" />
			</div>

		  </div>
		</div>
		<form v-on:submit.prevent="login">
			<div class="intro_login_form">
				<div><input type="text" class="username-input intro_username" v-model="user" required placeholder="User Name" value=""></div>
				<hr style="margin: 0;
			background: #45454580;
			border: none;"/>
				<div><input type="password" class="pass-input intro_password" v-model="pass" required placeholder="Password" value="" ></div>
			</div>
			<div class="signup_signin">
					<button class="home_signin" type="submit">Sign In</button>
			</div>

		</form>
		<div class="signup_signin">
			<button @click="register" class="home_signup">Sign Up</button>
		</div>
		<modal name="error-modal"
			   transition="nice-modal-fade"
			   :min-width="200"
			   :min-height="200"
			   :pivot-y="0.65"
			   width="60%"
			   height="auto"
			   :delay="100"
		>
			<div class="example-modal-content errors">
				<font color="#8b0000"> <center>There is an error</center> </font>
			</div>
		</modal>
		<modal name="username-modal"
			   transition="nice-modal-fade"
			   :min-width="200"
			   :min-height="200"
			   :pivot-y="0.75"
			   width="60%"
			   height="auto"
			   :delay="100"
		>
			<div class="example-modal-content errors">
				<font color="#8b0000"> <center>Invalid Username or Password.</center> </font>
			</div>
		</modal>
		<modal name="loading-modal"
			   transition="nice-modal-fade"
			   :min-width="200"
			   :min-height="200"
			   :pivot-y="0.45"
			   width="60%"
			   height="auto"
			   :delay="100"
			   classes="false"
		>
			<div v-if="loading" class="loadingp">
				<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
				<!--<span>Loading...</span>-->
			</div>
		</modal>

		<div style="background-color: #171717; height: 215px; padding: 1px 0 0 0;">
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
				<a href=""><img :src="connectlogo" alt="" /></a>
			</div>
		  </div>
		</div>

		<!--<div v-if="loading" class="loadingp" v-cloak>-->
			<!--<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>-->
			<!--<span>Loading...</span>-->
		<!--</div>-->

		<div class="intro_footer_text">
			<p>Copy Right &copy; 2015-2016. www.tablecartel.com all right reserved.</p>
		</div>
	</v-ons-page>
</template>
<script>
    import TableCartel from './TableCartel';
	import connect from 'assets/connect.jpg';
	import tablecartel from 'assets/tablecartel.png';
	import Registration from './Registration';
    import Search from './Search';
    import axios from 'axios';
    import $ from 'jquery';
    import VueResource from 'vue-resource';
    import VModal from 'vue-js-modal';
  export default {
    name: 'Login',
    data () {
        return {
            tablecartellogo: tablecartel,
            connectlogo: connect,
            user: '',
            pass: '',
			logindata: '',
            loading: false
		}
	},
    beforeCreate (){
//        alert("beforeCreate #1");
    },
	methods: {
        register (){
           this.pageStack.push(Registration);
		},
		login (){
            this.loading = true
            this.$modal.show('loading-modal')
            $.ajax({
                method:'POST',
                url:'http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-all-app-users/',
                data: {
                    user: this.user,
                    pass: this.pass,
                }
            }).then((resp)=>{
//                    this.logindata = resp.data.length
				this.logindata = resp.length
					console.log('--------------------------------')
					console.log(resp);
					console.log(this.logindata);
					this.loading = false
				if(this.logindata == 1){
					this.username = '';
					this.password = '';
					this.pageStack.push(TableCartel);
				}
				else{
					console.log('there is an error')
					this.$modal.hide('loading-modal')
					this.$modal.show('username-modal')
				}
//                        this.loading = false
//
			})
			.catch((err) => {
				console.log(err)
				this.loading = false
				this.$modal.hide('loading-modal')
				this.$modal.show('error-modal')
			})
		}
	},
      props: ['pageStack'],
  }
</script>
<style scoped>
	.intro_footer_social ul li a ons-icon {
		color: #171717;
		padding: 4px;
		background: #fff;
		width: 24px;
		height: 21px;
		text-align: center;
		border-radius: 50%;
		font-size: 20px;
		padding-top: 6px;
	}
	.home_signin, .home_signup{
		/*width:49.31%;*/
		width:100%;
		margin:0;
		text-align:center;
		background: #000;
		text-transform: uppercase;
		font-size: 12px;
		padding: 12px;
		color: white;
		border: none;
	}
	.signup_signin{
		margin-top:12px;

	}
	.intro_footer_text {
		padding: 10px 0px;
	}
	.loadingp{
		text-align: center;
		color: white;
	}
	.intro_logo {
		width: 90%;
		margin: auto;
		margin-bottom: 25px;
	}

</style>
