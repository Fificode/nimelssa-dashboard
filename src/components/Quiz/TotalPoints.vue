<template>

    <div>
<h1>Thanks for playing</h1>
<h2>Your score is: <br />{{ totalPoints }}/{{ totalQuestions }}</h2>
    </div>
</template>

<script>
export default {
  name: "TotalPoints",
  props: ["totalPoints", "totalQuestions"],
};
</script>