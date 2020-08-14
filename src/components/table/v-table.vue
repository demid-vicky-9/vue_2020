<template>
  <div class="postal-table" v-cloak>
    <h1>Список почтовых отделений</h1>
    <div class="full-table">
      <div class="table-responsive">
        <table class="v-table">
          <thead class="v-table__header">
            <tr>
              <th>ID</th>
              <th>Название</th>
              <th @click="sortByCity">
                <div style="display: flex; align-items: center; justify-content: center; cursor: pointer;">
                  Местоположение <i class="material-icons" style="margin-left: 5px;">sort</i>
                </div>
              </th>
              <th @click="sortByNumber">
                <div style="display: flex; align-items: center; justify-content: center; cursor: pointer;"> &numero; отд. <i class="material-icons" style="margin-left: 5px;">sort</i></div>
              </th>
            </tr>
          </thead>
          <tbody class="v-table__body">
            <v-table-row v-for="row in paginatedWarehouses" :key="row.id" :row_data="row" />
          </tbody>
        </table>
        <div class="v-table__pagination">
          <div class="page" v-for="page in pages" :key="page" :class="{'page-selected': page === pageDef}" @click="pageClick(page)">
            {{ page }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vTableRow from './v-table-row'

export default {
  name: "v-table",
  components: {
    vTableRow
  },
  props: {
    warehouses_data: {
      type: Array,
      default: () => {
        return []
      },
    }
  },
  data() {
    return {
      warehousesPrevPage: 10,
      pageDef: 1
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.warehouses_data.length / 10);
    },
    paginatedWarehouses() {
      let from = (this.pageDef - 1) * this.warehousesPrevPage;
      let to = from + this.warehousesPrevPage;

      return this.warehouses_data.slice(from, to);
    }
  },
  methods: {
    pageClick(page) {
      this.pageDef = page;
    },
    sortByCity() {
      this.warehouses_data.sort((a, b) => a.city.localeCompare(b.city));
    },
    sortByNumber() {
      this.warehouses_data.sort((a, b) => a.number - b.number);
    }
  }
}

</script>
<style scoped>
.table-responsive {
  display: block;
  min-width: 100%;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.v-table {
  border-collapse: separate;
  border-spacing: 0 20px;
  width: 99%;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
}

@media (max-width: 767px) {
  .v-table {
    width: 800px;
    overflow-x: scroll;
  }
}

.v-table .v-table__header tr th {
  padding: 15px;
}

.v-table__pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 0;
}

.page {
  padding: 10px;
  margin: 5px;
  border: solid 1px #000;
  color: #000;
  transition: .3s all linear;
  cursor: pointer;
}

.page:hover {
  background: #72c5ea;
  color: #fff;
}

.page-selected {
  background: #509bbd;
  color: #fff;
}

</style>
