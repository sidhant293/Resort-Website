import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from '../context';

function RoomContainer({ context }) {
    const { sortedRooms, rooms } = context;
    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomContainer);


// const RoomContainer = () => {
//     return (
//         <RoomConsumer>
//             {value => {
//                 const { sortedRooms, rooms } = value;
//                 return (
//                     <div>
//                         RoomContainer
//                         <RoomFilter rooms={rooms} />
//                         <RoomList rooms={sortedRooms} />
//                     </div>
//                 );
//             }}
//         </RoomConsumer>
//     );
// }

// export default RoomContainer;