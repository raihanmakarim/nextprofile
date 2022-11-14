// "use client";
// import { useState, useEffect } from "react";
import style from "./style.module.scss";
// import { collection, onSnapshot } from "firebase/firestore";
// import { db } from "../config/firebase";

async function ambilPostingan() {
  let products = await fetch("http://localhost:3000/api/home");
  return products.json();
}

export async function generateStaticProps() {
  const data = await ambilPostingan();
  return {
    props: {
      data,
    },
  };
}

const Page = async () => {
  const s = style;
  const { title, content } = await ambilPostingan();

  // const [data, setdata] = useState([]);
  // useEffect(() => {
  //   const q = collection(db, "page");

  //   onSnapshot(q, (snapshot) => {
  //     const datahome = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setdata(datahome);
  //   });
  // }, []);

  return (
    <div className={s.container}>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Page;
