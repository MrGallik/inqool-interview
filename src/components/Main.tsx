import { useState } from "react";
import { Row, Col, Spin, Space } from "antd";
import { Searchbar } from "./Searchbar";
import { User } from "../types/User";
import { UserProfile } from "./UserProfile";
import { Repositories } from "./Repositories";
import "../assets/styles/style.css";
import { Repository } from "../types/Repository";
import { Organization } from "../types/Organization";
import { Organizations } from "./Organizations";

export const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(undefined as User | undefined);
  const [repos, setRepos] = useState(undefined as Repository[] | undefined);
  const [orgs, setOrgs] = useState([] as Organization[] | undefined);

  return (
    <>
      <Row justify="center">
        <Col span={24} lg={15}>
          <Searchbar
            setUser={setUser}
            setRepos={setRepos}
            setOrgs={setOrgs}
            setIsLoading={setIsLoading}
          />
        </Col>
      </Row>
      <Row justify="center">
        {isLoading ? (
          <Spin size="large" />
        ) : (
          user !== undefined && (
            <Col span={24} lg={15}>
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <UserProfile {...user} />
                {repos !== undefined && <Repositories repos={repos} />}
                {orgs !== undefined && <Organizations orgs={orgs} />}
              </Space>
            </Col>
          )
        )}
      </Row>
    </>
  );
};
