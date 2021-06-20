<div>
    
        <section class="pager-sec bfr">
            <div class="container">
                <div class="pager-sec-details">
                    <h3>List Layout</h3>
                    <ul>
                        <li><a href="#" title="">Home</a></li>
                        <li><span>List Layout</span></li>
                    </ul>
                </div><!--pager-sec-details end-->
            </div>
        </section>
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
        <section class="listing-main-sec section-padding2">
            <div class="container">
                <div class="listing-main-sec-details">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="listing-directs">
                                <div class="list-head">
                                    <div class="sortby">
                                        <span>Sort by:</span>
                                        <div class="drop-menu">
                                            <div class="select">
                                                <span>Relevant</span>
                                                <i class="la la-caret-down"></i>
                                            </div>
                                            <input type="hidden" name="gender">
                                            <ul class="dropeddown">
                                                <li>For Sale</li>
                                                <li>For Rent</li>
                                            </ul>
                                        </div>
                                    </div><!--sortby end-->

                                    {{-- <div class="view-change">
                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link" id="grid-tab1" data-toggle="tab" href="#grid-view-tab1" role="tab" aria-controls="grid-view-tab1" aria-selected="true"><i class="la la-th-large"></i></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active" id="grid-tab2" data-toggle="tab" href="#grid-view-tab2" role="tab" aria-controls="grid-view-tab2" aria-selected="true"><i class="la la-th-list"></i></a>
                                            </li>
                                        </ul>
                                    </div><!--view-change end--> --}}
                                    
                                </div><!--list-head end-->
                                <div class="tab-content" id="myTabContent">
                                  
                                    <div class="tab-pane fade show active" role="tabpanel" aria-labelledby="grid-view-tab2">
                                        <div class="list-products">

                                        @forelse($allData as $key => $value)
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
                                                <div class="card_bod_full">
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
                                                        <div class="crd-links">
                                                            {{-- <a href="#" class="pull-left">
                                                                <i class="la la-heart-o"></i>
                                                            </a> --}}
                                                            <a href="#" class="plf">
                                                                <i class="la la-calendar-check-o"></i>
                                                                {{ DayOrHoure( $value->created_at, now() ) }}
                                                            </a>
                                                        </div><!--crd-links end-->
                                                        <a href="{{ route('property.details', $value->address_slug) }}" title="Details" class="btn-default">View Details</a>
                                                    </div>
                                                </div><!--card_bod_full end-->
                                                <a href="{{ route('property.details', $value->address_slug) }}" title="Details" class="ext-link"></a>
                                            </div><!--card end-->
                                        @empty
                                            
                                        @endforelse
                                        

                                        </div><!-- list-products end-->
                                    </div>
                                </div><!--tab-content end-->
                           
                            </div><!--listing-directs end-->
                        </div>
                        <div class="col-lg-4">
                            <div class="sidebar layout2">
                                <div class="widget widget-property-search">
                                    <h3 class="widget-title">Property Search</h3>
                                    <form action="#" class="row banner-search">
                                        <div class="form_field">
                                            <input type="text" class="form-control" placeholder="Enter Address, City or State">
                                        </div>
                                        <div class="form_field">
                                            <div class="form-group">
                                                <div class="drop-menu">
                                                    <div class="select">
                                                        <span>Any type</span>
                                                        <i class="fa fa-angle-down"></i>
                                                    </div>
                                                    <input type="hidden" name="gender">
                                                    <ul class="dropeddown">
                                                        <li>For Sale</li>
                                                        <li>For Rent</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form_field">
                                            <div class="form-group">
                                                <div class="drop-menu">
                                                    <div class="select">
                                                        <span>Min Price</span>
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
                                        <div class="form_field">
                                            <div class="form-group">
                                                <div class="drop-menu">
                                                    <div class="select">
                                                        <span>Max Price</span>
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
                                        <div class="form_field">
                                            <div class="form-group">
                                                <div class="drop-menu">
                                                    <div class="select">
                                                        <span>Badrooms</span>
                                                    </div>
                                                    <input type="hidden" name="gender">
                                                    <ul class="dropeddown">
                                                        <li>1</li>
                                                        <li>2</li>
                                                        <li>3</li>
                                                        <li>4</li>
                                                        <li>5</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form_field">
                                            <h4>More Features</h4>
                                            <ul>
                                                <li class="input-field">
                                                    <input type="checkbox" name="cc" id="c1">
                                                    <label for="c1">
                                                        <span></span>
                                                        <small>Parking</small>
                                                    </label>
                                                </li>
                                                <li class="input-field">
                                                    <input type="checkbox" name="cc" id="c2">
                                                    <label for="c2">
                                                        <span></span>
                                                        <small>Air Conditioner</small>
                                                    </label>
                                                </li>
                                                <li class="input-field">
                                                    <input type="checkbox" name="cc" id="c3">
                                                    <label for="c3">
                                                        <span></span>
                                                        <small>Washing Machine</small>
                                                    </label>
                                                </li>
                                                <li class="input-field">
                                                    <input type="checkbox" name="cc" id="c4">
                                                    <label for="c4">
                                                        <span></span>
                                                        <small>Heating</small>
                                                    </label>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li class="input-field">
                                                    <input type="checkbox" name="cc" id="c5">
                                                    <label for="c5">
                                                        <span></span>
                                                        <small>Gym</small>
                                                    </label>
                                                </li>
                                                <li class="input-field">
                                                    <input type="checkbox" name="cc" id="c6">
                                                    <label for="c6">
                                                        <span></span>
                                                        <small>Wireless Internet</small>
                                                    </label>
                                                </li>
                                                <li class="input-field">
                                                    <input type="checkbox" name="cc" id="c7">
                                                    <label for="c7">
                                                        <span></span>
                                                        <small>Elevator</small>
                                                    </label>
                                                </li>
                                                <li class="input-field">
                                                    <input type="checkbox" name="cc" id="c8">
                                                    <label for="c8">
                                                        <span></span>
                                                        <small>Swimming Pool</small>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="form_field">
                                            <a href="#" class="btn btn-outline-primary ">
                                                <span>Search</span>
                                            </a>
                                        </div>
                                    </form>
                                </div><!--widget-property-search end-->
                                <div class="widget widget-featured-property">
                                    <h3 class="widget-title">Featured Property</h3>
                                    <div class="card">
                                        <a href="24_Property_Single.html" title="">
                                            <div class="img-block">
                                                <div class="overlay"></div>
                                                <img src="https://via.placeholder.com/370x295" alt="" class="img-fluid">
                                                <div class="rate-info">
                                                    <h5>$550.000</h5>
                                                    <span>For Rent</span>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="card-body">
                                            <a href="24_Property_Single.html" title="">
                                                <h3>Traditional Apartments</h3>
                                                <p><i class="la la-map-marker"></i>212 5th Ave, New York</p>
                                            </a>
                                        </div>
                                    </div>
                                </div><!--widget-featured-property end-->
                                <div class="widget widget-catgs">
                                    <h3 class="widget-title">Categories</h3>
                                    <ul>
                                        <li>
                                            <a href="#" title=""><i class="la la-angle-right"></i><span>House</span></a>
                                            <span>7</span>
                                        </li>
                                        <li>
                                            <a href="#" title=""><i class="la la-angle-right"></i><span>Condo</span></a>
                                            <span>15</span>
                                        </li>
                                        <li>
                                            <a href="#" title=""><i class="la la-angle-right"></i><span>Townhouse</span></a>
                                            <span>4</span>
                                        </li>
                                        <li>
                                            <a href="#" title=""><i class="la la-angle-right"></i><span>Coop</span></a>
                                            <span>1</span>
                                        </li>
                                    </ul>
                                </div><!--widget-catgs end-->
                                <div class="widget widget-posts">
                                    <h3 class="widget-title">Popular Posts</h3>
                                    <ul>
                                        <li>
                                            <div class="wd-posts">
                                                <div class="ps-img">
                                                    <a href="14_Blog_Open.html" title="">
                                                        <img src="https://via.placeholder.com/112x89" alt="">
                                                    </a>
                                                </div><!--ps-img end-->
                                                <div class="ps-info">
                                                    <h3><a href="14_Blog_Open.html" title="">Traditional Apartments</a></h3>
                                                    <strong>$125.700</strong>
                                                    <span><i class="la la-map-marker"></i>212 5th Ave, New York</span>
                                                </div><!--ps-info end-->
                                            </div><!--wd-posts end-->
                                        </li>
                                        <li>
                                            <div class="wd-posts">
                                                <div class="ps-img">
                                                    <a href="14_Blog_Open.html" title="">
                                                        <img src="https://via.placeholder.com/112x89" alt="">
                                                    </a>
                                                </div><!--ps-img end-->
                                                <div class="ps-info">
                                                    <h3><a href="14_Blog_Open.html" title="">Luxury Home</a></h3>
                                                    <strong>$125.700</strong>
                                                    <span><i class="la la-map-marker"></i>212 5th Ave, New York</span>
                                                </div><!--ps-info end-->
                                            </div><!--wd-posts end-->
                                        </li>
                                        <li>
                                            <div class="wd-posts">
                                                <div class="ps-img">
                                                    <a href="14_Blog_Open.html" title="">
                                                        <img src="https://via.placeholder.com/112x89" alt="">
                                                    </a>
                                                </div><!--ps-img end-->
                                                <div class="ps-info">
                                                    <h3><a href="14_Blog_Open.html" title="">Real Estate Industry</a></h3>
                                                    <strong>$125.700</strong>
                                                    <span><i class="la la-map-marker"></i>212 5th Ave, New York</span>
                                                </div><!--ps-info end-->
                                            </div><!--wd-posts end-->
                                        </li>
                                    </ul>
                                </div><!--widget-posts end-->
                            </div><!--sidebar end-->
                        </div>
                    </div>

                    <div class="row">
                        <p class="small">Showing {{ $allData->firstItem() }} to {{ $allData->lastItem() }} out of
                            {{ $allData->total() }} items</p>
                        <div class="pagination justify-content-center mt-0 pt-0">
                            {{ $allData->links() }}

                        </div>
                        <!--load-more-posts end-->
                    </div>

                </div><!--listing-main-sec-details end-->
            </div>    
        </section><!--listing-main-sec end-->
</div>
