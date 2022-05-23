import { writable } from 'svelte/store'
import type { Cell, Row, Landscape, CellSwitchMap } from './interfaces'

export const cells = 10

/**
 * This generates a Landscape
 * @param cells - Number of cells in a Row or Column
 */
export const createLandscape = (cells: number): Landscape => {
  const row = Array(cells).fill(false)
  const landscape = Array(cells).fill(row)
  const randomizedLandscape: Landscape = landscape.map((row: Row, rowNum: number) =>
    row.map((_cell: Cell, columnNum: number) => ({
      alive: Math.random() > 0.85,
      columnNum: columnNum,
      rowNum: rowNum
    })
  ))

  return randomizedLandscape
}

/**
 * This initializes the store from the generated Landscape
 */
export const landscape = writable(
  createLandscape(cells)
)

/**
 * 
 * @param cell - This accepts a cell's value and flips it's alive state
 */
export const toggleCell = (cell: Cell): void => {
  landscape.update(ls => {
    const thisCell = ls[cell.rowNum][cell.columnNum]
    thisCell.alive = !thisCell.alive
    return ls
  })
}

/**
 * Business logic for asserting if specific cell should become alive or die
 * @param landscape - Entire landscape of cells
 * @param cell - Single cell
 * @returns - Boolean of if alive or not
 */
export const assertNextCellStep = (cell: Cell, landscape: Landscape): boolean => {
  const connectionMap = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ]

  // Iterate over potential connections and count the positives
  const aliveConnections: number = connectionMap.map(connection => {
    const [row, col] = connection
    return landscape?.
      [cell.rowNum + row]?.
      [cell.columnNum + col]?.alive ?? false
  }).filter(v => v).length

  // Business logic
  if (cell.alive) {
    // Any live cell with fewer than two live neighbours dies (referred to as underpopulation or exposure[1]).
    if (aliveConnections < 2) return false
    // Any live cell with more than three live neighbours dies (referred to as overpopulation or overcrowding).
    if (aliveConnections > 3) return false
    // Any live cell with two or three live neighbours lives, unchanged, to the next generation.
    if (aliveConnections >= 2 && aliveConnections <= 3) return true
  } else {
    // Any dead cell with exactly three live neighbours will come to life.
    if (aliveConnections === 3) return true
  }
  return false
}

export const setNextLandscapeStep = (): void => {
  landscape.update(ls =>
    ls.map((row: Row) =>
      row.map((cell: Cell) => ({
        ...cell,
        alive: assertNextCellStep(cell, ls)
      })
    )))
}