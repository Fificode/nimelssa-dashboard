<template>
    <div class="bg-gradient-to-t from-white-bg to-light-purple-bg h-[100vh] flex flex-col justify-center items-center py-[20px]">
       <div class=""> <img :src='nimelssaQuizTime' alt='Illustration of Quiz Time on Screen' className='w-[250px] h-[350px] md:w-[300px] md:h-[370px]' /></div>
        <div class="mb-[40px] animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="w-[50px] h-[50px]">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
</svg>
</div>
        <div class="py-[10px]">
    <router-link
  to="quiz/startquiz/one"
  class="text-white-bg font-roboto text-[14px] bg-purple border-none py-[12px] px-[30px] rounded-[5px] hover:bg-[#cd9cf2]"
>
  Start Quiz
</router-link>
</div>
    </div>
</template>
<script>
import nimelssaQuizTime from '/img/nimelssaQuizTime.png'
export default{
    data(){
        return{
            nimelssaQuizTime
        }
    }
}
</script>