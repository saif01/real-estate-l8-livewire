<div>
        @php
            //Day Or houre Calculaate
            function DayOrHoure($startTime, $endTime)
            {
                $ts1 = strtotime($startTime);
                $ts2 = strtotime($endTime);
                $seconds = abs($ts2 - $ts1); # difference will always be positive
                $days = round($seconds / (60 * 60 * 24));
                if ($days >= 1) {
                return $days . " Days";
                } else {
                return round($seconds / (60 * 60)) . " Hours";
                }
            }

            $currentTime = date('Y-m-d H:i:s', time());
        @endphp


        <section class="map-sec">
            <h3 class="vis-hid">Invisible</h3>
            <div class="container">
                <div class="map-details">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="map-city-links">
                                <ul>
                                    <li><a href="#" title="">Nevada</a></li>
                                    <li><a href="#" title="">Oklahoma</a></li>
                                    <li><a href="#" title="">New Hampshire</a></li>
                                    <li><a href="#" title="">Oregon</a></li>
                                    <li><a href="#" title="">New Jersey</a></li>
                                    <li><a href="#" title="">Pennsylvania</a></li>
                                    <li><a href="#" title="">New Mexico</a></li>
                                    <li><a href="#" title="">Rhode Island</a></li>
                                    <li><a href="#" title="">New York</a></li>
                                    <li><a href="#" title="">South Carolina</a></li>
                                    <li><a href="#" title="">North Carolina</a></li>
                                    <li><a href="#" title="">South Dakota</a></li>
                                    <li><a href="#" title="">North Dakota</a></li>
                                    <li><a href="#" title="">Tennessee</a></li>
                                    <li><a href="#" title="">Ohio</a></li>
                                    <li><a href="#" title="">Texas</a></li>
                                </ul>
                            </div><!--map-city-links end-->
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div id="map"></div>
                        </div>
                    </div>
                </div><!--map-details end-->
            </div>
        </section>

      
        <section class="form-banner">
            <h3 class="vis-hid">Invisible</h3>
            <div class="banner_form">
                <div class="container">
                    <form action="#" class="row banner-search">
                        <div class="form_field addres">
                            <input type="text" class="form-control" placeholder="Enter Address, City or State">
                        </div>
                        <div class="form_field tpmax">
                            <div class="form-group">
                                <div class="drop-menu">
                                    <input type="hidden" name="gender" wire:model="type">
                                    <ul class="dropeddown">
                                        <li>For Sale</li>
                                        <li>For Rent</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="form_field tpmax">
                            <div class="form-group">
                                <div class="drop-menu">
                                    <div class="select">
                                        <span>Min Price</span>
                                        <i class="fa fa-angle-down"></i>
                                    </div>
                                    <input type="hidden" name="gender">
                                    <ul class="dropeddown">
                                        <li>300$</li>
                                        <li>400$</li>
                                        <li>500$</li>
                                        <li>200$</li>
                                        <li>600$</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="form_field tpmax">
                            <div class="form-group">
                                <div class="drop-menu">
                                    <div class="select">
                                        <span>Max Price</span>
                                        <i class="fa fa-angle-down"></i>
                                    </div>
                                    <input type="hidden" name="gender">
                                    <ul class="dropeddown">
                                        <li>2000</li>
                                        <li>3000</li>
                                        <li>4000</li>
                                        <li>5000</li>
                                        <li>6000</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="form_field srch-btn">
                            <a href="#" class="btn btn-outline-primary ">
                                <i class="la la-search"></i>
                                <span>Search</span>
                            </a>
                        </div>
                    </form>
                </div>
            </div><!--banner_form end-->
        </section><!--form-banner end-->

        <section class="popular-listing hp42 pt-0 section-padding">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <div class="section-heading">
                            <span>Discover</span>
                            <h3>Real Estate for Sale</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    @forelse ($letestProperty as $value)
                        <div class="col-lg-4 col-md-6">
                            <div class="card">
                                <a href="{{ route('property.details', $value->address_slug) }}" title="Details">
                                    <div class="img-block">
                                        <div class="overlay"></div>
                                        <img src="{{ $assetUrl.$value->image }}" alt="Image" class="img-fluid">
                                        <div class="rate-info">
                                            <h5>{{ $value->price }} Tk.</h5>
                                            <span>For {{ $value->type }}</span>
                                        </div>
                                    </div>
                                </a>
                                <div class="card-body">
                                    <a href="{{ route('property.details', $value->address_slug) }}" title="Details">
                                        <h3>{{ $value->title }}</h3>
                                        <p><i class="la la-map-marker"></i>{{ $value->address }}</p>
                                    </a>
                                    <ul>
                                        <li>{{ $value->bedroom }} Bathrooms</li>
                                        <li>{{ $value->bathroom }} Beds</li>
                                        <li>{{ $value->area }}</li>
                                    </ul>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="pull-left">
                                        <i class="la la-heart-o"></i>
                                    </a>
                                    <a href="#" class="pull-right">
                                        <i class="la la-calendar-check-o"></i> {{ DayOrHoure( $value->created_at, now() ) }}</a>
                                </div>
                                <a href="{{ route('property.details', $value->address_slug) }}" title="Details" class="ext-link"></a>
                            </div>
                        </div>
                    @empty
                        
                    @endforelse
                  

                </div>
            </div>
        </section>

        <section class="discover-propt">
            <div class="overlay-bg"></div>
            <div class="container">
                <div class="discover-text">
                    <h3>Discover the Best Properties</h3>
                    <p>Aenean sollicitudin, lorem quis bibendum aucto elit consequat ipsumas nec sagittis sem nibh id elit. Duis sed odio sit amet nibhulpu tate cursus a sit amet mauris. Morbi accumsan ipsum torquent.</p>
                    <a href="#" title="" class="btn btn-default">Get Started Now</a>
                </div><!--discover-text end-->
            </div>
        </section><!--discover-propt end-->

        {{-- <section class="popular-cities hp3 section-padding">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <div class="section-heading">
                            <span>Popular Cities</span>
                            <h3>Find Perfect Place</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <a href="#">
                            <div class="card">
                                <div class="overlay"></div>
                                <div class="overlay-stick"></div>
                                <img src="https://via.placeholder.com/570x450" alt="" class="img-fluid">
                                <div class="card-body">
                                    <h4>New York</h4>
                                    <i class="fa fa-angle-right"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-12">
                                 <a href="#">
                                    <div class="card mgb-30">
                                        <div class="overlay"></div>
                                        <div class="overlay-stick"></div>
                                        <img src="https://via.placeholder.com/570x240" alt="" class="img-fluid">
                                        <div class="card-body">
                                            <h4>Los Angeles</h4>
                                            <i class="fa fa-angle-right"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6">
                                <a href="#">
                                    <div class="card">
                                        <div class="overlay"></div>
                                        <div class="overlay-stick"></div>
                                        <img src="https://via.placeholder.com/270x180" alt="" class="img-fluid">
                                        <div class="card-body">
                                            <h4>Melburn</h4>
                                            <i class="fa fa-angle-right"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6">
                                <a href="#">
                                    <div class="card">
                                        <div class="overlay"></div>
                                        <div class="overlay-stick"></div>
                                        <img src="https://via.placeholder.com/270x180" alt="" class="img-fluid">
                                        <div class="card-body">
                                            <h4>Seattle</h4>
                                            <i class="fa fa-angle-right"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> --}}

        {{-- <section class="explore-feature hp4 section-padding">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <div class="section-heading">
                            <span>Explore Features</span>
                            <h3>Service You Need</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-sm-6 col-md-6 col-lg-4">
                        <a href="#" title="">
                            <div class="card">
                                <div class="card-body">
                                    <i class="icon-home"></i>
                                    <h3>Perfect Tools</h3>
                                    <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit conseat ipsum, nec sagittis sem nibh.</p>
                                </div>
                            </div><!--card end-->
                        </a>
                    </div>
                    <div class="col-xl-4 col-sm-6 col-md-6 col-lg-4">
                        <a href="#" title="">
                            <div class="card">
                                <div class="card-body">
                                    <i class="icon-cursor"></i>
                                    <h3>Search in Click</h3>
                                    <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit conseat ipsum, nec sagittis sem nibh.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-xl-4 col-sm-6 col-md-6 col-lg-4">
                        <a href="#" title="">
                            <div class="card">
                                <div class="card-body">
                                    <i class="icon-lock"></i>
                                    <h3>User Control</h3>
                                    <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit conseat ipsum, nec sagittis sem nibh.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section> --}}


</div>

@push('styles')
 
  
@endpush

@push('scripts')
   
<!-- Maps -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE"></script>
<script src="{{ asset('all-assets/front-end/js/map-cluster/raphael.js') }}"></script>
<script src="{{ asset('all-assets/front-end/js/map-cluster/jquery.usmap.js') }}"></script>

@endpush
