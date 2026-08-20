<script setup lang="ts">
import { CreateShopForm, useCreateShopForm } from '@/presenter/forms/createShopForm';
import { createShopPage } from '@/routes';
import { InertiaForm, router } from '@inertiajs/vue3';
import { onMounted } from 'vue';

const { form, validateDefinition, validateServices } = defineProps<{
    form: InertiaForm<CreateShopForm>,
    validateDefinition: () => boolean,
    validateServices: () => boolean,
}>()

const emit = defineEmits<{ submit: [] }>()

function handlePrevious() {
    router.visit(createShopPage({ query: { 'step': 'shop-scheduling' } }), { preserveState: true })
}

function handleNext() {
    console.log(form.services)
    validateServices();
    console.log(form.errors)
    if (!validateServices()) return;

    emit('submit')
}

onMounted(() => {
    if (!validateDefinition()) {
        router.visit(createShopPage({ query: { 'step': 'shop-definition' } }))
    }
})

</script>

<template>
    <div class="flex flex-col gap-4">
        <h2 class="text-center text-primary text-lg font-bold mb-4">Service Addition</h2>

        <div v-for="item, index in form.services"
            class="bg-secondary rounded-lg p-4 grid sm:grid-cols-[1fr_auto] gap-x-4">
            <div>
                <label for="name" class="text-sm">
                    <span>Name</span>
                    <span class="text-red-600">*</span>
                </label>
                <v-text-field :error-messages="form.errors[`services.${index}.name`]" v-model="item.name" id="name"
                    placeholder="e.g. Deep Tissue Massage" density="comfortable"></v-text-field>
            </div>

            <div>
                <label for="price" class="text-sm">
                    <span>Price</span>
                    <span class="text-red-600">*</span>
                </label>
                <v-text-field prefix="$" :error-messages="form.errors['definition.name']" v-model="item.price" id="name"
                    placeholder="$" density="comfortable"></v-text-field>
            </div>

            <div class="row-span-2">
                <label for="description" class="text-sm">Description</label>
                <v-textarea rows="5" :error-messages="form.errors['definition.name']" v-model="item.description"
                    id="name" placeholder="Describe Your Sevrice" density="comfortable" />
            </div>

            <div class="max-sm:flex gap-4">
                <div class="flex-1">
                    <label for="durationMin" class="text-sm">
                        <span>Duration (min)</span>
                        <span class="text-red-600">*</span>
                    </label>
                    <v-text-field class="sm:w-28" type="time" :error-messages="form.errors['definition.name']"
                        v-model="item.durationMin" id="name" density="comfortable"></v-text-field>
                </div>

                <div class="flex-1">
                    <label for="bufferTime" class="text-sm">Buffer (min)</label>
                    <v-text-field class="sm:w-28" type="time" :error-messages="form.errors['definition.name']"
                        v-model="item.bufferTime" id="name" density="comfortable"></v-text-field>
                </div>
            </div>
        </div>

        <div class="flex justify-center items-center gap-4 mt-6">
            <v-btn size="large" color="primary" class="sm:min-w-50! text-lg! text-white font-bold!"
                @click="handlePrevious">Previous</v-btn>
            <v-btn size="large" color="primary" class="sm:min-w-50! text-lg! text-white font-bold!"
                @click="handleNext">Next</v-btn>
        </div>
    </div>
</template>