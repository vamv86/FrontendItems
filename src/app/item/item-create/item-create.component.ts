// item-create.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../../../services/item.service';
import { ItemCreateDto } from '../../../model/item';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent {
  itemForm: FormGroup;

  constructor(private fb: FormBuilder, private itemService: ItemService, private router: Router) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.itemForm.valid) {
      const newItem: ItemCreateDto = this.itemForm.value;
      this.itemService.createItem(newItem).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          console.error('Error al crear el item', error);
        }
      );
    }
  }
}
