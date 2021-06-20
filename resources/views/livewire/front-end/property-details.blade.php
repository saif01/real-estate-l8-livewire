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

        <section class="form_sec">
            <h3 class="vis-hid">Invisible</h3>
            <div class="container">
                <form action="#" class="row banner-search">
                    <div class="form_field addres">
                        <input type="text" class="form-control" placeholder="Enter Address, City or State">
                    </div>
                    <div class="form_field tpmax">
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
                        </a>
                    </div>
                </form>
            </div>
        </section><!--form_sec end-->

        <section class="property-single-pg">
            <div class="container">
                <div class="property-hd-sec">
                    <div class="card">
                        <div class="card-body">
                            <a href="#">
                                <h3>{{ $allData->title }}</h3>
                                <p><i class="la la-map-marker"></i>{{ $allData->address }}</p>
                            </a>
                            <ul>
                                <li>{{ $allData->bedroom }} Bathrooms</li>
                                <li>{{ $allData->bathroom }} Beds</li>
                                <li>{{ $allData->area }}</li>
                            </ul>
                        </div><!--card-body end-->
                        <div class="rate-info">
                            <h5>{{ $allData->price }} Tk.</h5>
                            <span>For {{ $allData->type }}</span>
                        </div><!--rate-info end-->
                    </div><!--card end-->
                </div><!---property-hd-sec end-->
                <div class="property-single-page-content">
                    <div class="row">
                        <div class="col-lg-8 pl-0 pr-0">
                            <div class="property-pg-left">
                                <div class="property-imgs">
                                    <div class="property-main-img">
                                        <div class="property-img">
                                            <img src="{{ $assetUrl.$allData->image }}" alt="Image">
                                        </div><!--property-img end-->
                                        <div class="property-img">
                                            <img src="{{ $assetUrl.$allData->image }}" alt="Image">
                                        </div><!--property-img end-->
                                        <div class="property-img">
                                            <img src="{{ $assetUrl.$allData->image }}" alt="Image">
                                        </div><!--property-img end-->
                                        <div class="property-img">
                                            <img src="{{ $assetUrl.$allData->image }}" alt="Image">
                                        </div><!--property-img end-->
                                        <div class="property-img">
                                            <img src="{{ $assetUrl.$allData->image }}" alt="Image">
                                        </div><!--property-img end-->
                                        <div class="property-img">
                                            <img src="{{ $assetUrl.$allData->image }}" alt="Image">
                                        </div><!--property-img end-->
                                    </div><!--property-main-img end-->
                                    <div class="property-thumb-imgs">
                                        <div class="row thumb-carous">
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                                                <div class="property-img">
                                                    <img src="{{ $assetUrl.$allData->image }}" alt="Image">
                                                </div><!--property-img end-->
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                                                <div class="property-img">
                                                    <img src="{{ $assetUrl.$allData->image }}" alt="Image">
                                                </div><!--property-img end-->
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                                                <div class="property-img">
                                                    <img src="{{ $assetUrl.$allData->image }}" alt="Image">
                                                </div><!--property-img end-->
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                                                <div class="property-img">
                                                    <img src="{{ $assetUrl.$allData->image }}" alt="Image">
                                                </div><!--property-img end-->
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                                                <div class="property-img">
                                                    <img src="{{ $assetUrl.$allData->image }}" alt="Image">
                                                </div><!--property-img end-->
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                                                <div class="property-img">
                                                    <img src="{{ $assetUrl.$allData->image }}" alt="Image">
                                                </div><!--property-img end-->
                                            </div>
                                        </div>
                                    </div><!--property-thumb-imgs end-->
                                </div><!--property-imgs end-->
                                <div class="descp-text">
                                    <h3>Description</h3>
                                    <p>{!! $allData->details !!}</p>
                                </div><!--descp-text end-->
                                <div class="details-info">
                                    <h3>Detail</h3>
                                    <ul>
                                        
                                        <li>
                                            <h4>Year Built:</h4>
                                            <span>{{ $allData->built_year }}</span>
                                        </li>
                                        <li>
                                            <h4>Bathrooms:</h4>
                                            <span>{{ $allData->bathroom }}</span>
                                        </li>
                                        <li>
                                            <h4>Badrooms:</h4>
                                            <span>{{ $allData->bedroom }}</span>
                                        </li>
                                        <li>
                                            <h4>Flooring:</h4>
                                            <span>{{ $allData->area }}</span>
                                        </li>
                                        <li>
                                            <h4>Amenities:</h4>
                                            <span>{{ $allData->amenities }}</span>
                                        </li>
                                        <li>
                                            <h4>Cooling:</h4>
                                            <span>{{ $allData->cooling }}</span>
                                        </li>
                                      
                                    </ul>
                                </div><!--details-info end-->
                                <div class="features-dv">
                                    <h3>Features</h3>
                                    <form class="form_field">
                                        <ul>
                                            <li class="input-field">
                                                <input type="checkbox" name="cc" id="c1" @if($allData->parking == 'gym') checked @endif>
                                                <label for="c1">
                                                    <span></span>
                                                    <small>{{ $allData->parking }}</small>
                                                </label>
                                            </li>
                                            <li class="input-field">
                                                <input type="checkbox" name="cc" id="c2" @if($allData->gym == 'gym') checked @endif>
                                                <label for="c2">
                                                    <span></span>
                                                    <small>{{ $allData->gym }}</small>
                                                </label>
                                            </li>
                                            <li class="input-field">
                                                <input type="checkbox" name="cc" id="c3">
                                                <label for="c3">
                                                    <span></span>
                                                    <small>Heating</small>
                                                </label>
                                            </li>
                                            <li class="input-field">
                                                <input type="checkbox" name="cc" id="c4" checked>
                                                <label for="c4">
                                                    <span></span>
                                                    <small>Air Conditioner</small>
                                                </label>
                                            </li>
                                            <li class="input-field">
                                                <input type="checkbox" name="cc" id="c5" checked>
                                                <label for="c5">
                                                    <span></span>
                                                    <small>Wireless Internet</small>
                                                </label>
                                            </li>
                                            <li class="input-field">
                                                <input type="checkbox" name="cc" id="c6">
                                                <label for="c6">
                                                    <span></span>
                                                    <small>Swimming Pool</small>
                                                </label>
                                            </li>
                                        </ul>
                                    </form>
                                </div><!--features-dv end-->
                                <div class="floorplan">
                                    <h3>floorplan</h3>
                                    <img src="https://via.placeholder.com/427x268" alt="">
                                </div><!--floorplan end-->
                               
                                <div class="nearby-locts">
                                    <h3>What's Nearby?</h3>
                                    <span>Powered by <img src="assets/images/ylog.png" alt=""></span>
                                    <div class="widget-posts">
                                        <ul>
                                            <li>
                                                <div class="wd-posts">
                                                    <div class="ps-img">
                                                        <img src="https://via.placeholder.com/112x89" alt="">
                                                    </div><!--ps-img end-->
                                                    <div class="ps-info">
                                                        <h3><a href="#" title="">The Museum of Modern Art</a></h3>
                                                        <span><i class="la la-map-marker"></i>212 5th Ave, New York</span>
                                                    </div><!--ps-info end-->
                                                </div><!--wd-posts end-->
                                                <ul class="star-rating">
                                                    <li><span class="la la-star"></span></li>
                                                    <li><span class="la la-star"></span></li>
                                                    <li><span class="la la-star"></span></li>
                                                    <li><span class="la la-star"></span></li>
                                                    <li><span class="la la-star"></span></li>
                                                </ul><!--star-rating end-->
                                            </li>
                                            <li>
                                                <div class="wd-posts">
                                                    <div class="ps-img">
                                                        <img src="https://via.placeholder.com/112x89" alt="">
                                                    </div><!--ps-img end-->
                                                    <div class="ps-info">
                                                        <h3><a href="#" title="">Joe's Shanghai</a></h3>
                                                        <span><i class="la la-map-marker"></i>212 5th Ave, New York</span>
                                                    </div><!--ps-info end-->
                                                </div><!--wd-posts end-->
                                                <ul class="star-rating">
                                                    <li><span class="la la-star"></span></li>
                                                    <li><span class="la la-star"></span></li>
                                                    <li><span class="la la-star"></span></li>
                                                    <li><span class="la la-star"></span></li>
                                                    <li><span class="la la-star"></span></li>
                                                </ul><!--star-rating end-->
                                            </li>
                                            <li>
                                                <div class="wd-posts">
                                                    <div class="ps-img">
                                                        <img src="https://via.placeholder.com/112x89" alt="">
                                                    </div><!--ps-img end-->
                                                    <div class="ps-info">
                                                        <h3><a href="#" title="">Apple Fifth Avenue</a></h3>
                                                        <span><i class="la la-map-marker"></i>212 5th Ave, New York</span>
                                                    </div><!--ps-info end-->
                                                </div><!--wd-posts end-->
                                                <ul class="star-rating">
                                                    <li><span class="la la-star"></span></li>
                                                    <li><span class="la la-star"></span></li>
                                                    <li><span class="la la-star"></span></li>
                                                    <li><span class="la la-star"></span></li>
                                                    <li><span class="la la-star"></span></li>
                                                </ul><!--star-rating end-->
                                            </li>
                                        </ul>
                                    </div>
                                </div><!--nearby-locts end-->
                                <div class="comments-dv">
                                    <h3>3 Reviews</h3>
                                    <div class="comment-section">
                                        <ul>
                                            <li>
                                                <div class="cm-info-sec">
                                                    <div class="cm-img">
                                                        <img src="https://via.placeholder.com/79x79" alt="">
                                                    </div><!--author-img end-->
                                                    <div class="cm-info">
                                                        <h3>Kritsofer Nolan</h3>
                                                        <h4>April 25, 2018</h4>
                                                    </div>
                                                    <ul class="rating-lst">
                                                        <li><span class="la la-star"></span></li>
                                                        <li><span class="la la-star"></span></li>
                                                        <li><span class="la la-star"></span></li>
                                                        <li><span class="la la-star"></span></li>
                                                        <li><span class="la la-star"></span></li>
                                                    </ul><!--rating-lst end-->
                                                </div><!--cm-info-sec end-->
                                                <p>Nam placerat facilisis placerat. Morbi elit nibh, auctor sit amet sodales id, porttitor eu quam. Aenean dui libero, laoreet quis con sequat vitae, posuere ut sapien. Etiam pharetra nulla vel diam eleifend, eu placerat nunc molestie. </p>
                                                <a href="#" title="" class="cm-reply">Reply</a>
                                            </li>
                                            <li>
                                                <div class="cm-info-sec">
                                                    <div class="cm-img">
                                                        <img src="https://via.placeholder.com/79x79" alt="">
                                                    </div><!--author-img end-->
                                                    <div class="cm-info">
                                                        <h3>Kritsofer Nolan</h3>
                                                        <h4>April 25, 2018</h4>
                                                    </div>
                                                    <ul class="rating-lst">
                                                        <li><span class="la la-star"></span></li>
                                                        <li><span class="la la-star"></span></li>
                                                        <li><span class="la la-star"></span></li>
                                                        <li><span class="la la-star"></span></li>
                                                        <li><span class="la la-star"></span></li>
                                                    </ul><!--rating-lst end-->
                                                </div><!--cm-info-sec end-->
                                                <p>Nam placerat facilisis placerat. Morbi elit nibh, auctor sit amet sodales id, porttitor eu quam. Aenean dui libero, laoreet quis con sequat vitae, posuere ut sapien. Etiam pharetra nulla vel diam eleifend, eu placerat nunc molestie. </p>
                                                <a href="#" title="" class="cm-reply">Reply</a>
                                            </li>
                                            <li>
                                                <div class="cm-info-sec">
                                                    <div class="cm-img">
                                                        <img src="https://via.placeholder.com/79x79" alt="">
                                                    </div><!--author-img end-->
                                                    <div class="cm-info">
                                                        <h3>Kritsofer Nolan</h3>
                                                        <h4>April 25, 2018</h4>
                                                    </div>
                                                    <ul class="rating-lst">
                                                        <li><span class="la la-star"></span></li>
                                                        <li><span class="la la-star"></span></li>
                                                        <li><span class="la la-star"></span></li>
                                                        <li><span class="la la-star"></span></li>
                                                        <li><span class="la la-star"></span></li>
                                                    </ul><!--rating-lst end-->
                                                </div><!--cm-info-sec end-->
                                                <p>Nam placerat facilisis placerat. Morbi elit nibh, auctor sit amet sodales id, porttitor eu quam. Aenean dui libero, laoreet quis con sequat vitae, posuere ut sapien. Etiam pharetra nulla vel diam eleifend, eu placerat nunc molestie. </p>
                                                <a href="#" title="" class="cm-reply">Reply</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="review-hd">
                                        <div class="rev-hd">
                                            <h3>Write a Review</h3>
                                            <ul class="rating-lst">
                                                <li><span class="la la-star"></span></li>
                                                <li><span class="la la-star"></span></li>
                                                <li><span class="la la-star"></span></li>
                                                <li><span class="la la-star"></span></li>
                                                <li><span class="la la-star"></span></li>
                                            </ul><!--rating-lst end-->
                                        </div><!--rev-hd end-->
                                        <div class="post-comment-sec">
                                            <form>
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-4 pl-0">
                                                        <div class="form-field">
                                                            <input type="text" name="name" placeholder="Your Name">
                                                        </div><!--form-field end-->
                                                    </div>
                                                    <div class="col-lg-4 col-md-4">
                                                        <div class="form-field">
                                                            <input type="text" name="email" placeholder="Your Email">
                                                        </div><!--form-field end-->
                                                    </div>
                                                    <div class="col-lg-4 col-md-4 pr-0">
                                                        <div class="form-field">
                                                            <input type="text" name="phone" placeholder="Your Phone">
                                                        </div><!--form-field end-->
                                                    </div>
                                                    <div class="col-lg-12 pl-0 pr-0">
                                                        <div class="form-field">
                                                            <textarea name="message" placeholder="Your Message"></textarea>
                                                        </div><!--form-field end-->
                                                    </div>
                                                    <div class="col-lg-12 pl-0 pr-0">
                                                        <button type="submit" class="btn-default">Post Review</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div><!--post-comment-sec end-->
                                    </div><!--review-hd end-->
                                </div><!--comments-dv end-->
                                <div class="similar-listings-posts">
                                    <h3>Similar Listings</h3>
                                    <div class="list-products">
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
                                            <div class="card_bod_full">
                                                <div class="card-body">
                                                    <a href="24_Property_Single.html" title="">
                                                        <h3>Traditional Apartments</h3>
                                                        <p><i class="la la-map-marker"></i>212 5th Ave, New York</p>
                                                    </a>
                                                    <ul>
                                                        <li>3 Bathrooms</li>
                                                        <li>2 Beds</li>
                                                        <li>Area 555 Sq Ft</li>
                                                    </ul>
                                                </div>
                                                <div class="card-footer">
                                                    <div class="crd-links">
                                                        <a href="#" class="pull-left">
                                                            <i class="la la-heart-o"></i>
                                                        </a>
                                                        <a href="#" class="plf">
                                                            <i class="la la-calendar-check-o"></i> 25 Days Ago
                                                        </a>
                                                    </div><!--crd-links end-->
                                                    <a href="24_Property_Single.html" title="" class="btn-default">View Details</a>
                                                </div>
                                            </div><!--card_bod_full end-->
                                            <a href="24_Property_Single.html" title="" class="ext-link"></a>
                                        </div><!--card end-->
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
                                            <div class="card_bod_full">
                                                <div class="card-body">
                                                    <a href="24_Property_Single.html" title="">
                                                        <h3>Traditional Apartments</h3>
                                                        <p><i class="la la-map-marker"></i>212 5th Ave, New York</p>
                                                    </a>
                                                    <ul>
                                                        <li>3 Bathrooms</li>
                                                        <li>2 Beds</li>
                                                        <li>Area 555 Sq Ft</li>
                                                    </ul>
                                                </div>
                                                <div class="card-footer">
                                                    <div class="crd-links">
                                                        <a href="#" class="pull-left">
                                                            <i class="la la-heart-o"></i>
                                                        </a>
                                                        <a href="#" class="plf">
                                                            <i class="la la-calendar-check-o"></i> 25 Days Ago
                                                        </a>
                                                    </div><!--crd-links end-->
                                                    <a href="24_Property_Single.html" title="" class="btn-default">View Details</a>
                                                </div>
                                            </div><!--card_bod_full end-->
                                            <a href="24_Property_Single.html" title="" class="ext-link"></a>
                                        </div><!--card end-->
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
                                            <div class="card_bod_full">
                                                <div class="card-body">
                                                    <a href="24_Property_Single.html" title="">
                                                        <h3>Traditional Apartments</h3>
                                                        <p><i class="la la-map-marker"></i>212 5th Ave, New York</p>
                                                    </a>
                                                    <ul>
                                                        <li>3 Bathrooms</li>
                                                        <li>2 Beds</li>
                                                        <li>Area 555 Sq Ft</li>
                                                    </ul>
                                                </div>
                                                <div class="card-footer">
                                                    <div class="crd-links">
                                                        <a href="#" class="pull-left">
                                                            <i class="la la-heart-o"></i>
                                                        </a>
                                                        <a href="#" class="plf">
                                                            <i class="la la-calendar-check-o"></i> 25 Days Ago
                                                        </a>
                                                    </div><!--crd-links end-->
                                                    <a href="24_Property_Single.html" title="" class="btn-default">View Details</a>
                                                </div>
                                            </div><!--card_bod_full end-->
                                            <a href="24_Property_Single.html" title="" class="ext-link"></a>
                                        </div><!--card end-->
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
                                            <div class="card_bod_full">
                                                <div class="card-body">
                                                    <a href="24_Property_Single.html" title="">
                                                        <h3>Traditional Apartments</h3>
                                                        <p><i class="la la-map-marker"></i>212 5th Ave, New York</p>
                                                    </a>
                                                    <ul>
                                                        <li>3 Bathrooms</li>
                                                        <li>2 Beds</li>
                                                        <li>Area 555 Sq Ft</li>
                                                    </ul>
                                                </div>
                                                <div class="card-footer">
                                                    <div class="crd-links">
                                                        <a href="#" class="pull-left">
                                                            <i class="la la-heart-o"></i>
                                                        </a>
                                                        <a href="#" class="plf">
                                                            <i class="la la-calendar-check-o"></i> 25 Days Ago
                                                        </a>
                                                    </div><!--crd-links end-->
                                                    <a href="24_Property_Single.html" title="" class="btn-default">View Details</a>
                                                </div>
                                            </div><!--card_bod_full end-->
                                            <a href="24_Property_Single.html" title="" class="ext-link"></a>
                                        </div><!--card end-->
                                    </div><!-- list-products end-->
                                </div><!--similar-listings-posts end-->
                            </div><!--property-pg-left end-->
                        </div>
                        <div class="col-lg-4 pr-0">
                            <div class="sidebar layout2">
                                <div class="widget widget-form">
                                    <h3 class="widget-title">Contact Listing Agent</h3>
                                    <div class="contct-info">
                                        <img src="https://via.placeholder.com/81x74" alt="">
                                        <div class="contct-nf">
                                            <h3>Tomas Wilkinson</h3>
                                            <h4>Douglas and Eleman Agency</h4>
                                            <span><i class="la la-phone"></i>+1 212-925-3797</span>
                                        </div>
                                    </div><!--contct-info end-->
                                    <div class="post-comment-sec">
                                        <form>
                                            <div class="form-field">
                                                <input type="text" name="name" placeholder="Your Name">
                                            </div><!--form-field end-->
                                            <div class="form-field">
                                                <input type="text" name="email" placeholder="Your Email">
                                            </div><!--form-field end-->
                                            <div class="form-field">
                                                <input type="text" name="phone" placeholder="Your Phone">
                                            </div><!--form-field end-->
                                            <div class="form-field">
                                                <textarea name="message" placeholder="Your Message"></textarea>
                                            </div><!--form-field end-->
                                            <button type="submit" class="btn2">Contact</button>
                                        </form>
                                    </div><!--post-comment-sec end-->
                                </div><!--widget-form end-->
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
                                    <h3 class="widget-title">Popular Listings</h3>
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
                                                    <h3><a href="14_Blog_Open.html" title="">Traditional Apartments</a></h3>
                                                    <strong>$125.700</strong>
                                                    <span><i class="la la-map-marker"></i>212 5th Ave, New York</span>
                                                </div><!--ps-info end-->
                                            </div><!--wd-posts end-->
                                        </li>
                                    </ul>
                                </div><!--widget-posts end-->
                                <div class="widget widget-calculator">
                                    <h3 class="widget-title">Mortgage Calculator</h3>
                                    <form>
                                        <ul>
                                            <li>
                                                <i>$</i>
                                                <input type="number" name="amount" placeholder="Total Amount">
                                            </li>
                                            <li>
                                                <i>$</i>
                                                <input type="number" name="amount" placeholder="Down Payment">
                                            </li>
                                            <li>
                                                <i>$</i>
                                                <input type="number" name="amount" placeholder="Interest Rate">
                                            </li>
                                            <li>
                                                <i>$</i>
                                                <input type="number" name="amount" placeholder="Monthly Repayments">
                                            </li>
                                            <li>
                                                <button type="submit" class="btn2">Calculate</button>
                                            </li>
                                        </ul>
                                    </form>
                                </div><!--widget-calculator end-->
                            </div><!--sidebar end-->
                        </div>
                    </div>
                </div><!--property-single-page-content end-->
            </div>
        </section><!--property-single-pg end-->
</div>
