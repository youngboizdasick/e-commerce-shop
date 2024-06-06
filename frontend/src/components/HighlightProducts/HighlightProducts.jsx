import { React, useEffect } from 'react'
import './HighlightProducts.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productsAction';
import { StarFill, BagPlus } from 'react-bootstrap-icons';

const HighlightProducts = ({ title }) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products[title]);
    const loading = useSelector(state => state.products.loading);
    const error = useSelector(state => state.products.error);

    useEffect(() => {
        dispatch(fetchProducts(title));
    }, [dispatch, title]);

    if (loading) {
        return (
            <div id='highlight-products'>
                <div className='highlight-products'>
                    <h1 className='highlight-title'>{title}</h1>
                    <ul className='product-list'>
                        <li className='loading-product'></li>
                        <li className='loading-product'></li>
                        <li className='loading-product'></li>
                        <li className='loading-product'></li>
                    </ul>
                    <button className='view-all'>Loading...</button>
                </div>
            </div>
        );
    }
    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div id='highlight-products'>
            <div className='highlight-products'>
                <h1 className='highlight-title'>{title}</h1>
                <ul className='product-list'>
                    {
                        products?.slice(0, 4).map((product) => (
                            <li key={product.id} className='product'>
                                <div className='image'>
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <h4 className='title'>{product.title}</h4>
                                <div className='rating-purchases'>
                                    <div className='rating'>
                                        <StarFill className='star-fill' />
                                        <p className='rate'>{product.rating.rate}</p>
                                    </div>
                                    <div className='purchases'>
                                        <p>{product.rating.count} purchases</p>
                                    </div>
                                </div>
                                <div className='price-addToCart'>
                                    <p className='price'>{product.price} $</p>
                                    <button className='bagplus'>
                                        <BagPlus className='icon' />
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <button className='view-all'>View All</button>
            </div>
        </div>
    );
}

export default HighlightProducts