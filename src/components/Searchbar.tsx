import { useState } from "react";
import { Form, Input } from "antd";
import { User } from "../types/User";

type SearchbarProps = {
  setUser: (user: User) => void;
  setIsLoading : (isLoadinL: boolean) => void;
}

export const Searchbar = (props: SearchbarProps) => {
  const [ error, setError ] = useState('');

  async function handleSearch(value: string) {
    props.setIsLoading(true);
    const response = await fetch('https://api.github.com/users/' + value);

    if (response.status === 200) {
      setError('');
      const data = await response.json();
      props.setUser(data);
    } else if (response.status === 404) {
      setError('ERROR 404: User not found!');
    } else {
      setError('Unknown error!');
    }

    props.setIsLoading(false);
  };

  return (
    <Form.Item help={error}>
      <Input.Search size='large' placeholder="input search text" onSearch={handleSearch} status={error === '' ? '' : 'error'} enterButton />
    </Form.Item>
  )
};
