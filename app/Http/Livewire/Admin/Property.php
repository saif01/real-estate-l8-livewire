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
use App\Models\Admin\PropertyInfo;

class Property extends Component
{
    use WithPagination, ImgUpFunctions, Conformation, TblComponants, ModalOpenClose;

    protected $paginationTheme = 'bootstrap';
  
    public $image, $oldImage, $image_2, $oldimage_2, $image_3, $oldimage_3, $image_4, $oldimage_4, $image_5, $oldimage_5, $assetUrl, $date, $title, $slugAddress, $message, $details, $address, $type, $area, $amenities, $price, $bedroom, $bathroom, $cooling, $ac, $gym, $internet, $heating, $sw_pool, $fire_place, $parking, $built_year, $owner_name, $owner_number;

    public function mount(){
        $this->assetUrl = asset('images/property/small').'/';
    }

    
    //reset form
    public function resetForm(){
        $this->title          = '';
        $this->slugTitle      = '';
        $this->type           = '';
        $this->area           = '';
        $this->amenities      = '';
        $this->price          = '';
        $this->bedroom        = '';
        $this->bathroom       = '';
        $this->cooling        = '';
        $this->ac             = '';
        $this->gym            = '';
        $this->internet       = '';
        $this->heating        = '';
        $this->sw_pool        = '';
        $this->fire_place     = '';
        $this->built_year     = '';
        $this->parking        = '';
        $this->owner_name     = '';
        $this->owner_number   = '';
        $this->details        = '';
        $this->image          = '';
        $this->oldImage       = '';
        $this->image_2        = '';
        $this->oldimage_2     = '';
        $this->image_3        = '';
        $this->oldimage_3     = '';
        $this->image_4         = '';
        $this->oldimage_4      = '';
        $this->image_5         = '';
        $this->oldimage_5      = '';
    }

    // Image 
    public function updatedImage(){
        $this->validate([
            'image'     => 'nullable|image|max:3024', // 1MB Max
        ]);
    }

