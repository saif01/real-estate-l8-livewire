<?php

namespace App\Http\Livewire\FrontEnd;

use Livewire\Component;

use App\Models\Admin\BlogInfo;

class Index extends Component
{
  

    public function render()
    {
        $letestPost = BlogInfo::orderBy('id', 'desc')->take(6)->get();

        return view('livewire.front-end.index', compact('letestPost'));
    }
}
