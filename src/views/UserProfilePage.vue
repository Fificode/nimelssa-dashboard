<template>
    <div class="pb-28 pt-[40px] md:pt-12 mt-[70px]  min-h-[100vh]" aria-label="Settings Page">
      <div class="w-full px-4">
        <user-profile aria-label="Profile card"/>
      </div>
     
    </div>
  </template>
  <script>
  import UserProfile from "@/components/Profile/UserProfile.vue";
  
  export default {
    components: {
      UserProfile
    
    },
  };
  </script>
  