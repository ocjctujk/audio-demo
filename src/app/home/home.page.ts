import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  timer = 0;
  url1 = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
  url2 = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';
  url3 = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3';
  audio = new Audio();

  constructor() {}

  ngOnInit(): void {
    // this.onPlay();
    // alert("This app plays automatic sound");
  }

  onPlay() {

    //Here Setting an silent audio src so that our audio can be played after some time.
    // IOS is not allowing to play audios in interval.
    this.audio.src =
      'data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
    const myInterval = setInterval(() => {
      this.timer++; //Increament of timer
      console.log(this.timer);
      if (this.timer == 5) {
        this.playAudio(this.url1); // URL of first audio
        console.log('Playing Now');
      }
      if (this.timer == 10) {
        this.playAudio(this.url2); // Url of second audio
        console.log('Playing Now');
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
    this.audio.autoplay = true;
    this.audio.src = audioUrl;
  }
}
