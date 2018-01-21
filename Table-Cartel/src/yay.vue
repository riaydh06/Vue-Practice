<template>
    <v-ons-page id="">
        <v-header @gomenupage="menupage"></v-header>
        <div class="background">
            <ons-row align="right">
                <ons-col width="100%">
                    <div class="cross_icon">
                        <!--  <i class="fa fa-times-circle-o" aria-hidden="true"></i> -->
                        <img @click="pop" :src="this.assets.icons.close" alt="close" />
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="center">
                <ons-col width="100%">
                    <div class="yah_side_search_heading">
                        <h2>Woohoo! Let's plan</h2>
                        <!--<p>Today is good day to eat out.Why not plan somethink? !</p>-->
                        <p>Do you have a cuisine in mind or you want to choose by area? Better still you know the restaurant you want to visit? </p>
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="">
                <ons-col width="100%">
                    <div class="left_side_button">
                        <button class="button button--light button_customize" @click="cuisine">Cuisine</button>
                        <button class="button button--light button_customize area_button_change" @click="area__a">Area</button>
                        <!--<h2 v-for="foo in food['foods']">{{foo.ID}}/10</h2>-->
                    </div>
                </ons-col>
            </ons-row>
            <ons-row align="">
                <ons-col width="100%">
                    <div class="i_know_button">
                        <button class="button button--light button_customize" >I know what i want</button>
                    </div>
                </ons-col>
            </ons-row>

        <!--Footer Carousel-->
            <v-carosel :title="title"></v-carosel>
        <!--Footer Carousel-->


        </div>





    </v-ons-page>
</template>

<script>
    import carosel from "./carosel"
    import header from "./header"
    import {assets} from './config'
    import axios from 'axios'
    import cuisine from './cuisine'
    import area from './area'
    import menu from './menu'
    export default {
        name: 'yay',
        data () {
            return {
                title: "Today's Special",
            }
        },
        mixins:[assets],
        methods: {
            hello (id) {
                this.pageStack.push({
                    extends: restaurant,
                    data() {
                        return {
                            data: {'id': id}
                        }
                    }
                });
            },
            pop(){
                this.pageStack.pop();
            },
            area__a() {
                this.pageStack.push(area)
            },
            cuisine() {
                this.pageStack.push(cuisine)
            },
             menupage (){
                this.pageStack.push(menu)
            },
        },
        components:{
            'v-carosel':carosel,
            'v-header':header,
        },
        props: ['pageStack']
    }
</script>
<style scoped>
    .button{
        float:left;
    }

</style>