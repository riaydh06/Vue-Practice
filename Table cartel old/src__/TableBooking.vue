<template>
    <v-ons-page id='mypage'>
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
                    <div class="settings_content"><p>Table booking</p></div>
                    <div class="settings_right_icon">
                        <img :src="pluslogo" alt="plus icon"/>
                    </div>

                </div>
            </div>
        </div>

        <!--search header area end-->
        <div class="table_booking_bg_another">
            <div class="table_booking_form">
                <form v-on:submit.prevent="permit">
                    <input type="hidden"  v-model="restaurant_id = rest.ID">
                    <input type="hidden"  v-model="restaurant = rest.post_title">
                    <li><i class="fa fa-user-o"></i><input class="text-input" v-model="name" id="my-input" type="text" placeholder="Name.." required></li>
                    <li><i class="fa fa-envelope-o"></i><input class="text-input" v-model="email" id="my-input" type="email" placeholder="Email.." required></li>
                    <li><i class="fa fa-phone-square"></i><input class="text-input"  v-model="mobile" id="my-input" type="number" placeholder="Mobile.." required></li>
                    <!--<li><i class="fa fa-home"></i><input class="text-input" :value="rest.post_title"  v-model="restaurant" id="my-input" type="text" placeholder="Restaurent.." required></li>-->
                    <li><i class="fa fa-th-large"></i><input class="text-input" v-model="table_number" id="my-input" type="number" placeholder="Number Of People..." required></li>
                    <li><i class="fa fa-calendar"></i> <date-picker :date="date" :option="option" :limit="limit" class="datepicker"  ></date-picker></li>
                    <li><i class="fa fa-send"></i><input value="Order Now" class="submit_bg" type="submit"></li>
                </form>
                <modal name="permit-modal"
                       transition="nice-modal-fade"
                       :min-width="200"
                       :min-height="200"
                       :pivot-y="0.65"
                       width="60%"
                       height="auto"
                       :delay="100"
                >
                    <div class="example-modal-content">
                        <div class="dialogs"> <font color="green"> <center>Tablebooking ???</center> </font></div>
                        <button class="yes_button" @click="onSubmit">YES</button>
                    </div>
                </modal>
                <modal name="success-modal"
                       transition="nice-modal-fade"
                       :min-width="200"
                       :min-height="200"
                       :pivot-y="0.65"
                       width="60%"
                       height="auto"
                       :delay="100"
                >
                    <div class="example-modal-content">
                        <div class="dialogs"> <font color="green"> <center>Tablebooking Success</center> </font></div>
                        <button class="yes_button" @click="pop">OK</button>
                    </div>
                </modal>
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
                        <font color="#8b0000"> <center>Booking Time is Empty.</center> </font>
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
                <!--<button @click="getHumanDate()">Simple</button>-->

                <div class="card">
                    <div class="intro_logo">
                        <img :src="tablecartellogo" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <!--<h2 v-html="rest.post_title"></h2>-->

        <div class="footer_logos_area updates_section_footer table_booking_footer">
            <div class="footer_logos_width">
                <div class="footer_logo">
                    <ul>
                        <li class="home-logo_footer_img"><img :src="logo1" alt="logo"/></li>
                        <li class=""><img :src="logo2" alt="logo"/></li>
                        <li class=""><img :src="logo3" alt="logo"/></li>
                        <li class=""><img :src="logo4" alt="logo"/></li>
                        <li class=""><img :src="logo5" alt="logo"/></li>
                        <li class=""><img :src="logo6" alt="logo"/></li>
                        <li class=""><img :src="logo7" alt="logo"/></li>
                        <li class=""><img :src="logo9" alt="logo"/></li>
                    </ul>
                </div>
            </div>
        </div>
    </v-ons-page>
</template>

