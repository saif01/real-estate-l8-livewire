<?php

namespace App\Models\Auth;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLoginLog extends Model
{
    use HasFactory;

     //For Dynamic Search 
     public function scopeSearch($query, $val='')
     {
         return $query
         ->where('login_id', 'LIKE', '%'.$val.'%')
         ->OrWhere('browser', 'LIKE', '%'.$val.'%')
         ->OrWhere('device', 'LIKE', '%'.$val.'%')
         ->OrWhere('created_at', 'LIKE', '%'.$val.'%')
         ->OrWhere('updated_at', 'LIKE', '%'.$val.'%');
     }
}
