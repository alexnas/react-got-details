import { Col, Row } from 'reactstrap';

const RowBlock = ({ leftBlock, rightBlock }) => {
  return (
    <Row>
      <Col md='6'>{leftBlock}</Col>
      <Col md='6'>{rightBlock}</Col>
    </Row>
  );
};

export default RowBlock;
