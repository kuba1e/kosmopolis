const tvSerialsList = (state, action)=>{
  if(state === undefined){
    return {
      tvSerialsData: [],
      loading: true,
      error: false
    }
  }

  switch (action.type) {
    case 'REQUESTED_TV_SERIALS':
      return {
        ...state.tvSerials,
        loading: true
      }

    case 'DOWNLOADED_TV_SERIALS':
      return {
        ...state.tvSerials,
        loading:false,
        tvSerialsData: [...action.payload]
      }


    case 'FAILED_TO_DOWNLOADED_TV_SERIALS':
      return {
        ...state.tvSerials,
        loading:false,
        error: true
      }


    default: return state.tvSerials
  }

  
}

export default tvSerialsList