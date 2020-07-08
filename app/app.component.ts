import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  time: number = 0;
  minute: number = 0;
  second: number = 0;
  
interval;


start() {
  this.play = true;
  this.interval = setInterval(() => {
    this.time++;
  },1000)
}

stop() {
  this.play = false;
  clearInterval(this.interval);
}
reset(){
  this.play=false;
  clearInterval(this.interval);
  this.time=0;
}
  
}

            var timeElapsed = 0;
            var timerID = -1;
            var timeElapsed1=180;
            var timerID1 = -1;
            function tick() {
                timeElapsed++
                const sec = parseInt(timeElapsed, 10); // convert value to number if it's string
                let minutes = Math.floor(sec / 60); // get minutes
                let seconds = sec - (minutes * 60); //  get seconds
    // add 0 if value < 10
                if (minutes < 10) {minutes = "0"+minutes;}
                if (seconds < 10) {seconds = "0"+seconds;}
      
                document.getElementById("time").innerHTML = minutes+':'+seconds;
            }

            function start() {
                if(timerID == -1){
                    timerID = setInterval(tick, 1000);
                }
            }

            function stop() {
                if(timerID != -1){
                    clearInterval(timerID)
                    timerID = -1
                } 
                
            }

            function reset() {
                stop();
                timeElapsed = -1;
                tick();
            }
               function tick1() {
                timeElapsed1--
                const sec1 = parseInt(timeElapsed1, 10); // convert value to number if it's string
                let minutes1 = Math.floor(sec1 / 60); // get minutes
                let seconds1 = sec1 - (minutes1 * 60); //  get seconds
    // add 0 if value < 10
                if (minutes1 < 10) {minutes1 = "0"+minutes1;}
                if (seconds1 < 10) {seconds1 = "0"+seconds1;}
      
               
                if (document.getElementById("time1").innerHTML=='00:00') {document.getElementById("time1").innerHTML='Done';}
                if (document.getElementById("time1").innerHTML=='Done'){return;}
                document.getElementById("time1").innerHTML = minutes1+':'+seconds1; 
            }

            function start1() {
                if(timerID1 == -1){
                    timerID1 = setInterval(tick1, 1000);
                }
            }

            function stop1() {
                if(timerID1 != -1){
                    clearInterval(timerID1)
                    timerID1 = -1
                } 
                
            }

            function reset1() {
                stop1();
                if (document.getElementById("time1").innerHTML=='Done'){document.getElementById("time1").innerHTML='03:00';}
                timeElapsed1=181;
                tick1();
            }
          