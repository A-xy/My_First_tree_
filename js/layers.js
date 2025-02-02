addLayer("thoughts", {
    name: "思想", 
    symbol: "💡", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#111155",
    //requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "思想", // Name of prestige currency
    //baseResource: "points", // Name of resource prestige is based on
    //baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true}
})
