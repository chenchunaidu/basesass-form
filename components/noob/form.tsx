"use client";
import React, { FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const NoobForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(JSON.stringify({ name, email }, null, 2));
  };

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-sm">
        <div className="font-semibold">Noob Form</div>
        <div>
          <label>
            Name:
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
