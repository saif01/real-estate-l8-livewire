@extends('layouts.front-end.master')
@section('title', 'Property Details')

@section("content")

    @livewire('front-end.property-details', ['slug' => $slug])

@endsection
