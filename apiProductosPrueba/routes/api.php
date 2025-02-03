<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ReviewsController;

Route::get('/user', function (Request $request) {
    return response()->json(['user' => $request->user()
    ]);
})->middleware('auth:sanctum');

//Register User
Route::post('/register', [UserController::class, 'register']);

//Login User
Route::post('/login', [UserController::class, 'login']);

//Logout User
Route::post('/logout', [UserController::class, 'logout'])->middleware('auth:sanctum');

//Add a product
Route::post('/addProduct', [ProductsController::class, 'store'])->middleware('auth:sanctum');

//Get all products
Route::get('/products', [ProductsController::class, 'index'])->middleware('auth:sanctum');

//Update a product
Route::put('/updateProduct/{id}', [ProductsController::class, 'update'])->middleware('auth:sanctum');

//Delete a product
Route::delete('/deleteProduct/{id}', [ProductsController::class, 'destroy'])->middleware('auth:sanctum');

//Add a review
Route::post('/addReview', [ReviewsController::class, 'store'])->middleware('auth:sanctum');

//Get all reviews
Route::get('/reviews/{id?}', [ReviewsController::class, 'index'])->middleware('auth:sanctum');

//Update a review
Route::put('/updateReview/{id}', [ReviewsController::class, 'update'])->middleware('auth:sanctum');

//Delete a review
Route::delete('/deleteReview/{id}', [ReviewsController::class, 'destroy'])->middleware('auth:sanctum');

//Get top rated products
Route::get('/topRated', [ProductsController::class, 'getTopRatedProducts'])->middleware('auth:sanctum');
