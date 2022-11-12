import style from "./style.module.scss";
import { Suspense } from "react";

const Founder = async () => {
  const s = style;
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div className={s.container}>
        <h1>asfasfasfasf</h1>
        <p>asfasfasfasfasfasfasfasfsa</p>
      </div>
    </Suspense>
  );
};

export default Founder;
