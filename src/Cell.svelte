<script lang="ts">
  import type { Cell } from './interfaces'
  import { toggleCell } from './stores.js'

  export let cell: Cell
</script>

<span
  class="cell
    {cell.alive ? 'alive' : 'dead'}"
  on:click={ (_event) => toggleCell(cell) }
>
  {cell.alive ? 'O' : 'X' }
</span>

<style>
  .cell {
    width: 1.5rem;
    height: 1.5rem;
    background: #CCC;
    display: inline-block;
    margin: -0.125rem 0.125rem;
    font-size: 1rem;
    line-height: 1rem;
    color: #FEFEFE;
    cursor: pointer;
    user-select: none; /* Non-prefixed version, currently
                          supported by Chrome, Edge, Opera and Firefox */
  }
  .alive {
    background: #E0BBE4;
  }
  .dead {
    background: #FFDFD3;
  }
</style>