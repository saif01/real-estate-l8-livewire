
  <!-- Modal -->
  <div wire:ignore.self class="modal fade" id="dataAddModal" tabindex="-1" aria-labelledby="dataAddModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="dataAddModalLabel">{{ $modelTitle }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">

            <div class="form-group">
                <label>Title</label>
                <input type="text" wire:model='title' class="form-control" placeholder="Enter title">
                <small>{{ $slugTitle }}</small>
                @error('title')
                <small class="form-text text-danger">{{ $message }}</small>
                @enderror
            </div>


            <div class="row">
                <div class="col">
                        <label>Date</label>
                        <div class='input-group'>
                            <input wire:model="date"
                                    type="text" class="form-control datepicker" autocomplete="off"
                                    data-provide="datepicker" data-date-autoclose="true" 
                                    data-date-format="yyyy-mm-dd" data-date-today-highlight="true"  placeholder="Enter Report Date"  onchange="this.dispatchEvent(new InputEvent('input'))" />
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <span class="far fa-calendar-alt"></span>
                                </span>
                            </div>
                        </div>
                        @error('date')
                        <small class="small text-danger">{{ $message }}</small>
                        @enderror
                </div>
            </div>
           

          
            <div class="form-group"  wire:ignore> 
                <label for="customTextEditor">Details</label>
                <textarea id="customTextEditor" class="form-control" autocomplete="off">{{ $details }}</textarea>
            </div> 

            @error('details')
                <small class="small text-danger">{{ $message }}</small>
            @enderror

             
            <div class="form-group">
                <label> Image</label>
                <input type="file" wire:model="image" class="form-control">
                @error('image')
                <small class="small text-danger">{{ $message }}</small>
                @enderror
            </div>
            
            @if ($image)
                <img src="{{ $image->temporaryUrl() }}" height="50" class="rounded mx-auto d-block" >
            @elseif($oldImage)
                <img src="{{ $assetUrl.$oldImage }}" height="50" class="rounded mx-auto d-block" >
            @endif

            
            
          
         
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
         
          <button wire:click="save" wire:loading.remove class="btn btn-primary"><i class="fas fa-plus-square"></i> Save </button>

          <button wire:loading wire:target="save" class="btn btn-primary">Saving... <i
            class="fas fa-spinner fa-spin"></i></button>
        </div>
      </div>
    </div>
  </div>