import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { ProductService } from '../service/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: 'product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class ProductItemComponent implements OnInit {

  products$: Observable<any>;

  constructor(private service: ProductService) {
  }

  ngOnInit() {

    this.products$ = this.service.getProduct();
  }


}
