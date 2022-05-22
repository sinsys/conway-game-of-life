<script lang="ts">
  /* TODO
  [ ] Generate programmatic grid (Landscape)
  [ ] User input (setup initial Landscape)
  [ ] Toggle cell (boolean) on Landscape

  [ ] Canvas/DOM (Draw)
  [ ] Assert surrounding cells
  [ ] Assert grid and layout next step

  [ ] Begin/end sequence (pause/play)
  [ ] Step function (advance one calculation) ... Use generator
  */

  // Represents single Cell
  type Cell = boolean
  type Row = Array<Cell>
  // Represents remapped Column
  type Column = Array<Cell>
  // Represents natural Landscape (square)
  type LandScape = Array<Row>

/**
 * This generates a Landscape
 * @param cells - Number of cells in a Row or Column
 */
  const createLandscape = (cells: number): LandScape => {
    const row: Row = Array(cells)

    const landscape: LandScape = row.map(cell => row)
    console.log(landscape)
    return landscape
  }
</script>

<!-- Root level element containing any rendering for Conway -->
<div id="wrapper">

</div>

<style>

</style>