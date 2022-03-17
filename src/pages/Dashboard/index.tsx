import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Link,
  SignUpText,
  Title,
} from "./styles";

const DashboardContent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>
        Cacau Digital
        <br /> Wallet
      </Title>

      <Link>
        <SignUpText onClick={() => navigate("/signup", { replace: false })}>
          {'lang.NEW_ACCOUNT'}
        </SignUpText>
      </Link>
    </Container>
  );
};

const Dashboard: React.FC = () => {
  return <DashboardContent />
};

export default Dashboard;
