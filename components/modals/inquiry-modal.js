import React, { useState } from 'react';
import styled from 'styled-components';
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

const Text = styled.p`
  font-family: Lato;
  font-size: 16px;
  line-height: 1.63;
  color: rgb(112, 112, 122);
  margin-top: 10px;
`;

const ModalContentCentered = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 34px 38px 55px 38px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 0;
`;

const Label = styled.label`
  font-family: Lato;
  font-size: 16px;
  line-height: 1.75;
  color: rgb(44, 43, 63);
  margin: 15px 0 2px 0;
`;

const Textarea = styled.textarea`
  height: 82px;
  border-radius: 3px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.06);
  border: solid 1px rgba(104, 104, 113, 0.25);
  background-color: rgb(255, 255, 255);
  padding: 10px;
  font-size: 16px;
  font-family: Lato;
  color: rgb(112, 112, 122);
`;

const Input = styled.input`
  height: 42px;
  border-radius: 3px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.06);
  border: solid 1px rgba(104, 104, 113, 0.25);
  background-color: rgb(255, 255, 255);
  margin: 5px 0 0 0;
  padding: 0 10px;
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

const InquiryModal = ({ onClose }) => {
  const [details, setDetails] = useState({});
  const [isSubscribed, setIsSubscribed] = useState();

  function handleInputChange(event) {
    details[event.target.name] = event.target.value;
    setDetails(details);
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    if (window._cio) {
      window._cio.identify(Object.assign(details, {
        id: details.email,
        created_at: Math.floor(Date.now() / 1000),
      }));
      window._cio.track('buildwithdock');
    }

    setIsSubscribed(true);
  }

  return (
    <Modal type="small" onClose={onClose}>
      {isSubscribed ? (
        <ModalContentCentered>
          <Title>
            We&apos;ll be in touch!
          </Title>
          <Text>
            Thanks for contacting us, we will get back to you shortly.
          </Text>
        </ModalContentCentered>
      ) : (
        <ModalContent>
          <Title>
          Join the Dock network
          </Title>

          <Form onSubmit={handleSubmit}>
            <Label>Name</Label>
            <Input type="text" name="name" onChange={handleInputChange} required />
            <Label>Email</Label>
            <Input type="email" name="email" onChange={handleInputChange} required />
            <Label>Phone number</Label>
            <Input type="text" name="phone" onChange={handleInputChange} required />
            <Label>Company website</Label>
            <Input type="text" name="website" onChange={handleInputChange} required />
            <Label>Tell us how you’d like to work with Dock</Label>
            <Textarea name="message" onChange={handleInputChange} />
            <Submit type="submit" value="Submit" />
          </Form>
        </ModalContent>
      )}
    </Modal>
  );
};

export default InquiryModal;
