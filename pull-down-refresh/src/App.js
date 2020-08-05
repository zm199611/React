import React, { useEffect, useRef } from 'react';
import pullToRefresh from './PullDown';
import logo from './logo.svg';
import './App.css';
const { init } = pullToRefresh()

function App() {
  const contentRef = useRef();
  const ptrRef = useRef();
  const bodyRef = useRef();
  useEffect(() => {
    init({
      contentEl: contentRef.current,
      contentEl: ptrRef.current,
      contentEl: bodyRef.current
    });
  }, [])
  return (
      <div className="body-wrap">
        <div ref={ptrRef} className="ptr-wrap" >
          <div className="loading"></div>
        </div>
        <header ref={contentRef} className="content-wrap"></header>
      </div>
  );
}

export default App;
