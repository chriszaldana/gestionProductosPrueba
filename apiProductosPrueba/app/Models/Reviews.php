<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reviews extends Model
{
    //lo que recibe
    protected $fillable = [
        'product_id',
        'user_id',
        'comment',
        'rating'
    ];

    //lo que devuelve

    public function product()
    {
        return $this->belongsTo(products::class);
    }
}
