import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


const Checkout = () =>{
    const { cartItems , cartItemTotal } = useContext(CartContext);
    return (
        
        <div className='checkout-container '>
            <div className='checkout-header'>
                <div className='header-block '>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span></span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
                
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className='total'>TOTAL: ${cartItemTotal}</div>

        </div>
           
                
                
        
        
    )
}

export default Checkout