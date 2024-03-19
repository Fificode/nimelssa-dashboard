<template>
<div class="bg-[#303030] h-[100vh] px-[20px] flex flex-col justify-center items-center">
  <div class="rounded-[10px] py-[30px] px-[20px] w-[90%]  md:w-[50%] lg:w-[30%] h-auto bg-white-bg flex flex-col items-center justify-center shadow-xl">
<div class="p-[10px]"><img :src="peopleCelebration" alt="Illustration of a man and woman celebrating the completion of the quiz" class="w-[250px] h-[200px] "></div>
    <h1 class="text-[23px] text-center font-roboto text-gray-dark font-[600] py-[5px]">Quiz completed successfully!</h1>
<h2 class="text-[18px] font-roboto text-gray-dark font-[600] py-[5px] text-center">Your score is: </h2>
 <h2 class="text-[23px] font-roboto text-gray-dark font-[600] py-[5px] text-center">{{ totalPoints }}% </h2>
<a href="/dashboard" class="text-[14px] underline font-roboto text-red font-[600] py-[5px] text-center">Return to dashboard</a>
</div>
    </div>
</template>

<script>
import peopleCelebration from '/img/peopleCelebration.png'
export default {
  name: "TotalPoints",
  props: ["totalPoints"],
data(){
  return{
    peopleCelebration,
  
  }
},
created() {
   
  },
  
  methods: {

}

};
</script>