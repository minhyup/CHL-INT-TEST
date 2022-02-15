import React from "react";
import styled from "@emotion/styled";
import { ComponentStory } from "@storybook/react";
import { Icon } from "./Icon";
import { IIcon } from "./Icon.types";

export default {
  title: "Elements/아이콘",
  component: Icon,
  parameters: {
    nextRouter: {
      pathname: "/mycontract",
    },
  },
};

const Container = styled.div`
  div + div {
    margin-bottom: 20px;
  }
`;
const Template: ComponentStory<typeof Icon> = (
  props: IIcon
): React.ReactElement => {
  return (
    <Container>
      <div>
        <h2>bell</h2>
        <Icon className="bell" />
      </div>
      <div>
        <h2>help</h2>
        <Icon className="help" />
      </div>
      <div>
        <h2>notice</h2>
        <Icon className="notice" />
      </div>
      <div>
        <h2>arrow</h2>
        <Icon className="arrow" />
      </div>
      <div>
        <h2>mycontract</h2>
        <Icon className="mycontract" />
      </div>
      <div>
        <h2>mycontract-active</h2>
        <Icon className="mycontract-active" />
      </div>
      <div>
        <h2>products-active</h2>
        <Icon className="products" />
      </div>
      <div>
        <h2>products-active</h2>
        <Icon className="products-active" />
      </div>
      <div>
        <h2>menu-active</h2>
        <Icon className="menu" />
      </div>
      <div>
        <h2>menu-active</h2>
        <Icon className="menu-active" />
      </div>
      <div>
        <h2>test</h2>
        <Icon {...props} />
      </div>
    </Container>
  );
};

export const StoryJsx = Template.bind({});
StoryJsx.storyName = "기본";
StoryJsx.args = {
  className: "bell",
};
