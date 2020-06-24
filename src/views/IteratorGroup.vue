<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-sheet color="indigo" class="pa-2">
          <div>simple grouping groupBy: {{ groupBy }} / groupDesc: {{ groupDesc }}</div>
        </v-sheet>
      </v-col>
    </v-row>
    <v-data-iterator :items="items" :group-by="groupBy" :group-desc="groupDesc">
      <template v-slot:default="props">
        <v-list three-line>
          <v-list-group v-for="group in props.groupedItems" :key="group.name">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>シーズン： {{ group.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="item in group.items" :key="item.title">
              <v-list-item-content>
                <v-list-item-title>
                  <div class="d-flex flex-row align-stretch">
                    <div class="pl-2 pt-5">
                      <v-chip outlined label color="brown darken-4">{{ item.no_in_series }}</v-chip>
                    </div>
                    <div>
                      <v-card-title>{{ item.title }}</v-card-title>
                      <v-card-subtitle>{{ item.japanese_title }}</v-card-subtitle>
                    </div>
                  </div>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import { columbo as items, labels } from '@/components/columbo'

export default {
  name: 'IteratorGroup',
  data() {
    return {
      items: [],
      labels: labels,
      groupBy: 'season',
      groupDesc: false
    }
  },
  mounted() {
    this.items = this.transform(items)
  },
  methods: {}
}
</script>
