import * as React from "react";
import {Analytics} from "@vercel/analytics/react";

import {__PROD__} from "@/utils";

export function ScriptProviders() {
  return (
    <>
      {__PROD__ && <Analytics />}
    </>
  );
}
