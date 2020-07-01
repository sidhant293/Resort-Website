import React from 'react';
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends React.Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        this.setState({
            rooms: rooms,
            featuredRooms: featuredRooms,
            sortedRooms: rooms,
            price: maxPrice,
            maxPrice: maxPrice,
            maxSize: maxSize
        });
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => {
                return image.fields.file.url
            });
            let room = { ...item.fields, images, id }
            return room;
        });
        return tempItems;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }

    handleChange = (event) => {
        const target = event.target;
        const name = event.target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [name]: value }, this.filterRooms);
    }

    filterRooms = () => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state;
        let tempRooms = [...rooms];
        capacity = parseInt(capacity);
        price = parseInt(price);

        if (type !== 'all') {
            tempRooms = tempRooms.filter(item => item.type === type);
        }

        if (capacity !== 1) {
            tempRooms = tempRooms.filter(item => item.capacity >= capacity);
        }

        tempRooms = tempRooms.filter(item => item.price <= price);

        tempRooms = tempRooms.filter(item => item.size >= minSize && item.size <= maxSize);

        if (breakfast) tempRooms = tempRooms.filter(item => item.breakfast === true);

        if (pets) tempRooms = tempRooms.filter(item => item.pets === true);

        this.setState({ sortedRooms: tempRooms });
    }

    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (<RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
        );
    }
}

export { RoomConsumer, RoomProvider, RoomContext };