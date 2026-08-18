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
        Schema::create('shop_schedules', function (Blueprint $table) {
            $table->id();
            $table->foreignId('shop_id')->constrained('shops')->cascadeOnDelete();

            $table->enum(
                'day_of_week',
                ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
            );

            $table->time('start_time');
            $table->time('end_time');

            $table->enum('type', ['open', 'closed'])->default('open'); // closed means closed times like lunch time

            $table->index(['shop_id', 'day_of_week', 'type']);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shop_schedules');
    }
};
