/* eslint-disable react/jsx-key */
import { Fragment } from "react"
import CardProduct from "../components/Fragments/CardProduct"
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: "Rp 1.000.000",
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam animi illum aliquid eos corrupti consequuntur accusamus ipsum quis architecto vero, sequi perspiciatis. Iure quo, in quos consectetur eum distinctio earum?"
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: "Rp 500.000",
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam animi illum aliquid eos"
    },
    {
        id: 3,
        name: "Sepatu Adadong",
        price: "Rp 2.000.000",
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam animi illum aliquid eos"
    }
]

const email = localStorage.getItem('email');

const ProductsPage = () => {

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = "/login"
    }

    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image}/>
                    <CardProduct.Body name={product.name}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price}/>
                </CardProduct>
            ))}
        </div>
        <div className="flex w-100 justify-center">
            <Counter></Counter>
        </div>
        </Fragment>
    )
}

export default ProductsPage