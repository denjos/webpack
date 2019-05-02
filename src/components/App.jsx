import sass from '../scss/main.scss';
import React, {Component} from "react";


export class App extends Component {
    render() {
        return (
            <div>
                <img  className="logo" src={this.props.logo} alt=""/>
                <div>Webpack + {this.props.name}</div>
                <div className="menu">
                    {this.props.menu.map(link=>{ return <a className="item" key={link[0]} href={link[1]}>{link[0]}</a>})}
                </div>
            </div>
        )
    }
}
