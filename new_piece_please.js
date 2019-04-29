const Ipfs = require('ipfs')
const OrbitDB = require('orbit-db')

class NewPiecePlease {
  constructor(IPFS, OrbitDB) {}
}

try {
  module.exports = exports = new NewPiecePlease(Ipfs, OrbitDB)
} catch (e) {
  window.NPP = new NewPiecePlease(window.Ipfs, window.OrbitDB)
}
