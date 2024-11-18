
// item-list.component.ts
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

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.itemService.getAllItems().subscribe(
      (data: ItemDto[]) => {
        this.items = data;
      },
      (error) => {
        console.error('Error al obtener los items', error);
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
}
