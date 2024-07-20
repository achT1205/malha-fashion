<script setup>
const props = defineProps({
  label: { type: String, default: '' },
  id: { type: String, required: true },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})
</script>


<template>
  <!--  <div>
    <label v-if="props.label" :for="props.label" class="block text-sm font-medium text-gray-700">{{
      props.label
    }}</label>
    <div class="mt-2.5">
      <input
        v-bind="$attrs"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>-->

  <div>
    <label v-if="props.label" :for="props.id" class="block text-sm font-medium text-gray-700">{{
      props.label
    }}</label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="border rounded p-2 mt-1"
      :id="props.id"
    />
  </div>
</template>

