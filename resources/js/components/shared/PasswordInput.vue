<script setup lang="ts">
import { Eye, EyeOff } from '@lucide/vue';
import { ref } from "vue";

const password = defineModel<string>();
const { passwordError } = defineProps<{ passwordError?: string }>()

const visible = ref(false);

function toggleVisible() {
    visible.value = !visible.value;
}
</script>

<template>
    <div class="relative">
        <v-text-field :type="visible ? 'text' : 'password'" :error-messages="passwordError" v-model="password"
            density="comfortable" class="w-full" placeholder="Password" autocomplete="new-password"></v-text-field>
        <v-btn @click="toggleVisible" class="absolute! z-100 top-0 right-0 scale-60" variant="tonal"
            :icon="visible ? EyeOff : Eye"></v-btn>
    </div>
</template>