<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index(){

        return view('admin.index');
    }

    public function adminAll(){
        return view('admin.users.all');
    }

    //All Roles
    public function rolesAll(){
        return view('admin.roles.all');
    }


    //Login Log
    public function loginLog(){
        return view('admin.auth.login-log');
    }


    //contact
    public function contact(){
        return view('admin.setting.contact');
    }

    //blog
    public function blog(){
        return view('admin.blog');
    }

    //apartment
    public function apartment(){
        return view('admin.apartment');
    }

  






   

}
