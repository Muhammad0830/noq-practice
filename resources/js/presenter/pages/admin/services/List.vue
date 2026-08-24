<script setup lang="ts">
import { Service } from '@/core/types/Service';
import ServiceItems from '@/presenter/components/service/ServiceItems.vue';
import { useServicesForm } from '@/presenter/forms/servicesForm';
import { adminServiceCreatePage } from '@/routes';
import { Link, usePage } from '@inertiajs/vue3';
import { Plus } from '@lucide/vue';

interface UseServicesFormProps {
    services: Service[];
    shop_id: number
}

const page = usePage();
const shop_id = page.props.shop_id;

const { services } = defineProps<UseServicesFormProps>()

const { form, toggleActive } = useServicesForm({ services: services });
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4 justify-between">
            <h1 class="text-xl font-bold">Service Management</h1>

            <Link :href="adminServiceCreatePage({ shop: shop_id })">
                <v-btn :prepend-icon="Plus" color="foreground" variant="tonal">Create New</v-btn>
            </Link>
        </div>

        <ServiceItems v-model="form" @toggle-active="toggleActive" />
    </div>
</template>