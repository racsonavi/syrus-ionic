import { Component } from '@angular/core';
import { IonicPage, NavController,  AlertController, LoadingController, Loading } from 'ionic-angular';
//NavParams
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  
  
})
export class LoginPage {

  loading: Loading;
  /*constructor(public navCtrl: NavController, public navParams: NavParams) {
  }*/
  constructor(private nav: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK'],    
    });
    alert.present();
  }

  public login() {
    this.showLoading()
    /*this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {        */
        this.nav.setRoot(HomePage);
      /*} else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });*/

      this.showError("Acceso denegado");
  }

}
