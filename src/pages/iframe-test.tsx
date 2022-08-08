import * as React from "react";

const IframeTest = () => {
  const [width, setWidth] = React.useState<number>(890);
  const [height, setHeight] = React.useState<number>(700);
  const [src, setSrc] = React.useState<string>("");

  const iframeRef = React.useRef<any>();

  const onSetSrc = () => {
    if (src.length === 0) {
      return;
    }

    iframeRef.current.src = src;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
          marginBottom: 20,
          gap: 10,
        }}
      >
        <input
          type="number"
          value={width}
          onChange={(e) => {
            setWidth(Number(e.target.value));
          }}
          placeholder="Width"
        />
        <input
          type="height"
          value={height}
          onChange={(e) => {
            setHeight(Number(e.target.value));
          }}
          placeholder="Height"
        />

        <input
          type="height"
          value={src}
          onChange={(e) => {
            setSrc(e.target.value);
          }}
          placeholder="Source"
        />
        <button onClick={onSetSrc} type="button" disabled={src.length === 0}>
          Set source
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          ref={iframeRef}
          width={width}
          height={height}
          title="Untitled"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </>
  );
};

export default IframeTest;
