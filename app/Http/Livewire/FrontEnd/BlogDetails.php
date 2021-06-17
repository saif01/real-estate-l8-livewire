<?php

namespace App\Http\Livewire\FrontEnd;

use Livewire\Component;

use App\Models\Admin\BlogInfo;

class BlogDetails extends Component
{
    public $slug, $assetUrl, $smAssetImage;

    public function mount($slug){
        $this->slug = $slug;
        $this->assetUrl = asset('images/blog').'/';
        $this->smAssetImage = asset('images/blog/thumb').'/';
    }

    public function render()
    {

        $allData = BlogInfo::where('slug', $this->slug)->first();

        $letestPost = BlogInfo::orderBy('id', 'desc')->take(10)->get();

        //dd($letestPost);

        return view('livewire.front-end.blog-details', compact('allData', 'letestPost'));
    }
}
