import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DBPediaSearchComponent } from './dbpedia-search.component';

describe('DBPediaSearchComponent', () => {
  let component: DBPediaSearchComponent;
  let fixture: ComponentFixture<DBPediaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DBPediaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DBPediaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
