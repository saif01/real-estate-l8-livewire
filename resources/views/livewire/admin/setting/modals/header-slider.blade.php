
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
            <label for="titleName">Title</label>
            <input type="text" wire:model='title' class="form-control" id="titleName" placeholder="Enter Slider title">
            @error('title')
            <small class="small text-danger">{{ $message }}</small>
            @enderror
        </div>

        <div class="form-group">
            <label for="detailsName">Details</label>
            <textarea type="text" wire:model='details' class="form-control" id="detailsName" placeholder="Enter details"></textarea>
            @error('details')
            <small class="small text-danger">{{ $message }}</small>
            @enderror
        </div>

         
            
            
          
         
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