<template>
<div>
<div class="my-2 mx-2 p-2 flex justify-between items-center h-[100px] w-[250px]" :class="[badgeCardColor]" >
    <div class="flex justify-center items-center px-[10px]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-[50px] h-[50px]">
  <path stroke-linecap="round" stroke-linejoin="round" :d="[badgeIcon]" />
</svg>
</div>
                <div class="w-[150px]">
                <p class="text-[18px] text-[#fff] font-[600] font-roboto">{{ badgeNumber }}</p>
  <p class="text-[14px] text-[#fff] font-[500] font-roboto">{{ badgeTitle }}</p>
  </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'badge-card',
  props: {
      badgeTitle: {
        type: String,
        default: "Scholar of the week",
      },
      badgeNumber: {
        type: Number,
        default: 0,
      },
      badgeIcon: {
type: String,
default: 'M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5'
      },
      badgeCardColor: {
        type: String,
        default: 'bg-red'
      }
    }
}
</script>