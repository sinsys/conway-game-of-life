import { writable } from 'svelte/store'
import type { Cell, Row, Landscape } from './interfaces'

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

export const landscape = writable(
  createLandscape(cells)
)

export const toggleCell = (cell: Cell): void => {
  landscape.update(ls => {
    const thisCell = ls[cell.rowNum][cell.columnNum]
    thisCell.alive = !thisCell.alive
    return ls
  })
}