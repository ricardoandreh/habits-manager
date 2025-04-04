<template>
  <section>
    <v-card-title class="text-h6 mt-2 mx-2 d-flex justify-space-between align-center">
      Configurações
      <v-btn
        icon
        variant="text"
        @click="$emit('cancel')"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider class="my-2" />
    <div style="overflow-y: auto;">
      <v-form
        class="pa-4 mx-2 minW"
        @submit.prevent="addTask"
      >
        <p class="text-subtitle-1 pb-4">
          Adicionar uma nova tarefa
        </p>
        <v-row no-gutters>
          <v-col
            cols="12"
            class="pr-4"
            md="10"
          >
            <v-row no-gutters>
              <v-col
                cols="12"
                class="pr-4"
                md="12"
              >
                <v-text-field
                  v-model="newTask.title"
                  variant="outlined"
                  label="Título"
                  required
                />
              </v-col>
              <v-col
                cols="12"
                class="pr-4"
                md="4"
              >
                <v-text-field
                  v-model="newTask.time"
                  variant="outlined"
                  label="Horário"
                  type="time"
                />
              </v-col>
              <v-col
                cols="12"
                class="pr-4"
                md="4"
              >
                <v-text-field
                  v-model="newTask.location"
                  variant="outlined"
                  label="Local"
                />
              </v-col>
              <v-col
                cols="12"
                class="pr-4"
                md="4"
              >
                <v-text-field
                  v-model="newTask.duration"
                  variant="outlined"
                  label="Duração"
                />
              </v-col>
              <v-col
                cols="12"
                class="pr-4"
                md="6"
              >
                <v-select
                  v-model="newTask.icon"
                  variant="outlined"
                  label="Ícone"
                  :items="iconOptions"
                  item-title="label"
                  item-value="value"
                  return-object
                  required
                >
                  <template #selection="{ item }">
                    <v-icon class="mr-3">
                      {{ item.value }}
                    </v-icon>
                    {{ item.title }}
                  </template>
                  <template #item="{ props, item }">
                    <v-list-item v-bind="props">
                      <template #prepend>
                        <v-icon>{{ item.value }}</v-icon>
                      </template>
                      {{ item.props.label }}
                    </v-list-item>
                  </template>
                </v-select>
              </v-col>
              <v-col
                cols="12"
                md="6"
                class="pr-4"
              >
                <v-select
                  v-model="newTask.type"
                  variant="outlined"
                  label="Tipo"
                  :items="taskStore.progress"
                  item-title="title"
                  item-value="type"
                  required
                >
                  <template #selection="{ item }">
                    <span>{{ item.title }}</span>
                  </template>
                </v-select>
              </v-col>
            </v-row>
          </v-col>
          
          <v-col
            cols="12"
            md="2"
            class="d-flex justify-end"
          >
            <v-color-picker
              v-model="newTask.color"
              label="Cor"
              hide-inputs
            />
          </v-col>
        </v-row>
        <v-btn
          type="submit"
          color="primary"
          block
          variant="tonal"
          class="mt-8 pa-4"
        >
          Adicionar Tarefa
        </v-btn>
      </v-form>
    </div>
    <app-settings-list />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTaskStore } from "@/stores/taskStore";
import type { ITask } from "@/types/taskType";

defineEmits(["cancel"]);

const taskStore = useTaskStore();

const iconOptions: { label: string; value: string }[] = [
  { label: "Caminhada", value: "mdi-walk" },
  { label: "Academia", value: "mdi-dumbbell" },
  { label: "Trabalho", value: "mdi-briefcase" },
  { label: "Ler", value: "mdi-book-open" },
  { label: "Beber água", value: "mdi-water" },
  { label: "Meditar", value: "mdi-yoga" },
  { label: "Dormir", value: "mdi-sleep" },
  { label: "Circulo", value: "mdi-circle" },
];

const tasks = ref<ITask[]>(taskStore.tasks);

const newTask = ref<ITask>({
  title: "",
  time: "",
  location: "",
  duration: "",
  icon: {
    label: "",
    value: ""
  },
  color: "#000000",
  completed: false,
  id: "",
  type: "",
});

const addTask = () => {
  if (newTask.value.title && newTask.value.icon) {
    tasks.value.push({ ...newTask.value });
    resetForm();
  }
};

const resetForm = () => {
  newTask.value = {
    title: "",
    time: "",
    location: "",
    duration: "",
    icon: {
      label: "",
      value: ""
    },
    color: "#000000",
    completed: false,
    id: "",
    type: "",
  };
};
</script>

<style>
.settings-modal {
  width: 100vw;
  display: block;
  background: white;
  padding: 2em !important;
}
</style>
