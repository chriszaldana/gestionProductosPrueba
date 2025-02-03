<?php

namespace App\Http\Controllers;

use App\Models\products;
use Illuminate\Http\Request;
use App\Models\Reviews;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //Mostrar todos los productos
        return products::with('user')->get();
        
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
        //Insertar un producto
        $request->validate([
            'name' => 'required',
            'user_id' => 'required|integer',
            'description' => 'required',
            'price' => 'required',
            'stock' => 'required'
        ]);

        $product = products::create([
            'name' => $request->name,
            'user_id' => $request->user_id,
            'description' => $request->description,
            'price' => $request->price,
            'stock' => $request->stock
        ]);

        return response()->json([
            'message' => 'Product created successfully',
            'product' => $product
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(products $products)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, $id)
    {
       //
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
         //Editar un producto
         $request->validate([
            'name' => 'required',
            'user_id' => 'required|integer',
            'description' => 'required',
            'price' => 'required',
            'stock' => 'required'
        ]);

        $product = products::findOrFail($id);
        $product->update([
            'name' => $request->name,
            'user_id' => $request->user_id,
            'description' => $request->description,
            'price' => $request->price,
            'stock' => $request->stock
        ]);

        return response()->json([
            'message' => 'Product updated successfully',
            'product' => $product
        ], 200);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(products $products, $id)
    {
        //Delete a product
        $products= products::findOrFail($id);
        $products->delete();
        return response()->json([
            'message' => 'Product deleted successfully'
        ], 200);
    }

    public function getTopRatedProducts()
    {
        //Obtener los productos mejor valorados
        $ratings = Reviews::selectRaw('product_id, AVG(rating) as ratings_average')
            ->groupBy('product_id')
            ->orderByDesc('ratings_average')
            ->limit(5)
            ->get();

        if ($ratings->isEmpty()) {
            return response()->json([
                'message' => 'No products found'
            ], 404);
        }

        $topRatedProducts = $ratings->first();

        $product = products::findOrFail($topRatedProducts->product_id);

        return response()->json([
            'message' => 'Top rated products',
            'topRatedProducts' => [
                'product_id' => $product->id,
                'name' => $product->name,
                'average_rating' => $topRatedProducts->ratings_average,
            ],

            'allRatings' => $ratings,
            
        ], 200);
    }
}
