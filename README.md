# data-table-react

![DataTable preview.png](preview.png)

A react component that display data in a table with features.
Pagination, search, sorting.

## Prerequisites

- NodeJS [(version 12.18 or newer)](https://nodejs.org/en/)
- A code editor like [VSCode](https://code.visualstudio.com/)

## Installation

```
npm install @jpotin/data-table-react
```

Once installed, import the "DataTable" component

```
import DataTable from "@jpotin/data-table-react"
```

You can import the css

```
import "@jpotin/data-table-react/dist/style.css"
```

## Usage

The component takes a unique prop data

```
<DataTable prop={value} />
```

The value is an object, or a function that return an object in the shape of:

```
{
  labels: [
    { title: 'First Name', data: 'firstName' },
    { title: 'Last Name', data: 'lastName' },
  ],
  entries: [
  {
    firstName: 'Basia',
    lastName: 'Osborn',
  },
  {
    firstName: 'Galena',
    lastName: 'Frost',
  }]
  ,
  sortBy: 'firstName',
  sortDirection: 'asc',
  }
```

sortBy and sortDirection properties are optionals
sortDirection can be 'asc' or 'desc'

## Typescript

This package contains built-in TypeScript declarations.

sortDirection need to be set as 'asc' | 'desc'
