<template>
    <div class="flex flex-wrap pt-24">
      <div class="w-full lg:w-8/12 px-4">
        <CardSettings />
      </div>
      <div class="w-full lg:w-4/12 px-4">
        <CardReminder />
      </div>
    </div>
  </template>
  <script>
  import CardSettings from "@/components/Cards/CardSettings.vue";
  import CardReminder from "@/components/Cards/CardReminder.vue";
  
  export default {
    components: {
      CardSettings,
      CardReminder,
    },
  };
  </script>
  