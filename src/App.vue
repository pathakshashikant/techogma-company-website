<script setup lang="ts">
// import { RouterLink, RouterView } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="home-bg">
    <div class="h-10 flex items-center justify-between py-12 px-[19rem]">
      <div class="flex items-center space-x-32">
        <div class="flex space-x-2 items-center">
          <img src="./assets/company_logo.png" class="object-cover" />
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
    </div>

    <div class="flex flex-col space-y-6 pt-24">
      <p class="text-5xl font-bold text-center text-[#02073e] leading-[4rem]">
        Our focus is to see delightful Nepal <br />
        with our tailored digital services.
      </p>
      <p class="text-lg text-center text-[#02073e]">
        We aim to be a pioneer of digital Nation Building
      </p>
    </div>
    <div class="flex flex-col justify-center items-center pt-12 relative">
      <div
        class="transition ease-in-out delay-150 w-[152.05px] h-[60px] z-20 cursor-pointer rounded-[5px] bg-[#0a8080] flex justify-center items-center hover:scale-105 hover:bg-[#097272] hover:-translate-y-1 duration-300"
      >
        <p class="text-lg font-bold text-center text-white">Subscribe</p>
      </div>
      <img
        src="./assets/collaboration_home.png"
        class="absolute top-12 z-10"
        alt="avatar-content"
      />
    </div>
  </div>
  <div class="w-full bg-[#fff5ed] relative">
    <div class="pt-36">
      <div class="flex flex-col space-y-6">
        <p class="text-[34px] font-bold text-center text-[#0f2137]">
          Grow your startup with our Service
        </p>
        <p class="text-base text-center text-[#0f2137] leading-[1.8rem]">
          Build an incredible workplace and grow your business with Gusto’s
          <br />
          all-in-one platform with amazing contents.
        </p>
      </div>

      <div class="flex space-x-2 px-64 py-24">
        <div class="flex space-x-2">
          <img src="image-58.png" class="w-[88px] h-[88px] object-cover" />
          <div>
            <p class="text-lg font-bold text-left text-[#0f2137]">
              Marketing &#x26; advertising
            </p>
            <p class="text-base text-left text-[#343d48]">
              Get your info tests delivered athome collect a sample from theyour
              pogress tests.
            </p>
          </div>
        </div>
        <div class="flex space-x-2">
          <img src="image-62.png" class="w-[88px] h-[88px] object-cover" />
          <div>
            <p
              class="w-[265px] h-[30px] text-lg font-bold text-left text-[#0f2137]"
            >
              Ultimate development
            </p>
            <p class="text-base text-left text-[#343d48]">
              Get your info tests delivered athome collect a sample from theyour
              pogress tests.
            </p>
          </div>
        </div>
        <div class="flex space-x-2">
          <img src="image-64.png" class="w-[88px] h-[88px] object-cover" />
          <div>
            <p class="text-lg font-bold text-left text-[#0f2137]">
              Business Enterprise
            </p>
            <p class="text-base text-left text-[#343d48]">
              Get your info tests delivered athome collect a sample from theyour
              pogress tests.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full py-28">
        <div class="flex space-x-6 justify-center">
          <div class="flex items-baseline -mt-4">
            <div class="w-[70px] h-0.5 bg-[#dbdee7]"></div>
            <svg
              width="50"
              height="43"
              viewBox="0 0 50 43"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[50px] h-[42.31px] opacity-70"
              preserveAspectRatio="xMidYMid meet"
            >
              <g opacity="0.1">
                <path
                  d="M17.3076 19.231H10.5767C9.7754 19.231 9.09415 18.9506 8.53319 18.3896C7.97255 17.8287 7.69186 17.1476 7.69186 16.3461V15.385C7.69186 13.2614 8.4432 11.4487 9.94579 9.94611C11.4483 8.44404 13.2613 7.6927 15.3847 7.6927H17.3076C17.8284 7.6927 18.2789 7.50231 18.6597 7.12185C19.0403 6.74118 19.2305 6.29062 19.2305 5.76976V1.92325C19.2305 1.4025 19.0401 0.951524 18.6597 0.570851C18.279 0.190705 17.8285 0 17.3076 0H15.3847C13.3011 0 11.3134 0.406037 9.42009 1.21695C7.52704 2.02839 5.88964 3.12526 4.50724 4.50766C3.12495 5.88942 2.02839 7.52694 1.21706 9.4202C0.405721 11.3132 0 13.3015 0 15.3849V36.5382C0 38.1417 0.560642 39.5031 1.68245 40.6253C2.80437 41.7469 4.16687 42.3077 5.76934 42.3077H17.3083C18.9107 42.3077 20.2728 41.7469 21.3948 40.6253C22.5164 39.5031 23.0774 38.1417 23.0774 36.5382V25.0003C23.0774 23.3972 22.5164 22.0357 21.3941 20.9134C20.2726 19.7919 18.91 19.231 17.3076 19.231Z"
                  fill="red"
                ></path>
                <path
                  d="M48.3184 20.9134C47.1969 19.7919 45.8347 19.231 44.2319 19.231H37.5012C36.7003 19.231 36.0184 18.9506 35.4584 18.3896C34.8972 17.8287 34.6171 17.1476 34.6171 16.3461V15.385C34.6171 13.2614 35.3684 11.4487 36.8702 9.94611C38.3722 8.44404 40.1852 7.6927 42.3095 7.6927H44.2321C44.7529 7.6927 45.2038 7.50231 45.5842 7.12185C45.9645 6.74118 46.1555 6.29062 46.1555 5.76976V1.92325C46.1555 1.4025 45.9646 0.951524 45.5842 0.570851C45.2039 0.190705 44.753 0 44.2321 0H42.3095C40.2248 0 38.2375 0.406037 36.3437 1.21695C34.451 2.02839 32.8141 3.12526 31.4317 4.50766C30.0493 5.88942 28.9522 7.52694 28.1412 9.4202C27.3301 11.3132 26.9238 13.3015 26.9238 15.3849V36.5382C26.9238 38.1417 27.485 39.5031 28.6065 40.6253C29.7281 41.7469 31.0903 42.3077 32.693 42.3077H44.2313C45.8341 42.3077 47.1962 41.7469 48.3177 40.6253C49.44 39.5031 50 38.1417 50 36.5382V25.0003C50.0001 23.3971 49.44 22.0357 48.3184 20.9134Z"
                  fill="red"
                ></path>
              </g>
            </svg>
          </div>

          <div class="flex flex-col space-y-10">
            <p
              class="w-[846px] text-2xl text-left text-[#0F2137] font-[b612] leading-[50px]"
            >
              “Whatever we create in Techogma looks absolutely brilliant. It
              helps show our work in the best light, and is downright impressive
              when clients see a Qwilr Page we have made for them.”
            </p>
            <p class="text-base font-medium text-left text-[#7e8896]">
              By Raushan Ranjan, CEO of Techogma
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full py-28">
    <div class="flex justify-center flex-col w-full">
      <p class="text-[34px] font-bold text-center text-[#0f2137]">
        Meet our superheros
      </p>
      <p class="text-base text-center text-[#0f2137] pt-8">
        Build an incredible workplace and grow your business with Gusto’s
        all-in-one <br />
        platform with amazing contents.
      </p>
    </div>

    <div class="flex space-x-4 items-center py-28 w-full justify-center">
      <div class="w-[380px] flex flex-col space-y-2">
        <div
          class="w-[380px] h-[420px] rounded-[5px] bg-[#fffaf6] mix-blend-darken"
        ></div>
        <p class="w-48 text-xl font-medium text-left text-[#0f2137]">
          Emmalee Mclain
        </p>
        <p class="w-48 text-base text-left text-[#7589a1]">Product Designer</p>

        <svg
          width="82"
          height="20"
          viewBox="0 0 82 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[81.43px] h-[19.98px]"
          preserveAspectRatio="none"
        >
          <path
            d="M18.0952 3.98827C17.4294 4.31462 16.714 4.53518 15.963 4.63438C16.7295 4.12654 17.3181 3.32241 17.5953 2.36429C16.878 2.83446 16.0835 3.17595 15.2379 3.36001C14.5606 2.56254 13.5958 2.06421 12.5281 2.06421C10.4778 2.06421 8.8155 3.90136 8.8155 6.16736C8.8155 6.48895 8.84839 6.80213 8.91167 7.10243C5.82623 6.93132 3.09073 5.29776 1.2597 2.8153C0.94014 3.42132 0.757062 4.12617 0.757062 4.87814C0.757062 6.30167 1.41253 7.55761 2.40866 8.29341C1.80006 8.27212 1.22766 8.08755 0.727079 7.78022C0.726814 7.79734 0.726815 7.81453 0.726815 7.83179C0.726815 9.81987 2.0065 11.4783 3.70483 11.8552C3.39328 11.949 3.06532 11.9991 2.7267 11.9991C2.48749 11.9991 2.25491 11.9734 2.02828 11.9255C2.50066 13.5557 3.87169 14.742 5.49622 14.7751C4.22566 15.8756 2.6249 16.5316 0.8856 16.5316C0.585966 16.5316 0.290435 16.5122 0 16.4743C1.64293 17.6385 3.59436 18.3178 5.69088 18.3178C12.5194 18.3178 16.2535 12.0654 16.2535 6.64316C16.2535 6.46525 16.2499 6.28828 16.2428 6.11235C16.9681 5.53383 17.5975 4.81113 18.0952 3.98827Z"
            fill="#55ACEE"
          ></path>
          <path
            d="M40.7144 0C35.7181 0 31.6667 4.47709 31.6667 10.0001C31.6667 14.4184 34.2591 18.1668 37.8541 19.4891C38.3062 19.5817 38.4722 19.2722 38.4722 19.0081C38.4722 18.7696 38.4638 17.9819 38.4599 17.1463C35.9429 17.7512 35.4117 15.9664 35.4117 15.9664C35.0002 14.8105 34.4072 14.5032 34.4072 14.5032C33.5863 13.8825 34.469 13.8953 34.469 13.8953C35.3776 13.9658 35.856 14.9258 35.856 14.9258C36.6629 16.4546 37.9726 16.0126 38.4889 15.7571C38.5701 15.1107 38.8045 14.6696 39.0633 14.4199C37.0537 14.167 34.9411 13.3095 34.9411 9.47779C34.9411 8.38601 35.2946 7.49394 35.8734 6.79362C35.7794 6.54175 35.4697 5.52465 35.961 4.14722C35.961 4.14722 36.7208 3.87845 38.4498 5.17226C39.1715 4.95069 39.9455 4.83958 40.7144 4.83577C41.4833 4.83958 42.2579 4.95069 42.9809 5.17226C44.7078 3.87845 45.4666 4.14722 45.4666 4.14722C45.959 5.52465 45.6492 6.54175 45.5553 6.79362C46.1354 7.49394 46.4864 8.38601 46.4864 9.47779C46.4864 13.3187 44.3698 14.1644 42.3551 14.4119C42.6796 14.7223 42.9688 15.3308 42.9688 16.2638C42.9688 17.6018 42.9583 18.6787 42.9583 19.0081C42.9583 19.2742 43.1212 19.586 43.5798 19.4878C47.1728 18.164 49.7619 14.4169 49.7619 10.0001C49.7619 4.47709 45.7111 0 40.7144 0ZM35.0553 14.2453C35.0354 14.295 34.9647 14.3099 34.9003 14.2758C34.8346 14.2432 34.7978 14.1754 34.8191 14.1256C34.8385 14.0744 34.9094 14.0602 34.9749 14.0945C35.0407 14.1271 35.0781 14.1955 35.0553 14.2453ZM35.5004 14.6842C35.4572 14.7285 35.3729 14.7079 35.3157 14.638C35.2565 14.5683 35.2454 14.4751 35.2891 14.4302C35.3336 14.386 35.4154 14.4067 35.4748 14.4764C35.5339 14.547 35.5455 14.6395 35.5004 14.6842ZM35.8057 15.2458C35.7503 15.2884 35.6596 15.2485 35.6036 15.1595C35.5482 15.0706 35.5482 14.964 35.6048 14.9212C35.661 14.8785 35.7503 14.9169 35.8071 15.0052C35.8623 15.0956 35.8623 15.2023 35.8057 15.2458ZM36.3221 15.8962C36.2725 15.9566 36.1668 15.9404 36.0895 15.8579C36.0104 15.7773 35.9884 15.6629 36.0381 15.6024C36.0883 15.5418 36.1946 15.5589 36.2725 15.6407C36.351 15.7211 36.375 15.8364 36.3221 15.8962ZM36.9894 16.1157C36.9675 16.1941 36.8658 16.2297 36.7633 16.1964C36.661 16.1621 36.594 16.0704 36.6147 15.9912C36.636 15.9124 36.7382 15.8753 36.8414 15.9109C36.9436 15.945 37.0107 16.0361 36.9894 16.1157ZM37.7489 16.2089C37.7514 16.2913 37.6645 16.3597 37.5569 16.3612C37.4488 16.3639 37.3613 16.2971 37.3601 16.216C37.3601 16.1327 37.445 16.065 37.5532 16.063C37.6608 16.0607 37.7489 16.1269 37.7489 16.2089ZM38.495 16.1773C38.5078 16.2577 38.4331 16.3404 38.3263 16.3624C38.2212 16.3836 38.124 16.3339 38.1107 16.2541C38.0976 16.1716 38.1737 16.089 38.2786 16.0676C38.3856 16.0471 38.4813 16.0955 38.495 16.1773Z"
            fill="#161614"
          ></path>
          <path
            d="M72.3803 0.664062C77.0455 0.664062 80.82 4.83594 80.82 9.98438C80.82 15.1328 77.0455 19.3125 72.3803 19.3125C67.7151 19.3125 63.9406 15.1406 63.9406 9.99219C63.9406 4.84375 67.7151 0.664062 72.3803 0.664062Z"
            fill="#E74D89"
          ></path>
          <path
            d="M72.3809 19.9766C67.3906 19.9766 63.3333 15.5 63.3333 9.99219C63.3333 4.47656 67.3906 0 72.3809 0C77.3713 0 81.4286 4.47656 81.4286 9.98438C81.4286 15.4922 77.3713 19.9766 72.3809 19.9766ZM80.0078 11.3516C79.7463 11.2578 77.6187 10.5625 75.1942 10.9844C76.205 14.0469 76.6149 16.5469 76.6927 17.0625C78.4315 15.7734 79.6685 13.7266 80.0078 11.3516ZM75.3992 17.8516C75.2861 17.1016 74.8337 14.4922 73.7522 11.3828C73.7381 11.3906 73.7169 11.3984 73.7027 11.3984C69.3415 13.0781 67.7794 16.4141 67.638 16.7266C68.9457 17.8516 70.5926 18.5234 72.3809 18.5234C73.4483 18.5312 74.4732 18.2891 75.3992 17.8516ZM66.6413 15.7031C66.8181 15.375 68.9386 11.5 72.9252 10.0703C73.0242 10.0312 73.1302 10 73.2291 9.96875C73.0383 9.48438 72.8262 9 72.6001 8.52344C68.7407 9.79688 64.9944 9.74219 64.6551 9.73438C64.6551 9.82031 64.648 9.90625 64.648 9.99219C64.6551 12.1875 65.4044 14.1875 66.6413 15.7031ZM64.8177 8.25C65.164 8.25781 68.3448 8.27344 71.9639 7.21094C70.6845 4.69531 69.2991 2.58594 69.1012 2.28125C66.9312 3.40625 65.3195 5.60938 64.8177 8.25ZM70.5714 1.70312C70.7835 2.01562 72.1901 4.125 73.4553 6.69531C76.205 5.55469 77.3642 3.83594 77.5056 3.61719C76.1413 2.28125 74.346 1.46875 72.3809 1.46875C71.7589 1.46875 71.151 1.55469 70.5714 1.70312ZM78.3608 4.60156C78.1983 4.84375 76.9047 6.67969 74.0491 7.96875C74.2258 8.375 74.4025 8.78906 74.5651 9.20312C74.6216 9.35156 74.6782 9.5 74.7347 9.64062C77.3076 9.28125 79.8594 9.85938 80.1138 9.91406C80.0926 7.90625 79.4423 6.05469 78.3608 4.60156Z"
            fill="#B2215A"
          ></path>
        </svg>
      </div>
      <div class="w-[380px] flex flex-col space-y-2">
        <div
          class="w-[380px] h-[420px] rounded-[5px] bg-[#f7fbfb] mix-blend-darken"
        ></div>
        <p class="text-xl font-medium text-left text-[#0f2137]">Daisy Morgan</p>
        <p class="text-base text-left text-[#7589a1]">Lead developer</p>
        <svg
          width="50"
          height="20"
          viewBox="0 0 50 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[49.76px] h-[19.98px]"
          preserveAspectRatio="none"
        >
          <path
            d="M18.0952 3.98827C17.4294 4.31462 16.714 4.53518 15.963 4.63438C16.7295 4.12654 17.3181 3.32241 17.5953 2.36429C16.878 2.83446 16.0835 3.17595 15.2379 3.36001C14.5606 2.56254 13.5958 2.06421 12.5281 2.06421C10.4778 2.06421 8.8155 3.90136 8.8155 6.16736C8.8155 6.48895 8.84839 6.80213 8.91167 7.10243C5.82623 6.93132 3.09073 5.29776 1.2597 2.8153C0.94014 3.42132 0.757062 4.12617 0.757062 4.87814C0.757062 6.30167 1.41253 7.55761 2.40866 8.29341C1.80006 8.27212 1.22766 8.08755 0.727079 7.78022C0.726814 7.79734 0.726815 7.81453 0.726815 7.83179C0.726815 9.81987 2.0065 11.4783 3.70483 11.8552C3.39328 11.949 3.06532 11.9991 2.7267 11.9991C2.48749 11.9991 2.25491 11.9734 2.02828 11.9255C2.50066 13.5557 3.87169 14.742 5.49622 14.7751C4.22566 15.8756 2.6249 16.5316 0.8856 16.5316C0.585966 16.5316 0.290435 16.5122 0 16.4743C1.64293 17.6385 3.59436 18.3178 5.69088 18.3178C12.5194 18.3178 16.2535 12.0654 16.2535 6.64316C16.2535 6.46525 16.2499 6.28828 16.2428 6.11235C16.9681 5.53383 17.5975 4.81113 18.0952 3.98827Z"
            fill="#55ACEE"
          ></path>
          <path
            d="M40.7149 0.664062C45.3801 0.664062 49.1547 4.83594 49.1547 9.98438C49.1547 15.1328 45.3801 19.3125 40.7149 19.3125C36.0498 19.3125 32.2752 15.1406 32.2752 9.99219C32.2752 4.84375 36.0498 0.664062 40.7149 0.664062Z"
            fill="#E74D89"
          ></path>
          <path
            d="M40.7143 19.9766C35.7239 19.9766 31.6667 15.5 31.6667 9.99219C31.6667 4.47656 35.7239 0 40.7143 0C45.7046 0 49.7619 4.47656 49.7619 9.98438C49.7619 15.4922 45.7046 19.9766 40.7143 19.9766ZM48.3411 11.3516C48.0796 11.2578 45.952 10.5625 43.5275 10.9844C44.5383 14.0469 44.9483 16.5469 45.026 17.0625C46.7649 15.7734 48.0018 13.7266 48.3411 11.3516ZM43.7325 17.8516C43.6194 17.1016 43.167 14.4922 42.0856 11.3828C42.0714 11.3906 42.0502 11.3984 42.0361 11.3984C37.6748 13.0781 36.1127 16.4141 35.9713 16.7266C37.279 17.8516 38.926 18.5234 40.7143 18.5234C41.7816 18.5312 42.8065 18.2891 43.7325 17.8516ZM34.9747 15.7031C35.1514 15.375 37.2719 11.5 41.2585 10.0703C41.3575 10.0312 41.4635 10 41.5625 9.96875C41.3716 9.48438 41.1596 9 40.9334 8.52344C37.074 9.79688 33.3277 9.74219 32.9885 9.73438C32.9885 9.82031 32.9814 9.90625 32.9814 9.99219C32.9885 12.1875 33.7377 14.1875 34.9747 15.7031ZM33.151 8.25C33.4974 8.25781 36.6782 8.27344 40.2972 7.21094C39.0178 4.69531 37.6324 2.58594 37.4345 2.28125C35.2645 3.40625 33.6529 5.60938 33.151 8.25ZM38.9048 1.70312C39.1168 2.01562 40.5234 4.125 41.7887 6.69531C44.5383 5.55469 45.6975 3.83594 45.8389 3.61719C44.4747 2.28125 42.6793 1.46875 40.7143 1.46875C40.0923 1.46875 39.4844 1.55469 38.9048 1.70312ZM46.6942 4.60156C46.5316 4.84375 45.2381 6.67969 42.3824 7.96875C42.5591 8.375 42.7359 8.78906 42.8984 9.20312C42.955 9.35156 43.0115 9.5 43.0681 9.64062C45.641 9.28125 48.1927 9.85938 48.4472 9.91406C48.426 7.90625 47.7757 6.05469 46.6942 4.60156Z"
            fill="#B2215A"
          ></path>
        </svg>
      </div>
      <div class="w-[380px] flex flex-col space-y-2">
        <div
          class="w-[380px] h-[420px] rounded-[5px] bg-[#fbf8f6] mix-blend-darken"
        ></div>
        <p class="w-36 text-xl font-medium text-left text-[#0f2137]">
          Ariyanna Hicks
        </p>
        <p class="w-[192.71px] text-base text-left text-[#7589a1]">
          Experience Designer
        </p>
        <svg
          width="50"
          height="20"
          viewBox="0 0 50 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[49.76px] h-[19.51px]"
          preserveAspectRatio="none"
        >
          <path
            d="M18.0952 3.98827C17.4294 4.31462 16.714 4.53518 15.963 4.63438C16.7295 4.12654 17.3181 3.32241 17.5953 2.36429C16.878 2.83446 16.0835 3.17595 15.2379 3.36001C14.5606 2.56254 13.5958 2.06421 12.5281 2.06421C10.4778 2.06421 8.8155 3.90136 8.8155 6.16736C8.8155 6.48895 8.84839 6.80213 8.91167 7.10243C5.82623 6.93132 3.09073 5.29776 1.2597 2.8153C0.94014 3.42132 0.757062 4.12617 0.757062 4.87814C0.757062 6.30167 1.41253 7.55761 2.40866 8.29341C1.80006 8.27212 1.22766 8.08755 0.727079 7.78022C0.726814 7.79734 0.726815 7.81453 0.726815 7.83179C0.726815 9.81987 2.0065 11.4783 3.70483 11.8552C3.39328 11.949 3.06532 11.9991 2.7267 11.9991C2.48749 11.9991 2.25491 11.9734 2.02828 11.9255C2.50066 13.5557 3.87169 14.742 5.49622 14.7751C4.22566 15.8756 2.6249 16.5316 0.8856 16.5316C0.585966 16.5316 0.290435 16.5122 0 16.4743C1.64293 17.6385 3.59436 18.3178 5.69088 18.3178C12.5194 18.3178 16.2535 12.0654 16.2535 6.64316C16.2535 6.46525 16.2499 6.28828 16.2428 6.11235C16.9681 5.53383 17.5975 4.81113 18.0952 3.98827Z"
            fill="#55ACEE"
          ></path>
          <path
            d="M40.7144 0C35.7181 0 31.6667 4.47709 31.6667 10.0001C31.6667 14.4184 34.2591 18.1668 37.854 19.4891C38.3062 19.5817 38.4722 19.2722 38.4722 19.0081C38.4722 18.7696 38.4638 17.9819 38.4599 17.1463C35.9428 17.7512 35.4117 15.9664 35.4117 15.9664C35.0001 14.8105 34.4071 14.5032 34.4071 14.5032C33.5862 13.8825 34.469 13.8953 34.469 13.8953C35.3776 13.9658 35.8559 14.9258 35.8559 14.9258C36.6629 16.4546 37.9725 16.0126 38.4888 15.7571C38.57 15.1107 38.8045 14.6696 39.0633 14.4199C37.0537 14.167 34.9411 13.3095 34.9411 9.47779C34.9411 8.38601 35.2946 7.49394 35.8733 6.79362C35.7794 6.54175 35.4697 5.52465 35.961 4.14722C35.961 4.14722 36.7207 3.87845 38.4497 5.17226C39.1714 4.95069 39.9454 4.83958 40.7144 4.83577C41.4833 4.83958 42.2579 4.95069 42.9809 5.17226C44.7078 3.87845 45.4665 4.14722 45.4665 4.14722C45.959 5.52465 45.6492 6.54175 45.5552 6.79362C46.1354 7.49394 46.4864 8.38601 46.4864 9.47779C46.4864 13.3187 44.3698 14.1644 42.3551 14.4119C42.6796 14.7223 42.9688 15.3308 42.9688 16.2638C42.9688 17.6018 42.9583 18.6787 42.9583 19.0081C42.9583 19.2742 43.1212 19.586 43.5798 19.4878C47.1728 18.164 49.7619 14.4169 49.7619 10.0001C49.7619 4.47709 45.7111 0 40.7144 0ZM35.0553 14.2453C35.0354 14.295 34.9647 14.3099 34.9002 14.2758C34.8346 14.2432 34.7978 14.1754 34.819 14.1256C34.8385 14.0744 34.9094 14.0602 34.9749 14.0945C35.0406 14.1271 35.0781 14.1955 35.0553 14.2453ZM35.5004 14.6842C35.4572 14.7285 35.3729 14.7079 35.3156 14.638C35.2564 14.5683 35.2454 14.4751 35.2891 14.4302C35.3336 14.386 35.4154 14.4067 35.4747 14.4764C35.5339 14.547 35.5455 14.6395 35.5004 14.6842ZM35.8057 15.2458C35.7502 15.2884 35.6596 15.2485 35.6036 15.1595C35.5481 15.0706 35.5481 14.964 35.6048 14.9212C35.661 14.8785 35.7502 14.9169 35.807 15.0052C35.8623 15.0956 35.8623 15.2023 35.8057 15.2458ZM36.322 15.8962C36.2725 15.9566 36.1668 15.9404 36.0895 15.8579C36.0104 15.7773 35.9884 15.6629 36.0381 15.6024C36.0883 15.5418 36.1945 15.5589 36.2725 15.6407C36.351 15.7211 36.3749 15.8364 36.322 15.8962ZM36.9894 16.1157C36.9675 16.1941 36.8658 16.2297 36.7633 16.1964C36.661 16.1621 36.594 16.0704 36.6147 15.9912C36.6359 15.9124 36.7381 15.8753 36.8414 15.9109C36.9435 15.945 37.0107 16.0361 36.9894 16.1157ZM37.7489 16.2089C37.7514 16.2913 37.6645 16.3597 37.5569 16.3612C37.4487 16.3639 37.3613 16.2971 37.3601 16.216C37.3601 16.1327 37.445 16.065 37.5532 16.063C37.6608 16.0607 37.7489 16.1269 37.7489 16.2089ZM38.4949 16.1773C38.5078 16.2577 38.4331 16.3404 38.3262 16.3624C38.2212 16.3836 38.124 16.3339 38.1106 16.2541C38.0976 16.1716 38.1737 16.089 38.2786 16.0676C38.3856 16.0471 38.4813 16.0955 38.4949 16.1773Z"
            fill="#161614"
          ></path>
        </svg>
      </div>
    </div>
    <div class="w-full bg-gradient-to-b from-[#ebf9ff] to-[#f6f6ff] py-[83px]">
      <div class="flex flex-col w-full items-center sapce-y-12">
        <div class="flex justify-center flex-col">
          <p
            class="text-sm h-[49.94px] font-bold text-center uppercase text-[#ef9e48]"
          >
            Whats the function
          </p>
          <p class="text-4xl font-bold text-center text-[#0f2137]">
            Let’s see how it works
          </p>
        </div>

        <div class="flex space-x-8 py-36 justify-center">
          <div class="relative min-w-[260px]">
            <div class="relative">
              <div
                class="w-[76.94px] h-[89.9px] outer-border border flex justify-center items-center"
              >
                <p class="text-3xl text-left text-[#0f2137]">01</p>
              </div>
              <svg
                width="221"
                height="54"
                viewBox="0 0 221 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-[212px] h-[50.97px] absolute top-0 left-[30%]"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 41.1942C1 41.1942 101.114 -48.1131 212.507 41.1942"
                  stroke="#C2CBDE"
                  stroke-width="1.5"
                  stroke-dasharray="5 5"
                ></path>
                <path
                  d="M196.475 49.6573C196.475 49.6573 217.209 56.5574 219.185 48.74C221.161 40.9227 219.678 32.8389 213.26 21.764"
                  stroke="#C2CBDE"
                  stroke-width="1.5"
                  stroke-dasharray="4 4"
                ></path>
              </svg>
            </div>

            <div class="pt-[56.5px] flex flex-col space-y-4">
              <p class="text-[22px] font-medium text-left text-[#0f2137]">
                <span
                  class="text-[22px] font-medium text-left text-[#0f2137] leading-[155%]"
                  >Set disbursement</span
                ><br /><span
                  class="text-[22px] font-medium text-left text-[#0f2137]"
                  >Instructions</span
                >
              </p>
              <p class="text-[15px] text-left text-[#343d48] leading-[26px]">
                Get your blood tests delivered at <br />
                home collect a sample from the <br />
                your blood tests.
              </p>
            </div>
          </div>
          <div class="relative min-w-[260px]">
            <div class="relative">
              <div
                class="w-[76.94px] h-[89.9px] outer-border border flex justify-center items-center"
              >
                <p class="text-3xl text-left text-[#0f2137]">02</p>
              </div>
              <svg
                width="221"
                height="53"
                viewBox="0 0 227 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-[212px] h-[50.97px] absolute left-[30%] top-[50%]"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 12.2805C1 12.2805 103.856 101.588 218.302 12.2805"
                  stroke="#C2CBDE"
                  stroke-width="1.5"
                  stroke-dasharray="5 5"
                ></path>
                <path
                  d="M201.83 3.81195C201.83 3.81195 223.132 -3.08805 225.162 4.72916C227.193 12.5464 225.67 20.63 219.076 31.7046"
                  stroke="#C2CBDE"
                  stroke-width="1.5"
                  stroke-dasharray="4 4"
                ></path>
              </svg>
            </div>

            <div class="pt-[56.5px] flex flex-col space-y-4">
              <p class="text-[22px] font-medium text-left text-[#0f2137]">
                <span
                  class="text-[22px] font-medium text-left text-[#0f2137] leading-[155%]"
                  >Set disbursement</span
                ><br /><span
                  class="text-[22px] font-medium text-left text-[#0f2137]"
                  >Instructions</span
                >
              </p>
              <p class="text-[15px] text-left text-[#343d48] leading-[26px]">
                Get your blood tests delivered at <br />
                home collect a sample from the <br />
                your blood tests.
              </p>
            </div>
          </div>
          <div class="relative min-w-[260px]">
            <div class="relative">
              <div
                class="w-[76.94px] h-[89.9px] outer-border border flex justify-center items-center"
              >
                <p class="text-3xl text-left text-[#0f2137]">03</p>
              </div>
              <svg
                width="221"
                height="54"
                viewBox="0 0 221 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-[212px] h-[50.97px] absolute top-0 left-[30%]"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 41.1942C1 41.1942 101.114 -48.1131 212.507 41.1942"
                  stroke="#C2CBDE"
                  stroke-width="1.5"
                  stroke-dasharray="5 5"
                ></path>
                <path
                  d="M196.475 49.6573C196.475 49.6573 217.209 56.5574 219.185 48.74C221.161 40.9227 219.678 32.8389 213.26 21.764"
                  stroke="#C2CBDE"
                  stroke-width="1.5"
                  stroke-dasharray="4 4"
                ></path>
              </svg>
            </div>

            <div class="pt-[56.5px] flex flex-col space-y-4">
              <p class="text-[22px] font-medium text-left text-[#0f2137]">
                <span
                  class="text-[22px] font-medium text-left text-[#0f2137] leading-[155%]"
                  >Set disbursement</span
                ><br /><span
                  class="text-[22px] font-medium text-left text-[#0f2137]"
                  >Instructions</span
                >
              </p>
              <p class="text-[15px] text-left text-[#343d48] leading-[26px]">
                Get your blood tests delivered at <br />
                home collect a sample from the <br />
                your blood tests.
              </p>
            </div>
          </div>
          <div class="relative min-w-[260px]">
            <div class="relative">
              <div
                class="w-[76.94px] h-[89.9px] outer-border border flex justify-center items-center"
              >
                <p class="text-3xl text-left text-[#0f2137]">04</p>
              </div>
            </div>

            <div class="pt-[56.5px] flex flex-col space-y-4">
              <p class="text-[22px] font-medium text-left text-[#0f2137]">
                <span
                  class="text-[22px] font-medium text-left text-[#0f2137] leading-[155%]"
                  >Set disbursement</span
                ><br /><span
                  class="text-[22px] font-medium text-left text-[#0f2137]"
                  >Instructions</span
                >
              </p>
              <p class="text-[15px] text-left text-[#343d48] leading-[26px]">
                Get your blood tests delivered at <br />
                home collect a sample from the <br />
                your blood tests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full">
      <div class="flex px-[157.5px] justify-between py-12 flex-col">
        <div
          class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
        >
          <ul class="flex flex-wrap -mb-px">
            <li class="mr-2">
              <a
                href="#"
                class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                >Why choose our service?</a
              >
            </li>
            <li class="mr-2">
              <a
                href="#"
                class="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 hover:border-gray-300 dark:hover:text-gray-300"
                aria-current="page"
                >What's our business promise?</a
              >
            </li>
            <li class="mr-2">
              <a
                href="#"
                class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >What's our role mode plan?</a
              >
            </li>
          </ul>
        </div>

        <div class="flex justify-between py-12">
          <div class="flex flex-col">
            <div class="flex items-center">
              <span
                class="h-[190px] text-[40px] font-bold text-left text-[#0f2137]"
              >
                We will turn your idea in <br />
                the successful business <br />
                model framework &#128525;
              </span>
            </div>
            <div class="w-full">
              <p
                class="w-[512.3px] h-[133px] text-[17px] text-left text-[#02073e]"
              >
                Get your tests delivered at let home collect sample from the
                victory of the managments that supplies best design system
                guidelines ever.
              </p>
            </div>

            <div class=" ">
              <div class="flex basis-[50%] gap-12">
                <div class="flex gap-4 flex-col">
                  <p
                    class="text-base font-medium text-[#02073e] flex items-center space-x-3"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class=""
                      preserveAspectRatio="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.9 -0.000525713C4.88985 -0.000525713 1.93119e-05 4.73357 1.93119e-05 10.555C1.93119e-05 16.3753 4.88985 21.11 10.9 21.11C16.9101 21.11 21.8001 16.3753 21.8001 10.555C21.8001 4.73357 16.9101 -0.000525713 10.9 -0.000525713ZM16.9767 7.03479L10.269 14.3425C10.1039 14.5219 9.87374 14.6144 9.64184 14.6144C9.45785 14.6144 9.27299 14.5559 9.1183 14.4373L4.9259 11.1889C4.56451 10.9091 4.5059 10.3978 4.79516 10.0471C5.08407 9.69752 5.61221 9.6402 5.9736 9.92054L9.54417 12.6866L15.7232 5.9554C16.0302 5.61944 16.5608 5.58936 16.9067 5.88788C17.253 6.18582 17.2845 6.69883 16.9767 7.03479Z"
                        fill="#3FDBB1"
                      ></path>
                    </svg>
                    <span class="text-base font-medium text-left text-[#02073e]"
                      >Medical and vision</span
                    >
                  </p>

                  <p
                    class="text-base font-medium text-[#02073e] flex items-center space-x-3"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class=""
                      preserveAspectRatio="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.9 -0.000525713C4.88985 -0.000525713 1.93119e-05 4.73357 1.93119e-05 10.555C1.93119e-05 16.3753 4.88985 21.11 10.9 21.11C16.9101 21.11 21.8001 16.3753 21.8001 10.555C21.8001 4.73357 16.9101 -0.000525713 10.9 -0.000525713ZM16.9767 7.03479L10.269 14.3425C10.1039 14.5219 9.87374 14.6144 9.64184 14.6144C9.45785 14.6144 9.27299 14.5559 9.1183 14.4373L4.9259 11.1889C4.56451 10.9091 4.5059 10.3978 4.79516 10.0471C5.08407 9.69752 5.61221 9.6402 5.9736 9.92054L9.54417 12.6866L15.7232 5.9554C16.0302 5.61944 16.5608 5.58936 16.9067 5.88788C17.253 6.18582 17.2845 6.69883 16.9767 7.03479Z"
                        fill="#3FDBB1"
                      ></path>
                    </svg>
                    <span class="text-base font-medium text-left text-[#02073e]"
                      >Life insurance</span
                    >
                  </p>
                </div>
                <div class="flex gap-4 flex-col">
                  <p
                    class="text-base font-medium text-[#02073e] flex items-center space-x-3"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class=""
                      preserveAspectRatio="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.9 -0.000525713C4.88985 -0.000525713 1.93119e-05 4.73357 1.93119e-05 10.555C1.93119e-05 16.3753 4.88985 21.11 10.9 21.11C16.9101 21.11 21.8001 16.3753 21.8001 10.555C21.8001 4.73357 16.9101 -0.000525713 10.9 -0.000525713ZM16.9767 7.03479L10.269 14.3425C10.1039 14.5219 9.87374 14.6144 9.64184 14.6144C9.45785 14.6144 9.27299 14.5559 9.1183 14.4373L4.9259 11.1889C4.56451 10.9091 4.5059 10.3978 4.79516 10.0471C5.08407 9.69752 5.61221 9.6402 5.9736 9.92054L9.54417 12.6866L15.7232 5.9554C16.0302 5.61944 16.5608 5.58936 16.9067 5.88788C17.253 6.18582 17.2845 6.69883 16.9767 7.03479Z"
                        fill="#3FDBB1"
                      ></path>
                    </svg>
                    <span class="text-base font-medium text-left text-[#02073e]"
                      >Medical and vision</span
                    >
                  </p>

                  <p
                    class="text-base font-medium text-[#02073e] flex items-center space-x-3"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class=""
                      preserveAspectRatio="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.9 -0.000525713C4.88985 -0.000525713 1.93119e-05 4.73357 1.93119e-05 10.555C1.93119e-05 16.3753 4.88985 21.11 10.9 21.11C16.9101 21.11 21.8001 16.3753 21.8001 10.555C21.8001 4.73357 16.9101 -0.000525713 10.9 -0.000525713ZM16.9767 7.03479L10.269 14.3425C10.1039 14.5219 9.87374 14.6144 9.64184 14.6144C9.45785 14.6144 9.27299 14.5559 9.1183 14.4373L4.9259 11.1889C4.56451 10.9091 4.5059 10.3978 4.79516 10.0471C5.08407 9.69752 5.61221 9.6402 5.9736 9.92054L9.54417 12.6866L15.7232 5.9554C16.0302 5.61944 16.5608 5.58936 16.9067 5.88788C17.253 6.18582 17.2845 6.69883 16.9767 7.03479Z"
                        fill="#3FDBB1"
                      ></path>
                    </svg>
                    <span class="text-base font-medium text-left text-[#02073e]"
                      >Life insurance</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="illustration.png"
            class="w-[633.29px] h-[619.61px] object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  <the-footer></the-footer>
</template>

<style scoped>
.home-bg {
  background-image: url("./assets/home_background.svg");
  background-size: cover;
  height: 111vh;
}
.outer-border {
  background: #ffffff;
  border: 1px;
  border-radius: 44%;
  box-shadow: 0px 14px 20px rgba(76, 119, 171, 0.1);
}
</style>
