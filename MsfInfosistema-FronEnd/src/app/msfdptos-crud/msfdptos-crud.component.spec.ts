import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsfdptosCrudComponent } from './msfdptos-crud.component';

describe('MsfdptosCrudComponent', () => {
  let component: MsfdptosCrudComponent;
  let fixture: ComponentFixture<MsfdptosCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MsfdptosCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsfdptosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
