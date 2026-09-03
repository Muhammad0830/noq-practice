<script setup lang="ts">
import { ShopCategory } from '@/types/Shop';
import { CreateShopForm } from '@/forms/composables/createShopForm';
import { capitalize } from '@/helpers/capitalizeHelper';
import { createShopPage } from '@/routes';
import { InertiaForm, router } from '@inertiajs/vue3';

const { categories, validateDefinition } = defineProps<{
  categories: ShopCategory[],
  validateDefinition: () => boolean,
}>();

const formModel = defineModel<InertiaForm<CreateShopForm>>({ required: true })

function handleNext() {
  if (!validateDefinition()) return;

  router.visit(createShopPage({ query: { 'step': 'shop-scheduling' } }), { preserveState: true })
}
</script>

<template>
  <h2 class="text-center text-primary text-lg font-bold mb-4">
    Business Information
  </h2>

  <div class="grid sm:grid-cols-2 gap-x-4">
    <div>
      <label
        for="name"
        class="text-sm"
      >
        <span>Business Name</span>
        <span class="text-red-600">*</span>
      </label>
      <v-text-field
        id="name"
        v-model="formModel.definition.name"
        :error-messages="formModel.errors['definition.name']"
        placeholder="e.g. Luxe Barbershop"
        density="comfortable"
      />
    </div>

    <div>
      <label
        for="category"
        class="text-sm"
      >
        <span>Category</span>
        <span class="text-red-600">*</span>
      </label>
      <v-select
        v-model="formModel.definition.category"
        :error-messages="formModel.errors['definition.category']"
        placeholder="Select Category"
        label="Select Category"
        :items="categories"
        class="capitalize!"
        :item-title="(category: ShopCategory) => capitalize(category.name)"
        :item-value="(category: ShopCategory) => category.id"
        density="comfortable"
      />
    </div>

    <div class="flex-1">
      <label
        for="address"
        class="text-sm"
      >
        <span>Address</span>
        <span class="text-red-600">*</span>
      </label>
      <v-text-field
        id="address"
        v-model="formModel.definition.address"
        :error-messages="formModel.errors['definition.address']"
        placeholder="123 Main St"
        density="comfortable"
      />
    </div>

    <div class="row-span-2 max-sm:order-6">
      <label
        for="description"
        class="text-sm"
      >Description</label>
      <v-textarea
        id="description"
        v-model="formModel.definition.description"
        :error-messages="formModel.errors['definition.description']"
        no-resize
        rows="5"
        clearable
        placeholder="Type your business definition"
        class="text-sm!"
      />
    </div>

    <div class="flex-1">
      <label
        for="phoneNumber"
        class="text-sm"
      >
        <span>Phone Number</span>
        <span class="text-red-600">*</span>
      </label>
      <v-text-field
        id="phoneNumber"
        v-model="formModel.definition.phone"
        :error-messages="formModel.errors['definition.phone']"
        placeholder="+998"
        density="comfortable"
      />
    </div>
  </div>

  <div class="flex items-center justify-center">
    <v-btn
      variant="flat"
      color="primary"
      class="text-white min-w-50! text-lg! font-bold!"
      size="large"
      @click="handleNext"
    >
      Next
    </v-btn>
  </div>
</template>