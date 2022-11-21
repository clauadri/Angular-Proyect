import { RopasService } from 'src/app/services/ropas.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ropa-mujer-more',
  templateUrl: './ropa-mujer-more.component.html',
  styleUrls: ['./ropa-mujer-more.component.scss']
})
export class RopaMujerMoreComponent {
  id:any;
  ropaMujerMore: any;

  constructor(private mujerRoute:ActivatedRoute, private ropaMujer: RopasService) {

    this.mujerRoute.paramMap.subscribe((params) =>{
      this.id = params.get('id');
      this.ropaMujer.getRopaMujer(this.id).subscribe((data: any) =>{
        console.log(data);
        this.ropaMujerMore = {...data}
      })
    })
  }
}
