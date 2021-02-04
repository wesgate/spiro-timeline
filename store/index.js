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
      
      /* const objects = [
        {
          title: 'Timetwister',
          number: 1,
          category: 'category-1',
          categoryTitle: 'Sorcery',
          year: -900,
          descriptive: 'Set Timetwister aside in a new ligravearcl pilc. Shudc your hhand,library, nd gravyard togetherinto h nw library nd draw a newhnd of even cards, leaving allcards in play whrc th arciuppuncnt must do the same.',
          uri: 'https://i1.wp.com/s3.amazonaws.com/media.completeset.com/stories/attachments/2013/content_11329.jpg?w=900'
        },
        {
          title: 'Tropical Island',
          number: 2,
          category: 'category-1',
          categoryTitle: 'Land',
          year: -720,
          descriptive: 'Counts as both forest and islandsand is aected by spells that aecteither. Tap to add either  or D to¡your mana pool.',
          uri: 'https://i1.wp.com/s3.amazonaws.com/media.completeset.com/stories/attachments/2022/content_8277.jpg?w=900'
        },
        {
          title: 'Mox Emerald',
          number: 3,
          category: 'category-2',
          categoryTitle: 'Mono Artifact',
          year: -650,
          descriptive: 'Add l grcen manato your mana pool.Tapping chis artifactcan be playedas an interrupt.',
          uri: 'https://i2.wp.com/s3.amazonaws.com/media.completeset.com/stories/attachments/2014/content_4384.jpg?w=900'
        },
        {
          title: 'Mox Pearl',
          number: 4,
          category: 'category-2',
          categoryTitle: 'Mono Artifact',
          year: -600,
          descriptive: 'Add l white manato your mana poo .Tapping this artifactcan be playedas an interrupt.',
          uri: 'https://i1.wp.com/s3.amazonaws.com/media.completeset.com/stories/attachments/2015/content_11869.jpg?w=900'
        },
        {
          title: 'Mox Ruby',
          number: 5,
          category: 'category-2',
          categoryTitle: 'Mono Artifact',
          year: -500,
          descriptive: 'Add l ed mana to yourmana pool. Tappingthis artifact ¿an bepLayed as an interrupt.',
          uri: 'https://i1.wp.com/s3.amazonaws.com/media.completeset.com/stories/attachments/2016/content_ruby_13904_face.jpg?w=900'
        },
        {
          title: 'Mox Jet',
          number: 6,
          category: 'category-2',
          categoryTitle: 'Mono Artifact',
          year: -400,
          descriptive: 'Add l black manato your mana poo .Tapping this artifactcan be playedas an interrupt.',
          uri: 'https://i2.wp.com/s3.amazonaws.com/media.completeset.com/stories/attachments/2017/content_6976.jpg?w=900'
        },
        {
          title: 'Time Walk',
          number: 7,
          category: 'category-3',
          categoryTitle: 'Sorcery',
          year: 0,
          descriptive: 'Take an extra turn after this one.',
          uri: 'https://i2.wp.com/s3.amazonaws.com/media.completeset.com/stories/attachments/2020/content_6414.jpg?w=900'
        },
        {
          title: 'Mox Sapphire',
          number: 8,
          category: 'category-4',
          categoryTitle: 'Mono Artifact',
          year: 100,
          descriptive: 'Add l blue manato your mana poo .Tapping this artifactcan be playedas an interrupt.',
          uri: 'https://i2.wp.com/s3.amazonaws.com/media.completeset.com/stories/attachments/2018/content_6310.jpg?w=900'
        },
        {
          title: 'Ancestral Recal',
          number: 9,
          category: 'category-4',
          categoryTitle: 'Instant',
          year: 300,
          descriptive: 'Draw 3 cards orforce opponentto draw 3 cards.',
          uri: 'https://i0.wp.com/s3.amazonaws.com/media.completeset.com/stories/attachments/2019/content_ancestral_recall-full.jpg?w=900'
        },
        {
          title: 'Black Lotus',
          number: 10,
          category: 'category-4',
          categoryTitle: 'Mono Artifact',
          year: 700,
          descriptive: 'Add  mhnEl ()f any Lsinglc c()lor nfyc)ur LhoiL tu yuur mand F)c)()l,thcn i iscrded. Tapping thisrtifL`t cn b plyed as hnlnterrupt.',
          uri: 'https://i1.wp.com/s3.amazonaws.com/media.completeset.com/stories/attachments/2021/content_12295.jpg?w=900'
        },
        {
          title: 'Hidden',
          number: 11,
          category: 'none',
          categoryTitle: 'none',
          descriptive: 'I am hidden. Do not look at me!',
          uri: 'https://placehold.it/800x1000'
        }
      ]; */

      /* const categories = [
        {
          title: 'Category 1',
          slug: 'category-1',
          sort: 1,
          begin: -900,
          end: -700,
          year: '900BC - 700BC',
          color: 'navy'
        },
        {
          title: 'Category 2',
          slug: 'category-2',
          sort: 2,
          begin: -700,
          end: -400,
          year: '700BC - 400BC',
          color: 'red'
        },
        {
          title: 'Category 3',
          slug: 'category-3',
          sort: 3,
          begin: -400,
          end: 100,
          year: '400BC - 100AD',
          color: 'orange'
        },
        {
          title: 'Category 4',
          slug: 'category-4',
          sort: 4,
          begin: 100,
          end: 700,
          year: '100AD - 700AD',
          color: 'navy'
        }
      ]; */
  
      /* const objectsSorted = objects.keys().map((key) => {
        const res = objects(key)
        return res
      }).sort(function (a, b) { return a.year - b.year })

      const categoriesSorted = categories.keys().map((key) => {
        const res = categories(key)
        return res
      }).sort(function (a, b) { return a.sort - b.sort }) */

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
      //await commit('setNewObjects', sortedNewObjects)
    }
  }