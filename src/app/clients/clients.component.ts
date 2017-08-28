import { Component, OnInit, ViewChild } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { ClientService } from "../client/client.service";
import { Client } from "../data-models";
import { FilterTextComponent } from "../shared/filter-text/filter-text.component";
import { FilterTextService } from "../shared/filter-text/filter-text.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  @ViewChild(FilterTextComponent) filterComponent: FilterTextComponent;
  currentPage = 1;
  pageCount = 0;

  filteredClients: Client[];
  pageDb = 0;
  limitDb = 100;

  filterQuery = {
    textToSearch: "",
    page: this.pageDb,
    limit: this.limitDb
  }

  constructor(public dialog: MdDialog,
    private clientService: ClientService,
    private filterTextService: FilterTextService) {
    this.getFilterList(this.filterQuery);
  }

  ngOnInit() { }

  isResidencialCategory(category) {
    return category === "Residencial";
  }

  enableBeforePage(): Boolean {
    return (this.currentPage <= this.pageCount && this.currentPage - 1 == 0);
  }

  enableNextPage(): Boolean {
    return (this.currentPage === this.pageCount);
  }

  /**
   * Gets the text keyboard event.
   * 
   * @param searchText The current text field.
   */
  private filterChanged(searchText: string) {
    console.log(searchText);
    this.currentPage = 1;
    this.filterQuery.page = 0;
    this.filterQuery.textToSearch = searchText;
    this.getFilterList(this.filterQuery);
  }

  /**
   * Adds a new client
   * 
   * @param client The client to be added.
   */
  addClient(client: Client): void {
    this.clientService.addClient(client).subscribe(length => {
      console.log("Length " + length);
    },
      error => {
        console.log('error occurred here');
        console.log(error);
      },
      () => {
        console.log('vehicle retrieval completed');
      });
  }

  /**
   * Gets the filter list based in a criteria.
   * 
   * @param filterQuery The criteria to get the filter list.
   */
  getFilterList(filterQuery): void {
    this.clientService.getFilterList(filterQuery).subscribe(filterList => {
      this.filteredClients = filterList['filterList'];
      let size = filterList['sizeList'];
      if (size < filterQuery.limit) {
        this.pageCount = 1;
      } else {
        this.pageCount = Math.ceil(size / filterQuery.limit);
      }
    },
      error => {
        console.log('error occurred to get filter clients');
        console.log(error);
      },
      () => {
        console.log('vehicle retrieval completed');
      });
  }

  /**
   * 
   */
  // openAddClientDialog() {
  //   this.dialog.open(AddClientComponentDialog);
  // }

  beforePage(): void {
    this.currentPage--;
    this.filterQuery.page = this.filterQuery.page -= this.filterQuery.limit;
    this.getFilterList(this.filterQuery);
  }

  nextPage(): void {
    this.currentPage++;
    this.filterQuery.page = this.filterQuery.page += this.filterQuery.limit;
    this.getFilterList(this.filterQuery);
  }
}

@Component({
  selector: 'add-client-dialog',
  templateUrl: 'add-client-dialog.html',
})
export class AddClientComponentDialog { }
