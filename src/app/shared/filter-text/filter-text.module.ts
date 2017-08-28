import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule} from "@angular/material";


import { FilterTextComponent } from './filter-text.component';
import { FilterTextService } from './filter-text.service';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [FilterTextComponent],
  declarations: [FilterTextComponent],
  providers: [FilterTextService]
})

export class FilterTextModule { }
