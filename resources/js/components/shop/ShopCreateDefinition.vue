<script setup lang="ts">
import { ShopCategory } from '@/types/Shop';
import { CreateShopForm } from '@/forms/createShopForm';
import { capitalize } from '@/utils/capitalizeHelper';
import { createShopPage } from '@/routes';
import { InertiaForm, router } from '@inertiajs/vue3';

const { categories, form, validateDefinition } = defineProps<{
    categories: ShopCategory[],
    form: InertiaForm<CreateShopForm>,
    validateDefinition: () => boolean,
}>();

function handleNext() {
    if (!validateDefinition()) return;

    router.visit(createShopPage({ query: { 'step': 'shop-scheduling' } }), { preserveState: true })
}
</script>

<template>
    <h2 class="text-center text-primary text-lg font-bold mb-4">Business Information</h2>

    <div class="grid sm:grid-cols-2 gap-x-4">
        <div>
            <label for="name" class="text-sm">
                <span>Business Name</span>
                <span class="text-red-600">*</span>
            </label>
            <v-text-field :error-messages="form.errors['definition.name']" v-model="form.definition.name" id="name"
                placeholder="e.g. Luxe Barbershop" density="comfortable"></v-text-field>
        </div>

        <div>
            <label for="category" class="text-sm">
                <span>Category</span>
                <span class="text-red-600">*</span>
            </label>
            <v-select :error-messages="form.errors['definition.category']" placeholder="Select Category"
                label="Select Category" v-model="form.definition.category" :items="categories" class="capitalize!"
                :item-title="(category: ShopCategory) => capitalize(category.name)"
                :item-value="(category: ShopCategory) => category.id" density="comfortable"></v-select>
        </div>

        <div class="flex-1">
            <label for="address" class="text-sm">
                <span>Address</span>
                <span class="text-red-600">*</span>
            </label>
            <v-text-field :error-messages="form.errors['definition.address']" v-model="form.definition.address"
                id="address" placeholder="123 Main St" density="comfortable"></v-text-field>
        </div>

        <div class="row-span-2 max-sm:order-6">
            <label for="description" class="text-sm">Description</label>
            <v-textarea :error-messages="form.errors['definition.description']" v-model="form.definition.description"
                no-resize id="description" rows="5" clearable placeholder="Type your business definition"
                class="text-sm!" />
        </div>

        <div class="flex-1">
            <label for="phoneNumber" class="text-sm">
                <span>Phone Number</span>
                <span class="text-red-600">*</span>
            </label>
            <v-text-field :error-messages="form.errors['definition.phone']" v-model="form.definition.phone"
                id="phoneNumber" placeholder="+998" density="comfortable"></v-text-field>
        </div>
    </div>

    <div class="flex items-center justify-center">
        <v-btn @click="handleNext" variant="flat" color="primary" class="text-white min-w-50! text-lg! font-bold!"
            size="large">Next</v-btn>
    </div>
</template>