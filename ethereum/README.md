# truffle console

## Layer 1

```sh
$ truffle console --network goerli --config truffle-config.js

$ truffle migrate --network goerli --config truffle-config.js --reset -f 1 --to 1
```

<br>

## Layer 2

```sh
$ truffle console --network optimism-goerli --config truffle-config.ovm.js

$ truffle migrate --network optimism-goerli --config truffle-config.ovm.js --reset -f 2 --to 2
```
