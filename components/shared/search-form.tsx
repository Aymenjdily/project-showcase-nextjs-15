import Form from "next/form";

import { IconSearch } from "@tabler/icons-react";

import { Button } from "../ui/button";
import SearchFormReset from "./search-form-reset";

const SearchForm = ({ query }: { query: string }) => {
  return (
    <Form
      action="/"
      scroll={false}
      className="search-form flex w-full items-center justify-between rounded-full border-4 bg-secondary px-5 py-3"
      name="search-form"
    >
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="bg-transparent outline-none"
        placeholder="Search projects"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <Button variant={"primary"} size={"icon"}>
          <IconSearch className="size-10" />
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
