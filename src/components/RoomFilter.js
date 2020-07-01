import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

const RoomFilter = ({ rooms }) => {

    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

    let types = getUnique(rooms, 'type');
    types = ['all', ...types];
    types = types.map((item, indx) => {
        return <option value={item} key={indx}>{item}</option>
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, indx) => {
        return <option value={item} key={indx}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                <div className="form-group">
                    {/*start for type */}
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>{types}</select>
                    {/* end for type */}
                </div>
                <div className="form-group">
                    {/*start for guests */}
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>{people}</select>
                    {/* end for guests */}
                </div>
                <div className="form-group">
                    {/*start for price */}
                    <label htmlFor="price">room price ₹{price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={handleChange} className="form-control" />
                    {/* end for price */}
                </div>
                <div className="form-group">
                    {/*start for size */}
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                    {/* end for size */}
                </div>
                <div className="form-group">
                    {/*start for extra */}
                    <div className="single-extra">
                    <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                    <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                    <label htmlFor="pets">pets</label>
                    </div>
                    {/* end for extra */}
                </div>
            </form>
        </section>
    );
}

export default RoomFilter;