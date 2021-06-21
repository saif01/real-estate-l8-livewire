<!-- Modal -->
<div wire:ignore.self class="modal fade" id="dataAddModal" tabindex="-1" aria-labelledby="dataAddModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="dataAddModalLabel">{{ $modelTitle }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <div class="row mb-2">
                    <div class="col">
                        <input type="text" wire:model='title' class="form-control form-control-sm"
                            placeholder="Enter Property Title">
                        @error('title')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="col">
                        <input type="text" wire:model='address' class="form-control form-control-sm"
                            placeholder="Enter Property Address">
                        <small>{{ $slugAddress }}</small>
                        @error('address')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                </div>

                <div class="row mb-2">
                     <div class="col">
                        <select class="form-control form-control-sm" wire:model="type">
                            <option selected>Choose Property type</option>
                            <option value="rent">Rent</option>
                            <option value="sale">Sale</option>
                        </select>
                        @error('type')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="col">
                        <input type="text" wire:model='area' class="form-control form-control-sm"
                            placeholder="Property Area Like ( 555 Sq Ft )">
                        @error('area')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="col">
                        <input type="text" wire:model='amenities' class="form-control form-control-sm"
                            placeholder="Amenities Like (Elevator)">
                        @error('amenities')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                    <div class="col">
                        <input type="text" wire:model='owner_name' class="form-control form-control-sm"
                            placeholder="Property Owner Name">
                        @error('owner_name')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col">
                        <input type="number" wire:model='price' class="form-control form-control-sm"
                            placeholder="Enter Property Price">
                        @error('price')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="col">
                        <input type="number" wire:model='bedroom' class="form-control form-control-sm"
                            placeholder="Enter Bedroom Numer">
                        @error('bedroom')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="col">
                        <input type="number" wire:model='bathroom' class="form-control form-control-sm"
                            placeholder="Enter Bathroom Number">
                        @error('bathroom')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                     <div class="col">
                        <input type="text" wire:model='owner_number' class="form-control form-control-sm"
                            placeholder="Property Owner Number">
                        @error('owner_number')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col">
                        <select class="form-control form-control-sm" wire:model="cooling">
                            <option selected>Choose Cooling System</option>
                            <option value="central-cooling">Central Cooling</option>
                            <option value="No">Not Available</option>
                        </select>
                        @error('cooling')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="col">
                        <select class="form-control form-control-sm" wire:model="ac">
                            <option selected>Choose AC System</option>
                            <option value="ac">Air Condition</option>
                            <option value="No">Not Available</option>
                        </select>
                        @error('ac')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="col">
                        <select class="form-control form-control-sm" wire:model="gym">
                            <option selected>Choose Gym System</option>
                            <option value="gym">Gym</option>
                            <option value="No">Not Available</option>
                        </select>
                        @error('gym')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="col">
                        <select class="form-control form-control-sm" wire:model="internet">
                            <option selected>Choose Internet System</option>
                            <option value="internet">Internet</option>
                            <option value="No">Not Available</option>
                        </select>
                        @error('internet')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="col">
                        <select class="form-control form-control-sm" wire:model="parking">
                            <option selected>Choose Parking System</option>
                            <option value="parking">Parking</option>
                            <option value="No">Not Available</option>
                        </select>
                        @error('internet')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                </div>

                <div class="row mb-2">
                    <div class="col">
                        <select class="form-control form-control-sm" wire:model="heating">
                            <option selected>Choose Heating System</option>
                            <option value="heating">Heating</option>
                            <option value="No">Not Available</option>
                        </select>
                        @error('heating')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="col">
                        <select class="form-control form-control-sm" wire:model="sw_pool">
                            <option selected>Choose Sweeming Pool</option>
                            <option value="sw_pool">Sweeming Pool</option>
                            <option value="No">Not Available</option>
                        </select>
                        @error('sw_pool')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="col">
                        <select class="form-control form-control-sm" wire:model="fire_place">
                            <option selected>Choose Fire Place</option>
                            <option value="fire_place">Fire Place</option>
                            <option value="No">Not Available</option>
                        </select>
                        @error('fire_place')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="col">
                        <input type="text" wire:model='built_year' class="form-control form-control-sm datepicker"
                            autocomplete="off" data-provide="datepicker" data-date-autoclose="true"
                            data-date-format="yyyy-mm-dd" data-date-today-highlight="true"
                            placeholder="Enter Date Of Build" onchange="this.dispatchEvent(new InputEvent('input'))">
                        @error('built_year')
                        <small class="form-text text-danger">{{ $message }}</small>
                        @enderror
                    </div>

                </div>


                <div class="form-group" wire:ignore>
                    <label for="customTextEditor">Details</label>
                    <textarea id="customTextEditor" class="form-control" autocomplete="off">{{ $details }}</textarea>
                </div>

                @error('details')
                <small class="small text-danger">{{ $message }}</small>
                @enderror

                <div class="row">
                    <div class="col">
                        <label> Image</label>
                        <input type="file" wire:model="image" class="form-control form-control-sm">
                        @error('image')
                        <small class="small text-danger">{{ $message }}</small>
                        @enderror

                        @if ($image)
                        <img src="{{ $image->temporaryUrl() }}" height="50" class="rounded mx-auto d-block">
                        @elseif($oldImage)
                        <img src="{{ $assetUrl.$oldImage }}" height="50" class="rounded mx-auto d-block">
                        @endif
                    </div>

                    <div class="col">
                        <label> Image-2</label>
                        <input type="file" wire:model="image_2" class="form-control form-control-sm">
                        @error('image_2')
                        <small class="small text-danger">{{ $message }}</small>
                        @enderror

                        @if ($image_2)
                        <img src="{{ $image_2->temporaryUrl() }}" height="50" class="rounded mx-auto d-block">
                        @elseif($oldimage_2)
                        <img src="{{ $assetUrl.$oldimage_2 }}" height="50" class="rounded mx-auto d-block">
                        @endif
                    </div>

                    <div class="col">
                        <label> Image-3</label>
                        <input type="file" wire:model="image_3" class="form-control form-control-sm">
                        @error('image_3')
                        <small class="small text-danger">{{ $message }}</small>
                        @enderror

                         @if ($image_3)
                        <img src="{{ $image_3->temporaryUrl() }}" height="50" class="rounded mx-auto d-block">
                        @elseif($oldimage_3)
                        <img src="{{ $assetUrl.$oldimage_3 }}" height="50" class="rounded mx-auto d-block">
                        @endif
                    </div>

                    <div class="col">
                        <label> Image-4</label>
                        <input type="file" wire:model="image_4" class="form-control form-control-sm">
                        @error('image_4')
                        <small class="small text-danger">{{ $message }}</small>
                        @enderror

                         @if ($image_4)
                        <img src="{{ $image_4->temporaryUrl() }}" height="50" class="rounded mx-auto d-block">
                        @elseif($oldimage_4)
                        <img src="{{ $assetUrl.$oldimage_4 }}" height="50" class="rounded mx-auto d-block">
                        @endif
                    </div>

                    <div class="col">
                        <label> Image-5</label>
                        <input type="file" wire:model="image_5" class="form-control form-control-sm">
                        @error('image_5')
                        <small class="small text-danger">{{ $message }}</small>
                        @enderror

                         @if ($image_5)
                        <img src="{{ $image_5->temporaryUrl() }}" height="50" class="rounded mx-auto d-block">
                        @elseif($oldimage_5)
                        <img src="{{ $assetUrl.$oldimage_5 }}" height="50" class="rounded mx-auto d-block">
                        @endif
                    </div>
                </div>
               

               





            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                <button wire:click="save" wire:loading.remove class="btn btn-primary"><i class="fas fa-plus-square"></i>
                    Save </button>

                <button wire:loading wire:target="save" class="btn btn-primary">Saving... <i
                        class="fas fa-spinner fa-spin"></i></button>
            </div>
        </div>
    </div>
</div>
