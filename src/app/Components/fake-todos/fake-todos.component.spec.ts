import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeTodosComponent } from './fake-todos.component';

describe('FakeTodosComponent', () => {
  let component: FakeTodosComponent;
  let fixture: ComponentFixture<FakeTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
