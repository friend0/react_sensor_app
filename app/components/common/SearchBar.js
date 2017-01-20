import React from 'react';

export default class SearchBar extends React.Component {
    render() {
        const value = this.props.value;
        return (
            <search_bar>
                <div className='row'>
                    <input type='text' name='name' value={value} onChange={this.props.onChange}/>
                </div>
            </search_bar>
        );
    }
}
