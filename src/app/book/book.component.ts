import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})


export class BookComponent implements OnInit {
  query: string = '';
  type: string = '';
  searchResults: any[] = [];
  apiUrl: string = 'http://localhost:8081/api/public/search-book';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Lấy tham số truy vấn từ URL
    this.route.queryParams.subscribe(params => {
      this.query = params['query'];
      this.type = params['type'];

      // Thực hiện tìm kiếm nếu có tham số truy vấn
      if (this.query && this.type) {
        this.performSearch();
      }
    });
  }

  performSearch(): void {
    const params = {
      query: this.query,
      type: this.type
    };

    this.http.get<any[]>(this.apiUrl, { params }).subscribe(
      (results) => {
        this.searchResults = results;
        console.log('Search results:', results);
      },
      (error) => {
        console.error('Error fetching search results:', error);
        alert('An error occurred while searching. Please try again later.');
      }
    );
  }
}
