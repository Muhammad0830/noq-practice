import { adminAnalytics, adminDashboard, adminSchedulingPage, adminServiceList, dashboard, favourites, services, shopsList } from '@/routes/index.js';
import { AdminNavItemProps, UserNavItemProps } from '@/types/Shared';
import { CalendarDays, ChartPie, Heart, Home, LayoutDashboard, LayoutList, SquareChartGantt, Store } from '@lucide/vue';

export const userNavItems: UserNavItemProps[] = [
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
        route: services({ query: { 'popular': true } }),
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

export const adminNavItems: AdminNavItemProps[] = [
    {
        id: 0,
        label: 'Dashboard',
        route: (shop_id: number) => adminDashboard({ shop: shop_id }),
        url: '/dashboard',
        icon: LayoutDashboard,
    },
    {
        id: 1,
        label: 'Analytics',
        route: (shop_id: number) => adminAnalytics({ shop: shop_id }),
        url: '/analytics',
        icon: ChartPie,
    },
    {
        id: 2,
        label: 'Services Manage',
        route: (shop_id: number) => adminServiceList({ shop: shop_id }),
        url: '/service/list',
        icon: SquareChartGantt,
    },
    {
        id: 3,
        label: 'Schedule Manage',
        route: (shop_id: number) => adminSchedulingPage({ shop: shop_id }),
        url: '/scheduling',
        icon: CalendarDays,
    },
]