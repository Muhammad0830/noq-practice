import { dashboard, favourites, servcies, shopsList, todo } from '@/routes/index.js';
import { CircleCheckBig, Heart, LayoutDashboard, LayoutList, Store } from '@lucide/vue';

export const navItems = [
    {
        id: 0,
        label: 'Dashboard',
        route: dashboard(),
        url: '/dashboard',
        icon: LayoutDashboard,
    },
    {
        id: 1,
        label: 'Shops',
        route: shopsList(),
        url: '/shops',
        icon: Store,
    },
    {
        id: 2,
        label: 'Services',
        route: servcies(),
        url: '/services',
        icon: LayoutList,
    },
    {
        id: 3,
        label: 'Favourites',
        route: favourites(),
        url: '/favourites',
        icon: Heart,
    },
    {
        id: 4,
        label: 'Todo',
        route: todo(),
        url: '/todo',
        icon: CircleCheckBig,
    }
]