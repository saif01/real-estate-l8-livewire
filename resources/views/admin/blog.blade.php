@extends('layouts.admin.master')
@section('title', 'Admin Blog')

@push('styles')

@endpush

@section("content")

    @livewire('admin.blog')

@endsection


@push('scripts')

@endpush