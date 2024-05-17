<template>
  <router-link :to="`/collections/${props.collection.id}`" class="group block m-2 p-3">
    <div
      aria-hidden="true"
      class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
    >
      <img
        :src="props.collection.image.src"
        :alt="props.collection.image.alt"
        class="h-full w-full object-cover object-center"
      />
      <Tag-T
        :value="props.collection.inventoryStatus"
        :severity="getSeverity(props.collection.inventoryStatus)"
        class="absolute"
        style="left: 5px; top: 5px"
      />
    </div>
    <h3 class="mt-4 text-base font-semibold text-gray-900">{{ props.collection.name }}</h3>
    <p class="mt-2 text-sm text-gray-500">{{ props.collection.description }}</p>
  </router-link>
</template>

<script setup>
const props = defineProps({
  collection: {
    type: [String, null],
    required: true
  }
})

const getSeverity = (status) => {
  switch (status) {
    case 'INSTOCK':
      return 'success'

    case 'LOWSTOCK':
      return 'warning'

    case 'OUTOFSTOCK':
      return 'danger'

    default:
      return null
  }
}
</script>