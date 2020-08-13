<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-sheet color="blue" class="pa-2">[columbo] simple data table</v-sheet>
      </v-col>
    </v-row>
    <v-data-table :headers="header" :items="customers" dense class="elevation-1">
      <!--
      <template v-slot:item="{ item: customer }">
        <tr class="custom-tr" v-bind:style="{ 'background-color': customer.name === null ? 'red' : '' }">
          <td>{{ customer.name }}</td>
          <td>{{ customer.id }}</td>
          <td>{{ customer.age }}</td>
        </tr>
      </template>
-->
      <template v-slot:body="{ items: customers }">
        <tbody class="custom-body">
          <tr v-for="customer in customers" :key="customer.id" class="custom-tr">
            <td>{{ customer.name }}</td>
            <td>{{ customer.id }}</td>
            <td>{{ customer.age }}</td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: 'DataTableSimple',
  data() {
    return {
      activeColor: 'red',
      header: [
        { text: 'name', value: 'name' },
        { text: 'id', value: 'id' },
        { text: 'age', value: 'age' }
      ],
      customers: [
        { name: 'jon', id: 1, age: 21 },
        { name: 'dan', id: 2, age: 23 },
        { name: 'bob', id: 3, age: 25 },
        { name: 'ali', id: 4, age: 41 },
        { name: null, id: 5, age: 35 }
      ]
    }
  }
}
</script>
