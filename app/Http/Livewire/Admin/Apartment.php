<?php

namespace App\Http\Livewire\Admin;

use Livewire\Component;

use Livewire\WithPagination;
use Auth;
use App\Http\Livewire\Common\fileUpload\ImgUpFunctions;
use App\Http\Livewire\Common\dataTbl\Conformation;
use App\Http\Livewire\Common\dataTbl\TblComponants;
use App\Http\Livewire\Common\Modal\ModalOpenClose;

use Illuminate\Support\Str;
use App\Models\Admin\ApartmentInfo;

class Apartment extends Component
{
    use WithPagination, ImgUpFunctions, Conformation, TblComponants, ModalOpenClose;

    protected $paginationTheme = 'bootstrap';
  
    public $image, $oldImage, $assetUrl, $date, $title, $slugAddress, $message, $details, $address, $type, $area, $amenities, $price, $bedroom, $bathroom, $cooling, $ac, $gym, $internet, $heating, $sw_pool, $fire_place, $built_year;

    public function mount(){
        $this->assetUrl = asset('images/blog/small').'/';
    }

    
    //reset form
    public function resetForm(){
        $this->date           = '';
        $this->title          = '';
        $this->slugTitle      = '';
        $this->type           = '';
        $this->area           = '';
        $this->amenities      = '';
        $this->price           = '';
        $this->bedroom           = '';
        $this->bathroom           = '';
        $this->cooling           = '';
        $this->ac           = '';
        $this->gym           = '';
        $this->internet           = '';
        $this->heating           = '';
        $this->sw_pool           = '';
        $this->fire_place           = '';
        $this->built_year           = '';


       
        $this->details        = '';
        $this->image          = '';
        $this->oldImage       = '';
    }

    // Image 
    public function updatedImage(){
        $this->validate([
            'image'     => 'nullable|image|max:2024', // 1MB Max
        ]);
    }

    // Slug
    public function updatedAddress(){
        $this->slugAddress = Str::slug($this->title);
    }


    //add data btn click
    public function addData(){
        //Reset Form values
        $this->resetForm();
        // Clear summernote value
        $this->dispatchBrowserEvent('editorTextClear');
        //Open Model
        $this->openModal();
    }


    // Save new Data
    public function save($val=null){

        if($this->editId){

            //Validate
            $this->validate([
                'address'     => 'required|string|max:1000|unique:blog_infos,address,'.$this->editId,
                'date'      => 'required|string|max:1000',
                'details'   => 'required|string|max:80000',
                'image'     => 'nullable|image|max:1024', // 1MB Max
            ]);

            $data = ApartmentInfo::find($this->editId);

            // Check Image selected 
            if ( !empty($this->image) ) {
            // Delete file
                $imgFile = $data->image;
                if ( !empty($imgFile) ){
                    // Delete by trait function
                    $this->imgDelete($imgFile, 'blog/');
                }
            }

        }else{
            //Validate
            $this->validate([
                'address'     => 'required|string|max:1000|unique:blog_infos',
                'date'      => 'required|string|max:1000',
                'details'   => 'required|string|max:80000',
                'image'     => 'nullable|image|max:2024', // 1MB Max
            ]);

            $data = new ApartmentInfo();
        }

        // Image store
        if ( !empty($this->image) ) {
            // Image upload by trait function
            $imageName = $this->imgUpBySiPth($this->image, 'images/blog/');
            $imageName = $this->imgUpBySiPth($this->image, 'images/blog/small/', '370', '295');
            $imageName = $this->imgUpBySiPth($this->image, 'images/blog/thumb/', '100', '100');
            //dd($imageName);
            $data->image = $imageName;
        }

     
        $data->date         = $this->date;
        $data->address      = $this->address;
        $data->address_slug = Str::slug($this->address);
        $data->area         = $this->area;
        $data->type         = $this->type;
        $data->amenities    = $this->amenities;
        $data->price      = $this->price;
        $data->bedroom         = $this->bedroom;
        $data->bathroom         = $this->bathroom;
        $data->cooling         = $this->cooling;
        $data->ac              = $this->ac;
        $data->gym              = $this->gym;
        $data->internet              = $this->internet;
        $data->heating              = $this->heating;
        $data->sw_pool              = $this->sw_pool;
        $data->fire_place              = $this->fire_place;
        $data->built_year              = $this->built_year;


        $data->details      = $this->details;
        $data->status       = 1;
        $data->created_by   = Auth::user()->id;
        $success            = $data->save();

        //Close Modal
        $this->closeModal();

        //Reset Form
        $this->resetForm();
    
        if($success){
            //Tostar alert
            $this->dispatchBrowserEvent('toastMsg', ['messege' => 'Saved Successfully &#128512.', 'icon' => 'success'] );
        }else{
            //Tostar alert
            $this->dispatchBrowserEvent('toastMsg', ['messege' => 'Somthing Going Wrong &#128549.', 'icon' => 'error'] );
        }

        

    }

