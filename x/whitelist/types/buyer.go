package types

func (b *Buyer) AcceptBlacklist() {
	b.Status = "blacklisted"
}
