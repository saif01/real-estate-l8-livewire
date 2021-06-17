<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateListInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('list_infos', function (Blueprint $table) {
            $table->id();
            $table->string('address')->nullable();
            $table->string('address_slug')->nullable();
            $table->string('type', 100)->nullable();
            $table->string('price', 50)->nullable();
            $table->string('badroom', 20)->nullable();
            $table->string('bathroom', 20)->nullable();
            $table->string('area')->nullable();
            $table->string('amenities', 100)->nullable();
            $table->string('cooling', 100)->nullable();
            $table->string('parking', 20)->nullable();
            $table->string('ac', 50)->nullable();
            $table->string('gym', 50)->nullable();
            $table->string('internet', 50)->nullable();
            $table->string('heating', 50)->nullable();
            $table->string('sw_pool', 50)->nullable();
            $table->string('fire_place', 50)->nullable();
            $table->string('built_year')->nullable();
            $table->string('image')->nullable();
            $table->longText('details')->nullable();
            $table->string('status', 20)->nullable();
            $table->string('created_by', 20)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('list_infos');
    }
}
