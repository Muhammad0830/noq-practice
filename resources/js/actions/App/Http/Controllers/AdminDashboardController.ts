import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AdminDashboardController::dashboardPage
* @see app/Http/Controllers/AdminDashboardController.php:11
* @route '/admin/shop/{shop}/dashboard'
*/
export const dashboardPage = (args: { shop: number | { id: number } } | [shop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboardPage.url(args, options),
    method: 'get',
})

dashboardPage.definition = {
    methods: ["get","head"],
    url: '/admin/shop/{shop}/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdminDashboardController::dashboardPage
* @see app/Http/Controllers/AdminDashboardController.php:11
* @route '/admin/shop/{shop}/dashboard'
*/
dashboardPage.url = (args: { shop: number | { id: number } } | [shop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shop: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { shop: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            shop: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shop: typeof args.shop === 'object'
        ? args.shop.id
        : args.shop,
    }

    return dashboardPage.definition.url
            .replace('{shop}', parsedArgs.shop.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminDashboardController::dashboardPage
* @see app/Http/Controllers/AdminDashboardController.php:11
* @route '/admin/shop/{shop}/dashboard'
*/
dashboardPage.get = (args: { shop: number | { id: number } } | [shop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboardPage.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AdminDashboardController::dashboardPage
* @see app/Http/Controllers/AdminDashboardController.php:11
* @route '/admin/shop/{shop}/dashboard'
*/
dashboardPage.head = (args: { shop: number | { id: number } } | [shop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboardPage.url(args, options),
    method: 'head',
})

const AdminDashboardController = { dashboardPage }

export default AdminDashboardController