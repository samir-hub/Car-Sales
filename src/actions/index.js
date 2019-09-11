

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = item => {
    // dispatch an action here to remove an item
    console.log(item);
    return { type: REMOVE_FEATURE, payload: item };
  };

export const BUY_ITEM = 'BUY_ITEM';
export const buyItem = item => {
    // dipsatch an action here to add an item
    console.log(item);
    return { type: BUY_ITEM, payload: item };
  };