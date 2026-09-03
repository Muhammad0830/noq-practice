<script setup lang="ts">
import { Service } from '@/types/Service';
import { RouteDefinition } from '@/wayfinder';
import { Link } from '@inertiajs/vue3';
import { useDisplay } from 'vuetify/lib/composables/display.mjs';

interface ServiceListItem {
    service: Service,
    route: RouteDefinition<"get">,
    navigateBtnTitle: string
}

const { service, route, navigateBtnTitle } = defineProps<ServiceListItem>()

const { xs, smAndUp } = useDisplay()

</script>

<template>
  <v-card color="transparent">
    <div class="flex items-center gap-4 justify-between border sm:p-4 p-2 rounded">
      <div class="sm:w-20 w-13 aspect-square rounded-md border" />

      <div class="min-w-0 flex-1 flex flex-col sm:gap-2">
        <span class="sm:text-lg w-full truncate">{{ service.name }}</span>
        <div class="flex items-center justify-start gap-3">
          <span class="max-sm:text-sm text-foreground/90">{{ service.duration_min }}
            min</span>
          <span
            v-if="xs"
            class="text-sm text-primary"
          >${{ service.price }}</span>
        </div>
      </div>

      <div
        v-if="smAndUp"
        class="flex-1"
      >
        <span class="text-xl text-primary">${{ service.price }}</span>
      </div>

      <Link
        :href="route"
        class="flex flex-col gap-2"
      >
        <v-btn
          variant="flat"
          color="primary"
          class="text-white! font-semibold!"
        >
          {{ navigateBtnTitle }}
        </v-btn>
      </Link>
    </div>
  </v-card>
</template>