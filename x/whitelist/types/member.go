package types

func (m *Member) AddBuyer(buyerId uint64) error {
	if m.BuyerId != 0 {
		return ErrAlreadyBuyer
	}

	m.BuyerId = buyerId
	return nil
}
