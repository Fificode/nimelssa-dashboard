<template>
    <div role="main" aria-label="Dashboard Layout">
      <sidebar :headerText="headerText" :setActiveItem="setActiveItem" />
      <div class="relative md:ml-64">
        <navbar :headerText="headerText" />
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
    data(){
      return{
        headerText: "Overview", // Initial header text
      }
    },
    methods: {
    setActiveItem(item) {
      this.headerText = item.label; // Update header text when sidebar item is clicked
    },
  },
  };
  </script>
  