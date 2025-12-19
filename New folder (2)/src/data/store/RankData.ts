// IMPORT ASSETS
import rankGold from '../../assets/store/gold.png';
import rankSilver from '../../assets/store/silver.png';
import rankDiamond from '../../assets/store/ephemeral.png'; 

export const rankData = [
  {
    id: 'rank_coal',
    name: 'Coal Rank',
    price: 5.00,
    image: rankSilver,
    url: 'https://store.tbfmc.com/product/coal-rank',
    features: [
      'Prefix [Coal] in chat',
      'White chat color'
    ]
  },
  {
    id: 'rank_gold',
    name: 'Gold Rank',
    price: 10.00,
    image: rankGold,
    url: 'https://store.tbfmc.com/product/gold-rank',
    features: [
      'Prefix [Gold] in chat',
      'Yellow chat color'
    ],
    isPopular: true
  },
  {
    id: 'rank_diamond',
    name: 'Diamond Rank',
    price: 15.00,
    image: rankDiamond,
    url: 'https://store.tbfmc.com/product/diamond-rank',
    features: [
      'Prefix [Diamond] in chat',
      'Blue chat color'
    ]
  }
];
