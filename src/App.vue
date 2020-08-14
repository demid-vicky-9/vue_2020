<template>
  <div id="app">
    <v-table :warehouses_data="WAREHOUSES" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import vTable from './components/table/v-table'

export default {
  name: 'app',
  components: {
    vTable
  },
  methods: {
    ...mapActions([
      'GET_WAREHOUSES_FROM_API'
    ])
  },
  mounted() {
    this.GET_WAREHOUSES_FROM_API()
  },
  computed: {
    ...mapGetters([
      'WAREHOUSES'
    ])
  }
}

</script>
<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 50px 0;
}

</style>
