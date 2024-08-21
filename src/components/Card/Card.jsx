import './card.scss'

const Card = ({item}) => {
    return (
        <div className='product-card'>
            <img src={item.image} alt="" className='product-card-img' />
            <h3 className='product-card-title'>{
                item.title.length >30
                ? item.title.substr(0,27) +'...'
                : item.title
                }</h3>
            <p className='product-card-text'>{item.description.length
                 ? item.description.substr(0,10) +'...'
                 : item.description
                }

            </p>
        </div>
    );
}

export default Card;
