import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'; // Para tablas
import { MatButtonModule } from '@angular/material/button'; // Para botones
import { MatFormFieldModule } from '@angular/material/form-field'; // Para formularios
import { MatInputModule } from '@angular/material/input'; // Para inputs
import { MatIconModule } from '@angular/material/icon'; // Para íconos
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Para mat-spinner
import { ReactiveFormsModule } from '@angular/forms'; // Para formularios reactivos

import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemCreateComponent } from './item/item-create/item-create.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemCreateComponent,
    ItemEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule, // Se añadió este módulo para mat-spinner
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
