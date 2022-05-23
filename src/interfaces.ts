// Represents single Cell
export interface Cell {
  alive: boolean
  rowNum: number
  columnNum: number
}
export type Row = Array<Cell>
// Represents natural Landscape (square)
export type Landscape = Array<Row>