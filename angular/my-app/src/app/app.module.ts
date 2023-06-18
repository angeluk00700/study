import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  // 이 모듈에서 사용할 수 있는 컴포넌트를 정의해서 컴파일 시킨다.
  declarations: [
    AppComponent,
    HeroFormComponent
  ],
  providers: [],
  // 루트 컴포넌트. 루트 컴포넌트는 어플을 시작, 초기화면의 렌더링을 한다.
  bootstrap: [ AppComponent ]
})
export class AppModule { }
