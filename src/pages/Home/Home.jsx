import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";

const Home = () => {

    const categories = useSelector(s => s.reducer.categories);
    return (
        <div className="homePage">
            <div className="container">
                {
                    categories.map(item =>{
                        return <div key={item}>
                                <h2><Link to={`/category/${item}`}>{item}</Link></h2>
                                <ProductList category={item}limit ={4}/>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Home;
