import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa"
import Title from "./Title.js"

class Services extends Component {
    constructor(){
        super()
        this.state={
            services:[
                {
                    id: 1,
                    icon:<FaCocktail/>,
                    title: "free cocktail",
                    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                    id: 2,
                    icon:<FaHiking/>,
                    title: "endless hiking",
                    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                    id: 3,
                    icon:<FaShuttleVan/>,
                    title: "free shuttles",
                    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                    id: 4,
                    icon:<FaBeer/>,
                    title: "free strong beer",
                    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }
            ]
        }
    }
    
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map(item =>{
                        return(
                            <article key={`item-${item.title}`} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        );
    }
}

export default Services;