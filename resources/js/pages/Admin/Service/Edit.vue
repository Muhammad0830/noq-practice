<script setup lang="ts">
import ServiceEditSubmitDialog from '@/components/Service/ServiceEditSubmitDialog.vue';
import TimeInput from '@/components/Shared/TimeInput.vue';
import { useServicesEditForm } from '@/forms/composables/servicesEditForm';
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
      <h1 class="text-xl font-bold">
        Service Edit Page
      </h1>

      <Link :href="adminServiceList({ shop: shop_id })">
        <v-btn
          :prepend-icon="Undo2"
          variant="tonal"
        >
          Back
        </v-btn>
      </Link>
    </div>

    <div
      :key="form.id"
      class="mt-6 bg-secondary rounded-lg p-4 pb-0 grid sm:grid-cols-[1fr_auto] gap-x-4"
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
          v-model="form.name"
          :error-messages="form.errors.name"
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
          v-model="form.price"
          prefix="$"
          :error-messages="form.errors.price"
          placeholder="$"
          density="comfortable"
        />
      </div>

      <div class="row-span-2">
        <label
          for="description"
          class="text-sm"
        >Description</label>
        <v-textarea
          id="name"
          v-model="form.description"
          rows="5"
          :error-messages="form.errors.description"
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
          <TimeInput
            v-model="form.duration_min"
            :error-message="form.errors.duration_min"
          />
        </div>

        <div class="flex-1">
          <label
            for="buffer_time"
            class="text-sm"
          >Buffer (min)</label>
          <TimeInput
            v-model="bufferTime"
            :error-message="form.errors.buffer_time"
          />
        </div>
      </div>
    </div>

    <div>
      <v-btn
        variant="flat"
        color="primary"
        class="text-white font-semibold!"
        @click="() => isDialogOpen = true
        "
      >
        Submit
      </v-btn>
    </div>
  </div>

  <ServiceEditSubmitDialog
    v-model="isDialogOpen"
    @submit="submit"
  />
</template>