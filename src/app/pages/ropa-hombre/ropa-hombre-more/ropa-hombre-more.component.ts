import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RopasService } from 'src/app/services/ropas.service';

@Component({
  selector: 'app-ropa-hombre-more',
  templateUrl: './ropa-hombre-more.component.html',
  styleUrls: ['./ropa-hombre-more.component.scss']
})
export class RopaHombreMoreComponent {


  id:any;
  ropaHombreMore: any;

  constructor(private hombreRoute:ActivatedRoute, private ropaHombre: RopasService) {

    this.hombreRoute.paramMap.subscribe((params) =>{
      this.id = params.get('id');
      this.ropaHombre.getRopaHombre(this.id).subscribe((data: any) =>{
        console.log(data);
        this.ropaHombreMore = {...data}
      })
    })
  }


}
