const showPricing = (state = [], action) => {
    switch (action.type) {
      case 'SHOW_PRICING':
      return {
          showPricing: action.payload
        }
      default:
        return state
    }
  }
  
  export default showPricing