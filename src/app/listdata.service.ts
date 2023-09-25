import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListdataService {

  constructor() { }

  data: any = [
    {
      'id': 1,
      'title': 'Title 1',
      'url': 'assets/images/sample.png',
      'description': 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length.',
      'price': 100,
      'rating': '5',
      'location': 'Mumbai',
      'stock': 'instock',
      'delete': true,
    },
    {
      'id': 2,
      'title': 'Title 2',
      'url': 'assets/images/sample2.jpeg',
      'description': 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length.',
      'price': 100,
      'rating': '5',
      'location': 'Delhi',
      'stock': 'outofstock',
      'delete': false,
    },
    {
      'id': 3,
      'title': 'Title 3',
      'url': 'assets/images/sample3.jpeg',
      'description': 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length.',
      'price': 100,
      'rating': '5',
      'location': 'Punjab',
      'stock': 'outofstock',
      'delete': false,
    },
    {
      'id': 4,
      'title': 'Title 4',
      'url': 'assets/images/sample4.jpeg',
      'description': 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length.',
      'price': 500,
      'rating': '4',
      'location': 'Goa',
      'stock': 'instock',
      'delete': false,
    },
    {
      'id': 5,
      'title': 'Title 5',
      'url': 'assets/images/sample5.jpeg',
      'description': 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length.',
      'price': 500,
      'rating': '4',
      'location': 'Kerala',
      'stock': 'instock',
      'delete': false,
    },
    {
      'id': 6,
      'title': 'Title 6',
      'url': 'assets/images/sample6.jpeg',
      'description': 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length.',
      'price': 500,
      'rating': '4',
      'location': 'Karnataka',
      'stock': 'outofstock',
      'delete': false,
    },
  ]

  dataForTrash: any[] = [
    {
      'id': 1,
      'title': 'Trash',
      'url': 'assets/images/sample2.jpeg',
      'description': 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length.',
      'price': 100,
      'rating': '5',
      'location': 'Mumbai',
      'stock': 'instock',
      'delete': true,
    },
  ]

}
