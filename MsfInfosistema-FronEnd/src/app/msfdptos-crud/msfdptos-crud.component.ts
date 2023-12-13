// src/app/msfdptos-crud/msfdptos-crud.component.ts
import { Component } from '@angular/core';

interface Msfdptos {
  id: number;
  Dptoid: string;
  Descripcion: string;
  Idcia: string;
  ctamayor_inventario: string;
  ctamayor_venta: string;
  ctamayor_costo: string;
  ctamayor_dev_costo: string;
  ctamayor_dev_venta: string;
  ctamayor_comision: string;
  porcprc0: number | null;
  porcprc1: number | null;
  porcprc2: number | null;
  porcprc3: number | null;
  porcprc4: number | null;
  porcprc5: number | null;
  secuencia: number | null;
}

@Component({
  selector: 'app-msfdptos-crud',
  templateUrl: './msfdptos-crud.component.html',
  styleUrls: ['./msfdptos-crud.component.css'],
})
export class MsfdptosCrudComponent {
  data: Msfdptos[] = [];
  newItem: Msfdptos = {
    id: 0,
    Dptoid: '',
    Descripcion: '',
    Idcia: '',
    ctamayor_inventario: '',
    ctamayor_venta: '',
    ctamayor_costo: '',
    ctamayor_dev_costo: '',
    ctamayor_dev_venta: '',
    ctamayor_comision: '',
    porcprc0: null,
    porcprc1: null,
    porcprc2: null,
    porcprc3: null,
    porcprc4: null,
    porcprc5: null,
    secuencia: null,
  };

  showDataOnly: boolean = false;
  editingItemIndex: number | null = null;

  get isEditing(): boolean {
    return this.editingItemIndex !== null && this.editingItemIndex >= 0;
  }

  addItem() {
    this.data.push({ ...this.newItem, id: this.data.length + 1 });
    this.resetForm();
  }

  updateItem() {
    const index = this.editingItemIndex;
    if (index !== null && index >= 0 && index < this.data.length) {
      this.data[index] = { ...this.newItem };
      this.resetForm();
    }
  }

  resetForm() {
    this.newItem = {
      id: 0,
      Dptoid: '',
      Descripcion: '',
      Idcia: '',
      ctamayor_inventario: '',
      ctamayor_venta: '',
      ctamayor_costo: '',
      ctamayor_dev_costo: '',
      ctamayor_dev_venta: '',
      ctamayor_comision: '',
      porcprc0: null,
      porcprc1: null,
      porcprc2: null,
      porcprc3: null,
      porcprc4: null,
      porcprc5: null,
      secuencia: null,
    };
    this.editingItemIndex = null;
  }

  editItem(index: number) {
    this.editingItemIndex = index;
    this.showDataOnly = false;
    this.newItem = { ...this.data[index] };
  }

  deleteItem(index: number) {
    this.data.splice(index, 1);
    this.resetForm();
  }

  toggleView() {
    this.showDataOnly = !this.showDataOnly;
    if (this.showDataOnly) {
      this.resetForm();
    }
  }
}