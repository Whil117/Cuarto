const addCuartoForm = [
  {
    name: 'add-sale-sub-title-6-1',
    nameInput: 'rooms',
    defaultValue: 0,
    type: 'number',
    id: 'add-sale-sub-title-6-1',
    label: 'add-sale-sub-title-6-1'
  },
  {
    name: 'add-sale-sub-title-6-2',
    type: 'number',
    defaultValue: 0,
    nameInput: 'bathrooms',
    id: 'add-sale-sub-title-6-2',
    label: 'add-sale-sub-title-6-2'
  },
  {
    name: 'add-sale-sub-title-6-3',
    type: 'number',
    defaultValue: 0,
    nameInput: 'bedrooms',
    id: 'add-sale-sub-title-6-3',
    label: 'add-sale-sub-title-6-3'
  },
  {
    name: 'add-sale-sub-title-6-4',
    type: 'number',
    defaultValue: 0,
    nameInput: 'guests',
    id: 'add-sale-sub-title-6-4',
    label: 'add-sale-sub-title-6-4'
  }
];
export const addCuartoOffers = [
  {
    name: 'add-sale-sub-title-7-1',
    type: 'checkbox',
    value: 'Kitchen',
    id: 'add-sale-sub-title-7-1',
    label: 'add-sale-sub-title-7-1'
  },
  {
    name: 'add-sale-sub-title-7-2',
    type: 'checkbox',
    value: 'Wifi',
    id: 'add-sale-sub-title-7-2',
    label: 'add-sale-sub-title-7-2'
  },
  {
    name: 'add-sale-sub-title-7-3',
    type: 'checkbox',
    value: 'TV',
    id: 'add-sale-sub-title-7-3',
    label: 'add-sale-sub-title-7-3'
  },
  {
    name: 'add-sale-sub-title-7-4',
    type: 'checkbox',
    value: 'Security cameras',
    id: 'add-sale-sub-title-7-4',
    label: 'add-sale-sub-title-7-4'
  },
  {
    name: 'add-sale-sub-title-7-5',
    type: 'checkbox',
    value: 'Swimming pool',
    id: 'add-sale-sub-title-7-5',
    label: 'add-sale-sub-title-7-5'
  },
  {
    name: 'add-sale-sub-title-7-6',
    type: 'checkbox',
    value: 'Self-parking',
    id: 'add-sale-sub-title-7-6',
    label: 'add-sale-sub-title-7-6'
  },
  {
    name: 'add-sale-sub-title-7-7',
    type: 'checkbox',
    value: 'Air conditioning',
    id: 'add-sale-sub-title-7-7',
    label: 'add-sale-sub-title-7-7'
  },
  {
    name: 'add-sale-sub-title-7-8',
    value: 'Laundry',
    type: 'checkbox',
    id: 'add-sale-sub-title-7-8',
    label: 'add-sale-sub-title-7-8'
  }
];

export default addCuartoForm;

export const initialState = {
  title: '',
  description: '',
  address: '',
  price: 10,
  images: [],
  details: {
    rooms: 0,
    bathrooms: 0,
    bedrooms: 0,
    guests: 0
  },
  offer: []
};
