import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileProductDiscordComponent } from './mobile-product-discord.component';

describe('MobileProductDiscordComponent', () => {
  let component: MobileProductDiscordComponent;
  let fixture: ComponentFixture<MobileProductDiscordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileProductDiscordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileProductDiscordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
