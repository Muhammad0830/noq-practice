import { RouteDefinition } from "@/wayfinder";
import { LucideIcon } from "@lucide/vue";

export interface UserNavItemProps {
    id: number,
    label: string,
    route: RouteDefinition<"get">,
    url: string,
    icon: LucideIcon,
}

export interface AdminNavItemProps {
    id: number,
    label: string,
    route: (shop_id: number) => RouteDefinition<"get">,
    url: string,
    icon: LucideIcon,
}
