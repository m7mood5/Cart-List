import ItemCart from "./itemCart"
import data from "./data"
const Home = () => {

    return (
        <>
            <h1 className="text-center">All items</h1>
            <section className="py-4 container">
                <div className="row justify-contant-center">
                    {data.products.map((item, index) => {
                        return (
                            <ItemCart img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
                        )
                    })}
                </div>

            </section>
        </>
    )
}

export default Home