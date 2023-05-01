import { useState } from "react";
import { Row, Col, Spin } from "antd";
import { Searchbar } from "./Searchbar";
import { User } from "../types/User";

export const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(undefined as User | undefined);

  return (
    <>
      <Row justify="center">
        <Col span={24} lg={15}>
          <Searchbar setUser={setUser} setIsLoading={setIsLoading} />
        </Col>
      </Row>
      <Row justify="center">
        {isLoading ? (
          <Spin size="large" />
        ) : (
          user !== undefined && (
            <Col span={24} lg={15}>
            </Col>
          )
        )}
      </Row>
    </>
  );
};
