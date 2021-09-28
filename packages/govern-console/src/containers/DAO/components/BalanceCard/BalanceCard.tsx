import styled from 'styled-components';

// TODO: Finalize. Tentative props
type Props = {
  cryptoValue: string;
  USDValue: string;
};

const Container = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  padding: 12px 0px;
  border-top: 1px solid lightgray; // TODO: to be changed
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

const TempIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: yellow;
`;

const Balance = styled.div`
  flex: 1;
  gap: 4px;
  display: flex;
  flex-direction: column;
`;

const Crypto = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

const USDEquivalent = styled.p`
  color: #7483ab;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
`;

const BalanceCard: React.FC<Props> = ({ cryptoValue, USDValue }) => {
  return (
    <Container>
      <IconContainer>
        <TempIcon />
      </IconContainer>
      <Balance>
        <Crypto>{`${cryptoValue} USDT`}</Crypto>
        <USDEquivalent>{`~${USDValue} USD`}</USDEquivalent>
      </Balance>
    </Container>
  );
};

export default BalanceCard;