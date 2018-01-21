<template>
  <v-ons-page>
    <v-header @gomenupage="menupage"></v-header>
    <div class="background">
      <ons-row align="center">
        <ons-col width="80%">
          <div class="left_side_search_heading">
            <h2>Listings for {{this.data.name}}</h2>
            <p>Select the place you want to go to</p>

          </div>
        </ons-col>
        <ons-col width="20%">
          <div class="cross_icon">
           <!--  <i class="fa fa-times-circle-o" aria-hidden="true"></i> -->
            <img @click="pop" :src="this.assets.icons.close" alt="close" />
          </div>
        </ons-col>
      </ons-row>
      <ons-row align="">
        <ons-col width="100%">
          <div class="left_side_button" v-for="rest in sortedArray">
            <button class="button button--light button_customize" @click="restaurants(rest.ID)">{{ rest.post_title }}</button>
          </div>
        </ons-col>
      </ons-row>
      <div v-if="loading" class="loading" v-cloak>
        <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        <!--<span>Loading...</span>-->
      </div>



    <!--Footer Carousel-->
      <v-carosel :title="title"></v-carosel>
    <!--Footer Carousel-->

    </div>



  </v-ons-page>
</template>

<script>
    import Vue from 'vue'
    import carosel from "./carosel"
    import header from "./header"
    import {assets} from './config'
    import axios from 'axios'
    import restaurant2 from './restaurant'
    import menu from './menu'
    export default {
        name: 'arearest',
        data () {
            return {
                title: "Today's Special",
                restaurant: [],
                loading:true,
            }
        },
        mixins:[assets],
        created () {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData () {
                this.loading= true
                axios.get( this.base_url + '/Table-cartel/v1/get-rest-by-loc/' + this.data.id + '/')
                    .then((resp) => {
                        this.restaurant = resp.data
//                        console.log('--------------------------------')
//                        console.log(resp.data)
                        this.loading = false
                    })
                    .catch((err) => {
//                        console.log(err)
                    })
            },
            restaurants (id) {
                this.pageStack.push({
                    extends: restaurant2,
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
            menupage (){
                this.pageStack.push(menu)
            },
        },
        computed: {
            sortedArray: function() {
                function compare(a, b) {
                    if (a.post_title < b.post_title)
                        return -1;
                    if (a.post_title > b.post_title)
                        return 1;
                    return 0;
                }

                return this.restaurant.sort(compare);
            }
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
  .loading{
    text-align: center;
    margin-top: 100px;
    margin-bottom: 100px;
    color: #009688;
    font-size: 13px;
  }
</style>