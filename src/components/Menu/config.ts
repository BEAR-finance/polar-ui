import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://exchange.bears.finance/',
      },
      {
        label: 'Liquidity',
        href: 'http://exchange.bears.finance/#/pool',
      },
    ],
  },
  {
    label: 'Wild Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Wild Staking',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Casino (coming in 24h)',
  //   icon: 'PoolIcon',
  //   href: '/casino',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Wild Lottery',
    icon: 'TicketIcon',
    href: '/lottery', // /lotery
  },
  {
    label: 'Bears NFT (in 24h)',
    icon: 'NftIcon',
    href: '#', // /nft
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x52008784Dc2f6d7b591A490fEB8394625b8B0A5b',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/PBEAR-finance',
      },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/goose-finance/',
      // },
      // {
      //   label: 'AstroTools',
      //   href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      // },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     // {
  //     //   label: 'Voting',
  //     //   href: 'https://voting.pancakeswap.finance',
  //     // },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/goosedefi/',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://goosedefi.gitbook.io/goose-finance/',
  //     },
  //     {
  //       label: 'Blog',
  //       href: 'https://goosefinance.medium.com/',
  //     },
  //   ],
  // },
]

export default config
