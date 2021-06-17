<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogInfo extends Model
{
    use HasFactory;

    protected $gaurded=[];

    //For Dynamic Search 
    public function scopeSearch($query, $val='')
    {
        return $query
        ->where('date', 'LIKE', '%'.$val.'%')
        ->Orwhere('title', 'LIKE', '%'.$val.'%')
        ->Orwhere('details', 'LIKE', '%'.$val.'%');
        // ->orWhereHas('roles', function ($query) use($val){
        //     $query->WhereRaw("name LIKE ? ", '%'.$val.'%');
        // }); 
    }

}
