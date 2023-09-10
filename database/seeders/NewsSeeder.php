<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $faker = Factory::create('id_ID');

        for($i = 1; $i <= 50; $i++){
        DB::table('news')->insert([
            'title' => $faker->name,
            'description' => $faker->paragraph,
            'category' => $faker->sentence,
            'author' => $faker->safeEmail,
        ]);
    }
    }
}
