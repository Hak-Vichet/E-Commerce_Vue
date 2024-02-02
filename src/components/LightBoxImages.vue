<template>
  <div class="mt-10 grid md:grid-cols-2 p-10">
    <div class="p-5">
      <img
        :src="selectedImage.src"
        alt="Product"
        class="cursor-pointer object-cover rounded-[10px]"
        @click="openLightbox"
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
          class="absolute top-2 right-2 text-white text-xl cursor-pointer z-10"
        >
          &times;
        </button>

        <img :src="selectedImage.src" alt="Product" class="w-96 h-96 object-cover" />
      </div>
    </div>

    <div class="flex flex-col gap-y-3 my-auto p-5">
      <p class="text-[12px] font-bold text-amber-500">SNEAKER COMPANY</p>
      <h1 class="text-3xl font-bold">Fall Limited Edition Sneakers</h1>
      <p class="text-[10px] text-gray-400 mt-2">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable
        rubber outer sole, they'll withstand everything the weather can offer.
      </p>

      <div class="flex gap-x-3 items-center mt-2">
        <div class="text-2xl font-bold">{{ totalPrice.finalPrice }}.00</div>
        <div class="px-2 bg-orange-100 rounded-md text-[13px] text-orange-500">
          {{ selectedImage.discount }}
        </div>
      </div>

      <div class="line-through text-[12px] text-gray-400 mt-[-10px]">
        {{ selectedImage.price }}.00
      </div>

      <OrderProduct @decrese-price="calculatePrice1" @increase-price="calculatePrice2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, type Ref } from 'vue';

import OrderProduct from "@/components/OrderProduct.vue"

interface Thumbnail {
  id: number;
  src: string;
  price: string;
  discount: string;
  finalPrice: number;
}

const lightBoxOpen = ref(false);

const thumbnails = ref<Thumbnail[]>([
  { id: 1, src: '/image-product-1.jpg', price: '$200', discount: '20%', finalPrice: 160 },
  { id: 2, src: '/image-product-2.jpg', price: '$300', discount: '30%', finalPrice: 360 },
  { id: 3, src: '/image-product-3.jpg', price: '$400', discount: '10%', finalPrice: 360 },
  { id: 4, src: '/image-product-4.jpg', price: '$500', discount: '5%', finalPrice: 460 }
]);

const selectedImage: Ref<Thumbnail> = ref(thumbnails.value[0]);
const selectedImagePrice: Ref<number> = ref(selectedImage.value.finalPrice);
const totalPrice = reactive({
  finalPrice: selectedImagePrice.value
});

const calculatePrice1 = (number: number) => {
  totalPrice.finalPrice = number * selectedImage.value.finalPrice;
};

const calculatePrice2 = (number: number) => {
  totalPrice.finalPrice = number * selectedImage.value.finalPrice;
};

const selectImage = (id: number) => {
  selectedImage.value = thumbnails.value.find((thumbnail) => thumbnail.id === id) || thumbnails.value[0];
};

const closeLightbox = () => {
  lightBoxOpen.value = false;
};

const openLightbox = () => {
  lightBoxOpen.value = true;
};

</script>
