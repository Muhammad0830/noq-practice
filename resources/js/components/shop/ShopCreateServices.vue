<script setup lang="ts">
import { CreateShopForm } from '@/forms/composables/createShopForm';
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
    <h2 class="text-center text-primary text-lg font-bold mb-4">
      Service Addition
    </h2>

    <div
      v-for="item, index in form.services"
      :key="item.id"
      class="bg-secondary rounded-lg p-4 grid sm:grid-cols-[1fr_auto] gap-x-4"
    >
      <div>
        <label
          for="name"
          class="text-sm"
        >
          <span>Name</span>
          <span class="text-red-600">*</span>
        </label>
        <v-text-field
          id="name"
          v-model="item.name"
          :error-messages="form.errors[`services.${index}.name`]"
          placeholder="e.g. Deep Tissue Massage"
          density="comfortable"
        />
      </div>

      <div>
        <label
          for="price"
          class="text-sm"
        >
          <span>Price</span>
          <span class="text-red-600">*</span>
        </label>
        <v-text-field
          id="name"
          v-model="item.price"
          prefix="$"
          :error-messages="form.errors[`services.${index}.price`]"
          placeholder="$"
          density="comfortable"
          class="sm:w-28"
        />
      </div>

      <div class="row-span-2">
        <label
          for="description"
          class="text-sm"
        >Description</label>
        <v-textarea
          id="name"
          v-model="item.description"
          rows="5"
          :error-messages="form.errors[`services.${index}.description`]"
          placeholder="Describe Your Sevrice"
          density="comfortable"
        />
      </div>

      <div class="max-sm:flex gap-4">
        <div class="flex-1">
          <label
            for="duration_min"
            class="text-sm"
          >
            <span>Duration (min)</span>
            <span class="text-red-600">*</span>
          </label>
          <v-text-field
            id="name"
            v-model="item.duration_min"
            class="sm:w-28"
            type="time"
            :error-messages="form.errors[`services.${index}.duration_min`]"
            density="comfortable"
          />
        </div>

        <div class="flex-1">
          <label
            for="buffer_time"
            class="text-sm"
          >Buffer (min)</label>
          <v-text-field
            id="name"
            v-model="item.buffer_time"
            class="sm:w-28"
            type="time"
            :error-messages="form.errors[`services.${index}.buffer_time`]"
            density="comfortable"
          />
        </div>
      </div>
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
  </div>
</template>