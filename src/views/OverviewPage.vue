<template>
    <!-- Header -->
    <div class="relative pb-28 md:pt-12 md:mt-[0px] -mt-[20px] ">
      <div class="px-4 md:px-10 mx-auto w-full pt-[40px] md:pt-[10px]">
        <div class="w-full h-[170px] md:h-[160px] bg-light-purple-bg rounded-[10px] flex justify-between ">
  <div class= "flex flex-col justify-center px-[30px] ">
  <p class="text-text-black text-[22px] font-[600] py-[5px]">Welcome, Stephanie</p>
  <p class="text-text-black text-[14px] font-[500] py-[5px]">Ready to start your day with some quiz?</p>
   </div>        
  <img :src="welcome" alt="Overview background showing a desk with laptop, books and writing materials" class="lg:block lg:w-[400px] lg:h-[180px] hidden" /> 
  </div>
        <div>
          <!-- Badges -->
          <div class="flex flex-col items-center justify-center lg:flex-row md:flex-wrap mt-[20px]">
            <div class="px-4 py-1">
              <badge-card
              badgeTitle="Scholar of the week"
              badgeCardColor="bg-badge-peach"
              badgeIcon="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
            </div>
            <div class="px-4 py-1">
              <badge-card
              badgeTitle="Scholar of the month"
              badgeCardColor="bg-badge-purple"
              badgeIcon="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </div>
            <div class=" px-4 py-1">
              <badge-card
              badgeTitle="Scholar of the semester"
              badgeCardColor="bg-badge-orange"
              badgeIcon="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />

            </div>
            <div class=" px-4 py-1">
              <badge-card
              badgeTitle="Scholar Badges"
              badgeCardColor="bg-[#7D7098]"
              badgeIcon="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />

            </div>
          </div>
          <card-reminder/>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  import BadgeCard from '@/components/Badges/BadgeCard.vue';
  import CardReminder from '@/components/Cards/CardReminder.vue';
  import welcome from '/img/isometric.png';
  
  export default {
    data () {
      return{
         welcome,
        }

    },
    components: {
      BadgeCard,
      CardReminder
     
    },
  };
  </script>
  