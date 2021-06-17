@extends('layouts.front-end.master')
@section('title', 'Blog Details')

@section("content")

    @livewire('front-end.blog-details', ['slug' => $slug])

@endsection
