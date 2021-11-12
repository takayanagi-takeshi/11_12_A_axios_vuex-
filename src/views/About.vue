<template>
  <div class="about">
    <h1 v-if=" items[0]">{{items[0].date}}</h1>
    <h2 v-if=" items[0]"><button @click="increment">+</button>{{(items[0].npatients) - (items[1].npatients) + count}}人</h2>
    <!-- 感染者数の表示 -->
    <!-- <h1 v-if="items[0]">大阪府の{{items[0].date}}コロナ新規感染者数は</h1>
    <h2>{{(items[0].npatients) - (items[1].npatients)}}人</h2> -->
    <!-- -------------- -->
    <!-- ------------keyの付け方------------ -->
    <!-- <div v-for="(item, key) in items" :key="key">
      <p>{{item.npatiens}}</p>
    </div>  -->
    <!-- ------------keyの付け方------------ -->

    <div></div>

  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data: function() {
    return {
      // items: [],
    }
  },
  methods: {
    increment: function() {
      this.$store.commit('increment')
    }
  },
  computed: {
    items() {
      return this.$store.state.items
    },
    count() {
      return this.$store.state.count
    }
  },
  // created() {
  //   axios.get(
  //     "/api/Covid19JapanAll?dataName=大阪府"
  //   )
  //   .then(response => {
  //     // console.log(response.data.itemList)
  //     this.items = response.data.itemList;
  //   })
  // },

  mounted() {
    this.$store.dispatch('getCovidData');
  },
}

</script>
