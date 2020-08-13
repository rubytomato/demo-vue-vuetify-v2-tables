<template>
  <v-container fluid>
    <v-row>
      <v-col cols="auto">
        <v-card width="260">
          <v-card-title>simple</v-card-title>
          <v-card-text>
            <ul>
              <li><router-link :to="{ name: 'IteratorSimple' }">iterator</router-link></li>
              <li><router-link :to="{ name: 'IteratorSimpleLoading' }">iterator with loading</router-link></li>
              <li><router-link :to="{ name: 'IteratorSimpleOptions' }">iterator with options</router-link></li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card width="260">
          <v-card-title>sort</v-card-title>
          <v-card-text>
            <ul>
              <li><router-link :to="{ name: 'IteratorSort' }">simple sort</router-link></li>
              <li><router-link :to="{ name: 'IteratorSortCustom' }">custom sort</router-link></li>
              <li><router-link :to="{ name: 'IteratorSortGamewatch' }">gamewatch sort</router-link></li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card width="260">
          <v-card-title>search</v-card-title>
          <v-card-text>
            <ul>
              <li><router-link :to="{ name: 'IteratorSearch' }">simple search</router-link></li>
              <li><router-link :to="{ name: 'IteratorSearchCustom' }">custom search</router-link></li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card width="260">
          <v-card-title>grouping</v-card-title>
          <v-card-text>
            <ul>
              <li><router-link :to="{ name: 'IteratorGroup' }">simple grouping</router-link></li>
              <li><router-link :to="{ name: 'IteratorGroupCustom' }">custom grouping</router-link></li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card width="260">
          <v-card-title>data table</v-card-title>
          <v-card-text>
            <ul>
              <li><router-link :to="{ name: 'DataTableSimple' }">simple data table</router-link></li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      //
    }
  }
}
</script>
