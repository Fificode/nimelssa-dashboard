<template>
    <div class="pb-28 pt-[40px] md:pt-12 mt-[70px]  min-h-[100vh]" aria-label="Settings Page">
      <div class="w-full px-4">
        <card-settings aria-label="Settings card"/>
      </div>
     
    </div>
  </template>
  <script>
  import CardSettings from "@/components/Settings/CardSettings.vue";
  
  export default {
    components: {
      CardSettings,
    
    },
  };
  </script>
  