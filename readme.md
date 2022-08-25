# zeta
**zeta** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

# Whitelist Module
## Member
Each Account Address can be linked to only one member by submitting a member-application transaction. Once enrolled as a member, users can choose to apply to act as a buyer, seller and/or voter in the market.   
### Buyer
Buyers are linked to their member account by a BuyerId after a buyer-application transaction. Buyers can place buy orders for items listed in sell orders by sellers. 
### Seller
Sellers are linked to their member account by a SellerId after a seller-application transaction. Sellers can create and edit items to be listed on the marketplace. Once the seller is satisfied with their item listing, they can create a sell order for the item. Buyers can place buy orders for the items listed in a seller's sell orders.
### Voter
Voters are linked to their member account by a VoterId after a voter-application transaction. Voters can vote on disputes raised by either buyers or selling once in the escrow (crow) process. These votes will then be used to determine the guilt of either party, any changes to a buyer or seller's whitelist status (jailed/blacklisted) and/or if funds should be returned to the buyer and if so, how much. Voters are rewarded for their participation via the collateral which is lost by either the dispute's plaintiff or the guilty party. When a dispute has been raised, one of the two parties will lose their collateral (each party's collateral is of equal size as to avoid any bias for greater rewards) no matter what. If a voter's member account is the same as the buyer or seller's then they are prohibitted from voting. Voting power is determined at an exponentially decreasing rate proportional to account's staked amount. Rewards are distributed to voters according to their % Voting Power of the total Voting Power placed for the dispute. 

# Market Module

## Item

## Buy Order

## Sell Order

# Crow Module

## Crow 

## Dispute

## Rebuttal

## Evidence 

## Vote

## Sentence
## Verdict

## Punishment
