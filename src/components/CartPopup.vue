<template>
  <div
    class="absolute top-0 w-[300px] rounded-md mt-[7%] bg-white p-5 overflow-hidden shadow-xl shadow-gray-400"
  >
    <h2 class="flex">Cart</h2>
    <div class="w-full h-[1px] bg-gray-300 mt-2 mb-4"></div>

    <div class="bg-white rounded max-h-[200px] w-full overflow-y-auto">
      <div v-if="isFoundCart" class="flex gap-2">
        <img src="" alt="LOGO" />
        <div class="flex flex-col">
          <p class="text-[12px]">Fall Limited Edition Sneakers</p>
          <p class="text-[12px]">
            {{ '$120.00' }} * {{ '3' }} <code class="text-[12px] font-bold">{{ '$375.00' }}</code>
          </p>
        </div>
      </div>

      <div v-else class="flex items-center justify-center">Not Found Cart</div>

      <button
        v-if="isFoundCart"
        class="bg-orange-500 w-full flex items-center justify-center mt-3 rounded-md h-[30px] text-orange-100 text-[13px] py-5"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isFoundCart = ref(true)
</script>
