<script setup lang="ts">
import { useBookingForm } from '@/forms/composables/BookingForm';
import { Service } from '@/types/Service';
import { Shop } from '@/types/Shop';

const { form, submit } = useBookingForm();
const { shop, service } = defineProps<{ shop: Shop, service: Service }>()
</script>

<template>
    Booking

    <form @submit.prevent="() => {
        submit(shop.id, service.id)
    }">
        <v-btn type="submit" variant="flat" color="primary" class="text-white! font-bold!">Submit</v-btn>
    </form>

</template>