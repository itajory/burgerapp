<template>
  <div class="container" style="padding-top:13px; font-family:cursive">
     <span style="margin-top:20px;">All Category</span>
    <section  class="sec">
     
      <vue-horizontal-list class="hlv" :items="items" :options="options">


        <template v-slot:default="{ item }">
          <div class="item" >
            <h6>{{ item.title }}</h6>
            <img class="rounded-circle  img" :src=item.content>
          </div>
        </template>
      </vue-horizontal-list>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import VueHorizontalList from "vue-horizontal-list";

export default Vue.extend({
  name: "ServeDev",
  components: {
    VueHorizontalList,
  },
  data() {
    return {
      options: {
        responsive: [
          { end: 576, size: 4 },
          { start: 576, end: 768, size: 7 },
          { start: 768, end: 992, size: 9},
          { size:15 },
        ],
        list: {
          // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
          windowed: 1400,

          // Because: #app {padding: 80px 24px;}
          padding:0,
        },
        position: {
          start: 0,
        },
        autoplay: { play: true, repeat: true, speed: 2500 },
      },
      items: [
        { title: "Pizza", content: "https://picsum.photos/id/1011/600/600" },
        { title: "Burger", content: "https://picsum.photos/id/1010/600/600" },
        { title: "Chiken", content: "https://picsum.photos/id/1012/600/600" },
        { title: "cake", content: "https://picsum.photos/id/1055/600/600" },
        { title: "Drinks", content: "https://picsum.photos/id/1019/600/600" },
        { title: "Soda", content: "https://picsum.photos/id/1032/600/600" },
         { title: "Sandwitch", content: "https://picsum.photos/id/1025/600/600" },
        { title: "Melas", content: "https://picsum.photos/id/1015/600/600" },
         { title: "Free Meal", content: "https://picsum.photos/id/1032/600/600" },
        { title: "Sweats", content: "https://picsum.photos/id/1042/600/600" },
        { title: "Fruites", content: "https://picsum.photos/id/1015/600/600" },
        { title: "Vigitables", content: "https://picsum.photos/id/1015/600/600" },
        { title: "Ice Cream", content: "https://picsum.photos/id/1042/600/600" },
        { title: "Item 13", content: "https://picsum.photos/id/1042/600/600" },
             { title: "Item 14", content: "https://picsum.photos/id/1083/600/600" },
        { title: "Item 15", content: "https://picsum.photos/id/1042/600/600" },
              { title: "Item 16", content: "https://picsum.photos/id/1015/600/600" },
        { title: "Item 17", content: "https://picsum.photos/id/1083/600/600" },
        { title: "Item 18", content: "https://picsum.photos/id/1042/600/600" },
      ],
    };
  },
});
</script>

<style scoped>
.item{
  text-align: center;

  margin: 0px;
}

.item img {
  width: 88px;
  height: 77px;
}

.sec{
  padding: 0px;
  margin: 0px;


}

.hlv{
  padding-bottom: 1px;
  padding-top: 0px;

  height: 100%;
    border-radius:20px;
}



</style>