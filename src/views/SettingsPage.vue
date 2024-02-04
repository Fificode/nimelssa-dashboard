<template>
    <div class="pb-28 pt-[40px] md:pt-12 md:mt-[0px] -mt-[20px] min-h-[100vh]">
      <div class="w-full px-4">
        <card-settings />
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
  