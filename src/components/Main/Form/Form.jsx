import Button from "@components/Button";
import Input from "./Input";

export default function Form() {
  return (
    <form>
      <Input />
      <Button text="Submit" className="button-add" />
    </form>
  );
}
