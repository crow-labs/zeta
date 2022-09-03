# zeta
**zeta** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

# Basic Demo (No Dispute)
https://vimeo.com/745164573/25a00b86c2

# Whitelist Module
For handling a whitelist of buyers, sellers and voters which is used by every other module
## Objects
### Member
Each Account Address can be linked to only one member by submitting a member-application transaction. Once enrolled as a member, users can choose to apply to act as a buyer, seller and/or voter in the market.   
### Buyer
Buyers are linked to their member account by a BuyerId after a buyer-application transaction. Buyers can place buy orders for items listed in sell orders by sellers. 
### Seller
Sellers are linked to their member account by a SellerId after a seller-application transaction. Sellers can create and edit items to be listed on the marketplace. Once the seller is satisfied with their item listing, they can create a sell order for the item. Buyers can place buy orders for the items listed in a seller's sell orders.
### Voter
Voters are linked to their member account by a VoterId after a voter-application transaction. Voters can vote on disputes raised by either buyers or selling once in the escrow (crow) process. These votes will then be used to determine the guilt of either party, any changes to a buyer or seller's whitelist status (jailed/blacklisted) and/or if funds should be returned to the buyer and if so, how much. Voters are rewarded for their participation via the collateral which is lost by either the dispute's plaintiff or the guilty party. When a dispute has been raised, one of the two parties will lose their collateral (each party's collateral is of equal size as to avoid any bias for greater rewards) no matter what. If a voter's member account is the same as the buyer or seller's then they are prohibitted from voting. Voting power is determined at an exponentially decreasing rate proportional to account's staked amount. Rewards are distributed to voters according to their % Voting Power of the total Voting Power placed for the dispute. 
## Transactions
### Membership Application
`zetad tx whitelist membership-application [name] [flags]`  
Transaction to become a member who can act as a buyer, seller and/or voter in the system
### Seller Application
`zetad tx whitelist seller-application [contact-info] [name] [flags]`  
Transaction for a member to be assigned a seller id and join the seller whitelist
### Buyer Application
`zetad tx whitelist buyer-application [contact-info] [flags]`  
Transaction for a member to be assigned a buyer id and join the buyer whitelist
### Voter Application
`zetad tx whitelist voter-application [alias] [flags]`  
Transaction for a member to be assigned a voter id and join the voters whitelist


# Market Module
For handling items, sell orders and buy orders that are placed by buyers and sellers on the whitelist and whose transfers are handled by in a crow
## Objects
### Item
Items describe what the seller may want to sell in a sell order including a title, description and an external-link (to an image for example).

### Sell Order
Sell orders are linked to an item by a itemId and contain the desired price and collateral for the item to be sold. 

### Buy Order
Buy orders are linked to a sell order by a sellOrderId and contain the offered price and collateral for the item. If the seller accepts a buy order, both the buyer and seller will put up this amount of collateral in escrow and the buyer will also put up the price.

## Transactions
### Prepare Item
`zetad tx market prepare-item [title] [description] [external-link] [seller-id] [flags]`  
Transaction for a seller to create an item that can then be put up for sale in a sell order
### Remove Item
`zetad tx market remove-item [item-id] [seller-id] [flags]`  
Transaction for a seller to remove an item from their items that they may sell
### List Item
`zetad tx market list-item [item-id] [seller-id] [price] [collateral]`  
Transaction for a seller to create a sell order and thereby list an item the seller has already prepared
### Place buy order
`zetad tx market place-buy-order [sell-order-id] [buyer-id] [price] [collateral] [flags]`  
Transaction for a buyer to place a buy order for the sell order associated with the provided sell order id
 
# Crow Module
For handling the escrow process for a buy order on the market placed by a buyer and seller on the whitelist

## Objects
### Crow 
Crows are created when a seller accepts a buy order and are linked to the buy order via the buyOrderId. During creation, the seller deposits the collateral listed in the buy order to the created escrow account. A buyer confirms the buy order by joining thhe escrow and depositing both the collateral and payment for the item. At this point, the buyer and seller must communicate their confidential information such as the buyer's shipping address using the contact information provided on the buyer/seller pages. As of now this communication is assumed to be handled off-chain but in future development P2P encrypted messaging may be implemented on-chain. If the seller receives the item and does not have any disputes to raise, they can complete the escrow process with a complete escrow no dispute transaction. Doing so will send both the seller's collateral and buyer's payment to the seller from the escrow account and the buyer will also be sent back the buyer's collateral.  

### Dispute
- Not yet implemented
### Evidence 
- Not yet implemented

# Booth Module
For handling voting on a crow's dispute from a voter on the whitelist 

## Objects
### Vote
- Votes have a reference to a poll and voter and contain a bollot with their voting information 
### Ballot
- Ballots have information on the guilt, refund/payment, and jailtime for both the buyer and seller as well as if either party should be blacklisted 
### Poll
- Not yet implemented
### Punishment
- Not yet implemented

## Transactions
### Begin Escrow
`zetad tx escrow begin-escrow [buy-order-id] [flags]`  
Transaction for a seller to accept a buy order with the provided buy order id and create a crow (if the seller created the sell order that the buy order is referencing). Causes the seller to escrow the collateral in the buyer order. 
### Join Escrow
`zetad tx escrow join-escrow [crow-id] [flags]`  
Transaction for a buyer to confirm their buy order and escrow the collateral and payment in the buy order.
### Confirm Escrow No Dispute
`zetad tx escrow complete-escrow-no-dispute [crow-id] [flags]`  
Transaction for a buyer to confirm the arrival of the item without issues to raise a dispute over and thereby complete the escrow process. This involves returing the collateral to the buyer and seller and sending the payment from the escroww account to the seller.
