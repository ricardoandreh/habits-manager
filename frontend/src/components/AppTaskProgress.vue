<template>
  <v-container
    fluid
    class="pa-0 pr-8 pt-2"
  >
    <v-card
      class="pa-4 text-center w-100 d-flex align-center justify-start"
      elevation="0"
      rounded="xl"
    >
      <v-progress-circular
        :model-value="taskStore.getProgress"
        size="80"
        width="6"
        :color="taskStore.getProgress < 100 ? 'black' : 'green'"
      >
        {{ taskStore.getProgress }}%
      </v-progress-circular>
      <p
        v-if="taskStore.getProgress < 100"
        class="pl-8 text-black"
        :class="taskStore.getProgress < 100 ? 'text-black' : 'text-green'"
      >
        Vamos
        lá,
        você
        consegue!
      </p>
      <p 
        v-else
        class="pl-8 text-black"
        :class="taskStore.getProgress < 100 ? 'text-black' : 'text-green'"
      >
        Muito bem, mais um dia concluido!
      </p>
    </v-card>
  </v-container>
</template>
    
<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore';

const taskStore = useTaskStore();
</script>

<style scoped>
</style>