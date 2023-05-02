import { Row, Col } from "antd";

type EmptyProps = {
  message: string;
};

export const Empty = (props: EmptyProps) => {
  return (
    <Row justify="center">
      <Col>
        <h1>User has no {props.message}.</h1>
      </Col>
    </Row>
  );
};
