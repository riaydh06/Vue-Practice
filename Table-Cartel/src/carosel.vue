<template>
        <div class="cuisine_footer_carousel">
            <ons-row class="nay_carousel_heading">
                <p>{{title}}</p>
            </ons-row>
            <ons-carousel fullscreen swipeable auto-scroll overscrollable id="carousel">
                <ons-carousel-item v-for="(item,index) in food['foods']"  style="background-color: #085078;">
                    <div class="image_footer">
                        <a href="" v-if="item.img"><img v-bind:src="item.img" /></a>
                        <a href="" v-else>
                            <div v-if="index==0">
                                <img :src="footercarousel" />
                            </div>
                            <div v-else-if="index==1">
                                <img :src="footercarousel2" />
                            </div>
                            <div v-else-if="index==2">
                                <img :src="footercarousel3" />
                            </div>
                            <div v-else-if="index==3">
                                <img :src="footercarousel4" />
                            </div>
                            <div v-else-if="index==4">
                                <img :src="footercarousel5" />
                            </div>
                            <div v-else-if="index==5">
                                <img :src="footercarousel6" />
                            </div>
                            <div v-else-if="index==6">
                                <img :src="footercarousel7" />
                            </div>
                            <div v-else-if="index==7">
                                <img :src="footercarousel8" />
                            </div>
                            <div v-else-if="index==8">
                                <img :src="footercarousel9" />
                            </div>
                            <div v-else>
                                <img :src="footercarousel10" />
                            </div>
                        </a>
                        <!--<img :src="footercarousel" alt="" />-->
                        <div class="image_overlay_content">
                            <h4 v-html="item.short_title"></h4>
                            <p v-html="item.short_content"> </p>
                        </div>
                    </div>
                </ons-carousel-item>

            </ons-carousel>
        </div>
</template>
<script>
    import carousel from "assets/carousel.jpg"
    import carousel2 from "assets/carousel2.jpg"
    import carousel3 from "assets/carousel3.jpg"
    import carousel4 from "assets/carousel4.jpg"
    import carousel5 from "assets/carousel5.jpg"
    import carousel6 from "assets/carousel6.jpg"
    import carousel7 from "assets/carousel7.jpg"
    import carousel8 from "assets/carousel8.jpg"
    import carousel9 from "assets/carousel9.jpg"
    import carousel10 from "assets/carousel10.jpg"
    import {dataBus} from './static/assets/js/custom.js';
    import axios from 'axios'
    export default {
       data(){
           return{
               footercarousel: carousel2,
               footercarousel2: carousel3,
               footercarousel3: carousel10,
               footercarousel4: carousel4,
               footercarousel5: carousel5,
               footercarousel6: carousel6,
               footercarousel7: carousel7,
               footercarousel8: carousel8,
               footercarousel9: carousel9,
               footercarousel10: carousel,
               food: dataBus.$data,
           }
       },
        created () {
           console.log(this.title)
        },
        props: ['title'],
//        methods: {
//            fetchData() {
//                axios.get( this.base_url +  '/Table-cartel/v1/get-all-foods')
//                    .then((resp) => {
//                        this.food = resp.data
//
//                        console.log('--------------------------------')
//                        console.log(resp.data)
//                    })
//                    .catch((err) => {
//                        console.log(err)
//                    })
//            }
//        },
//        mounted: function () {
//            this.fetchData();
//
//            setInterval(function () {
//                this.fetchData();
//                console.log('hello');
//            }.bind(this), 3000);
//        }
    }
</script>