import { User } from "../types/User";
import { UserInfo } from "./UserInfo";
import { Row, Col } from "antd";

export const UserProfile = (user: User) => {
  return (
    <Row>
      <Col span={24}>
        <UserInfo {...user} />
      </Col>
    </Row>
  )
}