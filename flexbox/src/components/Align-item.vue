
<template>
  <div>
    <h1>align-self</h1>
    <p>stretch</p>
    <div class="stretch">
      <div style="background-color:coral;">coral</div>
      <div style="background-color:lightblue;">lightblue</div>
      <div style="background-color:khaki;">khaki</div>
      <div style="background-color:pink;">pink</div>
      <div style="background-color:lightgrey;">gray</div>
      <div style="background-color:lightgreen;">lightgreen</div>
    </div>
    <br>
    <p>center</p>
    <div class="center">
      <div style="background-color:coral;">coral</div>
      <div style="background-color:lightblue;">lightblue</div>
      <div style="background-color:khaki;">khaki</div>
      <div style="background-color:pink;">pink</div>
      <div style="background-color:lightgrey;">gray</div>
      <div style="background-color:lightgreen;">lightgreen</div>
    </div>
    <br>
    <p>flex-start</p>
    <div class="flex-start">
      <div style="background-color:coral;">coral</div>
      <div style="background-color:lightblue;">lightblue</div>
      <div style="background-color:khaki;">khaki</div>
      <div style="background-color:pink;">pink</div>
      <div style="background-color:lightgrey;">gray</div>
      <div style="background-color:lightgreen;">lightgreen</div>
    </div>
    <br>
    <p>flex-end</p>
    <div class="flex-end">
      <div style="background-color:coral;">coral</div>
      <div style="background-color:lightblue;">lightblue</div>
      <div style="background-color:khaki;">khaki</div>
      <div style="background-color:pink;">pink</div>
      <div style="background-color:lightgrey;">gray</div>
      <div style="background-color:lightgreen;">lightgreen</div>
    </div>
    <br>
    <p>baseline</p>
    <div class="baseline">
      <div style="background-color:coral;">coral</div>
      <div style="background-color:lightblue;">lightblue</div>
      <div style="background-color:khaki;">khaki</div>
      <div style="background-color:pink;">pink</div>
      <div style="background-color:lightgrey;">gray</div>
      <div style="background-color:lightgreen;">lightgreen</div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Alignitem',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .stretch {
    width: 300px;
    height: 500px;
    border: 1px solid #000000;
    display: flex;
    align-items: stretch;
  }

  .stretch div {
   flex: 1;
  }
  .center{
    width: 300px;
    height: 500px;
    border: 1px solid black;
    display: flex;
    align-items: center;
  }
  .center div{
    flex: 1;
  }
  .flex-start{
    width: 300px;
    height: 500px;
    border: 1px solid black;
    display: flex;
    align-items: flex-start;
  }
  .flex-start div{
    flex: 1;
  }
  .flex-end{
    width: 300px;
    height: 500px;
    border: 1px solid black;
    display: flex;
    align-items: flex-end;
  }
  .flex-end div{
    width: 100px;
    height: 100px;
  }
  .baseline{
    width: 300px;
    height: 500px;
    border: 1px solid black;
    display: flex;
    align-items: baseline;
  }
  .baseline div{
    flex: 1;
  }
</style>
