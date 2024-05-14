<template>
  <div class="flex justify-center items-center">
    <div class="relative w-full max-w-screen-lg overflow-hidden">
      {{ currentIndex }}
      <div
        class="flex transition ease-in-out duration-300"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <ul role="list" class="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0" v-for="slider in sliders" :key="slider.id">
          <li
            v-for="collection in slider.collections"
            :key="collection.name"
            class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <router-link :to="`/collections/${collection.id}`" class="group block">
              <div
                aria-hidden="true"
                class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
              >
                <img
                  :src="collection.imageSrc"
                  :alt="collection.imageAlt"
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-4 text-base font-semibold text-gray-900">{{ collection.name }}</h3>
              <p class="mt-2 text-sm text-gray-500">{{ collection.description }}</p>
            </router-link>
          </li>
        </ul>
      </div>
      <button
        @click="prevImage"
        class="absolute left-0 top-0 bottom-0 px-4 text-white flex items-center"
      >
        <span>&#10094;</span>
      </button>
      <button
        @click="nextImage"
        class="absolute right-0 top-0 bottom-0 px-4 text-white flex items-center"
      >
        <span>&#10095;</span>
      </button>
    </div>
    <!-- Dot indicators -->
    <div class="absolute bottom-0 left-0 right-0 flex justify-center p-4">
      <button
        v-for="(collection, index) in collections"
        :key="'dot-' + index"
        class="h-3 w-3 mx-1 rounded-full"
        :class="{ 'bg-white': currentIndex === index, 'bg-gray-400': currentIndex !== index }"
        @click="jumpTo(index)"
      ></button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      currentIndex: 0,
      numVisible: 1,
      sliders: [
        {
          id: 1,
          collections: [
            {
              id: 1,
              name: 'Berbère Éclat ',
              imageSrc: '/images/collections/dresses/1.png',
              imageAlt: 'BRobe de Fête ',
              description: `Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.`
            },
            {
              id: 2,
              name: 'Montagnes de Djurdjura',

              imageSrc: '/images/collections/burnous/1.png',
              imageAlt: 'Collection Montagnes de Djurdjura',
              description: `Évoquant les sommets majestueux et le patrimoine robuste de la Kabylie.`
            },
            {
              id: 3,
              name: 'Lune de Kabylie',

              imageSrc: '/images/collections/joularies/1.png',
              imageAlt: 'Collection Lune de Kabylie',
              description: `Inspirée par les motifs lunaires récurrents dans l'art kabyle, cette collection capture la mystique et l'élégance des bijoux traditionnels.`
            }
          ]
        },
        {
          id: 2,
          collections: [
            {
              id: 1,
              name: 'Berbère Éclat ',
              imageSrc: '/images/collections/dresses/1.png',
              imageAlt: 'BRobe de Fête ',
              description: `Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.`
            },
            {
              id: 2,
              name: 'Montagnes de Djurdjura',

              imageSrc: '/images/collections/burnous/1.png',
              imageAlt: 'Collection Montagnes de Djurdjura',
              description: `Évoquant les sommets majestueux et le patrimoine robuste de la Kabylie.`
            },
            {
              id: 3,
              name: 'Lune de Kabylie',

              imageSrc: '/images/collections/joularies/1.png',
              imageAlt: 'Collection Lune de Kabylie',
              description: `Inspirée par les motifs lunaires récurrents dans l'art kabyle, cette collection capture la mystique et l'élégance des bijoux traditionnels.`
            }
          ]
        },
        {
          id: 3,
          collections: [
            {
              id: 1,
              name: 'Berbère Éclat ',
              imageSrc: '/images/collections/dresses/1.png',
              imageAlt: 'BRobe de Fête ',
              description: `Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.`
            },
            {
              id: 2,
              name: 'Montagnes de Djurdjura',

              imageSrc: '/images/collections/burnous/1.png',
              imageAlt: 'Collection Montagnes de Djurdjura',
              description: `Évoquant les sommets majestueux et le patrimoine robuste de la Kabylie.`
            },
            {
              id: 3,
              name: 'Lune de Kabylie',

              imageSrc: '/images/collections/joularies/1.png',
              imageAlt: 'Collection Lune de Kabylie',
              description: `Inspirée par les motifs lunaires récurrents dans l'art kabyle, cette collection capture la mystique et l'élégance des bijoux traditionnels.`
            }
          ]
        }
      ],

      collections: [
        {
          id: 1,
          name: 'Berbère Éclat ',
          imageSrc: '/images/collections/dresses/1.png',
          imageAlt: 'BRobe de Fête ',
          description: `Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.`
        },
        {
          id: 2,
          name: 'Montagnes de Djurdjura',

          imageSrc: '/images/collections/burnous/1.png',
          imageAlt: 'Collection Montagnes de Djurdjura',
          description: `Évoquant les sommets majestueux et le patrimoine robuste de la Kabylie.`
        },
        {
          id: 3,
          name: 'Lune de Kabylie',

          imageSrc: '/images/collections/joularies/1.png',
          imageAlt: 'Collection Lune de Kabylie',
          description: `Inspirée par les motifs lunaires récurrents dans l'art kabyle, cette collection capture la mystique et l'élégance des bijoux traditionnels.`
        } /*
        {
          id: 4,
          name: 'Azur Amazigh ',

          imageSrc: '/images/collections//dresses/2.png',
          imageAlt: 'Robe de Sortie ',
          description: `Soulignant la beauté et la profondeur des couleurs souvent utilisées dans les tenues kabyles, avec un clin d'œil à l'identité amazighe.`
        },
        {
          id: 5,
          name: 'Echo des Aït',

          imageSrc: '/images/collections/burnous/2.png',
          imageAlt: 'Collection Echo des Aït',
          description: `Rendant hommage aux tribus Aït de Kabylie, ce nom reflète la transmission des traditions et des savoir-faire ancestraux.`
        },
        {
          id: 6,
          name: 'Souveraines Berbères',

          imageSrc: '/images/collections/joularies/2.png',
          imageAlt: 'Collection Souveraines Berbères',
          description: `Célébrant les figures féminines puissantes de l'histoire kabyle, cette collection allie force et finesse dans chaque pièce.`
        },
        {
          id: 7,
          name: 'Jardin de Numidie ',

          imageSrc: '/images/collections/dresses/3.png',
          imageAlt: 'Robe de Maison ',
          description: `Inspirée par l'histoire et la nature de Kabylie, cette collection intègre des motifs floraux et des éléments naturels.`
        },
        {
          id: 8,
          name: 'Voile de Yemma Gouraya',

          imageSrc: '/images/collections/burnous/3.png',
          imageAlt: 'Collection Voile de Yemma Gouraya',
          description: `Inspiré par la légendaire montagne qui surplombe la ville de Béjaïa, symbolisant protection et majesté.`
        },
        {
          id: 9,
          name: `Jardins d'Agadez`,

          imageSrc: '/images/collections/joularies/3.png',
          imageAlt: `Collection Jardins d'Agadez`,
          description: `Évoquant les designs floraux et organiques typiques de la bijouterie kabyle, cette collection rend hommage à la nature et à la fertilité des terres berbères.`
        }*/
      ]
    }
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.sliders.length
    },
    prevImage() {
      this.currentIndex =
        (this.currentIndex + this.sliders.length - 1) % this.sliders.length
    },
    jumpTo(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
button {
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
}
button:hover {
  background-color: rgba(0, 0, 0, 0.8); /* Darker on hover */
}
</style>
