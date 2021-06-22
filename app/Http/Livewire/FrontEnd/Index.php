<?php

namespace App\Http\Livewire\FrontEnd;

use Livewire\Component;

use App\Models\Admin\BlogInfo;

use App\Models\Admin\PropertyInfo;

class Index extends Component
{

    public $assetUrl, $type, $searchVal, $max, $min, $searchRun;

    public function mount(){
        $this->searchRun = false;
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
        $letestPost = BlogInfo::orderBy('id', 'desc')->take(6)->get();

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


            $letestProperty = $query->take(20)->get();
            $this->searchRun = false;

        }else{
            $letestProperty = PropertyInfo::orderBy('id', 'desc')->take(6)->get();
        }
        

        return view('livewire.front-end.index', compact('letestPost', 'letestProperty'));
    }
}
