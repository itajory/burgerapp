<template>
  <div class="container">
     <span style="margin-top:20px;font-weight:bold">All Category</span>
    <section  class="sec">
     
      <vue-horizontal-list class="hlv" :items="items" :options="options">


        <template v-slot:default="{ item }">
          <div class="item" >
            <h5>{{ item.title }}</h5>
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
          { end: 576, size: 5 },
          { start: 576, end: 768, size: 6 },
          { start: 768, end: 992, size: 8 },
          { size:12 },
        ],
        list: {
          // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
          windowed: 1200,

          // Because: #app {padding: 80px 24px;}
          padding:0,
        },
        position: {
          start: 0,
        },
        autoplay: { play: true, repeat: true, speed: 2500 },
      },
      items: [
        { title: "Item 0", content: "https://picsum.photos/id/1015/600/600" },
        { title: "Item 1", content: "https://picsum.photos/id/1015/600/600" },
        { title: "Item 2", content: "https://picsum.photos/id/1042/600/600" },
              { title: "Item 0", content: "https://picsum.photos/id/1015/600/600" },
        { title: "Item 1", content: "https://picsum.photos/id/1015/600/600" },
        { title: "Item 2", content: "https://picsum.photos/id/1042/600/600" },
              { title: "Item 0", content: "https://picsum.photos/id/1015/600/600" },
        { title: "Item 1", content: "https://picsum.photos/id/1015/600/600" },
             { title: "Item 1", content: "https://picsum.photos/id/1015/600/600" },
        { title: "Item 2", content: "https://picsum.photos/id/1042/600/600" },
              { title: "Item 0", content: "https://picsum.photos/id/1015/600/600" },
        { title: "Item 1", content: "https://picsum.photos/id/1015/600/600" },
        { title: "Item 2", content: "https://picsum.photos/id/1042/600/600" },
        { title: "Item 2", content: "https://picsum.photos/id/1042/600/600" },
             { title: "Item 1", content: "https://picsum.photos/id/1015/600/600" },
        { title: "Item 2", content: "https://picsum.photos/id/1042/600/600" },
              { title: "Item 0", content: "https://picsum.photos/id/1015/600/600" },
        { title: "Item 1", content: "https://picsum.photos/id/1015/600/600" },
        { title: "Item 2", content: "https://picsum.photos/id/1042/600/600" },
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
  width: 70px;
  height: 70px;
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