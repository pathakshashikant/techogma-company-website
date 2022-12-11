<script setup lang="ts"></script>
<template>
  <section class="w-full flex justify-between pl-[136px] pr-[17px] gap-x-20">
    <div class="py-8 w-full flex justify-between">
      <div class="branding">
        <div class="brand-info flex items-center space-x-2 mb-4">
          <img src="../assets/logo.svg" alt="logo" />
          <span>Techogma</span>
        </div>
        <div class="mb-4">
          <a class="font-dm text-base" href="#">Terms of use</a> |
          <a class="font-dm text-base" href="#">Privacy</a>
        </div>
        <div>
          <p class="font-dm text[#0F2137] opacity-60">
            Copyright by 2021 Techogma Inc
          </p>
        </div>
      </div>
      <div class="about flex-col footer-menu font-dm">
        <h4 class="font-medium text-lg mb-8">About Us</h4>
        <a href="#">Support Center</a>
        <a href="#">About us</a>
        <a href="#">Copyright</a>
      </div>
      <div class="info flex-col footer-menu font-dm">
        <h4 class="font-medium text-lg mb-8">Information</h4>
        <a href="#">Return Policy</a>
        <a href="#">Private Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>
      <div class="services flex-col footer-menu font-dm">
        <h4 class="font-medium text-lg mb-8">Services</h4>
        <a href="#">Press Inquiries</a>
        <a href="#">Social Media</a>
        <a href="#">Directories</a>
      </div>
      <div class="connect flex flex-col font-dm">
        <h4 class="font-medium text-lg mb-8">Connect</h4>
        <a class="inline-flex items-center pb-2" href="#"
          ><img
            class="w-8 h-8 mr-2"
            src="../assets/fb.svg"
            alt="fb"
          />Facebook</a
        >
        <a class="inline-flex items-center pb-2" href="#"
          ><img
            class="w-8 h-8 mr-2"
            src="../assets/twitter.svg"
            alt="twitter"
          />Twitter</a
        >
        <a class="inline-flex items-center pb-2" href="#"
          ><img
            class="w-8 h-8 mr-2"
            src="../assets/git.svg"
            alt="git"
          />Github</a
        >
      </div>
    </div>

    <img src="../assets/scroll-down 1.svg" alt="scroll" />
  </section>
</template>

<style scoped>
.footer-menu > a {
  display: flex;
  flex-direction: column;
  color: #02073e;
  padding-bottom: 1rem;
}
</style>
