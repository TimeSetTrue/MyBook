import React, {Component} from 'react';

class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.btn = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'},
        ]
    }

    render() {
        const btn = this.btn.map(({name, label}) => {
            return (
                <button 
                    key={name} 
                    type="button" 
                    className="btn btn-info" 
                    onClick={() => this.props.onFilterSelect(name)}>{label}</button>
            )
        })

        return(
            <div className="btn-group">
                {btn}
            </div>
        )
    }
   
}

export default PostStatusFilter;