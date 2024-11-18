// item-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../../../services/item.service';
import { ItemUpdateDto } from '../../../model/item';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  itemForm: FormGroup;
  itemId!: number;

  constructor(
    private fb: FormBuilder,
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.itemId = +this.route.snapshot.paramMap.get('id')!;
    this.itemService.getItemById(this.itemId).subscribe(
      (item) => {
        this.itemForm.patchValue(item);
      },
      (error) => {
        console.error('Error al obtener el item', error);
      }
    );
  }

  onSubmit() {
    if (this.itemForm.valid) {
      const updatedItem: ItemUpdateDto = { ...this.itemForm.value, itemId: this.itemId };
      this.itemService.updateItem(updatedItem).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          console.error('Error al actualizar el item', error);
        }
      );
    }
  }
}
