let initState = 0;
export default function reducer(proviousState = initState, action) {
  let { type, data } = action;
  console.log(action)
  let newState = null;
  switch (type) {
    case 'addition':
      return newState = proviousState + data;
    case 'subtract':
      return newState = proviousState - data;
    case 'isOdd':
      return newState = proviousState + data;
    case 'asyncAdd':
      return newState = proviousState + data;
    default:
      return proviousState
  }
}