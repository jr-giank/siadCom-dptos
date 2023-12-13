import { Injectable } from '@angular/core';
import { msfdptos } from './msfdptos.model';

@Injectable({
  providedIn: 'root',
})
export class MsfdptosService {
  private data: msfdptos[] = [];

  getData(): msfdptos[] {
    return this.data;
  }

  addData(item: msfdptos): void {
    this.data.push(item);
  }

  updateData(index: number, newItem: msfdptos): void {
    this.data[index] = newItem;
  }

  deleteData(index: number): void {
    this.data.splice(index, 1);
  }
}