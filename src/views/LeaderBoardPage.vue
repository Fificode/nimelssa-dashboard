<template>
    <div class="pb-28 pt-[40px] md:pt-12 mt-[70px]  min-h-[100vh]">
    <leader-board-table />
    </div>
    </template>
    
    <script>
      import LeaderBoardTable from "@/components/LeaderBoard/LeaderBoardTable.vue";
    export default{
        components: {
    LeaderBoardTable,
        }
    }
    </script>