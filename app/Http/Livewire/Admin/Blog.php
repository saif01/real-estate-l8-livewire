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
use App\Models\Admin\BlogInfo;

class Blog extends Component
{
    use WithPagination, ImgUpFunctions, Conformation, TblComponants, ModalOpenClose;

    protected $paginationTheme = 'bootstrap';
  
    public $image, $oldImage, $assetUrl, $date, $title, $slugTitle, $message, $details;

    public function mount(){
        $this->assetUrl = asset('images/blog/small').'/';
    }

    
    //reset form
    public function resetForm(){
        $this->date           = '';
        $this->title          = '';
        $this->slugTitle      = '';
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
    public function updatedTitle(){
        $this->slugTitle = Str::slug($this->title);
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
                'title'     => 'required|string|max:1000|unique:blog_infos,title,'.$this->editId,
                'date'      => 'required|string|max:1000',
                'details'   => 'required|string|max:80000',
                'image'     => 'nullable|image|max:1024', // 1MB Max
            ]);

            $data = BlogInfo::find($this->editId);

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
                'title'     => 'required|string|max:1000|unique:blog_infos',
                'date'      => 'required|string|max:1000',
                'details'   => 'required|string|max:80000',
                'image'     => 'nullable|image|max:2024', // 1MB Max
            ]);

            $data = new BlogInfo();
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

     
        $data->date       = $this->date;
        $data->title      = $this->title;
        $data->slug       = Str::slug($this->title);
        $data->details    = $this->details;
        $data->status     = 1;
        $data->created_by = Auth::user()->id;
        $success          = $data->save();

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

        $data = BlogInfo::find($val);

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
            
                $data = BlogInfo::find($delId);

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

                $data = BlogInfo::find($stId);

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
        $allData = BlogInfo::query()
        ->search( trim(preg_replace('/\s+/' ,' ', $this->search)) )
        //->with('zoneData', 'managerData', 'officerData')
        ->orderBy($this->sortBy, $this->sortDirection)
        ->paginate($this->perPage);

        return view('livewire.admin.blog', compact('allData'));
    }
}
