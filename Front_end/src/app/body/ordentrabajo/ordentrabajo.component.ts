import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ordentrabajo',
  templateUrl: './ordentrabajo.component.html',
  styleUrls: ['./ordentrabajo.component.scss']
})
export class OrdentrabajoComponent implements OnInit {

  table_header: any
  respuesta: any[]
  //OPTIONS
  respuestaTelas: any[]
  respuestaBotones: any[]
  respuestaHilos: any[]
  respuestaEtiquetas: any[]
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDataTable()
    this.getDataTelas()
    this.getDataBotones()
    this.getDataHilos()
    this.getDataEtiquetas()
    this.table_header = [
      {
        id: 'N°',
        tela: 'Tela',
        boton: 'Boton',
        hilo: 'Hilo',
        etiqueta: 'Etiqueta',
        empleado: 'Empleado'
      }
    ]
  }

  //TABLE
  getDataTable = () => {
    let tabla = 'productos'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}`)
        .subscribe(data => {
            this.respuesta = data.datos
        })
  }

  //OPTIONS
  getDataTelas = () => {
    let tabla = 'telas'
    let campo = 'nombre'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}&campo=${campo}`)
        .subscribe(data => {
            this.respuestaTelas = data.datos
        })
  }

  getDataBotones = () => {
    let tabla = 'botones'
    let campo = 'nombre'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}&campo=${campo}`)
        .subscribe(data => {
            this.respuestaBotones = data.datos
        })
  }

  getDataHilos = () => {
    let tabla = 'hilos'
    let campo = 'nombre'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}&campo=${campo}`)
        .subscribe(data => {
            this.respuestaHilos = data.datos
        })
  }

  getDataEtiquetas= () => {
    let tabla = 'etiquetas'
    let campo = 'nombre'
    this.http.get<any>(environment.API_URL + `?tabla=${tabla}&campo=${campo}`)
        .subscribe(data => {
            this.respuestaEtiquetas = data.datos
        })
  }

}