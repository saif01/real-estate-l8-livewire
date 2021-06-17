<?php

namespace App\Http\Controllers\FrontEnd;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    // index
    public function index(){
        return view('front-end.index');
    }

  
    //contact
    public function contact(){
        return view('front-end.contact');
    }

    //blog
    public function blog(){
        return view('front-end.blog');
    }

    // blogDetails
    public function blogDetails($slug){

        return view('front-end.blog-details', compact('slug'));
    }







}
