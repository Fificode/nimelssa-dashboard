<template>
<div class="bg-[#303030] h-[100vh] px-[20px] flex flex-col justify-center items-center">
  <div class="rounded-[10px] py-[30px] px-[20px] w-[100%]  md:w-[50%] lg:w-[30%] h-auto bg-white-bg flex flex-col items-center shadow-xl">
<div class="p-[10px]"><img :src="peopleCelebration" alt="Celebration of the completion of the quiz" class="w-[250px] h-[200px] "></div>
    <h1 class="text-[23px] font-roboto text-gray-dark font-[600] py-[5px]">Quiz completed successfully!</h1>
<h2 class="text-[18px] font-roboto text-gray-dark font-[600] py-[5px]">Your score is: </h2>
 <h2 class="text-[23px] font-roboto text-gray-dark font-[600] py-[5px]"> {{ totalPoints }}/{{ totalQuestions }}</h2>
<a href="/dashboard" class="text-[14px] underline font-roboto text-red font-[600] py-[5px]">Return to dashboard</a>
</div>
    </div>
</template>

<script>
import peopleCelebration from '/img/peopleCelebration.png'
export default {
  name: "TotalPoints",
  props: ["totalPoints", "totalQuestions"],
data(){
  return{
    peopleCelebration,
  }
}
};
</script>