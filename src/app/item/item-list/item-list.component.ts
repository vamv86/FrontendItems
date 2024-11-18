import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { ItemDto } from '../../../model/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: ItemDto[] = [];
  filteredItems: ItemDto[] = [];
  isLoading = true; // Estado de carga inicial

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.isLoading = true; // Mostrar el spinner al iniciar la carga
    this.itemService.getAllItems().subscribe(
      (data: ItemDto[]) => {
        this.items = data;
        this.filteredItems = data; // Inicializar filteredItems con todos los elementos
        this.isLoading = false; // Ocultar el spinner al finalizar
      },
      (error) => {
        console.error('Error al obtener los items', error);
        this.isLoading = false; // Ocultar el spinner en caso de error
      }
    );
  }

  deleteItem(itemId: number) {
    this.itemService.deleteItem(itemId).subscribe(
      () => {
        this.loadItems(); // Recargar la lista tras eliminar
      },
      (error) => {
        console.error('Error al eliminar el item', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(filterValue)
    );
  }
}
