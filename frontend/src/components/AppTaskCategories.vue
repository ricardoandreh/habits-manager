

<template>
  <v-container
    fluid
    class="pa-0 pr-8"
  >
    <v-card
      class="pa-2"
      elevation="0"
      rounded="xl"
    >
      <v-list class="bg-transparent">
        <v-list-item
          v-for="(progress, index) in taskStore.progress"
          :key="index"
        >
          <v-list-item-title class="pb-2">
            {{ progress.title }}
          </v-list-item-title>
          <v-progress-linear
            :model-value="progress.value"
            :color="progress.color"
            height="6"
            rounded
          />
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
    
<script lang="ts" setup>
  import { useTaskStore } from '@/stores/taskStore';

  const taskStore = useTaskStore()
</script>

<style scoped></style>
  