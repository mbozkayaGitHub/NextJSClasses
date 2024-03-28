import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div> Hello World</div>
      <Link href="/about"> About Page </Link>
    </div>
  );
};

export default page;
