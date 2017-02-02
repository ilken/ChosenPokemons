export default function reducer(
    state={
        value: 90
    },
    action
) {
    switch (action.type) {
        case 'UPDATE_SLIDER':{
            return {
                ...state,
                value: action.payload.sliderValue
            }
        }
    }

    return state;
}
