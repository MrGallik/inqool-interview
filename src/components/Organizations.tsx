import { Card, Space } from "antd";
import { Organization } from "../types/Organization";
import { OrganizationItem } from "./OrganizationItem";
import { Empty } from "./Empty";

type OrganizationsProps = {
  orgs: Organization[];
};

export const Organizations = ({ orgs }: OrganizationsProps) => {
  return (
    <Card
      title={<h2 className="color-white">Organizations</h2>}
      className="bg-dark color-white rounded"
    >
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        {
        orgs.length !== 0
        ? orgs.map((org) => (<OrganizationItem {...org} key={org.id} />))
        : <Empty message="organizations" />
        }
      </Space>
    </Card>
  );
};
