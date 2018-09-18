import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScorePage } from '../score/score';
import { Task} from '../../app/Task';

import signUpArr from '../../app/Array';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  home:string;
  away:string;

  
  constructor(public navCtrl: NavController) {

  }
goScore(){

  this.navCtrl.push(ScorePage);
  let a = new Task(this.home, this.away);
  signUpArr.push(a) ;
  console.log(signUpArr);
}

}
