export const initialState = {
    user: null,
    playlists:[],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    //token: 'BQAg5btklxd5AbnVCd2qmiIS8hJfSqzOYLiIPRPEyTQKuLTtfBmrE8J9G_KUx4BcaIZJkEheego6FqvpvoUPfi4iI9gV4teo2gwxu3jSOjgCgm8U1TFZaNUbtFR1MzZ-DB2ITC7KI2quRa6jhBL13kxN-MBt2oK08OqcD6mr5pXDUbB0M1sXC9CWQB6RhBV9IvKpQ8QecWnU5nDGUOyysrx6',

}

    const reducer = (state, action) =>{
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
            ...state,
            user: action.user,
            };

            case "SET_PLAYING":
                return {
                  ...state,
                  playing: action.playing,
                };
          
              case "SET_ITEM":
                return {
                  ...state,
                  item: action.item,
                };

            case 'SET_TOKEN':
                return{
                ...state,
                token: action.token,
                };
                

                case 'SET_PLAYLISTS':
                    return{
                    ...state,
                    playlists: action.playlists,
                    };

                case 'SET_DISCOVER_WEEKLY':
                    return{
                    ...state,
                    discover_weekly: action.discover_weekly,
                    };
                    
                    case "SET_TOP_ARTISTS":
                        return {
                          ...state,
                          top_artists: action.top_artists,
                        };
                    
                        case "SET_SPOTIFY":
                            return {
                              ...state,
                              spotify: action.spotify,
                            };

            default:
                return state;
                
            
    }
    }

    export default reducer;