<?php

namespace App\Http\Livewire\FrontEnd;

use Livewire\Component;

use App\Models\FrontEnd\UserContactMsg;
use App\Models\Admin\Setting\ContactInfo;

class Contact extends Component
{

    public $name, $email, $phone, $message; 


    //reset form
    public function resetForm(){  
        $this->name         = '';
        $this->email        = '';
        $this->phone        = '';
        $this->message      = '';
     
    }
 
    public function save(){
        //Validate
        $this->validate([
            'name'     => 'nullable|string|max:100',
            'email'    => 'nullable|string|max:100',
            'phone'    => 'nullable|string|max:1000',
            'message'  => 'required|string|max:20000',
        ]);

        $data = new UserContactMsg();

        $data->name     = $this->name;
        $data->email    = $this->email;
        $data->phone    = $this->phone;
        $data->message  = $this->message;
        $success        = $data->save();

        //Reset Form
        $this->resetForm();

        if($success){
            //Tostar alert
            $this->dispatchBrowserEvent('toastMsg', ['messege' => 'Send Successfully &#128512.', 'icon' => 'success'] );
        }else{
            //Tostar alert
            $this->dispatchBrowserEvent('toastMsg', ['messege' => 'Somthing Going Wrong &#128549.', 'icon' => 'error'] );
        }



    }

    public function render()
    {
        $allData= ContactInfo::where('status', '1')->orderBy('id')->first();
        return view('livewire.front-end.contact', compact('allData'));
    }
}
