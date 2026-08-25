<script setup lang="ts">
import { Service } from '@/types/Service';
import { adminServiceCreatePage } from '@/routes';
import { Link, router, usePage } from '@inertiajs/vue3';
import { Plus } from '@lucide/vue';
import { computed, ref } from 'vue';
import ServiceItems from '@/components/Service/ServiceItems.vue';
import { toggleActive } from "@/actions/App/Http/Controllers/ServicesController";

interface ServicesListProps {
    services: Service[];
    shop_id: number
}

const page = usePage();
const shop_id = computed<number>(() => page.props.shop_id);

const { services: data } = defineProps<ServicesListProps>()

const services = ref<Service[]>(data);

const toggleServiceActive = (
    service: Service,
    newValue: boolean,
) => {
    const previousValue = service.is_active

    service.is_active = newValue

    router.put(
        toggleActive({
            shop: shop_id.value,
            service: service.id,
        }).url,
        {
            is_active: newValue,
        },
        {
            preserveScroll: true,

            onError: () => {
                service.is_active = previousValue
            },
        }
    )
}
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4 justify-between">
            <h1 class="text-xl font-bold">Service Management</h1>

            <Link :href="adminServiceCreatePage({ shop: shop_id })">
                <v-btn :prepend-icon="Plus" color="foreground" variant="tonal">Create New</v-btn>
            </Link>
        </div>

        <ServiceItems v-model="services" @toggle-service-active="toggleServiceActive" />
    </div>
</template>