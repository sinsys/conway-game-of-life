<script lang="ts">
  /* TODO
  [X] Generate programmatic grid (Landscape)
  [X] User input (setup initial Landscape)
  [X] Toggle cell (boolean) on Landscape

  [ ] Assert surrounding cells
  [ ] Assert grid and layout next step

  [ ] Begin/end sequence (pause/play)
  [ ] Step function (advance one calculation) ... Use generator
  [ ] Canvas/DOM (Draw) // Deprioritizing
  */
  import type { Landscape } from './interfaces'
  import { landscape } from './stores'
  import Cell from './Cell.svelte'
  let state: Landscape
  landscape.subscribe(value => state = value)
</script>

<!-- Root level element containing any rendering for Conway -->
<div id="wrapper">
  <div id="board">
    {#each state as row}
      <div class="row">
        {#each row as cell}
          <Cell cell={cell} />
        {/each}
      </div>
    {/each}
  </div>
  <div id="controls">
    <button disabled>Start</button>
    <button disabled>Stop</button>
  </div>
</div>

<style>
  #controls {
    display: flex;
    justify-content: center;
  }
  .row {
    margin: 0;
    padding: 0;
  }
</style>