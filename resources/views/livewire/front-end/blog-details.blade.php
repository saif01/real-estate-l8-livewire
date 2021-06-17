<div>
      <section class="pager-sec bfr">
            <div class="container">
                <div class="pager-sec-details">
                    <h3>Blog Open</h3>
                    <ul>
                        <li><a href="{{ route('index') }}" title="">Home</a></li>
                        <li><span>Blog Open</span></li>
                    </ul>
                </div><!--pager-sec-details end-->
            </div>
        </section>

        <section class="blog-single-sec section-padding">
            <div class="container">
                <div class="blog-single-details">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="blog-single-post single">
                                <ul class="post-nfo">
                                    <li><i class="la la-calendar"></i>{{ date("F d, Y", strtotime($allData->date)) }}</li>
                                    <li><i class="la la-comment-o"></i><a href="#" title="">4 Comments</a></li>
                                    <li><i class="la la-bookmark-o"></i><a href="#" title="">Apartments</a></li>
                                </ul>
                                <h3>{{ $allData->title }}</h3>
                                <div class="blog-img">
                                    @if($allData->image)
                                        <img src="{{ $assetUrl.$allData->image }}" alt="Image">
                                    @endif
                                </div><!--blog-img end-->
                                <p>
                                {!! $allData->details !!}
                                </p>
                                <div class="post-share">
                                    <ul class="social-links">
                                        <li><a href="#" title=""><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#" title=""><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#" title=""><i class="fa fa-instagram"></i></a></li>
                                        <li><a href="#" title=""><i class="fa fa-linkedin"></i></a></li>
                                    </ul>
                                    <a href="#comment-sec" title="">Write A Comment <i class="la la-arrow-right"></i></a>
                                </div><!--post-share end-->
                                <div class="cm-info-sec">
                                    <div class="cm-img">
                                        <img src="https://via.placeholder.com/79x79" alt="">
                                    </div><!--author-img end-->
                                    <div class="cm-info">
                                        <h3>Endrey Tomson</h3>
                                        <p>Etiam euismod iaculis urna vel venenatis. Morbi rutrum commodo enim. Vivamus tinci dunt leo vel arcu elnd euismodtis purus in, pulvinar tellus nisl aliquam pretium ac.</p>
                                        <ul class="social-links">
                                            <li><a href="#" title=""><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#" title=""><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#" title=""><i class="fa fa-instagram"></i></a></li>
                                            <li><a href="#" title=""><i class="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div><!--cm-info-sec end-->
                            </div><!--blog-single-post end-->
                            <div class="comment-section">
                                <h3 class="p-title">Comments</h3>
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
                                        </div><!--cm-info-sec end-->
                                        <p>Nam placerat facilisis placerat. Morbi elit nibh, auctor sit amet sodales id, porttitor eu quam. Aenean dui libero, laoreet quis con sequat vitae, posuere ut sapien. Etiam pharetra nulla vel diam eleifend, eu placerat nunc molestie. </p>
                                        <a href="#" title="" class="cm-reply">Reply</a>
                                    </li>
                                </ul>
                            </div><!--comment-section end-->

                            <div class="post-comment-sec" id="comment-sec">
                                <h3 class="p-title">Leave a reply</h3>
                                <form class="js-ajax-form">
                                    <div class="form-group no-pt">
                                        <div class="missing-message">
                                            Populate Missing Fields
                                        </div>
                                        <div class="success-message">
                                            <i class="fa fa-check text-primary"></i> Thank you!. Your message is successfully sent...
                                        </div>
                                        <div class="error-message">Populate Missing Fields</div>
                                    </div><!--form-group end-->
                                    <div class="form-fieldss">
                                        <div class="row">
                                            <div class="col-lg-4 col-md-4 pl-0">
                                                <div class="form-field">
                                                    <input type="text" name="name" placeholder="Your Name" id="name">
                                                </div><!-- form-field end-->
                                            </div>
                                            <div class="col-lg-4 col-md-4">
                                                <div class="form-field">
                                                    <input type="email" name="email" placeholder="Your Email" id="email">
                                                </div><!-- form-field end-->
                                            </div>
                                            <div class="col-lg-4 col-md-4 pr-0">
                                                <div class="form-field">
                                                    <input type="text" name="phone" placeholder="Your Phone">
                                                </div><!-- form-field end-->
                                            </div>
                                            <div class="col-lg-12 col-md-12 pl-0 pr-0">
                                                <div class="form-field">
                                                    <textarea name="message" placeholder="Your Message"></textarea>
                                                </div><!-- form-field end-->
                                            </div>
                                            <div class="col-lg-12 col-md-12 pl-0">
                                                <button type="submit" class="btn-default submit">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div><!--post-comment-sec end-->
                        </div>

                        <div class="col-lg-4">
                            <div class="sidebar pl-15">
                               
                                {{-- <div class="widget widget-catgs">
                                    <h3 class="widget-title">Categories</h3>
                                    <ul>
                                        <li>
                                            <a href="#" title=""><i class="la la-angle-right"></i><span>Apartments</span></a>
                                            <span>7</span>
                                        </li>
                                        <li>
                                            <a href="#" title=""><i class="la la-angle-right"></i><span>Business</span></a>
                                            <span>15</span>
                                        </li>
                                        <li>
                                            <a href="#" title=""><i class="la la-angle-right"></i><span>Construction</span></a>
                                            <span>4</span>
                                        </li>
                                        <li>
                                            <a href="#" title=""><i class="la la-angle-right"></i><span>Location</span></a>
                                            <span>1</span>
                                        </li>
                                    </ul>
                                </div><!--widget-catgs end--> --}}
                                <div class="widget widget-posts">
                                    <h3 class="widget-title">Letest Posts</h3>
                                    <ul>
                                        @forelse ($letestPost as $item2)

                                            <li>
                                                <div class="wd-posts">
                                                    <div class="ps-img">
                                                    @if($item2->image)
                                                    <a href="{{ route('blog.details', $item2->slug) }}" title="Details">
                                                        <img src="{{ $smAssetImage.$item2->image }}" class="rounded-circle" alt="Image" height="50"></a>
                                                    @endif
                                                    
                                                    </div><!--ps-img end-->
                                                    <div class="ps-info">
                                                        <h3><a href="{{ route('blog.details', $item2->slug) }}" title="Details">{{ $item2->title }}</a></h3>
                                                        <span><i class="la la-calendar"></i>{{ date("F d, Y", strtotime($item2->date)) }}</span>
                                                    </div><!--ps-info end-->
                                                </div><!--wd-posts end-->
                                            </li>
                                            
                                        @empty
                                            
                                        @endforelse
                                       
                                      
                                    </ul>
                                </div><!--widget-posts end-->
                                <div class="widget widget-adver">
                                    <a href="#" title="">
                                        <img src="https://via.placeholder.com/350x300" alt="">
                                    </a>
                                </div><!--widget-adver end-->
                                {{-- <div class="widget widget-tags">
                                    <h3 class="widget-title">Popular Tags</h3>
                                    <ul>
                                        <li><a href="#" title="">Real Estate</a></li>
                                        <li><a href="#" title="">Business</a></li>
                                        <li><a href="#" title="">Construction</a></li>
                                        <li><a href="#" title="">Apartment</a></li>
                                        <li><a href="#" title="">Houzez</a></li>
                                        <li><a href="#" title="">Location</a></li>
                                        <li><a href="#" title="">Alignment</a></li>
                                        <li><a href="#" title="">Blog</a></li>
                                        <li><a href="#" title="">Business Development</a></li>
                                    </ul>
                                </div><!--widget-tags end--> --}}
                            </div><!--sidebar end-->
                        </div>
                    </div>
                </div><!--blog-single-details end-->
            </div>
        </section><!--blog-single-sec end-->
</div>


@push('styles')


@endpush

@push('scripts')


@endpush

