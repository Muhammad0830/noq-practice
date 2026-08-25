<script setup lang="ts">
import { dashboard } from '@/routes';
import { router, usePage } from '@inertiajs/vue3';
import { Undo2 } from '@lucide/vue';
import { useCreateShopForm } from '../../forms/createShopForm.js';
import { ShopCategory } from '@/types/Shop.js';
import { computed } from 'vue';
import ShopCreateSteps from '@/components/Shop/ShopCreateSteps.vue';
import ShopCreateDefinition from '@/components/Shop/ShopCreateDefinition.vue';
import ShopCreateScheduling from '@/components/Shop/ShopCreateScheduling.vue';
import ShopCreateServices from '@/components/Shop/ShopCreateServices.vue';

const page = usePage();
const step = computed(() => page.props.step)
const isDefinitionStep = computed(() => page.props.step === 'shop-definition')
const isSchedulingStep = computed(() => page.props.step === 'shop-scheduling')
const isServiceAddingStep = computed(() => page.props.step === 'service-adding')

const { categories } = defineProps<{
    step: 'shop-definition' | 'shop-scheduling' | 'service-adding',
    categories: ShopCategory[],
}>()

const { form, validateScheduling, validateDefinition, validateServices, submit } = useCreateShopForm()
</script>

<template>
    <div class="flex flex-col gap-8">
        <div class="flex items-center gap-2 justify-between">
            <h1 class="text-xl font-bold">Create Your Shop</h1>

            <v-btn @click="router.visit(dashboard())" variant="tonal" :prepend-icon="Undo2" class="text-sm!">
                <div class="flex items-center gap-1">
                    <span class="max-sm:hidden!">Go Back</span>
                    <span>To Dashboard</span>
                </div>
            </v-btn>
        </div>

        <ShopCreateSteps :is-definition-step="isDefinitionStep" :is-scheduling-step="isSchedulingStep"
            :is-services-step="isServiceAddingStep" />
    </div>

    <div class="mt-8 space-y-6">
        <form @submit.prevent="submit" class="w-full flex flex-col gap-2">
            <v-sheet color="background">
                <v-tabs-window v-model="step">
                    <v-tabs-window-item value="shop-definition">
                        <v-sheet color="background">
                            <ShopCreateDefinition :form="form" :categories="categories"
                                :validate-definition="validateDefinition" />
                        </v-sheet>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="shop-scheduling">
                        <v-sheet color="background">
                            <ShopCreateScheduling :form="form" :validate-definition="validateDefinition"
                                :validate-scheduling="validateScheduling" />
                        </v-sheet>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="service-adding">
                        <v-sheet color="background">
                            <ShopCreateServices :form="form" @submit="submit" :validate-services="validateServices"
                                :validate-definition="validateDefinition" />
                        </v-sheet>
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-sheet>
        </form>
    </div>
</template>