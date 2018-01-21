<template>
  <div>
    <h1>align-content</h1>
    <p>stretch</p>
    <div class="stretch">
      <div style="background-color:coral;"></div>
      <div style="background-color:lightblue;"></div>
      <div style="background-color:khaki;"></div>
      <div style="background-color:pink;"></div>
      <div style="background-color:lightgrey;"></div>
      <div style="background-color:lightgreen;"></div>
    </div>
    <br>
    <p>center</p>
    <div class="center">
      <div style="background-color:coral;"></div>
      <div style="background-color:lightblue;"></div>
      <div style="background-color:khaki;"></div>
      <div style="background-color:pink;"></div>
      <div style="background-color:lightgrey;"></div>
      <div style="background-color:lightgreen;"></div>
    </div>
    <br>
    <p>flex-start</p>
    <div class="flex-start">
      <div style="background-color:coral;"></div>
      <div style="background-color:lightblue;"></div>
      <div style="background-color:khaki;"></div>
      <div style="background-color:pink;"></div>
      <div style="background-color:lightgrey;"></div>
      <div style="background-color:lightgreen;"></div>
    </div>
    <br>
    <p>flex-end</p>
    <div class="flex-end">
      <div style="background-color:coral;"></div>
      <div style="background-color:lightblue;"></div>
      <div style="background-color:khaki;"></div>
      <div style="background-color:pink;"></div>
      <div style="background-color:lightgrey;"></div>
      <div style="background-color:lightgreen;"></div>
    </div>
    <br>
    <p>space-between</p>
    <div class="space-between">
      <div style="background-color:coral;"></div>
      <div style="background-color:lightblue;"></div>
      <div style="background-color:khaki;"></div>
      <div style="background-color:pink;"></div>
      <div style="background-color:lightgrey;"></div>
      <div style="background-color:lightgreen;"></div>
    </div>
    <br>
    <p>space-between</p>
    <div class="space-around">
      <div style="background-color:coral;"></div>
      <div style="background-color:lightblue;"></div>
      <div style="background-color:khaki;"></div>
      <div style="background-color:pink;"></div>
      <div style="background-color:lightgrey;"></div>
      <div style="background-color:lightgreen;"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Aligncontent',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    align-items: center;
  }
  .stretch {
    width: 300px;
    height: 500px;
    border: 1px solid #000000;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
  }

  .stretch div {
    width: 100px;
    height: 70px;
  }
  .center{
    width: 300px;
    height: 500px;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }
  .center div{
    width: 100px;
    height: 100px;
  }
  .flex-start{
    width: 300px;
    height: 500px;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }
  .flex-start div{
    width: 100px;
    height: 100px;
  }
  .flex-end{
    width: 300px;
    height: 500px;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
  }
  .flex-end div{
    width: 100px;
    height: 100px;
  }
  .space-between{
    width: 300px;
    height: 500px;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }
  .space-between div{
    width: 100px;
    height: 100px;
  }
  .space-around{
    width: 300px;
    height: 500px;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
  }
  .space-around div{
    width: 100px;
    height: 100px;
  }
</style>
