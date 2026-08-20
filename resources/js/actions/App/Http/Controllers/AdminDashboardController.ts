import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AdminDashboardController::dashboardPage
* @see app/Http/Controllers/AdminDashboardController.php:10
* @route '/admin/dashboard'
*/
export const dashboardPage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboardPage.url(options),
    method: 'get',
})

dashboardPage.definition = {
    methods: ["get","head"],
    url: '/admin/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdminDashboardController::dashboardPage
* @see app/Http/Controllers/AdminDashboardController.php:10
* @route '/admin/dashboard'
*/
dashboardPage.url = (options?: RouteQueryOptions) => {
    return dashboardPage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminDashboardController::dashboardPage
* @see app/Http/Controllers/AdminDashboardController.php:10
* @route '/admin/dashboard'
*/
dashboardPage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboardPage.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AdminDashboardController::dashboardPage
* @see app/Http/Controllers/AdminDashboardController.php:10
* @route '/admin/dashboard'
*/
dashboardPage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboardPage.url(options),
    method: 'head',
})

const AdminDashboardController = { dashboardPage }

export default AdminDashboardController