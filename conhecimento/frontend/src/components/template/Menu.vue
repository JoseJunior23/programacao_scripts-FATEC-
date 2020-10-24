<template>
  <aside class="menu"></aside>
</template>

<script>
export default {
  name:'Menu'
}
</script>

  <style>
    .menu {
      grid-area: menu;
      background: linear-gradient(to right, #414345, #476270);
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
</style>