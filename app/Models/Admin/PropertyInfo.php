<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertyInfo extends Model
{
    use HasFactory;

    protected $gaurded=[];

    //For Dynamic Search 
    public function scopeSearch($query, $val='')
    {
        return $query
        ->where('title', 'LIKE', '%'.$val.'%')
        ->Orwhere('address_slug', 'LIKE', '%'.$val.'%')
        ->Orwhere('type', 'LIKE', '%'.$val.'%')
        ->Orwhere('price', 'LIKE', '%'.$val.'%')
        ->Orwhere('bedroom', 'LIKE', '%'.$val.'%')
        ->Orwhere('bathroom', 'LIKE', '%'.$val.'%')
        ->Orwhere('area', 'LIKE', '%'.$val.'%')
        ->Orwhere('amenities', 'LIKE', '%'.$val.'%')
        ->Orwhere('cooling', 'LIKE', '%'.$val.'%')
        ->Orwhere('parking', 'LIKE', '%'.$val.'%')
        ->Orwhere('ac', 'LIKE', '%'.$val.'%')
        ->Orwhere('gym', 'LIKE', '%'.$val.'%')
        ->Orwhere('internet', 'LIKE', '%'.$val.'%')
        ->Orwhere('heating', 'LIKE', '%'.$val.'%')
        ->Orwhere('sw_pool', 'LIKE', '%'.$val.'%')
        ->Orwhere('fire_place', 'LIKE', '%'.$val.'%')
        ->Orwhere('built_year', 'LIKE', '%'.$val.'%')
        ->Orwhere('details', 'LIKE', '%'.$val.'%');

        // ->orWhereHas('roles', function ($query) use($val){
        //     $query->WhereRaw("name LIKE ? ", '%'.$val.'%');
        // }); 
    }
}
