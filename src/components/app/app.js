import React, {Component} from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "Всем привт", important: false, like: false, id: "qwe"},
                {label: "Hellow", important: true, like: false, id: "trt"},
                {label: "I need help", important: false, like: false, id: "fgg"},
            ],
            filter: 'all',
            term: '',
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);

        
        this.max = 4;
        
        
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem. id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return{
                data: newArr,
            };
        });
    }

    addItem(body) {
        if(body.replace(/\s/g, '')) {
            const newItem = {
                label: body,
                important: false,
                id: this.max++,
            };
            
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr,
                }
    
            });
        }
    } 

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return{
                data: newArr,
            };

        });
    }

    onToggleLike(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return{
                data: newArr,
            };

        });
    }

    likedPosts = (items, filter) => {
        if( filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    searchPost = (items, term) => {
        if(term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.label.indexOf(term) > -1
        });
    }

    updateSearch = (term) => {
        this.setState({term});
    }

    render() {
        const {data, filter, term} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.likedPosts(this.searchPost(data, term), filter)
        return(
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel updateSearch={this.updateSearch}/>
                    <PostStatusFilter 
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div> 
                <PostList 
                    posts={visiblePosts} 
                    onDelete={this.deleteItem} 
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </div>
        )     
    }
}
