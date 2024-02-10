import { useEffect } from "react";
import { ApiReference as VueComponent } from "@scalar/api-reference";
import { applyVueInReact } from "veaury";

const ApiReference = applyVueInReact(VueComponent);

export function ScalarApiRef() {
  return (
    // @ts-ignore
    <ApiReference
      configuration={{
        layout: "classic",
        searchHotKey: "", // doesn't look like it's disableable
        darkMode: true,
        spec: { url: "https://api.countify.fun/openapi.json" },
      }}
    />
  );
}
