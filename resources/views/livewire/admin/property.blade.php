<div>

    <div class="card-header row">
        <div class="col-md-6">
            <h4 class="card-title">Property List</h4>
        </div>

        <div class="col-md-6">
            @can('add')
            <button type="button" wire:click="addData" class="btn btn-primary btn-sm float-right"><i
                    class="fas fa-plus-square"></i>Add</button>
            @endcan
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
                            <th wire:click="sortBy('title')">Title
                                @include('livewire.partials.sort-icon',['field'=>'title'])</th>
                            <th wire:click="sortBy('details')">Details
                                @include('livewire.partials.sort-icon',['field'=>'details'])</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($allData as $item)
                        <tr>
                            <td>{{ $item->title }}</td>
                            <td class="p-0">
                                <div class="row m-2">
                                  @if($item->image)
                                    <img src="{{ $assetUrl.$item->image }}" height="100" class="rounded mr-1"><br>
                                    @endif

                                    @if($item->image_2)
                                    <img src="{{ $assetUrl.$item->image_2 }}" height="100" class="rounded mr-1"><br>
                                    @endif

                                    @if($item->image_3)
                                    <img src="{{ $assetUrl.$item->image_3 }}" height="100" class="rounded mr-1"><br>
                                    @endif

                                    @if($item->image_4)
                                    <img src="{{ $assetUrl.$item->image_4 }}" height="100" class="rounded mr-1"><br>
                                    @endif

                                    @if($item->image_5)
                                    <img src="{{ $assetUrl.$item->image_5 }}" height="100" class="rounded mr-1"><br>
                                    @endif
                                </div>
                              
                                Owner Name : {{ $item->owner_name }} <b>&nbsp;||&nbsp;</b>
                                Owner Number : {{ $item->owner_number }} <b>&nbsp;||&nbsp;</b>
                                Address : {{ $item->address }} <b>&nbsp;||&nbsp;</b>
                                Slug : {{ $item->address_slug }}<br><br>
                                Type : {{ $item->type }}<b>&nbsp;||&nbsp;</b>
                                Price : {{ $item->price }}<b>&nbsp;||&nbsp;</b>
                                Bedroom : {{ $item->bedroom }}<b>&nbsp;||&nbsp;</b>
                                Bathroom : {{ $item->bathroom }}<b>&nbsp;||&nbsp;</b>
                                Area : {{ $item->area }}<b>&nbsp;||&nbsp;</b>
                                Amenities : {{ $item->amenities }}<b>&nbsp;||&nbsp;</b>
                                Cooling : {{ $item->cooling }}<b>&nbsp;||&nbsp;</b>
                                Gym : {{ $item->gym }}<b>&nbsp;||&nbsp;</b>
                                Internet : {{ $item->internet }}<b>&nbsp;||&nbsp;</b>
                                Parking : {{ $item->parking }}<b>&nbsp;||&nbsp;</b>
                                Heating : {{ $item->heating }}<b>&nbsp;||&nbsp;</b>
                                sw_pool : {{ $item->sw_pool }}<b>&nbsp;||&nbsp;</b>
                                fire_place : {{ $item->fire_place }}<b>&nbsp;||&nbsp;</b>
                                built_year : {{ $item->built_year }}
                                <br><br>
                                Description:
                                {!! $item->details !!}


                            </td>

                            <td>
                                {{-- Data Edit btn --}}
                                @can('edit')
                                <button wire:click="edit({{ $item->id }})" class="btn btn-sm btn-info"><i
                                        class="far fa-edit"></i>Edit</button>
                                @endcan

                                {{-- Data status btn --}}
                                @if($statusConform === $item->id)
                                <div wire:loading.remove class="btn-group">
                                    <button wire:click="changeStatus({{ $item->id }},1)"
                                        class="btn btn-sm btn-danger"><i class="far fa-check-circle"></i> Yes</button>
                                    <button wire:click="statusConformation" class="btn btn-sm btn-secondary"><i
                                            class="far fa-times-circle"></i>No</button>
                                </div>

                                <button wire:loading wire:target="changeStatus" class="btn btn-sm btn-success"><i
                                        class="fas fa-spinner fa-spin"></i>Loading ....</button>
                                @else

                                @if($item->status == 1)
                                <a wire:click="statusConformation({{ $item->id }})" class="btn btn-sm btn-success"><i
                                        class="far fa-eye"></i>Active</a>
                                @else
                                <a wire:click="statusConformation({{ $item->id }})" class="btn btn-sm btn-warning"><i
                                        class="far fa-eye-slash"></i>Inactive</a>
                                @endif

                                @endif

                                {{-- Data Delete btn --}}
                                @can('delete')
                                @if($deleteConform === $item->id)
                                <div wire:loading.remove class="btn-group">
                                    <button wire:click="delete({{ $item->id }},1)" class="btn btn-sm btn-danger"><i
                                            class="far fa-check-circle"></i>Yes</button>
                                    <button wire:click="deleteConformation" class="btn btn-sm btn-secondary"><i
                                            class="far fa-times-circle"></i>No</button>
                                </div>

                                <button wire:loading wire:target="delete" class="btn btn-sm btn-success"><i
                                        class="fas fa-spinner fa-spin"></i>Loading ....</button>
                                @else
                                <a wire:click="deleteConformation({{ $item->id }})" class="btn btn-sm btn-warning"><i
                                        class="fas fa-eraser"></i>Delete</a>
                                @endif
                                @endcan

                            </td>
                        </tr>
                        @empty
                        <tr>
                            <td colspan="10">
                                <p class="text-center text-warning h3">Sorry !!! Data Not found</p>
                            </td>
                        </tr>
                        @endforelse


                    </tbody>
                </table>
                <p>Showing {{$allData->firstItem()}} to {{$allData->lastItem()}} out of {{$allData->total()}} items</p>
                {{ $allData->links() }}
            </div>

        </div>
    </div>

    @include('livewire.admin.modals.property')


</div>

@push('styles')
<link rel="stylesheet"
    href="{{ asset('all-assets/common/bootstrap-datepicker/css/bootstrap-datepicker.standalone.min.css') }}" />
{{-- <!-- Summernote Editor CSS--> --}}
<link rel="stylesheet" href="{{ asset('all-assets/common/summernote/summernote-bs4.min.css') }}" />
@endpush

@push('scripts')

<script src="{{ asset('all-assets/common/bootstrap-datepicker/js/bootstrap-datepicker.min.js') }}"></script>

{{-- Summernote js link namd functions --}}
@include('livewire.partials.summernote-js')

{{-- Modal open close js functions --}}
@include('livewire.partials.modal-js')

@endpush
