<template>
  <v-container
    fluid
    class="pa-0"
  >
    <v-card
      class="pa-4"
      elevation="0"
      color="light-blue-lighten-5" 
      rounded="xl"
    >
      <v-list
        v-if="taskStore.tasks.length > 0" 
        class="pa-0 bg-transparent"
      >
        <v-list-item
          v-for="(task, index) in taskStore.tasks"
          :key="index"
          class="px-0"
        >
          <template #prepend>
            <v-avatar
              :color="task.color"
              size="40"
            >
              <v-icon>{{ task.icon.value }}</v-icon>
            </v-avatar>
          </template>
          <v-list-item-title class="pb-1">
            {{ task.title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <span v-if="task.time">
              <v-icon
                size="16"
                class="text-blue-grey"
              >mdi-clock</v-icon>
              {{ task.time }}
            </span>
            <span v-if="task.location">
              <v-icon
                size="16"
                class="ml-2 text-orange"
              >mdi-map-marker</v-icon>
              {{ task.location }}
            </span>
            <span v-if="task.duration">
              <v-icon
                size="16"
                class="ml-2 text-success"
              >mdi-timer</v-icon>
              {{ task.duration }}
            </span>
            <span v-else>
              <v-icon
                size="16"
                class="ml-2 text-blue"
              >mdi-timer</v-icon>
              Sem duração
            </span>
          </v-list-item-subtitle>
    
          <template #append>
            <v-tooltip
              location="bottom"
              text="Marcar como concluído"
            >
              <template #activator="{ props }">
                <v-checkbox
                  v-bind="props"
                  v-model="task.completed"
                />
              </template>
            </v-tooltip>
          </template>
        </v-list-item>
      </v-list>
      <div 
        v-else
        style="min-height: 400px;"
        class="pa-0 bg-transparent d-flex justify-center align-center text-black text-h6 font-weight-regular"
      >
        <v-icon
          size="48"
          class="mr-2 text-brown"
        >
          mdi-package-variant
        </v-icon>
  
        Clique no botão de configurações e adicione seus hábitos.
      </div>
    </v-card>
  </v-container>
</template>
    
<script setup lang="ts">
  import { useTaskStore } from '@/stores/taskStore';

  const taskStore = useTaskStore();
</script>

<style scoped>
</style>
