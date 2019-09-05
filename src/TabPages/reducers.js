import { CHANGE_TITLE, CHANGE_ICON } from './actions'

const initialState = {
    name: 'default title',
    showArrow: false
}

export default function (state = initialState, action) {
    const { type, data } = action;
    switch (type) {
        case CHANGE_ICON:
            return {
                ...state,
                showArrow: data
            };
        default: return state;
    }
};