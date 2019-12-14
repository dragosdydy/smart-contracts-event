# smart-contracts-event
get statistics about events (functions) calls in smart contracts

address - the smart contract address
function - the name of the function we want to get info about
variable - the variable name to get the data from
label - the name we want to show in the frontend 
type - (optional) - date/currency - if not set, will be not set


Call example
http://localhost:3000/statsApi?address=0xf5b0a3efb8e8e4c201e2a935f110eaaf3ffecb8d&function=AxieSpawned&variable=count&label=Total%20axies%20spawned

#to-do
implementation to support multiple functions/variables in the same call instead of calling the api multiple times per contract

example: statsApi?address=0xf5b0a3efb8e8e4c201e2a935f110eaaf3ffecb8d&config=[{AxieSpawned, count, "Axie total"}, {AxieSpawned, tx_last_id, "First Axie"}, {AxieEvolved, count}]