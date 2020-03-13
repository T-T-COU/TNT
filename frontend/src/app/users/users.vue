<template>
  <div>
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import { AppHeader } from "../shared/components";
import { AppFooter } from "../shared/components";

export default {
  name: "app-users",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style lang="scss" scoped>
</style>


