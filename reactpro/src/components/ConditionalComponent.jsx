import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  let message;
  const display = false;
  return display ? <Welcome /> : <Code />;
}
