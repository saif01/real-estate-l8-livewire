<div>

    <div class="card-header row">
        <div class="col-md-6">
            <h4 class="card-title">All Admin Login Log</h4>
        </div>

    </div>

    <div class="card-content">
        <div class="card-body card-dashboard">

            <div class="row mb-4">
                {{-- Tbl Perpage Search --}}
                @include('livewire.partials.tbl-perpage-search')
            </div>

            <div class="table-responsive">
                <table class="table mb-0 table-striped table-bordered">
                    <thead>
                        <tr>
                            <th wire:click="sortBy('login_id')">Login ID
                            @include('livewire.partials.sort-icon',['field'=>'login_id'])</th>

                            <th wire:click="sortBy('browser')">Browser
                            @include('livewire.partials.sort-icon',['field'=>'browser'])</th>

                            <th wire:click="sortBy('device')">Device
                            @include('livewire.partials.sort-icon',['field'=>'device'])</th>

                            <th wire:click="sortBy('status')">Status
                            @include('livewire.partials.sort-icon',['field'=>'status'])</th>

                            <th wire:click="sortBy('created_at')">Login Time
                            @include('livewire.partials.sort-icon',['field'=>'created_at'])</th>

                            <th wire:click="sortBy('updated_at')">Logout Time
                            @include('livewire.partials.sort-icon',['field'=>'updated_at'])</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($allData as $item)
                        <tr>
                            <td>{{ $item->login_id }}</td>
                            <td>{{ $item->browser }}</td>
                            <td>{{ $item->device }}</td>
                            <td>{{ $item->created_at }}</td>
                            <td>
                            @if($item->status == 1)
                               <span class="text-success">Success</span> 
                            @else
                                <span class="text-danger">Failed</span>
                            @endif 
                            </td>
                            <td>
                            @if($item->created_at == $item->updated_at)
                               <span class="text-danger">Not Logout</span> 
                            @else
                                {{ $item->updated_at }}
                            @endif 
                            </td>
                          
                            
                        </tr>
                        @empty
                        <tr>
                            <p class="text-center text-warning h3">Sorry !!! Data Not found</p>
                        </tr>
                        @endforelse


                    </tbody>
                </table>
                <p>Showing {{$allData->firstItem()}} to {{$allData->lastItem()}} out of {{$allData->total()}} items</p>
                {{ $allData->links() }}
            </div>

        </div>
    </div>




</div>


@push('scripts')


@endpush
