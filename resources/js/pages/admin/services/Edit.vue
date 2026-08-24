<script setup lang="ts">
import { Service } from '@/types/Service';


const { service } = defineProps<{ service: Service }>()
</script>

<template>
    <div>
        Service Edit {{ service.name }}
    </div>
</template>