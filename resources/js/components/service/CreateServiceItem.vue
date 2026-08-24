<script setup lang="ts">
import { UseServicesFormProps } from '@/forms/servicesForm';
import { InertiaForm, usePage } from '@inertiajs/vue3';
import { Plus, Trash2 } from '@lucide/vue';
import { computed } from 'vue';

const page = usePage();
const shop_id = computed(() => page.props.shop_id);

const formModel = defineModel<InertiaForm<UseServicesFormProps>>({ required: true })

const emit = defineEmits<{
    addServiceItem: [],
    submit: [shop_id: number]
    removeNewService: [id: number]
}>()
</script>

<template>
    <form @submit.prevent="() => emit('submit', shop_id)">
        <TransitionGroup name="service-new-items" tag="div" class="flex flex-col gap-4 relative">
            <div v-for="service, index in formModel.services" :key="service.id"
                class="bg-secondary rounded-lg p-4 pb-0 grid sm:grid-cols-[1fr_auto] gap-x-4 relative">
                <div>
                    <label for="name" class="text-sm">
                        <span>Name</span>
                        <span class="text-red-600">*</span>
                    </label>
                    <v-text-field :error-messages="formModel.errors[`services.${index}.name`]" v-model="service.name"
                        id="name" placeholder="e.g. Deep Tissue Massage" density="comfortable"></v-text-field>
                </div>

                <div>
                    <label for="price" class="text-sm">
                        <span>Price</span>
                        <span class="text-red-600">*</span>
                    </label>
                    <v-text-field prefix="$" :error-messages="formModel.errors[`services.${index}.price`]"
                        v-model="service.price" id="name" placeholder="$" density="comfortable"></v-text-field>
                </div>

                <div class="row-span-2">
                    <label for="description" class="text-sm">Description</label>
                    <v-textarea rows="5" :error-messages="formModel.errors[`services.${index}.description`]"
                        v-model="service.description" id="name" placeholder="Describe Your Sevrice"
                        density="comfortable" />
                </div>

                <div class="max-sm:flex gap-4">
                    <div class="flex-1">
                        <label for="duration_min" class="text-sm">
                            <span>Duration (min)</span>
                            <span class="text-red-600">*</span>
                        </label>
                        <v-text-field class="sm:w-28" type="time"
                            :error-messages="formModel.errors[`services.${index}.duration_min`]"
                            v-model="service.duration_min" id="name" density="comfortable"></v-text-field>
                    </div>

                    <div class="flex-1">
                        <label for="buffer_time" class="text-sm">Buffer (min)</label>
                        <v-text-field class="sm:w-28" type="time"
                            :error-messages="formModel.errors[`services.${index}.buffer_time`]"
                            v-model="service.buffer_time" id="name" density="comfortable"></v-text-field>
                    </div>
                </div>

                <Transition name="delete-item-btn">
                    <div v-if="formModel.services.length !== 1"
                        class="absolute top-2 right-2 translate-x-[50%] translate-y-[-50%]">
                        <v-btn @click="() => emit('removeNewService', service.id)" density="comfortable" :icon="Trash2"
                            class="scale-90" color="destructive"></v-btn>
                    </div>
                </Transition>
            </div>

            <div class="flex items-center gap-4" key="service-form-buttons">
                <v-btn type="submit" variant="flat" color="primary" class="text-white font-semibold!">Submit</v-btn>
                <v-btn type="button" @click="() => emit('addServiceItem')" variant="outlined" color="primary"
                    :prepend-icon="Plus">Add
                    Service</v-btn>
            </div>
        </TransitionGroup>
    </form>
</template>

<style scoped>
.service-new-items-move,
.service-new-items-enter-active,
.service-new-items-leave-active,
.delete-item-btn-enter-active,
.delete-item-btn-leave-active {
    transition: transform 0.3s ease-in-out,
        opacity 0.3s ease-in-out;
}

.service-new-items-enter-from {
    opacity: 0;
    transform: translateX(50px);
}

.service-new-items-leave-to {
    opacity: 0;
    transform: translateY(103%) translateX(-50px);
}

.service-new-items-leave-active {
    position: absolute;
    inset-inline: 0;
}

.delete-item-btn-enter-from {
    opacity: 0;
    transform: scale(0);
}
</style>