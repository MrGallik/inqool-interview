import { useState } from "react";
import { Card, Space, Row, Col, Button } from "antd";
import { Repository } from "../types/Repository";
import { RepositoryItem } from "./RepositoryItem";
import { Empty } from "./Empty";

type RepositoryProps = {
  repos: Repository[];
};

export const Repositories = ({ repos }: RepositoryProps) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => setShowAll(!showAll);

  const reposToShow = showAll ? repos : repos.slice(0, 3);

  return (
    <Card
      title={<h2 className="color-white">Repositories</h2>}
      className="bg-dark color-white rounded"
    >
      <Row>
        <Col span={24}>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            {repos.length !== 0 ? (
              reposToShow.map((repo) => (
                <RepositoryItem key={repo.id} {...repo} />
              ))
            ) : (
              <Empty message="repositories" />
            )}
            <Row justify="center">
              <Button
                type="ghost"
                onClick={handleShowAll}
                className="color-white"
              >
                {showAll ? "show less" : "show more"}
              </Button>
            </Row>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};
