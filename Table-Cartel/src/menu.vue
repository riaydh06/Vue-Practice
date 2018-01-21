<template>
    <v-ons-page id="gray_bg">
        <div class="login_bg">
            <ons-row align="left" class="menu_header_area">
                <ons-col width="85%">
                    <div class="menu_header">                        
                       <h2>Menu</h2>
                       <p>Select any of the service below</p>
                       <strong>Today {{day}} of {{month}} {{year}}</strong>
                    </div>
                </ons-col>
                <ons-col width="15%">
                    <div @click="pop" class="back_icon">
                       <img  :src="this.assets.icons.menuback" alt="icon" />
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="left" class="menu_button_area">
                <ons-col width="100%">
                    <div class="menu_button">
                        <button class="button button--light">Discover</button>
                        <button class="button button--light">Benefits</button>
                        <button class="button button--light">Ingredients</button>
                        <button class="button button--light">Recipes</button>
                        <button class="button button--light">Mastercalss</button>
                        <button class="button button--light">Marketplace</button>
                        <button  @click="logout" class="button button--light" style="color: red">Logout</button>
                    </div>
                </ons-col>
            </ons-row>
            <div class="menu_footer_fixed">
                <ons-row align="left" class="menu_connect_area">
                    <ons-col width="100%">
                        <div class="menu_connect_button">
                            <button class="button button--light"><img :src="this.assets.icons.connect" alt="" /></button>
                        </div>
                    </ons-col>
                </ons-row>
                <div class="card card--material">
                    <div class="card__content card--material__content">
                        <ons-row align="center" class="menu_footer_area">
                            <ons-col width="15%">
                                <div class="menu_footer_left_icon">
                                   <img :src="this.assets.icons.account" alt="" />
                                </div>
                            </ons-col>
                            <ons-col width="35%">
                                <div class="menu_footer_notifications">
                                    <p>Notifications<br /> & Updates</p>
                                </div>
                            </ons-col>
                            <ons-col width="35%">
                                <div class="menu_footer_settings">
                                   <p>Settings & Preferences</p>
                                </div>
                            </ons-col>
                            <ons-col width="15%">
                                <div class="menu_footer_right_icon">
                                  <img :src="this.assets.icons.settings" alt="" />
                                </div>
                            </ons-col>
                        </ons-row>
                        <ons-row align="center" class="menu_footer_row">
                            <ons-col width="100%">
                                <div class="menu_footer_row_black">

                                </div>
                            </ons-col>
                        </ons-row>
                    </div>
                </div>
            </div>
        </div>
    </v-ons-page>
</template>



<script>
    import {assets} from './config'
    import axios from 'axios'
    export default {
        name: 'menu',
        data () {
            return {
                i: 0,
                restaurant: {},
                loading:false,
                day : this.daycal(),
                month: this.monthcal(),
                year: this.yearcal(),
                page: '',
            }
        },
        mixins:[assets],
        methods: {
            pop() {
                this.pageStack.pop();
            },
            daycal(){
                var date = new Date();
                var day = date.getDate()
                var d = date.getDate()

                if(d>3 && d<21) d = 'th'; // thanks kennebec
                switch (d % 10) {
                    case 1:  d = "st";
                    case 2:  d = "nd";
                    case 3:  d = "rd";
                    default: d = "th";
                }
                var days = day + d
                return days;
            },
            monthcal() {
                var months = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
                var date = new Date();
                var day = months[date.getMonth()];
                return day;
            },
            yearcal(){
                var date = new Date();
                var year = date.getFullYear();
                return year;
            },
            logout () {
                var that = this
                facebookConnectPlugin.logout(function(data){
                    //alert(JSON.stringify(data));
                    swal({
                        title: "Oops!",
                        text: "Logout",
                        icon: "success",
                    }).then((res)=>{
                        that.page = that.pageStack.length
                        for (that.i = 1; that.i < that.page; that.i++) {
                        that.pageStack.pop()
                    }
                    })
                },function(error){
                    //alert(JSON.stringify(error));
                    swal({
                        title: "Oops!",
                        text: "There is an error",
                        icon: "error",
                    });
                });
            },
        },
        computed:{

        },
        props: ['pageStack']
    }
</script>
<style scoped>
    .login_bg{
        background:#f3f5f7 !important;
        height:100%;

    }

    ::placeholder{
    color:#444;
    font-family: 'Nunito', sans-serif;
    font-weight:bold;
    }
    .button{
        float:left;
    }
   .card--material{
            border-radius: 12px;
    }

</style>