    // Slug
    public function updatedAddress(){
        $this->slugAddress = Str::slug($this->address);
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
                'title'     => 'required|string|max:500',
                'address'   => 'required|string|max:1000',
                'type'      => 'required|string|max:1000',
                'price'     => 'required',
                'bedroom'   => 'required',
                'bathroom'  => 'required',
                'cooling'   => 'required',
                'ac'        => 'required',
                'gym'       => 'required',
                'internet'  => 'required',
                'heating'   => 'required',
                'sw_pool'   => 'required',
                'fire_place'=> 'required',
                'parking'   => 'required',
                'amenities' => 'required',
                'built_year'=> 'required',
                'details'   => 'required|string|max:80000',
                'image'     => 'nullable|image|max:3024', // 3MB Max
                'image_2'   => 'nullable|image|max:3024', // 3MB Max
                'image_3'   => 'nullable|image|max:3024', // 3MB Max
                'image_4'   => 'nullable|image|max:3024', // 3MB Max
                'image_5'   => 'nullable|image|max:3024', // 3MB Max
            ]);

            $data = PropertyInfo::find($this->editId);

            // Check Image selected 
            if ( !empty($this->image) ) {
                // Delete file
                $imgFile = $data->image;
                if ( !empty($imgFile) ){
                    // Delete by trait function
                    $this->imgDeleteByPath($imgFile, 'property/');
                    $this->imgDeleteByPath($imgFile, 'images/property/small/');
                    $this->imgDeleteByPath($imgFile, 'images/property/thumb/');
                }
            }

        }else{
            //Validate
            $this->validate([
                'title'     => 'required|string|max:500',
                'address'   => 'required|string|max:1000',
                'type'      => 'required|string|max:1000',
                'price'     => 'required',
                'bedroom'   => 'required',
                'bathroom'  => 'required',
                'cooling'   => 'required',
                'ac'        => 'required',
                'gym'       => 'required',
                'internet'  => 'required',
                'heating'   => 'required',
                'sw_pool'   => 'required',
                'fire_place'=> 'required',
                'parking'   => 'required',
                'amenities' => 'required',
                'built_year'=> 'required',
                'details'   => 'required|string|max:80000',
                'image'     => 'nullable|image|max:3024', // 3MB Max
                'image_2'   => 'nullable|image|max:3024', // 3MB Max
                'image_3'   => 'nullable|image|max:3024', // 3MB Max
                'image_4'   => 'nullable|image|max:3024', // 3MB Max
                'image_5'   => 'nullable|image|max:3024', // 3MB Max
            ]);

            $data = new PropertyInfo();
        }

        // Image store
        if ( !empty($this->image) ) {
            // Image upload by trait function
            $imageName = $this->imgUpBySiPth($this->image, 'images/property/');
            $imageName = $this->imgUpBySiPth($this->image, 'images/property/small/', '370', '295');
            $imageName = $this->imgUpBySiPth($this->image, 'images/property/thumb/', '100', '100');
            //dd($imageName);
            $data->image = $imageName;
        }

        // image_2 store
        if ( !empty($this->image_2) ) {
            // image_2 upload by trait function
            $image_2Name = $this->imgUpBySiPth($this->image_2, 'images/property/');
            $image_2Name = $this->imgUpBySiPth($this->image_2, 'images/property/small/', '370', '295');
            $image_2Name = $this->imgUpBySiPth($this->image_2, 'images/property/thumb/', '100', '100');
            //dd($image_2Name);
            $data->image_2 = $image_2Name;
        }

       // image_3 store
       if ( !empty($this->image_3) ) {
            // image_3 upload by trait function
            $image_3Name = $this->imgUpBySiPth($this->image_3, 'images/property/');
            $image_3Name = $this->imgUpBySiPth($this->image_3, 'images/property/small/', '370', '295');
            $image_3Name = $this->imgUpBySiPth($this->image_3, 'images/property/thumb/', '100', '100');
            //dd($image_3Name);
            $data->image_3 = $image_3Name;
        }


       // image_4 store
       if ( !empty($this->image_4) ) {
            // image_4 upload by trait function
            $image_4Name = $this->imgUpBySiPth($this->image_4, 'images/property/');
            $image_4Name = $this->imgUpBySiPth($this->image_4, 'images/property/small/', '370', '295');
            $image_4Name = $this->imgUpBySiPth($this->image_4, 'images/property/thumb/', '100', '100');
            //dd($image_4Name);
            $data->image_4 = $image_4Name;
        }


          // image_5 store
        if ( !empty($this->image_5) ) {
            // image_5 upload by trait function
            $image_5Name = $this->imgUpBySiPth($this->image_5, 'images/property/');
            $image_5Name = $this->imgUpBySiPth($this->image_5, 'images/property/small/', '370', '295');
            $image_5Name = $this->imgUpBySiPth($this->image_5, 'images/property/thumb/', '100', '100');
            //dd($image_5Name);
            $data->image_5 = $image_5Name;
        }


        

        $data->title        = $this->title;
        $data->address      = $this->address;
        $data->address_slug = Str::slug($this->address);
        $data->area         = $this->area;
        $data->type         = $this->type;
        $data->amenities    = $this->amenities;
        $data->price        = $this->price;
        $data->bedroom      = $this->bedroom;
        $data->bathroom     = $this->bathroom;
        $data->cooling      = $this->cooling;
        $data->ac           = $this->ac;
        $data->gym          = $this->gym;
        $data->internet     = $this->internet;
        $data->heating      = $this->heating;
        $data->sw_pool      = $this->sw_pool;
        $data->parking      = $this->parking;   
        $data->fire_place   = $this->fire_place;
        $data->built_year   = $this->built_year;
        $data->owner_name   = $this->owner_name;
        $data->owner_number = $this->owner_number;
    


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

        $data = PropertyInfo::find($val);

        // dd($val, $data);
        $this->title      = $data->title;
        $this->details    = $data->details;
        $this->oldImage   = $data->image;

        $this->address    = $data->address;
        $this->area       = $data->area;
        $this->type       = $data->type;
        $this->amenities  = $data->amenities;
        $this->price      = $data->price;
        $this->bedroom    = $data->bedroom;
        $this->bathroom   = $data->bathroom;
        $this->cooling    = $data->cooling;
        $this->ac         = $data->ac;
        $this->gym        = $data->gym;
        $this->internet   = $data->internet;
        $this->heating    = $data->heating;
        $this->sw_pool    = $data->sw_pool;
        $this->parking    = $data->parking;
        $this->fire_place = $data->fire_place;
        $this->built_year = $data->built_year;

        $this->owner_name = $data->owner_name;
        $this->owner_number = $data->owner_number;


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
            
                $data = PropertyInfo::find($delId);
            
                // Delete file
                $imgFile = $data->image;
                if ( !empty($imgFile) ){
                    // Delete by trait function
                    $this->imgDeleteByPath($imgFile, 'property/');
                    $this->imgDeleteByPath($imgFile, 'images/property/small/');
                    $this->imgDeleteByPath($imgFile, 'images/property/thumb/');
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

                $data = PropertyInfo::find($stId);

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
        $allData = PropertyInfo::query()
        ->search( trim(preg_replace('/\s+/' ,' ', $this->search)) )
        //->with('zoneData', 'managerData', 'officerData')
        ->orderBy($this->sortBy, $this->sortDirection)
        ->paginate($this->perPage);

        return view('livewire.admin.property', compact('allData'));
    }
}

