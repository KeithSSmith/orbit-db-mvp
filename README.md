# Orbit DB Minimum Viable Product (MVP)

This repo is to follow the progress of the Orbit DB Field Manual as described at the following repository: <https://github.com/orbitdb/field-manual>

## Chapter 1

Isomorphic Bookends boilerplate loaded.

```javascript
> const NPP = require('./newPiecePlease')
undefined
```

Define Class that creates IPFS and OrbitDb multihash.

```javascript
> const NPP = require('./newPiecePlease')
undefined
Swarm listening on /p2p-circuit/ipfs/Qmes9wAbrcaRn4srBw5ta8dYNCMU9jmBKYBicHjG2WFY92
> NPP.orbitdb.id
'Qmes9wAbrcaRn4srBw5ta8dYNCMU9jmBKYBicHjG2WFY92'
```

Create OrbitDb database.

```javascript
> const NPP = require('./newPiecePlease')
undefined
> NPP.pieces.id
'/orbitdb/zdpuArjA989PZEpVAmp3VrYAVNDm8cdDHU4QzZQxo1mpsx1z4/pieces'
```
