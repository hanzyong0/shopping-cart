const items = [
  {
    name: 'Poke Ball',
    id: 1,
    price: 200,
    effect: 'Used to capture Pokemon',
  },
  {
    name: 'Potion',
    id: 2,
    price: 300,
    effect: 'Restores 20 HP',
  },
  {
    name: 'Antidote',
    id: 3,
    price: 100,
    effect: 'Cures poison',
  },
  {
    name: 'Parylz Heal',
    id: 4,
    price: 200,
    effect: 'Heals Paralysis',
  },
  {
    name: 'Burn Heal',
    id: 5,
    price: 250,
    effect: 'Heals Burns',
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
// const [inputs, setInputs] = useState({
//   name: '',
//   email: '',
//   phone: '',
//   school: '',
//   degree: '',
//   studyStartDate: '',
//   studyEndDate: '',
//   company: '',
//   position: '',
//   leaveDate: '',
// });
// const handleChange = (e) => {
//   setInputs({
//     ...inputs,
//     [e.target.name]: e.target.value
//   });
// };;
export { getItems, getItem }