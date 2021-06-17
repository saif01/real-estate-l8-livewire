<?php

namespace App\Http\Livewire\Admin\Auth;

use Livewire\Component;


use App\Models\Auth\UserLoginLog;
use Livewire\WithPagination;
use App\Http\Livewire\Common\dataTbl\TblComponants;


class LoginLog extends Component
{

    use WithPagination, TblComponants;

    public function render()
    {
       // $allData = UserLoginLog::get();

        $allData = UserLoginLog::query()
        ->search( trim(preg_replace('/\s+/' ,' ', $this->search)) )
        //->with('zoneData', 'managerData', 'officerData')
        //->where('status', 1)
        ->orderBy($this->sortBy, $this->sortDirection)
        ->paginate($this->perPage);

        return view('livewire.admin.auth.login-log', compact('allData'));
    }
}
