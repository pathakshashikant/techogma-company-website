<script setup lang="ts">
import TheHeader from "./TheHeader.vue";
</script>
<template>
  <div class="home-bg relative">
    <the-header></the-header>
    <!-- <div
      class="h-10 flex items-center justify-between py-12 xl:px-[19rem] md:px-[10rem] px-8"
    >
      <div class="flex items-center xl:space-x-32 md:space-x-16 space-x-4">
        <div class="flex space-x-2 items-center">
          <img src="../assets/company_logo.png" class="object-cover" />
          <span class="font-normal text-xl leading-6 text-[#0F2137]"
            >Techogma</span
          >
        </div>

        <div class="text-base text-[#02073e] space-x-6">
          <span class="text-base text-[#02073e]">Home </span>
          <span class="text-base text-[#02073e]">Services </span>
          <span class="text-base text-[#02073e]">Motivation</span>
          <span class="text-base text-[#02073e]"> Team</span>
          <span class="text-base text-[#02073e]"> About</span>
        </div>
      </div>

      <div class="flex space-x-10 items-center w-64 justify-between">
        <p class="text-base font-medium text-right text-white">Contact Us</p>
        <div class="">
          <p class="text-base font-bold text-right text-white">Subscribe</p>
          <svg
            width="74"
            height="6"
            viewBox="0 0 74 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class=""
            preserveAspectRatio="none"
          >
            <path
              d="M62.7931 0.151903C62.8752 0.296791 62.9488 0.446688 63.0135 0.600778C63.0462 0.727121 63.0677 0.856294 63.0778 0.986688L62.8158 1.25587C59.7902 1.11631 56.7369 1.10857 53.685 1.15018C50.6331 1.19179 47.5858 1.23193 44.5378 1.44146C44.6999 1.44919 44.862 1.4584 45.0241 1.46392C47.6291 1.55193 50.2345 1.63294 52.8392 1.73015C53.8851 1.76918 54.9288 1.84762 55.974 1.90211C58.3537 2.02695 60.7351 2.13557 63.1137 2.2744C65.0032 2.38487 66.8905 2.52517 68.7778 2.66178C69.9097 2.7439 71.0402 2.84222 72.1706 2.93796C72.4138 2.95858 72.6545 2.99798 72.9172 3.03149C72.9557 3.15548 73.0145 3.2717 73.091 3.37505C73.2361 3.51866 73.1664 3.65749 73.1326 3.79779C73.0943 3.92053 73.0479 4.04037 72.9936 4.15644C72.7924 4.14761 72.6164 4.14503 72.4419 4.1314C71.2666 4.03713 70.0916 3.94201 68.9168 3.84602C68.7629 3.81987 68.6062 3.81541 68.4511 3.83277C67.9223 3.90878 67.3862 3.91423 66.856 3.84897C64.2733 3.72855 61.6875 3.6932 59.1013 3.67258C56.5826 3.65307 54.0639 3.60667 51.5449 3.60998C48.5811 3.61403 45.6174 3.65454 42.6536 3.68768C40.8708 3.70756 39.0877 3.73261 37.3052 3.77569C35.8801 3.80994 34.4556 3.86701 33.0315 3.92777C30.6722 4.02818 28.3133 4.13496 25.9547 4.24813C24.3304 4.32546 22.7058 4.40537 21.0844 4.50185C19.751 4.58102 18.4182 4.68596 17.0872 4.77839C16.2653 4.8351 15.4427 4.88076 14.6219 4.94557C13.0686 5.06831 11.5163 5.19633 9.96493 5.32963C8.96955 5.41506 7.97062 5.50344 6.97879 5.6117C6.25033 5.66528 5.52761 5.78305 4.81845 5.96373C4.45585 6.06905 4.26245 5.94569 4.25783 5.62864C4.25783 5.53548 4.27384 5.44232 4.27597 5.34915C4.27597 5.27551 4.26921 5.20186 4.26353 5.09544C4.07405 5.11017 3.90483 5.12527 3.73561 5.13668C3.60258 5.14989 3.46897 5.15603 3.33532 5.15509C2.92224 5.13926 2.81596 5.05236 2.73597 4.68744C2.72104 4.61858 2.70468 4.54935 2.68584 4.4665C2.36821 4.45555 2.05042 4.48173 1.73846 4.54456C1.56391 4.57439 1.39184 4.61821 1.21623 4.64067C0.920812 4.68007 0.733474 4.57696 0.680861 4.34019C0.654687 4.18864 0.636525 4.03571 0.626465 3.88211C0.88937 3.7288 1.17967 3.63258 1.47966 3.59931C2.60777 3.3551 3.7489 3.18061 4.89701 3.07678C6.75814 2.91083 8.6201 2.75237 10.4829 2.60139C11.8354 2.48969 13.1887 2.3834 14.5426 2.2825C15.763 2.19081 16.9845 2.11127 18.2042 2.01848C19.8907 1.89033 21.5761 1.75445 23.2618 1.62226C24.4157 1.53143 25.5697 1.44047 26.7236 1.3494C28.8758 1.17854 31.0272 1.00215 33.1801 0.837554C34.045 0.771272 34.9131 0.730765 35.7795 0.67553C36.8459 0.607775 37.9124 0.524923 38.9789 0.470056C40.7585 0.378366 42.5392 0.305087 44.3195 0.220761C48.1048 0.0429045 51.8915 -0.000176695 55.6832 0.00203271C57.1542 0.00203271 58.625 0.0151644 60.0956 0.0414317C60.979 0.0568975 61.8677 0.112502 62.7931 0.151903ZM17.4381 3.18762C18.0698 3.25096 24.4314 2.99945 25.2494 2.9074C25.2814 2.90371 25.308 2.86689 25.3372 2.84516C25.3301 2.69087 25.2334 2.5966 25.0507 2.59881C24.7392 2.60249 24.4271 2.61391 24.1171 2.63858C23.0087 2.72659 21.9013 2.8227 20.7933 2.91402C19.6749 3.00608 18.5565 3.09728 17.4381 3.18762Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
    </div> -->

    <div class="flex flex-col space-y-6 pt-24">
      <p
        class="md:text-5xl font-bold text-center text-[#02073e] md:leading-[4rem] text-[2rem] leading-[3rem]"
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

<style scoped>
.home-bg {
  background-image: url("../assets/home_background.svg");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
