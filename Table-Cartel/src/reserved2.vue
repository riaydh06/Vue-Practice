<template class="footer_show_hide">
    <v-ons-page>
        <v-header @gomenupage="menupage"></v-header>
        <div v-if="loadings" class="loadingrequest" v-cloak>
            <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
            <!--<span>Loading...</span>-->
        </div>
        <!--<div v-show="pageloading">-->
            <form v-on:submit.prevent="permit">
                <div class="reserve_background reserved_side">
                    <ons-row align="center">
                        <ons-col width="80%">
                            <div class="left_side_reserved_heading">
                                <h2>Reservations</h2>
                                <p>You’re almost there!</p>
                            </div>
                        </ons-col>
                        <ons-col width="20%">
                            <div class="reserved_cross_icon">
                                <!--  <i class="fa fa-times-circle-o" aria-hidden="true"></i> -->
                                <img @click="pop" :src="this.assets.icons.close" alt="close" />
                            </div>
                        </ons-col>
                    </ons-row>

                    <ons-row align="center" class="top_button_area">
                        <ons-col width="100%">
                            <div class="reserve_top_button_text">
                                <p>You want us to reserve your seats at</p>
                            </div>
                        </ons-col>
                        <ons-col width="100%">
                            <div class="reserve_top_button" v-on:click="hidefooter">
                                <!--<input type="text" class="text-input" v-model="restaurant" placeholder="Vapianos italian's gourment" value="">-->
                                <!--<p class="button button&#45;&#45;light">{{this.data.name}}</p>-->
                                
                                <!--<select v-model="restaurant_id" required="">-->
                                    <!--<option id="select_align"  v-for="item in sortedArray" v-bind:value="item.ID">{{ item.post_title }}</option>-->
                                <!--</select>-->
                                <v-select  v-model="selected" onfocus="this.placeholder=''" placeholder="Search your restaurant" :debounce="250" :on-search="getOptions"  :options="sortedArray"></v-select>

                            </div>
                        </ons-col>
                    </ons-row>
                    <ons-row align="center" class="top_second_button_area">
                        <ons-col width="100%">
                            <div class="reserve_top_second_button_text">
                                <p>It will be table/s for</p>
                            </div>
                        </ons-col>
                        <ons-col width="100%">
                            <div class="reserve_second_top_button" @click="hidefooter">
                                <input type="number"   class="text-input" v-model="people"  placeholder="Headcount" required  >
                                <!-- <button class="button button--light">Headcount</button> -->
                            </div>
                        </ons-col>
                    </ons-row>
                    <ons-row align="center" class="top_third_button_area">
                        <ons-col width="100%">
                            <div class="reserve_top_third_button_text">
                                <p>You will be joining them at</p>
                            </div>
                        </ons-col>
                        <ons-col width="35%">
                            <div class="reserve_third_top_button" @click="showfooter">
                                <!--<input type="date" class="text-input" placeholder="Headcount" value="">-->
                                <date-picker :date="date"  :option="option"  :limit="limit" class="datepicker text-input"  ></date-picker>
                                <!-- <button class="button button--light">DD/MM</button> -->
                            </div>
                        </ons-col>
                    </ons-row>
                    <ons-row align="center" class="reserve_button_area">
                        <ons-col width="100%">
                            <div class="reserve_button_text">
                                <button class="button button--light" type="submit">Reserve</button>
                            </div>
                        </ons-col>
                    </ons-row>

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
                        <div v-if="loadings" class="loadingp">
                            <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                            <!--<span>Loading...</span>-->
                        </div>
                    </modal>
                </div>
            </form>


            <!--Footer Carousel-->
            <div v-show="typing" >
                <v-carosel :title="title"></v-carosel>
            </div>

            <!--Footer Carousel-->
        <!--</div>-->




    </v-ons-page>
</template>



