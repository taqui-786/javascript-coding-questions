// This is for solving -----------------
const { JSDOM } = require("jsdom");

// Simulate a browser environment
const dom = new JSDOM(`<!DOCTYPE html><body><div id="testDiv"></div></body>`);
const document = dom.window.document;
const testingDiv = document.createElement("div");
const testingDiv2 = document.createElement("div");
const testingDiv3 = document.createElement("div");
const testingDiv4 = document.createElement("div");

class NodeStore {
    constructor() {
        this.store = {};
        this.idCounter = 1;
    }

    getNodeId(node) {
        if (!node.__uniqueID) {
            node.__uniqueID = this.idCounter++;
        }
        return node.__uniqueID;
    }

    set(node, value) {
        const id = this.getNodeId(node);
        this.store[id] = value;
        console.log("store - ", this.store);
        
    }

    get(node) {
        const id = this.getNodeId(node);
        return this.store[id];
    }

    has(node) {
        const id = this.getNodeId(node);
        return id in this.store;
    }
}
const testMap = new NodeStore();
testMap.set(testingDiv, "testing data");
testMap.set(testingDiv2, "testing data");
testMap.set(testingDiv3, "testing data");
const getting = testMap.get(testingDiv2);
console.log(getting);
console.log(testMap.has(testingDiv4));
