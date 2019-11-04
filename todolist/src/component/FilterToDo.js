import React, {Component} from 'react';

class FilterToDo extends Component{
    state = {
        text: '',
        label: 'Filter'
    }

    onChange = (e) => {
        this.setState({
            title:  e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.filterToDo(this.state.title);
    }
    
    render(){
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="title"
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Filter Todo..." 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    value={this.state.label}
                    className="btn"
                    style= {{flex: '1'}}
                />
            </form>
        )
    }
}

export default FilterToDo;