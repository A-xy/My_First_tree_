addLayer("thoughts", {
    name: "思想", 
    symbol: "💡", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#33FFFF",
    //requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "思想", // Name of prestige currency
    //baseResource: "points", // Name of resource prestige is based on
    //baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    buyables: {
        11: {
            title: 思维阶层1,
            cost(x) { return new Decimal(100).pow(x).mul(10) },
            display() { return "1级：开始生产想法；此后，每一级使其生产速度*2" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
    }
})
