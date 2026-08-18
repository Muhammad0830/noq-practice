<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('service_id')->constrained('services')->cascadeOnDelete();
            $table->foreignId('staff_id')->nullable()->constrained('admins')->nullOnDelete(); // even if staff is deleted, the historyBooking should remain

            $table->dateTime('start_time');
            $table->datetime('end_time');

            $table->enum(
                'status',
                ['pending', 'confirmed', 'in_progress', 'completed', 'cancelled', 'no_show']
            )->default('pending');

            $table->index(['user_id', 'service_id', 'staff_id', 'status']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
