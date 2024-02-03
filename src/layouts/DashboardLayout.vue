<template>
    <div>
      <sidebar />
      <div class="relative md:ml-64">
        <navbar />
        <div class="px-4 md:px-10 mx-auto w-full bg-white-bg">
          <router-view />
        </div>
      </div>
    </div>
  </template>
  <script>
  import Navbar from "@/components/Navbars/NavBar.vue";
  import Sidebar from "@/components/Sidebar/SideBar.vue";
  
  export default {
    name: "admin-layout",
    components: {
      Navbar,
      Sidebar,
  
    },
  };
  </script>
  