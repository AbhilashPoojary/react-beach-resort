import React, { Component } from 'react';
import {RoomContext} from "../Context.js"
import Loading from "./Loading.js"
import Room from "./Room.js"
import Title from "./Title.js"

class FeaturedRooms extends Component {
    static contextType = RoomContext
   
    render() {
        let {loading,featuredRooms: rooms} = this.context
        rooms = rooms.map(room =>{
            return <Room key={room.id} room={room}/>
        })
        return (
            <section className="featured-rooms">
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    {loading?<Loading/>:rooms}
                </div>
            </section>
        );
    }
}

export default FeaturedRooms;