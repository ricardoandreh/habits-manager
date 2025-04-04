<template>
  <v-dialog
    v-model="localIsOpen"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <v-card
      class="w-100 pa-0 ma-0"
    >
      <app-form-tasks @cancel="onCancel" />
    </v-card>
  </v-dialog>
</template>
  
<script lang="ts" setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps<{
    isOpen: boolean;
    title: string;
  }>();
  
  const emit = defineEmits<{
    (e: 'update', value: boolean): void;
  }>();
  
  const localIsOpen = ref(props.isOpen);
  
  watch(() => props.isOpen, (newValue) => {
    localIsOpen.value = newValue;
  });
  
  watch(localIsOpen, (newValue) => {
    emit('update', newValue);
  });
  
  const onCancel = () => {
    emit('update', false);
  };
</script>

<style scoped></style>
