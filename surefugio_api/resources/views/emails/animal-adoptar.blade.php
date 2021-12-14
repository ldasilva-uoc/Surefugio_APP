@component('mail::message')
# ¡Quiero Adoptar!
{{-- Header --}}
@slot('header')
@component('mail::header', ['url' => ''])
{{ config('app.name') }}
@endcomponent
@endslot

{{-- Body --}}

El usuario <b>{{$particular->nombre}}</b> quiere adoptar a <b>{{$animal->nombre}}</b>. <p>Contacta con {{$particular->nombre}}:</p>
<ul>
    <li>Email: {{$userParticular->email}}</li>
    <li>Telefono: {{$particular->telefono}}</li>
</ul>
<br>
Muchas gracias!,<br>
{{ config('app.name') }}
@endcomponent