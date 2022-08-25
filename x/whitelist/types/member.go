package types

func (m *Member) AddBuyer(buyerId uint64) error {
	if m.BuyerId != 0 {
		return ErrAlreadyBuyer
	}

	m.BuyerId = buyerId
	return nil
}

func (m *Member) AddSeller(sellerId uint64) error {
	if m.SellerId != 0 {
		return ErrAlreadySeller
	}

	m.SellerId = sellerId
	return nil
}

func (m *Member) AddVoter(voterId uint64) error {
	if m.VoterId != 0 {
		return ErrAlreadyVoter
	}

	m.VoterId = voterId
	return nil
}
