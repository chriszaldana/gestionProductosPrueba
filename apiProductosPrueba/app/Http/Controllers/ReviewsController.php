<?php

namespace App\Http\Controllers;

use App\Models\Reviews;
use Illuminate\Http\Request;

class ReviewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id = null)
    {
        //Mostrar todos de productos específicos
       if ($id) {
           $reviews = Reviews::where('product_id', $id)->get();
       

       if($reviews->isEmpty()) {
           return response()->json([
               'message' => 'No reviews found'
           ], 404);
       }

         return response()->json([
            'message' => 'Reviews found',
            'reviews' => $reviews
         ], 200);
    }

    //Mostrar todos los reviews
    $allReviews = Reviews::all();
    return response()->json([
        'message' => 'All reviews found',
        'reviews' => $allReviews
    ], 200);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //agregar un review
        $request->validate([
            'product_id' => 'required|integer',
            'user_id' => 'required|integer',
            'comment' => 'required|string|max:255',
            'rating' => 'required|integer|min:1|max:5'
        ]);

        $review = Reviews::create([
            'product_id' => $request->product_id,
            'user_id' => $request->user_id,
            'comment' => $request->comment,
            'rating' => $request->rating
        ]);

        return response()->json([
            'message' => 'Review created successfully',
            'review' => $review
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Reviews $reviews)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reviews $reviews)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //Update a review
        $request->validate([
            'comment' => 'required|string|max:255',
            'rating' => 'required|integer|min:1|max:5'
        ]);

        $reviews = Reviews::findOrFail($id);
        $reviews->update([
            'comment' => $request->comment,
            'rating' => $request->rating
        ]);

        return response()->json([
            'message' => 'Review updated successfully',
            'review' => $reviews
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reviews $reviews, $id)
    {
        //Eliminar un review
        $reviews = Reviews::findOrFail($id);
        $reviews->delete();
        return response()->json([
            'message' => 'Review deleted successfully'
        ], 200);
    }
}
