
<template>
  <div>
    <h1>align-item</h1>
    <p>stretch</p>
    <div class="stretch">
      <div style="background-color:coral;">coral</div>
      <div id="lightblue" style="background-color:lightblue;">lightblue</div>
      <div style="background-color:khaki;">khaki</div>
      <div style="background-color:pink;">pink</div>
      <div style="background-color:lightgrey;">gray</div>
      <div style="background-color:lightgreen;">lightgreen</div>
    </div>
    <br>
    <p>center</p>
    <div class="center">
      <div  id="coral" style="background-color:coral;">coral</div>
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
      <div id="khaki" style="background-color:khaki;">khaki</div>
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
      <div id="pink" style="background-color:pink;">pink</div>
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
      <div id="lightgrey" style="background-color:lightgrey;">gray</div>
      <div style="background-color:lightgreen;">lightgreen</div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Alignself',
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
    align-items: flex-start;
  }

  .stretch div {
    flex: 1;
  }
  #lightblue {
    align-self: stretch;
  }
  .center{
    width: 300px;
    height: 500px;
    border: 1px solid black;
    display: flex;
    align-items: flex-start;
  }
  .center div{
    flex: 1;
  }
  #coral{
    align-self:center;
  }
  .flex-start{
    width: 300px;
    height: 500px;
    border: 1px solid black;
    display: flex;
    align-items: flex-end;
  }
  .flex-start div{
    flex: 1;
  }
  #khaki {
    align-self: flex-start;
  }
  .flex-end{
    width: 300px;
    height: 500px;
    border: 1px solid black;
    display: flex;
    align-items: center;
  }
  .flex-end div{
    flex: 1;
  }
  #pink{
    align-self: flex-end;
  }
  .baseline{
    width: 300px;
    height: 500px;
    border: 1px solid black;
    display: flex;
    align-items: flex-end;
  }
  .baseline div{
    flex: 1;
  }
  #lightgrey{
    align-self: baseline;
  }
</style>
