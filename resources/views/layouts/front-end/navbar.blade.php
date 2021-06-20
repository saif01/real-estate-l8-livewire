<header>
    <div class="header shd">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" href="{{ route('index') }}">
                            <img src="{{ asset('all-assets/front-end/images/logo.png') }}" alt="Logo">
                        </a>
                        <button class="menu-button" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                            <span class="icon-spar"></span>
                            <span class="icon-spar"></span>
                            <span class="icon-spar"></span>
                        </button>

                        <div class="navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('index') }}">
                                        Home
                                    </a>


                                </li>

                                <li class="nav-item ">
                                    <a class="nav-link" href="{{ route('property') }}">
                                        Find property
                                    </a>

                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="{{ route('blog') }}">Blog</a>


                                </li>

                                <li class="nav-item ">
                                    <a class="nav-link" href="about.html">About</a>

                                </li>

                                <li class="nav-item ">
                                    <a class="nav-link" href="{{ route('contact') }}">Contact us</a>
                                </li>

                            </ul>
                            <div class="d-inline my-2 my-lg-0">
                                <ul class="navbar-nav">
                                    {{-- <li class="nav-item signin-btn">
                                        <a href="{{ route('login') }}" class="nav-link">
                                            <i class="la la-sign-in"></i>
                                            <span><b>Sign in</b></span>
                                        </a>

                                    </li> --}}

                                     {{-- <li class="nav-item signin-btn">
                                        <a href="" class="nav-link">
                                            <i class="la la-sign-in"></i>
                                            <span><b class="signin-op">Sign in</b> or <b
                                                    class="reg-op">Register</b></span>
                                        </a>

                                    </li> --}}
                                    {{-- <li class="nav-item submit-btn">
                                        <a href="#" class="my-2 my-sm-0 nav-link sbmt-btn">
                                            <i class="icon-plus"></i>
                                            <span>Submit Listing</span>
                                        </a>
                                    </li> --}}
                                    <li class="nav-item submit-btn">
                                        <a href="{{ route('login') }}" class="my-2 my-sm-0 nav-link sbmt-btn">
                                           <i class="la la-sign-in"></i>
                                            <span>Sign in</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <a href="#" title="" class="close-menu"><i class="la la-close"></i></a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>

</header>
<!--header end-->
