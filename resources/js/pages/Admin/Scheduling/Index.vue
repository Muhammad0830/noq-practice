<script setup lang="ts">
import ShopCreateSchedulingItem from '@/components/Shop/ShopCreateSchedulingItem.vue';
import { useSchedulingForm } from '@/forms/composables/schedulingForm';
import { SchedulingWeekData } from '@/types/Scheduling';
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

const page = usePage()
const shop_id = computed(() => page.props.shop_id);

const { scheduling } = defineProps<{ scheduling: SchedulingWeekData }>()
const { form, submit } = useSchedulingForm(scheduling);
</script>

<template>
  <div>
    <h1 class="text-xl font-bold mb-6">
      Create Your Shop
    </h1>

    <form @submit.prevent="() => submit(shop_id)">
      <div class="flex flex-col gap-1">
        <ShopCreateSchedulingItem
          v-for="(day_of_week, key) in form.scheduling"
          :key="key"
          :day="key"
          :day-of-week-item="form.scheduling[key]"
        />
      </div>

      <v-btn
        type="submit"
        variant="flat"
        color="primary"
        class="mt-4 text-white!"
      >
        Submit
      </v-btn>
    </form>
  </div>
</template>