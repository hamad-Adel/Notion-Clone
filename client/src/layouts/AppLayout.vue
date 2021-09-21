<!--
   Daynamic Component: based on the route a specific componet will be rendered 
   -->

<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
const defaultLayout = 'ProductLayout';
export default {
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      // Dynamic import
      // whatever file will be returned  will has been replaced with the above component
      return () => import(`../layouts/${layout}.vue`);
    },
  },
};
</script>

<style></style>
