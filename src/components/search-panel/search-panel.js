import React, {Component} from 'react';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        
    }

    updateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.updateSearch(term);
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.updateSearch}
            />
        )
    }
}

export default SearchPanel;