import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from 'src/app/services/data.service';
import { SharedService } from 'src/app/services/shared.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'id',
    'maidenName',
    'email',
    'department',
    'title',
    'university',
    'birthDate',
    'image',
  ];

  constructor(
    private dataService: DataService,
    private shared: SharedService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.shared.logoutButtonFlag.next(true);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getUsers() {
    this.dataService.getUserData().subscribe((data: any) => {
      // const result = Object.entries(data);
      // const modifiedResult: any[] = [];
      // result.forEach((elm: any) => {
      //   elm[1].username = elm[0];
      //   modifiedResult.push(elm[1]);
      // });
      //this.dataSource = new MatTableDataSource<any>(modifiedResult)
      this.dataSource.data = data.users;
    });
  }
}
