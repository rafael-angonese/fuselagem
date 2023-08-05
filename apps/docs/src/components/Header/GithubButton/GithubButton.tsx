import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const GithubButton: React.FC = () => {
  return (
    <Link target="_blank" href={"https://github.com/rafael-angonese/fuselagem"}>
      <Github />
    </Link>
  );
};

export default GithubButton;
