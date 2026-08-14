<script setup lang="ts">

const isModalOpen = defineModel<boolean>()

const emit = defineEmits<{ logout: [] }>()
</script>

<template>
    <v-dialog max-width="500" v-model="isModalOpen">
        <template v-slot:default="{ isActive }">
            <v-card title="Logout" class="bg-secondary">
                <v-card-text>
                    Are you sure you want to logout?
                </v-card-text>

                <v-card-actions>
                    <v-btn @click="() => isActive.value = false" variant="outlined" color="primary" size="x-large"
                        density="comfortable" text="Cancel"></v-btn>
                    <v-btn @click="() => {
                        emit('logout')
                        isActive.value = false;
                    }" variant="outlined" color="red" size="x-large" density="comfortable" text="Logout"></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>