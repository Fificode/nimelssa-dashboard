<template>
<div class="flex flex-col items-center justify-center w-full"  aria-label="Quiz Introduction">
<img :src="peopleQuestion" class="w-[350px] h-[300px]" alt="Illustration of a man and woman puzzled, with a question mark hovering above them." />
<p class="py-[20px] text-[22px] font-[600] text-text-black font-roboto">Ready for some quiz?</p>
<div class="py-[10px]">
    <router-link
  to="quiz/startquiz"
  target="_self"
  rel="noopener noreferrer"
  class="text-white font-roboto text-[14px] bg-purple border-none py-[12px] px-[30px] rounded-[5px] hover:bg-[#cd9cf2]"
  aria-label="Get Started with the Quiz"
>
  Get Started
</router-link>

   
</div>
</div>
</template>
<script>
import peopleQuestion from '/img/peopleQuestion.png'



export default {
data() {
    return {
        peopleQuestion,
   
    }
}
}
</script>