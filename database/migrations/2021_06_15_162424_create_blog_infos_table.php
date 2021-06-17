<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlogInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blog_infos', function (Blueprint $table) {
            $table->id();
            $table->string('date');
            $table->string('title');
            $table->string('slug');
            $table->string('image')->nullable();
            $table->longText('details');
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
        Schema::dropIfExists('blog_infos');
    }
}
