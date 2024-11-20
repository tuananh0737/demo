import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const isLoggedIn: boolean = localStorage.getItem('token') !== null;

    if (isLoggedIn) {
        this.showBookList();
    } else {
        // Nếu chưa đăng nhập, hiển thị thông báo và chuyển hướng tới trang login
        const errorMessage = document.getElementById('error-message') as HTMLElement;
        errorMessage.textContent = 'Bạn phải đăng nhập để tiếp tục';
        setTimeout(() => {
            window.location.href = '/login'; // Chuyển hướng đến trang đăng nhập
        }, 2000); // Chờ 2 giây trước khi chuyển hướng
    }
  }

  // Hiển thị danh sách sách nếu người dùng đã đăng nhập
  showBookList(): void {
    const booksContainer = document.getElementById('book-list') as HTMLElement;
    const token: string | null = localStorage.getItem('token');

    if (!token) {
        alert('Token not found');
        return;
    }

    fetch('http://localhost:8081/api/user/find-bookmark-by-user', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response: Response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch bookmarks');
        }
        return response.json();
    })
    .then((data: { title: string }[]) => {
        booksContainer.innerHTML = ''; 

        if (data.length === 0) {
            booksContainer.innerHTML = '<p>No bookmarks found.</p>';
        } else {
            data.forEach((book: { title: string }) => {
                const bookItem = document.createElement('div');
                bookItem.className = 'book-item';
                bookItem.textContent = book.title; 
                booksContainer.appendChild(bookItem);
            });
        }
    })
    .catch((error: Error) => {
        console.error('Error:', error);
        alert('Failed to load bookmarks. Please try again later.');
    });
  }
}
