<template>
  <tr class="v-table-row">
    <td class="row row__ref">{{ row_data.ref }}</td>
    <td class="row row__name">{{ row_data.name }}</td>
    <td class="row row__city">{{ row_data.city }}</td>
    <td class="row row__number">{{ row_data.number }}</td>
  </tr>
</template>
<script>
export default {
  name: "v-table-row",
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {}
}

</script>
<style scoped>

.v-table .v-table__body .v-table-row {
  outline: 1px solid rgba(155, 155, 155, 0.7);
}

.v-table .v-table__body .v-table-row .row {
  padding: 20px;
  border-right: 1px solid rgba(155, 155, 155, 0.7);
  transition: .3s all linear;
}

</style>
