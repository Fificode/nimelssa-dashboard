<template>
<div class="pb-28 pt-[40px] md:pt-12 mt-[70px] min-h-[100vh]" aria-label="Result page">
<result-table />
</div>
</template>

<script>
  import ResultTable from "@/components/Results/ResultTable.vue";
export default{
    components: {
ResultTable,
    }
}
</script>