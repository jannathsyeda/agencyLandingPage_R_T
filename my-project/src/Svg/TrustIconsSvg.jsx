import React from "react";

export default function TrustIconsSvg({
  className,
  fill,
  viewBox,
  xmlns,
  fillRule,
  d,
  clipRule,
}) {
  return (
    <svg class={className} fill={fill} viewBox={viewBox} xmlns={xmlns}>
      <path fill-rule={fillRule} d={d} clip-rule={clipRule}></path>
    </svg>
  );
}
