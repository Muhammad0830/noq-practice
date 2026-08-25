<script setup lang="ts">
import ServiceEditSubmitDialog from '@/components/service/ServiceEditSubmitDialog.vue';
import TimeInput from '@/components/shared/TimeInput.vue';
import { useServicesEditForm } from '@/forms/servicesEditForm';
import { adminServiceList } from '@/routes';
import { Service } from '@/types/Service';
import { Link, usePage } from '@inertiajs/vue3';
import { Undo2 } from '@lucide/vue';
import { computed, ref } from 'vue';

const page = usePage()
const shop_id = computed(() => page.props.shop_id);

const { service } = defineProps<{ service: Service }>()

const { form, submit } = useServicesEditForm(service);

const isDialogOpen = ref(false);

const bufferTime = computed({
    get() {
        return form.buffer_time || 0;
    },
    set(value: number) {
        form.buffer_time = value;
    }
})
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between gap-4">
            <h1 class="text-xl font-bold">Service Edit Page</h1>

            <Link :href="adminServiceList({ shop: shop_id })">
                <v-btn :prepend-icon="Undo2" variant="tonal">Back</v-btn>
            </Link>
        </div>

        <div :key="form.id" class="mt-6 bg-secondary rounded-lg p-4 pb-0 grid sm:grid-cols-[1fr_auto] gap-x-4">
            <div>
                <label for="name" class="text-sm">
                    <span>Name</span>
                    <span class="text-red-600">*</span>
                </label>
                <v-text-field :error-messages="form.errors.name" v-model="form.name" id="name"
                    placeholder="e.g. Deep Tissue Massage" density="comfortable"></v-text-field>
            </div>

            <div>
                <label for="price" class="text-sm">
                    <span>Price</span>
                    <span class="text-red-600">*</span>
                </label>
                <v-text-field prefix="$" :error-messages="form.errors.price" v-model="form.price" id="name"
                    placeholder="$" density="comfortable"></v-text-field>
            </div>

            <div class="row-span-2">
                <label for="description" class="text-sm">Description</label>
                <v-textarea rows="5" :error-messages="form.errors.description" v-model="form.description" id="name"
                    placeholder="Describe Your Sevrice" density="comfortable" />
            </div>

            <div class="max-sm:flex gap-4">
                <div class="flex-1">
                    <label for="duration_min" class="text-sm">
                        <span>Duration (min)</span>
                        <span class="text-red-600">*</span>
                    </label>
                    <TimeInput :error-message="form.errors.duration_min" v-model="form.duration_min" />
                </div>

                <div class="flex-1">
                    <label for="buffer_time" class="text-sm">Buffer (min)</label>
                    <TimeInput :error-message="form.errors.buffer_time" v-model="bufferTime" />
                </div>
            </div>
        </div>

        <div>
            <v-btn @click="() => isDialogOpen = true
            " variant="flat" color="primary" class="text-white font-semibold!">Submit</v-btn>
        </div>
    </div>

    <ServiceEditSubmitDialog v-model="isDialogOpen" @submit="submit" />
</template>