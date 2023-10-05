import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import Button from "./Button/Button";
import ReactDOMServer from "react-dom/server";

const FlexButton = Styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 8.5vw;
`;

const BoxStyle = Styled.div`
  background-color: #f3f3f3;
  border: 1.4px solid black;
  margin: 3rem 8.5vw;
  color: black;
  padding: 2rem;
  font-size: 1.2rem;
  line-height: 1;
  display: flex;
  flex-direction: column;
`;

function Action({ Data, handleGenerateReadme }) {
  const [categories, setCategories] = useState();
  const [githubValue, setGithubValue] = useState("");
  const savedCategories = localStorage.getItem("categoriesIconData");
  const [copyButtonState, setCopyButtonState] = useState({
    icon: "copy-outline",
    title: "copy-markdown",
  });
  const [isButtonZoomed, setButtonZoomed] = useState(false);
  let url = "";
  let filteredData = [];
  const contentItems = [];
  const contentItems2 = [];

  useEffect(() => {
    const githubEntry = Data.social.find(
      (entry) => entry.title === "https://github.com/"
    );

    if (githubEntry) {
      setGithubValue(githubEntry.value);
      url = "";
    }

    if (savedCategories) {
      filteredData = JSON.parse(savedCategories)
        .map((category) => {
          const filteredIcons = category.icons.filter((icon) => icon.isChecked);
          if (filteredIcons.length > 0) {
            return {
              category: category.category,
              icons: filteredIcons,
            };
          }
          return null;
        })
        .filter(Boolean);
      setCategories(filteredData);
    }
  }, []);

  for (let i = 3; i <= 9; i += 3) {
    if (Data.input[i].value) {
      const title = Data.input[i].value;
      const linkTitle = Data.input[i + 1].value;
      const linkURL = Data.input[i + 2].value;

      contentItems.push(
        <>
          <br />
          <br />
          <code key={i}>
            - {title} [{linkTitle}]({linkURL})
          </code>
        </>
      );
    }
  }

  for (let i = 12; i <= 24; i += 2) {
    if (Data.input[i].value) {
      const title = Data.input[i].value;
      const content = Data.input[i + 1].value;
      contentItems2.push(
        <>
          <br />
          <br />
          <code key={i}>
            - {title} {content}
          </code>
        </>
      );
    }
  }
  const renderSkillsSocialLinks = (social) => {
    return social.map((item) =>
      item.title ? (
        <code>
          &lt;a href="{item.title + item.value}" target="blank"&gt;&lt;img
          align="center" src={item.logo}
          alt={item.value} height="30" width="40" /&gt; &lt;/a&gt;
        </code>
      ) : (
        <>
          <code>
            &lt;a href="{item.name}" target="blank" rel="noreferrer"&gt;&lt;img
            align="center" src= "{item.iconImage}" alt={item.name} width="40"
            height="40" /&gt; &lt;/a&gt;
          </code>
        </>
      )
    );
  };

  const mark = (
    <code
      style={{
        fontSize: "1.4rem",
        lineHeight: "1.5",
        color: "#1B212C",
        whiteSpace: "pre-line",
        width: "100%",
        overflow: "auto",
        wordWrap: "break-word",
      }}
    >
      <code>&lt;h1 align="center"&gt; {Data.input[0].value} &lt;/h1&gt;</code>
      <br />
      <code>&lt;h1 align="center"&gt;{Data.input[1].value}&lt;/h1&gt;</code>
      <br />
      <br />
      <code>
        &lt;p align="left"&gt; &lt;img src=
        {`https://komarev.com/ghpvc/?username=${githubValue}&label=Profile%20views&color=0e75b6&style=flat`}
        alt={githubValue}
        /&gt; &lt;/p&gt;
      </code>
      {contentItems}
      {contentItems2}
      <br />
      <br />
      <code>&lt;h3 align="left"&gt; Connect with me: &lt;/h3&gt;</code>
      <br />
      <code>&lt;p align="left"&gt;&lt;/p&gt;</code>
      <br />
      {renderSkillsSocialLinks(Data.social)}
      <br />
      <br />
      <code>&lt;h3 align="left"&gt; Languages and Tools: &lt;/h3&gt;</code>
      <br />
      <code>&lt;p align="left"&gt;&lt;/p&gt;</code>
      <br />
      {categories &&
        categories.map((category) => renderSkillsSocialLinks(category.icons))}
    </code>
  );

  const formateMeark = (details) => {
    const markdownString = ReactDOMServer.renderToStaticMarkup(details);
    const result = markdownString
      .replace(/<code[^>]*>/g, "")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/<\/?code>/g, "")
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .replace(/<br\/?>/g, "\n");
    return result;
  };

  const handleCopyMarkdown = () => {
    const unescapedString = formateMeark(mark);
    navigator.clipboard.writeText(unescapedString);
    setCopyButtonState({
      icon: "checkmark-outline",
      title: "copied",
    });
    setButtonZoomed(true);

    setTimeout(() => {
      setButtonZoomed(false);
    }, 300);
  };

  const handleDownloadMarkdown = () => {
    const unescapedString = formateMeark(mark);
    const blob = new Blob([unescapedString], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "readme.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <FlexButton>
        <Button
          Icon={"arrow-back-outline"}
          Title={"back to edit"}
          onClick={handleGenerateReadme}
        />
        <Button
          Icon={copyButtonState.icon}
          Title={copyButtonState.title}
          onClick={handleCopyMarkdown}
          isGreen={copyButtonState.icon === "checkmark-outline"}
          isZoomed={isButtonZoomed}
        />
        <Button
          Icon={"download-outline"}
          Title={"download markdown"}
          onClick={handleDownloadMarkdown}
        />
      </FlexButton>
      <BoxStyle>{mark}</BoxStyle>
    </div>
  );
}

export default Action;
