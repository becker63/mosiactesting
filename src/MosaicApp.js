import React from "react";
import { Mosaic, MosaicWindow } from "react-mosaic-component";

const TITLE_MAP = {
  a: "Left Window",
  b: "Top Right Window",
  c: "Bottom Right Window",
  new: "New Window"
};

const MosaicApp = () => (
  <Mosaic
    renderTile={(id, path) => (
      <MosaicWindow path={path} createNode={() => "new"} title={TITLE_MAP[id]}>
        <h1>{TITLE_MAP[id]}</h1>
      </MosaicWindow>
    )}
    initialValue={{
      direction: "row",
      first: "a",
      second: {
        direction: "column",
        first: "b",
        second: "c"
      }
    }}
  />
);

export default MosaicApp;
