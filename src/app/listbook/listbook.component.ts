import { Component } from '@angular/core';

interface Book {
  name: string;
  author: string;
  genre: string;
  pages: number;
  year: number;
  details: string;
  quantity: number;
}

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css'],
})
export class ListbookComponent {
  books: Book[] = [
    {
      name: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
      pages: 281,
      year: 1960,
      details: 'A classic novel of racism and injustice in the American South.',
      quantity: 12,
    },
    {
      name: '1984',
      author: 'George Orwell',
      genre: 'Dystopian',
      pages: 328,
      year: 1949,
      details: 'A novel depicting a dystopian future under totalitarian rule.',
      quantity: 8,
    },
    {
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
      pages: 180,
      year: 1925,
      details: 'A story of the jazz age and the American dream.',
      quantity: 5,
    },
  ];

  // showDetails(details: string): void {
  //   alert(details);
  // }
  selectedBook: Book | null = null;

  showDetails(book: Book): void {
    this.selectedBook = book; 
  }

  closeForm(): void {
    this.selectedBook = null; 
  }

  borrow(): void {
    if (this.selectedBook) {
      if (this.selectedBook.quantity > 0) {
        this.selectedBook.quantity -= 1; 
      } else {
        alert('This book is out of stock!'); 
      }
    }
  }
}
  
  

