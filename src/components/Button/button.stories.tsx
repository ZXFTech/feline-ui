import react from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button, { ButtonProps, ButtonSize, ButtonType } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ButtonTypes: Story = {
  name: "按钮类型",
  args: {
    btnType: ButtonType.Primary,
  },
  render: () => (
    <div className="flex-md">
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button btnType={ButtonType.Default}>Default</Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button btnType={ButtonType.Link}>Danger</Button>
    </div>
  ),
};

export const ButtonStates: Story = {
  name: "禁用状态",
  args: {
    btnType: ButtonType.Primary,
  },
  render: () => (
    <div className="flex-md">
      <Button disabled btnType={ButtonType.Primary}>
        Primary
      </Button>
      <Button disabled btnType={ButtonType.Default}>
        Default
      </Button>
      <Button disabled btnType={ButtonType.Danger}>
        Danger
      </Button>
      <Button disabled btnType={ButtonType.Link}>
        Danger
      </Button>
    </div>
  ),
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ButtonSizes: Story = {
  name: "按钮尺寸",
  args: {
    btnType: ButtonType.Primary,
  },
  render: () => (
    <div className="flex-md">
      <Button size={ButtonSize.Large} btnType={ButtonType.Primary}>
        Large
      </Button>
      <Button btnType={ButtonType.Primary}>Default</Button>
      <Button size={ButtonSize.Small} btnType={ButtonType.Primary}>
        Small
      </Button>
      <Button size={ButtonSize.Mini} btnType={ButtonType.Primary}>
        Mini
      </Button>
    </div>
  ),
};
