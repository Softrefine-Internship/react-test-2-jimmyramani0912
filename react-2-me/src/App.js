import Styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/Globalstyle/Globalstyle";
import HeadingTitle from "./components/HeadingTitle/HeadingTitle";
import Form from "./components/Form/Form";
import Action from "./components/Action/Action";
import React, { useState } from "react";

const Container = Styled.div`
height: 100vh;
overflow: auto;
`;

function App() {
  // const theme = {
  //   color: {
  //     textcolor: "red",
  //   },
  // };
  const [showForm, setShowForm] = useState(true);
  const [Data, setData] = useState({
    input: [],
    icons: [],
    social: [],
  });

  const handleGenerateReadme = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = (data) => {
    setData(data);
    setShowForm(false);
  };

  return (
    <>
      {/* <ThemeProvider> */}
      <Container>
        <GlobalStyle />
        <HeadingTitle />
        {showForm ? (
          <>
            <Form onSubmit={handleFormSubmit} />
          </>
        ) : (
          <>
            <Action Data={Data} handleGenerateReadme={handleGenerateReadme} />
          </>
        )}
      </Container>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
