<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\CursoController;

Route::apiResource('cursos', CursoController::class);
