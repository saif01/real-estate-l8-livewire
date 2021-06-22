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

    public $assetUrl, $shortType=null, $type, $searchVal, $max, $min, $searchRun, $bedroom, $ac, $gym, $internet, $heating, $sw_pool, $fire_place, $parking;

    public function mount(){
        $this->assetUrl = asset('images/property/small').'/';
    }


    public function searchData(){
        $this->validate([
            'searchVal' => 'nullable|max:100'
        ]);

        $this->searchRun = true;
    }

    

    public function render()
    {

        if($this->searchRun){
            
            $query = PropertyInfo::orderBy('id', 'desc');

            // max min  check if exist
           if(!empty($this->min) && !empty($this->max)){

            $query->whereBetween('price', [$this->min, $this->max] );

           }else{
                // Type check if exist
                if( !empty($this->min) ){
                    $query->where('price', '<=' , $this->min);
                }

                // Type check if exist
                if( !empty($this->max) ){
                    $query->where('price', '>=' , $this->max);
                }
           }
            
            // searchVal check if exist
            if( !empty($this->searchVal) ){
                $query->where('address_slug', 'LIKE', '%'.$this->searchVal.'%')
                ->Orwhere('address', 'LIKE', '%'.$this->searchVal.'%');
            }

            // Type check if exist
            if( !empty($this->type) ){
                $query->where('type', $this->type);
            }

            // bedroom 
            if( !empty($this->bedroom) ){
                $query->where('bedroom', $this->bedroom);
            }




            $allData = $query->where('status', '1')
            ->paginate(10);
            $this->searchRun = false;

        }
        elseif(!empty($this->shortType)){

            $allData = PropertyInfo::query()
            ->where('status', '1')
            ->where('type', $this->shortType)
            ->paginate(10);


        }
        else{
            $allData = PropertyInfo::query()
            ->where('status', '1')
            ->paginate(10);
        }

       

        return view('livewire.front-end.property', compact('allData'));
    }
    
}
