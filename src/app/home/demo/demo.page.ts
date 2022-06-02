import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {
  timer = 0;
  url1 = '../../../assets/sound/song1.mp3';
  url2 = '../../../assets/sound/song2.mp3';
  url3 = '../../../assets/sound/song3.mp3';
  @ViewChild('audioToPlay') audio: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.onPlay();
  }
  onPlay() {
    const myInterval = setInterval(() => {
      this.timer++; //Increament of timer
      console.log(this.timer);
      if (this.timer == 5) {
        this.playAudio(this.url1); // URL of first audio
      }
      if (this.timer == 10) {
        this.playAudio(this.url2); // Url of second audio
      }
      if (this.timer == 16) {
        this.playAudio(this.url3); // Url of third audio
        this.timer = 0;
        clearInterval(myInterval);
        return;
      }
    }, 1000);
  }
  private playAudio(audioUrl: string) {
    this.audio.nativeElement.src = audioUrl;
  }
}
