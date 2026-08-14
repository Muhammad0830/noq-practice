<script setup lang="ts">
import { useDisplay } from 'vuetify';


const { smAndDown } = useDisplay()
</script>

<template>
    <v-layout>
        <div class="h-screen w-screen flex items-center justify-center">

            <v-card class="bg-secondary" :min-width="smAndDown ? '300px' : '350px'">
                <div class="p-4 flex flex-col items-center gap-4">
                    <slot />
                </div>
            </v-card>

        </div>
    </v-layout>
</template>