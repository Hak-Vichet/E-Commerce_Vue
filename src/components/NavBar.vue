<template>
  <nav class="px-10">
    <div class="hidden md:flex items-center">
      <router-link to="/" class="py-7 text-2xl font-bold border-b-[3px]">sneakers</router-link>
      <router-link
        to="/"
        class="px-3 py-8 ml-4 text-gray-500 focus:border-b-[3px] focus:border-orange-400"
        >Collections</router-link
      >
      <router-link
        to="/men"
        class="px-3 py-8 ml-4 text-gray-500 focus:border-b-[3px] focus:border-orange-400"
        >Men</router-link
      >
      <router-link
        to="/women"
        class="px-3 py-8 ml-4 text-gray-500 focus:border-b-[3px] focus:border-orange-400"
        >Women</router-link
      >
      <router-link
        to="/about"
        class="px-3 py-8 ml-4 text-gray-500 focus:border-b-[3px] focus:border-orange-400"
        >About</router-link
      >
      <router-link
        to="/contact"
        class="px-3 py-8 ml-4 text-gray-500 focus:border-b-[3px] focus:border-orange-400"
        >Contact</router-link
      >

      <div class="flex flex-1 shrink-0 gap-x-5 items-center justify-end">
        <card-icon @click="showCard" />
        <card-popup v-if="isShowCard"/>

        <button>
          <img src="/image-avatar.png" alt="profile" class="w-15 h-10 flex flex-shrink-0">
        </button>
      </div>
    </div>

    <div class="w-full h-[2px] bg-gray-200 mt-[-1px]"></div>

    <div class="md:hidden mt-4">
      <div
        v-if="isMobileMenuOpen"
        class="absolute w-2/3 right-0 ml-10 mt-10 bg-gray-200 flex flex-col items-center"
      >
        <router-link to="/">Collections</router-link>
        <router-link to="/men">Men</router-link>
        <router-link to="/women">Women</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>

      <div class="flex justify-between">
        <div class="text-2xl font-bold">sneakers</div>

        <button @click="toggleMobileMenu" class="text-gray-600">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import CardIcon from '@/components/icons/cardIcon.vue'
import CardPopup from '@/components/CartPopup.vue'

const isMobileMenuOpen = ref(false)
const isShowCard = ref(false)

const showCard = () => {
  isShowCard.value = !isShowCard.value
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>
