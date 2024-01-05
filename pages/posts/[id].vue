<script setup lang="ts">
 const route = useRoute()
</script>

<template>
      <div>
            <h1>Post id : {{ route.params.id }} </h1>
      </div>
</template>