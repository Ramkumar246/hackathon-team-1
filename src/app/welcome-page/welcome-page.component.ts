// import { Component, OnInit } from '@angular/core';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  [x: string]: any;
  user = {
    email: '',
  };
  selectedLanguage: string = ''; // 
  @ViewChild('elementToHide', { static: true }) elementToHide: ElementRef | undefined;
  constructor(private renderer: Renderer2,private router:Router) {}

  ngOnInit(): void {
  }
  onSubmit() {
    // Add your form submission logic here
    console.log('Form submitted:', this.user);

    localStorage.setItem('email', JSON.stringify(this.user))
    this.router.navigate(['/quetions']);
  }
  nextone(){
    // this.renderer.setStyle(this.elementToHide?.nativeElement, 'display', 'none');

    var myElement = document.getElementById("elementToHide") as HTMLElement;
    var emailid = document.getElementById("email-form") as HTMLElement;
    if (myElement) {  // Hide the element
    myElement.style.display = "none";}
  if (emailid) { // Hide the element
    emailid.classList.remove("d-none");}
    localStorage.setItem('language', JSON.stringify(this.selectedLanguage))
    
  }

}
