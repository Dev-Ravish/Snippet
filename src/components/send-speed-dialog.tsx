"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";

const SendSpeechDialog = ({ transcript }: { transcript: string }) => {
  const [open, setOpen] = useState(true);
  const [bullet, setBullet] = useState(false);
  const [text, setText] = useState(false);
  function handleContinue() {
    setOpen(false);
    console.log("text: ", text, "bullet: ", bullet);
  }
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>What do you want?</DialogTitle>
            <DialogDescription className="flex justify-between p-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="bullet-point"
                  checked={bullet}
                  onCheckedChange={() => setBullet((prev) => !prev)}
                />
                <label
                  htmlFor="bullet-point"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Summary in points
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="text"
                  checked={text}
                  onCheckedChange={() => setText((prev) => !prev)}
                />
                <label
                  htmlFor="text"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Summary in text
                </label>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div>
            <ScrollArea className="h-[200px] rounded-md border p-4">
              {transcript}
            </ScrollArea>
          </div>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleContinue}>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SendSpeechDialog;
