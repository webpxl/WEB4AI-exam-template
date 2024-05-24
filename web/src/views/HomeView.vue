<script setup>
import { useTestStore } from '@/stores/test'

const store = useTestStore();
store.fetchInfo();
</script>

<template>

<main className="flex flex-col h-screen">
     
      <div className="flex-1 grid grid-cols-2 gap-4 p-8 text-3xl">
        {{ store.info.text }}
      </div>
    </main>

</template>
