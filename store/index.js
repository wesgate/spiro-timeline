export const state = () => ({
    objects: [],
    categories: []
  })
  
export const mutations = {
    setObjects (state, list) {
        state.objects = list
    },
    setCategories (state, list) {
        state.categories = list
    }
}

export const actions = {
    async nuxtServerInit ({ commit }) {
      const objects = await require.context('~/content/object/', false, /\.json$/)
      const categories = await require.context('~/content/category/', false, /\.json$/)

      const sortedObjects = objects.keys().map((key) => {
        const res = objects(key)
        return res
      }).sort(function (a, b) { return a.year- b.year
      }).map((obj, index) => ({ ...obj, number: index + 1 }))

      const categoriesSorted = categories.keys().map((key) => {
        const res = categories(key)
        return res
      }).sort(function (a, b) { return a.sort - b.sort })

      await commit('setObjects', sortedObjects)
      await commit('setCategories', categoriesSorted)
    }
  }