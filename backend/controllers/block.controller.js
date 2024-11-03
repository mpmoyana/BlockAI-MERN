// backend/controllers/block.controller.js

const Block = require('../models/Block');
const crypto = require('crypto');

// Function to calculate the hash of a block
function calculateHash(index, timestamp, data, previousHash) {
  return crypto
    .createHash('sha256')
    .update(index + timestamp + data + previousHash)
    .digest('hex');
}

// Function to create a new block
exports.createBlock = async (req, res) => {
  try {
    const { data, previousHash } = req.body;

    // Calculate hash of the block
    const index = await Block.countDocuments();
    // Calculate the new block's hash
    const timestamp = Date.now();
    const nonce = 0;
    const hash = calculateHash(index, timestamp, data, previousHash, nonce);

    // Create the new block
    const newBlock = new Block({
      index,
      timestamp,
      data,
      previousHash,
      hash,
      nonce,
    });

    await newBlock.save();
    res.status(201).json(newBlock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to get the entire blockchain
exports.getBlockchain = async (req, res) => {
    try {
        const blockchain = await Block.find().sort({ index: 1 });
        res.status(200).json(blockchain);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
