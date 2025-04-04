<template>
  <v-container
    fluid
    class="pa-0 pr-8 pt-2"
  >
    <v-card
      class="pa-4 text-left w-100"
      elevation="0"
    >
      <v-tooltip
        location="bottom"
        text="Aproveite para ler mais sobre os hábito que você está criando!"
      >
        <template #activator="{ props }">
          <v-btn
            class="d-flex justify-center align-center"
            color="blue"
            variant="flat"
            text
            block
            v-bind="props"
            rounded
            height="50"
            width="100%"
            @click="showDialog = true"
          >
            <v-icon
              class="mr-3"
              size="20"
            >
              mdi-lightbulb-on
            </v-icon>
            Dica do dia
          </v-btn>
        </template>
      </v-tooltip>
      <v-dialog
        v-model="showDialog"
        max-width="600"
        persistent
        transition="dialog-transition"
      >
        <v-card
          class="pa-4"
          elevation="0"
        >
          <v-card-title class="text-h6">
            Dica do dia
          </v-card-title>
          <v-card-text>
            IA TEXTO
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="black"
              text
              @click="showDialog = false"
            >
              Fechar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-container>
</template>
      
<script setup lang="ts">
import { ref } from 'vue';

const showDialog = ref(false);
</script>

<style scoped>
</style>
      