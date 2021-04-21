import React from "react";
import Container from "container/Container";

<Form>
  <Form.Check 
    type="switch"
    id="custom-switch"
    label="Check this switch"
  />
  <Form.Check 
    disabled
    type="switch"
    label="disabled switch"
    id="disabled-custom-switch"
  />
</Form>


class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  handleClick(){
    this.sesState(state => {
      isToggleOn: !state.isToggleOn
    });
    console.log(is)
  }

  render() {
    return (
      <Container>
          <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Custom select</Form.Label>
              <Form.Control as="select" custom>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
              </Form.Control>
          </Form.Group>
          </Form>
      </Container>
    );
  }
}

export {SelectBox};