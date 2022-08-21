// src/app/shared/shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule], // ? changed
})
export class SharedModule {}
