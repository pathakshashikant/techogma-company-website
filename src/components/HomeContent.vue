<script setup lang="ts">
import { ref } from "vue";
import TheHeader from "./TheHeader.vue";

const toggleImageIcon = ref(true);

const changeIcon = () => {
  toggleImageIcon.value = !toggleImageIcon.value;
};
</script>
<template>
  <div class="lg:home-bg">
    <TheHeader />

    <div class="flex flex-col space-y-6 pt-24">
      <p
        class="lg:text-5xl font-bold text-center text-[#02073e] md:leading-[4rem] text-[2rem] leading-[3rem]"
      >
        Our focus is to see delightful Nepal <br />
        with our tailored digital services.
      </p>
      <p class="text-lg text-center text-[#02073e]">
        We aim to be a pioneer of digital Nation Building
      </p>
    </div>
    <div class="flex flex-col justify-center items-center pt-12 relative">
      <div
        class="transition ease-in-out delay-150 w-[152.05px] h-[60px] relative z-20 cursor-pointer rounded-[5px] bg-[#0a8080] flex justify-center items-center hover:scale-105 hover:bg-[#097272] hover:-translate-y-1 duration-300"
      >
        <p class="text-lg font-bold text-center text-white">Subscribe</p>
      </div>
      <img
        src="../assets/collaboration_home.png"
        class="z-10 hidden lg:flex"
        alt="avatar-content"
      />
    </div>
  </div>
</template>

<style scoped></style>
