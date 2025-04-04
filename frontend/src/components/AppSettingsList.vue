<template>
  <section class="px-3 pb-6 mx-2">
    <v-divider class="my-3" />
    <div style="overflow-y: auto;">
      <v-list dense>
        <v-list-item
          v-for="(task, index) in taskStore.tasks"
          :key="index"
        >
          <v-avatar
            :color="task.color"
            size="30"
            class="mr-2"
          >
            <v-icon size="18">
              {{ task.icon.value }}
            </v-icon>
          </v-avatar>

          <v-list-item-title class="text-caption font-weight-medium">
            {{ task.title }}
          </v-list-item-title>

          <v-list-item-subtitle
            v-if="task.time || task.location || task.duration"
            class="text-caption"
          >
            <span v-if="task.time">
              <v-icon
                size="14"
                class="text-blue-grey"
              >mdi-clock</v-icon> {{ task.time }}
            </span>
            <span v-if="task.location">
              <v-icon
                size="14"
                class="ml-1 text-orange"
              >mdi-map-marker</v-icon> {{ task.location }}
            </span>
            <span v-if="task.duration">
              <v-icon
                size="14"
                class="ml-1 text-success"
              >mdi-timer</v-icon> {{ task.duration }}
            </span>
          </v-list-item-subtitle>

          <!-- Ícone de remover -->
          <template #append>
            <v-btn
              icon
              size="small"
              color="red"
              @click="removeTask(index)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-list-item>
      </v-list>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTaskStore } from "@/stores/taskStore";

const taskStore = useTaskStore();

const removeTask = (index: number) => {
  taskStore.tasks.splice(index, 1);
};
</script>
