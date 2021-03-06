import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getPbearAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePricePbearBusd } from '../../../state/hooks'

const StyledPbearStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const PbearStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getPbearAddress())
  const farms = useFarms()
  const pbearPrice = usePricePbearBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const cakeSupply = getBalanceNumber(circSupply)
  const marketCap = pbearPrice.times(circSupply)

  let pbearPerBlock = 0
  if (farms && farms[0] && farms[0].pbearPerBlock) {
    pbearPerBlock = new BigNumber(farms[0].pbearPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledPbearStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Bear Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total PBEAR Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total PBEAR Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New PBEAR/block')}</Text>
          <Text bold fontSize="14px">
            {pbearPerBlock}
          </Text>
        </Row>
      </CardBody>
    </StyledPbearStats>
  )
}

export default PbearStats
