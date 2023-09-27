import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatTableModule, _MatTableDataSource } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { DataSource } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Movie } from 'src/app/Models/movie.model';
import {MatGridListModule} from '@angular/material/grid-list';
import { AuthGuard } from 'src/app/auth.guard';
import { AuthService } from 'src/app/Services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

export interface Tile
{
  cols: number;
  rows: number;
  image: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})

export class LandingComponent implements OnInit {

  formData: FormGroup;

  tiles: Tile[] = [
    {cols: 3, rows: 1, image: 'assets/images/film.jpg'},
    {cols: 1, rows: 1, image: 'assets/images/movie-theatre.jpg'},
    {cols: 2, rows: 1, image: 'assets/images/bg_popcorn.jpg'},
  ];

  showFiller = false;
  constructor(
    private router: Router) { }

  ngOnInit(): void
  {
  }

  isUserLoggedIn = false;
  // movies: Movie[];
  //dataSource = new MatTableDataSource<Food>();
  resultsLength = 0;
  //@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  //@ViewChild(MatSort, { static: true }) sort: MatSort;
}
