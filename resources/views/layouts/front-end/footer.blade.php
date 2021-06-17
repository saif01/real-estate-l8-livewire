    @php
     $footer = App\Models\Admin\Setting\ContactInfo::where('status', '1')->orderBy('id')->first();
    @endphp
    <a href="#" title="">
        <section class="cta section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="cta-text">
                            <h2>Discover a home you'll love to stay</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </a>
     <section class="bottom section-padding">
         <div class="container">
             <div class="row">
                 <div class="col-xl-4 col-sm-6 col-md-4">
                     <div class="bottom-logo">
                        <img src="{{ asset('all-assets/front-end/images/logo.png') }}" alt="Logo">
                     </div>
                 </div>
                 <div class="col-xl-3 col-sm-6 col-md-3">
                     <div class="bottom-list">
                         <h3>Helpful Links</h3>
                         <ul>
                             <li>
                                 <a href="18_Half_Map.html" title="">Half Map</a>
                             </li>
                             <li>
                                 <a href="#" title="">Register</a>
                             </li>
                             <li>
                                 <a href="#" title="">Pricing</a>
                             </li>
                             <li>
                                 <a href="#" title="">Add Listing</a>
                             </li>
                         </ul>
                     </div>
                     <!--bottom-list end-->
                 </div>
                 <div class="col-xl-5 col-sm-12 col-md-5 pl-0">
                     <div class="bottom-desc">
                         <h3>Aditional Information</h3>
                         <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat
                             auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                             inceptos.
                         </p>

                        <ul class="cont_info mt-2">
                            <li><i class="la la-map-marker"></i> {{ $footer->address }}</li>
                            <li><i class="la la-phone"></i>  {{ $footer->phone }}</li>
                            <li><i class="la la-envelope"></i><a href="mailto: {{ $footer->email }}"
                                    title=""> {{ $footer->email }}</a></li>
                        </ul>
                     </div>
                 </div>
             </div>
         </div>
     </section>



     <footer class="footer">
         <div class="container">
             <div class="row">
                 <div class="col-xl-12">
                     <div class="footer-content">
                         <div class="row justify-content-between">
                             <div class="col-xl-6 col-md-6">
                                 <div class="copyright">
                                     <p>&copy; Selio theme made in EU. All Rights Reserved.</p>
                                 </div>
                             </div>
                             <div class="col-xl-3 col-md-6">
                                 <div class="footer-social">
                                     <a href="#">
                                         <i class="fa fa-facebook"></i>
                                     </a>
                                     <a href="#">
                                         <i class="fa fa-twitter"></i>
                                     </a>
                                     <a href="#">
                                         <i class="fa fa-instagram"></i>
                                     </a>
                                     <a href="#">
                                         <i class="fa fa-linkedin"></i>
                                     </a>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </footer>
     <!--footer end-->
