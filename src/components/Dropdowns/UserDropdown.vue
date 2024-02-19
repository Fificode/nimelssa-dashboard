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
              class="w-full rounded-full align-middle border-none shadow-lg"
              :src="image"
            />
           
          </span>
          <p class="font-roboto font-[600] text-[14px] text-gray-dark pl-[6px] hidden lg:block ">Stephanie Fabian
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
      <p class="font-roboto text-[16px] text-gray-dark  py-2 px-4 block w-full whitespace-nowrap bg-transparent text-center font-[600] md:hidden">Stephanie Fabian</p>
      <div class="h-0 my-2 border border-solid border-gray md:hidden"></div>
        <a
          href="javascript:void(0);"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-dark font-roboto"
          role="menuitem"
        >
          User profile
        </a>
      </div>
    </div>
  </template>
  
  <script>
  import { createPopper } from "@popperjs/core";
  
  import image from "/img/team-2-800x800.jpg";
  
  export default {
    data() {
      return {
        dropdownPopoverShow: false,
        image: image,
      };
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
    },
  };
  </script>
  