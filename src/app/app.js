import { Delaunay, forceSimulation, range, select } from "d3";

// Constants
const width = 975,
  height = 610;

const data = range(100).map(() => []);

forceSimulation()
  .nodes(data)
  .on("tick", tick);

// Svg
const svg = select("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("viewBox", [-width / 2, -height / 2, width, height]);

const mesh = svg
  .append("path")
  .attr("fill", "none")
  .attr("stroke", "red");

const nodes = svg
  .append("g")
  .selectAll("circle")
  .data(data)
  .join("circle")
  .attr("r", 4);

function tick() {
  nodes.attr("cx", d => d.x).attr("cy", d => d.y);
  mesh.attr("d", Delaunay.from(data, d => d.x, d => d.y).render());
}
