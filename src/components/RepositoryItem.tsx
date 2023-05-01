import { Collapse, Tag, Row, Col, Space, Button } from "antd";
import { Repository } from "../types/Repository";
import { GithubOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

export const RepositoryItem = (repo: Repository) => {
  const handleClick = () => {
    window.location.href = repo.html_url;
  };

  return (
    <Collapse collapsible="header" bordered={false} className="bg-darker">
      <Panel
        key={repo.id}
        header={
          <Row style={{ width: "100%" }}>
            <Space size="middle">
              <Col>
                <h3 className="color-white m0">{repo.name}</h3>
              </Col>
              <Col>
                <Tag color="green">{repo.visibility}</Tag>
              </Col>
            </Space>
          </Row>
        }
        extra={
          <Button
            size="small"
            onClick={handleClick}
            shape="circle"
            icon={<GithubOutlined onClick={handleClick} />}
          />
        }
      >
        <Row>
          <Col>
            <Row>
              <Col className="color-white">
                <span>Last update:</span>
              </Col>
            </Row>
            <Row>
              <Col className="color-white">
                <span>Size:</span>
              </Col>
            </Row>
          </Col>
          <Col offset={1}>
            <Row>
              <Col className="color-white">
                <strong>{repo.updated_at}</strong>
              </Col>
            </Row>
            <Row>
              <Col className="color-white">
                <strong>{repo.size} KB</strong>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          {repo.topics.map((topic) => (
            <Tag color="blue">{topic}</Tag>
          ))}
        </Row>
      </Panel>
    </Collapse>
  );
};
