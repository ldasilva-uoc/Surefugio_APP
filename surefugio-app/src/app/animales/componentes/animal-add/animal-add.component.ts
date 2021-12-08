import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Animal } from 'src/app/shared/models/animal.model';
import * as AnimalAction from '../../actions';

@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.css']
})
export class AnimalAddComponent implements OnInit {


  public nombre: FormControl;
  public especie: FormControl;
  public imagen: FormControl;
  public edad: FormControl;
  public descripcion: FormControl;
  public sexo: FormControl;
  public tamano: FormControl;
  public pais: FormControl;
  public ciudad: FormControl;
  public provincia: FormControl;
  public adopcion: FormControl;
  public acogida: FormControl;
  public urgente: FormControl;
  public vacunado: FormControl;
  public desparasitado: FormControl;
  public esterilizado: FormControl;
  public microchip: FormControl;
  public tasa_adopcion: FormControl;
  public tasa: FormControl;
  public envio: FormControl;

  public animalForm: FormGroup;

  public bSubmitted: boolean;

  
  public haveTasa: Boolean;

  constructor( private store:Store<AppState>, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.bSubmitted = false;
    this.nombre = new FormControl('', [Validators.required]);
    this.especie = new FormControl('', [Validators.required]);
    this.imagen = new FormControl('');
    this.edad = new FormControl('');
    this.descripcion = new FormControl('');
    this.sexo  = new FormControl('', [Validators.required]);
    this.tamano  = new FormControl('', [Validators.required]);
    this.pais = new FormControl('', [Validators.required]);
    this.ciudad = new FormControl('', [Validators.required]);
    this.provincia = new FormControl('', [Validators.required]);
    this.adopcion = new FormControl(false);
    this.acogida = new FormControl(false);
    this.urgente = new FormControl(false);
    this.vacunado = new FormControl(false);
    this.desparasitado = new FormControl(false);
    this.esterilizado = new FormControl(false);
    this.microchip = new FormControl(false);
    this.tasa_adopcion = new FormControl('', [Validators.required]);
    this.tasa = new FormControl('');
    this.envio = new FormControl(false);
    this.animalForm = this.formBuilder.group({
       nombre: this.nombre,
       especie: this.especie,
       imagen: this.imagen,
       edad: this.edad,
       descripcion: this.descripcion,
       sexo: this.sexo,
       pais: this.pais,
       ciudad: this.ciudad,
       provincia: this.provincia,
       adopcion: this.adopcion,
       acogida: this.acogida,
       urgente: this.urgente,
       vacunado: this.vacunado,
       desparasitado: this.desparasitado,
       esterilizado: this.esterilizado,
       microchip: this.microchip,
       tasa_adopcion: this.tasa_adopcion,
       tasa: this.tasa,
       envio: this.envio,
       tamano: this.tamano
    });
  }

  fieldsChange(target:any):void {
    if(target === "tasa")
    {
      this.haveTasa = true
    }
    else{
      this.haveTasa = false
    }


  }


  public addAnimal(){
    this.bSubmitted = true;
    const animal: Animal = {
      nombre: this.nombre.value,
      especie: this.especie.value,
      //imagen: this.imagen.value,
      edad: this.edad.value,
      descripcion: this.descripcion.value,
      sexo: this.sexo.value,
      pais: this.pais.value,
      ciudad: this.ciudad.value,
      provincia: this.provincia.value,
      adopcion: this.adopcion.value,
      acogida: this.acogida.value,
      urgente: this.urgente.value,
      vacunado: this.vacunado.value,
      desparasitado: this.desparasitado.value,
      esterilizado: this.esterilizado.value,
      microchip: this.microchip.value,
      tasa_adopcion: this.tasa_adopcion.value,
      tasa: this.tasa.value,
      envio: this.envio.value,
      tamaño: this.tamano.value,
    }

    console.log(animal);

    this.store.dispatch(AnimalAction.addAnimal({animal}));

}
}
