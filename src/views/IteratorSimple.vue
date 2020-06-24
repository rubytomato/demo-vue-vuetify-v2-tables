<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-sheet color="blue" class="pa-2">[columbo] simple iterator</v-sheet>
      </v-col>
    </v-row>
    <v-data-iterator :items="items">
      <template v-slot:default="props">
        <v-row dense>
          <v-col v-for="item in props.items" :key="item.title" cols="12" sm="6" md="4" lg="3">
            <v-card tile color="brown lighten-2">
              <div class="d-flex flex-row align-stretch">
                <div class="pl-2 pt-5">
                  <v-chip outlined label color="brown darken-4">{{ item.no_in_series }}</v-chip>
                </div>
                <div>
                  <v-card-title>{{ item.title }}</v-card-title>
                  <v-card-subtitle>{{ item.japanese_title }}</v-card-subtitle>
                </div>
              </div>
              <v-divider></v-divider>
              <v-list dense>
                <v-list-item v-for="label in labels" :key="label.name">
                  <v-list-item-content>{{ label.name }}</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item[label.prop] }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import { columbo as items, labels } from '@/components/columbo'

export default {
  name: 'IteratorSimple',
  data() {
    return {
      items: [],
      labels: labels
    }
  },
  mounted() {
    this.items = this.transform(items)
  },
  methods: {}
}
</script>
