<script setup lang="ts">
import { CreateShopForm } from '@/forms/composables/createShopForm.js';
import { InertiaForm, router } from '@inertiajs/vue3';
import ShopCreateSchedulingItem from './ShopCreateSchedulingItem.vue';
import { onMounted } from 'vue';
import { createShopPage } from '@/routes/index.js';

const { validateDefinition, validateScheduling } = defineProps<{
    validateScheduling: () => boolean,
    validateDefinition: () => boolean,
}>()

const formModel = defineModel<InertiaForm<CreateShopForm>>({ required: true })

function handlePrevious() {
    router.visit(createShopPage({ query: { 'step': 'shop-definition' } }), { preserveState: true })
}

function handleNext() {
    if (!validateScheduling()) return;

    router.visit(createShopPage({ query: { 'step': 'service-adding' } }), { preserveState: true })
}

onMounted(() => {
    if (!validateDefinition()) {
        router.visit(createShopPage({ query: { 'step': 'shop-definition' } }))
    }
})

</script>

<template>
  <h2 class="text-center text-primary text-lg font-bold mb-4">
    Schedule Setup
  </h2>

  <div class="flex flex-col gap-2">
    <ShopCreateSchedulingItem
      v-for="(item, day) in formModel.scheduling"
      :key="day"
      v-model:day-of-week-item="formModel.scheduling[day]"
      :day="day"
    />
  </div>

  <div class="flex justify-center items-center gap-4 mt-6">
    <v-btn
      size="large"
      color="primary"
      class="sm:min-w-50! text-lg! text-white font-bold!"
      @click="handlePrevious"
    >
      Previous
    </v-btn>
    <v-btn
      size="large"
      color="primary"
      class="sm:min-w-50! text-lg! text-white font-bold!"
      @click="handleNext"
    >
      Next
    </v-btn>
  </div>
</template>