<?php

namespace App\Http\Livewire\FrontEnd;

use Livewire\Component;

use App\Models\Admin\BlogInfo;

use App\Models\Admin\PropertyInfo;

class Index extends Component
{

    public $assetUrl, $type;

    public function mount(){
        $this->assetUrl = asset('images/property/small').'/';
    }
  

    public function render()
    {
        $letestPost = BlogInfo::orderBy('id', 'desc')->take(6)->get();

        $letestProperty = PropertyInfo::orderBy('id', 'desc')->take(6)->get();

        return view('livewire.front-end.index', compact('letestPost', 'letestProperty'));
    }
}
