<template>
    <div>
      <sidebar />
      <div class="relative md:ml-64">
        <navbar />
        <header-stats />
        <div class="px-4 md:px-10 mx-auto w-full -m-24">
          <router-view />
        </div>
      </div>
    </div>
  </template>
  <script>
  import Navbar from "@/components/Navbars/NavBar.vue";
  import Sidebar from "@/components/Sidebar/SideBar.vue";
  import HeaderStats from "@/components/Headers/HeaderStats.vue";
  export default {
    name: "admin-layout",
    components: {
      Navbar,
      Sidebar,
      HeaderStats,
  
    },
  };
  </script>
  