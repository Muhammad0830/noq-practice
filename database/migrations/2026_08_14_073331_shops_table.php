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
        Schema::create('shops', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('address');
            $table->foreignId('category_id')->constrained('categories')->cascadeOnDelete();
            $table->string('description')->nullable();
            $table->string('logo_url')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('background_image_url')->nullable();

            $table->index(['catagory_id']);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shops');
    }
};
