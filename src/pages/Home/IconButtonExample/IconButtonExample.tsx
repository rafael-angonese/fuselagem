import { Check } from "phosphor-react";
import React from "react";
import Badge from "../../../components/Badge/Badge";
import FormControl from "../../../components/Forms/FormControl/FormControl";
import IconButton from "../../../components/IconButton/IconButton";

const IconButtonExample: React.FC = () => {
  return (
    <>
      <h1 className="mt-8 mb-2">Icon Button</h1>
      <div className="space-x-4 flex items-center">
        <FormControl>
          <IconButton>
            <Check />
          </IconButton>
        </FormControl>

        <FormControl>
          <IconButton rounded>
            <Check />
          </IconButton>
        </FormControl>
      </div>

      <h1 className="mt-8">Colors</h1>
      <div className="space-x-4 flex items-center">
        <IconButton color="default">
          <Check />
        </IconButton>
        <IconButton color="primary">
          <Check />
        </IconButton>
        <IconButton color="secondary">
          <Check />
        </IconButton>
        <IconButton color="success">
          <Check />
        </IconButton>
        <IconButton color="error">
          <Check />
        </IconButton>
        <IconButton color="warning">
          <Check />
        </IconButton>

        <IconButton rounded color="default">
          <Check />
        </IconButton>
        <IconButton rounded color="primary">
          <Check />
        </IconButton>
        <IconButton rounded color="secondary">
          <Check />
        </IconButton>
        <IconButton rounded color="success">
          <Check />
        </IconButton>
        <IconButton rounded color="error">
          <Check />
        </IconButton>
        <IconButton rounded color="warning">
          <Check />
        </IconButton>
      </div>

      <h1 className="mt-8">Colors</h1>
      <div className="space-x-4 flex items-center">
        <IconButton outlined color="default">
          <Check />
        </IconButton>
        <IconButton outlined color="primary">
          <Check />
        </IconButton>
        <IconButton outlined color="secondary">
          <Check />
        </IconButton>
        <IconButton outlined color="success">
          <Check />
        </IconButton>
        <IconButton outlined color="error">
          <Check />
        </IconButton>
        <IconButton outlined color="warning">
          <Check />
        </IconButton>

        <IconButton rounded outlined color="default">
          <Check />
        </IconButton>
        <IconButton rounded outlined color="primary">
          <Check />
        </IconButton>
        <IconButton rounded outlined color="secondary">
          <Check />
        </IconButton>
        <IconButton rounded outlined color="success">
          <Check />
        </IconButton>
        <IconButton rounded outlined color="error">
          <Check />
        </IconButton>
        <IconButton rounded outlined color="warning">
          <Check />
        </IconButton>
      </div>

      <h1 className="mt-8">Sizes</h1>
      <div className="space-x-4 flex items-center">
        <IconButton size="xs">
          <Check />
        </IconButton>
        <IconButton size="sm">
          <Check />
        </IconButton>
        <IconButton size="md">
          <Check />
        </IconButton>
        <IconButton size="lg">
          <Check />
        </IconButton>
        <IconButton size="xl">
          <Check />
        </IconButton>

        <IconButton rounded size="xs">
          <Check />
        </IconButton>
        <IconButton rounded size="sm">
          <Check />
        </IconButton>
        <IconButton rounded size="md">
          <Check />
        </IconButton>
        <IconButton rounded size="lg">
          <Check />
        </IconButton>
        <IconButton rounded size="xl">
          <Check />
        </IconButton>
      </div>
    </>
  );
};

export default IconButtonExample;
