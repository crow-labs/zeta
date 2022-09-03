package types

func (b *Buyer) AcceptBlacklist() {
	b.Status = "blacklisted"
}

// TODO: add this functionality
// AcceptJailTime just changes the status to jailed
// We still need to a jailing period from the start blocktime
// until the start+jail time end blocktime
func (b *Buyer) AcceptJailtime(jailTime uint64) {
	b.Status = "jailed"
}