    // Single Data
    public function edit($val){

        $data = ApartmentInfo::find($val);

        // dd($val, $data);
        $this->date       = $data->date;
        $this->title      = $data->title;
        $this->details    = $data->details;
        $this->oldImage   = $data->image;

        // Edited text added in Summernote 
        $this->dispatchBrowserEvent('editorText', ['messege' => $data->details] );

        // set edit form Id
        $this->editId = $val;
        //Open Modal
        $this->openModal('Edit data', $val);
    
    }

    // Delete
    public function delete( $delId = null, $conf=0 ){

        // Delete comform valu make null
        $this->conformation = null;
    
        if($conf == 1){

            if( !empty($delId) ){
            
                $data = ApartmentInfo::find($delId);

                // Delete file
                $imgFile = $data->image;
                if ( !empty($imgFile) ){
                    // Delete by trait function
                    $this->imgDelete($imgFile, 'blog/');
                }

            

                // dd($val);
                $success = $data->delete();
        
            if($success){
                    //Tostar alert
                    $this->dispatchBrowserEvent('toastMsg', ['messege' => 'Deleted Successfully &#128512.', 'icon' => 'success'] );
                }else{
                    //Tostar alert
                    $this->dispatchBrowserEvent('toastMsg', ['messege' => 'Somthing Going Wrong &#128549.', 'icon' => 'error'] );
                }
            }

        
        }
    
    
    }

    // Status change
    public function changeStatus( $stId = null, $conf=0 ){

        // Status comform valu make null
        $this->statusConform = null;

        // Check Conformation ok
        if($conf == 1){

            // Id get or not
            if( !empty($stId) ){

                $data = ApartmentInfo::find($stId);

                if($data->status == 1){
                    $data->status = 0;
                }else{
                    $data->status = 1;
                }

                $success = $data->save();

                if($success){
                    //Tostar alert
                    $this->dispatchBrowserEvent('toastMsg', ['messege' => 'Saved Successfully &#128512.', 'icon' => 'success'] );
                }else{
                    //Tostar alert
                    $this->dispatchBrowserEvent('toastMsg', ['messege' => 'Somthing Going Wrong &#128549.', 'icon' => 'error'] );
                }


            }else{
                //Tostar alert
                $this->dispatchBrowserEvent('toastMsg', ['messege' => 'Somthing Going Wrong &#128549.', 'icon' => 'error'] );
            }

        }

    }


    public function render()
    {
        $allData = ApartmentInfo::query()
        //->search( trim(preg_replace('/\s+/' ,' ', $this->search)) )
        //->with('zoneData', 'managerData', 'officerData')
        ->orderBy($this->sortBy, $this->sortDirection)
        ->paginate($this->perPage);

        return view('livewire.admin.apartment', compact('allData'));
    }
}
