import react from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import NeuButton, { NeuButtonProps } from "./neuButton";
import { ButtonSize, ButtonType } from "../Button/button";
import { NeuButtonType } from "../../types/neu";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/NeuButton",
  component: NeuButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof NeuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NeuButtonTypes: Story = {
  name: "按钮类型",
  args: {
    btnType: ButtonType.Primary,
  },
  render: () => (
    <div className="flex-md">
      <NeuButton neuType={NeuButtonType.Embossed} btnType={ButtonType.Primary}>
        Primary
      </NeuButton>
      <NeuButton btnType={ButtonType.Default}>Default</NeuButton>
      <NeuButton btnType={ButtonType.Danger}>Danger</NeuButton>
      <NeuButton btnType={ButtonType.Link}>Danger</NeuButton>
    </div>
  ),
};

export const NeuButtonStates: Story = {
  name: "禁用状态",
  args: {
    btnType: ButtonType.Primary,
    themeColorHex: "#fedfa9",
  },
  render: () => (
    <div className="flex-md">
      <NeuButton disabled btnType={ButtonType.Primary}>
        Primary
      </NeuButton>
      <NeuButton disabled btnType={ButtonType.Default}>
        Default
      </NeuButton>
      <NeuButton disabled btnType={ButtonType.Danger}>
        Danger
      </NeuButton>
      <NeuButton disabled btnType={ButtonType.Link}>
        Danger
      </NeuButton>
    </div>
  ),
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NeuButtonSizes: Story = {
  name: "按钮尺寸",
  args: {
    btnType: ButtonType.Primary,
  },
  render: () => (
    <div className="flex-md">
      <NeuButton size={ButtonSize.Large} btnType={ButtonType.Primary}>
        Large
      </NeuButton>
      <NeuButton btnType={ButtonType.Primary}>Default</NeuButton>
      <NeuButton size={ButtonSize.Small} btnType={ButtonType.Primary}>
        Small
      </NeuButton>
      <NeuButton size={ButtonSize.Mini} btnType={ButtonType.Primary}>
        Mini
      </NeuButton>
    </div>
  ),
};
