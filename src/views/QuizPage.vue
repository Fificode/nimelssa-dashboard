<template>
    <div class="pb-28 pt-[40px] md:pt-12 mt-[70px] min-h-[100vh]"  aria-label="Quiz page">
  <get-started aria-label="Get quiz started button"/>
    </div>
    </template>
    
    <script>
    import GetStarted from '@/components/Quiz/GetStartedQuiz.vue';
    export default{
        components: {
GetStarted
        }
    }
    </script>