<template>
  <div class="flex justify-center items-center">
    <div
      class="relative flex flex-col min-w-0 break-words bg-[#fff] w-[300px] mb-6 shadow-lg rounded-lg mt-16 py-[40px]"
      role="region"
      aria-label="Upcoming Test Information"
    >
        <div class="text-center ">
          <h1
            class="text-[23px] font-[500] leading-normal text-text-black mb-2 font-roboto"
          >
            Upcoming Test
          </h1>
          <div
            class="mt-0 mb-2"
          >
           <h2 class="text-[30px] font-[500] leading-normal text-text-black mb-2 font-roboto">
            Friday
           </h2>
           <p class="text-[19px] font-[500] leading-normal text-text-black pt-[20px] mb-2 font-roboto">
            29th March, 2024
           </p>
          </div>
          
        </div>
      </div>
    </div>
  </template>
  <script>
  
  export default {
    name: 'card-reminder',
   
  };
  </script>
  