export default function(state = null, action){
    switch(action.type){
        case 'PLATES_LIST':
            return action.payload;
        default:
            return state;
    }
}