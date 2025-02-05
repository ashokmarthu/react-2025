React 19 Features

1. No need to Forward Ref you directly access ref as a prop. you wan't to use you can use it. In Future it will be deprecated
2. No need of .provider. IF you wan't to use you can use it
   <CartContext.Provider>
   wrap as <CartContext>

React 19 Hooks

useHook:-

Normally Hooks can't be used in if blocks and in loops
But we can use useHook
we can use useHook instead of useContext
if(true){
const cartCtx= use(cartContext)
}
