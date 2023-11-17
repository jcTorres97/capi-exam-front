import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  
  data: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.llenarDatos();
  }

  llenarDatos(){
    this.apiService.getData().subscribe( data => {
      this.data = data;
      console.log(this.data);
    })
  }

}
