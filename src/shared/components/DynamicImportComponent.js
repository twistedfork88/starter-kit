import { Component } from 'react';

export default class AsyncLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            c: null
        };
    }
    componentDidMount() {
        this.props.load()
        .then(c => {
            if(c && c.default) {
                this.setState({
                    c: c.default
                });
            }
            else {
                throw new Error('No default found on import module!');
            }
        })
    }
    render() {
        return this.props.children(this.state.c);
    }
}