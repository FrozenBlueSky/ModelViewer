import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { UploadWindowComponent } from './upload-window.component';

describe('UploadWindowComponent', () => {
  let component: UploadWindowComponent;
  let fixture: ComponentFixture<UploadWindowComponent>;

  let httpClientStub: any;

  beforeEach(async () => {

    httpClientStub = {
      post: () => {
        subscribe: () => {}
      }
    };

    await TestBed.configureTestingModule({
      declarations: [ UploadWindowComponent ],
      providers: [{
        provide: HttpClient, useValue: httpClientStub
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
