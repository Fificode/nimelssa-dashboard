<template>
    <div >
      <a
        class="text-gray-dark block"
        href="#pablo"
        ref="btnDropdownRef"
        v-on:click="toggleDropdown($event)"
        aria-haspopup="true"
      aria-expanded="false"
      >
        <div class="items-center flex">
          <span
            class="w-12 h-12 text-sm text-gray-dark bg-gray inline-flex items-center justify-center rounded-full  mr-[5px]"
          >
            <img
              alt="user representation"
              class="w-full rounded-[50%] h-[100%] align-middle border-none shadow-lg"
              :src="profile.image"
            />
           
          </span>
          <p class="font-roboto font-[600] text-[14px] text-gray-dark pl-[6px] hidden lg:block ">{{ profile.firstName }} {{ profile.surname }}
          </p>
        </div>
      </a>
      <div
        ref="popoverDropdownRef"
        class="bg-white text-base z-50 py-2 list-none text-left rounded shadow-lg min-w-48 "
        v-bind:class="{
          hidden: !dropdownPopoverShow,
          block: dropdownPopoverShow,
        }"
          role="menu"
      aria-hidden="true"
      >
      <p class="font-roboto text-[16px] text-gray-dark  py-2 px-4 block w-full whitespace-nowrap bg-transparent text-center font-[600] md:hidden">{{ profile.firstName }} {{ profile.surname }}</p>
      <div class="h-0 my-2 border-[0.5px] border-solid border-gray md:hidden"></div>
       
        <router-link
  to="/dashboard/profile"
  class="py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-dark font-roboto hover:text-purple text-[16px]"
  aria-label="User Profile"
  role="menuitem"
>
My profile
</router-link>
        
      
      </div>
    </div>
  </template>
  
  <script>
  import { createPopper } from "@popperjs/core";
  import axios from 'axios';
  
  export default {
    data() {
      return {
        dropdownPopoverShow: false,
        profile: [],
      };
    },
    created() {
      const storedProfile = localStorage.getItem('profile');
  if (storedProfile) {
    this.profile = JSON.parse(storedProfile);
  } else {
    // Fetch profile data from JSON file if not found in localStorage
    this.fetchData();
  }
   
  },
    methods: {
      toggleDropdown: function (event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
          this.dropdownPopoverShow = false;
        } else {
          this.dropdownPopoverShow = true;
          createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
            placement: "bottom-start",
          });
        }
      },
      async fetchData() {
      try {
        const response = await axios.get('/static/data.json');
        this.profile = response.data.profile;
      //  console.log("Profile Image:", this.profile);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },

    },
  };
  </script>
  