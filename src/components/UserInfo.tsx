import { User } from "../types/User";
import { Card, Row, Col, Image, Tag, Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";

export const UserInfo = (user: User) => {
  const handleClick = () => {
    window.location.href = user.html_url;
  };

  return (
    <Card bordered={false} className="bg-dark rounded">
      <Row>
        <Col flex="200px" xs={{ flex: "150px" }}>
          <Image className="rounded" src={user.avatar_url} />
        </Col>
        <Col flex="auto" offset={1}>
          <Row align="middle">
            <Col>
              <h1 className="m0 color-white">{user.login}</h1>
            </Col>
            <Col offset={1}>
              <Tag color="green">{user.type}</Tag>
            </Col>
            <Col offset={1}>
              <h3 className="m0 color-white">{user.name}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tag color="blue">followers: {user.followers}</Tag>
            </Col>
            <Col>
              <Tag color="blue">following: {user.following}</Tag>
            </Col>
          </Row>
          <Row>
            <p className="color-white">{user.bio}</p>
          </Row>
          <Row>
            <Col flex="auto">
              <Row>
                <Col>
                  <span className="color-white">Created at: </span>
                </Col>
                <Col offset={1}>
                  <strong className="color-white">{user.created_at}</strong>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="color-white">Location: </span>
                </Col>
                <Col offset={1}>
                  <strong className="color-white">
                    {user.location ?? "unknown"}
                  </strong>
                </Col>
              </Row>
            </Col>
            <Col>
              <Button
                onClick={handleClick}
                shape="circle"
                icon={<GithubOutlined onClick={handleClick} />}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};
