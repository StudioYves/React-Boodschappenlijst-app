import React from "react"

class Inputfield extends React.Component {
    constructor() {
        super()
        this.state = {
            groceryInput: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.onSubmit(this.state.groceryInput)
    }


    render() {
        return (
            <div className="inputfield">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="groceryInput"
                        value={this.state.groceryInput}
                        placeholder="Vul je boodschappen in"
                        onChange={this.handleChange}
                        className="input-box"
                    />
                    <button className="button-inputfield">Voeg toe</button>
                </form>
            </div>
        )
    }
}

export default Inputfield