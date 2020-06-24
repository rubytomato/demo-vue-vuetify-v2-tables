const mixin = {
  methods: {
    transform: function(items) {
      return items.map(item => {
        item.original_air_date = this.formatDate(this.toDate(item.original_air_date))
        item.japanese_air_date = this.formatDate(this.toDate(item.japanese_air_date))
        item.runtime = item.runtime + '分'
        return item
      })
    },
    toDate: function(value) {
      if (!value) {
        return value
      }
      return new Date(Date.parse(value.toString()))
    },
    formatDate: function(value) {
      if (!value) {
        return 'unknown'
      }
      return `${value.getFullYear()}/${value.getMonth() + 1}/${value.getDate()}`
    },
    shuffle(items) {
      for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const x = items[i]
        items[i] = items[j]
        items[j] = x
      }
      return items
    }
  }
}

export default mixin
