declare module "react-vertical-timeline-component" {
  import React from "react";

  interface VerticalTimelineProps {
    lineColor?: string;
    layout?: "1-column-left" | "1-column-right" | "2-columns";
    children?: React.ReactNode;
    animate?: boolean;
  }

  interface VerticalTimelineElementProps {
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: string;
    icon?: React.ReactNode;
    iconStyle?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export class VerticalTimeline extends React.Component<VerticalTimelineProps> {}
  export class VerticalTimelineElement extends React.Component<VerticalTimelineElementProps> {}
}