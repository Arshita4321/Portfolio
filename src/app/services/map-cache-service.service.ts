import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapCacheService {
  private cachedMapUrl: string | null = null;

  getMapDetails(): string | null {
    return this.cachedMapUrl;
  }

  setMapDetails(url: string): void {
    this.cachedMapUrl = url;
  }

  clearMapDetails(): void {
    this.cachedMapUrl = null;
  }
}
