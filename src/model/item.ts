// Modelo para ItemDto
export interface ItemDto {
  itemId: number;    // ID del Item
  name: string;      // Nombre del Item
  // Otros campos que existan en tu DTO en el backend
}

// Modelo para ItemCreateDto
export interface ItemCreateDto {
  name: string;      // Nombre del Item
  // Otros campos que deban ser proporcionados al crear un Item
}

// Modelo para ItemUpdateDto
export interface ItemUpdateDto {
  itemId: number;    // ID del Item a actualizar
  name: string;      // Nombre actualizado del Item
  // Otros campos que se pueden actualizar
}
