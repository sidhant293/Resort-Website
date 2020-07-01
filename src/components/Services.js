import React from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

class Services extends React.Component {
    constructor() {
        super();
        this.state = {
            services: [
                {
                    icon: <FaCocktail />,
                    title: "free cocktails",
                    info: "lorem erfae aerf sfdaa asfdasdf asdfasdf sgwe rtwc asdwe hnurvaxaein"
                },
                {
                    icon: <FaHiking />,
                    title: "endless hiking",
                    info: "lorem erfae aerf sfdaa asfdasdf asdfasdf sgwe rtwc asdwe hnurvaxaein"
                },
                {
                    icon: <FaShuttleVan />,
                    title: "free shuttle",
                    info: "lorem erfae aerf sfdaa asfdasdf asdfasdf sgwe rtwc asdwe hnurvaxaein"
                },
                {
                    icon: <FaBeer />,
                    title: "strongest beers",
                    info: "lorem erfae aerf sfdaa asfdasdf asdfasdf sgwe rtwc asdwe hnurvaxaein"
                }
            ]
        }
    }

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, indx) => {
                        return (
                            <article key={indx} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}

export default Services;