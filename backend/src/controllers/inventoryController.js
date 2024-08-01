const InventoryService = require('../services/inventoryService');

exports.createInventory = async (req, res) => {
  try {
    const inventoryData = req.body;
    const inventory = await InventoryService.createInventory(inventoryData);
    res.status(201).json(inventory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllInventories = async (req, res) => {
  try {
    const inventories = await InventoryService.getAllInventories();
    res.json(inventories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getInventoryById = async (req, res) => {
  try {
    const inventoryId = req.params.id;
    const inventory = await InventoryService.getInventoryById(inventoryId);
    res.json(inventory);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.updateInventory = async (req, res) => {
  try {
    const inventoryId = req.params.id;
    const inventoryData = req.body;
    const updatedInventory = await InventoryService.updateInventory(inventoryId, inventoryData);
    res.json(updatedInventory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteInventory = async (req, res) => {
  try {
    const inventoryId = req.params.id;
    await InventoryService.deleteInventory(inventoryId);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};