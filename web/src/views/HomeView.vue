<script setup>
import { useTestStore } from '@/stores/test'

const store = useTestStore();
store.fetchInfo();
</script>

<template>

      <h3>
        {{ store?.info?.text }}
      </h3>

</template>