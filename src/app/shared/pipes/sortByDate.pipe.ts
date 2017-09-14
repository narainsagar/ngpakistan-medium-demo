import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  // ref: https://gist.github.com/onpubcom/1772996#file-onpubcom_array_date_sort-js-L15
  private sortAsc(item1, item2) {
    // This is a comparison function that will result in dates being sorted in
    // ASCENDING order. As you can see, JavaScript's native comparison operators
    // can be used to compare dates. This was news to me.
    const date1 = new Date(item1.pubDate);
    const date2 = new Date(item2.pubDate);
    if (date1 > date2) { return 1; }
    if (date1 < date2) { return -1; }
    return 0;
  }

  // https://gist.github.com/onpubcom/1772996#file-onpubcom_array_date_sort-js-L24
  private sortDesc(item1, item2) {
    // This is a comparison function that will result in dates being sorted in
    // DESCENDING order.
    const date1 = new Date(item1.pubDate);
    const date2 = new Date(item2.pubDate);
    if (date1 > date2) { return -1; }
    if (date1 < date2) { return 1; }
    return 0;
  }

  transform(items: Object[], sortBy: string = 'asc') {
    const sortFn = (sortBy === 'asc') ? this.sortAsc : this.sortDesc;
    return items.sort(sortFn);
  }

}
