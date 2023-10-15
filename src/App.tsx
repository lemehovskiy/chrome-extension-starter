import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useDomEvaluator from "./hooks/useDomEvaluator";
import {
  MessageTypes,
  GetPageTitle,
  SetPageTitle,
} from "./chromeServices/types";
import useStorageState from "./hooks/useStorageState";

function App() {
  const { evaluate: getPageTitle } = useDomEvaluator<GetPageTitle>(
    MessageTypes.GET_PAGE_TITLE,
  );
  const { evaluate: setPageTitle } = useDomEvaluator<SetPageTitle>(
    MessageTypes.SET_PAGE_TITLE,
  );

  const [pageTitleState, setPageTitleState] = useState("");

  const [testStorageString, setTestStorageString] = useStorageState(
    "My storage string",
    "myStorageKey",
  );

  useEffect(() => {
    const fetchData = async () => {
      const title = await getPageTitle();
      if (title) {
        setPageTitleState(title);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p className="page-title">
          Page title is:
          <input
            value={pageTitleState}
            onChange={(e) => {
              setPageTitle({ title: e.target.value });
              setPageTitleState(e.target.value);
            }}
          />
        </p>
        <p className="page-title">
          Storage string is:
          <input
            value={testStorageString}
            onChange={(e) => {
              setTestStorageString(e.target.value);
            }}
          />
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
