import React from 'react';

class VectorItems extends React.Component {
    render() {
        const vectorEntries = this.props.entries;

        function createTasks(item) {
            let output = '{' + item.textPre + '},     ' + '{' + item.textPost + '}';
            return <li key={item.key}>{output}</li>;
        }

        const listItems = vectorEntries.map(createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default class VectorList extends React.Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.state = this.props.context || window.APP_STATE ||
            {
                items: []
            };
    }

    addItem(e) {
        let itemArray = this.state.items;
        console.log(itemArray);

        itemArray.push(
            {
                textPre: this._inputPre.value,
                textPost: this._inputPost.value,
                key: Date.now()
            }
        );

        this.setState({
            items: itemArray
        });

        this._inputPre.value = "";
        this._inputPost.value = "";
        e.preventDefault();
    }

    render() {
        const listStyle = {
            listStyleType: 'square',
            display: 'inline-block',
            fontSize: '16px',
            paddingRight: '10px'
        };
        const text_style = {
            textAlign:'center'
        };
        const inputStyle = {
            margin: '10px'
        };
        return (
            <div className="col">

            <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                    <h4 style={text_style}> Given two pairs of corresponding cartesian points,
                        calculate the optimal tranlation and rotation between them.
                        The calculator will (soon) implement the following algorithm:</h4>
                    <ul style={listStyle}>
                        <li>Check that given input matrices are of the same dimension.</li>
                        <li>Calculate the centroid for each matrix, i.e. take
                            the average of the rows, and return the result as a vector.</li>
                        <li>From each row in each matrix, subtract the centroid.
                            In effect, shift each set so that it's centroid is at the
                            origin.&nbsp;</li>
                        <li>Calculate a third matrix H as the product of the pre and
                            post translation matrices</li>
                        <li>Take the singular value decomposition of H</li>
                        <li>Display the optimal transformation calcualted.</li>
                    </ul>
                </div>
                <div className="col-md-3">
                </div>
            </div>
            <div className="row">
                <br/>
            </div>
            <div className="row">
                <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                                <input style={inputStyle} ref={(a) => this._inputPre = a}
                                       placeholder="Pre Vector">
                                </input>
                                <input style={inputStyle} ref={(a) => this._inputPost = a}
                                       placeholder="Post Vector">
                                </input>
                            <button type="submit">add</button>
                    </form>
                </div>
                </div>
            </div>
            <VectorItems entries={this.state.items}/>

            </div>
        );
    }
}
