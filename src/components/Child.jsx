import { Image } from "antd";

function Child({ url }) {
  return (
    <div className="child">
      <Image width={943} height={450} src={url} />
    </div>
  );
}

export default Child;
