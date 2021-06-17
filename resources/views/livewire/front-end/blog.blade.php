<div>
    <section class="pager-sec bfr">
        <div class="container">
            <div class="pager-sec-details">
                <h3>Blog Grid</h3>
                <ul>
                    <li><a href="{{ route('index') }}" title="">Home</a></li>
                    <li><span>Blog Grid</span></li>
                </ul>
            </div>
            <!--pager-sec-details end-->
        </div>
    </section>

    <section class="blog-grid section-padding">
        <div class="container">

            <div class="blog-grid-posts">
                <div class="row mb-2">
                    <div class="col">
                        <span wire:loading wire:target="search" class="text-success">Searching... <i
                                class="fas fa-spinner fa-spin"></i></span>
                    </div>

                    <div class="col">
                        <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fab fa-searchengin"></i></span>
                                </div>
                             <input wire:model.debounce.300ms="search" class="form-control form-control-sm" type="text"
                            placeholder="Search here ...">
                        </div>
                    </div>
                </div>
                <div class="row">

                    @forelse ($allData as $item)
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div class="blog-single-post">
                            <div class="blog-img">
                                @if($item->image)
                                <a href="{{ route('blog.details', $item->slug) }}" title="Details">
                                    {{-- 370x295 --}}
                                    <img src="{{ $assetUrl.$item->image }}" alt="Image">
                                </a>
                                @endif
                                <div class="view-post">
                                    <a href="{{ route('blog.details', $item->slug) }}" title="" class="view-posts">View Post</a>
                                </div>
                            </div>
                            <!--blog-img end-->
                            <div class="post_info">
                                <ul class="post-nfo">
                                    <li><i class="la la-calendar"></i>{{ date("F d, Y", strtotime($item->date)) }}</li>
                                </ul>
                                <h3><a href="{{ route('blog.details', $item->slug) }}" title="Details">{{ $item->title }}</a></h3>
                                <p>
                                    {!! \Illuminate\Support\Str::limit($item->details, 200, $end='...') !!}
                                </p><hr>
                                <a href="{{ route('blog.details', $item->slug) }}" title="">Read More<i class="la la-long-arrow-right"></i></a>
                            </div>
                            <a href="{{ route('blog.details', $item->slug) }}" title="" class="ext-link"></a>
                        </div>
                        <!--blog-single-post end-->
                    </div>

                    @empty
                    <h1 class="text-danger">Sorry !! Data Not Available</h1>
                    @endforelse

                </div>
                <div class="row">

                    <p class="small">Showing {{ $allData->firstItem()}} to {{ $allData->lastItem()}} out of
                        {{ $allData->total() }} items</p>
                    <div class="pagination justify-content-center mt-0 pt-0">
                        {{ $allData->links() }}

                    </div>
                    <!--load-more-posts end-->
                </div>
            </div>
            <!--blog-grid-posts end-->
        </div>
    </section>
    <!--blog-single-sec end-->
</div>


@push('styles')


@endpush

@push('scripts')


@endpush
