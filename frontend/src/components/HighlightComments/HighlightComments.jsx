import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './HighlightComments.css'
import { StarFill, CheckCircleFill } from 'react-bootstrap-icons'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchComments } from '../../redux/actions/commentsAction';

const HighlightComments = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments.comments);
    const loading = useSelector(state => state.products.loading);
    const error = useSelector(state => state.products.error);

    useEffect(() => {
        dispatch(fetchComments());
    }, [dispatch]);

    if (loading) {
        return (
            <div className='highlight-comments'>
                <h1 className="title">our happy customer</h1>
                <div className="loading-container">
                    <div className="loading-item"></div>
                    <div className="loading-item"></div>
                    <div className="loading-item"></div>
                </div>
            </div>
        );
    }
    if (error) {
        return <center>Try again</center>;
    }

    return (
        <div className='highlight-comments'>
            <h1 className="title">our happy customer</h1>
            <div className="comments-container">
                <Slider {...settings}>
                    {
                        comments.map((comment) => (
                            <div key={comment.id} className="item">
                                <div className="five-star">
                                    <StarFill className='star-fill' />
                                    <StarFill className='star-fill' />
                                    <StarFill className='star-fill' />
                                    <StarFill className='star-fill' />
                                    <StarFill className='star-fill' />
                                </div>
                                <div className="name">
                                    <p>{comment.email}</p>
                                    <CheckCircleFill className='check-icon' />
                                </div>
                                <p className="comment">{comment.body}</p>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default HighlightComments