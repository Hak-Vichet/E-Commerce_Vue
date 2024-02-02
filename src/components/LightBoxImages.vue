<!-- ProductGallery.vue -->

<template>
  <div class="mt-10 grid md:grid-cols-2 p-10">
    <div class="p-5">
      <img
        :src="selectedImage"
        alt="Product"
        class="cursor-pointer object-cover rounded-[10px]"
      />

      <div class="flex mt-5">
        <div v-for="thumbnail in thumbnails" :key="thumbnail.id" class="flex">
          <img
            :src="thumbnail.src"
            alt="thumbnail"
            class="flex w-[80px] h-[80px] rounded-[10px] mr-10"
            @click="selectImage(thumbnail.id)"
          />
        </div>
      </div>
    </div>

    <div
      v-if="lightBoxOpen"
      class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
    >
      <div class="relative">
        <button
          @click="closeLightbox"
          class="absolute top-2 right-2 text-white text-xl cursor-pointer"
        >
          &times;
        </button>

        <img @click="selectImage(selectedImage.id)" alt="Product" class="w-96 h-96 object-cover" />
      </div>
    </div>

    <div class="flex flex-col gap-y-3 my-auto p-5">
      <p class="text-[12px] font-bold text-amber-500">SNEAKER COMPANY</p>
      <h1 class="text-3xl font-bold">Fall Limited Edition Sneakers</h1>
      <p class="text-[10px] text-gray-400">
        These low -profile sneakers are your perfect casual wear companion. Featuring a durable
        rubber outer sole, they'll wishstand everything the weather can offer.
      </p>
    </div>

    <!-- Lightbox -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const lightBoxOpen = ref(false)

const thumbnails = ref([
  { id: 1, src: '/image-product-1.jpg', price: '$200', discount: '20%', finalPrice: '$160' },
  { id: 2, src: '/image-product-2.jpg', price: '$300', discount: '30%', finalPrice: '$260' },
  // { id: 3, src: '/image-product-3.jpg', price: '$400', discount: '10%', finalPrice: '$360' },
  // { id: 3, src: '/image-product-4.jpg', price: '$500', discount: '5%', finalPrice: '$460' }
])

const selectedImage = ref('/image-product-1.jpg')
console.log('Selected Image: ', selectedImage.value)

const selectImage = (id: number) => {
  const showImageId = thumbnails.value[id]

  const imageToShow = showImageId.src

  selectedImage.value = imageToShow

  console.log('Selected Image: ', showImageId)
  console.log('Image to show: ', imageToShow)
  // selectedImage.value = showImage.src
  // console.log('Selected index: ', thumbnails.value[id])
}

const closeLightbox = () => {
  lightBoxOpen.value = false
}
</script>
