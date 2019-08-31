<template>
  <div class="grey darken-1 empty-layout">
    <router-view />
  </div>
</template>

<script>
import messages from "@/utils/messages";

export default {
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(fbError) {
      console.log(fbError);
      this.$error(messages[fbError.code] || "Что-то пошло не так");
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .empty-layout {
    padding-top: 10%;
  }   
}
</style>


