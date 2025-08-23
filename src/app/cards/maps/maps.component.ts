import { MapCacheService } from '../../services/map-cache-service.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [],
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  mapUrl: SafeResourceUrl | null = null;

  constructor(private mapCacheService: MapCacheService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.mapCacheService.clearMapDetails(); // Add this method in your service
    this.loadMapUrl();
  }

  loadMapUrl(): void {
    const cachedUrl = this.mapCacheService.getMapDetails();

    if (cachedUrl) {
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(cachedUrl);
    } else {
      // The URL you want to cache and use
      const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54318.65006215298!2d76.47733117593351!3d31.690874363046557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d44c8c5639a5%3A0x2315ba2666cfba94!2sHamirpur%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1752595208659!5m2!1sen!2sin';

      this.mapCacheService.setMapDetails(url);
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }
}

