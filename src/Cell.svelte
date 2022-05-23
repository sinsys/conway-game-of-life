<!-- Single Cell in Landscape -->
<script lang="ts">
  import type { Cell } from './interfaces'
  import { toggleCell } from './stores'
  export let cell: Cell
</script>

<span
  class="cell
    {cell.alive ? 'alive' : 'dead'}"
  on:click={ (_event) => toggleCell(cell) }
></span>

<style>
  .cell {
    width: 1rem;
    height: 1rem;
    background: #CCC;
    display: inline-block;
    font-size: 1rem;
    line-height: 1rem;
    color: #FEFEFE;
    cursor: pointer;
    user-select: none;
    border-radius: 1rem;
    transition: background 0.2s ease-in-out;
  }
  .alive {
    background: #77DD77;
  }
  .dead {
    background: #666;
  }
  .cell:hover {
    background: #CCC;
  }
</style>