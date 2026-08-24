import { RouteDefinition } from "@/wayfinder";
import { IconValue } from "vuetify/lib/composables/icons.mjs";

export interface NavItemProps {
    id: number,
    label: string,
    route: RouteDefinition<"get">,
    url: string,
    icon: IconValue,
}
