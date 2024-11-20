import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  toggleSidebar(): void {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.classList.toggle("open");
    } else {
      console.error("Sidebar element not found");
    }
  }

  constructor(private http: HttpClient, private router: Router) {}
  searchType: string = 'book'; 
  searchQuery: string = ''; 
  // searchResults: any[] = [];
  apiUrl: string = 'http://localhost:8081/api/public/search-book';

  performSearch(): void {
    console.log(`Searching for "${this.searchQuery}" in ${this.searchType}`);
    
    this.router.navigate(['/book'], {
      queryParams: {
        query: this.searchQuery,
        type: this.searchType
      }
    });
  }
}