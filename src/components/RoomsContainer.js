import React from 'react';
import RoomsFilter from "./RoomsFilter.js"
import RoomList from "./RoomList.js"
import Loading from "./Loading.js"
import {withRoomConsumer} from "../Context.js"

function RoomsContainer({context}){
    const {loading,sortedRooms,rooms} = context
    if(loading){
         return<Loading/>   
    }
    return(
        <div>
            <h1>Hello from rooms container</h1>
                <RoomsFilter rooms={rooms}/>
                <RoomList rooms={sortedRooms}/>
        </div>
    )
}

export default withRoomConsumer(RoomsContainer)

// import React from 'react';
// import RoomsFilter from "./RoomsFilter.js"
// import RoomList from "./RoomList.js"
// import {RoomConsumer} from "../Context.js"
// import Loading from "./Loading.js"

// function RoomsContainer(props) {
//     return (
//         <RoomConsumer>
//             {
//                 (value) =>{
//                    const {loading,sortedRooms,rooms} = value
//                    if(loading){
//                        return<Loading/>
    
//                    }
//                     return(
//                         <div>
//                             <h1>Hello from rooms container</h1>
//                             <RoomsFilter rooms={rooms}/>
//                             <RoomList rooms={sortedRooms}/>
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
        
//     );
// }

// export default RoomsContainer;