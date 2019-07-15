import React, {useState} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import media from '../../helpers/media';

import { UnderlineLink } from '../underline-link';

import Modal from '../modal';

const ModalContent = styled.div`
  padding: 20px 30px;
`;

const Title = styled.p`
  font-family: Lato;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  color: rgb(44, 43, 63);
`;

const ModalContentCentered = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 34px 38px 55px 38px;
`;

const Text = styled.p`
  font-family: Lato;
  font-size: 16px;
  line-height: 1.63;
  color: rgb(112, 112, 122);
  margin-top: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;
`;

const Label = styled.label`
  font-family: Lato;
  font-size: 16px;
  line-height: 1.75;
  color: rgb(44, 43, 63);
`;

const Input = styled.input`
  height: 42px;
  border-radius: 3px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.06);
  border: solid 1px rgba(104, 104, 113, 0.25);
  background-color: rgb(255, 255, 255);
  padding: 0 10px;
  margin: 5px 0 0 0;
  font-size: 16px;
  font-family: Lato;
  color: rgb(112, 112, 122);
  -webkit-appearance: none;
`;

const Submit = styled.input`
  font-family: Lato;
  height: 52px;
  border-radius: 5px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.06);
  background-color: rgb(75, 107, 220);
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  margin: 30px 0 20px 0;
  -webkit-appearance: none;
`;

const SubscribeModal = ({onClose}) => {
  const [email, setEmail] = useState();
  const [isSubscribed, setIsSubscribed] = useState();

  function handleInputChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    if (window._cio) {
      window._cio.identify({
        email,
        id: email,
        created_at: Math.floor(Date.now() / 1000),
      });
      window._cio.track('marketing-subscribe');
    }

    setIsSubscribed(true);
  }

  return (
    <Modal type="small" onClose={onClose}>
      {isSubscribed ? (
        <ModalContentCentered>
          <Title>
            You’re subscribed!
          </Title>
          <Text>
            We’ll keep you updated with the latest Dock news and updates.
            <br /><br />
            In the meantime, you can find the most recent news at the Dock blog.
          </Text>
          <UnderlineLink href="https://blog.dock.io">
            Read the latest Dock news
          </UnderlineLink>
        </ModalContentCentered>
      ) : (
      <ModalContent>
        <Title>
          Subscribe
        </Title>
        <Text>
          Get the latest news and updates about Dock.
        </Text>

        <Form onSubmit={handleSubmit}>
          <Label>Email</Label>
          <Input type="email" onChange={handleInputChange} />
          <Submit type="submit" value="Submit" />
        </Form>
      </ModalContent>
      )}
    </Modal>
  );
};

export default SubscribeModal;
