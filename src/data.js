import pokeBall from './assets/poke-ball.png';
import potion from './assets/potion.png';
import antidote from './assets/antidote.png';
import paralyzeHeal from './assets/paralyze-heal.png';
import burnHeal from './assets/burn-heal.png';

const items = [
  {
    name: 'Poke Ball',
    id: 1,
    price: 200,
    effect: 'Used to capture Pokemon',
    img: pokeBall,
  },
  {
    name: 'Potion',
    id: 2,
    price: 300,
    effect: 'Restores 20 HP',
    img: potion,
  },
  {
    name: 'Antidote',
    id: 3,
    price: 100,
    effect: 'Cures poison',
    img: antidote,
  },
  {
    name: 'Paralyze Heal',
    id: 4,
    price: 200,
    effect: 'Heals Paralysis',
    img: paralyzeHeal,
  },
  {
    name: 'Burn Heal',
    id: 5,
    price: 250,
    effect: 'Heals Burns',
    img: burnHeal,
  },

]

const getItems = () => {
  return items;
}

const getItem = (id) => {
  return items.find(
    item => item.id === id
  );
}

export { getItems, getItem }