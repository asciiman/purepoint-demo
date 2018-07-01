import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../components/Header';
import Button from '../components/Button';
import ResultPanel from '../components/ResultPanel';

const Wrapper = styled.div`
  text-align: center;
`;
const HeaderText = styled.div`
  padding: 0px 24px;
`;
const Container = styled.div`
  padding: 32px 32px 0px 32px;
`;
const Form = styled.form`
  display: flex;
  margin-bottom: 30px;
`;
const Input = styled.input`
  flex: 1 1 auto;
`;
const ResultText = styled.div`
  text-align: left;
`;

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchRecipes } = this.props;
    fetchRecipes('');
  }

  handleChange(event) {
    const { value } = event.target;
    const { fetchRecipes } = this.props;
    this.setState({ value });
    fetchRecipes(value);
  }

  handleSubmit(event) {
    const { value } = this.state;
    const { fetchRecipes } = this.props;
    fetchRecipes(value);
    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    const { loading, error, recipes } = this.props;

    let results;
    if (loading) {
      results = (
        <ResultText>
          Loading...
        </ResultText>
      );
    } else if (error) {
      results = (
        <ResultText>
          Error connecting to server.
        </ResultText>
      );
    } else if (recipes.length === 0) {
      results = (
        <ResultText>
          {`No recipes found with '${value}'`}
        </ResultText>
      );
    } else {
      results = <ResultPanel data={recipes} />;
    }

    return (
      <Wrapper>
        <Header>
          <HeaderText>
            {'Recipe Finder'}
          </HeaderText>
          <Button label="Home" active />
        </Header>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              value={value}
              onChange={this.handleChange}
              placeholder="Search term"
            />
            <input type="submit" value="Search" />
          </Form>
          {results}
        </Container>
      </Wrapper>
    );
  }
}

App.propTypes = {
  fetchRecipes: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  recipes: PropTypes.arrayOf(PropTypes.object),
};

App.defaultProps = {
  fetchRecipes: () => {},
  loading: true,
  error: true,
  recipes: [],
};

export default App;
