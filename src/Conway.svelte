<!-- Landscape of Conway's Game of Life - Core functionality lives here -->
<script lang="ts">
  import { onDestroy } from 'svelte'
  import type { Landscape, ConwayConfig } from './interfaces'
  import {
    landscape,
    conwayConfig,
    setNextLandscapeStep,
    createLandscape
  } from './stores'
  import Cell from './Cell.svelte'

  // Core statefulness of app
  let state: Landscape
  let propagate: NodeJS.Timer
  let config: ConwayConfig

  // Subscriptions
  landscape.subscribe(ls => state = ls)
  conwayConfig.subscribe(cfg => config = cfg)

  // Set default input to override default config
  let gridSize: number = config.gridSize
  let evolutionDuration: number = config.evolutionDuration
  let aliveRatio: number = config.aliveRatio

  // Start evolution
  const startPropagation = () => {
    propagate = setInterval(() => {
      setNextLandscapeStep()
    }, config.evolutionDuration)
  }

  // Stop evolution
  const stopPropagation = () => clearInterval(propagate)

  // Reset board / Randomize
  const randomize = () => {
    clearInterval(propagate)
    landscape.update(ls => createLandscape(config))
  }

  // Applies custom configuration
  const applyConfig = () => {
    conwayConfig.update(cfg => {
      cfg = {
        gridSize,
        evolutionDuration,
        aliveRatio
      }
      return cfg
    })
  }

  // Cleanup on component destruction
  onDestroy(() => clearInterval(propagate))
</script>

<!-- Root level element containing any rendering for Conway -->
<div id="wrapper">

  <!-- Landscape plane -->
  <div id="landscape">
    {#each state as row}
      <div class="row">
        {#each row as cell}
          <Cell cell={cell} />
        {/each}
      </div>
    {/each}
  </div>

  <!-- Controls -->
  <div id="controls">
    <button on:click={startPropagation}>
      Start
    </button>
    <button on:click={stopPropagation}>
      Stop
    </button>
  </div>

  <!-- Config -->
  <div id="config">
    <div>
      <label for="gridSize">
        Grid Size:
      </label>
      <input type="number" id="gridSize" bind:value={gridSize}>
    </div>
    <div>
      <label for="evolutionDuration">
        Evolution Duration (ms):
      </label>
      <input type="number" id="evolutionDuration" bind:value={evolutionDuration}>
    </div>
    <div>
      <label for="aliveRatio">
        Alive/Dead Ratio:
      </label>
      <input type="number" id="aliveRatio" bind:value={aliveRatio}>
    </div>
  </div>
  <button on:click={applyConfig}>
    Apply custom config
  </button>
  <button on:click={randomize}>
    Reset
  </button>
</div>

<style>
  #controls {
    display: flex;
    justify-content: center;
  }
  .row {
    margin: 0;
    padding: 0;
    line-height: 0.75rem;
  }
  button {
    margin: 0.5rem 1rem;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
  }
  #config {
    display: flex;
    justify-content: center;
  }
  label {
    margin: 0.25rem 1rem;
    color: #FEFEFE;
  }
  input {
    margin: 0.25rem;
  }
</style>