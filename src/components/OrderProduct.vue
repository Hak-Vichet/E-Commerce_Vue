<template>
    <div class="flex gap-x-4 mt-5">
        <div class="flex h-[30px] items-center">
            <button @click="decreseItemAndPrice"  class="px-5 py-1 text-orange-500 bg-gray-200">-</button>
            <p class="px-5 py-1 bg-gray-200">{{ number }}</p>
            <button @click="increseItemAndPrice" class="px-5 py-1 text-orange-500 bg-gray-200">+</button>
        </div>

        <button class="flex flex-1 py-1 px-auto bg-orange-500 rounded-sm">
            <p class=" text-orange-200 text-[15px] mx-auto">Add to card</p>
        </button>
    </div>
</template>

<script setup lang="ts">

import { ref, defineEmits } from 'vue'

const number = ref(1)

const emit = defineEmits(['increasePrice', 'decresePrice'])

const increseItemAndPrice = () => {
    number.value += 1
    emit('increasePrice', number.value)
}

const decreseItemAndPrice = () => {
    if(number.value > 1) {
        number.value -= 1
        emit('decresePrice', number.value);
    }
}


</script>