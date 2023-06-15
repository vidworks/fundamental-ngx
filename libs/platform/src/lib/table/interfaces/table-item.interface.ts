import { TableDataSource } from '../domain/table-data-source';
import { Observable } from 'rxjs';

export type FdpTableDataSource<T> = T[] | Observable<T[]> | TableDataSource<T>;

export type TableItem<T, C extends string = ''> = {[K in C]?: FdpTableDataSource<T>};
