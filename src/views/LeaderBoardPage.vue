<template>
    <div class="pb-28 pt-[40px] md:pt-12 mt-[70px]  min-h-[100vh]" aria-label="Leaderboard Page">
    <leader-board-table aria-label="Leaderboard Table"/>
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