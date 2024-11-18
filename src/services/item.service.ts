import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemDto, ItemCreateDto, ItemUpdateDto } from '../model/item'; // Asegúrate de tener los modelos correspondientes

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl: string = 'https://itemsbackend.onrender.com/api/Item'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener un Item por su identificador
  getItemById(ItemId: number): Observable<ItemDto> {
    return this.http.get<ItemDto>(`${this.baseUrl}/${ItemId}`);
  }

  // Obtener todos los Items
  getAllItems(): Observable<ItemDto[]> {
    return this.http.get<ItemDto[]>(this.baseUrl);
  }

  // Crear un nuevo Item
  createItem(itemDto: ItemCreateDto): Observable<ItemDto> {
    return this.http.post<ItemDto>(this.baseUrl, itemDto);
  }

  // Actualizar un Item existente
  updateItem(itemDto: ItemUpdateDto): Observable<ItemDto> {
    return this.http.put<ItemDto>(`${this.baseUrl}`, itemDto);
  }

  // Eliminar un Item existente
  deleteItem(ItemId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${ItemId}`);
  }
}
