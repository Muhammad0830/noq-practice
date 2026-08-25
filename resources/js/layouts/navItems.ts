import { adminDashboard, adminServiceList, dashboard, favourites, servcies, shopsList } from '@/routes/index.js';
import { Heart, Home, LayoutDashboard, LayoutList, Store } from '@lucide/vue';

export const userNavItems = [
    {
        id: 0,
        label: 'Home',
        route: dashboard(),
        url: '/dashboard',
        icon: Home,
    },
    {
        id: 1,
        label: 'Popular Shops',
        route: shopsList({ query: { 'popular': true } }),
        url: '/shops',
        icon: Store,
    },
    {
        id: 2,
        label: 'Popular Services',
        route: servcies({ query: { 'popular': true } }),
        url: '/services',
        icon: LayoutList,
    },
    {
        id: 3,
        label: 'Favourites',
        route: favourites({ query: { 'shop': true } }),
        url: '/favourites',
        icon: Heart,
    },
]

export const adminNavItems = [
    {
        id: 0,
        label: 'Dashboard',
        route: (shop_id: number) => adminDashboard({ shop: shop_id }),
        url: '/dashboard',
        icon: LayoutDashboard,
    },
    {
        id: 1,
        label: 'Shops',
        route: (shop_id: number) => shopsList(),
        url: '/shops',
        icon: Store,
    },
    {
        id: 2,
        label: 'Services',
        route: (shop_id: number) => adminServiceList({ shop: shop_id }),
        url: '/admin/services',
        icon: LayoutList,
    },
    {
        id: 3,
        label: 'Favourites',
        route: (shop_id: number) => favourites(),
        url: '/favourites',
        icon: Heart,
    },
]