import { Form, Input, Submit, SearchBox } from './Search.styled';
const Search = ({ submit }) => {
  return (
    <SearchBox>
      <Form onSubmit={e => submit(e)}>
        <Input type="text" name="search"></Input>
        <Submit type="submit">Пошук</Submit>
      </Form>
    </SearchBox>
  );
};
export default Search;
