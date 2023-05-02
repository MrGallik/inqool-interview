import { Card, Row, Col, Image, Button } from "antd";
import { Organization } from "../types/Organization";
import { GithubOutlined } from "@ant-design/icons";

export const OrganizationItem = (org: Organization) => {
  return (
    <Card className="bg-darker" bordered={false}>
      <Row>
        <Col flex="50px">
          <Image className="rounded" src={org.avatar_url} />
        </Col>
        <Col flex="auto" offset={1}>
          <Row align="middle" justify="space-between">
            <Col>
              <h3 className="color-white m0">{org.login}</h3>
            </Col>
            <Col>
              <Button
                size="small"
                // onClick={handleClick}
                shape="circle"
                icon={<GithubOutlined />}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="color-white">{org.description}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};
