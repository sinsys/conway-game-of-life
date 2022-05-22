<script lang="ts">
  /* TODO
  [X] Generate programmatic grid (Landscape)
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
  // Represents natural Landscape (square)
  type Landscape = Array<Row>

  const cells = 50

/**
 * This generates a Landscape
 * @param cells - Number of cells in a Row or Column
 */
  const createLandscape = (cells: number): Landscape => {
    const row = Array(cells).fill(false)
    const landscape = Array(cells).fill(row)
    const appliedLandscape = landscape.map(row =>
      row.map(() => Math.random() > 0.85))
    // Return booleans of booleans of booleans!
    return appliedLandscape
  }

  const landscape = createLandscape(cells)
</script>

<!-- Root level element containing any rendering for Conway -->
<div id="wrapper">
  <h1>
    {#each landscape as row}
      <div class="row">
        {#each row as cell}
          <span class="cell
            {cell ? 'alive' : 'dead'}
          ">{cell ? 'O' : 'X' }</span>
        {/each}
      </div>
    {/each}
  </h1>
</div>

<style>
  h1 {
    display: block;
  }
  .cell {
    width: 1.5rem;
    height: 1.5rem;
    background: #CCC;
    display: inline-block;
    margin: -0.125rem 0.125rem;
    font-size: 1rem;
    line-height: 1rem;
    color: #FEFEFE;
  }
  .alive {
    background: #E0BBE4;
  }
  .dead {
    background: #FFDFD3;
  }
  .row {
    margin: 0;
    padding: 0;
  }
</style>