<script>
    import axios from 'axios'
    import tablecartel from 'assets/tablecartel.png'
    import foot1 from 'assets/img/icon/footerlogo/1.png';
    import foot2 from 'assets/img/icon/footerlogo/2.png';
    import foot3 from 'assets/img/icon/footerlogo/3.png';
    import foot4 from 'assets/img/icon/footerlogo/4.png';
    import foot5 from 'assets/img/icon/footerlogo/5.png';
    import foot6 from 'assets/img/icon/footerlogo/6.png';
    import foot7 from 'assets/img/icon/footerlogo/7.png';
    import foot9 from 'assets/img/icon/footerlogo/9.png';
    import plus from 'assets/img/icon/plus.png';
    import myDatepicker from 'vue-datepicker';
    import VModal from 'vue-js-modal';
    import $ from 'jquery';
    import Vue from 'vue';
    import moment from 'moment';
    import VueResource from 'vue-resource';
    Vue.use(VModal)

    export default {
        name: 'FoodTexo',
        data() {
            return {
                rest: {},
                logo1: foot1,
                logo2: foot2,
                logo3: foot3,
                logo4: foot4,
                logo5: foot5,
                logo6: foot6,
                logo7: foot7,
                logo9: foot9,
                name: '',
                mobile: '',
                email: '',
                restaurant: '',
                table_number: '',
                booking_time: '',
                post_title: '',
                post_content: '',
                confirm: 'No',
                pluslogo: plus,
                loading: false,
                pageloading: false,
                tablecartellogo: tablecartel,
                caldate: '',
                restaurant_id: '',
                yesterday: '',
                startTime: {
                    time: ''
                },
                endtime: {
                    time: ''
                },
                option: {
                    type: 'min',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'YYYY-MM-DD HH:mm',
                    placeholder: 'when?',
                    required: true,
                },
                limit: [{},
                    {
                        type: 'fromto',
                        from: new Date(new Date() -1 * 86400000),
                        to: '2040-02-20'
                    }],
                date: {
                    time: ''
                },
                required: true
            }
        },
        created () {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            onSubmit: function () {
                this.loading= true
                this.$modal.hide('permit-modal')
                this.$modal.show('loading-modal')
                if(this.date.time) {
                    $.ajax({
                        method: "POST",
                        url: 'http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/orders',
                        data: {
                            restaurant_id: this.restaurant_id,
                            title: this.name,
                            name: this.name,
                            mobile: this.mobile,
                            email: this.email,
                            restaurant: this.restaurant,
                            table_number: this.table_number,
                            booking_time: this.date.time,
                            confirm: this.confirm,
                            username: 'itsd@dmin',
                            password: 'itsd321#',
                        }
                    }).then((resp) => {
                        console.log(resp);
                        this.name= '';
                        this.mobile= '';
                        this.email= '';
                        this.table_number= '';
                        this.date.time = '';
                        this.loading= false
                        this.$modal.hide('loading-modal');
                        this.$modal.show('success-modal');
                    })
                        .catch((err) => {
                            console.log(err)
                            this.$modal.show('error2-modal');
                        })
                }
                else{
                    console.log( 'empty' );
                    this.$modal.show('error-modal');
                }


            },
            fetchData () {
//                this.loading = true
                axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-single-rest/' + this.data.id + '/')
                    .then((resp) => {
                        this.rest = resp.data
//                        console.log('--------------------------------')
//                        console.log(resp.data)
//                        this.loading = false
//                        this.pageloading = true
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            pop() {
                this.pageStack.pop();
            },
            getHumanDate : function (date) {
                //this.caldate = new Date();
                this.yesterday = new Date(new Date() -1 * 86400000);
                console.log(this.yesterday);
            },
            permit(){
                if(this.date.time) {
                    this.$modal.show('permit-modal');
                }
                else{
                    console.log( 'empty' );
                    this.$modal.show('error-modal');
                }
            },
        },
        components: {
            'date-picker': myDatepicker,
        },
        props: ['pageStack'],

    }


</script>

<style scoped>
    .updates_section_footer {
        position: fixed;
        margin-bottom: 0px;
    }

    .catagories_customise p {
        margin-top: 56px;
    }
    .datepicker {
        width: 93% !important;

    }
    .datepicker input::-webkit-input-placeholder{
        color: #9d9d9d;

    }
    .table_booking_form form li i{
        float: left;
        width: 2%;
        margin-top: 1px;
        color: #131313;
        text-align: left;
        padding: 5px 4px;
        background: transparent;
        margin-left: 4px;
    }
    .text-input:invalid {
        border-bottom: 1px solid rgba(120, 120, 120, 0.2);
        padding-left: 8px !important;
    }
    .table_booking_form input{
        width:87% !important;
        margin:0px 10px !important;
        border-left: 1px solid #ddd;
    }
    .table_booking_form form li{
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 42px;
        list-style: none;
        margin-bottom: 5px !important;
        width: 94%;
        margin: auto;


    }
    .datepickbox input{
        border:none;
        border-left:1px solid #ddd;

    }
    /*.v--modal-overlay[data-modal="error-modal"] {*/
        /*background: cyan;*/
    /*}*/
    .button-box[data-v-321c865c] {
        height: 108px !important;
    }
    .week ul li[data-v-321c865c] {
        width: 13.2% !important;
    }
    .yes_button{
        background: black;
        border: 1px solid rgba(255, 255, 255, 0.86);
        color: #fff;
        padding: 4px 20px;
        width: 100%;
        margin-top: 8px

    }
    .home-logo_footer_img img{
        width: 50px !important;
        margin-top: -7px !important;
        margin-left: -8px !important;
    }
    .table_booking_footer{
        margin-bottom: -15px;
    }
    .dialogs{
        margin-top: 6px;
    }
    .errors{
        margin: 6px;
    }
    .loadingp{
        text-align: center;
        color: white;
        /*margin-top: 250px;*/
        /*margin-bottom: 150px;*/
    }

</style>
