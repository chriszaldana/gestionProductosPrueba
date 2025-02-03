<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class products extends Model
{
    //
    protected $fillable = [
        'name', 
        'user_id',
        'description', 
        'price', 
        'stock'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function reviews()
    {
        return $this->hasMany(Reviews::class);
    }
}
