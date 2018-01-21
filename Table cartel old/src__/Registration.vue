<template>
    <v-ons-page>
        <div style="background-color: rgb(255, 255, 255);
    padding: 0px 0px 8px 0px;
    position: fixed;
    width: 100%;
margin-top: -16px;">
            <div class="card">
                <div class="settings_settings">
                    <div class="settings_left_icon">
                        <a @click="pop">
                            <ons-icon
                                    icon="fa-angle-left"
                                    size="20px"
                                    fixed-width="false">
                            </ons-icon>
                        </a>
                    </div>
                    <div class="settings_content"><p>Register</p></div>
                    <div class="settings_right_icon">
                        <img :src="pluslogo" alt="plus icon"/>
                    </div>

                </div>
            </div>
        </div>
        <br>
        <form v-on:submit.prevent="permit" >
            <div class="intro_login_form">
                <div><input type="text" v-model="user" class="username-input intro_username" placeholder="User Name" required value=""></div>
                <hr style="margin: 0;
		background: #45454580;
		border: none;"/>
                <div><input type="Email" v-model="email" class="username-input intro_username" placeholder="Email" required value=""></div>
                <hr style="margin: 0;
		background: #45454580;
		border: none;"/>
                <div><input type="number" v-model="mobile" class="pass-input intro_password" placeholder="Mobile" required value="" ></div>
                <hr style="margin: 0;
		background: #45454580;
		border: none;"/>
                <div><input type="password" v-model="pass1" class="pass-input intro_password" placeholder="Password" required value="" ></div>
                <hr style="margin: 0;
		background: #45454580;
		border: none;"/>
                <div><input type="password" v-model="pass2" class="pass-input intro_password" placeholder="Confirm Password" required value="" ></div>
            </div>
            <div class="signup_signin">
                <button class="home_signup" type="submit">Sign Up</button>
                <!--<ons-button  class="home_signup" v-on:submit.prevent="register" type="submit">Sign Up</ons-button>-->
            </div>
        </form>

        <div style="background-color: #171717; height: 205px; padding: 1px 0 0 0;">
            <div class="card">
                <div class="intro_logo">
                   <img :src="tablecartellogo" alt="" />
                </div>
            </div>
        </div>
        <modal name="permit-modal"
               transition="nice-modal-fade"
               :min-width="200"
               :min-height="200"
               :pivot-y="0.75"
               width="60%"
               height="auto"
               :delay="100"
        >
            <div class="example-modal-content">
                <div class="dalogs"> <font color="green"> <center>Continue... ??</center> </font></div>
                <button class="yes_button" @click="register">YES</button>
            </div>
        </modal>
        <modal name="success-modal"
               transition="nice-modal-fade"
               :min-width="200"
               :min-height="200"
               :pivot-y="0.75"
               width="60%"
               height="auto"
               :delay="100"
        >
            <div class="example-modal-content">
                <div class="dalogs"><font color="green"> <center>Resistration Success</center> </font></div>
                <button class="yes_button" @click="pop">OK</button>
            </div>
        </modal>
        <modal name="error-modal"
               transition="nice-modal-fade"
               :min-width="200"
               :min-height="200"
               :pivot-y="0.75"
               width="60%"
               height="auto"
               :delay="100"
        >
            <div class="example-modal-content errors">
               <font color="#8b0000"> <center>Password Not Match.</center> </font>
            </div>
        </modal>
        <modal name="error2-modal"
               transition="nice-modal-fade"
               :min-width="200"
               :min-height="200"
               :pivot-y="0.65"
               width="60%"
               height="auto"
               :delay="100"
        >
            <div class="example-modal-content errors">
                <font color="#8b0000"> <center>Tablebooking Failed</center> </font>
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
                <font color="#8b0000"> <center>Username is allready exist.</center> </font>
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

        <div class="intro_footer_text register-footer">
            <p>Copy Right &copy; 2015-2016. www.tablecartel.com all right reserved.</p>
        </div>
    </v-ons-page>
