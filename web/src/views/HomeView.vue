<script setup>
import { useTestStore } from '@/stores/test'

const store = useTestStore();
store.fetchInfo();
</script>

<template>

  <v-sheet class="pa-8">
      <h3>
        {{ store?.info?.text }}
      </h3>
  </v-sheet>

</template>