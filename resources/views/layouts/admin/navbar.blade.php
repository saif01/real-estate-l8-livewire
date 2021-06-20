 <nav class="pcoded-navbar navbar-image-5">
     <div class="navbar-wrapper">
         <div class="navbar-brand header-logo">
             <a href="{{ route('admin.index') }}" class="b-brand">
                 <img src="{{ asset('all-assets/common/logo/cpb/cpb.png') }}" class="navbar-brand rotate" alt="CPB-Logo"
                     height="40">
                 <span class="b-title">Admin</span>
             </a>
             <a class="mobile-menu" id="mobile-collapse" href="#!"><span></span></a>
         </div>
         <div class="navbar-content scroll-div">
             <ul class="nav pcoded-inner-navbar">
                 <li class="nav-item pcoded-menu-caption">
                     <label>Navigation</label>
                 </li>
                 <li class="nav-item">
                     <a href="{{ route('admin.index') }}" class="nav-link"><span class="pcoded-micon"><i
                                 class="feather icon-home"></i></span><span class="pcoded-mtext">Dashboard</span></a>
                 </li>

                 <li class="nav-item pcoded-hasmenu">
                     <a href="#!" class="nav-link"><span class="pcoded-micon"><i
                                 class="feather icon-menu"></i></span><span class="pcoded-mtext">Admin
                             Managment</span></a>
                     <ul class="pcoded-submenu">
                         @can('adminManage')
                         <li><a href="{{ route('admin.all') }}">Admins All</a></li>
                         @endcan

                         @can('roleManage')
                         <li><a href="{{ route('roles.all') }}">Roles All</a></li>
                         @endcan

                         <li><a href="{{ route('login.log') }}">Login Log</a></li>
                     </ul>
                 </li>


                 <li class="nav-item pcoded-hasmenu">
                     <a href="#!" class="nav-link"><span class="pcoded-micon"><i
                                 class="feather icon-menu"></i></span><span class="pcoded-mtext">Setting</span></a>
                     <ul class="pcoded-submenu">
                         <li><a href="{{ route('admin.contact') }}">Contact</a></li>
                     </ul>
                 </li>

                 
                 <li class="nav-item pcoded-menu-caption">
                     <label>All Pages</label>
                 </li>

                 <li class="nav-item"><a href="{{ route('admin.blog') }}" class="nav-link"><span
                             class="pcoded-micon"><i class="feather icon-log-out text-danger"></i></span>Blog</a></li>

                 <li class="nav-item"><a href="{{ route('admin.property') }}" class="nav-link"><span
                             class="pcoded-micon"><i class="feather icon-log-out text-danger"></i></span>Property</a></li>

                 <li class="nav-item pcoded-menu-caption">
                     <label>Admin Logout</label>
                 </li>
                 <li class="nav-item"><a href="{{ route('logout') }}" class="nav-link"><span
                             class="pcoded-micon"><i class="feather icon-log-out text-danger"></i></span>Logout</a></li>
             </ul>
         </div>
     </div>
 </nav>
