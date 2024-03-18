
<template>
  <!-- User Profile  -->
    <div v-if="!editMode"
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0"  aria-label="Account Information"
    >
      <div class="rounded-[20px] bg-white mb-0 px-6 py-6">
        <div class="flex justify-between">
          <h6 class="text-gray-dark text-xl font-bold font-roboto">My account</h6>
           <!-- Edit Button -->
           <button class="bg-none border-none cursor-pointer flex justify-center items-center" aria-label="Edit User Information"  @click="toggleEditMode" @mouseover="showName = true" @mouseout="showName = false">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[20px] h-[20px]" aria-label="Edit icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
<span v-if="showName" class="absolute right-[30px] -top-[3px] text-[16px] text-gray-dark font-roboto font-[500]">Edit</span>
          </button>
        
        </div>
<div class="flex flex-col lg:flex-row my-[30px]">
  <div class="flex justify-center items-center w-[200px] h-[200px]" aria-label="User image representation">
    <img alt="user representation"
              class="w-full rounded-[50%] h-[100%] align-middle border-none shadow-lg"
              :src="profile.image">
  </div>
  <div class="flex flex-col pl-[20px] py-[15px] md:py-[10px] justify-center">
   <div class="flex flex-row py-[10px]" aria-label="User Name"> 
    <h1 class="font-roboto text-[16px] md:text-[20px] text-gray-dark font-[600]">Name:</h1>
    <h2 class="font-roboto text-[16px] md:text-[20px] text-[#000] font-[600] pl-[5px]">{{ profile.firstName }} {{ profile.surname }}</h2>
  </div>
   <div class="flex flex-row py-[10px]" aria-label="User matric number"> 
    <h1 class="font-roboto text-[16px] md:text-[20px] text-gray-dark font-[600]">Matric number:</h1>
    <h2 class="font-roboto text-[16px] md:text-[20px] text-[#000] font-[600] pl-[5px]">{{ profile.matricNumber }}</h2>
  </div>
   <div class="flex flex-row py-[10px]" aria-label="User level"> 
    <h1 class="font-roboto text-[16px] md:text-[20px] text-gray-dark font-[600]">Level:</h1>
    <h2 class="font-roboto text-[16px] md:text-[20px] text-[#000] font-[600] pl-[5px]">{{ profile.level }}</h2>
  </div>
  </div>
</div>
      </div>
     
    </div>
    <!-- Settings -->
    <div v-else>
      <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0"  aria-label="Settings"
    >
      <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-left">
          <h6 class="text-gray-dark text-xl font-bold font-roboto">Settings</h6>
        </div>
      </div>
      <div class="flex-auto px-8 lg:px-10 py-10 pt-0">
        <form aria-label="User Information">
          <h6 class="text-gray-dark font-roboto text-sm mt-3 mb-6 font-bold uppercase">
            User Information
          </h6>
          <div class="flex flex-wrap">
            <div class="relative w-full mb-3  px-4 py-[20px]">
        <label class="block uppercase text-gray-dark text-xs font-bold font-roboto mb-2" for="image">
          Profile Image
        </label>
        <input type="file" class="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-dark bg-white rounded text-sm shadow focus:outline-light-purple-bg w-full" id="image" accept="image/*" @change="handleImageChange" />
      </div>
            <div class="w-full lg:w-6/12 px-4 py-[20px]">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-dark text-xs font-bold mb-2 font-roboto"
                  for="firstName"
                >
                  First name
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-dark bg-white rounded text-sm shadow focus:outline-light-purple-bg  w-full "
                  id="firstName"
                  aria-label="First Name"
                  v-model="editedProfile.firstName"
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4 py-[20px]">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-dark text-xs font-bold font-roboto mb-2"
                  for="surname"
                 
                >
                  Surname
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-dark bg-white rounded text-sm shadow focus:outline-light-purple-bg w-full "
                id="surname"
                  aria-label="Surname"
                  v-model="editedProfile.surname"
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4 py-[20px]">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-dark text-xs font-bold font-roboto mb-2"
                  for="matricNumber"
                >
                Matric Number
                </label>
                <input
                  type="number"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-dark bg-white rounded text-sm shadow focus:outline-light-purple-bg w-full"
                  id="matricNumber"
                  aria-label="Matric Number"
                  v-model="editedProfile.matricNumber"
                />
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4 py-[20px]">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-dark font-roboto text-xs font-bold mb-2"
                  for="level"
                >
               Level
                </label>
                <input
                  type="number"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-bgray-dark font-roboto bg-white rounded text-sm shadow focus:outline-light-purple-bg w-full "
                 id="level"
                  aria-label="Level"
                  v-model="editedProfile.level"
                />
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center px-[5px] py-[8px]">
          <button @click="toggleEditMode" class="text-white font-roboto text-[14px] bg-purple border-none py-[10px] px-[20px] rounded-[5px] hover:bg-[#cd9cf2]" >Cancel</button>
      <button @click="saveChanges" class="text-white font-roboto text-[14px] bg-purple border-none py-[10px] px-[20px] rounded-[5px] hover:bg-[#cd9cf2]">Save</button>
    </div>
        </form>
      </div>
    </div>
    </div>
  </template>

  <script>

  import axios from 'axios';


  export default {
    data() {
      return{
        profile: [],
        editMode: false,
        editedProfile: {
        firstName: "",
        surname: "",
        matricNumber: null,
        level: null,
        image: null
      },
      showName: false,
      };
    },
    components: {

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
      async fetchData() {
        try {
          const response = await axios.get('/static/data.json');
          this.profile = response.data.profile;
        //  console.log("Profile Image:", this.profile);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },

      toggleEditMode() {
      this.editMode = !this.editMode;
      if (this.editMode) {
        // Initialize editedProfile with userProfile data
        this.editedProfile = { ...this.profile };
      }
    },
    saveChanges() {
      this.profile = { ...this.editedProfile };
      localStorage.setItem('profile', JSON.stringify(this.profile));
      // Exit edit mode
      this.toggleEditMode();
    },
    handleImageChange(event) {
      const file = event.target.files[0];
      // Convert the selected image to a data URL
      const reader = new FileReader();
      reader.onload = () => {
        this.editedProfile.image = reader.result;
      };
      reader.readAsDataURL(file);
    }
    }
  }
</script>