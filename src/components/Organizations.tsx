import { Card, Space } from "antd";
import { Organization } from "../types/Organization";
import { OrganizationItem } from "./OrganizationItem";

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
        {orgs.map((org) => (
          <OrganizationItem {...org} key={org.id} />
        ))}
      </Space>
    </Card>
  );
};
