/* Keeping interfaces and types separate for tree shaking */

// Represents single Cell
export interface Cell {
  alive: boolean
  rowNum: number
  columnNum: number
}

// Represents single row
export type Row = Array<Cell>

// Represents natural Landscape (square)
export type Landscape = Array<Row>

export type CellSwitchMap = Array<
  Array<boolean>
>

// Configuration for Conway Landscape
export interface ConwayConfig {
  gridSize: number
  evolutionDuration: number
  aliveRatio: number
}
