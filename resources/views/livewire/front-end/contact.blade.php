<div>

    <div class="contact-sec">
        <div class="container">
            <div class="contact-details-sec">
                <div class="row">
                    <div class="col-lg-8 col-md-8 pl-0">
                        <div class="contact_form">
                            <h3>Contact</h3>
                            <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                                sem nibh id elit. Duis sed odio sit amet nibh vulpu tate cursus a sit amet mauris. Morbi
                                accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                                mauris vitae erat consequat auctor eu in elit. </p>
                           
                                
                                <!--form-group end-->
                                <div class="form-fieldss">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-4 pl-0">
                                            <div class="form-field">
                                                <input type="text" wire:model.lazy="name" placeholder="Your Name">
                                                @error('name')
                                                    <small class="form-text text-danger">{{ $name }}</small>
                                                @enderror
                                            </div><!-- form-field end-->
                                        </div>
                                        <div class="col-lg-4 col-md-4">
                                            <div class="form-field">
                                                <input type="email" wire:model.lazy="email" placeholder="Your Email">
                                                @error('email')
                                                <small class="form-text text-danger">{{ $email }}</small>
                                                @enderror
                                            </div><!-- form-field end-->
                                        </div>
                                        <div class="col-lg-4 col-md-4 pr-0">
                                            <div class="form-field">
                                                <input type="text" wire:model.lazy="phone" placeholder="Your Phone">
                                                @error('phone')
                                                <small class="form-text text-danger">{{ $phone }}</small>
                                                @enderror
                                            </div><!-- form-field end-->
                                        </div>
                                        <div class="col-lg-12 col-md-12 pl-0 pr-0">
                                            <div class="form-field">
                                                <textarea wire:model.lazy="message" placeholder="Your Message"></textarea>
                                                @error('message')
                                                <small class="form-text text-danger">{{ $message }}</small>
                                                @enderror
                                            </div><!-- form-field end-->
                                        </div>
                                        <div class="col-lg-12 col-md-12 pl-0">
                                            {{-- <button type="submit" class="btn-default submit">Send Message</button> --}}

                                            <button wire:click="save" wire:loading.remove class="btn-default"> Send Message </button>
                                            <button wire:loading wire:target="save" class="btn-default">Sending... </button>
                                        </div>

                                    </div>
                                </div>
                                <!--form-fieldss end-->
                            
                        </div>
                        <!--contact_form end-->
                    </div>
                    <div class="col-lg-4 col-md-4 pr-0">
                        <div class="contact_info">
                            <h3>Contact Information</h3>
                            <ul class="cont_info">
                                <li><i class="la la-map-marker"></i> {{ $allData->address }}</li>
                                <li><i class="la la-phone"></i>  {{ $allData->phone }}</li>
                                <li><i class="la la-envelope"></i><a href="mailto: {{ $allData->email }}"
                                        title=""> {{ $allData->email }}</a></li>
                            </ul>
                            <ul class="social_links">
                                <li><a href="#" title=""><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#" title=""><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#" title=""><i class="fa fa-instagram"></i></a></li>
                                <li><a href="#" title=""><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                        <!--contact_info end-->
                    </div>
                </div>
            </div>
            <!--contact-details-sec end-->
        </div>
    </div>
    <!--contact-sec end-->



</div>

@push('styles')


@endpush

@push('scripts')


@endpush
