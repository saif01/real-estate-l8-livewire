
  <!-- Modal -->
  <div wire:ignore.self class="modal fade" id="dataAddModal" tabindex="-1" aria-labelledby="dataAddModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="dataAddModalLabel">{{ $modelTitle }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">

          

         <div class="form-group">
                <label for="conformPassword">Slider Image</label>
                <input type="file" wire:model="image" class="form-control">
                @error('image')
                <small class="small text-danger">{{ $message }}</small>
                @enderror
            </div>
            
            @if ($image)
                <img src="{{ $image->temporaryUrl() }}" height="100" class="rounded mx-auto d-block" >
            @elseif($oldImage)
                <img src="{{ asset('images/slider/small').'/'.$oldImage }}" height="100" class="rounded mx-auto d-block" >
            @endif

     

       
  
         
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
         
          <button wire:click="save" wire:loading.remove class="btn btn-primary"><i class="fas fa-plus-square"></i> Save </button>

          <button wire:loading wire:target="save" class="btn btn-primary ">Saving... <i
            class="fas fa-spinner fa-spin"></i></button>
        </div>
      </div>
    </div>
  </div>