import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbpediaResultComponent } from './dbpedia-result.component';

describe('DbpediaResultComponent', () => {
  let component: DbpediaResultComponent;
  let fixture: ComponentFixture<DbpediaResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbpediaResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbpediaResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
