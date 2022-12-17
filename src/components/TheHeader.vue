<script lang="ts" setup>
import { computed } from "vue";

let isMenu = true;
// const imgSrc = computed(() => {
//   return isMenu
//     ? import "../assets/menu-outline.svg"
//     : import "../assets/close-circle-outline.svg";
// });
</script>
<template>
  <div
    class="h-1/3 md:h-10 md:flex md:items-center md:justify-between xl:px-[19rem] md:px-[10rem] md:py-12 bg-white md:bg-transparent"
  >
    <div class="md:flex md:items-center xl:space-x-32 md:space-x-16">
      <div class="flex justify-between items-center">
        <div class="flex md:space-x-2 items-center p-4 space-x-2">
          <img src="../assets/company_logo.png" class="object-cover" />

          <span class="font-normal text-xl leading-6 text-[#0F2137]"
            >Techogma</span
          >
        </div>
        <div>
          <img
            src="../assets/menu-outline.svg"
            alt="hamburger"
            class="w-8 mx-4 md:hidden"
            @click="isMenu != isMenu"
          />
        </div>
      </div>

      <ul
        class="text-base text-[#02073e] md:space-x-6 md:flex bg-slate-400 absolute md:static w-full md:w-auto left-0 z-[1] md:bg-transparent md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
      >
        <li class="my-6 md:my-0 mx-4">
          <a href="#" class="text-base text-[#02073e]">Home </a>
        </li>
        <li class="my-6 md:my-0 mx-4">
          <a href="#" class="text-base text-[#02073e]">Services </a>
        </li>
        <li class="my-6 md:my-0 mx-4">
          <a href="#" class="text-base text-[#02073e]">Motivation</a>
        </li>
        <li class="my-6 md:my-0 mx-4">
          <a href="#" class="text-base text-[#02073e]"> Team</a>
        </li>
        <li class="my-6 md:my-0 mx-4">
          <a href="#" class="text-base text-[#02073e]"> About</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.home-bg {
  background-image: url("../assets/home_background.svg");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
