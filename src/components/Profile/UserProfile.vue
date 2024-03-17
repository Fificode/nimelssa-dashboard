
<template>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0"  aria-label="Account Information"
    >
      <div class="rounded-[20px] bg-white mb-0 px-6 py-6">
        <div class="flex justify-between">
          <h6 class="text-gray-dark text-xl font-bold font-roboto">My account</h6>
           <!-- Edit Button -->
           <button class="bg-none border-none cursor-pointer flex justify-center items-center" aria-label="Edit User Information">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[20px] h-[20px]" aria-label="Edit icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>

          </button>
        </div>
<div class="flex flex-col lg:flex-row my-[30px]">
  <div class="flex justify-center items-center w-[200px] h-[200px]">
    <img alt="user representation"
              class="w-full rounded-[50%] h-[100%] align-middle border-none shadow-lg"
              :src="profile.image">
  </div>
  <div class="flex flex-col pl-[20px] py-[15px] md:py-[10px] justify-center">
   <div class="flex flex-row py-[10px]"> 
    <h1 class="font-roboto text-[16px] md:text-[20px] text-gray-dark font-[600]">Name:</h1>
    <h2 class="font-roboto text-[16px] md:text-[20px] text-[#000] font-[600] pl-[5px]">{{ profile.firstName }} {{ profile.surname }}</h2>
  </div>
   <div class="flex flex-row py-[10px]"> 
    <h1 class="font-roboto text-[16px] md:text-[20px] text-gray-dark font-[600]">Matric number:</h1>
    <h2 class="font-roboto text-[16px] md:text-[20px] text-[#000] font-[600] pl-[5px]">{{ profile.matricNumber }}</h2>
  </div>
   <div class="flex flex-row py-[10px]"> 
    <h1 class="font-roboto text-[16px] md:text-[20px] text-gray-dark font-[600]">Level:</h1>
    <h2 class="font-roboto text-[16px] md:text-[20px] text-[#000] font-[600] pl-[5px]">{{ profile.level }}</h2>
  </div>
  </div>
</div>
      </div>
     
    </div>
  </template>

  <script>

  import axios from 'axios';

  export default {
    data() {
      return{
        profile: []
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get('/static/data.json');
          this.profile = response.data.profile;
        //  console.log("Profile Image:", this.profile);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
    }
  }
</script>