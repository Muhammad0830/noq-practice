<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureAdmin
{
    public function handle(
        Request $request,
        Closure $next
    ): Response {
        $user = $request->user();

        if (!$user || !$user->admin) {
            abort(403);
        }

        $shop_id = $request->route('shop');

        if (!$user->admin->shops()->whereKey($shop_id)->exists()) {
            abort(403);
        }

        return $next($request);
    }
}
