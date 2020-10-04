
export const initialState = {
    backgroundImage: require('./images/clear2.jpg'),
    temperature: 32,
    city: 'Islamabad',
    day: "2020-10-04"
}

export default function myReducer(state, action) {
    console.log('reducer is called wioth' + action);
    console.log(action)
    switch (action.type) {
        case 'SET_WEATHER_DETAILS':
            return {
                backgroundImage: action.payload.backgroundImage,
                temperature: action.payload.temperature,
                city: action.payload.city,
                day: action.payload.day
            }
        default:
            return state;
    }
}