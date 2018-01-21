<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="page in pageStack" :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>
  import Login from './Login';
  import Search from './Search';
  import Marketplace from './Marketplace';
  import FoodTexo from './FoodTexo';
  import FoodListTexo from './FoodListTexo';
  import Food from './Food';
  import Restaurant from './Restaurant';
  import RestaurantFoodList from './RestaurantFoodList';
  import TableCartel from './TableCartel';


  export default {
    data() {
      return {
        pageStack: [Login]
      }
    }
  }
</script>
