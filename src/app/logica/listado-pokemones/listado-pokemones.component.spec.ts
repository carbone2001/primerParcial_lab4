import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPokemonesComponent } from './listado-pokemones.component';

describe('ListadoPokemonesComponent', () => {
  let component: ListadoPokemonesComponent;
  let fixture: ComponentFixture<ListadoPokemonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPokemonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPokemonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
