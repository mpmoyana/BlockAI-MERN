// backend/controllers/ai.controller.js

const synaptic = require('synaptic');
const Block = require('../models/Block');

// Set up a basic neural network
const { Layer, Network, Trainer } = synaptic;
const inputLayer = new Layer(3);  // Adjust based on your input features
const hiddenLayer = new Layer(4);  // Number of neurons in the hidden layer
const outputLayer = new Layer(1);   // Output layer for binary classification

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

const net = new Network({
  input: inputLayer,
  hidden: [hiddenLayer],
  output: outputLayer,
});

// Function to train the model with blockchain data
async function trainModel() {
  const blocks = await Block.find().sort({ index: 1 });
  const trainingData = blocks.map(block => ({
    input: [block.index, block.timestamp, block.nonce],
    output: [block.hash.length > 0 ? 1 : 0], // Adjust output based on your logic
  }));

  const trainer = new Trainer(net);
  trainer.train(trainingData, {
    rate: 0.1,           // Learning rate
    iterations: 20000,   // Number of iterations
    error: 0.005,        // Error threshold
    shuffle: true,       // Shuffle data
    log: 1000,           // Log every 1000 iterations
    cost: Trainer.cost.CROSS_ENTROPY, // Cost function
  });

  console.log('Model trained successfully');
}

// Function to detect anomalies in the blockchain
exports.detectAnomalies = async (req, res) => {
  await trainModel(); // Train the model with existing data

  const blocks = await Block.find().sort({ index: 1 });
  const anomalies = [];

  blocks.forEach(block => {
    const result = net.activate([block.index, block.timestamp, block.nonce]);
    if (result[0] < 0.1) {  // Threshold for anomaly detection
      anomalies.push(block);
    }
  });

  res.status(200).json({
    message: anomalies.length > 0 ? "Anomalies detected" : "No anomalies detected",
    anomalies,
  });
};
