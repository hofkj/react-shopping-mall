// 장바구니 리듀서 함수
const cartReducer = (state = initialState, action) => {
    // state가 undefined인 경우에 대비해 기본값 설정
   
    let newState;
  
    switch (action.type) {
      case 'ADD_TO_CART': {
        const { product, quantity = 1 } = action.payload;
        // cartItems가 없는 경우 빈 배열로 초기화
        const cartItems = state.cartItems || [];
       
        const existingItemIndex = cartItems.findIndex(
          item => item.product.id === product.id
        );
  
        if (existingItemIndex !== -1) {
          // 이미 장바구니에 있는 상품인 경우 수량만 증가
          const updatedCartItems = [...cartItems];
          updatedCartItems[existingItemIndex] = {
            ...updatedCartItems[existingItemIndex],
            quantity: updatedCartItems[existingItemIndex].quantity + quantity
          };
         
          newState = {
            ...state,
            cartItems: updatedCartItems
          };
        } else {
          // 새로운 상품인 경우 장바구니에 추가
          newState = {
            ...state,
            cartItems: [...cartItems, { product, quantity }]
          };
        }
        break;
      }
     
      case 'UPDATE_QUANTITY': {
        const { productId, quantity } = action.payload;
        const cartItems = state.cartItems || [];
       
        const updatedCartItems = cartItems.map(item =>
          item.product.id === productId ? { ...item, quantity } : item
        );
       
        newState = {
          ...state,
          cartItems: updatedCartItems
        };
        break;
      }
     
      case 'REMOVE_FROM_CART': {
        const productId = action.payload;
        const cartItems = state.cartItems || [];
       
        const updatedCartItems = cartItems.filter(
          item => item.product.id !== productId
        );
       
        newState = {
          ...state,
          cartItems: updatedCartItems
        };
        break;
      }
     
      case 'CLEAR_CART': {
        newState = {
          ...state,
          cartItems: []
        };
        break;
      }
     
      default:
        throw new Error(`지원되지 않는 액션 타입: ${action.type}`);
    }
  
    // 로컬 스토리지에 장바구니 상태 저장
    localStorage.setItem('cart', JSON.stringify(newState));
   
    return newState;
  };