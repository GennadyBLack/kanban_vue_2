<template>
  <div class="home">
    <Kanban />
  </div>
</template>

<script>
// @ is an alias to /src
import Kanban from "@/components/Kanban.vue";

export default {
  name: "Home",
  components: {
    Kanban,
  },
};
</script>
