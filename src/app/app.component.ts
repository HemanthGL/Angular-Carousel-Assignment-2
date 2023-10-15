import { Component } from '@angular/core';
import { placements } from '@popperjs/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Assign-2-Cards-Carousel';
  imageURLs = [
    'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ]
  curPtr = 0
  onLeft(){
    this.curPtr = (this.curPtr + 3) % 4
    console.log(this.curPtr);
  }
  onHoverLeft(event: MouseEvent){
    let eleID = (event.target as HTMLElement).id;

    let hoverLeftIcon = `
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg>
      </span>

    `
    
    document.getElementById(eleID)!.innerHTML = hoverLeftIcon;

  }
  onExitLeft(event: MouseEvent){
    // console.log(event)
    let eleID = (event.target as HTMLElement).id;

    let exitLeftIcon = `
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
      </span>

    `
    
    document.getElementById(eleID)!.innerHTML = exitLeftIcon;
  }
  onHoverRight(event: MouseEvent){

    let eleID = (event.target as HTMLElement).id;

    let hoverRightIcon = `
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
      </span>

    `
    
    document.getElementById(eleID)!.innerHTML = hoverRightIcon;
  }
  onRight(){
    this.curPtr = (this.curPtr + 1) % 4
    console.log(this.curPtr)
    console.log('right')
  }
  onExitRight(event: MouseEvent){
    let eleID = (event.target as HTMLElement).id;

    let hoverRightIcon = `
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
      </span>

    `
    
    document.getElementById(eleID)!.innerHTML = hoverRightIcon;
  }
  arr = [
    1,
    2, 
    3, 
    4
  ]
  updateFromButton(num: number){
    this.curPtr = (num + 3) % 4
    console.log(num)
  }
  
}
