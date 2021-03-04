import { usePricePbearBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalPbear = getBalanceNumber(totalRewards)
  const cakePriceBusd = usePricePbearBusd()

  return totalPbear * cakePriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
