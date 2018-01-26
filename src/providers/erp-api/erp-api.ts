import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/forkjoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ErpApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ErpApiProvider {
  public resultados:any;
  baseUrl:string='https://recsolutions.tech/api/SeguridadApi';

  constructor(public http: HttpClient) {
    console.log('Hello ErpApiProvider Provider');
    //validaLogin()
  }



  validaLogin(username, password){

    //this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=2&sort=hot').map(res => res.json()).subscribe(data => {

      return Observable.create(observer => {  this.http.get(this.baseUrl+'/Login?username='+username+'&password='+password)
      //.map(res => res.json())
      .subscribe(data => {
        this.resultados = data;
        console.log('peticion enviada;respuesta: '+this.resultados);
        

        if(this.resultados){
          console.log('Correcto');
          observer.next(true);
          observer.complete();
        }      
        else{
          console.log('Incorrecto');
          observer.next(false);
          observer.complete();
        }
  
  
        observer.complete();
        //resolve(this.resultados);
        //reject('some fail stuff');    
      }, err => {
        console.log("Oops!");      
        console.log(Error.toString())
      })


    });





      /*
    return Observable.create(observer => {
      // At this point make a request to your backend to make a real check!
      //let access = (credentials.password === "pass" && credentials.email === "email");
      //this.currentUser = new User('Simon', 'saimon@devdactic.com');
      //observer.next(access);


      
      if(this.resultados){
        console.log('Correcto');
        observer.next(true);
        observer.complete();
      }      
      else{
        console.log('Incorrecto');
        observer.next(false);
        observer.complete();
      }


      observer.complete();
    });
 */
  //----------------------------------------------


  this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=2&sort=hot').map(res => res.json()).subscribe(data => {
    this.posts = data.data.children;
    console.log(this.posts);
});




    //https://recsolutions.tech/api/SeguridadApi/Login?username=eramirez&password=Eram1%
    //'/Login?';


    /*
    this.http.get(this.baseUrl+'/Login?username='+username+'&password='+password)
    //.map(res => res.json())
    .subscribe(data => {
      this.resultados = data;
      console.log('peticion enviada;respuesta: '+this.resultados);
      
      //resolve(this.resultados);
      //reject('some fail stuff');    
    }, err => {
      console.log("Oops!");      
      console.log(Error.toString())
    });*/
    
    /*************************** ok
    this.http.get(this.baseUrl+'/Login?username='+username+'&password='+password)
    //.map(res => res.json())
    .subscribe(data => {
      this.resultados = data;
      console.log('peticion enviada;respuesta: '+this.resultados);
      
      //resolve(this.resultados);
      //reject('some fail stuff');    
    }, err => {
      console.log("Oops!");      
      console.log(Error.toString())
    });
    */


  /*if (this.resultados ==  false) {
    return Observable.throw("Fail");
  } else {*/

    /*++++++++++++++++++++++++++ok
    return Observable.create(observer => {
      // At this point make a request to your backend to make a real check!
      //let access = (credentials.password === "pass" && credentials.email === "email");
      //this.currentUser = new User('Simon', 'saimon@devdactic.com');
      //observer.next(access);


      
      if(this.resultados){
        console.log('Correcto');
        observer.next(true);
        observer.complete();
      }      
      else{
        console.log('Incorrecto');
        observer.next(false);
        observer.complete();
      }


      observer.complete();
    });*/

  }
    /* ok - old
  return new Promise((reject, resolve) => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    this.http.get(this.baseUrl+'/Login?username='+username+'&password='+password)
      //.map(res => res.json())
      .subscribe(data => {
        this.resultados = data;
        console.log('Exito');
        resolve(this.resultados);
        reject('some fail stuff');    
      }, err => {
        console.log("Oops!");
        console.log(Error.toString())
      });
  });*/

/*
   return this.http.get(this.baseUrl+'/Login?username='+username+'&password='+password)
    //.map(res => res.json())
    .subscribe(
      data => {
          this.resultados = data;
          console.log('Exito');
      },
      err => {
          console.log("Oops!");
          console.log(Error.toString())
      });
*/
      

  }

/*
load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
  
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('https://randomuser.me/api/?results=10')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.results[0];
          resolve(this.data.results);        
        }, err => {
          console.log("Oops!");
          console.log(Error.toString())
        });
    });
  }*/


