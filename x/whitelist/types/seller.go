package types

func (s *Seller) AcceptBlacklist() {
	s.Status = "blacklisted"
}

func (s *Seller) AcceptJailtime(jailTime uint64) {
	s.Status = "jailed"
}
