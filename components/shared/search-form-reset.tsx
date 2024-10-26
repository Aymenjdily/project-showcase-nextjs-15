"use client";

import Link from "next/link";

import { IconX } from "@tabler/icons-react";

const SearchFormReset = () => {
  const handleReset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) {
      form.reset();
    }
  };

  return (
    <button type="reset" onClick={handleReset}>
      <Link href={"/"}>
        <IconX />
      </Link>
    </button>
  );
};

export default SearchFormReset;
