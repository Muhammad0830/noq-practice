<script setup lang="ts">
import CreateServiceItem from '@/components/service/CreateServiceItem.vue';
import { useServicesForm } from '@/forms/servicesForm';
import { adminServiceList } from '@/routes';
import { Link, usePage } from '@inertiajs/vue3';
import { Undo2 } from '@lucide/vue';
import { computed } from 'vue';

const { form, addServiceItem, postNewItems, removeNewService } = useServicesForm();

const page = usePage();
const shop_id = computed(() => page.props.shop_id);
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between gap-4">
            <h1 class="text-xl font-bold">New Service Create</h1>
            <Link :href="adminServiceList({ shop: shop_id })">
                <v-btn variant="tonal" :prepend-icon="Undo2">Back</v-btn>
            </Link>
        </div>

        <CreateServiceItem v-model="form" @add-service-item="addServiceItem" @submit="postNewItems"
            @remove-new-service="removeNewService" />
    </div>
</template>