<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();
        $admin = [
            ...$user->toArray(),
            'admin' => $user->admin
                ? [
                    'id' => $user->admin->id,
                    'shops' => $user->admin->shops->map(fn($shop) => [
                        'id' => $shop->id,
                        'name' => $shop->name,
                        'role' => $shop->pivot->role,
                    ])
                ] : null,
        ];

        return array_merge(
            parent::share($request),
            [
                'auth' => [
                    'user' => $user ? $admin : null,
                    'isAdmin' => $request->user()?->admin()->exists() ?? false
                ],

                'shop_id' => fn() =>
                    $request->route('shop'),

                'flash' => [
                    'message' => fn() => $request->session()->get('message'),
                ],
            ]
        );
    }
}
