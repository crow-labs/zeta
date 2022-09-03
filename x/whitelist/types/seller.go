package types

func (s *Seller) AcceptBlacklist() {
	s.Status = "blacklisted"
}
