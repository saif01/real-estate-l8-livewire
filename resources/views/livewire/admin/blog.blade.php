<div>

    <div class="card-header row">
        <div class="col-md-6">
            <h4 class="card-title">Blog</h4>
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
                            <th wire:click="sortBy('date')">Date
                                @include('livewire.partials.sort-icon',['field'=>'date'])</th>
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
                            <td>{{ $item->date }}</td>
                            <td>{{ $item->title }}</td>
                            <td class="p-0">

                                @if($item->document)
                                <a class="btn btn-sm btn-success float-right mt-2" href="{{ $docUrl.$item->document }}"
                                    download="PressNew"><i class="fas fa-download"></i>Documnet</a>
                                @endif

                                @if($item->image)
                                <img src="{{ $assetUrl.$item->image }}" height="100" class="rounded d-block"><br>
                                @endif
                                Slug : {{ $item->slug }} <hr>
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

    @include('livewire.admin.modals.blog')


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
