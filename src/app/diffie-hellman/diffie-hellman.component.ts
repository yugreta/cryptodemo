import { sanitizeIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

declare var chroma: any;

@Component({
  selector: 'app-diffie-hellman',
  templateUrl: './diffie-hellman.component.html',
  styleUrls: ['./diffie-hellman.component.scss']
})
export class DiffieHellmanComponent implements OnInit {
  step: number = 1;
  common: string = '';
  alicekey: string = '';
  bobkey: string;
  alicepublic: string = '';
  bobpublic: string = '';
  shared: string = '';

  constructor() {
    this.bobkey = chroma.random();
  }

  ngOnInit(): void {
  }

  setCommon() {
    let commonInput = <HTMLInputElement>document.getElementById('common');
    commonInput.disabled = true;
    this.common = commonInput.value;
    this.bobpublic = this.mix(this.common, this.bobkey);
    this.step += 1;
  }

  setAlice() {
    let alice = <HTMLInputElement>document.getElementById('private');
    alice.disabled = true;
    this.alicekey = alice.value;
    this.step += 1;
    setTimeout(() => {
      (<HTMLElement>document.getElementsByClassName('commonColor')[0]).style.backgroundColor = this.common;
      (<HTMLElement>document.getElementsByClassName('alicekey')[0]).style.backgroundColor = this.alicekey;
    }, 200);
  }

  makePublicKey() {
    this.step += 1;
    this.alicepublic = this.mix(this.common, this.alicekey);
    setTimeout(() => {
      let elements = document.getElementsByClassName('alicepublic');
      for (let i = 0; i < elements.length; i++) {
        (<HTMLElement>elements[i]).style.backgroundColor = this.alicepublic;
      }
    }, 200);
  }

  exchange() {
    this.step += 1;
    setTimeout(() => {this.step += 1;}, 1500);
    setTimeout(() => {
      let elements = document.getElementsByClassName('alicepublic');
      for (let i = 0; i < elements.length; i++) {
        (<HTMLElement>elements[i]).style.backgroundColor = this.alicepublic;
      }
      elements = document.getElementsByClassName('bobpublic');
      for (let i = 0; i < elements.length; i++) {
        (<HTMLElement>elements[i]).style.backgroundColor = this.bobpublic;
      }
      elements = document.getElementsByClassName('alicekey');
      for (let i = 0; i < elements.length; i++) {
        (<HTMLElement>elements[i]).style.backgroundColor = this.alicekey;
      }
    }, 1500);
  }

  makeShared() {
    this.shared = this.mix(this.alicekey, this.bobpublic);
    this.step +=1;
    setTimeout(() => {
    let elements = document.getElementsByClassName('shared');
    for (let i = 0; i < elements.length; i++) {
      (<HTMLElement>elements[i]).style.backgroundColor = this.shared;
    }
    }, 200);
  }

  seeBob() {
    this.step += 1;
    setTimeout(() => {
      let elements = document.getElementsByClassName('commonColor');
      for (let i = 0; i < elements.length; i++) {
        (<HTMLElement>elements[i]).style.backgroundColor = this.common;
      }
      elements = document.getElementsByClassName('bobkey');
      for (let i = 0; i < elements.length; i++) {
        (<HTMLElement>elements[i]).style.backgroundColor = this.bobkey;
      }
      elements = document.getElementsByClassName('alicepublic');
      for (let i = 0; i < elements.length; i++) {
        (<HTMLElement>elements[i]).style.backgroundColor = this.alicepublic;
      }
      elements = document.getElementsByClassName('bobpublic');
      for (let i = 0; i < elements.length; i++) {
        (<HTMLElement>elements[i]).style.backgroundColor = this.bobpublic;
      }
      elements = document.getElementsByClassName('shared');
      for (let i = 0; i < elements.length; i++) {
        (<HTMLElement>elements[i]).style.backgroundColor = this.shared;
      }
    }, 200);
  }
  
  reset() {
    let commonInput = <HTMLInputElement>document.getElementById('common');
    commonInput.disabled = false;
    let alice = <HTMLInputElement>document.getElementById('private');
    alice.disabled = false;
    this.step = 1;
  }

  mix(color1: string, color2: string) {
    return chroma.mix(color1, color2);
  }
}
