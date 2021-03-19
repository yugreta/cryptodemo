import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chinese',
  templateUrl: './chinese.component.html',
  styleUrls: ['./chinese.component.scss']
})
export class ChineseComponent implements OnInit {
  original: string = '';
  translated: string = '';

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    document.getElementById('characters')!.focus();
  }

  chineseRotCipher(ed: string) {
    // http://www.unicode.org/charts/PDF/U4E00.pdf
    // https://jrgraphix.net/r/Unicode/4E00-9FFF
    // 4e00 - 9fff
    // 19968 - 40959
    // range = 20991
    const max = 40959
    const min = 19968
    const range = max - min + 1

    // get chinese
    const chineseText = (<HTMLInputElement>document.getElementById('characters')).value;
    let rotation = (<HTMLInputElement>document.getElementById('rotNumber')).valueAsNumber % range;
    if (ed == 'd') {
      rotation = range - rotation;
    }
    this.original = chineseText;
    console.log('input', chineseText);

    // translate to unicode
    let unicodeChineseText = [];
    for (let i = 0; i < chineseText.length; i++) {
      unicodeChineseText.push(chineseText.charCodeAt(i));
    }
    console.log('unicode', unicodeChineseText);
    
    // rotate unicode
    for (let i = 0; i < unicodeChineseText.length; i++) {
      unicodeChineseText[i] = unicodeChineseText[i] - min;
      unicodeChineseText[i] = (unicodeChineseText[i] + rotation) % range 
      unicodeChineseText[i] = unicodeChineseText[i] + min 
    }
    console.log('rotated', unicodeChineseText)

    // translate back to chinese
    var chineseCipher = ''
    for (let i = 0; i < unicodeChineseText.length; i++) {
      chineseCipher += String.fromCharCode(unicodeChineseText[i]);
    }
    this.translated = chineseCipher;
    console.log('cipher', chineseCipher)
  }

}
