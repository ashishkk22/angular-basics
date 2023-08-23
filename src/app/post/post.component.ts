import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  @Input('img') postImg = ''; //here we are setting the alias as img but we should not add remembering many names leads to confution
  @Output() imgSelected = new EventEmitter<string>();
  constructor() {
    console.log('hii constructor called');
  }
  ngOnInit() {
    console.log('ngonInit function called');
  }
  ngOnChanges() {
    console.log('ngOnChanges() called');
  }
  ngDoCheck() {
    console.log('ngDoCheck called');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked ');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit ');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked ');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit ');
  }

  ngOnDestroy() {
    console.log('ngDetroy called');
  }
}
