<?php

namespace App\Http\Livewire\FrontEnd;

use Livewire\Component;

use App\Models\Admin\PropertyInfo;

use Livewire\WithPagination;
use App\Http\Livewire\Common\dataTbl\TblComponants;
use Auth;

class Property extends Component
{
    use WithPagination, TblComponants;

    protected $paginationTheme = 'bootstrap';

    public $assetUrl;

    public function mount(){
        $this->assetUrl = asset('images/property/small').'/';
    }

    

    public function render()
    {
        $allData = PropertyInfo::query()
        ->where('status', '1')
        ->search( trim(preg_replace('/\s+/' ,' ', $this->search)) )
        //->with('zoneData', 'managerData', 'officerData')
        ->orderBy($this->sortBy, $this->sortDirection)
        ->paginate($this->perPage);

        return view('livewire.front-end.property', compact('allData'));
    }
    
}