</template>
<script>
    import connect from 'assets/connect.jpg'
    import tablecartel from 'assets/tablecartel.png'
    import plus from 'assets/img/icon/plus.png';
    import axios from 'axios'
    import $ from 'jquery';
    import VueResource from 'vue-resource';
    import VModal from 'vue-js-modal';
    export default {
        name: 'Registration',
        data () {
            return {
                tablecartellogo: tablecartel,
                connectlogo: connect,
                user: '',
                email: '',
                mobile: '',
                pass1: '',
                pass2: '',
                pluslogo: plus,
                loading: false,
                logindata: '',
            }
        },
        methods: {
           register (){
               this.$modal.hide('permit-modal')
               this.loading = true
               this.$modal.show('loading-modal')
//               axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-app-username/' + this.user + '/')
               $.ajax({
                   method:'POST',
                   url:'http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-app-username/',
                   data: {
                       username: 'itsd@dmin',
                       password: 'itsd321#',
                       user: this.user
                   }
               })
                   .then((response) => {
                       this.loading = false
                       this.$modal.hide('loading-modal')
                       this.logindata = response.length
                       console.log('--------------------------------')
                       console.log(this.logindata);
                       if(this.logindata <= 0){
                           this.$modal.hide('permit-modal')
                           this.loading = true
                           this.$modal.show('loading-modal')
                           $.ajax({
                               method:'POST',
                               url:'http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/post-app-users/',
                               data: {
                                   username: 'itsd@dmin',
                                   password: 'itsd321#',
                                   user: this.user,
                                   email: this.email,
                                   mobile: this.mobile,
                                   pass: this.pass1,
                                   title: this.user,
                               }
                           }).then((resp)=>{
                               console.log('****');
                               console.log(resp);
                               this.user = '',
                                   this.email ='',
                                   this.mobile ='',
                                   this.pass1 = '',
                                   this.pass2 = ''
                               this.loading = false
                               this.$modal.hide('loading-modal');
                               this.$modal.show('success-modal');
                           }).catch((err)=>{
                               console.log(err);
                               this.$modal.hide('loading-modal');
                               this.$modal.show('error2-modal');
                           })
                       }else{
                           console.log('Username is allready exist');
                           this.$modal.hide('permit-modal')
                           this.$modal.show('username-modal');
                       }
                   })
                   .catch((err) => {
                       console.log(err)
                       this.$modal.hide('loading-modal');
                       this.$modal.show('error2-modal');
                   })


           },
            permit(){
                if(this.pass1==this.pass2) {
                    this.$modal.show('permit-modal');
                }
                else{
                    console.log( 'empty 2' );
                    this.$modal.show('error-modal');
                }
            },
            pop() {
                this.pageStack.pop();
            },
        },
        props:['pageStack']
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
    .intro_logo{
        margin-bottom: 50px;
    }
    .intro_login_form {
        margin-top: 19px;
    }
    .v--modal-overlay[data-modal="error-modal"] {
        /*background: cyan;*/
    }
     .v--modal-box {
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        width: 50% !important;
        background: #000;
        margin: auto;
        height: 20% !important;
        top: 70% !important;
        padding: 10px;
    }
    .yes_button{
        background: black;
        border: 1px solid rgba(255, 255, 255, 0.86);
        color: #fff;
        padding: 4px 20px;
        width: 100%;
        margin-top: 8px

    }
    /*.v--modal-overlay>.v--modal-box {*/
        /*position: relative;*/
        /*overflow: hidden;*/
        /*box-sizing: border-box;*/
        /*background: rgb(255, 255, 255);*/
        /*width: 64% !important;*/
        /*height: 10% !important;*/
        /*padding-top: 15px;*/
        /*margin: auto;*/
        /*top: 37% !important;*/
    /*}*/
    .register-footer{
        margin-top: 49px;
    }
    .errors{
        margin: 6px;
    }
    .dalogs{
        margin-top: 6px;
    }
    .loadingp{
        text-align: center;
        color: white;
    }


</style>
