import React, {Component} from 'react';

export default class PostListItem extends Component {
    
    render() {
        const {label, onDelete, onToggleLike, onToggleImportant, important, like} = this.props;
        let classNames = "app-list-item d-flex justify-content-between";

        if(important) {
            classNames += " important";
        }

        if(like) {
            classNames += " like";
        }

        return(
            <div className={classNames}>
                <span
                className="app-list-item-label" onClick={onToggleLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-between align-items-center">
                    <button type="button" className="btn-star btn-sm">
                        <i className="bi-star" onClick={onToggleImportant}></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm">
                        <i className="bi-trash" onClick={onDelete}></i>
                    </button>
                    <i className="bi-heart"></i>
                </div>
            </div>
        )
    }
}

