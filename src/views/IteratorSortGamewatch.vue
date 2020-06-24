<template>
  <v-container fluid>
    <v-data-iterator :items="items">
      <template v-slot:default="props">
        <v-row dense>
          <v-col v-for="item in props.items" :key="item.id" cols="auto">
            <v-card flat color="blue">
              <ul>
                <li>id: {{ item.id }}</li>
                <li>model: {{ item.modelNo }}</li>
                <li>title: {{ item.title }}</li>
                <li>title(J): {{ item.japaneseTitle }}</li>
                <li>price: {{ item.price }}</li>
                <li>date: {{ item.releaseDate }}</li>
                <li>premium: {{ item.premium }}</li>
              </ul>
            </v-card>
          </v-col>
        </v-row>
      </template>
      <template v-slot:header>
        <v-toolbar class="mt-2" color="indigo" dark flat>
          Header
        </v-toolbar>
      </template>
      <template v-slot:footer>
        <v-toolbar class="mt-2" color="indigo" dark flat>
          Footer
        </v-toolbar>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import { gamewatch as items } from '@/components/gamewatch'

export default {
  name: 'IteratorSortGamewatch',
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.items = this.shuffle(items)
  },
  methods: {}
}
</script>
