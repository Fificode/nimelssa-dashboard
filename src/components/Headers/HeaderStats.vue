<template>
    <!-- Header -->
    <div class="relative md:pt-32 pb-32 pt-12">
      <div class="px-4 md:px-10 mx-auto w-full">
        <div class="w-full h-[150px] bg-light-purple-bg rounded-[10px] flex justify-between ">
  <div class= "flex flex-col justify-center px-[30px] ">
  <p class="text-text-black text-[30px] ">Welcome, Layla</p>
  <p class="text-text-black">Ready to start your day with some quiz?</p>
 
  
   </div>        
  <img :src="welcome" alt="Overview background showing a desk with laptop, books and writing materials" class="md:block md:w-[400px] md:h-[180px] hidden" /> 
  </div>
        <div>
          <!-- Card stats -->
          <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <!-- <card-stats
                statSubtitle="TRAFFIC"
                statTitle="350,897"
                statArrow="up"
                statPercent="3.48"
                statPercentColor="text-emerald-500"
                statDescripiron="Since last month"
                statIconName="far fa-chart-bar"
                statIconColor="bg-red-500"
              /> -->
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <!-- <card-stats
                statSubtitle="NEW USERS"
                statTitle="2,356"
                statArrow="down"
                statPercent="3.48"
                statPercentColor="text-red-500"
                statDescripiron="Since last week"
                statIconName="fas fa-chart-pie"
                statIconColor="bg-orange-500"
              /> -->
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <!-- <card-stats
                statSubtitle="SALES"
                statTitle="924"
                statArrow="down"
                statPercent="1.10"
                statPercentColor="text-orange-500"
                statDescripiron="Since yesterday"
                statIconName="fas fa-users"
                statIconColor="bg-pink-500"
              /> -->
            </div>
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <!-- <card-stats
                statSubtitle="PERFORMANCE"
                statTitle="49,65%"
                statArrow="up"
                statPercent="12"
                statPercentColor="text-emerald-500"
                statDescripiron="Since last month"
                statIconName="fas fa-percent"
                statIconColor="bg-emerald-500"
              /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // import CardStats from "@/components/Cards/CardStats.vue";
  import welcome from '/img/isometric.png';
  
  export default {
    data () {
      return{
         welcome,
        }

    },
    components: {
      // CardStats,
     
    },
  };
  </script>
  