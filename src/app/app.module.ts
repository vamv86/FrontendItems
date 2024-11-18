import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'; // Importa el módulo MatTable
import { MatButtonModule } from '@angular/material/button'; // Si usas botones
import { MatFormFieldModule } from '@angular/material/form-field'; // Si usas formularios
import { MatInputModule } from '@angular/material/input'; // Si usas inputs
import { MatIconModule } from '@angular/material/icon'; // Si usas iconos
import { ReactiveFormsModule } from '@angular/forms'; // Asegúrate de que este módulo está importado


import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemCreateComponent } from './item/item-create/item-create.component';

import { AppComponent } from './app.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';

@NgModule({
  declarations: [
    ItemListComponent,
    ItemCreateComponent,
    AppComponent,
    ItemEditComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule, // Asegúrate de que este módulo está importado
    MatButtonModule, // Asegúrate de que este módulo está importado si usas botones
    MatFormFieldModule, // Asegúrate de que este módulo está importado si usas formularios
    MatInputModule, // Asegúrate de que este módulo está importado si usas inputs
    MatIconModule, // Asegúrate de que este módulo está importado si usas iconos
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
