import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductoProvider } from '../../providers/producto/producto';
import { Producto } from '../../app/models/producto';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  productosTop: Producto[] = [];
  constructor(public navCtrl: NavController,
  private serviciosProductos:ProductoProvider) {

  }
  ionViewDidLoad(){
    this.serviciosProductos.obtenerProductos().subscribe(
      (datos:Producto[]) => {
        this.productosTop = datos.filter(p => p.bestSeller);
      }
    );
  }

}
