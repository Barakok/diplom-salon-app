import React, {useEffect} from 'react';
import { ListGroup } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';
import OrderListItem from '../components/orderListItem';
import {useDispatch, useSelector} from "react-redux";
import {loadingOrdersAction} from "../actions/loadingOrderActions";
import Loader from "../components/Loader";


const MyAccount = ({match}) => {
  const dispatch = useDispatch();
  const loadingOrders = useSelector(state => state.loadingOrders);
  const {loading, error, orders} = loadingOrders;
  useEffect(() => {
    dispatch(loadingOrdersAction(match.params.userId));
  },[dispatch, match]);
  return (
    <Container className="my-accaunt">
      <Row>
        <Col className="justify-content-center mt-2">
          <h1 style={{textAlign: 'center'}}>Мои Услуги</h1>
        </Col>
      </Row>
      <Row>
        <Col className="px-0">  
        <ListGroup>
        {loading ? <Loader/> : orders.map((item) => {
            return <OrderListItem order={item}/>
        })}
        </ListGroup>
        </Col>
      </Row>      
    </Container>
  );
}

export default MyAccount;

