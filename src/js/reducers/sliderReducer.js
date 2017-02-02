export default function reducer(
    state={
        value: 90
    },
    action
) {
    switch (action.type) {
        case 'UPDATE_SLIDER':{
            return handleSliderUpdate(state, action.payload);
        }
    }

    return state;
}

let handleSliderUpdate = (state, payload) => {
    return {
        ...state,
        value: payload
    }
}
