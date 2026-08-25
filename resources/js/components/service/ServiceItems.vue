<script setup lang="ts">
import { Clock, Pencil } from '@lucide/vue';
import { computed, Ref } from 'vue';
import SwitchButton from '../ui/SwitchButton.vue';
import { Link } from '@inertiajs/vue3';
import { adminServiceEditPage } from '@/routes/index.js';
import { Service } from '@/types/Service.js';

const services = defineModel<Service[]>({ required: true })
const emit = defineEmits<{ toggleServiceActive: [serviceId: Service, is_active: boolean] }>()

const sortedServices = computed(() => {
    return [...services.value].sort((a, b) => {
        return Number(b.is_active) - Number(a.is_active)
    })
})
</script>

<template>
    <TransitionGroup name="services" tag="div" class="grid sm:grid-cols-2 gap-4">
        <div v-for="service in sortedServices" :key="service.id"
            class="p-4 rounded-lg bg-secondary flex flex-col gap-4 overflow-hidden"
            :class="{ 'bg-secondary/50!': !service.is_active }">
            <div :class="{ 'opacity-50': !service.is_active }" class="flex items-top justify-between gap-4 w-full">
                <div class="space-y-2 flex-1 min-w-0">
                    <h5 class="text-lg font-semibold w-full truncate">{{ service.name }}</h5>
                    <div class="flex items-center gap-2">
                        <Clock class="size-4" />
                        <h6 class="text-sm">{{ service.duration_min }} min</h6>
                    </div>
                </div>
                <p class="text-xl text-primary font-bold">${{ service.price }}</p>
            </div>

            <div class="flex items-center gap-4 justify-between">
                <div :class="{ 'opacity-50': !service.is_active }">3 Staffs</div>

                <div class="flex items-center gap-2">
                    <Link :href="adminServiceEditPage({ shop: service.shop_id, service: service.id })">
                        <v-btn :icon="Pencil" size="small" variant="tonal" class="scale-85"></v-btn>
                    </Link>

                    <SwitchButton :model-value="Boolean(service.is_active)"
                        @update:model-value="emit('toggleServiceActive', service, $event)" />
                </div>
            </div>
        </div>
    </TransitionGroup>
</template>

<style scoped>
.services-move {
    transition: transform 0.3s ease;
}
</style>