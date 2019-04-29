import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input,Button } from 'reactstrap';

export default class Formulaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            globalTitle :'Mon formulaire'
        };
        this.submitForm = this.submitForm.bind(this);
        
    }
    // binded with fx arrow
    handleTitleChange = event => {
        this.setState({title: event.target.value})
    }
    // binded in constructor
    submitForm(e) {
        e.preventDefault();
        console.log('Le formulaire a été rendu');
        this.setState({globalTitle: this.state.title})    
    }
    componentDidMount() {
        console.log('Entrée dans componentDidMount');
        console.log ('Titre changé')
        }

render() {
    console.log('Entrée dans render');
    return (
        <div>
            <Container>
                <h1> {this.state.globalTitle}</h1>
                <Form onSubmit={this.submitForm}> 
                {/* onSubmit on <Form> not on <Button> */}
                    <FormGroup>
                        <Label for="title">Text presentation</Label>
                        <Input
                            type="textarea"
                            name="title"
                            id="title"
                            placeholder="Write your title here"
                            onChange={this.handleTitleChange}
                            value={this.state.title}>
                        </Input>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Container>
        </div>

        
    )
}

}