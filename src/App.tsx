import React, { useEffect } from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import NeuButton from "./components/NeuButton/neuButton";
import { NeuButtonType } from "./types/index";
import { defaultThemeColor, setThemeColor } from "./utils/theme";

function App() {
  const onThemeChangeClick = (color: string) => {
    setThemeColor(color);
  };

  useEffect(() => {
    setThemeColor(defaultThemeColor.default);
  }, []);
  return (
    <div className="app neu-light">
      <div>
        <NeuButton
          neuType={NeuButtonType.Embossed}
          style={{ background: defaultThemeColor.dark }}
          onClick={() => {
            onThemeChangeClick(defaultThemeColor.dark);
          }}
        >
          test
        </NeuButton>
        <NeuButton
          neuType={NeuButtonType.Embossed}
          style={{ background: defaultThemeColor.light }}
          onClick={() => {
            onThemeChangeClick(defaultThemeColor.light);
          }}
        >
          test
        </NeuButton>
        <NeuButton
          neuType={NeuButtonType.Embossed}
          style={{ background: defaultThemeColor.default }}
          onClick={() => {
            onThemeChangeClick(defaultThemeColor.default);
          }}
        >
          test
        </NeuButton>
      </div>
      <NeuButton
        themeColorHex="#fedfa9"
        size={ButtonSize.Small}
        btnType={ButtonType.Primary}
        neuType={NeuButtonType.Embossed}
      >
        primary
      </NeuButton>
      <NeuButton neuType={NeuButtonType.Embossed}>default</NeuButton>
      <NeuButton btnType={ButtonType.Danger} neuType={NeuButtonType.Embossed}>
        danger
      </NeuButton>
      <NeuButton
        size={ButtonSize.Large}
        btnType={ButtonType.Link}
        neuType={NeuButtonType.Embossed}
      >
        link
      </NeuButton>
      <Button btnType={ButtonType.Primary}>test</Button>
    </div>
  );
}

export default App;
