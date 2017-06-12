import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripleExtractorComponent } from './triple-extractor.component';

describe('TripleExtractorComponent', () => {
  let component: TripleExtractorComponent;
  let fixture: ComponentFixture<TripleExtractorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripleExtractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripleExtractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
