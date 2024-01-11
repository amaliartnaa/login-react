/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Fragment, useState } from "react"
import CardProduct from "../components/Fragments/CardProduct"
import Button from "../components/Elements/Button";
// import Counter from "../components/Fragments/Counter";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: 1000000,
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam animi illum aliquid eos corrupti consequuntur accusamus ipsum quis architecto vero, sequi perspiciatis. Iure quo, in quos consectetur eum distinctio earum?"
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: 500000,
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam animi illum aliquid eos"
    },
    {
        id: 3,
        name: "Sepatu Adadong",
        price: 2000000,
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam animi illum aliquid eos"
    }
]

const email = localStorage.getItem('email');

const ProductsPage = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        }
    ])

    const handleLogout = () => {
        
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = "/login"
    }

    const handleAddToCart = (id) => {
        if(cart.find(item => item.id === id)) {
            setCart(
                cart.map(item => item.id === id ? {...item, qty: item.qty + 1  } : item) 
            )
        } else {
            setCart([...cart, { id, qty: 1}])
        }
    }

    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
            <div className="w-3/4 flex flex-wrap">
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image}/>
                        <CardProduct.Body name={product.name}>
                            {product.description}
                        </CardProduct.Body>
                    <CardProduct.Footer price={product.price} id={product.id}handleAddToCart={handleAddToCart}/>
                </CardProduct>
            ))}
            </div>
            <div className="w-1/4">
                <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                <table className="text-left table-auto border-separate border-spacing-x-5">
                    {/* <ul>
                        {cart.map((item) => (
                            <li key={item}>{item.id}</li>
                        ))}
                    </ul> */}
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => {
                            const product = products.find((product) => product.id === item.id);
                            return (
                                <tr key={item.id}>
                                    <td>{product.name}</td>
                                    <td>{product.price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                                    <td>{item.qty}</td>
                                    <td>{(item.qty * product.price).toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        {/* <div className="flex w-100 justify-center">
            <Counter></Counter>
        </div> */}
        </Fragment>
    )
}

export default ProductsPage