<script>
    import carosel from "./carosel"
    import header from "./header"
    import {assets} from './config'
    import Vue from 'vue';
    import axios from 'axios'
    import $ from 'jquery';
    import VModal from 'vue-js-modal';
    import myDatepicker from 'vue-datepicker';
    import swal from 'sweetalert'
    import vSelect from "vue-select"
    import menu from './menu'

    Vue.use(VModal)
    export default {
        name: 'reserved2',
        data () {
            return {
                title: "Today's Special",
                id: false,
                options: [],
                selected: null,
                name: this.$session.get('user'),
                email: this.$session.get('email'),
                typing: true,
                rest: '',
                restaurant_id: '',
                restaurant: '',
                people: '',
                mobile: '',
                order_time: '',
                confirm:'No',
                restaurants: [],
                loadings:false,
                pageloading: false,
                headcount: null,
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
                    format: 'DD/MM/YYYY HH:mm',
                    placeholder: 'DD/MM',
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
        mixins: [assets],
        methods:{
            getOptions(search, loading) {
                loading(true)
                this.$http.get( this.base_url + '/wp/v2/search/' + search + '/').then(resp => {
                    //console.log(JSON.stringify(resp.data))
                    //this.options = resp.data
                    this.restaurants = resp.data
                    console.log(this.restaurants)
                    this.options = []
                    var that = this;
                    this.restaurants.forEach(function(entrys) {
                        if(entrys.type == 'restaurant'){
                            if(that.options.length > 0){
                                console.log(that.options);
                                var thats = this;
                                that.id = false
                                that.options.forEach(function(entry){
                                    if(entrys.id != entry.id){
                                        that.id = true
                                    }
                                })
                                if(that.id == true){
                                    that.options.push(entrys)
                                    that.id = false
                                }

                            }
                            else{
                                that.options.push(entrys)
                            }
                            console.log(that.options)
                        }

                    });

                    loading(false)
                })
            },
//            fetchData () {
//                this.loadings = true
//                axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-rest-by-loc/0')
//                    .then((resp) => {
//                         console.log(resp.data)
//                        this.restaurants = resp.data
//                        console.log(this.restaurants)
//                        this.loadings = false
//                        this.pageloading = true
//                    })
//                    .catch((err) => {
//                        console.log(err)
//                    });
//            },
            onSubmit: function () {
                this.loadings = true
                this.$modal.show('loading-modal')
                if(this.date.time) {
                    axios.get('http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/get-single-rest/' + this.selected.value + '/')
                        .then((resp) => {
                            this.rest = resp.data
                            console.log('--------------------------------')
                            console.log(resp.data)
                            $.ajax({
                                method: "POST",
                                url: 'http://clients.itsd.com.bd/table-cartel/wp-json/Table-cartel/v1/orders',
                                data: {
                                    restaurant_id: this.selected.value,
                                    title: this.name,
                                    mobile: this.mobile,
                                    email: this.email,
                                    restaurant: this.rest.post_title,
                                    table_number: this.people,
                                    booking_time: this.date.time,
                                    confirm: this.confirm,
                                    username: 'itsd@dmin',
                                    password: 'itsd321#',
                                }
                            }).then((resp) => {
                                console.log(resp);
                                this.restaurant_id = ''
                                this.mobile= '';
                                this.people = '';
                                this.date.time = '';
                                this.loadings= false
                                this.$modal.hide('loading-modal');
                                //this.$modal.show('success-modal');
                                //alert('Reservation request submited.')
                                swal({
                                    title:"We are processing your request.",
                                    text: "We will notify ASAP!!",
                                    icon: this.assets.icons.reservation,
                                }).then((resp) => {
                                    for (this.i = 0; this.i <1; this.i++) {
                                        this.pageStack.pop()
                                    }
                                });

                            })
                                .catch((err) => {
                                    console.log(err)
                                    //this.$modal.show('error2-modal');
                                    this.$modal.hide('loading-modal');
                                    //alert('Reservation Failed')
                                    swal({
                                        title: "Oops!",
                                        text: "Reservation Failed",
                                        icon: "error",
                                    });
                                })
                        })
                        .catch((err) => {
                            console.log(err)
                        })

                }
                else{
                    console.log( 'empty' );
//                    this.$modal.show('error-modal');
                    this.$modal.hide('loading-modal');
                    //alert('There is an error')
                    swal({
                        title: "Oops!",
                        text: "There is an error",
                        icon: "error",
                    });
                }
            },
            mobilecheck(){
                swal({
                    content: {
                        element: "input",
                        attributes: {
                            placeholder: "Type your mobile number",
                            type: "number",
                        },
                    },
                }).then(mobile => {
                    var valueC = mobile
                    if (valueC != ""){
                        var bd_phone_no_regX = /^(?:\+?88)?0?1[15-9]\d{8}$/i;
                        if (bd_phone_no_regX.test(valueC)) {
                            valueC = '01' + valueC.substring(valueC.length - 9, valueC.length);
                            this.mobile = valueC;
                            swal({
                                title: "Are you sure?",
                                //text: "Once deleted, you will not be able to recover this imaginary file!",
                                icon: "info",
                                buttons: ["NO", "YES"],
                                dangerMode: true,
                            }).then((response) => {
                                if(response){
                                    this.onSubmit();
                                }
                                else{
                                    this.mobile= '';
                                    this.people = '';
                                    this.date.time = '';
                                    swal({
                                        title: "Oops",
                                        text: "You have canceled the reservation!",
                                        icon: "info",
                                    })
                                }
                            });
                        }
                        else{
                            swal({
                                title: "Oops",
                                text: "Not a mobile number",
                                icon: "warning",
                                buttons: ["CANCEL", "GO BACK"],
                            }).then((yes) =>{
                                if(yes){
                                    this.mobilecheck()
                                }
                            })
                        }
                    }
                    else{
                        swal({
                            title: "Oops",
                            text: "Mobile number is empty",
                            icon: "warning",
                            buttons: ["CANCEL", "GO BACK"],
                        }).then((yes) =>{
                            if(yes){
                                this.mobilecheck()
                            }
                        })
                    }

                })
            },
            permit(){
                if(this.date.time && this.selected) {
                    var check = this.headcountfunction()
                    console.log(check)
                    console.log(this.people)
                    if(this.people < check){
                        if(this.people > 0){
                            var days = this.date.time
                            const dateString = this.date.time;
                            const changedDate = dateString.replace(/(..)\/(..)\/(....) (..):(..)/, '$3-$2-$1 $4:$5');
                            var date = new Date(changedDate);
                            var requesttime = date.getTime()
                            console.log(requesttime);
                            var now = new Date();
                            var nowtime = now.getTime();
                            console.log(nowtime);

                            if(requesttime > nowtime){
                                this.mobilecheck()
                            }else{
                                swal({
                                    title: "Oops!",
                                    text: "You can't reserve at past time",
                                    icon: "error",
                                })
                            }
                        }else{
                            swal({
                                title: "Oops",
                                text: "Headcount number is invalid",
                                icon: "warning",
                            })
                        }
                    }else{
                        swal({
                            title: "Oops",
                            text: "Minimum headcount number is " + this.headcountfunction(),
                            icon: "warning",
                        })
                    }
                }
                else{
                    console.log( 'empty' );
                    //this.$modal.show('error-modal');
                    //alert('Time is empty')
                    swal({
                        title: "Oops!",
                        text: "Time or Restaurant is empty",
                        icon: "error",
                    });

                }
            },
            menupage (){
                this.pageStack.push(menu)
            },
            hidefooter (){
                this.typing = false
            },
            showfooter (){
                this.typing = true
            },
            pop () {
                this.pageStack.pop()
            },
            headcountfunction(){
                console.log(this.selected.restaurant_minimum)
                if(this.selected.restaurant_minimum){
                    this.headcount = parseInt(this.selected.restaurant_minimum)
                }else{
                    this.headcount = 30
                }
                return this.headcount
            }
        },
        components: {
            'date-picker': myDatepicker,
            'v-select': vSelect,
            'v-carosel':carosel,
            'v-header':header,
        },
        computed: {
            sortedArray: function() {
                function compare(a, b) {
                    if (a.label < b.label)
                        return -1;
                    if (a.label > b.label)
                        return 1;
                    return 0;
                }

                return this.options.sort(compare);
            }
        },
        props: ['pageStack']
    }
</script>
<style scoped>
    .text-input:invalid {
        border: none;
        background-color: white;
        color: #1f1f21;
    }
    ::placeholder{
        color:black;
        text-transform: uppercase;
        font-size:10px;
        /*font-weight: bold;*/
        font-family: 'Nunito', sans-serif;
        padding-top:-3px;
    }
    .button{
        float:left;
    }
    .loadingrequest{
        text-align: center;
        color: #009688;
        font-size: 13px;
        margin-top: 300px;
        margin-bottom: 100px;
    }

    .loadingp{
        text-align: center;
        color: #009688;
        font-size: 13px;
        /*color: white;*/
        /*margin-top: 250px;*/
        /*margin-bottom: 150px;*/
    }

    .v--modal-box>.v--modal{
        top:275px;
    }

    .swal-icon img {
        max-width: 85% !important;
    }
</style>