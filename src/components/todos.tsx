/**
 * Add ordered & offset
 * https://getbootstrap.com/docs/4.0/layout/grid/#order-classes
 *
 * Vertical & horizontal => Remove dublicated code
 */

export type Viewports = "xs" | "md";
export const viewports: Array<Viewports> = ["xs", "md"];

export function createColumn<TViewports extends string = Viewports>(
  ...args: Array<string>
) {
  type Visible = "hide" | "show";
  type Props = {
    viewports: Visible | Partial<{ [breakpoint in TViewports]: Visible }>;
  };
  return (props: Props) => {
    return <span>a</span>;
  };
}
export const Column = createColumn<"XS" | "MD" | "XL">("XS", "MD", "XXXXL");

const z = <Column viewports={"hide"} />;
