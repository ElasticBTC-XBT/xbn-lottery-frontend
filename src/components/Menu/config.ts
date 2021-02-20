import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  // {
  //   label: 'Home',
  //   icon: 'HomeIcon',
  //   href: '/',
  // },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x547cbe0f0c25085e7015aa6939b28402eb0ccdac',
      },
      {
        label: 'Julswap',
        href: 'https://julswap.com/#/swap?outputCurrency=0x547cbe0f0c25085e7015aa6939b28402eb0ccdac',
      },
      {
        label: 'Bakeryswap',
        href: 'https://www.bakeryswap.org/#/swap?outputCurrency=0x547cbe0f0c25085e7015aa6939b28402eb0ccdac',
      },
    ],
  },
  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },

  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'XBN Overview',
        href: 'https://xbn.finance',
      },
      {
        label: 'XBT Overview',
        href: 'https://elasticbitcoin.org',
      },
      // {
      //   label: 'Tokens',
      //   href: 'https://pancakeswap.info/tokens',
      // },
      // {
      //   label: 'Pairs',
      //   href: 'https://pancakeswap.info/pairs',
      // },
      // {
      //   label: 'Accounts',
      //   href: 'https://pancakeswap.info/accounts',
      // },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },

      {
        label: 'Github',
        href: 'https://github.com/ElasticBTC-XBT',
      },

      {
        label: 'Blog',
        href: 'https://medium.com/elastic-bitcoin-xbt',
      },
    ],
  },
]

export default config
