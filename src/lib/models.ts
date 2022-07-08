export type Label = { title: string; data: string }
export type Labels = Label[]
export type Entry = { [key: string]: string }
export type Entries = Entry[]

export type Data = {
  labels: Labels
  entries: Entries
}

export type DataTableState = {
  labels: Labels
  entries: Entries
  totalPages: number
  filterResults: number
}
