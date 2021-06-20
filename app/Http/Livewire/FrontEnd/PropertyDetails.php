<?php

namespace App\Http\Livewire\FrontEnd;

use Livewire\Component;

use App\Models\Admin\PropertyInfo;

class PropertyDetails extends Component
{

    public $slug, $assetUrl, $smAssetImage;

    public function mount($slug){
        $this->slug = $slug;
        $this->assetUrl = asset('images/property').'/';
        $this->smAssetImage = asset('images/property/thumb').'/';
    }

    public function render()
    {
        $allData = PropertyInfo::where('address_slug', $this->slug)->first();

        return view('livewire.front-end.property-details', compact('allData'));
    }
}
