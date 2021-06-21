<!DOCTYPE html>
<html lang="en">

<head>
    @include('layouts.common.icon')
    <title>@yield('title')</title>
    <!-- Meta -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="author" content="syful.cse.bd@gmail.com" />

    <!-- Mobile Specific Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- Bootstrap  -->
    <link rel="stylesheet" type="text/css" href="{{ asset('all-assets/front-end/css/bootstrap.min.css') }}">
    {{-- <!-- fontawesome icon --> --}}
    <link rel="stylesheet" href="{{ asset('all-assets/common/fontawesom5.7/css/all.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('all-assets/front-end/css/style.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('all-assets/front-end/css/responsive.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('all-assets/front-end/css/color.css') }}">


    @stack('styles')

    @livewireStyles

</head>

<body>
   

    <div class="wrapper hp_4">

        @include('layouts.front-end.navbar')


        @yield('content')


        @include('layouts.front-end.footer')


    </div><!--wrapper end-->



    <!-- Javascript -->

    <script src="{{ asset('all-assets/front-end/js/jquery-3.3.1.min.js') }}"></script>
    <script src="{{ asset('all-assets/front-end/js/modernizr-3.6.0.min.js') }}"></script>
    <script src="{{ asset('all-assets/front-end/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('all-assets/front-end/js/lib/slick/slick.js') }}"></script>
    <script src="{{ asset('all-assets/front-end/js/scripts.js') }}"></script>

    

    {{-- Tostar + Sweetalert 2 --}}
    <script src="{{ asset('all-assets/common/sweet-alert-2/sw-alert.js') }}" type="text/javascript"></script>



    <script>
        //For active menu highlite
        $(function () {
            // this will get the full URL at the address bar
            var url = window.location.href;

            // passes on every "a" tag
            $(".navbar-nav a").each(function () {
                // checks if its the same on the address bar
                if (url == (this.href)) {
                    $(this).closest("li").addClass("active");
                    //for making parent of submenu active
                    //$(this).closest("li").parent().parent().addClass("active");
                    //$(this).closest("ul").show();
                }
            });
        });

    </script>

    <script>
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });

        //Livewire toast
        window.addEventListener('toastMsg', event => {
            //console.log(event);
            Toast.fire({
                icon: event.detail.icon,
                title: event.detail.messege
            });
        });

         {{-- Toast.fire({
                icon: 'success',
                title: 'Test Toast'
            }); --}}

    </script>





    @stack('scripts')


    @livewireScripts

</body>

</html>
