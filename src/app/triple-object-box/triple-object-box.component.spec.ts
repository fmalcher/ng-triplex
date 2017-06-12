import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripleObjectBoxComponent } from './triple-object-box.component';

describe('TripleObjectBoxComponent', () => {
  let component: TripleObjectBoxComponent;
  let fixture: ComponentFixture<TripleObjectBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripleObjectBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripleObjectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
